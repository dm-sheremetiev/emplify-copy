import { NextApiHandler } from 'next'
import { getNewSiteConfig } from '@/queries/getNewSiteConfig'
import { getLanguages } from '@/queries/getLanguages'

// allow caching by client up to 8 hours, CDN up to 24 hours, omit must-revalidate since it's okay to use stale resource
const cacheControl = `public, max-age=${8 * 60 * 60}, s-maxage=${24 * 60 * 60}`

const robotsHandler: NextApiHandler = async (req, res) => {
  res.setHeader('Content-Type', 'text/plain')
  res.setHeader('Cache-Control', cacheControl)

  if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'dev') {
    res.write('User-agent: *\nDisallow: /')
  } else {
    const siteConfig = await getNewSiteConfig('en', false)
    const robotsTxt = siteConfig?.seoConfiguration.data.robotsTxt || ''
    const domain = siteConfig?.siteUrl || process.env.SERVER_URL
    const sitemapUrl = new URL('sitemap.xml', domain)

    res.write(robotsTxt)
    res.write(`\n\n# Sitemap files\n`)
    res.write(`Sitemap: ${sitemapUrl.toString()}\n`)

    const languages = await getLanguages()
    languages.forEach((language) => {
      const sitemapUrl = new URL(`sitemap/pages_${language.languageCode}.xml`, domain)
      res.write(`Sitemap: ${sitemapUrl.toString()}\n`)
    })
  }

  res.end()
}

export default robotsHandler
