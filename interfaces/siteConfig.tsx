import { externalLink, imagesI, navigationLink, pageScripts, richText, uiSubMenu } from '.';
import { contentIClean } from './blocks';
import { Document } from '@contentful/rich-text-types';

export interface siteConfigQuery {
  data: {
    siteConfigurationCollection: {
      items: siteConfigI[];
    };
  };
}

export interface siteConfigI {
  languageAlertMessage: {
    internalName: any
    componentName: any
    // New JSON data field to replace content type component
    data: {
      message: string
      cta: {
        link: string
        target: string
        title: string
      }
    }
  }
  awardsConfiguration: {
    __typename: string
    anchorId: string
    backgroundColor: string
    title: richText
    awardItemsCollection: {
      items: {
        id?: string
        title: string
        imagesCollection: {
          items: imagesI[]
        }
      }[]
    }
    logoItemsCollection: {
      items: {
        id: string
        title: string
        imagesCollection?: {
          items: imagesI[]
        }
        logo: imagesI
      }[]
    }
  }
  seoConfiguration: {
    internalName: any
    componentName: any
    // New JSON data field to replace content type component
    data: {
      twitterSite: string
      twitterCreator: string
      defaultTwitterImage: any
      defaultFacebookImage: any
      robotsTxt: string
      twitterCard: string
    }
  }
  siteLevelPageScripts: pageScripts
  siteUrl: string

  // Header Configs (10/26/2023)
  headerInternalName: string
  headerLogo: imagesI
  headerUtilityNavigationCollection: {
    items: navigationLink[]
  }
  headerUtilityNavigationCta: navigationLink
  headerMainMenu: {
    subMenusCollection: {
      items: navigationLink[] | uiSubMenu[]
    }
  }
  headerLanguagesCollection: {
    items: any
  }
  headerNewMainMenu: {
    subMenusCollection: {
      items: uiSubMenu[]
    }
  }

  // Footer Configs (10/26/2023)
  footerInternalName: string
  footerLogo: imagesI
  footerRightImage: imagesI
  footerCopyright: {
    json: Document
    links: {
      assets: {
        block: imagesI[]
      }
      entries: {
        inline: contentIClean[]
      }
    }
  }
  footerBlocksCollection: {
    items: contentIClean[]
  }
  footerLinksCollection: {
    items: navigationLink[]
  }
  footerSocialLinksCollection: {
    items: externalLink[]
  }
  footerMainMenu: {
    subMenusCollection: {
      items: navigationLink[] | uiSubMenu[]
    }
  }
}