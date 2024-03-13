const util = require('util')

async function createContentfulSEOEntry(environment, data, metaImageId) {
  let newSEO = {
    fields: {
      internalName: {
        en: 'MIGRATE -- SEO Metadata - Blog: ' + data.name
      },
      metaTitle: {
        en: data.name
      },
      metaDescription: {
        en: data.preview_text_meta_description
      },
      noIndex: {
        en: false
      },
      noFollow: {
        en: false
      },
      excludeFromSitemap: {
        en: false
      },
      ogTitle: {
        en: data.name
      },
      ogDescription: {
        en: data.preview_text_meta_description
      },
      twitterTitle: {
        en: data.name
      },
      twitterDescription: {
        en: data.preview_text_meta_description
      },
      canonicalUrl: {
        en: data.canonical_url
      }
    }
  }

  if (metaImageId) {
    newSEO.fields.ogimage = {
      en: {
        sys: {
          id: metaImageId,
          linkType: 'Asset'
        }
      }
    }

    newSEO.fields.twitterimage = {
      en: {
        sys: {
          id: metaImageId,
          linkType: 'Asset'
        }
      }
    }
  }

  try {
    return await environment.createEntry('seoMetadata', newSEO)
  } catch (e) {
    throw Error(e)
  }
}

module.exports = { createContentfulSEOEntry }
