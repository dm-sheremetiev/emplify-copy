import { NextConfig } from 'next';
import { SitemapStream } from 'sitemap';
import { Readable } from 'stream';
import { pipeline } from 'stream/promises';
import getCareersPaths from '@/careers/sitemap';
import getSitemap from '@/queries/getPaths/sitemap';
import { asyncInterleaveReady } from 'iter-tools';
import { cacheControl, getLocalesMemo } from '.';
import { withSentryConfig } from '@sentry/nextjs';

const localeSitemapHandler: NextConfig = async (req, res) => {
  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', cacheControl);
  const locale = req.query.locale.toString();
  const acceptedLocales = await getLocalesMemo();
  if (!acceptedLocales.includes(locale)) {
    res.status(404).end();
  }
  const smStream = new SitemapStream({ hostname: process.env.SERVER_URL });
  const itemsStream = Readable.from(asyncInterleaveReady(getSitemap(locale), getCareersPaths(locale)));
  await pipeline(itemsStream, smStream, res);

  return {};
};

export default withSentryConfig(localeSitemapHandler);
