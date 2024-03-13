async function createContentfulUIPageEntry(environment, data, articleBlock, seoBlock) {
  let newUIPage = {
    fields: {
      internalName: {
        en: 'MIGRATE -- UI Page - Blog: ' + data.title._text
      },
      title: {
        en: data.title._text
      },
      slug: {
        en: convertToSlug(data)
      },
      pagePath: {
        en: 'resources/blog'
      },
      blocks: {
        en: [
          {
            sys: {
              id: articleBlock,
              linkType: 'Entry'
            }
          }
        ]
      },
      seo: {
        en: {
          sys: {
            id: seoBlock,
            linkType: 'Entry'
          }
        }
      },
      isArticle: {
        en: true
      }
    }
  }

  try {
    return await environment.createEntry('uiPage', newUIPage)
  } catch (e) {
    throw Error(e)
  }
}

function convertToSlug(articleData) {
  let splitUrl = articleData.link._text.split('/')
  return splitUrl[splitUrl.length - 2]
}

module.exports = { createContentfulUIPageEntry }
