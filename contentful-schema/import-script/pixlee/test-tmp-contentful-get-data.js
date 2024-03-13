// this file is not connected to any other import script

const contentfulRegular = require('contentful')
const spaceId = 'cpumif18y1gd'
const environmentId = 'master'
const managementApiKey = 'CFPAT-bzJ-7Hll3aq2DlwX5UH7tMAfPkQuI6uEh0p-juVjW7o'

const deliveryApiKey = 'TiQo3TwACfTmapGBdYcqyOOfIUwaTWjoXyajam6BtDQ'
const previewApiKey = 'X4OO61OSO6qkJ-zUTji9N3FRuOMD7t_Pg-3rofFKX8o'

const contentfulRegularClient = contentfulRegular.createClient({
  space: spaceId,
  accessToken: previewApiKey,
  environment: environmentId,
  host: 'preview.contentful.com'
})

const start = async () => {
  // find all
  // const seoMetadata = await contentfulRegularClient.getEntries({
  //   content_type: 'seoMetadata',
  //   'fields.canonicalUrl[exists]': true
  // })
  // seoMetadata.items.forEach((item) => {
  //   console.log(
  //     `${item.fields?.internalName},${item.fields?.canonicalUrl},https://app.contentful.com/spaces/cpumif18y1gd/entries/cpumif18y1gd/${item.sys.id}`
  //   )
  // })
  // const seoMetadata = await contentfulRegularClient.getEntry('48dZrtIRgPjCoozMhNeboy',{
  //   content_type: 'article',
  // })
  // console.log(JSON.stringify(seoMetadata.fields.content.content[3], null, 2))
}

start().then()
