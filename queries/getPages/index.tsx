import { avoidRateLimit, fetchGraphQL } from '../config'
import compress from 'gql-compress'
import { getArticles } from '../getArticles'

// Interfaces
import { uiPageQuery, uiUniquePage, uiUniquePageQuery } from '@/interfaces/index'
import { pageData } from '@/interfaces/queries'
import { UiPageListing } from '@/interfaces/blocks'
import { getPageListing } from './getPageListing'
import { getArticle } from '../getArticle'

const componentDictionary = {
  UiRawHtml: {
    fragmentName: 'rawHtml',
    fragment: `fragment rawHtml on UiRawHtml {
    anchorId
    rawHtml
  }`
  },
  UiProductBanner: {
    fragmentName: 'productBanner',
    fragment: `fragment productBanner on UiProductBanner {
    anchorId
    image {
      title
      description
      url(transform: {
        format: WEBP,
      })
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
  }`
  },
  UiQuoteBlock: {
    fragmentName: 'quoteBlock',
    fragment: `fragment quoteBlock on UiQuoteBlock {
    anchorId
    headline
    quote
    quoteBy
    quoteColor
    companyNameColor
    quoteByColor
    headlineColor
    roleColor
    companyName
    backgroundImage {
      description
      title
      url(transform: {
        format: WEBP,
      })
    }
    backgroundMobileImage {
      description
      title
      url(transform: {
        format: WEBP,
      })
    }
    logoImagesCollection(limit: 10) {
      items {
        title
        description
        url(transform: {
          format: WEBP,
        })
      }
    }
    cta {
      __typename
      ...internalLink
      ...externalLink
    }
    ctaType
    optionalCta {
      __typename
      ...internalLink
      ...externalLink
    }
    optionalCtaType
    role
    type
    backgroundColor
    backgroundPosition
    backgroundSize
    orientation
  }
  `
  },
  UiFeatureGroup: {
    fragmentName: 'featureGroup',
    fragment: `fragment featureGroup on UiFeatureGroup {
    anchorId
    type
    title{
      json
    }
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
  }`
  },
  UiPreFooterCta: {
    fragmentName: 'preFooterCta',
    fragment: `fragment preFooterCta on UiPreFooterCta {
    anchorId
    footerTitle: title
    footerContent: content
    cta {
      __typename
      ...internalLink
      ...externalLink
    }
    ctaType
  }`
  },
  UiArticleCallToAction: {
    fragmentName: 'articleCallToAction',
    fragment: `fragment articleCallToAction on UiArticleCallToAction {
    anchorId
    image {
      title
      description
      url(transform: {
        format: WEBP,
      })
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
  }`
  },
  Article: {
    fragmentName: 'article',
    fragment: `fragment article on Article {
    sys {
      id
    }
  }`
  },
  UiResourceFeaturedPost: {
    fragmentName: 'resourceFeaturePost',
    fragment: `fragment resourceFeaturePost on UiResourceFeaturedPost {
    anchorId
    mobileImage {
      title
      description
      url(transform: {
        format: WEBP,
      })
    }
    desktopImage {
      title
      description
      url(transform: {
        format: WEBP,
      })
    }
    title:displayTitle
    {
      json
    }
    displaySubTitle: subTitle
    displayContent: content
    photoLabel
    cta {
      __typename
      ...internalLink
      ...externalLink
    }
  }
`
  },
  UiContactBanner: {
    fragmentName: 'contactBanner',
    fragment: `fragment contactBanner on UiContactBanner {
    anchorId
    title:displayTitle{
      json
    }
    displayContent: content
    image{
      title
      description
      url(transform: {
        format: WEBP,
      })
    }
    alignLeft
    form{
      anchorId
      rawHtml
    }
  }`
  },
  UiLogoBanner: {
    fragmentName: 'logoBanner',
    fragment: `fragment logoBanner on UiLogoBanner {
    anchorId
    title {
      json
    }
    backgroundColor
    logoItemsCollection(limit: 10) {
      items {
        logo {
          url(transform: {
            format: WEBP,
          })
          description
          title
        }
      }
    }
  }`
  },
  UiVideoTakeover: {
    fragmentName: 'VideoTakeover',
    fragment: `fragment VideoTakeover on UiVideoTakeover {
    anchorId
    backgroundCoverImage {
      title
      description
      url(transform: {
        format: WEBP,
      })
    }
    videoSourceUrl
    iconPlay {
      url(transform: {
        format: WEBP,
      })
    }
  }`
  },
  UiPageListingNotDynamic: {
    fragmentName: 'pageListingNotDynamic',
    fragment: `fragment pageListingNotDynamic on UiPageListingNotDynamic{
    anchorId
    displayTitle: title
    css
    type
    backgroundColor
    centerContentResources
    componentType
    cardContentCollection (limit: 6) {
      items {
        __typename
        ...listingInternalNavigationLink
        ...externalLink
      }
    }
  }

  fragment listingInternalNavigationLink on InternalNavigationLink {
    displayTitle
    css
    querystring
    target
    internalLink{
      pagePath
      title
      slug
      blocksCollection(limit: 2){
        items{
          __typename
          ...articleListing
          ...pageContentListing
        }
      }
    }
  }

  fragment pageContentListing on Article {
    image {
      title
      description
      url(transform: {
        format: WEBP,
      })
    }
    displayTitle: title
    previewContent
    secondaryPreviewImage{
      title
      description
      url(transform: {
        format: WEBP,
      })
    }
  }

  fragment articleListing on Article {
    image {
      title
      description
      url(transform: {
        format: WEBP,
      })
    }
    displayTitle: title
    previewContent
    secondaryPreviewImage{
      title
      description
      url(transform: {
        format: WEBP,
      })
    }
  }`
  },
  UiPageListing: {
    fragmentName: 'pageListing',
    fragment: `fragment pageListing on UiPageListing{
    anchorId
    linkCardTitle: cardTitle
    displayTitle: title
    css
    type
    numberOfPageItems
    pagePath
  }`
  },
  UiHeroAdvanced: {
    fragmentName: 'heroAdvanced',
    fragment: `fragment heroAdvanced on UiHeroAdvanced {
    anchorId
    image {
      title
      description
      url(transform: {
        format: WEBP,
      })
    }
    mobileImage {
      title
      description
      url(transform: {
        format: WEBP,
      })
    }
    eyebrowHeadline {
      json
    }
    bannerType
    bannerHeight
    eyebrowHeadlineColor
    backgroundColor
    backgroundSize
    boxBackgroundColor
    boxBackgroundType
    title {
      json
    }
    titleColor
    subTitle {
      json
    }
    subTitleColor
    content {
      json
    }
    cta {
      __typename
      ...internalLink
      ...externalLink
    }
    ctaType
    optionalCta {
      __typename
      ...internalLink
      ...externalLink
    }
    optionalCtaType
    theme
    orientation
  }`
  },
  UiEmbeddedForm: {
    fragmentName: 'embeddedForm',
    fragment: `fragment embeddedForm on UiEmbeddedForm{
    anchorId
    formStyle
    formTitle: title
    formSubTitle: subTitle
    eyebrow
    type
    backgroundSize
    backgroundType
    backgroundColor
    backgroundPosition
    rawFormEmbed {
      anchorId
      rawHtml
    }
    titleCss
    subTitleCss
    image {
      title
      description
      url(transform: {
        format: WEBP,
      })
    }
    mobileImage {
      title
      description
      url(transform: {
        format: WEBP,
      })
    }
    formOptions {
      data
      componentName
    }
    twoColumns
  }`
  },
  UiHero: {
    fragmentName: 'hero',
    fragment: `fragment hero on UiHero {
    anchorId
    componentType
    backgroundColor
    titleColor
    textColor
    image {
      title
      description
      url(transform: {
        format: WEBP,
      })
    }
    video {
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
    logoItemsCollection(limit: 10) {
      items {
        logo {
          url(transform: {
            format: WEBP,
          })
          description
          title
        }
      }
    }
    cta {
      __typename
      ...internalLink
      ...externalLink
    }
    ctaType
    optionalCta {
      __typename
      ...internalLink
      ...externalLink
    }
    optionalCtaType
    alignTextLeft
  }`
  },
  UiArticleList: {
    fragmentName: 'articleList',
    fragment: `fragment articleList on UiArticleList {
    __typename
    blueTheme
    headingMain
    articlesPerPage
    articleDirectory
    hideFeaturedSection
    showCategories
    showTopics
    imageSize
    imageObjectFit
    featuredArticle {
      __typename
      pagePath
      slug
      blocksCollection(limit: 3) {
        items {
          __typename
          ...article
        }
      }
    }
  }

  fragment article on Article {
    displayTitle: title
    previewContent
    image {
      title
      description
      url(transform: {
        format: WEBP,
      })
    }
    category {
      order
      displayTitle
    }
    topicCollection(limit: 15) {
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
  }`
  },
  UiTrialPageGrid: {
    fragmentName: 'trialPageGrid',
    fragment: `fragment trialPageGrid on UiTrialPageGrid {
    headingLeft
    descriptionLeft {
      json
    }
    bulletPointsListColLeft {
      json
    }
    tableData
    ctaTextLeft
    ctaLinkLeft
    notice
    headingRight
    tagRecommended
    descriptionRight {
      json
    }
   bulletPointsListColRight {
     json
   }
   ctaTextRight
   ctaLinkRight
   ctaBanner {
    json
   }
   stripeBanner {
    json
   }
   stripeBannerButtonText
   stripeBannerButtonLink
  }`
  },
  JsonModel: {
    fragmentName: 'jsonModel',
    fragment: `fragment jsonModel on JsonModel {
    componentName
    data
  }`
  },
  UiTeamMembers: {
    fragmentName: 'teamMembers',
    fragment: `fragment teamMembers on UiTeamMembers {
    anchorId
    isColumnLayout
    teamMembersCollection(limit: 15) {
      items {
        image {
          title
          description
          url(transform: {
            format: WEBP,
          })
        }
        isRounded
        name
        role
        bio
        ctaText
        ctaLink
        socialLinksCollection(limit: 5) {
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
  }`
  },
  UiResourceFeatureCard: {
    fragmentName: 'resourceFeatureCard',
    fragment: `fragment resourceFeatureCard on UiResourceFeatureCard {
    anchorId
    cardTitle: displayTitle
    {
      json
    }
    cardSubTitle: subTitle
    cardContent: content
    cardPosition: position
    photoLabel
    variation
    mobileImage {
      url(transform: {
        format: WEBP,
      })
      description
    }
    desktopImage {
      url(transform: {
        format: WEBP,
      })
      description
    }
    cta {
      __typename
      ...internalLink
      ...externalLink
    }
  }`
  },
  UiResourceCardGroup: {
    fragmentName: 'resourceCardGroup',
    fragment: `fragment resourceCardGroup on UiResourceCardGroup {
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
          url(transform: {
            format: WEBP,
          })
        }
      }
    }
  }`
  },
  UiResourceList2ColumnRow: {
    fragmentName: 'resourceList2ColumRow',
    fragment: `fragment resourceList2ColumRow on UiResourceList2ColumnRow {
    anchorId
    columnCardsCollection(limit: 2) {
      items {
        __typename
        ...resourceFeatureCard
        ...resourceCard
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
      url(transform: {
        format: WEBP,
      })
    }
    ctaType
  }
  `
  },
  UiResourceList3ColumnRow: {
    fragmentName: 'resourceList3ColumnRow',
    fragment: `fragment resourceList3ColumnRow on UiResourceList3ColumnRow {
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
            url(transform: {
              format: WEBP,
            })
          }
          ctaType
        }
      }
    }
  }`
  },
  UiThreeCardGroup: {
    fragmentName: 'threeCardGroup',
    fragment: `fragment threeCardGroup on UiThreeCardGroup {
    anchorId
    title{
      json
    }
    image {
      title
      description
      url(transform: {
        format: WEBP,
      })
    }
    mobileImage {
      title
      description
      url(transform: {
        format: WEBP,
      })
    }
    titleColor
    backgroundColor
    backgroundSize
    backgroundPosition
    componentType
    cardsCollection(limit: 20) {
      items {
        __typename
        ...cardAdvanced
      }
    }
  }

  fragment cardAdvanced on UiCardAdvanced {
    anchorId
    title: displayTitle {
      json
    }
    cardContent {
      json
    }
    tabBullets {
      json
    }
    tabBulletsColor
    tabTitle
    statPrefix
    statSuffix
    activeTabBgColor
    activeTabTitleColor
    inactiveTabBgColor
    inactiveTabTitleColor
    tabHeadlineColor
    tabDescriptionColor
    backgroundColor
    backgroundImage {
      title
      description
      url(transform: {
        format: WEBP,
      })
    }
    logo {
      title
      description
      url(transform: {
        format: WEBP,
      })
    }
    cta {
      __typename
      ...externalLink
      ...internalLink
    }
    ctaType
    optionalCta {
      __typename
      ...internalLink
      ...externalLink
    }
    optionalCtaType
  }`
  }
}

