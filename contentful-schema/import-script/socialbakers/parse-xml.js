process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 1

const fs = require('fs')
const { parse } = require('csv-parse')
const { stringify } = require('csv-stringify')
const convert = require('xml-js')
const contentful = require('contentful-management')
const articleFunc = require('./contentful-create-components/create-article')
const uiPageFunc = require('./contentful-create-components/create-ui-page')
const uiRawHtmlFunc = require('./contentful-create-components/create-ui-raw-html')
const seoFunc = require('./contentful-create-components/create-seo')
var stripHtmlComments = require('strip-html-comments')
var TurndownService = require('turndown')
const { richTextFromMarkdown } = require('@contentful/rich-text-from-markdown')
const cliProgress = require('cli-progress')
const { INLINES } = require('@contentful/rich-text-types')
const useProgressBar = false
var axios = require('axios')
var request = require('request').defaults({ encoding: null })

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const util = require('util')

const spaceId = 'cpumif18y1gd'
const environmentName = 'wordpress-import-phil-test'
const managementApiKey = 'CFPAT-Rns-W58YdGy4hUTODkFpq6sYMCI7zYyJ9fALPEI7bwc'
const disclaimerText =
  "<p><i>Editor's Note: This article was originally published on socialbakers.com. Any statistics or statements included in this article were current at the time of original publication.</i></p>"

const turndownForWhatService = new TurndownService()

const client = contentful.createClient({
  accessToken: managementApiKey
})

let rawArticleData = fs.readFileSync('full-wordpress-export.xml')

