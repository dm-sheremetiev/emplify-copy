import { uiPage, imagesI } from '.';
import { UiArticle } from './blocks';

// Languages
export interface language {
  displayTitle: string;
  languageCode: string;
}

// Paths
export interface pathsData {
  data: {
    uiPageCollection: {
      items: paths[];
    };
  };
}

export interface paths {
  slug: string;
  pagePath: string;
  sys: {
    id: string;
  };
}

// Articles
export interface articleData {
  data: {
    articleCollection: {
      items: UiArticle['article'][];
    };
  };
}



// Pages

export interface pageData {
  page: uiPage;
  articles: UiArticle['article'];
  articleList: any[];
  pageListingArticle: pageListing[];
  pageListingCustomerStory: pageListing[];
}

// Pages Listing
export interface pageListingCollection {
  data: {
    uiPageCollection: {
      items: pageListing[];
    };
  };
}

export interface pageListing {
  title: string;
  pagePath: string;
  slug: string;
  blocksCollection: {
    items: pageListingContent[];
  };
}

export type pageListingContent = articlePageListing;
export interface articlePageListing {
  image: imagesI;
  previewContent: string;
  secondaryPreviewImage: imagesI;
}
