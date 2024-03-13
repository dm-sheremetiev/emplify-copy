const path = require('path')
const { withSentryConfig } = require('@sentry/nextjs')
const withBundleAnalyzer = require('@next/bundle-analyzer')
const withPlugins = require('next-compose-plugins')
const { redirects } = require('./redirects/redirects.js')
/**
 * @type {import('next').NextConfig}
 */
const moduleExports = withPlugins([[withBundleAnalyzer({ enabled: !!process.env.ANALYZE })]], {
  compress: true, // https://nextjs.org/docs/pages/api-reference/next-config-js/compress
  poweredByHeader: false,
  reactStrictMode: true,
  staticPageGenerationTimeout: 2000,
  sentry: {
    hideSourceMaps: true,
    disableServerWebpackPlugin: true,
    disableClientWebpackPlugin: true
  },
  images: {
    remotePatterns: [
      { hostname: 'images.ctfassets.net', protocol: 'https' },
      { hostname: 'via.placeholder.com', protocol: 'https' },
      { hostname: 'i.imgur.com', protocol: 'https' }
    ]
  },
  i18n: {
    locales: ['en', 'fr', 'es', 'pt', 'de'],
    defaultLocale: 'en'
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  env: {
    NEXT_PUBLIC_ENVIRONMENT: process.env.ENVIRONMENT,
    NEXT_PUBLIC_SENTRY_DSN: process.env.SENTRY_DSN,
    NEXT_PUBLIC_SENTRY_ENVIRONMENT: process.env.SENTRY_ENVIRONMENT || process.env.ENVIRONMENT,
    PREVIEW_API_KEY: process.env.PREVIEW_API_KEY,
    DELIVERY_API_KEY: process.env.DELIVERY_API_KEY,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT,
    CAREERS_CONTENTFUL_ENVIRONMENT: process.env.CAREERS_CONTENTFUL_ENVIRONMENT,
    CAREERS_DELIVERY_API_KEY: process.env.CAREERS_DELIVERY_API_KEY,
    CAREERS_PREVIEW_API_KEY: process.env.CAREERS_PREVIEW_API_KEY,
    SERVER_URL: process.env.SERVER_URL,
    GREENHOUSE_JOB_BOARD_TOKEN: process.env.GREENHOUSE_JOB_BOARD_TOKEN,
    GREENHOUSE_JOB_BOARD_TOKEN_FR: process.env.GREENHOUSE_JOB_BOARD_TOKEN_FR,
    HERA_SECRET: process.env.HERA_SECRET,
    WWW_API_PATH_PREFIX: process.env.WWW_API_PATH_PREFIX,
    WWW_API_CURRENT_CAMPAIGN: process.env.WWW_API_CURRENT_CAMPAIGN,
    SEARCH_PAGE_NAME: process.env.SEARCH_PAGE_NAME,
    SEARCH_BASE_DOMAIN: process.env.SEARCH_BASE_DOMAIN,
    SEARCH_ENABLED: process.env.SEARCH_ENABLED,
    MKTO_DOMAIN: process.env.MKTO_DOMAIN,
    MKTO_CLIENT_ID: process.env.MKTO_CLIENT_ID,
    MKTO_CLIENT_SECRET: process.env.MKTO_CLIENT_SECRET,
    CX_INDEX_CURRENT_CAMPAIGN: process.env.CX_INDEX_CURRENT_CAMPAIGN,
    GTM_AUTH_TOKEN: process.env.GTM_AUTH_TOKEN,
    GTM_PREVIEW_ENV: process.env.GTM_PREVIEW_ENV,
    CONTENTFUL_REVALIDATE_SECRET: process.env.CONTENTFUL_REVALIDATE_SECRET
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap'
      },
      {
        source: '/sitemap/pages_:locale.xml',
        destination: '/api/sitemap/:locale'
      },
      {
        source: '/robots.txt',
        destination: '/api/robotstxt'
      }
    ]
  },
  // All redirects
  redirects,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            // The page won’t display as an iframe for all internal links
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            // This header controls DNS prefetching, This reduces latency when the user clicks a link.
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            // This header informs browsers that the site should only be accessed using HTTPS not HTTP for a max-age of 2 years
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            // This header stops pages from loading when they detect reflected cross-site scripting (XSS) attacks
            // it can still provide protection for older web browsers that don't support CSP
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            // This header controls how much information the browser includes when navigating from the current website (origin) to another.
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ].filter((item) => item)
      }
    ]
  }
})
const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore
  silent: true
}
module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions)