const pageIds = [
  '249-20-most-liked-u-s-facebook-pages',
  '1099-fake-followers-check-a-new-free-tool-from-socialbakers',
  'impact-of-coronavirus-on-education',
  '1826-everything-you-need-to-know-about-hashtags-on-facebook',
  'top-beauty-influencers',
  'facebook-page-seo-optimization',
  '10-brands-who-are-seriously-funny-on-april-fools-day',
  'brands-that-rule-tiktok',
  'best-photo-video-editing-apps-social-media',
  '11-fashion-instagram-influencers-to-know',
  'alcohol-marketing-trends-you-need-to-know-right-now',
  'youtube-analytics-metrics',
  'how-to-write-instagram-captions',
  'how-does-social-media-affect-teenagers',
  'pet-influencers',
  'facebook-ads-ways-to-analyze-paid-social',
  '2751-5-stages-for-effective-social-media-community-management',
  'engaging-customers-through-social-media',
  'mothers-day-social-media-brand-examples',
  'social-media-advocacy',
  'marketing-buzzwords',
  'instagram-guides-examples',
  'target-audience-analysis-guide-everything-digital-marketers-need-to-know',
  'instagram-stories-apps-life-easier',
  'tiktok-analytics',
  'social-listening-tools',
  'facebook-organic-reach-tips',
  '2020-twitter-updates',
  'instagram-guides',
  '795-article-how-to-create-an-official-facebook-page',
  'ways-brands-use-instagram-reels',
  '2317-5-tips-for-reporting-to-your-boss',
  '5-effective-ways-to-promote-your-webinar-on-social-media',
  '2020-instagram-updates',
  '7-ways-to-build-buzz-on-social-media-for-your-new-product-before-launch',
  'your-free-buyer-persona-template',
  'ai-in-social-media',
  'facebook-content-strategy',
  '1916-top-10-things-you-should-never-do-on-twitter',
  'why-customer-experience-on-social-media-is-important',
  'lgbtq-influencers',
  'youtube-updates',
  'tiktok-updates',
  'covid-19-impact-social-media',
  'instagram-ads',
  'social-media-platforms-during-coronavirus',
  'video-for-instagram',
  '21-data-points-for-2021',
  'facebook-tricks',
  'twitter-engagement',
  'twitter-analytics-tools',
  'why-is-social-listening-important',
  '105-top-us-states-on-facebook',
  '2234-youtube-videos-what-s-not-to-like',
  '6-ways-to-boost-e-commerce-sales-with-influencer-marketing',
  'social-media-community-manager-tips',
  '1529-tracking-the-right-kpis-the-media-industry',
  '2653-5-most-engaging-movie-pages-on-facebook-in-2016',
  'instagram-live-shopping',
  'brands-that-get-digital-transformation-right',
  'how-to-build-facebook-community',
  '6-ways-to-stand-out-on-instagram',
  'tips-how-to-improve-video-call-quality',
  'instagram-content-hacks',
  'how-instagram-shops-will-transform-ecommerce',
  'top-of-the-funnel-marketing-guide',
  'social-media-marketing-mistakes',
  'how-to-market-a-product-on-instagram',
  'instagram-engagement',
  'difference-between-social-listening-and-social-monitoring',
  'things-marketers-must-know-about-tiktok',
  '19-tips-to-jumpstart-your-instagram-igtv-strategy',
  '467-formulas-revealed-the-facebook-and-twitter-engagement-rate',
  'social-media-and-email-marketing-integration',
  'social-media-storytelling',
  'visual-content-social-media',
  'linkedin-updates',
  'facebook-updates',
  'how-to-work-with-influencers-on-tiktok',
  'vpn-benefits-for-digital-marketing-success',
  '808-article-the-20-most-interesting-social-networks',
  'social-media-experts',
  'cognitive-biases-in-social-media',
  'tiktok-algorithm',
  '794-article-facebook-the-most-popular-social-network',
  'social-listening-guide',
  'social-media-for-pr',
  'social-media-style-guide',
  'social-media-glossary-terms-definitions',
  'buyer-persona-template',
  '2368-everything-is-awesome-lego-s-monster-year-on-social',
  'how-to-get-verified-on-instagram',
  '4-reasons-why-dark-posts-going-public-is-good-for-marketers',
  'social-media-content-strategy',
  'key-qualities-of-social-media-content-strategy',
  'instagram-reels-vs-tiktok',
  'fake-social-media-influencers',
  'customer-journey',
  'social-media-competitive-analysis',
  'social-media-audit',
  '647-top-10-biggest-facebook-cities',
  'how-to-use-memes-in-social-media',
  'how-to-use-social-media-for-affiliate-marketing',
  '859-article-how-to-create-a-community-page',
  '5-ways-brands-can-make-the-best-use-of-facebook-stories',
  'customer-journey-map',
  'how-to-use-sentiment-analysis-for-brand-building',
  '481-10-biggest-industries-on-facebook',
  '1646-tracking-the-right-kpis-the-automotive-industry',
  '6-essential-elements-content-marketing-campaign',
  '26-most-expensive-pay-per-click-advertising-countries-on-facebook',
  '2540-you-can-now-track-facebook-reactions-in-socialbakers',
  'social-media-link-building-tips',
  'top-10-travel-influencers-brands-need-to-know-about',
  'top-10-youtube-influencers-every-brand-needs-to-know-about',
  '39-top-10-movies-on-facebook',
  'best-social-media-management-tools',
  'knowing-your-target-audience-is-key-in-content-marketing',
  '961-10-most-facebook-addicted-countries-on-facebook',
  'setting-up-a-strong-local-global-social-media-strategy',
  '33-must-have-content-creation-tools-every-brand-needs',
  'facebook-live-vs-prerecorded-videos',
  'organic-social-media-strategy',
  'instagram-vs-facebook-advertising-differences-and-best-practices',
  '883-how-to-set-up-your-own-facebook-house-rules',
  'personalized-marketing-on-social-media',
  'micro-influencers-vs-macro-influencers',
  '1540-tracking-the-right-kpis-the-electronics-industry',
  '2203-how-engagement-and-social-interactions-correlate-with-reach',
  '218-how-to-start-your-own-facebook-page-10-tips-for-success',
  'relatorio-de-tendencias-de-redes-sociais-os-principais-insights-que-voce-precisa-conhecer',
  '38-top-10-countries-on-facebook-in-the-last-six-months',
  'go-pro',
  'sports-teams-on-social-media-during-pandemic',
  'datadriven-social-marketing-on-instagram',
  'how-to-create-a-social-media-proposal',
  'target-audience-on-facebook-how-to-reach-and-convert-them',
  'social-media-for-financial-services-data-report-2019',
  '7-instagram-story-ideas-that-work-for-business',
  '1984-videos-under-two-minutes-generate-the-most-youtube-views',
  '52-top-10-politicians-on-facebook',
  '1631-how-are-you-measuring-up-tracking-the-right-kpis-for-the-alcohol-industry',
  'lush-building-authentic-customer-relationships',
  'social-media-video-tips',
  '2714-fill-in-the-gaps-with-these-social-media-team-roles',
  'how-to-schedule-instagram-stories',
  'pinterest-marketing-strategy',
  'are-social-media-bots-hurting-your-paid-ads',
  'fitness-industry-takes-a-hit-from-covid',
  'how-to-build-relationships-with-social-media-influencers-from-the-ground-up',
  '2126-the-ultimate-guide-to-hashtags',
  'free-tools-and-statistics-notice',
  '1427-engagement-rate-a-metric-you-can-count-on',
  'inbound-marketing-strategies',
  '2199-socialbakers-now-recommends-interactions-over-engagement-rate',
  'influencer-marketing-report',
  'the-social-media-metrics-that-really-matter',
  'brands-helping-out-during-coronavirus-crisis',
  '1545-the-alcohol-industry',
  'how-to-be-successful-with-paid-social-media-advertising',
  'instagram-vs-facebook-report-key-trends-you-need-to-know',
  'how-to-create-a-social-media-content-calendar',
  '1064-top-10-fastest-growing-facebook-languages',
  '2613-lego-s-secrets-to-a-successful-social-media-strategy',
  'instagram-marketing-tips-from-a-to-z',
  '390-social-media-statistics-of-facebook-youtube-for-brands-in-brazil-january-2012',
  'recession-marketing',
  'managing-social-for-uk-embassy-insiders-view',
  '2367-native-facebook-videos-get-more-reach-than-any-other-type-of-post',
  'complete-guide-for-how-to-use-instagram-hashtags-like-a-boss',
  '1417-facebook-videos-vs-youtube-links-which-gets-higher-engagement',
  '215-how-to-use-facebook-questions-to-increase-engagements-and-fans',
  'social-media-trends-report-q2-2020',
  '2285-the-social-health-index-a-new-way-to-measure-social-performance',
  'singapore-government-performance-report',
  '250-world-s-fastest-growing-facebook-pages',
  'covid-19-is-changing-behavior-on-social-media-for-both-brands-and-users',
  '2181-finding-the-right-interactions-for-your-facebook-page',
  '1452-facebook-videos-have-a-10x-higher-viral-reach-than-youtube-links',
  'why-the-buyer-s-persona-is-even-more-important-on-social-media',
  'marcas-que-lograron-una-correcta-transformacion-digital',
  '955-what-s-the-average-reach-of-your-facebook-post',
  '2690-exclusive-data-on-instagram-carousels-how-well-do-they-work',
  'tiktok-facts-you-need-to-know',
  '369-facebook-statistics-top-growing-countries-in-january',
  'instagram-analytics-tools',
  'ai-image-recognition-in-marketing',
  '15-powerful-tips-to-master-influencer-marketing-on-instagram',
  'persona-mapping',
  'social-commerce-marketing-guide',
  'sports-vs-esports-social-media-report-2020',
  'customer-retention-guide',
  'how-to-use-socialbakers-for-social-listening',
  'social-media-analytics-tools',
  'ai-in-digital-marketing-transform-the-way-your-teams-do-marketing-in-2020',
  'social-media-kpis-cpg',
  'how-to-create-landing-page-for-facebook-ads',
  'facebook-advertising-tips',
  'marketing-professionals-amplifying-bipoc-voices',
  'twitter-analytics-guide',
  '5-ways-your-marketing-funnel-is-exactly-like-your-dating-life',
  'what-is-clubhouse-app',
  'social-media-goals',
  'social-media-kpis-telco',
  'social-media-marketing-strategy',
  'instagram-algorithm',
  'social-media-community-manager-tips',
  'how-to-manage-and-grow-social-media-community',
  'how-social-media-customer-service-helps-your-brand',
  'customer-retention-strategies-in-uncertain-times',
  'social-media-expert-qa-with-candace-kuss',
  'social-media-expert-qa-with-sarah-boyd',
  'social-media-expert-qa-with-mari-smith',
  'time-to-bridge-the-customer-experience-gap',
  'twitter-customer-service',
  'influencer-tips-on-growing-your-tiktok-brand',
  'social-media-expert-qa-with-shelcy-joseph',
  'social-media-expert-qa-with-udi-ledergor',
  'instagram-reels-tiktok',
  'how-socialbakers-is-helping-voices-for-equality-be-heard',
  'primetime-just-got-even-better-plus-more-of-your-favorite-flexible-widgets',
  'say-hello-to-the-new-community',
  'emplifi-tiktok-business-analytics-publishing-video-strategy',
  'check-out-new-flexible-widgets-for-paid-metrics-plus-instagram-grid-previews',
  'linkedin-insights-emplifi-analytics-dashboard-widgets',
  'publish-video-carousels-to-ig-better-analyze-all-your-paid-activities-with-twitter-ads-integration',
  'check-out-new-advanced-filtering-bynder-salesforce-workflows-reimagined-community-widgets-and-streamlined-account-management',
  'discover-new-advancements-in-query-youtube-publishing-community-and-sso',
  'new-filters-by-ad-type-and-placement-making-their-way-to-paid-and-dsh-paid-widgets',
  'ad-labeling-allows-you-to-slice-and-dice-your-data-to-supercharge-performance-analysis',
  'adobe-experience-manager-made-its-way-into-publisher-collections',
  'on-the-go-mobile-suite-delivering-support-for-community-inbox',
  'identify-your-twitter-influencers-and-leverage-the-engagement',
  'best-in-class-analytics',
  'youtube-private-insights-other-items',
  'slick-new-makeovers-enhanced-support-for-twitter-linkedin-and-instagram-workflows-precision-listening-results-and-more',
  'product-news-w28-2021',
  'product-news-w26-2021',
  'product-news-w23-2021',
  'product-news-w22-2021',
  'how-to-curate-content-for-your-social-media-channels',
  'how-to-use-tiktok-for-business',
  '9-tips-for-businesses-using-facebook-live-video',
  'how-the-top-names-in-beauty-connect-with-audiences-in-uncertain-times',
  'social-media-branding',
  'how-to-increase-your-social-media-traffic',
  'social-media-optimization-tips',
  'voc-trends'
]

