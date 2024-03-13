var moment = require('moment')
var axios = require('axios')
var request = require('request').defaults({ encoding: null })

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

function getSeoMetaStringValue(data, metaKey) {
  let seoMetaStringValue = null
  if (data['wp:postmeta']) {
    data['wp:postmeta'].forEach((meta) => {
      if (meta['wp:meta_key']._cdata == metaKey) {
        seoMetaStringValue = meta['wp:meta_value']._cdata
      }
    })
  }

  return seoMetaStringValue
}

async function doImageRequest(environment, imageMetaData) {
  return new Promise(function (resolve, reject) {
    request.get(imageMetaData.data.media_details.sizes.full.source_url, async function (err, res, body) {
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
      let contentfulArticleImageId = publishedAsset.sys.id
      resolve(contentfulArticleImageId)
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

async function createContentfulArticleEntry(environment, articleData, content) {
  let wordpressImageId = getSeoMetaStringValue(articleData, 'ogImage')
  let contentfulArticleImageId = null
  if (wordpressImageId) {
    contentfulArticleImageId = await uploadContetnfulImage(environment, wordpressImageId)
    // console.log("Generated Media Image with ID: " + contentfulArticleImageId);
  }

  let previewContentString = ''
  if (articleData['wp:postmeta']) {
    articleData['wp:postmeta'].forEach((meta) => {
      if (meta['wp:meta_key']._cdata == 'ogDescription') {
        previewContentString = meta['wp:meta_value']._cdata
      }
    })
  }

  let newArticle = {
    fields: {
      internalName: {
        en: 'MIGRATE -- Article - Blog: ' + articleData.title._text
      },
      title: {
        en: articleData.title._text
      },
      content: {
        en: content
      },
      isFeaturedArticle: {
        en: false
      },
      hideFromLists: {
        en: false
      },
      category: {
        en: {
          sys: {
            id: 'qVq7w2eEOqijUned2PYrL',
            linkType: 'Entry'
          }
        }
      },
      channel: {
        en: {
          sys: {
            id: '5gljgIQ5r0gv0et3LKCYCw',
            linkType: 'Entry'
          }
        }
      },
      previewContent: {
        en: previewContentString
      },
      author: {
        en: {
          sys: {
            id: '3ScQp4L0LFVCycw484D9Q4',
            linkType: 'Entry'
          }
        }
      }
    }
  }

  if (contentfulArticleImageId) {
    newArticle.fields.image = {
      en: {
        sys: {
          id: contentfulArticleImageId,
          linkType: 'Asset'
        }
      }
    }

    newArticle.fields.secondaryPreviewImage = {
      en: {
        sys: {
          id: contentfulArticleImageId,
          linkType: 'Asset'
        }
      }
    }
  }

  if (articleData.pubDate && articleData.pubDate._text) {
    newArticle.fields.publishedDate = {
      en: moment(articleData.pubDate._text).format('YYYY-MM-DD')
    }
  }

  try {
    return { article: await environment.createEntry('article', newArticle), metaImage: contentfulArticleImageId }
  } catch (e) {
    throw Error(e)
  }
}

module.exports = { createContentfulArticleEntry }
