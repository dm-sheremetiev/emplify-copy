import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { ThreeCardAltGroup, CardAlt, ThreeIconParagraphAlt } from '../../../storybookBuild/index'
import { internalLinkParse } from 'scripts/internalLinkFill'
import { LinkHandlerButton } from '@/components/common/handleLink'
// import { useLanguageDetector } from 'context/langDetector'
import UiTabViewComp from '../UiTabViewComp'
import UiProofPointsComp from '../UiProofPoints'
import styles from './card-grid.module.scss'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/scss/navigation'
import 'swiper/scss/effect-coverflow'

import SwiperCore, { Navigation } from 'swiper'
import { contentfulImageLoaderFunction } from 'utils/contenful-helper-functions'

// Swiper modules
SwiperCore.use([Navigation])

// Interfaces
import { UiCardAdvanced, UiThreeCardGroup } from '@/interfaces/blocks'
import Image from 'next/image'

export function UiThreeCardGroupComp(props: { block: UiThreeCardGroup }): JSX.Element {
  const { block } = props
  const router = useRouter()
  // const { langDetector } = useLanguageDetector()
  const getTitle = documentToHtmlString(block?.title?.json)
  const [content, setContent] = useState<Array<string>>([])
  const contentArray = block?.cardsCollection?.items || []

  const showContent = async () => {
    const some = Promise.all(
      contentArray.map(async (item, index) => {
        const contentParse = documentToHtmlString(item?.cardContent.json)

        if (contentParse.includes('entry-hyperlink')) {
          const linkParsed = await internalLinkParse(contentParse, router.locale, item?.cardContent.json)
          return linkParsed
        } else {
          return contentParse
        }
      })
    )
    setContent(await some)
  }
  useEffect(() => {
    showContent()
  }, [contentArray])

  return (
    <>
      {block?.cardsCollection?.items?.[0]?.__typename === 'UiCardAdvanced' && (
        <ThreeIconParagraphAlt
          dense={block.componentType === 'Variant_Tab' || block.componentType === 'Variant_Proof_Points'}
          expandContainer={block.componentType === 'Variant_Tab' || block.componentType === 'Variant_Carousel'}
          title={
            block?.componentType !== 'Variant_Rounded_Proof_Points' &&
            block?.componentType !== 'Variant_Carousel_One_Item' &&
            block?.componentType !== 'Variant_Carousel_Two_Items' &&
            block?.componentType !== 'Variant_Carousel_Three_Items' &&
            block?.componentType !== 'Variant_Card_Columns' &&
            documentToHtmlString(block?.title?.json)
          }
          titleColor={block?.titleColor}
          image={block.image?.url}
          mobileImage={block.mobileImage?.url}
          backgroundSize={block.backgroundSize}
          backgroundColor={block.backgroundColor}
          backgroundPosition={block.backgroundPosition}
        >
          {block.componentType === 'Variant_Tab' && <UiTabViewComp block={block} />}
          {block.componentType === 'Variant_Carousel' && (
            <div className="swiper-controls">
            <Swiper
              loop={contentArray.length >= 8}
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              className="coverFlow"
              loopedSlides={5}
              coverflowEffect={{
                rotate: 0,
                stretch: 10,
                depth: 200,
                modifier: 1,
                slideShadows: true
              }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              }}
              modules={[EffectCoverflow]}
            >
              {block.cardsCollection?.items.map((item, index) => {
                const card: UiCardAdvanced = item
                const title = documentToHtmlString(item?.title?.json)

                return (
                  <SwiperSlide key={index}>
                    {card?.backgroundImage.url && (
                      <Image
                        loader={contentfulImageLoaderFunction}
                        src={card?.backgroundImage?.url}
                        alt={card?.backgroundImage?.title}
                        width={1000}
                        height={1000}
                        loading="lazy"
                        priority={false}
                      />
                    )}
                    <div className="swiper-content">
                      <div dangerouslySetInnerHTML={{ __html: title || '' }} />
                      <div dangerouslySetInnerHTML={{ __html: content[index] || '' }} />
                    </div>
                    <LinkHandlerButton cta={card?.cta} ctaType={card?.ctaType} />
                  </SwiperSlide>
                )
              })}
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </Swiper>
            </div>
          )}
          {(block.componentType === 'Variant_Card' || block.componentType === null) && (
            <ThreeCardAltGroup>
              {block.cardsCollection?.items.map((item, index) => {
                const card: UiCardAdvanced = item

                // Check if there is not translated text // Alert message
                // langDetector([documentToHtmlString(card?.title?.json), content[index], documentToHtmlString(block?.title?.json)], router.locale)
                return (
                  <CardAlt
                    key={index}
                    header={documentToHtmlString(card?.title?.json)}
                    paragraph={content[index]}
                    backgroundColor={card.backgroundColor}
                    icon={card.rightIconLink?.icon}
                    buttonChildren={<LinkHandlerButton cta={card.cta} ctaType={card.ctaType} />}
                    image={card.backgroundImage?.url}
                  />
                )
              })}
            </ThreeCardAltGroup>
          )}
          {(block.componentType === 'Variant_Proof_Points' || block.componentType === 'Variant_Rounded_Proof_Points') && (
            <UiProofPointsComp
              isRounded={block?.componentType === 'Variant_Rounded_Proof_Points'}
              title={block?.componentType === 'Variant_Rounded_Proof_Points' ? getTitle : ''}
              block={block}
            />
          )}
          {block.componentType === 'Variant_Carousel_Three_Items' && (
            <section className="swiper-section">
              <div className="swiper-section__title" style={{ color: block?.titleColor }} dangerouslySetInnerHTML={{ __html: getTitle || '' }} />
              <div className="swiper-three-items swiper-controls">
                <Swiper
                  loop={contentArray.length >= 3}
                  spaceBetween={20}
                  slidesPerGroup={1}
                  centeredSlides={true}
                  slidesPerView={1}
                  className="swiper-component"
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                  }}
                  breakpoints={{
                    768: {
                      slidesPerView: 3,
                      slidesPerGroup: 3
                    }
                  }}
                >
                  {block.cardsCollection?.items.map((item, index) => {
                    const card: UiCardAdvanced = item
                    const title = documentToHtmlString(item?.title?.json)

                    return (
                      <SwiperSlide key={index}>
                        {card?.backgroundImage?.url && (
                          <Image
                            loader={contentfulImageLoaderFunction}
                            src={item.backgroundImage?.url}
                            alt={item.backgroundImage?.title}
                            width={1000}
                            height={1000}
                            loading="lazy"
                            priority={false}
                          />
                        )}
                        <div className="swiper-content">
                          <div dangerouslySetInnerHTML={{ __html: title || '' }} />
                          <div dangerouslySetInnerHTML={{ __html: content[index] || '' }} />
                        </div>
                        <LinkHandlerButton cta={card?.cta} ctaType={card?.ctaType} />
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
            </section>
          )}
          {block.componentType === 'Variant_Carousel_One_Item' && (
            <section className="swiper-section">
              <div className="swiper-section__title" style={{ color: block?.titleColor }} dangerouslySetInnerHTML={{ __html: getTitle || '' }} />
              <div className="swiper-one-item swiper-controls">
                <Swiper
                  loop={contentArray.length >= 3}
                  spaceBetween={20}
                  slidesPerGroup={1}
                  centeredSlides={true}
                  slidesPerView={1}
                  className="swiper-component"
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                  }}
                  breakpoints={{
                    768: {
                      slidesPerView: 1,
                      slidesPerGroup: 1
                    }
                  }}
                >
                  {block.cardsCollection?.items.map((item, index) => {
                    const card: UiCardAdvanced = item
                    const title = documentToHtmlString(item?.title?.json)

                    return (
                      <SwiperSlide key={index}>
                        <div className="swiper-content">
                          <div className="swiper-item">
                            {card?.backgroundImage?.url && (
                              <Image
                                loader={contentfulImageLoaderFunction}
                                src={card?.backgroundImage?.url}
                                alt={card.backgroundImage?.title}
                                className="swiper-item__bg-image"
                                width={1000}
                                height={1000}
                                loading="lazy"
                                priority={false}
                              />
                            )}
                          </div>
                          <div className="swiper-item">
                            <div dangerouslySetInnerHTML={{ __html: title || '' }} />
                            <div dangerouslySetInnerHTML={{ __html: content[index] || '' }} />
                            {card?.logo?.url && (
                              <div className="swiper-item__logo-wrapper">
                                {card?.logo?.url && (
                                   <Image
                                    loader={contentfulImageLoaderFunction}
                                    src={card?.logo?.url}
                                    alt={card?.logo?.description}
                                    width={1000}
                                    height={1000}
                                    loading="lazy"
                                    priority={false}
                                  />
                                )}
                              </div>
                            )}

                            <div className="swiper-item__buttons-wrapper">
                              <LinkHandlerButton cta={card?.cta} ctaType={card?.ctaType} />
                              {card?.optionalCta && <LinkHandlerButton cta={card?.optionalCta} ctaType={card?.optionalCtaType} />}
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
            </section>
          )}
          {block.componentType === 'Variant_Carousel_Two_Items' && (
            <section className="swiper-section">
              <div className="swiper-section__title" style={{ color: block?.titleColor }} dangerouslySetInnerHTML={{ __html: getTitle || '' }} />
              <div className="swiper-two-items swiper-controls">
                <Swiper
                  loop={contentArray.length >= 3}
                  spaceBetween={25}
                  slidesPerGroup={1}
                  centeredSlides={false}
                  slidesPerView={1}
                  className="swiper-component"
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                  }}
                  breakpoints={{
                    992: {
                      slidesPerView: 2,
                      slidesPerGroup: 2
                    }
                  }}
                >
                  {block.cardsCollection?.items.map((item, index) => {
                    const card: UiCardAdvanced = item
                    const title = documentToHtmlString(item?.title?.json)

                    return (
                      <SwiperSlide key={index}>
                        {card?.backgroundImage?.url && (
                          <Image
                            loader={contentfulImageLoaderFunction}
                            src={card?.backgroundImage?.url}
                            alt={card?.backgroundImage?.title}
                            width={1000}
                            height={1000}
                            loading="lazy"
                            priority={false}
                          />
                        )}
                        <div className="swiper-content">
                          <div dangerouslySetInnerHTML={{ __html: title || '' }} />
                          <div dangerouslySetInnerHTML={{ __html: content[index] || '' }} />
                        </div>
                        <LinkHandlerButton cta={card?.cta} ctaType={card?.ctaType} />
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
            </section>
          )}
          {block.componentType === 'Variant_Card_Columns' && (
            <div className={styles.cardGridWrapper} style={{ backgroundColor: block?.backgroundColor }}>
              <div className={styles.inner}>
                {block.cardsCollection?.items.map((item, index) => {
                  const card: UiCardAdvanced = item
                  const title = documentToHtmlString(item?.title?.json)
                  return (
                    <>
                    {card?.backgroundImage?.url && (
                      <div className={styles.cardItem}>
                        {card?.tabTitle &&  <span className={styles.cardSubtitle}>{card?.tabTitle}</span>}
                        {card?.backgroundImage?.url &&
                          <div className={styles.cardImgWrapper}>
                            <Image
                              loader={contentfulImageLoaderFunction}
                              src={card?.backgroundImage?.url}
                              alt={card?.backgroundImage?.title}
                              width={270}
                              height={173}
                              loading="lazy"
                              priority={false}
                            />
                          </div>
                        }
                        <div className={styles.cardContent}>
                          <div dangerouslySetInnerHTML={{ __html: title || '' }} />
                          <div dangerouslySetInnerHTML={{ __html: content[index] || '' }} />
                        </div>
                        <LinkHandlerButton cta={card?.cta} ctaType={card?.ctaType} />
                      </div>
                    )}
                  </>
                  )
                })}
              </div>
          </div>
          )}
        </ThreeIconParagraphAlt>
      )}
    </>
  )
}
