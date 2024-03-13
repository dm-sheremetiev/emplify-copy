import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ContentBlocks } from '@/components/common/contentBlocks'
// Queries
import { getPaths } from '@/queries/getPaths'
import { getNewSiteConfig } from '@/queries/getNewSiteConfig'
import { getDynamicPageContent, getPageByID } from '@/queries/getPages'

// Components
// import { LangDetectorProvider } from 'context/langDetector'
import { LanguageAlert } from '@/components/common/LanguageAlert'
import { FooterComp, HeadComponent, HeaderComp, UiAwardsComp } from '@/components/layout'

// Interfaces
import { pageData } from '@/interfaces/queries'
import { uiUniquePage } from '../interfaces'
import { siteConfigI } from '@/interfaces/siteConfig'

// Nextjs 13 revalidate
export const revalidate = 60
export const dynamic = 'force-dynamic'

function Index(props: { data: pageData; newSiteConfig: siteConfigI; pageSlugs: uiUniquePage[]; showLanguageAlertMessage: boolean }): JSX.Element {
  const { data, pageSlugs, showLanguageAlertMessage } = props
  const router = useRouter()
  const PASS_KEY = 'Access'
  const PASS_VALUE = 'Passed'

  useEffect(() => {
    const { host } = window.location
    if (host.includes('staging') && localStorage.getItem(PASS_KEY) !== 'Passed') {
      const pass = prompt('Password:')

      if (pass === '010101') {
        localStorage.setItem(PASS_KEY, PASS_VALUE)
      }

      if (pass !== '010101') {
        router.push('http://emplifi.io/')
      }
    }
  }, [])

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    // <LangDetectorProvider>
    <>
      {props?.newSiteConfig && (
        <HeadComponent
          defaultData={{
            scripts: props?.newSiteConfig?.siteLevelPageScripts,
            seo: props?.newSiteConfig?.seoConfiguration,
            siteUrl: props?.newSiteConfig?.siteUrl
          }}
          pageData={{ seo: data?.page?.seo, pageSlugs }}
        />
      )}
      {showLanguageAlertMessage && (
        <LanguageAlert data={props?.newSiteConfig?.languageAlertMessage} showLanguageAlertMessage={showLanguageAlertMessage} />
      )}
      {props?.newSiteConfig && <HeaderComp slugs={pageSlugs} isSimplified={data?.page?.isSimplified} data={props?.newSiteConfig} />}
      {data?.page && <ContentBlocks page={data} content={data?.page?.blocksCollection?.items} />}
      {props?.newSiteConfig && <UiAwardsComp data={props?.newSiteConfig?.awardsConfiguration} isAwardsHidden={data?.page?.isAwardsHidden} />}
      {props?.newSiteConfig && <FooterComp isSimplified={data?.page?.isSimplified} data={props?.newSiteConfig} />}
    </>
    // </LangDetectorProvider>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPaths()
  return {
    paths: paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  // preview toggle (read from draft content) is now under control of this ENV variable
  // since the ENV variables are moving to the build steps, this can be set to dev on dev.emplifi.io and prod on emplifi.io
  // if the preview API is used to set the nextJS cookie that sets the preview context, that will always take precedence
  // however, with how this will be set up on the contentful preview side, I do not think that will ever be needed
  const { preview = process.env.NEXT_PUBLIC_ENVIRONMENT === 'dev', params, locale, locales } = context
  let slug = ''
  let path = ''
  let showLanguageAlertMessage = false
  if (Array.isArray(params.slug)) {
    const paramSlugs = params.slug.filter((item) => item && item !== 'null' && item !== 'undefined')
    if (paramSlugs.length !== params.slug.length) {
      return {
        redirect: {
          permanent: false,
          destination: `/${paramSlugs.join('/').toLowerCase()}`
        }
      }
    }

    slug = paramSlugs.pop().toLowerCase()
    path = paramSlugs.join('/').toLowerCase()
  } else {
    slug = params.slug?.toLowerCase()
  }
  if (!slug) {
    slug = 'home'
  }
  // getPage
  let data = await getDynamicPageContent(slug, locale, preview, path)
  let pageSlugs

  if (!data?.page && locale !== 'en') {
    // try finding english content
    data = await getDynamicPageContent(slug, 'en', preview, path)
    // find new page slugs
    pageSlugs = await getPageByID(data?.page?.sys?.id, locales, preview)

    if (pageSlugs?.length > 0) {
      const pageI8nIndex = pageSlugs.findIndex((item) => item?.language === locale)
      const newPath = pageSlugs[pageI8nIndex]
      // if there is a slug and page path for the og language, then redirect there otherwise continue
      if ((newPath?.slug && newPath?.slug !== slug) || (newPath?.pagePath && newPath?.pagePath !== path)) {
        const redirectPath = `/${locale}${newPath?.pagePath ? '/' + newPath.pagePath : ''}${newPath?.slug ? '/' + newPath?.slug : ''}`
        return {
          redirect: {
            destination: redirectPath
          },
          notFound: undefined,
        }
      }
    }

    showLanguageAlertMessage = true
  } else {
    pageSlugs = await getPageByID(data?.page?.sys?.id, locales, preview)
  }

  if (data?.page === null || data?.page === undefined) {
    // disabling this for now until we have a better 404 strategy
    // console.error("Requested page not found - path: " + path + " slug: " + slug + " locale: " + locale);
    return {
      notFound: true,
    }
  }

  // getSiteConfig
  const newSiteConfig = await getNewSiteConfig(locale, preview)

  return {
    props: {
      data,
      newSiteConfig,
      pageSlugs,
      showLanguageAlertMessage
    },
  }
}

export default Index
