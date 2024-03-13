import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { internalLinkParse } from 'scripts/internalLinkFill'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { Button, HeroBanner } from '../../../storybookBuild'
import { LinkHandlerButton } from '@/components/common/handleLink'
// import { useLanguageDetector } from 'context/langDetector'
import dynamic from 'next/dynamic'
import { contentfulImageLoaderFunction, imageContentfulTransformUrl } from 'utils/contenful-helper-functions'

const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false }) as any
// Interfaces
import { UiHero } from '@/interfaces/blocks'
import { externalLink } from '@/interfaces/index'
import styles from '@/components/blocks/UiLogoBanner/logo-banner.module.scss'
import Image from 'next/image'

export function UiHeroComp(props: { block: UiHero }): JSX.Element {
  const { block } = props
  const { cta, ctaType, optionalCta, optionalCtaType } = block
  const optionalCtaTitle = optionalCta ? (optionalCta as externalLink)?.displayTitle : ''
  const optionalCtalLink = optionalCta ? (optionalCta as externalLink)?.externalLink : null
  const router = useRouter()
  // const { langDetector } = useLanguageDetector()
  const [content, setContent] = useState('')
  const contentParse = documentToHtmlString(block?.content?.json)

  // Video match Vimeo
  const getVimeoId = (url) => {
    const match = /vimeo.*\/(\d+)/i.exec(url)

    if (match) {
      return match[1]
    }
  }

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const listItems = block?.logoItemsCollection?.items.map((item, i) => {
    if (!item?.logo?.url) {
      return <></>
    }
    return (
      <li key={i} className={styles.list}>
        {item?.logo?.url && (
          <Image
            loader={contentfulImageLoaderFunction}
            src={item?.logo?.url}
            alt={item?.logo?.title}
            width={500}
            height={500}
            loading="lazy"
            priority={false}
          />
        )}
      </li>
    )
  })

  const showContent = async () => {
    if (contentParse.includes('entry-hyperlink')) {
      const linkParsed = await internalLinkParse(contentParse, router.locale, block?.content?.json)
      return setContent(linkParsed)
    } else {
      return setContent(contentParse)
    }
  }

  useEffect(() => {
    showContent()
  }, [contentParse])

  // Check if there is not translated text // Alert message
  // langDetector([documentToHtmlString(block.title?.json), documentToHtmlString(block.subTitle?.json), content], router.locale)
  const componentType = block.componentType ?? 'Variant_Image'
  return (
    <>
      {componentType === 'Variant_Image' && (
        <HeroBanner
          id={block?.anchorId}
          title={documentToHtmlString(block.title?.json)}
          subTitle={documentToHtmlString(block.subTitle?.json)}
          backgroundColor={block?.backgroundColor}
          titleColor={block?.titleColor}
          textColor={block?.textColor}
          body={content}
          imgSrc={imageContentfulTransformUrl(block?.image?.url)}
          isRight={block.alignTextLeft}
          imgTitle={block?.image?.title}
          alt={block?.image?.description}
          buttonChildren={
            <>
              {cta && <LinkHandlerButton cta={cta} ctaType={ctaType} />}
              {optionalCta && <LinkHandlerButton cta={optionalCta} ctaType={optionalCtaType} />}
            </>
          }
        />
      )}
      {componentType === 'Variant_Video' && (
        <>
          {optionalCtalLink?.includes('vimeo') && (
            <ModalVideo
              key={getVimeoId(optionalCtalLink)}
              channel="vimeo"
              autoplay
              autopause
              isOpen={isModalOpen}
              videoId={getVimeoId(optionalCtalLink)}
              onClose={() => {
                setIsModalOpen(false)
              }}
            />
          )}
          <HeroBanner
            id={block?.anchorId}
            title={documentToHtmlString(block.title?.json)}
            subTitle={documentToHtmlString(block.subTitle?.json)}
            body={content}
            titleColor={block?.titleColor}
            textColor={block?.textColor}
            videoSrc={block?.video?.url}
            imgSrc={imageContentfulTransformUrl(block?.image?.url)}
            isRight={block.alignTextLeft}
            imgTitle={block?.image?.title}
            alt={block?.image?.description}
            buttonChildren={
              <>
                {cta && <LinkHandlerButton cta={cta} ctaType={ctaType} />}
                {optionalCtalLink?.includes('vimeo') ? (
                  <Button
                    type={optionalCtaType}
                    onClick={() => {
                      setIsModalOpen(true)
                    }}
                  >
                    {optionalCtaTitle}
                  </Button>
                ) : (
                  <LinkHandlerButton cta={optionalCta} ctaType={optionalCtaType} />
                )}
              </>
            }
          />
        </>
      )}
      {componentType === 'Variant_Awards' && (
        <>
          <HeroBanner
            id={block?.anchorId}
            title={documentToHtmlString(block.title?.json)}
            subTitle={documentToHtmlString(block.subTitle?.json)}
            body={content}
            logoChildren={<>{listItems}</>}
            backgroundColor={block?.backgroundColor}
            textColor={block?.textColor}
            imgSrc={imageContentfulTransformUrl(block?.image?.url)}
            isRight={block?.alignTextLeft}
            imgTitle={block?.image?.title}
            alt={block?.image?.description}
            buttonChildren={
              <>
                {cta && <LinkHandlerButton cta={cta} ctaType={ctaType} />}
                {optionalCta && <LinkHandlerButton cta={optionalCta} ctaType={optionalCtaType} />}
              </>
            }
          />
        </>
      )}
    </>
  )
}