var compactJson = convert.xml2json(rawArticleData, { compact: true, spaces: 3 })
var jsonObject = JSON.parse(compactJson)

const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic)

if (useProgressBar) {
  bar1.start(248, 0)
}

async function createArticle(env, articleData, htmlContent) {
  try {
    let contentfulArticle = await articleFunc.createContentfulArticleEntry(env, articleData, htmlContent)
    return { articleId: contentfulArticle.article.sys.id, metaImageId: contentfulArticle.metaImage }
  } catch (e) {
    console.log(e)
    return ''
  }
}

async function createSEO(env, articleData, metaImageId) {
  try {
    let contentfulSEO = await seoFunc.createContentfulSEOEntry(env, articleData, metaImageId)
    return contentfulSEO.sys.id
  } catch (e) {
    console.log(e)
    return ''
  }
}

async function createUiRawHTML(env, html) {
  try {
    let contetnfulUiRawHTML = await uiRawHtmlFunc.createContentfulUIPRawHtmlEntry(env, html)
    return contetnfulUiRawHTML.sys.id
  } catch (e) {
    console.log(e)
    return ''
  }
}

async function createUiPage(env, article, richText) {
  let articleInfo = await createArticle(env, article, richText)
  if (!useProgressBar) console.log('Generated Article with ID: ' + articleInfo.articleId)
  let seoID = await createSEO(env, article, articleInfo.metaImageId)
  if (!useProgressBar) console.log('Generated SEO with ID: ' + seoID)

  uiPageFunc.createContentfulUIPageEntry(env, article, articleInfo.articleId, seoID)
  if (!useProgressBar) console.log('Generated UIPage with Title: ' + article.title._text)

  let wordpressArticleSplitUrl = article.link._text.split('/')
  let wordpressRelativePath = wordpressArticleSplitUrl[wordpressArticleSplitUrl.length - 2]

  if (!useProgressBar) {
    console.log('Test link here -> ' + 'http://localhost:3000/resources/blog/' + wordpressRelativePath)
  }
}

