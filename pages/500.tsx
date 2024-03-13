import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { ContentBlocks } from '@/components/common/contentBlocks'

// Queries
import { getNewSiteConfig } from '@/queries/getNewSiteConfig'
import { getDynamicPageContent } from '@/queries/getPages'

// Components
// import { LangDetectorProvider } from 'context/langDetector';
import { FooterComp, HeadComponent, HeaderComp } from '@/components/layout'

// Interfaces
import { pageData } from '@/interfaces/queries'
import { siteConfigI } from '@/interfaces/siteConfig'

function Index(props: { data: pageData; siteConfig: siteConfigI }): JSX.Element {
  const { data } = props
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>

  return (
    // <LangDetectorProvider>
    <>
      {props?.siteConfig && (
        <HeadComponent
          defaultData={{
            scripts: props?.siteConfig?.siteLevelPageScripts,
            seo: props?.siteConfig?.seoConfiguration,
            siteUrl: props?.siteConfig?.siteUrl
          }}
          pageData={{ seo: data?.page?.seo, pageSlugs: [] }}
        />
      )}

      {props?.siteConfig && <HeaderComp slugs={[]} isSimplified={data?.page?.isSimplified} data={props?.siteConfig} />}
      {data?.page && <ContentBlocks page={data} content={data?.page?.blocksCollection.items} />}
      {props?.siteConfig && <FooterComp isSimplified={data?.page?.isSimplified} data={props?.siteConfig} />}
    </>
    // </LangDetectorProvider>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { preview = process.env.NEXT_PUBLIC_ENVIRONMENT === 'dev', locale } = context
  const data = (await getDynamicPageContent('500', locale, preview)) || {}
  const siteConfig = await getNewSiteConfig(locale, preview)

  return {
    props: {
      data,
      siteConfig
    },
    revalidate: 1
  }
}

export default Index
