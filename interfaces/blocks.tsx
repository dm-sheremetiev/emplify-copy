import { ctaType, externalLink, iconTypes, imagesI, navigationLink, richText, UiCustomerStory } from '.';

export type contentIClean = UiMenuColumn &
  UiRawHtml &
  UiHero &
  UiProductBanner &
  UiThreeCardGroup &
  UiResourceCardGroup &
  UiTeamMembers &
  UiTestimonials &
  UiBrandBlock &
  UiQuoteBlock &
  UiFeatureGroup &
  UiSecondaryContentArea &
  UiPreFooterCta &
  UiResourceCardBlock &
  UiResourceFeaturedPost &
  UiArticleCallToAction &
  UiContactBanner &
  UiEmbeddedForm &
  UiProductHeader &
  UiResourceList2ColumnRow &
  UiResourceList3ColumnRow &
  UiResourceFeatureCardBlock &
  UiPageListing &
  UiPageListingNotDynamic &
  UiArticleListModel &
  UiCustomerStory &
  UiHeroAdvanced &
  UiThreeIconParagraphAlt &
  UiLogoBanner &
  UiTrialPageGrid &
  UiPageContent &
  UiArticle &
  Article &
  UiSearchResults &
  UiAwards &
  UiVideoTakeover &
  jsonModel

export interface UiComponent {
  anchorId: string;
}

export interface jsonModel {
  __typename: string;
  componentName: string;
  data: any;
}

export interface Article {
  sys: {
    id: string;
  };
}

export interface UiArticleListModel extends UiComponent {
  __typename: string;
  title: string;
  headingMain: string;
  featuredArticle: any;
  blueTheme: boolean;
  articlesPerPage: number;
  showCategories: boolean;
  showTopics: boolean;
  articleDirectory: string;
  hideFeaturedSection: boolean;
  imageSize: string;
  imageObjectFit: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down' | 'inherit' | 'initial' | 'revert' | 'unset';
}

export interface UiSearchResults extends UiComponent {
  __typename: string;
  resultsPerPage: number;
  noResultsTitle: string;
  noResultsText: string;
}

export interface UiPageListing extends UiComponent {
  __typename: string;
  numberOfPageItems: number;
  displayTitle: string;
  cssBackgroundColor: string;
  css: string;
  type: string;
  linkCardTitle: string;
  pagePath: string;
}

export interface UiPageListingNotDynamic extends UiComponent {
  backgroundColor: string;
  cardContentCollection: {
    items: navigationLink[];
  };
  css: string;
  displayTitle: string;
  linkCardTitle: string;
  type: string;
  componentType: string;
  centerContentResources: boolean;
  __typename: string;
}

