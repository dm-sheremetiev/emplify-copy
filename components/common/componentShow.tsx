import { contentIClean } from '@/interfaces/blocks';
import { pageData } from '@/interfaces/queries';
import { UiPageListingComp } from '../blocks/UiPageListing'
import {
  UiArticleComp,
  UiHeroComp,
  UiRawHtmlComponent,
  UiHeroProductBanner,
  UiResourceCardGroupComp,
  UiTeamMembersComp,
  UiQuoteBlockComp,
  UiFeatureGroupComp,
  UiSecondaryContentAreaComp,
  UiPreFooterCtaComp,
  UiResourceFeatureCardComp,
  UiResourceFeaturedPostComp,
  UiArticleCTAComp,
  UiShortBannerComp,
  UiContactBannerComp,
  UiResourceList2ColumnRowComp,
  UiResourceList3ColumnRowComp,
  UiEmbeddedFormComp,
  UiThreeCardGroupComp,
  UiArticleList,
  UiHeroAdvancedComp,
  UiStatsblocksComp,
  UiStatisticComp,
  UiAnimatedBannerComp,
  UiHeroCampaignComp,
  IconLinksComp,
  UiLocationsComp,
  UiTrialFormBannerComp,
  UiTrialPageGridComp,
  UiIndustryReportsPageComp,
  UiCxIndexBannerComp,
  UiLogoBannerComp,
  UiVideoTakeoverComp
} from '../blocks'
import { UiSearchResultsView } from '../blocks/UiSearchResults';

export function ComponentShow(block: contentIClean, page?: pageData): JSX.Element {
  const BlockComponents = {
    Article: <UiArticleComp block={block} articles={page?.articles} isArticle={page?.page?.isArticle} />,
    UiHero: <UiHeroComp block={block} />,
    UiHeroAdvanced: <UiHeroAdvancedComp block={block} />,
    UiRawHtml: <UiRawHtmlComponent block={block} />,
    UiProductBanner: <UiHeroProductBanner block={block} />,
    UiThreeCardGroup: <UiThreeCardGroupComp block={block} />,
    UiResourceCardGroup: <UiResourceCardGroupComp block={block} />,
    UiTeamMembers: <UiTeamMembersComp block={block} />,
    UiQuoteBlock: <UiQuoteBlockComp block={block} />,
    UiFeatureGroup: <UiFeatureGroupComp block={block} />,
    UiSecondaryContentArea: <UiSecondaryContentAreaComp block={block} />,
    UiPreFooterCta: <UiPreFooterCtaComp block={block} />,
    UiResourceFeatureCard: <UiResourceFeatureCardComp block={block} />,
    UiResourceFeaturedPost: <UiResourceFeaturedPostComp block={block} />,
    UiArticleCallToAction: <UiArticleCTAComp block={block} />,
    UiResourceFeaturePost: <UiResourceFeaturedPostComp block={block} />,
    UiShortBanner: <UiShortBannerComp block={block} />,
    UiContactBanner: <UiContactBannerComp block={block} />,
    UiResourceList2ColumnRow: <UiResourceList2ColumnRowComp block={block} />,
    UiResourceList3ColumnRow: <UiResourceList3ColumnRowComp block={block} />,
    UiEmbeddedForm: <UiEmbeddedFormComp block={block} />,
    UiArticleList: <UiArticleList block={block} articles={page?.articleList} />,
    UiStatsblock: <UiStatsblocksComp block={block} />,
    UiStatistic: <UiStatisticComp block={block} />,
    UiAnimatedBanner: <UiAnimatedBannerComp block={block} />,
    UiCampaignBanner: <UiHeroCampaignComp block={block} />,
    UiIconLinks: <IconLinksComp block={block} />,
    UiLocations: <UiLocationsComp block={block} />,
    UiTrialForm: <UiTrialFormBannerComp block={block} />,
    UiCxIndexBanner: <UiCxIndexBannerComp block={block} />,
    UiLogoBanner: <UiLogoBannerComp block={block} />,
    UiTrialPageGrid: <UiTrialPageGridComp block={block} />,
    UiIndustryReportsPage: <UiIndustryReportsPageComp block={block} />,
    UiSearchResults: <UiSearchResultsView block={block} />,
    UiVideoTakeover: <UiVideoTakeoverComp block={block} />,
    UiPageListing: (
      <UiPageListingComp block={block} pageListingArticle={page?.pageListingArticle} pageListingCustomerStory={page?.pageListingCustomerStory} />
    ),
    UiPageListingNotDynamic: <UiPageListingComp block={block} />,

  }

  return BlockComponents[block?.__typename]
    ? BlockComponents[block?.__typename]
    : block?.__typename === 'JsonModel' // Use JSON model component if it exists
    ? BlockComponents[block?.componentName]
    : '' //changed this as it shows up for draft items in delivery mode
}