async function doImageRequest(environment, imageMetaData) {
  return new Promise(function (resolve, reject) {
    request.get(imageMetaData.data.source_url, async function (err, res, body) {
      const upload = await environment.createUpload({ file: body })
      const asset = await environment.createAsset({
        fields: {
          title: {
            en: 'MIGRATE -- ' + imageMetaData.data.title.rendered
          },
          file: {
            en: {
              fileName: 'wordpress-imported-image-' + imageMetaData.data.id + '.jpg',
              contentType: 'image/jpeg',
              uploadFrom: {
                sys: {
                  type: 'Link',
                  linkType: 'Upload',
                  id: upload.sys.id
                }
              }
            }
          }
        }
      })
      const processedAsset = await asset.processForAllLocales()
      const publishedAsset = await processedAsset.publish()
      resolve(publishedAsset)
    })
  })
}

async function uploadContetnfulImage(environment, wordpressImageId) {
  let contentfulArticleImage = null
  try {
    let imageMetaData = await axios.get('https://www-wordpress-prod.app.ccl//wp-json/wp/v2/media/' + wordpressImageId)
    if (imageMetaData.data && imageMetaData.data.source_url) {
      contentfulArticleImage = await doImageRequest(environment, imageMetaData)
      return contentfulArticleImage
    }
  } catch (e) {
    console.log('Error retrieving image from Wordpress, ID: ' + wordpressImageId)
    return contentfulArticleImage
  }

  return contentfulArticleImage
}