export interface UiPageContent extends UiComponent {
  __typename: string
  article: {
    sys: {
      id: string
    }
    image: imagesI
    secondaryPreviewImage: imagesI
    previewContent: string
    displayTitle: string
    subTitle: string
    postMeta: string
    content: {
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
    publishedDate: string
    author: {
      photo: imagesI
      fullName: string
      firstName: string
      lastName: string
    }
    category: {
      displayTitle: string
    }
    channel: {
      displayTitle: string
    }
    topicCollection: {
      items: {
        displayTitle: string
      }[]
    }
  }
}
export interface UiArticle extends UiComponent {
  __typename: string
  article: {
    sys: {
      id: string
    }
    image: imagesI
    displayTitle: string
    subTitle: string
    postMeta: string
    content: {
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
    previewContent: string
    publishedDate: string
    author: {
      photo: imagesI
      fullName: string
      firstName: string
      lastName: string
    }
    category: {
      order: number
      displayTitle: string
    }
    channel: {
      displayTitle: string
    }
    topicCollection: {
      items: {
        displayTitle: string
      }[]
    }
    secondaryPreviewImage: imagesI
  }
}



export interface UiMenuColumn extends UiComponent {
  __typename: string;
  displayTitle: string;
  linksCollection: { items: navigationLink[] };
}

export interface UiHtmlContent extends UiComponent {
  __typename: string;
  html: richText;
}

export interface UiRawHtml extends UiComponent {
  __typename: string;
  rawHtml: string;
}

export interface UiHero extends UiComponent {
  __typename: string;
  componentType: string;
  image: imagesI;
  video: imagesI
  title: richText;
  backgroundColor: string;
  titleColor: string;
  textColor: string;
  subTitle: richText;
  content: richText;
  ctaType: ctaType;
  cta: navigationLink;
  optionalCtaType: ctaType;
  optionalCta: navigationLink;
  alignTextLeft: boolean;
  logoItemsCollection: {
    items: {
      id?: string;
      logo: imagesI;
    }[];
  };
}

export interface UiHeroAdvanced extends UiComponent {
  __typename: string;
  titleColor: string;
  orientation: string;
  subTitleColor: string;
  backgroundColor: string;
  boxBackgroundColor: string;
  eyebrowHeadlineColor: string;
  theme: 'dark' | 'light' | 'medium';
  boxBackgroundType: 'solid' | 'extended';
  bannerType: 'solid' | 'poster' | 'box_view';
  bannerHeight: 'full' | 'tall' | 'half' | 'short';
  backgroundSize: 'cover' | 'contain' | 'fill' | 'none';
  image: imagesI;
  mobileImage: imagesI;
  title: richText;
  ctaType: ctaType;
  content: richText;
  subTitle: richText;
  cta: navigationLink;
  optionalCtaType: ctaType;
  eyebrowHeadline: richText;
  optionalCta: navigationLink;
}

export interface UiProductBanner extends UiComponent {
  __typename: string;
  image: imagesI;
  title: richText;
  content: richText;
  ctaType: ctaType;
  cta: navigationLink;
  alignTextLeft: boolean;
}

export interface UiThreeCardGroupAlt extends UiComponent {
  __typename: string;
  cardsCollection: {
    items: UiCardAdvanced[];
  };
}

export interface UiThreeCardGroup extends UiComponent {
  __typename: string;
  title: richText;
  titleColor: string;
  backgroundSize: string;
  backgroundColor: string;
  backgroundPosition: string;
  image: imagesI;
  mobileImage: imagesI;
  componentType: string;
  cardsCollection: {
    items: UiCardAdvanced[] | UiCard[];
  };
}

export interface UiCard {
  __typename: 'UiCard'
  blueBackgroundColor: boolean
  cardContent: richText
  image: imagesI
  rightIconLink: iconTypes
  title: richText
}



export interface UiCardAdvanced {
  __typename: 'UiCardAdvanced';
  cardContent: richText;
  rightIconLink: iconTypes;
  title: richText;
  backgroundColor: string;
  backgroundImage: imagesI;
  tabTitle: string;
  activeTabBgColor: string;
  activeTabTitleColor: string;
  inactiveTabBgColor: string;
  inactiveTabTitleColor: string;
  tabHeadlineColor: string;
  tabDescriptionColor: string;
  tabBullets: richText;
  tabBulletsColor: string;
  logo: imagesI;
  cta: navigationLink;
  ctaType: ctaType;
  statPrefix: string;
  statSuffix: string;
  optionalCta: navigationLink;
  optionalCtaType: ctaType;
}

export interface UiResourceCardGroup extends UiComponent {
  __typename: string;
  resourceCardsCollection: {
    items: {
      content: string;
      ctaType: ctaType;
      cta: navigationLink;
      image: imagesI;
      subTitle: string;
      title: richText;
    }[];
  };
}

export interface UiTeamMembers extends UiComponent {
  __typename: string;
  isColumnLayout: boolean;
  teamMembersCollection: {
    items: {
      bio: string;
      image: imagesI;
      isRounded: boolean;
      name: string;
      role: string;
      ctaText: string;
      ctaLink: string;
      socialLinksCollection: {
        items: externalLink[];
      };
    }[];
  };
}

export interface UiAwards extends UiComponent {
  __typename: string;
  title: richText;
  awardItemsCollection: {
    items: {
      id?: string;
      title: string;
      imagesCollection: {
        items: imagesI[];
      };
    }[];
  };
}

export interface UiLogoBanner extends UiComponent {
  __typename: string;
  title: richText;
  backgroundColor: string;
  logoItemsCollection: {
    items: {
      id?: string;
      logo: imagesI;
    }[];
  };
}

export interface UiVideoTakeover extends UiComponent {
  __typename: string;
  videoSourceUrl: string;
  allowFullScreen: boolean;
  iconPlay: imagesI;
  backgroundCoverImage: imagesI;
}

export interface UiTrialForm extends UiComponent {
  __typename: string;
  heading: string;
  bulletPointsList: richText;
  imagesCollection: {
    items: imagesI[];
  };
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  company: string;
  country: string;
  jobFunction: string;
  jobLevel: string;
  numberOfEmployees: string;
  industry: string;
  password: string;
  consent: string;
  privacyPolicy: richText;
  submitButtonText: string;
  loginLink: string;
  loginText: string;
  resultBlockSuccessTitle: string;
  resultBlockSuccessText: richText;
  resultBlockFailTitle: string;
}

export interface UiTrialPageGrid extends UiComponent {
  __typename: string;
  headingLeft: string;
  descriptionLeft: richText;
  bulletPointsListColLeft: richText;
  ctaTextLeft: string;
  ctaLinkLeft: string;
  notice: string;
  headingRight: string;
  tagRecommended: string;
  descriptionRight: richText;
  bulletPointsListColRight: richText;
  ctaTextRight: string;
  ctaLinkRight: string;
  ctaBanner: richText;
  tableData: {
    tables: [];
  };
  stripeBanner: richText;
  stripeBannerButtonText: string;
  stripeBannerButtonLink: string;
}

export interface UiTestimonials extends UiComponent {
  __typename: string;
  testimonialsCollection: {
    items: {
      company: string;
      companyLogo: imagesI;
      designation: string;
      personName: string;
      photo: imagesI;
      quote: richText;
      storyLink: navigationLink;
    }[];
  };
}

export interface UiBrandBlock extends UiComponent {
  __typename: string;
  brandBlockContent: string;
  brandBlockTitle: richText;
  image: imagesI;
  backgroundImage: imagesI;
}

export interface UiQuoteBlock extends UiComponent {
  __typename: string;
  backgroundImage: imagesI;
  backgroundMobileImage: imagesI;
  companyName: string;
  companyNameColor?: string;
  quoteByColor?: string;
  headlineColor?: string;
  roleColor?: string;
  ctaType: ctaType;
  cta: navigationLink;
  logoImagesCollection: {
    items: imagesI[];
  };
  headline: string;
  quote: string;
  quoteColor: string;
  quoteBy: string;
  optionalCta: navigationLink;
  optionalCtaType: ctaType;
  role: string;
  type: string;
  backgroundColor: string;
  backgroundPosition: string;
  backgroundSize: 'cover' | 'contain' | 'fill' | 'none';
  orientation?: 'left' | 'center' | 'right';
}

export interface UiFeatureGroup extends UiComponent {
  __typename: string;
  title: richText;
  type: string;
  featuresCollection: {
    items: {
      title: richText;
      iconLink: iconTypes;
      content: richText;
    }[];
  };
}

export interface UiSecondaryContentArea extends UiComponent {
  __typename: string;
  secondaryContentTitle: string;
  content: richText;
  iconLink: iconTypes;
  cta: navigationLink;
  ctaType: ctaType;
  desktopImage: imagesI;
  mobileImage: imagesI;
}

export interface UiPreFooterCta extends UiComponent {
  __typename: string;
  footerTitle: string;
  footerContent: string;
  cta: navigationLink;
  ctaType: ctaType;
}

export interface UiThreeIconParagraphAlt extends UiComponent {
  __typename: string;
  title: richText;
  displayContent: string;
  iconLink1: iconTypes;
  icon1SubTitle: string;
  iconLink2: iconTypes;
  iconLink3: iconTypes;
  icon3SubTitle: string;
  threeCardGroup: UiThreeCardGroup;
}

export interface UiResourceFeaturedPost extends UiComponent {
  __typename: string;
  title: richText;
  displaySubTitle: string;
  displayContent: string;
  desktopImage: imagesI;
  mobileImage: imagesI;
  cta: navigationLink;
  photoLabel: string;
}

export interface UiArticleCallToAction extends UiComponent {
  __typename: string;
  image: imagesI;
  displayTitle: string;
  content: richText;
  cta: navigationLink;
}

export interface UiAnimatedBanner extends UiComponent {
  __typename: string;
  title: richText;
  subtitle: richText;
  headlineLeft: richText;
  headlineRight: richText;
  image: imagesI;
  animationType: 'pull' | 'push';
  bannerType?: 'poster' | 'underlap';
  buttonType: ctaType;
  cta: navigationLink;
}

export interface UiContactBanner extends UiComponent {
  __typename: string;
  title: richText;
  displayContent: string;
  image: imagesI;
  alignLeft: boolean;
  form: {
    anchorId: string;
    rawHtml: string;
  };
}

export interface UiEmbeddedForm extends UiComponent {
  __typename: string;
  formTitle: string;
  titleCss: string;
  eyebrow?: string;
  formSubTitle: string;
  subTitleCss: string;
  formStyle: string;
  backgroundColor: string;
  backgroundSize: string;
  backgroundPosition: string;
  type: 'default' | 'article' | 'alt';
  backgroundType?: 'poster' | 'solid';
  rawFormEmbed: UiRawHtml;
  image: imagesI;
  mobileImage: imagesI;
  twoColumns: boolean;
  formOptions: jsonModel;
}

export interface UiProductHeader {
  __typename: string;
  logo: imagesI;
  anchorLinksCollection: { items: externalLink[] };
}

export interface UiResourceList2ColumnRow extends UiComponent {
  __typename: string;
  columnCardsCollection: {
    items: columnCardsCollection[];
  };
}

export interface UiResourceList3ColumnRow extends UiComponent {
  __typename: string;
  columnCards: {
    anchorId: string;
    resourceCardsCollection: {
      items: UiResourceCard[];
    };
  };
}

// Tricky blocks

export interface resourceCardBlockData {
  title: richText;
  displaySubTitle: string;
  displayContent: string;
  cta: navigationLink;
  ctaType: ctaType;
  image: imagesI;
}

export interface UiResourceCardBlock extends UiComponent, resourceCardBlockData {
  __typename: string;
}

export interface UiResourceCard extends UiComponent, resourceCardBlockData {
  __typename: 'UiResourceCard';
}

//
export interface resourceFeatureCardData extends UiComponent {
  cardTitle: richText;
  cardSubTitle: string;
  cardPosition: string;
  cardContent: string;
  variation: string;
  desktopImage: imagesI;
  mobileImage: imagesI;
  cta: navigationLink;
  photoLabel: string;
}

export interface UiResourceFeatureCardBlock extends UiComponent, resourceFeatureCardData {
  __typename: string;
}

export interface UiResourceFeatureCard extends UiComponent, resourceFeatureCardData {
  __typename: 'UiResourceFeatureCard';
}

//

export type columnCardsCollection = UiResourceFeatureCard | UiResourceCard;
