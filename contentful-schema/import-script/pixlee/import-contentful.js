const cliProgress = require('cli-progress')
const contentful = require('contentful-management')
const { richTextFromMarkdown } = require('@contentful/rich-text-from-markdown')
const { BLOCKS } = require('@contentful/rich-text-types')
const fs = require('fs')
const prettier = require('prettier/standalone')
const plugins = [require('prettier/plugins/html')]
const sanitizeHtml = require('sanitize-html')
const stripHtmlComments = require('strip-html-comments')
const TurndownService = require('turndown')
const moment = require('moment')

const SPACE_ID = 'cpumif18y1gd'
const ENVIRONMENT_ID = 'test-ptt-import'
// const MANEGEMENT_API_KEY = 'CFPAT-bzJ-7Hll3aq2DlwX5UH7tMAfPkQuI6uEh0p-juVjW7o'
const MANEGEMENT_API_KEY = 'CFPAT-xZAIJW-AYKSikNstpPDg7f080YHxgJxKTsLjTtqFqPQ'

const client = contentful.createClient({
  accessToken: MANEGEMENT_API_KEY
})

const seoFunc = require('./components/create-seo')
const uiPageFunc = require('./components/create-ui-page')
const uiRawHtmlFunc = require('./components/create-ui-raw-html')
const uiArticleFunc = require('./components/create-ui-article')

const blogsToUploadStr = fs.readFileSync('./data/auto-generated/blog_posts_to_upload.json', 'utf8')
const allBlogsDataStr = fs.readFileSync('./data/auto-generated/blog_posts.json', 'utf8')
const imagesData = fs.readFileSync('./data/auto-generated/images.json', 'utf8')
const uploadedImages = []
const uploadedArticles = []

const turndownService = new TurndownService()
const blogsToUpload = JSON.parse(blogsToUploadStr)
const allBlogsData = JSON.parse(allBlogsDataStr)
const disclaimerText =
  "<p><i>Editor's Note: This article was originally published on pixlee.com. Any statistics or statements included in this article were current at the time of original publication.</i></p>"

/* CLI Setup --- START */
const useProgressBar = true
// const useProgressBar = false
const multibar = new cliProgress.MultiBar(
  {
    hideCursor: true,
    format: '{bar} | {value}/{total} | {cliName}',
    clearOnComplete: false,
    stopOnComplete: false,
    forceRedraw: true
  },
  cliProgress.Presets.shades_grey
)
let blogBar
let imageBar

if (useProgressBar) {
  multibar.log('Import starting\n')
  blogBar = multibar.create(blogsToUpload?.length, 0)
  blogBar.update(0, { cliName: 'Blog Posts' })
  imageBar = multibar.create(imagesData?.length, 0)
  imageBar.update(0, { cliName: 'Images' })
}
/* CLI Setup --- END */

let timeouts = {}

const sleep = (ms) => {
  try {
    return new Promise((resolve, reject) => {
      if (timeouts.timeoutId && timeouts.reject) {
        clearTimeout(timeouts.timeoutId)
        timeouts.reject('Debounced')
        timeouts = {}
      }
      timeouts = {
        timeoutId: setTimeout(resolve, ms),
        reject: reject
      }
    })
  } catch (e) {
    // do nothing
    console.log(e)
  }
}

function convertH1sToH2s(richText) {
  richText.content.forEach((node) => {
    if (node.nodeType == 'heading-1') {
      node.nodeType = 'heading-2'
    }
  })

  return richText
}
function addError(error) {
  uploadedArticles[uploadedArticles.length - 1].hasErrors = true
  if (!uploadedArticles[uploadedArticles.length - 1].hasErrors?.length) {
    uploadedArticles[uploadedArticles.length - 1].errors = []
  }
  uploadedArticles[uploadedArticles.length - 1].errors.push(error)
}

const createImage = async (environment, data) => {
  let asset
  let imgIndex
  for (let i = 0; i < imagesData.length; i++) {
    if (data.url === imagesData[i].url && imagesData[i].asset) {
      asset = imagesData[i].asset
      imgIndex = i
      break
    }
  }

  if (asset) {
    return asset
  }
  // TODO: url get the extension
  // TODO: url get the file name
  asset = await environment.createAsset({
    fields: {
      title: {
        en: data.title
      },
      description: {
        en: data.description || 'PTT'
      },
      file: {
        en: {
          contentType: data.contentType || 'image/png',
          fileName: data.fileName || 'ptt-script-image.png',
          upload: data.url
        }
      }
    }
  })
  const processedAsset = await asset.processForAllLocales()
  await processedAsset.publish()
  uploadedImages.push({ originalUrl: data.url, processedUrl: processedAsset.fields?.file?.en?.url, assetId: processedAsset?.sys?.id })

  if (useProgressBar) {
    imageBar?.increment()
  }

  if (imgIndex >= 0) {
    imagesData[imgIndex].asset = processedAsset
  }

  return processedAsset
}

