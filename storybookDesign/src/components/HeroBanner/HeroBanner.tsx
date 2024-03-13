import React, { FC, ReactNode } from 'react'
import './HeroBanner.scss'
import { imageContentfulTransformUrl } from '../../utils/contenful-helper-functions'

export type HeroBannerProps = React.HTMLAttributes<HTMLDivElement> & {
  id?: string
  title?: string
  subTitle?: string
  body?: string
  videoSrc?: string
  imgSrc?: string
  imgTitle?: string
  alt?: string
  isRight?: boolean
  className?: string
  buttonChildren?: ReactNode
  logoChildren?: ReactNode
  backgroundColor?: string
  titleColor?: string
  textColor?: string
  paddingTop?: number
  paddingLeft?: number
  paddingRight?: number
  paddingBottom?: number
}

const HeroBanner: FC<HeroBannerProps> = (props: HeroBannerProps) => {
  const {
    title,
    subTitle,
    body,
    buttonChildren,
    logoChildren,
    imgSrc,
    videoSrc,
    isRight,
    alt,
    imgTitle,
    titleColor,
    textColor,
    backgroundColor,
    paddingTop,
    paddingLeft,
    paddingRight,
    paddingBottom
  } = props
  const bannerBackgroundColor = backgroundColor || '#fff'
  const HTMLProps = { ...props } as any
  delete HTMLProps.id
  delete HTMLProps.title
  delete HTMLProps.titleColor
  delete HTMLProps.subTitle
  delete HTMLProps.body
  delete HTMLProps.imgSrc
  delete HTMLProps.videoSrc
  delete HTMLProps.alt
  delete HTMLProps.imgTitle
  delete HTMLProps.isRight
  delete HTMLProps.buttonChildren
  delete HTMLProps.logoChildren
  delete HTMLProps.backgroundColor
  delete HTMLProps.textColor
  delete HTMLProps.paddingTop
  delete HTMLProps.paddingLeft
  delete HTMLProps.paddingRight
  delete HTMLProps.paddingBottom

  return (
    <div
      {...HTMLProps}
      id={props.id}
      className={['emplifi-hero-banner', props?.className].join(' ')}
      style={{
        paddingTop: paddingTop,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        paddingBottom: paddingBottom
      }}
    >
      <div className="emplifi-hero-banner__container">
        <div
          className={`emplifi-hero-banner-content${isRight ? '--right' : '--left'} ${logoChildren ? 'container-rounded' : ''}`}
          style={{backgroundColor: bannerBackgroundColor}}
        >
          <div className={`emplifi-hero-banner-content__text-area`}>
            {title && <div className="emplifi-hero-banner-content__title" dangerouslySetInnerHTML={{ __html: title || '' }} style={{color: titleColor || '#1A4073'}} />}
            {subTitle && <div className="emplifi-hero-banner-content__sub-title" dangerouslySetInnerHTML={{ __html: subTitle || '' }} style={{color: textColor || '#1A4073'}} />}
            {body && <div className="emplifi-hero-banner-content__body" dangerouslySetInnerHTML={{ __html: body || '' }} style={{color: textColor || '#1A4073'}} />}
            {buttonChildren && <div className="emplifi-hero-banner-content__action-group">{buttonChildren}</div>}
          </div>
          <div className={`emplifi-hero-banner-content__image-area`}>
            {imgSrc && !videoSrc && <img src={imageContentfulTransformUrl(imgSrc)} alt={alt || imgTitle} title={imgTitle} width="610px" height="570px"  loading="lazy"/>}
            {videoSrc && (
              <video width="100%" height="auto" loop autoPlay preload="auto" playsInline muted poster={imgSrc}>
                <source src={videoSrc} type="video/mp4" />
              </video>
            )}
            {logoChildren && <div className="emplifi-hero-banner-content__logos-group">{logoChildren}</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
