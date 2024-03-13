import { forOwn } from 'lodash'

// TODO: push this to environment variables
const QUERY_PARAMS_ADD_TO_DOMAINS: string[] = ['https://go.emplifi.io'];
const QUERY_PARAMS_SESSION_STORAGE_KEY = 'campaignQueryParams';

interface ParsedQueryObject {
  [key: string]: string;
}

function _parseQueryParams(queryString: string): ParsedQueryObject {
  const query: ParsedQueryObject = {};
  const pairs = (queryString[0] === '?' ? queryString.substring(1) : queryString).split('&');
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split('=');

    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
}

function _buildQueryString(overwritableQuery: ParsedQueryObject, newQuery: ParsedQueryObject): string {
  const combinedParsed = { ...overwritableQuery, ...newQuery };
  let combinedQuery = '';

  for (const property in combinedParsed) {
    combinedQuery = combinedQuery + property + '=' + combinedParsed[property] + '&';
  }
  combinedQuery = combinedQuery.substring(0, combinedQuery.length - 1);
  return combinedQuery;
}

/**
 * this is creating an issue and conflict with GTM. There is custom js running in GTM tag to get query params
 */
export function updateUrlQueryParams(): void {
  let url = window?.location?.href?.split('?')[0];
  const queryParams: string = getQueryStr() || '';
  if (queryParams) url += `?${queryParams}`;
  window?.history?.replaceState(null, null, url);
}

export function searchForQueries({ location = '' }: { location?: any } = {}): { queryStr: string; storedQueryStr: string } {
  try {
    if (!navigator.cookieEnabled) return;
    let queryStr: string = location ? location?.split('?')[1] || '' : window?.location?.search?.substring(1);
    // do not store the query param for the global search page
    queryStr = queryStr.replace(/query=.*?($|[&;])/, '');
    const storedQueryStr: string = window?.sessionStorage?.getItem(QUERY_PARAMS_SESSION_STORAGE_KEY);

    return { queryStr, storedQueryStr };
  } catch (e) {
    console.error('Access is denied for this document', e);
  }
}

export function getQueryStr(): string {
  try {
    const queries = searchForQueries();
    const { queryStr = '', storedQueryStr = '' } = queries || {};
    let newQueryStr = queryStr.split('#')[0];

    // combine both queries
    if (newQueryStr && storedQueryStr) {
      newQueryStr = _buildQueryString(_parseQueryParams(storedQueryStr), _parseQueryParams(newQueryStr));
    }

    if (navigator.cookieEnabled) {
      if (newQueryStr) {
        // don't store certain query params. such as page e.g
        const splitArr = newQueryStr.split('&')
        const queryObj: {[p: string]: string} = {}
        for (let i = 0; i < splitArr.length; i++) {
          const param = splitArr[i].split('=')
          if (param.length === 2 && param[0] !== 'page' && param[0] !== 'industry' && param[0] !== 'region') {
            queryObj[param[0]] = param[1]
          }
        }
        const queryArr: string[] = []
        forOwn(queryObj, (value, key) => {
          queryArr.push(`${key}=${value}`)
        })

        const query = queryArr.join('&')
        window?.sessionStorage?.setItem(QUERY_PARAMS_SESSION_STORAGE_KEY, query);
      } else {
        newQueryStr = window?.sessionStorage?.getItem(QUERY_PARAMS_SESSION_STORAGE_KEY);
      }
    }

    if (!newQueryStr) return undefined;
    return newQueryStr;
  } catch (e) {
    console.error('Access is denied for this document', e);
  }
}

/**
 * it affected to only solid a tag links
 * it won't work on "a" tags inside "Link" component
 */
export function updateATagsForOtherDomains(): void {
  const queryStr: string = getQueryStr() || '';
  if (!queryStr) return;

  for (let _i = 0, _a = document.querySelectorAll('a'); _i < _a.length; _i++) {
    const a = _a[_i];

    for (const domain of QUERY_PARAMS_ADD_TO_DOMAINS) {
      if (a.href.startsWith(domain)) {
        const aHref = a.href.split('?');
        const link = aHref[0] ?? '';
        const hrefQueryParams = aHref[1] ?? undefined;

        if (hrefQueryParams) {
          const parsedHrefQueryParams = _parseQueryParams(hrefQueryParams);
          a.href = link + '?' + _buildQueryString(_parseQueryParams(queryStr), parsedHrefQueryParams);
        } else {
          a.href = link + '?' + queryStr;
        }
      }
    }
  }
}
