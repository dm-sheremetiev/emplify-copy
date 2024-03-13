import { Document } from '@contentful/rich-text-types';

export type Maybe<T> = T | null;

export type Image = {
  url: string;
  width: number;
  height: number;
};

type Metadata = {
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: { url: string };
  canonicalUrl: string;
  description: string;
  title?: string;
  ogUrl?: string;
};

export type TileData = {
  img: string;
  link: string;
  text: string;
};

export type HomepageCopy = {
  title: string;
  excerpt: string;
  positionsTitle: string;
  subexcerpt?: {
    json: Document;
  };
  metadata: Partial<Metadata>;
  heroImage?: Image;
  quote1Image?: { url: string };
  quote1Author?: string;
  quote1AuthorPosition?: string;
  quote1?: {
    json: Document;
  };
  quote2Image?: { url: string };
  quote2Author?: string;
  quote2AuthorPosition?: string;
  quote2?: {
    json: Document;
  };
};

export type DepartmentsCopy = {
  slug: string;
  perex: string;
  feature1?: {
    json: Document;
  };
  feature2?: {
    json: Document;
  };
  mainImage?: Image;
  feature1Image?: Image;
  feature2Image?: Image;
  metadata: Partial<Metadata>;
};

export type GenericPageCopy = {
  title: string;
  excerpt: {
    json: Document;
  };
  content: {
    json: Document;
    links: {
      assets: {
        block: {
          title: string;
          description: string;
          width: number;
          height: number;
          url: string;
          sys: {
            id: number;
          };
        };
      };
    };
  };
  metadata: Partial<Metadata>;
};

export type LocationCopy = {
  image?: {
    url: string;
    width: number;
    height: number;
  };
};
