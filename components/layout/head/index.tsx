import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { uiPage } from '@/interfaces/index'
import { siteConfigI } from '@/interfaces/siteConfig'

import Fonts from '@/components/layout/head/fonts'
import Favicons from '@/components/layout/head/favicons'
import GTMScript from './gtm-script'

export function HeadComponent(props: {
  pageData: { seo: uiPage['seo']; pageSlugs: any }
  defaultData: { seo: siteConfigI['seoConfiguration']; scripts: siteConfigI['siteLevelPageScripts']; siteUrl: string }
}): JSX.Element {
  const { defaultData, pageData } = props
  const { asPath, locale } = useRouter()

  const purePath = asPath?.split('?')[0]
  const canonical = locale === 'en' ? ` ${defaultData?.siteUrl}${purePath.slice(1)}` : ` ${defaultData?.siteUrl}${locale}${purePath}`
  const canonicalUrl = canonical?.trim()?.split('?')[0]
  const maxVideo = pageData?.seo?.maxVideo ? parseInt(pageData?.seo?.maxVideo) : -1
  const maxImage = pageData?.seo?.maxVideo ? pageData?.seo?.maxImage : 'standard'
  const maxSnippet = pageData?.seo?.maxVideo ? parseInt(pageData?.seo?.maxSnippet) : -1
  const seoIndexing = [`max-snippet: ${maxSnippet}`, `max-image-preview: ${maxImage}`, `max-video-preview: ${maxVideo}`]

  // Hreflang X default props
  const item = pageData?.pageSlugs[0]
  const pagePath = item && item?.pagePath ? item?.pagePath : ''
  const lang = item && item?.language !== 'en' ? item?.language : ''
  const slug = item && item?.slug !== 'home' && item?.slug ? item?.slug : ''
  const xDefault = `${defaultData?.siteUrl}${[lang, pagePath, slug].filter((val) => val).join('/')}`

  if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'dev') {
    seoIndexing.push('noindex', 'nofollow')
  } else {
    seoIndexing.push(pageData?.seo?.noIndex ? 'noindex' : 'index')
    seoIndexing.push(pageData?.seo?.noFollow ? 'nofollow' : 'follow')
  }

  // todo: The x-default is a page that shows users a country selector and is the default page for users worldwide that we should create one
  // https://developers.google.com/search/blog/2013/04/x-default-hreflang-for-international-pages
  const languageAlternates = [
    {
      key: 'langAlter-x-default',
      hrefLang: 'x-default',
      href: xDefault
    },
    ...pageData.pageSlugs.map((item) => {
      const pagePath = item && item?.pagePath ? item?.pagePath : ''
      const lang = item && item?.language !== 'en' ? item?.language : ''
      const slug = item && item?.slug !== 'home' && item?.slug ? item?.slug : ''
      const notTranslatedLang = lang != null && item?.slug != ''

      if (notTranslatedLang) {
        return {
          key: `langAlter-${item?.language}`,
          hrefLang: item?.language,
          href: `${defaultData?.siteUrl}${[lang, pagePath, slug].filter((val) => val).join('/')}`
        }
      }
      return null
    })
  ]

  return (
    <>
      <NextSeo
        title={
          purePath === '/'
            ? pageData?.seo?.metaTitle
            : `${pageData?.seo?.metaTitle.includes('Emplifi')}`
            ? pageData?.seo?.metaTitle
            : `${pageData?.seo?.metaTitle} | Emplifi`
        }
        openGraph={{
          site_name: 'Emplifi | Customer Experience & Social Media Marketing Software',
          type: pageData?.seo?.ogtype || 'website',
          description: pageData?.seo?.ogDescription,
          images: [
            pageData?.seo?.ogimage !== null && pageData?.seo?.ogimage !== undefined
              ? pageData?.seo?.ogimage
              : defaultData?.seo?.data?.defaultTwitterImage
          ]
        }}
        canonical={canonicalUrl || undefined}
        additionalMetaTags={[
          { name: 'google-site-verification', content: 'IqnierdrXXxYkOLq2GVc_QnbUav0VKJgW1CZUIRF74w' },
          { name: 'description', content: pageData?.seo?.metaDescription }
        ]}
      />
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover" />
        <meta key="robots" name="robots" content={seoIndexing.join(',')} />
        <meta key="googlebot" name="googlebot" content={seoIndexing.join(',')} />
        <meta key="googlebot-news" name="googlebot-news" content={seoIndexing.join(',')} />
        <meta key="og:url" property="og:url" content={canonicalUrl} />
        <meta key="og:title" property="og:title" content={pageData?.seo?.ogTitle || pageData?.seo?.metaTitle} />

        <Fonts />
        <Favicons />

        {defaultData?.seo?.data?.twitterCard && <meta key="twitter:card" name="twitter:card" content={defaultData.seo?.data?.twitterCard} />}
        {defaultData?.seo?.data?.twitterSite && <meta key="twitter:site" name="twitter:site" content={defaultData.seo.data?.twitterSite} />}
        {defaultData?.seo?.data?.twitterCreator && (
          <meta key="twitter:creator" name="twitter:creator" content={defaultData.seo?.data?.twitterCreator} />
        )}
        {pageData?.seo?.twitterTitle && <meta key="twitter:title" name="twitter:title" content={pageData?.seo?.twitterTitle} />}
        {pageData?.seo?.twitterDescription && (
          <meta key="twitter:description" name="twitter:description" content={pageData?.seo?.twitterDescription} />
        )}
        {pageData?.seo?.twitterimage?.url ? (
          <meta name="twitter:image" content={pageData?.seo?.twitterimage?.url} />
        ) : (
          defaultData?.seo?.data?.defaultTwitterImage && <meta name="twitter:image" content={defaultData.seo?.data?.defaultTwitterImage} />
        )}

        {languageAlternates?.length !== 0 &&
          languageAlternates
            .filter((item) => item !== null && item?.key !== 'langAlter-undefined')
            // don't show DE or PT as alternative as we are not showing in sitemaps anyways
            .filter((item) => item?.hrefLang !== 'de' && item?.hrefLang !== 'pt')
            .map((item) => <link key={item?.key} rel="alternate" hrefLang={item?.hrefLang} href={item?.href?.trim()} />)}
      </Head>
      <GTMScript />
    </>
  )
}
