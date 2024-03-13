module.exports = function (migration) {

     // add new validation rule to UI Page
     const uiPage = migration.editContentType('uiPage');
     uiPage.createField('isArticle').localized(true).type('Boolean').required(true).name('Is Article').defaultValue({"en": false})

     uiPage.editField('blocks').items({
      "type": "Link",
      "validations": [
        {
          "linkContentType": [
            "uiFeatureGroup",
            "uiFeatureGroup",
            "uiHero",
            "uiHeroAdvanced",
            "uiHeroArea",
            "uiProductBanner",
            "uiSecondaryContentArea",
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
            "uiShortBanner",
            "uiStatistic",
            "uiStatsblock",
            "uiTeamMembers",
            "uiTestimonials",
            "uiThreeCardGroup",
            "uiThreeIconParagraph",
            "uiTrialForm",
            "uiCxIndexBanner",
            "article"
          ]
        }
      ],
      "linkType": "Entry"
    })
}
