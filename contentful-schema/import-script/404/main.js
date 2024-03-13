const cliProgress = require('cli-progress')
const contentful = require('contentful-management')
const moment = require('moment')
const fs = require('fs')

const SPACE_ID = 'cpumif18y1gd'
// const ENVIRONMENT_ID = 'test-ptt-import'
const ENVIRONMENT_ID = 'master'
const MANEGEMENT_API_KEY = 'CFPAT-xZAIJW-AYKSikNstpPDg7f080YHxgJxKTsLjTtqFqPQ'

/* CLI Setup --- START */
const useProgressBar = true
// const useProgressBar = false
const multibar = new cliProgress.MultiBar(
  {
    hideCursor: true,
    format: '{bar} | {value}/{total} | {cliName} | {pagePath} | {searchLanguage}',
    clearOnComplete: false,
    stopOnComplete: false,
    forceRedraw: true
  },
  cliProgress.Presets.shades_grey
)
let bar
/* CLI Setup --- END */

const client = contentful.createClient({
  accessToken: MANEGEMENT_API_KEY,
  space: SPACE_ID,
  environment: ENVIRONMENT_ID
})

/* CLI Setup --- END */

let timeouts = {}

const pages = []
const pagesNotUpdated = []

const updateUiPage = async (pagePath, searchLanguage) => {
  try {
    const space = await client.getSpace(SPACE_ID)
    const environment = await space.getEnvironment(ENVIRONMENT_ID)
    multibar.log('Starting script\n')
    multibar.log(`Page Path: ${pagePath}\n`)
    multibar.log(`Search Language: ${searchLanguage}\n`)

    const search = {
      content_type: 'uiPage',
      limit: 1000,
      'fields.pagePath.en': pagePath
    }
    search[`fields.slug.${searchLanguage}[exists]`] = false

    const entries = await environment.getEntries(search)

    if (useProgressBar) {
      multibar.log(`TOTAL ENTRIES: `, entries.total, '\n')
      bar = multibar.create(entries?.items?.length, 0)
      bar.update(0, { cliName: 'Pages', pagePath, searchLanguage })
    }

    for (let i = 0; i < entries.items.length; i++) {
      const item = entries.items[i]
      const isUpdated = item.isUpdated()
      if (!item.isArchived() && !item.isDraft() && item.isPublished()) {
        multibar.log(`${item.sys.id} - ${item.fields?.title?.en}\n`)
        if (item.fields?.pagePath?.en === 'press') {
          if (!item.fields.pagePath.fr) {
            item.fields.pagePath.fr = 'presse'
          }
          if (!item.fields.pagePath.es) {
            item.fields.pagePath.es = 'prensa'
          }
          if (!item.fields.pagePath.de) {
            item.fields.pagePath.de = 'press'
          }
          if (!item.fields.pagePath.pt) {
            item.fields.pagePath.pt = 'press'
          }
        }
        if (item.fields?.pagePath?.en === 'customers') {
          if (!item.fields.pagePath.fr) {
            item.fields.pagePath.fr = 'clients'
          }
          if (!item.fields.pagePath.es) {
            item.fields.pagePath.es = 'clientes'
          }
          if (!item.fields.pagePath.de) {
            item.fields.pagePath.de = 'customers'
          }
          if (!item.fields.pagePath.pt) {
            item.fields.pagePath.pt = 'customers'
          }
        }
        if (item.fields?.pagePath?.en === 'resources/blog') {
          if (!item.fields.pagePath.fr) {
            item.fields.pagePath.fr = 'ressources/blog'
          }
          if (!item.fields.pagePath.es) {
            item.fields.pagePath.es = 'recursos/blog'
          }
          if (!item.fields.pagePath.de) {
            item.fields.pagePath.de = 'ressourcen/blog'
          }
          if (!item.fields.pagePath.pt) {
            item.fields.pagePath.pt = 'resources/blog'
          }
        }
        if (item.fields?.pagePath?.en === 'definitions') {
          if (!item.fields.pagePath.fr) {
            item.fields.pagePath.fr = 'definitions'
          }
          if (!item.fields.pagePath.es) {
            item.fields.pagePath.es = 'definiciones'
          }
          if (!item.fields.pagePath.de) {
            item.fields.pagePath.de = 'definitions'
          }
          if (!item.fields.pagePath.pt) {
            item.fields.pagePath.pt = 'definitions'
          }
        }
        if (!item.fields?.slug?.fr) {
          item.fields.slug.fr = item.fields.slug.en
        }
        if (!item.fields?.slug?.es) {
          item.fields.slug.es = item.fields.slug.en
        }
        if (!item.fields?.slug?.de) {
          item.fields.slug.de = item.fields.slug.en
        }
        if (!item.fields?.slug?.pt) {
          item.fields.slug.pt = item.fields.slug.en
        }
        if (!item.fields?.isSimplified?.en) {
          item.fields.isSimplified = {}
          item.fields.isSimplified.en = false
        }
        pages.push({
          id: item.sys.id,
          title: item.fields?.title?.en,
          url: `https://app.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/entries/${item.sys.id}`
        })
        const updatedEntry = await item.update()
        if (!isUpdated) {
          await updatedEntry.publish()
        }
      } else {
        pagesNotUpdated.push({
          id: item.sys.id,
          title: item.fields?.title?.en,
          url: `https://app.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/entries/${item.sys.id}`,
          isArchived: item.isArchived(),
          isPublished: item.isPublished(),
          isDraft: item.isDraft(),
          isUpdated: item.isUpdated()
        })
      }
      bar.increment()

      await new Promise((r) => setTimeout(r, 100))
    }

    multibar.log('Finished\n')
    bar?.stop()
    if (pages.length > 0) {
      fs.writeFileSync(
        `./auto-generated/updatedPagesPress-${pagePath === 'resources/blog' ? 'resources' : pagePath}-${moment()}.json`,
        JSON.stringify(pages, null, 2)
      )
    }
    if (pagesNotUpdated.length > 0) {
      fs.writeFileSync(
        `./auto-generated/notUpdatedPages-${pagePath === 'resources/blog' ? 'resources' : pagePath}-${moment()}.json`,
        JSON.stringify(pagesNotUpdated, null, 2)
      )
    }
  } catch (err) {
    bar?.stop()
    console.error(err)
    if (pages.length > 0) {
      fs.writeFileSync(
        `./auto-generated/updatedPages-ERRORED_OUT-${pagePath === 'resources/blog' ? 'resources' : pagePath}-${moment()}.json`,
        JSON.stringify(pages, null, 2)
      )
    }
    if (pagesNotUpdated.length > 0) {
      fs.writeFileSync(
        `./auto-generated/notUpdatedPages-${pagePath === 'resources/blog' ? 'resources' : pagePath}-${moment()}.json`,
        JSON.stringify(pagesNotUpdated, null, 2)
      )
    }
  }
}

const runScript = async () => {
  const _pagePaths = ['press', 'customers', 'resources/blog', 'definitions']
  const _searchLanguages = ['fr', 'es', 'de', 'pt']

  for (let i = 0; i < _pagePaths.length; i++) {
    for (let j = 0; j < _searchLanguages.length; j++) {
      await updateUiPage(_pagePaths[i], _searchLanguages[j]).then()
    }
  }
}

runScript().then()