const uploadContentImages = async (environment, content, name) => {
  let newContent = content

  const regex = /src="https:\/\/uploads-ssl\.webflow\.com[^"]+/g
  const matches = content.match(regex)

  if (matches) {
    for (let i = 0; i < matches.length; i++) {
      // Extract the URL from the matched string
      const splitted = matches[i].split('src="')

      if (splitted[1]) {
        const asset = await createImage(environment, { title: 'OG image: ' + name, url: splitted[1] })
        newContent = newContent.replace(splitted[1], `${asset.sys.id}" title="uploaded-inline-image`)
      }
    }
  }

  const regex2 = /src="https:\/\/assets-global\.website-files\.com[^"]+/g
  const matches2 = content.match(regex2)
  if (matches2) {
    for (let i = 0; i < matches2.length; i++) {
      // Extract the URL from the matched string
      const splitted = matches2[i].split('src="')

      if (splitted[1]) {
        const asset = await createImage(environment, { title: 'OG image: ' + name, url: splitted[1] })
        newContent = newContent.replace(splitted[1], `${asset.sys.id}" title="uploaded-inline-image`)
      }
    }
  }

  const regex3 = /src="https:\/\/d3e54v103j8qbb\.cloudfront\.net[^"]+/g
  const matches3 = content.match(regex3)
  if (matches3) {
    for (let i = 0; i < matches3.length; i++) {
      // Extract the URL from the matched string
      const splitted = matches3[i].split('src="')

      if (splitted[1]) {
        const asset = await createImage(environment, { title: 'OG image: ' + name, url: splitted[1] })
        newContent = newContent.replace(splitted[1], `${asset.sys.id}" title="uploaded-inline-image`)
      }
    }
  }
  return newContent
}

const uploadBlog = async ({ environment, blog, newSlug }) => {
  try {
    uploadedArticles.push({ ...blog })
    const asset = await createImage(environment, { title: 'OG image: ' + blog.name, url: blog.featured_image })

    let newContent = await uploadContentImages(environment, blog.content, blog.name)
    newContent += disclaimerText
    newContent = await stripHtmlComments(newContent)
    // newContent = await sanitizeHtml(newContent, {}) // REMOVES THE IMG TAGS. so don't use
    newContent = await prettier.format(newContent, { parser: 'html', plugins: plugins })
    newContent = turndownService.turndown(newContent) // convert to mark down
    // convert to contentful rich text
    newContent = await richTextFromMarkdown(newContent, (node) => {
      if (node.title !== 'uploaded-inline-image' && uploadedArticles.length > 0) {
        addError(node)
      }

      return node.title == 'uploaded-inline-image'
        ? {
            nodeType: BLOCKS.EMBEDDED_ASSET,
            content: [],
            data: {
              target: {
                sys: {
                  type: 'Link',
                  linkType: 'Asset',
                  id: node.url
                }
              }
            }
          }
        : false
    })
    newContent = convertH1sToH2s(newContent) // convert to contentful rich text
    const article = await uiArticleFunc.createContentfulArticleEntry(environment, blog, newContent, asset.sys.id)

    // const rawHtml = await uiRawHtmlFunc.createContentfulUIPRawHtmlEntry(environment, parsedData[i].name, newContent)
    const seoBlock = await seoFunc.createContentfulSEOEntry(environment, blog, asset.sys.id)
    // await uiPageFunc.createContentfulUIPageEntry(environment, parsedData[i], rawHtml.sys.id, seoBlock.sys.id)
    await uiPageFunc.createContentfulUIPageEntry(environment, blog, article.sys.id, seoBlock.sys.id, newSlug)

    if (useProgressBar) {
      multibar.log(`Entry created - ${blog?.name}!\n`)
      blogBar?.increment()
    } else {
      console.log(`Entry created - ${blog?.name}!`)
    }
    await sleep(250) // sleep before proceeding to next item so we it doesn't fail because of rate limit
  } catch (error) {
    console.error('Error creating entry:', error)
    if (uploadedArticles.length > 0) {
      addError(error)
    }
  }
}

const startImport = async () => {
  const space = await client.getSpace(SPACE_ID)
  const environment = await space.getEnvironment(ENVIRONMENT_ID)
  let articlesFound = 0
  for (let i = 0; i < blogsToUpload.length; i++) {
    // for (let i = 0; i < 1; i++) {
    const slugArr = blogsToUpload[i].pixlee_url.split('/')
    if (slugArr.length > 0) {
      const slug = slugArr[slugArr.length - 1]
      for (let j = 0; j < allBlogsData?.length; j++) {
        if (slug === allBlogsData[j].slug) {
          articlesFound++
          const newSlugArr = blogsToUpload[i].emplifi_urls.split('/')
          if (newSlugArr.length > 0) {
            const newSlug = newSlugArr[newSlugArr.length - 1]
            await uploadBlog({ environment, newSlug, blog: allBlogsData[j] })
          }
        }
      }
    }
  }

  if (useProgressBar) {
    blogBar?.stop()
    imageBar?.stop()
    multibar?.stop()
  }

  const date = moment()
  console.log(`Uploaded Images -- Total: ${imagesData.length}, Items imported: ${uploadedImages.length}`)
  console.log(
    `Articles -- Total: ${allBlogsData.length}, Found in all blogs collection: ${articlesFound}, Items Actually Imported: ${uploadedArticles.length}`
  )

  if (uploadedArticles.length > 0) {
    console.log(`JSON data saving to ./data/auto-generated/uploaded/uploaded_articles-${date}.json`)
    fs.writeFileSync(`./data/auto-generated/uploaded/uploaded_articles-${date}.json`, JSON.stringify(uploadedArticles, null, 2))
  }
  if (uploadedImages.length > 0) {
    console.log(`JSON data saving to ./data/auto-generated/uploaded/uploaded_images-${date}.json`)
    fs.writeFileSync(`./data/auto-generated/uploaded/uploaded_images-${date}.json`, JSON.stringify(uploadedImages, null, 2))
  }
}

startImport().then()