async function addAnyInlineImages(bodyContent, environment) {
  if (bodyContent) {
    let wpImages = bodyContent.match(/(?<=<!-- wp:image {)(.*)(?=-->)/g)
    let wpFullFigures = bodyContent.match(/<!-- wp:image {(.*?)wp:image -->/gs)
    if (wpImages) {
      let index = 0
      if (wpImages) {
        if (!useProgressBar) {
          console.log('Attempting to create ' + wpImages.length + ' inline images from wordpress')
        }
        for (let image of wpImages) {
          let formatted = image.replace(/'/g, '')
          let possibleSize = wpFullFigures[index].match(/[0-9]{1,5}x[0-9]{1,5}/gs)
          let width = possibleSize ? possibleSize[0].split('x')[0] : null
          let height = possibleSize ? possibleSize[0].split('x')[1] : null

          formatted = formatted.trim()
          if (formatted != '') {
            let json = JSON.parse('{' + formatted)
            if (json.id) {
              let result = await uploadContetnfulImage(environment, json.id)
              if (result) {
                if (!useProgressBar) {
                  console.log('Generated inline image with ID: ' + result.sys.id)
                }
                if (result && result.fields && result.fields.file) {
                  // cannot use this until I get a response from Contentful about their broken API
                  let rawHtml = ''
                  if (width && height) {
                    rawHtml = `
                                            <div class="center">
                                                <img style="max-width: ${width}px; max-height: ${height}px; width: 100%; height: auto;" src="${result.fields.file.en.url}">
                                            </div>
                                        `
                  } else {
                    rawHtml = `
                                        <div class="center">
                                            <img src="${result.fields.file.en.url}">
                                        </div>
                                    `
                  }

                  let uiRawHtmlId = await createUiRawHTML(environment, rawHtml)
                  if (!useProgressBar) {
                    console.log('Generated Ui Raw HTML with ID: ' + uiRawHtmlId)
                  }
                  let imageRegex = new RegExp(`<!-- wp:image {"id":${json.id}(.*?)wp:image -->`, 'gs')
                  let imageRegex2 = new RegExp(`<!-- wp:image {"align":"center","id":${json.id}(.*?)wp:image -->`, 'gs')
                  let imageRegex3 = new RegExp(`<!-- wp:image {"align":"left","id":${json.id}(.*?)wp:image -->`, 'gs')
                  let imageRegex4 = new RegExp(`<!-- wp:image {"align":"right","id":${json.id}(.*?)wp:image -->`, 'gs')
                  bodyContent = bodyContent.replace(
                    imageRegex,
                    `
                                        <img title="uploaded-inline-image" src="${uiRawHtmlId}" alt="upload icon"/>
                                    `
                  )
                  bodyContent = bodyContent.replace(
                    imageRegex2,
                    `
                                        <img title="uploaded-inline-image" src="${uiRawHtmlId}" alt="upload icon"/>
                                    `
                  )
                  bodyContent = bodyContent.replace(
                    imageRegex3,
                    `
                                        <img title="uploaded-inline-image" src="${uiRawHtmlId}" alt="upload icon"/>
                                    `
                  )
                  bodyContent = bodyContent.replace(
                    imageRegex4,
                    `
                                        <img title="uploaded-inline-image" src="${uiRawHtmlId}" alt="upload icon"/>
                                    `
                  )
                }
              }
            }
          }
          index++
        }

        return bodyContent
      }
    }
  }

  return bodyContent
}

function removeH1s(richText) {
  richText.content.forEach((node) => {
    if (node.nodeType == 'heading-1') {
      node.nodeType = 'heading-2'
    }
  })

  return richText
}

function generateCSV() {
  const filename = 'imported_urls.csv'
  const writableStream = fs.createWriteStream(filename)
  const csvColumnHeaders = ['source', 'target', 'regex', 'type', 'code', 'match', 'hits', 'title']

  const stringifier = stringify({ header: true, columns: csvColumnHeaders })

  for (const id of pageIds) {
    for (const article of jsonObject.rss.channel.item) {
      if (article.link != null && article['content:encoded'] != null) {
        let wordpressArticleSplitUrl = article.link._text.split('/')
        let wordpressRelativePath = wordpressArticleSplitUrl[wordpressArticleSplitUrl.length - 2]

        if (wordpressRelativePath == id) {
          // update this object to use correct article data
          stringifier.write({
            source: 'https://socialbackers.com/blog/' + wordpressRelativePath,
            target: 'https://emplifi.io/resources/blog/' + wordpressRelativePath,
            regex: 0,
            type: 'url',
            code: '301',
            match: 'url',
            hits: '0',
            title: article.title._text
          })
        }
      }
    }
  }

  stringifier.pipe(writableStream)
}

async function runImport() {
  let articleImportCounter = 0
  let space = await client.getSpace(spaceId)
  let environment = await space.getEnvironment(environmentName)

  for (const id of pageIds) {
    let foundArticle = true

    // if(id == "how-to-create-a-social-media-content-calendar"){
    for (const article of jsonObject.rss.channel.item) {
      if (article.link != null && article['content:encoded'] != null) {
        let wordpressArticleSplitUrl = article.link._text.split('/')
        let wordpressRelativePath = wordpressArticleSplitUrl[wordpressArticleSplitUrl.length - 2]

        if (wordpressRelativePath == id) {
          foundArticle = true
          if (!useProgressBar) console.log('Importing: ' + article.title._text)

          // for what
          let bodyTextWithAddedImages = await addAnyInlineImages(article['content:encoded']._cdata, environment)
          let markdown = turndownForWhatService.turndown(stripHtmlComments(bodyTextWithAddedImages + disclaimerText))
          let richText = await richTextFromMarkdown(markdown, (node) =>
            node.title == 'uploaded-inline-image'
              ? {
                  nodeType: 'paragraph',
                  data: {},
                  content: [
                    {
                      nodeType: 'text',
                      value: '',
                      marks: [],
                      data: {}
                    },
                    {
                      nodeType: INLINES.EMBEDDED_ENTRY,
                      content: [],
                      data: {
                        target: {
                          sys: {
                            type: 'Link',
                            linkType: 'Entry',
                            id: node.url
                          }
                        }
                      }
                    }
                  ]
                }
              : false
          )

          richText = removeH1s(richText)
          await createUiPage(environment, article, richText)
          articleImportCounter++
        }
      }
    }
    // }

    if (!foundArticle) {
      console.error('**COULD NOT FIND**: ' + id)
    }

    if (!useProgressBar) console.log('Imported ' + articleImportCounter + ' articles')

    if (useProgressBar) {
      bar1.update(articleImportCounter)
      if (articleImportCounter == 248) {
        bar1.stop()
      }
    }
  }
}

runImport()
generateCSV()
