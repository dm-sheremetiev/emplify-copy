import React, { FC, ReactNode } from 'react';
import './HeroProductBanner.scss';
import { imageContentfulTransformUrl } from '../../utils/contenful-helper-functions';

export type HeroProductBannerProps = React.HTMLAttributes<HTMLDivElement> & {
  id?: string;
  title?: string;
  body?: string;
  imgSrc?: string;
  alt?: string;
  imgTitle?: string;
  isRight?: boolean;
  buttonChildren?: ReactNode;
  backgroundColor?: string;
  paddingTop?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingBottom?: number;
};

const HeroProductBanner: FC<HeroProductBannerProps> = (props: HeroProductBannerProps) => {
  const { title, body, imgSrc, isRight, alt, imgTitle, buttonChildren, backgroundColor, paddingTop, paddingLeft, paddingRight, paddingBottom } =
    props;
  const HTMLProps = { ...props } as any;
  delete HTMLProps.id;
  delete HTMLProps.title;
  delete HTMLProps.body;
  delete HTMLProps.imgSrc;
  delete HTMLProps.alt;
  delete HTMLProps.imgTitle;
  delete HTMLProps.isRight;
  delete HTMLProps.buttonChildren;
  delete HTMLProps.backgroundColor;
  delete HTMLProps.paddingTop;
  delete HTMLProps.paddingLeft;
  delete HTMLProps.paddingRight;
  delete HTMLProps.paddingBottom;

  return (
    <div
      {...HTMLProps}
      id={props.id}
      className={['emplifi-product-hero-banner', props?.className].join(' ')}
      style={{
        backgroundColor: backgroundColor,
        paddingTop: paddingTop,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        paddingBottom: paddingBottom
      }}
    >
      <div className="emplifi-product-hero-banner__container">
        <div className={`emplifi-product-hero-banner-content${isRight ? '--right' : '--left'}`}>
          <div className={`emplifi-product-hero-banner-content__text-area`}>
            {title && <div className="emplifi-product-hero-banner-content__title" dangerouslySetInnerHTML={{ __html: title || '' }} />}
            {body && <div className="emplifi-product-hero-banner-content__body" dangerouslySetInnerHTML={{ __html: body || '' }} />}
            {buttonChildren}
          </div>
          <div className={`emplifi-product-hero-banner-content__image-area`}>
            {imgSrc && (
              <img src={imageContentfulTransformUrl(imgSrc)} alt={alt || imgTitle} width="583px" height="540px" loading="lazy" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroProductBanner;
