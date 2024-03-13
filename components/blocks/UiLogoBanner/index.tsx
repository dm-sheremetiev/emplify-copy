import React from 'react'
import { UiLogoBanner } from '@/interfaces/blocks'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import clsx from 'clsx'
import styles from './logo-banner.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { contentfulImageLoaderFunction } from 'utils/contenful-helper-functions'
import { Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'

export function UiLogoBannerComp(props: { block: UiLogoBanner }): JSX.Element {
  const { block } = props
  const title = documentToHtmlString(block?.title?.json)
  const imgLength = block?.logoItemsCollection?.items.length

  const listItems = block?.logoItemsCollection?.items.map((item, i) => {
    if (!item?.logo?.url) {
      return <></>
    }
    return (
      <li key={i} className={styles.list}>
        <Image
          loader={contentfulImageLoaderFunction}
          src={item?.logo?.url}
          alt={item?.logo?.title}
          width={250}
          height={250}
          loading="lazy"
          priority={false}
        />
      </li>
    )
  })

  const slides = block?.logoItemsCollection?.items.map((item, i) => {
    if (!item?.logo?.url) {
      return <></>
    }
    return (
      <SwiperSlide key={i}>
        <Image
          loader={contentfulImageLoaderFunction}
          src={item?.logo?.url}
          alt={item?.logo?.title}
          width={250}
          height={173}
          loading="lazy"
          priority={false}
        />
      </SwiperSlide>
    )
  })

  if (imgLength > 7) {
    return (
      <section className={styles.logoSection} style={{ backgroundColor: block.backgroundColor }}>
        <div className={clsx(styles.titleWrapper, styles.wider)} dangerouslySetInnerHTML={{ __html: title }} />
        <Swiper
          normalizeSlideIndex
          createElements
          autoplay={{
            disableOnInteraction: false,
            delay: 0
          }}
          allowTouchMove={false}
          modules={imgLength > 7 ? [Autoplay] : null}
          grabCursor={false}
          loop={true}
          slidesPerView={5.9}
          spaceBetween={60}
          loopedSlides={3}
          speed={3000}
          maxBackfaceHiddenSlides={3}
          centeredSlides={true}
          className="logo-swiper"
          breakpoints={{
            320: {
              slidesPerView: 3,
              loopedSlides: 3
            },
            768: {
              slidesPerView: 5.9,
              loopedSlides: 3,
              spaceBetween: 60,
              maxBackfaceHiddenSlides: 3
            }
          }}
        >
          {slides}
        </Swiper>
      </section>
    )
  } else {
    return (
      <section className={styles.logoBanner} style={{ backgroundColor: block.backgroundColor }}>
        <div className={styles.inner}>
          <div>
            <div className={styles.titleWrapper} dangerouslySetInnerHTML={{ __html: title }} />
            <ul className={styles.list}>{listItems}</ul>
          </div>
        </div>
      </section>
    )
  }
}
