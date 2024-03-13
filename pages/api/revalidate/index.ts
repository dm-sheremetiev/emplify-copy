import { EntryCollection } from 'contentful'
import { NextApiRequest, NextApiResponse } from 'next'
import * as contentful from 'contentful'

const contentfulClient = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.DELIVERY_API_KEY,
  environment: process.env.CONTENTFUL_ENVIRONMENT,
  retryLimit: 1
} as any)

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<any> {
  try {
    const revalidationToken = req.headers['revalidation-token']

    if (revalidationToken !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
      res.status(401).json({ message: 'Invalid secret' })
    }

    const firstBunchOfEntries: EntryCollection<any> = await contentfulClient.getEntries<any>({
      content_type: 'uiPage',
      include: 0,
      limit: 1000
    })

    const secondBunchOfEntries: EntryCollection<any> = await contentfulClient.getEntries<any>({
      content_type: 'uiPage',
      include: 0,
      skip: 1000,
      limit: 1000
    })

    const paths = [...firstBunchOfEntries.items, ...secondBunchOfEntries.items].map(
      (item) => `${item.fields?.pagePath ? item.fields.pagePath : ''}${'/' + item.fields?.slug}`
    )

    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"

    // Revalidate all paths

    await Promise.allSettled(
      paths.map(async (path) => {
        try {
          await res.revalidate(`${path.startsWith('/') ? path : '/' + path}`)
        } catch (error) {
          console.error(`Error revalidating path: ${path}`, error)
        }
      })
    )

    return res.json({ paths })
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send(err)
  }
}
