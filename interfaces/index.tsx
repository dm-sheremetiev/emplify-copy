import { ButtonProps } from '../storybookBuild/components/Button/Button';
import { IconsType } from '../storybookBuild/assets/icons';
import { Document } from '@contentful/rich-text-types';
import { contentIClean } from './blocks';

export type navigationLink = externalLink | internalLink | internalLinkCard | linkProducts | jsonModel;
export type ctaType = ButtonProps['type'];

export interface uiPageQuery {
  data: {
    uiPageCollection: {
      items: uiPage[];
    };
  };
}

export interface uiUniquePageQuery {
  data: {
    uiPage: {
      slug: string;
      pagePath: string;
    };
  };
}

export interface uiUniquePage {
  slug: string;
  pagePath: string;
  language: string;
}

export interface uiPage {
  title: string;
  slug: string;
  pagePath: string;
  sys: {
    id: string;
  };
  blocksCollection: {
    items: Array<contentIClean | null>;
  };
  pageScripts: pageScripts;
  seo: SeoPage;
  isSimplified: boolean;
  isAwardsHidden: boolean;
  isArticle: boolean;
}

export interface uiSubMenu {
  __typename: 'UiSubMenu';
  displayTitle: string;
  title: string;
  abstract: string;
  navigationTitle: string;
  link: navigationLink;
  linkAboveTitle: navigationLink;
  ctaLink: navigationLink;
  learnMoreText: string;
  subMenuColumnsCollection: {
    items: {
      abstract: string;
      backgroundColor: string;
      columnTitle: string;
      columnTitleLink: any;
      thumbnail: imagesI;
      date: string;
      hideDate: boolean;
      linkListCollection: {
        items: navigationLink[];
      };
    }[];
  };
  menuColumnsCollection: {
    items: {
      type: 'Default' | 'Link side image' | 'Link card' | 'Products';
      displayTitle: string;
      linksCollection: {
        items: navigationLink[];
      };
    }[];
  };
}

export interface linkProducts {
  __typename: 'UiLinkProducts';
  anchordId: string;
  color: string;
  links: {
    anchorId: string;
    cta: internalLink;
    subCtaCollection: {
      items: navigationLink[];
    };
  };
}

export interface UiCustomerStory {
  anchordId: string;
  content: richText;
  image: imagesI;
  logo: imagesI;
  link: navigationLink;
}

export interface internalLinkCard {
  __typename: 'UiInternalLinkCard';
  anchorId: string;
  card: UiCustomerStory;
}

export interface linkSideImage {
  __typename: 'UiInternalLinkSideImage';
  anchordId: string;
  image: imagesI;
  link: navigationLink;
}

export interface externalLink {
  __typename: 'ExternalNavigationLink';
  displayTitle: string;
  css: string;
  externalLink: string;
  target: string;
  iconLink: iconTypes;
  previewTitle: string;
  previewContent: string;
  previewImage: imagesI;
  secondaryPreviewImage: imagesI;
}

export interface internalLink {
  css: string;
  displayTitle: string;
  querystring: string;
  target: string;
  internalLink: {
    blocksCollection?: {
      items: Array<contentIClean | null>;
    };
    title: string;
    slug: string;
    pagePath: string;
  };
  __typename: 'InternalNavigationLink';
}

export interface pageScripts {
  headerStartScripts: string;
  headerEndScripts: string;
  bodyStartScripts: string;
  bodyEndScripts: string;
}

export interface SeoPage {
  excludeFromSitemap: boolean;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  noIndex: boolean;
  noFollow: boolean;
  ogimage: imagesI;
  ogtype: string;
  ogTitle: string;
  ogDescription: string;
  twitterimage: imagesI;
  twitterTitle: string;
  twitterCard: string;
  twitterSite: string;
  twitterCreator: string;
  twitterDescription: string;
  maxVideo: string;
  maxSnippet: string;
  maxImage: 'none' | 'standard' | 'large';
}

export interface richText {
  json: Document;
}

export interface imagesI {
  sys?: {
    id: string;
  };
  description: string;
  title: string;
  url: string;
  width?: number;
  height?: number;
}

export interface jsonModel {
  internalName: string
  componentName: string
  data: any
}

export interface iconTypes {
  icon: IconsType;
}
