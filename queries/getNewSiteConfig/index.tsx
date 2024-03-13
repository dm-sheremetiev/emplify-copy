import { fetchGraphQL } from '@/queries/config';
import compress from 'gql-compress';

// Interfaces
import { siteConfigI, siteConfigQuery } from '@/interfaces/siteConfig';

const query = (locale: string, preview: boolean) => `
{
  siteConfigurationCollection(limit: 1, locale: "${locale}", preview: ${preview}) {
    items {
      siteUrl
      languageAlertMessage{
        internalName
        componentName
        data
      }
      headerLogo {
        title
        description
        url
      }
      headerUtilityNavigationCollection(limit: 10) {
        items {
          __typename
          ...externalNavigationLink
          ...internalNavigationLink
        }
      }
      headerNewMainMenu {
        subMenusCollection(limit: 7) {
          items {
            __typename
            ...uiMegaMenuSubMenu
          }
        }
      }
      headerLanguagesCollection {
        items {
          ...jsonModel
        }
      }
      headerUtilityNavigationCta {
        __typename
        ...externalNavigationLink
        ...internalNavigationLink
      }
      
      footerLogo {
        title
        description
        url
      }
      footerSocialLinksCollection(limit: 6) {
          items {
            displayTitle
            css
            externalLink
            target
            iconLink {
              icon
            }
          }
        }
      footerRightImage {
        title
        description
        url
      }
      footerLinksCollection(limit: 10) {
        items {
          __typename
          ...externalNavigationLink
          ...internalNavigationLink
        }
      }
      footerCopyright {
        json
      }
      footerBlocksCollection {
        items {
          __typename
          ...uiRawHtml
        }
      }
      footerMainMenu {
        subMenusCollection(limit: 7) {
          items {
            __typename
            ...externalNavigationLink
            ...internalNavigationLink
            ...uiSubMenu
          }
        }
      }
      awardsConfiguration {
        ...logoBanner
      }
      seoConfiguration {
        internalName
        componentName
        data
      }
    }
  }
}

fragment logoBanner on UiLogoBanner {
  title {
    json
  }
  backgroundColor
  logoItemsCollection(limit: 10) {
    items {
      logo {
          url
          description
          title
        }
    }
  }
}

fragment uiSubMenu on UiSubMenu {
  displayTitle
  link {
    __typename
    ...externalNavigationLink
    ...internalNavigationLink
  }
  linkAboveTitle{
    __typename
    ...internalNavigationLink
  }
  menuColumnsCollection(limit: 1) {
    items {
      type
      displayTitle
      linksCollection(limit: 10) {
        items {
          __typename
          ...externalNavigationLink
          ...menuInternalNavigationLink
          ...linkProducts
        }
      }
    }
  }
}

fragment linkProducts on UiLinkProducts {
  anchorId
  color
  links{
    anchorId
    cta{
      displayTitle
      css
      target
      internalLink{
        title
        slug
        pagePath
      }
      querystring
    }
    subCtaCollection (limit: 10){
      items{
        __typename
        ...internalNavigationLink
      }
    }
  }
}

fragment menuInternalNavigationLink on InternalNavigationLink {
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
        ...article
      }
    }
  }
}

fragment uiRawHtml on UiRawHtml {
  rawHtml
}

fragment jsonModel on JsonModel {
  internalName
  componentName
  data
}

fragment externalNavigationLink on ExternalNavigationLink {
  displayTitle
  css
  externalLink
  target
}

fragment internalNavigationLink on InternalNavigationLink {
  displayTitle
  css
  querystring
  internalLink {
    pagePath
    title
    slug
    blocksCollection(limit: 2){
      items{
        __typename
        ...article
      }
    }
  }
  target
}

fragment article on Article {
  image {
    title
    url
    description
  }
  secondaryPreviewImage  {
    title
    url
    description
  }
  previewContent
  title
  publishedDate
}

fragment uiMegaMenuSubMenu on UiMegaMenuSubMenu {
  title
  navigationTitle
  abstract
  learnMoreText
  ctaLink {
    __typename
    ...externalNavigationLink
    ...internalNavigationLink
  }
  subMenuColumnsCollection(limit: 3) {
    items {
      backgroundColor
      columnTitle
      abstract
      date
      hideDate
      thumbnail {
        title
        description
        url
      }
      columnTitleLink {
        __typename
        ...externalNavigationLink
        ...internalNavigationLink
      }
      linkListCollection(limit: 10) {
        items {
          __typename
          ...externalNavigationLink
          ...internalNavigationLink
        }
      }
    }
  }
}
  `

export async function getNewSiteConfig(locale: string, preview?: boolean): Promise<siteConfigI> {
  const siteConfig: siteConfigQuery = await fetchGraphQL(compress(query(locale, preview)), preview);
  const data = siteConfig?.data?.siteConfigurationCollection?.items[0] || null;
  return data;
}