// fragments that are needed as sub-fragments of more than one fragment/parent model
const commonComponentDictionary = [
  {
    contentfulModelName: 'InternalNavigationLink',
    fragmentName: 'internalLink',
    fragment: `fragment internalLink on InternalNavigationLink {
    displayTitle
    css
    querystring
    internalLink {
      pagePath
      title
      slug
    }
    target
  }`
  },
  {
    contentfulModelName: 'ExternalNavigationLink',
    fragmentName: 'externalLink',
    fragment: `fragment externalLink on ExternalNavigationLink {
    displayTitle
    css
    externalLink
    target
    previewTitle
    previewContent
    secondaryPreviewImage{
      url(transform: {
        format: WEBP,
      })
      description
      title
    }
    previewImage{
      url(transform: {
        format: WEBP,
      })
      description
      title
    }
    iconLink{
          icon
        }
  }`
  },
  {
    contentfulModelName: 'UiResourceFeatureCard',
    fragmentName: 'resourceFeatureCard',
    fragment: `fragment resourceFeatureCard on UiResourceFeatureCard {
    anchorId
    cardTitle: displayTitle
    {
      json
    }
    cardSubTitle: subTitle
    cardContent: content
    cardPosition: position
    photoLabel
    variation
    mobileImage {
      url(transform: {
        format: WEBP,
      })
      description
    }
    desktopImage {
      url(transform: {
        format: WEBP,
      })
      description
    }
    cta {
      __typename
      ...internalLink
      ...externalLink
    }
  }`
  }
]

