import React, { ReactNode } from 'react'
import './MarketFormAlt.scss'
import { imageContentfulTransformUrl } from '../../utils/contenful-helper-functions'

export type MarketFormAltProps = {
  id?: string
  title?: string
  subTitle?: string
  textColorTitle?: string
  textColorSubTitle?: string
  formChildren?: ReactNode | string
  formStyle?: string
  backgroundColor?: string
  backgroundSize?: string
  backgroundPosition?: string
  backgroundType?: 'poster' | 'solid'
  imgSrc?: string
  imgSrcMobile?: string
  imgAlt?: string
  imgTitle?: string
  twoColumns?: boolean
  eyebrow?: string
}

const MarketFormAlt = (props: MarketFormAltProps) => {
  const twoColumns = props.twoColumns || false
  const backgroundSize = props.backgroundSize?.toLowerCase() || 'cover'
  const backgroundImage = props.imgSrc ? `url(${props.imgSrc})` : ''
  const backgroundType = props.backgroundType?.toLowerCase() || 'solid'
  const backgroundColor = props.backgroundColor?.toLowerCase() || 'white'
  const backgroundPosition = props.backgroundPosition?.toLowerCase() || 'bottom left'
  const backgroundMobileImage = props.imgSrcMobile ? `url(${props.imgSrcMobile})` : ''

  const formStyle = props.formStyle?.toLowerCase() || 'light'

  return (
    <div
      id={props.id}
      style={
        backgroundType === 'poster'
          ? { backgroundColor, backgroundPosition, backgroundSize, backgroundImage, backgroundRepeat: 'no-repeat' }
          : { backgroundColor }
      }
      className="emplifi-market-alt-form"
    >
      <div
        className="emplifi-market-alt-form__container"
        style={
          backgroundType === 'poster'
            ? {
                backgroundSize: 'cover',
                backgroundPosition: 'bottom left',
                backgroundImage: backgroundMobileImage,
                backgroundRepeat: 'no-repeat'
              }
            : {}
        }
      >
        {backgroundType === 'solid' && (props.title || props.subTitle) && (
          <div className="emplifi-market-alt-form__header">
            <div className="emplifi-market-alt-form__text-container">
              {props.eyebrow && (
                <div className="emplifi-market-alt-form__wrapper">
                  <span className="emplifi-market-alt-form__eyebrow">{props.eyebrow}</span>
                  <h2
                    style={{ color: props.textColorTitle || '' }}
                    className="typography typography--Headline1"
                    dangerouslySetInnerHTML={{ __html: props.title || '' }}
                  />
                </div>
              )}
              {props.title && !props.eyebrow && (
                <h2
                  style={{ color: props.textColorTitle || '' }}
                  className="typography typography--Headline1"
                  dangerouslySetInnerHTML={{ __html: props.title || '' }}
                />
              )}
              {props.subTitle && (
                <div
                  style={{ color: props.textColorSubTitle || '' }}
                  className="typography typography--Headline2"
                  dangerouslySetInnerHTML={{ __html: props.subTitle || '' }}
                />
              )}
            </div>
          </div>
        )}
        {props.formChildren && (
          <div className={`emplifi-market-alt-form__form-container ${twoColumns && 'two-columns email-full-with'}`}>
            <div
              className={`emplifi-market-alt-form__form ${formStyle === 'dark' ? 'emplifi-market-form__dark' : ''} ${
                backgroundType === 'poster' ? `${formStyle === 'dark' ? 'emplifi-market-alt-form__dark' : 'emplifi-market-alt-form__light'}` : ''
              }`}
            >
              {backgroundType === 'poster' && (
                <>
                  {props.title && (
                    <>
                      <h2
                        style={{ color: props.textColorTitle || '' }}
                        className="emplifi-market-alt-form__form-header"
                        dangerouslySetInnerHTML={{ __html: props.title || '' }}
                      />
                      <hr />
                    </>
                  )}
                  {props.subTitle && (
                    <div
                      style={{ color: props.textColorSubTitle || '' }}
                      className="emplifi-market-alt-form__form-subtitle"
                      dangerouslySetInnerHTML={{ __html: props.subTitle || '' }}
                    />
                  )}
                </>
              )}
              {props.formChildren}
            </div>
          </div>
        )}
      </div>

      {backgroundType === 'solid' && props.imgSrc && (
        <>
          <div className="emplifi-market-alt-form__image-container--desktop" style={{ backgroundImage: `url(${props.imgSrc})` }}></div>
          <div className="emplifi-market-alt-form__image-container--mobile">
            <img src={imageContentfulTransformUrl(props.imgSrcMobile)} alt={props.imgAlt || props.imgTitle} loading="lazy" width="135px" height="28px" />
          </div>
        </>
      )}
    </div>
  )
}

export default MarketFormAlt
