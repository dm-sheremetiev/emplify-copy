async function createContentfulUIPRawHtmlEntry(environment, title, html) {
  let newRawHtml = {
    fields: {
      internalName: {
        en: 'MIGRATE -- UI Raw HTML - ' + title
      },
      rawHtml: {
        en: html
      }
    }
  }

  try {
    return await environment.createEntry('uiRawHtml', newRawHtml)
  } catch (e) {
    throw Error(e)
  }
}

module.exports = { createContentfulUIPRawHtmlEntry }
