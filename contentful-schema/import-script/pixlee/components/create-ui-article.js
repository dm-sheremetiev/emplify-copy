const moment = require('moment')

async function createContentfulArticleEntry(environment, articleData, content, contentfulArticleImageId) {
  let newArticle = {
    fields: {
      internalName: {
        en: 'MIGRATE -- Article - Blog: ' + articleData.name
      },
      title: {
        en: articleData.name
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
        en: articleData.preview_text_meta_description
      },
      author: {
        en: {
          sys: {
            // TODO: update this to new author create
            id: '4eLLusq7Rz4EaHvS36rNZN',
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

  const dateStr = articleData.publish_date ? articleData.publish_date : articleData.published_on ? articleData.published_on : ''
  if (dateStr) {
    newArticle.fields.publishedDate = {
      en: moment(new Date(dateStr)).utc().format('YYYY-MM-DD')
    }
  }

  try {
    return await environment.createEntry('article', newArticle)
  } catch (e) {
    throw Error(e)
  }
}

module.exports = { createContentfulArticleEntry }
