import React from 'react'
import ShowDown from 'showdown'
import styles from './hero-banner.module.scss'
import Image from 'next/image'
import { contentfulImageLoaderFunction } from 'utils/contenful-helper-functions'

const HeroBanner = ({children, data}) => {
  const converter = new ShowDown.Converter()

  const heroBannerContent = () => {
     let htmlOutput = ''

    data?.headerBannerContent?.forEach((item) => {
      const converted = converter.makeHtml(item)
      htmlOutput += converted
    })

    return htmlOutput
  }
  
  const bulletPointsList = data.heroBannerBulletPointsList.map((item, index) => {
    return (
      <li key={index} style={{zIndex: 100}}>
        <h2>{item.title}</h2>
        <p>{item.text}</p>
      </li>
      )
  })

  return (
    <div className={styles.heroBanner}>
      <div className={styles.container}>
        <div className={styles.bannerHead} dangerouslySetInnerHTML={{ __html: heroBannerContent() }}>
        </div>
        <div className={styles.bannerContent}>
          <ul className={styles.bannerList}>
            {bulletPointsList}
          </ul>
          {children}
          {data?.heroBannerImg && (
            <Image
              className={styles.bannerImg}
              loader={contentfulImageLoaderFunction}
              src={data.heroBannerImg}
              alt={data.heroBannerImg.title}
              width={500}
              height={500}
              loading="lazy"
              priority={false}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
