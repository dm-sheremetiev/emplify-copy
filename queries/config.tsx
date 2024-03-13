import axios from 'axios'
// const util = require('util') // DEV NOTE: KEEP FOR DEBUGGING
import { Entry, EntrySkeletonType, createClient } from 'contentful'

const DELIVERY_API_KEY = process.env.DELIVERY_API_KEY
const PREVIEW_API_KEY = process.env.PREVIEW_API_KEY
const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID
const CONTENTFUL_ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT
export const graphqlUrl = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}`

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function fetchGraphQL(query: string, preview = process.env.NEXT_PUBLIC_ENVIRONMENT === 'dev', retryNumber = 0): Promise<any> {
  try {
    const res = await axios.post(graphqlUrl, JSON.stringify({ query }), {
      method: 'POST',
      timeout: 120000,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${preview ? PREVIEW_API_KEY : DELIVERY_API_KEY}`
      }
    })

    return res?.data
  } catch (error) {
    if (error?.response?.status === 429) {
      if (retryNumber < 20) {
        console.log(`Error 429 :: retry number: ${retryNumber} :: retrying axios request`)
        await sleep(250 * retryNumber)
        return await fetchGraphQL(query, preview, retryNumber++)
      } else {
        console.error(error)
        return null
        // console.log(util.inspect(error, { showHidden: false, depth: null, colors: true })) // DEV NOTE: KEEP FOR DEBUGGING
      }
    } else {
      console.error(error)
      return null
      // console.log(util.inspect(error, { showHidden: false, depth: null, colors: true })) // DEV NOTE: KEEP FOR DEBUGGING
    }
  }
}

export const getContentfulEntry = async (
  { id, locale }: { id: string; locale?: string },
  options?: { preview?: boolean }
): Promise<Entry<EntrySkeletonType, undefined, string>> => {
  const { preview = process.env.NEXT_PUBLIC_ENVIRONMENT === 'dev' } = options ?? {}
  const client = await createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: preview ? PREVIEW_API_KEY : DELIVERY_API_KEY,
    environment: CONTENTFUL_ENVIRONMENT,
    host: preview ? 'preview.contentful.com' : 'cdn.contentful.com'
  })
  const _options: { locale?: string } = {}
  if (locale) {
    _options.locale = locale
  }
  return client.getEntry(id, _options)
}

// taken from here https://github.com/vercel/next.js/discussions/18550
function sleep(time: number) {
  return new Promise((res) => setTimeout(res, time))
}

export async function avoidRateLimit(time: number): Promise<void> {
  if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'dev') {
    await sleep(time)
  } else {
    await sleep(50)
  }
}
