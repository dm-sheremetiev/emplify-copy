import { fetchGraphQL } from '@/queries/config'
import compress from 'gql-compress'
// Interfaces
import { UiPageListing } from '@/interfaces/blocks'
import { pageListing } from '@/interfaces/queries'
import { pageListingCollection } from '@/interfaces/queries'

const query = (limit: number, pageContains: string, locale: string, preview: boolean) => {
  return `{
        uiPageCollection(locale: "${locale}", limit: ${limit}, preview: ${preview}, order: sys_firstPublishedAt_ASC, where: {OR: ${pageContains}}) {
          items {
            title
            pagePath
            slug
            isArticle
            blocksCollection(limit: 10) {
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

export async function getPageListing(pageListing: UiPageListing, locale: string, preview: boolean): Promise<pageListing[]> {
  const pagePathContains = `{pagePath_contains: "${pageListing.pagePath}"}`
  const entry: pageListingCollection = await fetchGraphQL(compress(query(pageListing.numberOfPageItems, pagePathContains, locale, preview)))

  const pages = entry?.data?.uiPageCollection.items.filter((item: any) => {
    let isArticle = false

    if (item.isArticle) {
      isArticle = true
    } else {
      item.blocksCollection.items.forEach(function (item, i) {
        if (item && item.__typename == 'Article') {
          isArticle = true
        }
      })
    }

    return (isArticle && item.blocksCollection != null) ?? false
  })

  return pages
}
