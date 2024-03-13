async function createContentfulUIPageEntry(environment, data, articleBlock, seoBlock, newSlug) {
  let newUIPage = {
    fields: {
      internalName: {
        en: 'MIGRATE -- UI Page - Blog: ' + data.name
      },
      title: {
        en: 'MIGRATE -- UI Page - Blog: ' + data.name
      },
      slug: {
        en: newSlug,
        fr: newSlug,
        es: newSlug
      },
      pagePath: {
        en: 'resources/blog',
        fr: 'ressources/blog',
        es: 'recursos/blog'
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

module.exports = { createContentfulUIPageEntry }
