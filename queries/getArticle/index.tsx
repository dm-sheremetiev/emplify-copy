import { fetchGraphQL } from '@/queries/config'
import compress from 'gql-compress'

// Interface
import { articleData } from '@/interfaces/queries'
import { UiArticle } from '@/interfaces/blocks'

const articleQuery = (id: string, preview: boolean, locale: string) => `
{
  articleCollection(limit: 0, where: {sys: {id: "${id}"}}, preview: ${preview}, locale: "${locale}") {
          items {
            displayTitle: title
            subTitle
            image {
              title
              description
              url
            }
            postMeta
            publishedDate
            author {
              photo {
                title
                description
                url
              }
              fullName
              firstName
              lastName
            }
            category {
              displayTitle
            }
            channel {
              displayTitle
            }
            topicCollection(limit: 15) {
              items {
                displayTitle
              }
            }
            content {
              json
              links {
                entries {
                  hyperlink{
                    __typename
                    ...page
                  }
                  inline {
                    __typename
                    __typename
                    ...rawHtml
                    ...hero
                    ...productBanner
                    ...resourceCardGroup
                    ...teamMembers
                    ...quoteBlock
                    ...featureGroup
                    ...preFooterCta
                    ...articleCallToAction
                    ...article
                    ...resourceFeatureCard
                    ...resourceFeaturePost
                    ...contactBanner
                    ...resourceList2ColumRow
                    ...resourceList3ColumnRow
                    ...embeddedForm
                  }
                }
                assets {
                  block {
                    sys{
                      id
                    }
                    title
                    url
                    description
                  }
                }
              }
            }
          }
        }
      }

      fragment rawHtml on UiRawHtml {
        anchorId
        rawHtml
      }

      fragment hero on UiHero {
        anchorId
        image {
          title
          description
          url
        }
        title {
          json
        }
        subTitle {
          json
        }
        content {
          json
        }
        cta {
          __typename
          ...internalLink
          ...externalLink
        }
        ctaType
        alignTextLeft
      }

      fragment productBanner on UiProductBanner {
        anchorId
        image {
          title
          description
          url
        }
        title {
          json
        }
        content {
          json
        }
        cta {
          __typename
          ...externalLink
          ...internalLink
        }
        ctaType
        alignTextLeft
      }


      fragment resourceCardGroup on UiResourceCardGroup {
        anchorId
        resourceCardsCollection(limit: 5) {
          items {
            title:displayTitle
            {
              json
            }
            subTitle
            content
            cta {
              __typename
              ...externalLink
              ...internalLink
            }
            ctaType
            image {
              title
              description
              url
            }
          }
        }
      }

      fragment teamMembers on UiTeamMembers {
        anchorId
        teamMembersCollection(limit: 4) {
          items {
            image {
              title
              description
              url
            }
            name
            role
            bio
            socialLinksCollection(limit: 3) {
              items {
                displayTitle
                css
                externalLink
                target
                iconLink{
              icon
            }
              }
            }
          }
        }
      }

      fragment quoteBlock on UiQuoteBlock {
        anchorId
        headline
        quote
        quoteBy
        quoteColor
        companyName
        companyNameColor
        quoteByColor
        headlineColor
        role
        roleColor
        backgroundImage {
          description
          title
          url
        }
        backgroundMobileImage {
          description
          title
          url
        }
        logoImagesCollection(limit: 10) {
          items {
            title
            description
            url
          }
        }
        cta {
          __typename
          ...internalLink
          ...externalLink
        }
        ctaType
      }

      fragment featureGroup on UiFeatureGroup {
        anchorId
        featuresCollection(limit: 3) {
          items {
            title:displayTitle
            {
              json
            }
            content {
              json
            }
            iconLink{
              icon
            }
          }
        }
      }


      fragment articleCallToAction on UiArticleCallToAction {
        anchorId
        image {
          title
          description
          url
        }
        displayTitle: title
        content {
          json
        }
        cta {
          __typename
          ...internalLink
          ...externalLink
        }
      }

      fragment article on Article {
        sys {
          id
        }
      }

      fragment resourceFeatureCard on UiResourceFeatureCard {
        anchorId
        cardTitle: displayTitle
        {
          json
        }
        cardSubTitle: subTitle
        cardContent: content
        cardPosition: position
        variation
        mobileImage {
          url
          description
        }
        desktopImage {
          url
          description
        }
        cta {
          __typename
          ...internalLink
          ...externalLink
        }
      }

      fragment resourceFeaturePost on UiResourceFeaturedPost {
        anchorId
        mobileImage {
          title
          description
          url
        }
        desktopImage {
          title
          description
          url
        }
        title:displayTitle
        {
          json
        }
        displaySubTitle: subTitle
        displayContent: content
        cta {
          __typename
          ...internalLink
          ...externalLink
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
        iconLink{
              icon
            }
      }

      fragment preFooterCta on UiPreFooterCta {
        anchorId
        footerTitle: title
        footerContent: content
        cta {
          __typename
          ...internalLink
          ...externalLink
        }
        ctaType
      }

      fragment contactBanner on UiContactBanner {
        anchorId
        title:displayTitle{
          json
        }
        displayContent: content
        image{
          title
          description
          url
        }
        alignLeft
        form{
          anchorId
          rawHtml
        }
      }


    fragment resourceList2ColumRow on UiResourceList2ColumnRow {
      anchorId
      columnCardsCollection(limit: 2) {
        items {
          __typename
          ...resourceFeatureCard
          ...resourceCard
        }
      }
    }

    fragment resourceList3ColumnRow on UiResourceList3ColumnRow {
      anchorId
      columnCards{
        anchorId
        resourceCardsCollection(limit: 3){
          items{
            anchorId
            title:displayTitle
            {
              json
            }
            displaySubTitle: subTitle
            displayContent: content
            cta{
              __typename
            ...internalLink
            ...externalLink
            }
            image{
              title
              description
              url
            }
            ctaType
          }
        }
      }
    }

    fragment resourceCard on UiResourceCard {
      anchorId
      title:displayTitle
      {
        json
      }
      displaySubTitle: subTitle
      displayContent: content
      cta {
        __typename
        ...internalLink
        ...externalLink
      }
      image {
        title
        description
        url
      }
      ctaType
    }

    fragment embeddedForm on UiEmbeddedForm{
      anchorId
      formTitle: title
      formSubTitle: subTitle
      type
      rawFormEmbed{
        anchorId
        rawHtml
      }
    }

    fragment page on UiPage {
      sys{
        id
      }
      pagePath
      slug
    }

`

export async function getArticle(id: string, preview: boolean, locale: string): Promise<UiArticle['article']> {
  const entry: articleData = await fetchGraphQL(compress(articleQuery(id, preview, locale)), preview)
  return entry.data?.articleCollection?.items[0] || null
}
