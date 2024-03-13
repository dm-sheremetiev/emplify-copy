import React from 'react'
import styles from './stripe-banner.module.scss'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const StripeBanner = ({data}) => {
  const stripeBannerData = documentToHtmlString(data.stripeBanner?.json)
  return (
    <div className={styles.stripeBanner}>
      <div className={styles.contentWrapper}>
        <section dangerouslySetInnerHTML={{ __html: stripeBannerData }} />
        {data.stripeBannerButtonText && <a className={styles.button} href={data.stripeBannerButtonLink}>{data.stripeBannerButtonText}</a>}
      </div>
    </div>
  )
}

export default StripeBanner
