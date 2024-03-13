const fs = require('fs')
const csvParse = require('csv-parse')
let urls = undefined

const files = [
  {
    inputFileName: 'URL_redirect_map.csv',
    outputFileName: 'URL_redirect_map.json',
    fieldTransforms: {}
  },
  {
    inputFileName: 'Authors.csv',
    outputFileName: 'authors.json',
    fieldTransforms: {
      name: {
        // this is the exact key you want to tranform
        key: 'author', // this will replace the original key above with this value
        valueTransform: valuePassThrough // this function will be called on the value for the above key and replace with the returned value from the function
      }
    }
  },
  {
    inputFileName: 'Blog Posts.csv',
    outputFileName: 'blog_posts.json',
    fieldTransforms: {
      author: {
        key: 'author', // don't rename, just use value transform
        valueTransform: getNormalizedAuthor
      },
      content: {
        key: 'content',
        valueTransform: contentTransform
      }
    }
  },
  {
    inputFileName: 'Blog_Posts_To_Upload.csv',
    outputFileName: 'blog_posts_to_upload.json',
    fieldTransforms: {}
  }
]

const webflowImageUrls = new Set()

for (const file of files) {
  // iterate through each file
  const csvContent = fs.readFileSync(`./data/${file.inputFileName}`, 'utf8')
  csvParse.parse(csvContent, { columns: true }, (err, records) => {
    if (err) {
      console.error('Error parsing CSV:', err)
      return
    }

    records.forEach((record) => {
      const featuredImg = record['Featured Image']

      if (featuredImg) {
        webflowImageUrls.add(featuredImg)
      }

      const content = record['Content'] // Change to the actual column name in your CSV
      if (content) {
        const regex = /src="https:\/\/uploads-ssl\.webflow\.com[^"]+/g
        const matches = content.match(regex)

        if (matches) {
          matches.forEach((match) => {
            // Extract the URL from the matched string
            const splitted = match.split('src="')

            if (splitted[1]) {
              webflowImageUrls.add(splitted[1])
            }
          })
        }
      }
    })

    const transformedRecords = getTransformedRecords(records, file.fieldTransforms)
    const jsonString = JSON.stringify(transformedRecords, null, 2)

    if (file.inputFileName === 'Blog Posts.csv') {
      // Create a JSON file with unique Webflow image URLs
      const uniqueImageUrls = [...webflowImageUrls]
      const imagesArray = uniqueImageUrls.map((url) => ({ url }))
      const imagesJson = JSON.stringify(imagesArray, null, 2)
      fs.writeFileSync(`./data/auto-generated/images.json`, imagesJson)
      console.log('Images JSON file created with unique Webflow URLs:', './data/auto-generated/images.json')
    }

    if (file.inputFileName === 'URL_redirect_map.csv') {
      urls = transformedRecords
    }

    fs.writeFileSync(`./data/auto-generated/${file.outputFileName}`, jsonString)
    console.log('CSV parsing complete. JSON data saved to', `./data/auto-generated/${file.outputFileName}`)
  })
}

function getTransformedRecords(records, fieldTransforms) {
  return records.map((record) => {
    const entries = Object.entries(record).reduce(getEntries(fieldTransforms), [])

    return Object.fromEntries(entries)
  })
}

// iterate through each key/value pair and apply fieldTransforms if any exist
function getEntries(fieldTransforms) {
  return function (acc, [key, value]) {
    // convert the key to snake case
    const normalizedKey = getKey(key)

    // if no field transforms just return key/value pair
    if (!fieldTransforms[normalizedKey]) {
      return [...acc, [normalizedKey, value]]
    }

    // replace the key and transform the value
    return [...acc, [fieldTransforms[normalizedKey].key, fieldTransforms[normalizedKey].valueTransform(value)]]
  }
}

// make key snake case
function getKey(key) {
  return key.toLowerCase().replaceAll(' / ', '_').replaceAll(' ', '_')
}

// split, capitalize, and make Turnto => TurnTo
function getNormalizedAuthor(author) {
  const splitAuthor = author.split('-')

  const capitalizedStrings = splitAuthor.map(capitalizeFirstLetter)

  return capitalizedStrings.join(' ').replace('Turnto', 'TurnTo')
}

function capitalizeFirstLetter(stringToCapitalize) {
  return stringToCapitalize?.length && stringToCapitalize.charAt(0).toUpperCase() + stringToCapitalize.slice(1)
}

// just a passthrough function when all you want to do is rename the key
function valuePassThrough(value) {
  return value
}

function replaceAll(string, search, replace) {
  return string.split(search).join(replace)
}

function contentTransform(content) {
  let newContent = content

  urls.forEach((url) => {
    newContent = replaceAll(newContent, url.pixlee_url, url.emplifi_urls)
  })

  return newContent
}

// Find all the webflow urls from the content, add another array with images [] (images.json), create JSON file with images. Every entry should be unique!!.