const getPageOutlineQuery = (slug: string, locale: string, preview: boolean) => {
  return `
  {
    uiPageCollection(where: {slug: "${slug}"}, limit: 1, locale: "${locale}", preview: ${preview}) {
      items {
        slug
        blocksCollection(limit: 20) {
          items {
            __typename
          }
        }
      }
    }
  }
  `
}

async function generatePageQuery(slug: string, locale: string, preview: boolean, path?: string): Promise<string> {
  const pageOutlineResult: any = await fetchGraphQL(getPageOutlineQuery(slug, locale, preview), preview)

  // beginning of every query for a page
  // Do not exceed the limit of blocksCollection(limit: 26) over 30, otherwise can cause 404's of published pages
  let dynamicQuery = `{
    uiPageCollection(where: {slug: "${slug}"}, limit: 1, locale: "${locale}", preview: ${preview}) {
      items {
        title
        slug
        pagePath
        sys{
          id
        }
        seo {
          excludeFromSitemap
          metaTitle
          metaDescription
          canonicalUrl
          noIndex
          noFollow
          maxVideo
          maxImage
          maxSnippet
          ogtype
          ogTitle
          ogDescription
          ogimage {
            title
            description
            url(transform: {
              format: WEBP,
            })
          }
          twitterimage {
            title
            description
            url(transform: {
              format: WEBP,
            })
          }
          twitterTitle
          twitterCard
          twitterSite
          twitterCreator
          twitterDescription
        }
        isArticle
        isSimplified
        isAwardsHidden
        blocksCollection(limit: 26) {
          items {
            __typename
  `

  const modelsInLIst = []
  const fragmentsInQuery = []

  // for each typename in the blocks' collection, add it to the full queries block collection specifically called out, but only if it
  // has not been added yet
  if (
    pageOutlineResult?.data?.uiPageCollection?.items?.length &&
    pageOutlineResult?.data?.uiPageCollection?.items[0]?.blocksCollection?.items?.length
  ) {
    pageOutlineResult.data.uiPageCollection.items[0].blocksCollection.items.forEach((block: any) => {
      if (block != null && componentDictionary[block.__typename] != null && !modelsInLIst.includes(block.__typename)) {
        dynamicQuery += '...' + componentDictionary[block.__typename].fragmentName + ' \n'
        modelsInLIst.push(block.__typename)
      }
    })
  }

  dynamicQuery += `}
           }
       }
     }
   }
   `

  // for each typename in the blocks' collection, add it to the full queries fragment list
  // but only if it has not been added yet
  if (
    pageOutlineResult?.data?.uiPageCollection?.items?.length &&
    pageOutlineResult?.data?.uiPageCollection?.items[0]?.blocksCollection?.items?.length
  ) {
    pageOutlineResult.data.uiPageCollection.items[0].blocksCollection.items.forEach((block: any) => {
      if (block != null && componentDictionary[block.__typename] != null && !fragmentsInQuery.includes(block.__typename)) {
        dynamicQuery += componentDictionary[block.__typename].fragment + ' \n'
        fragmentsInQuery.push(block.__typename)
      }
    })
  }

  // check the generated string for any common components that need to be added as sub-fragments
  commonComponentDictionary.forEach((component: any) => {
    if (dynamicQuery.indexOf('...' + component.fragmentName) > -1) {
      dynamicQuery += component.fragment + ' \n'
    }
  })

  // just to be sure its under the Contentful limit, we compress the generated string.
  dynamicQuery = compress(dynamicQuery)

  return dynamicQuery
}

