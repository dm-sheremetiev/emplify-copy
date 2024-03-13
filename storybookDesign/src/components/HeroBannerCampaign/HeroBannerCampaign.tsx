import React, { FC } from 'react';
import './HeroBannerCampaign.scss';
import { imageContentfulTransformUrl } from '../../utils/contenful-helper-functions';

export type HeroBannerCampaignProps = React.HTMLAttributes<HTMLDivElement> & {
  id?: string;
  headlineTop?: string;
  title?: string;
  subTitle?: string;
  perex?: string;
  imageSrc?: string;
  imageDesktopSrc?: string;
  imageAlt?: string;
  backgroundColor?: string;
  titleColor?: string;
  subtitleColor?: string;
  perexColor?: string;
};

const HeroBannerCampaign: FC<HeroBannerCampaignProps> = (props: HeroBannerCampaignProps) => {
  const { headlineTop, title, subTitle, perex, imageSrc, imageDesktopSrc, imageAlt } = props;
  const HTMLProps = { ...props } as any;
  delete HTMLProps.id;
  delete HTMLProps.title;
  delete HTMLProps.subTitle;
  delete HTMLProps.perex;
  delete HTMLProps.headlineTop;
  delete HTMLProps.imageSrc;
  delete HTMLProps.imageDesktopSrc;
  delete HTMLProps.imageAlt;
  delete HTMLProps.backgroundColor;
  delete HTMLProps.titleColor;
  delete HTMLProps.subtitleColor;
  delete HTMLProps.perexColor;

  return (
    <div {...HTMLProps} id={props.id}>
      <div className="emplifi-campaign-banner">
        <div className="emplifi-campaign-banner__headline">
          {headlineTop && <span className="emplifi-campaign-banner__headline-top" dangerouslySetInnerHTML={{ __html: headlineTop || '' }} />}
        </div>

        {imageSrc && (
          <picture>
            <source srcSet={imageContentfulTransformUrl(imageDesktopSrc)} media="(min-width:768px)" />
            <img className="emplifi-campaign-banner__image" src={imageContentfulTransformUrl(imageSrc)} role="presentation" alt={imageAlt} width="135px" height="28px" loading="lazy" />
          </picture>
        )}
      </div>
      {(title || subTitle) && (
        <div className={`emplifi-campaign-banner__content`} style={{ backgroundColor: props.backgroundColor }}>
          <div className="emplifi-campaign-banner__inner">
            {title && (
              <div className="emplifi-campaign-banner__title" dangerouslySetInnerHTML={{ __html: title || '' }} style={{ color: props.titleColor }} />
            )}
            {subTitle && (
              <div
                className="emplifi-campaign-banner__sub-title"
                dangerouslySetInnerHTML={{ __html: subTitle || '' }}
                style={{ color: props.subtitleColor }}
              />
            )}
            {perex && (
              <div className="emplifi-campaign-banner__perex" dangerouslySetInnerHTML={{ __html: perex || '' }} style={{ color: props.perexColor }} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroBannerCampaign;
