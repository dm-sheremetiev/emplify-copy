import './HeroBannerAlt.scss';
import React, { ReactNode } from 'react';
import { imagesI } from '../../../../interfaces';
import { imageContentfulTransformUrl } from '../../utils/contenful-helper-functions';

export type HeroBannerAltProps = {
  title?: string;
  subTitle?: string;
  buttonsChildren?: ReactNode;
  eyebrowHeadline?: string;
  className?: string;
  titleColor: string;
  orientation: string;
  subTitleColor: string;
  backgroundColor: string;
  boxBackgroundColor: string;
  eyebrowHeadlineColor: string;
  theme: 'dark' | 'light' | 'medium';
  boxBackgroundType: 'solid' | 'extended';
  bannerType: 'solid' | 'poster' | 'box_view';
  bannerHeight: 'full' | 'tall' | 'half' | 'short';
  backgroundSize: 'cover' | 'contain' | 'fill' | 'none';
  image: imagesI;
  mobileImage: imagesI;
};

const HeroBannerAlt = (props: HeroBannerAltProps) => {
  const bannerTheme = props.theme?.toLowerCase() || 'light';
  const bannerThemeClass = 'hero-banner-alt--theme-' + bannerTheme;
  const bannerHeight = props.bannerHeight ? props.bannerHeight.split(' ').shift()?.toLowerCase() : 'half';

  let originalHeight = '100%';
  switch (bannerHeight) {
    case 'full':
      originalHeight = 'calc(100vh - 145px)';
      break;
    case 'tall':
      originalHeight = 'calc(75vh - 80px)';
      break;
    case 'half':
      originalHeight = 'calc(50vh - 80px)';
      break;
    case 'short':
      originalHeight = 'calc(34vh - 80px)';
      break;
  }

  const bannerObjectFit = props.backgroundSize || 'cover';
  const bannerBackgroundColor = props.backgroundColor || '#fff';

  // Poster View
  const isPosterView = props.bannerType === 'poster';
  if (isPosterView) originalHeight = 'calc(100vh - 145px)';

  // Box View
  const minHeight = 500;
  const isBoxView = props.bannerType === 'box_view';
  const boxOrientation = props.orientation?.toLowerCase() || 'left';
  const boxBackgroundColor = props.boxBackgroundColor || 'rgba(255,255,255,0.5)';
  const boxBackgroundType = props.boxBackgroundType?.toLowerCase() || 'solid';

  const imageSrc = props.image?.url;
  const imageMobileSrc = props.mobileImage?.url;
  const imageAlt = props.image?.title || props.image?.description;

  return (
    <div
      className={['hero-banner-alt', props?.className, bannerThemeClass].join(' ')}
      style={{ backgroundColor: bannerBackgroundColor, height: originalHeight }}
    >
      <div className="hero-banner-alt__canvas" style={{ height: originalHeight, minHeight, width: '100vw' }}>
        {imageSrc && (
          <picture>
            <source srcSet={imageContentfulTransformUrl(imageSrc)} media="(min-width:768px)" />
            <img style={{ objectFit: bannerObjectFit }} className="hero-banner-alt__image" src={imageContentfulTransformUrl(imageMobileSrc)} alt={imageAlt} role="presentation" />
          </picture>
        )}
      </div>
      <div className="hero-banner-alt__content-container">
        <div className="hero-banner-alt__content-wrapper" style={{ justifyContent: boxOrientation }}>
          <div className="hero-banner-alt__content" style={isBoxView && boxBackgroundType === 'solid' ? { backgroundColor: boxBackgroundColor } : {}}>
            {boxBackgroundType === 'extended' && isBoxView && (
              <div className="hero-banner-alt__content-bg" style={{ backgroundColor: boxBackgroundColor }} />
            )}
            <div className="hero-banner-alt__content-text">
              {props.eyebrowHeadline && (
                <div
                  className="hero-banner-alt__eyebrow"
                  style={{ color: props.eyebrowHeadlineColor || '#fff' }}
                  dangerouslySetInnerHTML={{ __html: props.eyebrowHeadline }}
                />
              )}
              {props.title && (
                <div
                  className="hero-banner-alt__title"
                  style={{ color: props.titleColor || '#fff' }}
                  dangerouslySetInnerHTML={{ __html: props.title }}
                />
              )}
              {props.subTitle && (
                <div
                  className="hero-banner-alt__text"
                  style={{ color: props.subTitleColor || '#fff' }}
                  dangerouslySetInnerHTML={{ __html: props.subTitle }}
                />
              )}
              {props.buttonsChildren && <div className="hero-banner-alt__action-group">{props.buttonsChildren}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerAlt;