export async function getDynamicPageContent(slug: string, locale: string, preview: boolean, path?: string) {
  await avoidRateLimit(3000)
  try {
    const query = await generatePageQuery(slug, locale, preview, path)
    const entry: uiPageQuery = await fetchGraphQL(query, preview)
    const page = entry?.data?.uiPageCollection?.items[0] || null
    const data: pageData = {
      page,
      articles: null,
      articleList: [],
      pageListingArticle: null,
      pageListingCustomerStory: null
    }
    if (page != null && page?.pagePath && slug !== 'home' && path !== page?.pagePath) {
      data.page = null
      return data
    }
    const findArticle = page?.blocksCollection?.items?.find((item) => {
      return item && item.__typename === 'Article'
    })

    const findArticleList = page?.blocksCollection?.items?.find((item) => {
      return item && item.__typename === 'UiArticleList'
    })

    const findPageListingResources: UiPageListing = page?.blocksCollection?.items?.find((item: UiPageListing) => {
      return item && item.__typename === 'UiPageListing' && item.type === 'resources'
    })
    const findPageListingCustomerStory: UiPageListing = page?.blocksCollection?.items?.find((item: UiPageListing) => {
      return item && item.__typename === 'UiPageListing' && item.type === 'customer stories'
    })

    if (findPageListingResources) {
      data.pageListingArticle = await getPageListing(findPageListingResources, locale, preview)
    }

    if (findPageListingCustomerStory) {
      data.pageListingCustomerStory = await getPageListing(findPageListingCustomerStory, locale, preview)
    }

    if (findArticleList) {
      const articleBlock = page?.blocksCollection?.items?.find((item) => {
        return item.__typename === 'UiArticleList'
      })
      data.articleList = await getArticles(locale, preview, 0, articleBlock.articleDirectory, articleBlock.articleDirectory != 'resources')
    }

    if (findArticle) {
      const artMap = Promise.all(
        page?.blocksCollection?.items?.map(async (block) => {
          if (block?.__typename === 'Article' && block?.sys?.id != null) {
            return (await getArticle(block.sys.id, preview, locale)) || null
          }
        })
      )
      const articles = (await artMap).filter((item) => {
        return item !== undefined
      })

      const result = articles[0] || null
      if (result && page?.isArticle === false) result.author = null
      data.articles = result
    }

    return data
  } catch (err) {
    console.log(err)
  }
}

