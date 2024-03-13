import Script from 'next/script'
import Router from 'next/router'
import NProgress from 'nprogress'
import { DefaultSeo } from 'next-seo'
import { forOwn } from 'lodash'
import type { AppProps } from 'next/app'
import { getQueryStr, searchForQueries, updateATagsForOtherDomains } from '@/components/common/PersistentQueryParams'
import { loadMarketoForm } from '@/components/common/loadMktoForm'
import '../storybookBuild/index2.css'
import '../styles/index.scss'
import 'react-modal-video/scss/modal-video.scss'

let storeQueries = true

Router.events.on('routeChangeStart', () => {
  NProgress.start()
  if (storeQueries) getQueryStr()
})

Router.events.on('beforeHistoryChange', (route) => {
  const queries = searchForQueries({ location: route })
  const { queryStr = '', storedQueryStr = '' } = queries || {}
  if (storeQueries && storedQueryStr && storedQueryStr !== queryStr?.split('#')[0]) {
    storeQueries = false

    // remove duplicates
    const queryObj: { [p: string]: string } = {}

    const newParams = route.split('?')
    if (newParams[1]) {
      const splitOldParms = newParams[1].split('&')
      for (let i = 0; i < splitOldParms.length; i++) {
        const param = splitOldParms[i].split('=')
        if (param.length === 2) {
          queryObj[param[0]] = param[1]
        }
      }
    }

    const oldParams = storedQueryStr.split('&')
    for (let i = 0; i < oldParams.length; i++) {
      const param = oldParams[i].split('=')
      if (param.length === 2) {
        queryObj[param[0]] = param[1]
      }
    }

    const queryArr: string[] = []
    forOwn(queryObj, (value, key) => {
      queryArr.push(`${key}=${value}`)
    })

    const query = queryArr.join('&')

    /**
     * shallow: change the URL without running data fetching methods again
     * scroll: scroll to top of page
     */
    Router.replace(`${route.split('?')[0]}?${query}`, undefined, { shallow: true, scroll: true })

    return false
  }

  storeQueries = true
  return true
})

Router.events.on('routeChangeComplete', () => {
  updateATagsForOtherDomains()
  NProgress.done()
})

Router.events.on('routeChangeError', () => {
  NProgress.done()
})

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Script id="load-market-script" strategy="afterInteractive">
        {`var loadMarketoForm = ${loadMarketoForm()}`}
      </Script>

      <DefaultSeo
        additionalMetaTags={[
          { name: 'application-name', content: 'Emplifi' },
          { name: 'apple-mobile-web-app-capable', content: 'yes' },
          { name: 'apple-mobile-web-app-title', content: 'Emplifi' },
          { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
          { name: 'mobile-web-app-capable', content: 'yes' },
          { name: 'format-detection', content: 'telephone=no' },
          { name: 'msapplication-tap-highlight', content: 'no' },
          { name: 'msapplication-TileColor', content: '#ffffff' },
          { name: 'msapplication-config', content: '/browserconfig.xml' },
          { name: 'theme-color', content: '#0c3b5d' }
        ]}
        additionalLinkTags={[
          { rel: 'manifest', href: '/manifest.json' },
          { rel: 'mask-icon', href: '/icons/ios/safari-pinned-tab.svg', color: '#ffffff' },
          { rel: 'apple-touch-icon', href: '/icons/ios/touch-icon-iphone.png' },
          { rel: 'apple-touch-icon', href: '/icons/ios/touch-icon-ipad.png', sizes: '152x152' },
          { rel: 'apple-touch-icon', href: '/icons/ios/touch-icon-iphone-retina.png', sizes: '180x180' },
          { rel: 'apple-touch-icon', href: '/icons/ios/touch-icon-ipad-retina.png', sizes: '167x167' }
        ]}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
