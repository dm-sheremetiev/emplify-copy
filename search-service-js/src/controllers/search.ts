import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import * as contentful from 'contentful';
import { Client } from '@elastic/elasticsearch';
import { EntryCollection } from 'contentful';
import url from 'url';

import config from '../config';
import { IArticleFields, IInternalNavigationLink, IExternalNavigationLink, IUiPage, OverrideLinkOptions } from 'contentful-types';
import { IArticleIndex } from 'articleIndex';

const contentfulClient = contentful.createClient({
  space: config.contentful.space as string,
  accessToken: config.contentful.accessToken as string,
  environment: config.contentful.environment as string,
  resolveLinks: true,
  retryLimit: 1
});

const elasticClient = new Client({
  node: {
    url: new URL('http://localhost:9200'),
    headers: { 'Content-Type': 'application/x-ndjson' }
  }
});

const indexAlias = 'articles';
const indexAliasOld = 'articles-old';
const host = config.hostname;

/**
 * Handle /search.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function search(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const query = url.parse(req.url, true).query;
    const queries = Object.keys(query);
    
    if (queries.length > 0 && queries.includes('keyword')) {
      // console.log(query);
      const { size, from, search_after, keyword } = query;
      const data = (await searchKeyword(
        indexAlias,
        keyword as string,
        parseInt(from as string),
        parseInt(size as string),
        search_after as string
      )) as any;
      // console.log('body', data?.body);
      // console.log('hits', data?.body?.hits);
      res.status(StatusCodes.OK).json({
        total: data?.body?.hits?.total?.value,
        data: data?.body?.hits?.hits
      });
    } else {
      // console.log('all', query);
      const { size, from, search_after } = query;
      const data = (await searchAll(
        indexAlias,
        parseInt(from as string),
        parseInt(size as string),
        search_after as string
      )) as any;
      res.status(StatusCodes.OK).json({
        total: data?.body?.hits?.total?.value,
        data: data?.body?.hits?.hits
      });
    }
    
  } catch (error) {
    next(error);
  }
}

/**
 * Handle /search indexing.
 *
 * @param {Request} _req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function index(
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    // Contentful
   console.log('retrieving entries from contentful...');
   const entries: EntryCollection<IUiPage> = await contentfulClient.getEntries<IUiPage>({
    content_type: 'uiPage',
    include: 4,
    limit: 1000
   });
  //  console.log('entries', entries.items[0]);
  
  const articles: Partial<IArticleIndex>[] = [];
  if (entries) {
    console.log('preparing index data...');
    entries.items.forEach((itm) => {
      // console.log('itm', itm);
      const sysFields = itm.sys;
      const articleIndex: Partial<IArticleIndex> = {};
      const uiPageFields = itm.fields as any;
      const seoFields = itm.fields?.seo?.fields;
      // console.log('itm.fields', itm.fields);
      if (uiPageFields.doNotIndexInternalSearch != true) {
        if (itm.fields.isArticle) {
          // Articles
          const articleFields = itm.fields.blocks[0].fields as IArticleFields;
          const overrideLink = articleFields?.article?.fields?.overrideLink;
          // console.log('articleFields', articleFields.article.fields);
          // console.log('overrideLink', articleFields?.article?.fields?.overrideLink);
          articleIndex.title = articleFields?.article?.fields?.title;
          articleIndex.description =
            articleFields.article?.fields?.previewContent ??
            seoFields?.metaDescription;
          articleIndex.category =
            uiPageFields?.pagePath ? uiPageFields?.pagePath.split('/')[0] : 'all';
          // console.log('overridelink', overrideLink);
          const pagePath = resolveOverrideLink(overrideLink.fields) ?? undefined; // pagePath
          articleIndex.link = composeLinks(pagePath, uiPageFields?.slug);
          articleIndex.created_at = new Date(sysFields.createdAt);
          articleIndex.updated_at = new Date(sysFields.updatedAt);
        } else {
          // UI Pages
          // console.log('ELSE', itm.fields);
          articleIndex.title = uiPageFields?.title ?? seoFields?.metaTitle;
          articleIndex.description =
            seoFields?.metaDescription ?? uiPageFields?.content;
          articleIndex.category = uiPageFields?.pagePath
            ? uiPageFields?.pagePath.split('/')[0]
            : 'all';
          articleIndex.link = composeLinks(uiPageFields?.pagePath, uiPageFields?.slug);
          articleIndex.created_at = new Date(sysFields.createdAt);
          articleIndex.updated_at = new Date(sysFields.updatedAt);
        }
        articles.push(articleIndex);
      }
    });
    
    console.log('creating index name');
    const indexName = createIndexName();
    console.log('index name', indexName);

    console.log('creating index...');
    await createIndex(indexName);

    // console.log('indexCreateREsponse', indexCreateResponse);

    const articleBody = articles.flatMap((doc) => [
      { index: { _index: indexName } },
      doc
    ]);

    const { body: bulkResponse } = await elasticClient.bulk({
      body: articleBody,
      refresh: true
    });

    if (bulkResponse.errors) {
      // Do something useful with it.
      console.warn(bulkResponse.errors);
    }

    const aliasExistsResponse = await elasticClient.indices.existsAlias({
      name: indexAlias
    });
    // console.log('alias exists', aliasExistsResponse);

    if (aliasExistsResponse.body == true) {
      console.log('index exists on current alias');
      const oldIndex = await elasticClient.indices.getAlias({
        name: indexAlias,
        pretty: true
      });
      // console.log('oldIndex', oldIndex);

      // Reassign outdated index to articles-old before deleting from current alias
      console.log('swapping out aliases');
      Object.keys(oldIndex.body).forEach(async (key) => {
        await elasticClient.indices.putAlias({
          name: indexAliasOld,
          index: key
        });
        await elasticClient.indices.deleteAlias({ name: indexAlias, index: key });
      });

      // Assign new index to alias
      console.log('assigning new index to alias');
      await createAlias(indexName, indexAlias);

      // Clean up old indices
      console.log('checking if old indicies need to be cleaned up.');
      const aliasOldExistsResponse = await elasticClient.indices.existsAlias({
        name: indexAliasOld
      });
      if (aliasOldExistsResponse.body == true) {
        console.log('alias-old found');
        const oldIndicies = await elasticClient.indices.getAlias({
          name: indexAliasOld,
          pretty: true
        });
        const sortedKeys = Object.keys(oldIndicies.body).sort();
        // console.log('sorted keys', sortedKeys);
        let count = sortedKeys.length;
        let i = 0;
        while (count > 2) {
          console.log('deleting old index...');
          await elasticClient.indices.deleteAlias({
            name: indexAliasOld,
            index: sortedKeys[i]
          });
          count--;
          i++;
        }
      } else {
        console.log('alias-old NOT found. creating new alias-old.');
        await createAlias('', indexAliasOld);
      }
    } else {
      console.log('no alias exists, creating new alias for', indexName);
      // Alias new index
      const aliasResponse = await createAlias(indexName, indexAlias) as any;
      if (aliasResponse.body.error) {
        console.log('Error occurred creating new alias.');
      }
      // console.log('alias response', aliasResponse);
    }
  
  } else {
    console.log('no entries found.');
  }
  console.log('Indexing completed.');
  res.status(StatusCodes.OK).json({
    code: StatusCodes.OK,
    message: 'Done'
  });  

  } catch (error) {
    console.warn('error', error);
    next(error);
  }
}

function resolveOverrideLink(overrideLink: OverrideLinkOptions): string |undefined {
    if (isInternalLink(overrideLink)) {      
      // console.log('INTERNAL', overrideLink);
      return overrideLink.internalLink.fields.pagePath;
    }
    if (isExternalLink(overrideLink)) {
      // console.log('EXTERNAL', overrideLink);
      return overrideLink.externalLink;
    }
    return undefined;
}

function isInternalLink(link: OverrideLinkOptions): link is IInternalNavigationLink {
  return (link as IInternalNavigationLink).internalLink !== undefined;
}

function isExternalLink(link: OverrideLinkOptions): link is IExternalNavigationLink {
  return (link as IExternalNavigationLink).externalLink !== undefined;
}

function createIndexName() {
  return `articles-${getDateTimeNow()}`;
} 

function getDateTimeNow() {
  const current = new Date();
  const cDate =
    current.getFullYear() +
    '-' +
    (current.getMonth() + 1) +
    '-' +
    current.getDate();
  const cTime =
    current.getHours() +
    '-' +
    current.getMinutes() +
    '-' +
    current.getSeconds();
 return `${cDate}-${cTime}`;
}
  
type queryBody = {
  query: object;
  search_after?: Array<any>;
  sort: any;
}
function searchAll (indexName: string, from?: number, size?: number, searchAfter?: string) {
  const queryBody: queryBody = {
      query: {
        match_all: {}
      },
      sort: [{  _score: 'desc', _id: 'asc' }]
    };
  // console.log('searchAfter', searchAfter);
  if (searchAfter) queryBody.search_after = paramsToArray(searchAfter); 
  return new Promise((resolve, reject) =>
    elasticClient
      .search({
        index: indexName,
        from: from || 0,
        size: size || 20,
        body: queryBody
      })
      .then(
        function (result) {
          resolve(result);
        },
        function (err) {
          reject(err);
        }
      )
  );
}

function searchKeyword(indexName: string, keyword: string, from?: number, size?: number, searchAfter?: string) {
  const queryBody: queryBody = {
    query: {
      multi_match: {
        query: `${keyword}`
      }
    },
    sort: [{ _score: 'desc', _id: 'asc' }]
  };
  // console.log('searchAfter', searchAfter);
  if (searchAfter) queryBody.search_after = paramsToArray(searchAfter);
  return new Promise((resolve, reject) =>
    elasticClient
      .search({
        index: indexName,
        from: from || 0,
        size: size || 20,
        body: queryBody
      })
      .then(
        function (result) {
          resolve(result);
        },
        function (err) {
          reject(err);
        }
      )
  );
}
  

async function createIndex(indexName: string) {
  return await elasticClient.indices.create(
    {
      index: indexName,
      body: {
        settings: {
          analysis: {
            analyzer: {
              autocomplete: {
                tokenizer: 'autocomplete',
                filter: ['lowercase']
              },
              autocomplete_search: {
                tokenizer: 'lowercase'
              }
            },
            tokenizer: {
              autocomplete: {
                type: 'edge_ngram',
                min_gram: 1,
                max_gram: 10,
                token_chars: ['letter']
              }
            }
          }
        },
        mappings: {
          properties: {
            category: {
              type: 'text',
              analyzer: 'autocomplete',
              search_analyzer: 'autocomplete_search',
              fields: {
                keyword: {
                  type: 'keyword',
                  ignore_above: 256
                }
              }
            },
            description: {
              type: 'text',
              analyzer: 'autocomplete',
              search_analyzer: 'autocomplete_search',
              fields: {
                keyword: {
                  type: 'keyword',
                  ignore_above: 256
                }
              }
            },
            link: {
              type: 'text',
              analyzer: 'autocomplete',
              search_analyzer: 'autocomplete_search',
              fields: {
                keyword: {
                  type: 'keyword',
                  ignore_above: 256
                }
              }
            },
            title: {
              type: 'text',
              analyzer: 'autocomplete',
              search_analyzer: 'autocomplete_search',
              fields: {
                keyword: {
                  type: 'keyword',
                  ignore_above: 256
                }
              }
            }
          }
        }
      }
    },
    { ignore: [400] }
  );
}

function createAlias(indexName: string, aliasName: string) {
  return new Promise ((resolve, reject) => {
      elasticClient.indices
        .putAlias({
          name: aliasName,
          index: indexName
        })
        .then(
          function (result) {
            resolve(result);
          },
          function (err) {
            reject(err);
          }
        );
  });
}

function composeLinks(pagePath: string | undefined, slug: string | undefined) {
  let tempUrl = host;
  if (pagePath) tempUrl += `/${pagePath}`;
  if (slug) tempUrl += `/${slug}`;
  return tempUrl;
}

function paramsToArray(param: string) {
  const params = param.split(',');
  const score = parseInt(params[0]);
  const id = params[1];
  return [score, id];
}