const findPage = (id: string, locale: string, preview: boolean) => {
  return `{
    uiPage(id: "${id}", locale: "${locale}", preview: ${preview}){
      slug
      pagePath
    }
  }`
}

const localePageData = (slug: string, locale: string, preview: boolean) => {
  return `{
	uiPageCollection(where: {slug: "${slug}"}, locale: "${locale}", preview: ${preview}) {
	  items {
		  slug,
		  pagePath
	  }
	}
  }`
}

export async function getPageByID(id: string, locales: string[], preview: boolean): Promise<uiUniquePage[]> {
  if (id) {
    try {
      return await Promise.all(
        locales.map(async (lang) => {
          const query = findPage(id, lang, preview)
          const entry: uiUniquePageQuery = await fetchGraphQL(query, preview)
          const parseData = entry.data?.uiPage
          const localePageDataQuery = localePageData(parseData?.slug, lang, preview)
          const localePageDataResponse: any = await fetchGraphQL(localePageDataQuery, preview)
          // check if any results are returned for this page in this locale
          const localePageHasVersion = localePageDataResponse?.data ? localePageDataResponse?.data?.uiPageCollection?.items.length > 0 : false
          // do not provide a slug if the page does not exist in this language

          return parseData
            ? {
                slug: localePageHasVersion ? parseData?.slug : '',
                pagePath: localePageHasVersion && parseData?.slug != 'home' ? parseData?.pagePath : '',
                language: lang
              }
            : null
        })
      )
    } catch (err) {
      console.log(err)
    }
  }
}
