module.exports = function (migration) {

    // new article list content type
    const uiSearchResults = migration.createContentType('uiSearchResults')
    .name('UI Search Results')
    .displayField('internalName');

    uiSearchResults.createField('internalName').localized(true).type('Symbol').required(false).name('Internal Name');
    uiSearchResults.createField('resultsPerPage').localized(true).type('Integer').required(true).name('Results Per Page');
    uiSearchResults.createField('noResultsTitle').localized(true).type('Symbol').required(true).name('No Results Title');
    uiSearchResults.createField('noResultsText').localized(true).type('Symbol').required(true).name('No results Text');

     // add new validation rule to UI Page
     const uiPage = migration.editContentType('uiPage');
     uiPage.createField('doNotIndexInternalSearch').localized(true).type('Boolean').required(false).name('Do Not Index Internal Search');
     uiPage.editField('blocks').items({
      "type": "Link",
      "validations": [
        {
          "linkContentType": [
            "uiFeatureGroup",
            "uiAnimatedBanner",
            "uiArticle",
            "uiArticleBanner",
            "uiArticleCallToAction",
            "uiArticleList",
            "uiArticleQuote",
            "uiAwards",
            "uiBrandLogos",
            "uiBrandBlock",
            "uiCampaignBanner",
            "uiContactBanner",
            "uiEmbeddedForm",
            "uiGroupedBrandBlock",
            "uiHtmlContent",
            "uiIconLinks",
            "uiLocations",
            "uiPageContent",
            "uiPageListing",
            "uiPageListingNotDynamic",
            "uiPreFooterCta",
            "uiProductHeader",
            "uiQuoteBlock",
            "uiRawHtml",
            "uiResourceCardGroup",
            "uiResourceFeatureCard",
            "uiResourceFeaturedPost",
            "uiResourceList2ColumnRow",
            "uiResourceList3ColumnRow",
            "uiSearchResults",
            "uiShortBanner",
            "uiStatistic",
            "uiStatsblock",
            "uiTeamMembers",
            "uiTestimonials",
            "uiThreeCardGroup",
            "uiThreeIconParagraph",
            "uiTrialForm",
            "uiCxIndexBanner",
            "uiFeatureGroup",
            "uiHero",
            "uiHeroAdvanced",
            "uiHeroArea",
            "uiProductBanner",
            "uiSecondaryContentArea"
          ]
        }
      ],
      "linkType": "Entry"
    })
}
