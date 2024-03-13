import { fetchGraphQL } from '@/queries/config';
import { asyncFlat, map } from 'iter-tools';
import { SitemapItemLoose } from 'sitemap';
import urlJoin from 'proper-url-join';

interface UIPageItem {
  slug: string;
  pagePath: string | null;
  sys: {
    publishedAt: string;
  };
}

// TODO: the limit: 10000 actually only returns max 1000, we need to make multiple trips as the pages are more than 1000 soon. currently at 911 for english
const sitemapQuery = (locale: string, skip: number, limit: number) => `#graphql
{
  uiPageCollection(limit: ${limit}, skip: ${skip}, locale: "${locale}", where: {
    slug_not_in: ["404", "500"],
    doNotIndexInternalSearch_not: true
  }) {
    	total
      items {
        slug
        pagePath
        sys {
          publishedAt
        }
      }
    }
}`;

const defaultLocale = 'en';
const limitPerRequest =  1000;

function uiPageToSitemapItem(uiPage: UIPageItem, locale: string): SitemapItemLoose {
  const {
    slug,
    pagePath,
    sys: { publishedAt },
  } = uiPage;

  const pathPrefix = locale === defaultLocale ? '/' : `/${locale}/`;
  let finalPath: string;
  if (slug === 'home') {
    finalPath = pathPrefix;
  } else {
    finalPath = urlJoin(pathPrefix, pagePath, slug, { leadingSlash: true, trailingSlash: false });
  }
  return {
    url: finalPath,
    lastmod: publishedAt,
    priority: 0.5,
  };
}

async function* getItemsForLocale(locale: string) {
  let skip = 0;
  let itemsFetched = 0;

  do {
    const response = await fetchGraphQL(sitemapQuery(locale, skip, limitPerRequest));
    const data = response.data.uiPageCollection;
    itemsFetched += data.items.length;
    skip += limitPerRequest;

    yield map((item) => uiPageToSitemapItem(item, locale), data.items as UIPageItem[]);
  } while (itemsFetched === limitPerRequest)
}

export default function getSitemap(locale: string): AsyncIterableIterator<SitemapItemLoose> {
  return asyncFlat(1, getItemsForLocale(locale));
}
