import { avoidRateLimit, fetchGraphQL } from '@/queries/config'

// we only get localized content for the article block itself, so that we can get full result list for all languages
const getArticlesQuery = (locale: string, preview: boolean, start: number, pagePath: string) => {
  return `{
	uiPageCollection(skip: ${start}, limit: 30, where: {pagePath_contains: "${pagePath}" }, preview: ${preview}, locale: "${locale}"){
		items {
			slug
			pagePath
			isArticle
			blocksCollection(limit: 3, locale: "${locale}") {
				items {
					__typename
					...article
				}
			}
		}
	}
}

fragment article on Article {
	image {
		title
		description
		url
	}
	title
	publishedDate
	previewContent
	category {
		order
		displayTitle
	}
	topicCollection {
		items {
			displayTitle
		}
	}
	isFeaturedArticle
	hideFromLists
	overrideLink {
		__typename
		...internalLink
		...externalLink
	}
	author {
		fullName
		firstName
		lastName
	}
}

fragment internalLink on InternalNavigationLink {
    displayTitle
    css
    querystring
    internalLink {
      pagePath
      title
      slug
    }
    target
  }

fragment externalLink on ExternalNavigationLink {
    displayTitle
    css
    externalLink
    target
    previewTitle
    previewContent
    secondaryPreviewImage{
      url
      description
      title
    }
    previewImage{
      url
      description
      title
    }
    iconLink{
		icon
	}
  }
`
}

// this is now a recursive function since contentful has complexity limits on their queries,
// we have to instead make a series of less complex queries to get all articles
export async function getArticles(locale: string, preview: boolean, start: number, pagePath: string, anyPage: boolean) {
  const query = getArticlesQuery(locale, preview, start, pagePath)
  const response = await fetchGraphQL(query, preview)
  let articles = response?.data?.uiPageCollection.items.filter((item: any) => {
    return ((anyPage || item.isArticle) && item.blocksCollection != null) ?? false
  })
  await avoidRateLimit(700)
  if (response?.data?.uiPageCollection.items.length == 30) {
    articles = articles.concat(await getArticles(locale, preview, start + 30, pagePath, anyPage))
  }

  return articles
}
