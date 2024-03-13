import { promisify } from 'util';
import { DepartmentsCopy, GenericPageCopy, HomepageCopy, LocationCopy, Maybe } from '@/careers/types/copy-types';

const setTimeoutPromise = promisify(setTimeout);

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const PREVIEW_ACCESS_TOKEN = process.env.PREVIEW_API_KEY;
const CONTENTFUL_ACCESS_TOKEN = process.env.DELIVERY_API_KEY;
const CAREERS_PREVIEW_ACCESS_TOKEN = process.env.CAREERS_PREVIEW_API_KEY;
const CAREERS_CONTENTFUL_ACCESS_TOKEN = process.env.CAREERS_DELIVERY_API_KEY;
const CONTENTFUL_ENVIRONMENT = process.env.CAREERS_CONTENTFUL_ENVIRONMENT;

const METADATA_QUERY = `
  metadata {
    title
    description
    ogTitle
    ogDescription
    ogImage {
      url
    }
  }
`;

function imageQuery(propName: string): string {
  return `#graphql
  ${propName} {
      url
      width
      height
  }
  `;
}

export async function fetchGraphQL<T>(query: string, preview = false): Promise<T> {
  let token = `Bearer ${preview ? PREVIEW_ACCESS_TOKEN : CONTENTFUL_ACCESS_TOKEN}`;
  if (CONTENTFUL_ENVIRONMENT.includes('careers')) token = `Bearer ${preview ? CAREERS_PREVIEW_ACCESS_TOKEN : CAREERS_CONTENTFUL_ACCESS_TOKEN}`;

  const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    body: JSON.stringify({ query })
  });

  // https://www.contentful.com/developers/docs/references/graphql/#/introduction/api-rate-limits
  if (response.status === 429) {
    const rateLimitReset = response.headers.get('X-Contentful-RateLimit-Reset') ?? 0;
    const throttleBy = Number(rateLimitReset) * 1000;
    await setTimeoutPromise(throttleBy);
    return fetchGraphQL(query, preview);
  }

  const data: any = await response.json();

  if (data.errors) {
    throw new Error('GraphQL error:\n' + JSON.stringify(data, null, 2));
  }

  return data;
}

type Homepage = {
  data: {
    careersHomepageCollection: {
      items: HomepageCopy[];
    };
  };
};

export async function getHomepageCopy(preview: boolean, locale = 'en'): Promise<HomepageCopy | undefined> {
  const entries = await fetchGraphQL<Homepage>(
    `query {
      careersHomepageCollection(preview: ${preview ? 'true' : 'false'}, locale: "${locale}") {
        items {
          title
          excerpt
          positionsTitle
          subexcerpt {
            json
          }
          quote1Image {
            url
          }
          quote1Author
          quote1AuthorPosition
          quote1 {
            json
          }
          quote2Image {
            url
          }
          quote2Author
          quote2AuthorPosition
          quote2 {
            json
          }
          ${METADATA_QUERY}
        }
      }
    }`,
    preview
  );
  return entries?.data?.careersHomepageCollection?.items[0];
}

type Departments = {
  data: {
    careersDepartmentsCollection: {
      items: DepartmentsCopy[];
    };
  };
};

export async function getDepartmentCopy(slug: string, preview: boolean, locale = 'en'): Promise<DepartmentsCopy | undefined> {
  const entries = await fetchGraphQL<Departments>(
    `query {
      careersDepartmentsCollection(where: { slug: "${slug}" }, preview: ${preview ? 'true' : 'false'}, locale: "${locale}", limit: 1) {
        items {
          perex
          feature1 {
            json
          }
          feature2 {
            json
          }
          ${imageQuery('mainImage')}
          ${imageQuery('feature1Image')}
          ${imageQuery('feature2Image')}
          ${METADATA_QUERY}
        }
      }
    }`,
    preview
  );
  return entries?.data?.careersDepartmentsCollection?.items?.[0];
}

export async function getOpenPositionsDepartments(preview: boolean, locale = 'en'): Promise<DepartmentsCopy[]> {
  const entries = await fetchGraphQL<Departments>(
    `query {
      careersDepartmentsCollection(preview: ${preview ? 'true' : 'false'}, locale: "${locale}") {
        items {
          slug
          perex
        }
      }
    }`,
    preview
  );
  return entries?.data?.careersDepartmentsCollection?.items || [];
}

type GenericPage = {
  data: {
    genericPageCollection: {
      items: GenericPageCopy[];
    };
  };
};

export async function getPrivacyCopy(preview: boolean, locale = 'en'): Promise<GenericPageCopy> {
  const entries = await fetchGraphQL<GenericPage>(
    `query {
      genericPageCollection(where: { slug: "careers/privacy-statement" }, preview: ${preview ? 'true' : 'false'}, locale: "${locale}", limit: 1) {
        items {
          title
          excerpt {
            json
          }
          content {
            json
          }
          ${METADATA_QUERY}
        }
      }
    }`,
    preview
  );
  return entries?.data?.genericPageCollection?.items[0];
}

export async function getMeetUsCopy(preview: boolean, locale = 'en'): Promise<GenericPageCopy> {
  const entries = await fetchGraphQL<GenericPage>(
    `query {
      genericPageCollection(where: { slug: "meet-us" }, preview: ${preview ? 'true' : 'false'}, locale: "${locale}", limit: 1) {
        items {
          title
          excerpt {
            json
          }
          content {
            json
            links {
              assets {
                block {
                  title
                  description
                  width
                  height
                  url
                  sys {
                    id
                  }
                }
              }
            }
          }
          ${METADATA_QUERY}
        }
      }
    }`,
    preview
  );
  return entries?.data?.genericPageCollection?.items[0];
}

export async function getSearchCopy(preview: boolean, locale = 'en'): Promise<GenericPageCopy> {
  const entries = await fetchGraphQL<GenericPage>(
    `query {
      genericPageCollection(where: { slug: "careers/job-search" }, preview: ${preview ? 'true' : 'false'}, locale: "${locale}", limit: 1) {
        items {
          title
          excerpt {
            json
          }
          ${METADATA_QUERY}
        }
      }
    }`,
    preview
  );
  return entries?.data?.genericPageCollection?.items[0];
}

type LocationResponse = {
  data: {
    careersLocationCollection: {
      items: LocationCopy[];
    };
  };
};

export async function getLocationCopy(locationKey: string | null, preview = false): Promise<Maybe<LocationCopy>> {
  if (!locationKey) {
    return null;
  }
  const entries = await fetchGraphQL<LocationResponse>(
    `#graphql
      query {
        careersLocationCollection(
            where: { locationKey: ${JSON.stringify(locationKey)} }
            preview: ${JSON.stringify(preview)}
            limit: 1
        ) {
            items {
                image {
                    url
                    width
                    height
                }
            }
        }
      }`,
    preview
  );
  return entries.data.careersLocationCollection.items[0] ?? null;
}
