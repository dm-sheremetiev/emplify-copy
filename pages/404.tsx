import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { ContentBlocks } from '@/components/common/contentBlocks'

// Queries
import { getNewSiteConfig } from '@/queries/getNewSiteConfig'
import { getDynamicPageContent, getPageByID } from '@/queries/getPages'

// Components
// import { LangDetectorProvider } from 'context/langDetector'
import { HeadComponent, HeaderComp, FooterComp } from '@/components/layout'

// Interfaces
import { pageData } from '@/interfaces/queries'
import { uiUniquePage } from '@/interfaces/index'
import { siteConfigI } from '@/interfaces/siteConfig'

function Index(props: { data: pageData; newSiteConfig: siteConfigI; pageSlugs: uiUniquePage[] }): JSX.Element {
  const { data, pageSlugs } = props
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>

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
      {props?.newSiteConfig && <HeaderComp slugs={[]} isSimplified={data?.page?.isSimplified} data={props?.newSiteConfig} />}
      {data?.page && <ContentBlocks page={data} content={data?.page?.blocksCollection.items} />}
      {props?.newSiteConfig && <FooterComp isSimplified={data?.page?.isSimplified} data={props?.newSiteConfig} />}
    </>
    // </LangDetectorProvider>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { preview = process.env.NEXT_PUBLIC_ENVIRONMENT === 'dev', locale, locales } = context
  const data = await getDynamicPageContent('404', locale, preview)
  const newSiteConfig = await getNewSiteConfig(locale, preview)
  const pageSlugs = await getPageByID(data?.page?.sys.id, locales, preview)

  return {
    props: {
      data,
      newSiteConfig,
      pageSlugs: pageSlugs || []
    },
    revalidate: 1
  }
}

export default Index
