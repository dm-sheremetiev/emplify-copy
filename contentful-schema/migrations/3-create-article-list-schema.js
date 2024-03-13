module.exports = function (migration) {

    // new article list content type
    const uiArticleList = migration.createContentType('uiArticleList')
    .name('UI Article List')
    .displayField('title');

    uiArticleList.createField('internalName').localized(true).type('Symbol').required(false).name('Internal Name');
    uiArticleList.createField('featuredArticle').type('Link').linkType("Entry").localized(true).required(false).name('Featured Article').validations([
      {
        "linkContentType": [
          "uiPage"
        ]
      }
    ]);
    uiArticleList.createField('blueTheme').name('Blue Theme').required(true).type('Boolean').localized(true).defaultValue({
      "en": false
    })
    uiArticleList.createField('articlesPerPage').name('Articles Per Page').required(true).type('Integer').localized(true).defaultValue({
      "en": 12
    })

    // add new featured article boolean to article page
    const article = migration.editContentType('article');
    article.createField('isFeaturedArticle').name('Is Featured Article').required(true).type('Boolean').localized(true).defaultValue({
      "en": false
    })
    article.createField('hideFromLists').name('Hide From Lists').required(true).type('Boolean').localized(true).defaultValue({
      "en": false
    })
    article.createField('overrideLink').type('Link').linkType("Entry").name('Override Link').validations([
      {
        "linkContentType": [
          "externalNavigationLink",
          "internalNavigationLink"
        ]
      }
    ]);

     // add new validation rule to UI Page
     const uiPage = migration.editContentType('uiPage');
     uiPage.editField('blocks').items({
      "type": "Link",
      "validations": [
        {
          "linkContentType": [
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
              "uiArticleQuote",
              "uiAwards",
              "uiBrandLogos",
              "uiBrandBlock",
              "uiCampaignBanner",
              "uiArticleList",
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
              "uiThreeIconParagraph"
          ]
        }
      ],
      "linkType": "Entry"
    })
}