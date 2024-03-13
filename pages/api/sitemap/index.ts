import { NextConfig } from 'next';
import { map } from 'iter-tools';
import pMemoize from 'p-memoize';
import { Readable } from 'stream';
import { pipeline } from 'stream/promises';
import { SitemapIndexStream } from 'sitemap';
import { getLanguages } from '@/queries/getLanguages';
import { withSentryConfig } from '@sentry/nextjs';

// allow caching by CDN up to 8 hours, omit must-revalidate since it's okay to use stale sitemap
export const maxAge = 8 * 60 * 60;
export const cacheControl = `public, max-age=0, s-maxage=${maxAge}`;

export const getLocalesMemo = pMemoize(
  async () => {
    const languages = await getLanguages();
    return languages.map(({ languageCode }) => languageCode);
  },
  { maxAge }
);

function getSitemapIndexURL(locale: string) {
  return new URL(`/sitemap/pages_${locale}.xml`, process.env.SERVER_URL).toString();
}

const sitemapHandler: NextConfig = async (req, res) => {
  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', cacheControl);
  const locales = await getLocalesMemo();
  const smiStream = new SitemapIndexStream();
  const itemsStream = Readable.from(map(getSitemapIndexURL, locales));
  await pipeline(itemsStream, smiStream, res);

  return {};
};

export default withSentryConfig(sitemapHandler);
