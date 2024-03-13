import React, { FC, ReactNode } from 'react';
import './ArticleBanner.scss';
import Typography from '../Typography/Typography';
import { imageContentfulTransformUrl } from '../../utils/contenful-helper-functions';

export type ArticleBannerProps = {
  id?: string;
  className?: string;
  quoteText?: string;
  subTextMedium?: string;
  subTextRegular?: string;
  isRight?: boolean;
  imgAlt?: string;
  imgTitle?: string;
  imgSrcMobile?: string;
  imgSrcDesktop?: string;
  socialMediaChildren?: ReactNode;
};

export type ArticleBannerIconProps = {
  anchor?: boolean;
  href?: string;
  target?: string;
  iconChildren?: ReactNode | string;
};

const ArticleBanner: FC<ArticleBannerProps> = (props: ArticleBannerProps) => {
  const { isRight, imgAlt, imgTitle, quoteText, subTextMedium, subTextRegular, socialMediaChildren, imgSrcMobile, imgSrcDesktop } = props;
  const HTMLProps = { ...props } as any;
  delete HTMLProps.id;
  delete HTMLProps.isRight;
  delete HTMLProps.imgAlt;
  delete HTMLProps.imgTitle;
  delete HTMLProps.title;
  delete HTMLProps.quoteText;
  delete HTMLProps.subTextMedium;
  delete HTMLProps.subTextRegular;
  delete HTMLProps.socialMediaChildren;
  delete HTMLProps.imgSrcMobile;
  delete HTMLProps.imgSrcDesktop;
  return (
    <div {...HTMLProps} id={props.id} className={['emplifi-article-banner', props?.className].join(' ')}>
      <div className={`emplifi-article-banner__container ${isRight ? 'right' : 'left'}`}>
        <div className="emplifi-article-banner__image-area">
          {imgSrcDesktop && (
            <div className="emplifi-article-banner__image-area--desktop">
              <img src={imageContentfulTransformUrl(imgSrcDesktop)} alt={imgAlt || imgTitle} width="135px" height="28px" loading="lazy" />
            </div>
          )}
          {imgSrcMobile && (
            <div className="emplifi-article-banner__image-area--mobile">
              <img src={imageContentfulTransformUrl(imgSrcMobile)} alt={imgAlt || imgTitle} width="135px" height="28px" loading="lazy" />
            </div>
          )}
        </div>
        <div className="emplifi-article-banner__text-area">
          {quoteText && <div className="typography typography--Headline5" dangerouslySetInnerHTML={{ __html: quoteText || '' }}></div>}
          {subTextMedium && (
            <Typography className="emplifi-article-banner__text-area-name" type="Caption1">
              {subTextMedium}
            </Typography>
          )}
          {subTextRegular && (
            <Typography className="emplifi-article-banner__text-area-role" type="Caption1">
              {subTextRegular}
            </Typography>
          )}
          {socialMediaChildren && <div className="emplifi-article-banner__socials">{socialMediaChildren}</div>}
        </div>
      </div>
    </div>
  );
};

const ArticleBannerSocialIcon: FC<ArticleBannerIconProps> = (props: ArticleBannerIconProps) => {
  if (props.anchor) {
    return (
      <a href={props.href} target={props.target ? props.target : undefined} rel={props.target === '_blank' ? 'noopener noreferrer' : undefined}>
        <div className="emplifi-article-banner-social-icon emplifi-article-banner-social-icon--anchor">{props.iconChildren}</div>
      </a>
    );
  }

  return <div className="emplifi-article-banner-social-icon">{props.iconChildren}</div>;
};

export { ArticleBanner, ArticleBannerSocialIcon };
export default ArticleBanner;
