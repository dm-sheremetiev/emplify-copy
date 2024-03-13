import { paths, pathsData } from '@/interfaces/queries';
import { fetchGraphQL } from '@/queries/config';
import { getLanguages } from '../getLanguages';

const pathsQuery = (locale: string, preview: boolean) => `
{
  uiPageCollection(locale: "${locale}", preview: ${preview}) {
      items {
        slug
        pagePath
        sys {
          id
        }
      }
    }
}
`;

export async function getSitemap(lang: string, preview: boolean): Promise<paths[]> {
  const entry: pathsData = await fetchGraphQL(pathsQuery(lang, preview));
  return entry?.data?.uiPageCollection.items;
}

export async function getPathsWithID(locale: string): Promise<
  {
    params: {
      slug: string[];
    };
    id: string;
  }[]
> {
  const isPreview = process.env.NEXT_PUBLIC_ENVIRONMENT === 'dev';
  const entry: pathsData = await fetchGraphQL(pathsQuery(locale, isPreview), isPreview);

  return entry?.data?.uiPageCollection.items.map((pageItem) => {
    if (pageItem.slug.includes('404') || pageItem.slug.includes('500')) return { params: { slug: [] }, id: pageItem.sys.id };
    if (pageItem.slug.includes('home')) return { params: { slug: [''] }, id: pageItem.sys.id };

    if (pageItem.pagePath !== null) {
      const secondPathSlug = sliceFunction(pageItem.pagePath, '/');
      secondPathSlug.push(pageItem.slug);
      return { params: { slug: secondPathSlug }, id: pageItem.sys.id };
    }

    return { params: { slug: [pageItem.slug] }, id: pageItem.sys.id };
  });
}

export async function getPaths(): Promise<
  {
    params: {
      slug: string[];
    };
    locale: string;
  }[]
> {
  const languages = await getLanguages();
  const paths = await Promise.all(
    languages.map(async (locale) => {
      const localeCode = locale.languageCode;
      const isPreview = process.env.NEXT_PUBLIC_ENVIRONMENT === 'dev';
      const entry: pathsData = await fetchGraphQL(pathsQuery(locale.languageCode, isPreview), isPreview);

      return entry?.data?.uiPageCollection.items.map((pageItem) => {
        if (pageItem.slug) {
          if (pageItem.slug.includes('404') || pageItem.slug.includes('500')) return { params: { slug: [] }, locale: localeCode };
          if (pageItem.slug.includes('home')) return { params: { slug: [''] }, locale: localeCode };

          if (pageItem.pagePath !== null) {
            const secondPathSlug = sliceFunction(pageItem.pagePath, '/');
            secondPathSlug.push(pageItem.slug);
            return { params: { slug: secondPathSlug }, locale: localeCode };
          }

          return { params: { slug: [pageItem.slug] }, locale: localeCode };
        }

        return { params: { slug: [] }, locale: localeCode };
      });
    })
  );

  return paths.flat();
}

export function sliceFunction(toSlice: string, separator: string): string[] {
  return toSlice.split(separator);
}
