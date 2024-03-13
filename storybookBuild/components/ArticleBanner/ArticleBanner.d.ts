import { FC, ReactNode } from 'react';
import './ArticleBanner.scss';
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
declare const ArticleBanner: FC<ArticleBannerProps>;
declare const ArticleBannerSocialIcon: FC<ArticleBannerIconProps>;
export { ArticleBanner, ArticleBannerSocialIcon };
export default ArticleBanner;
