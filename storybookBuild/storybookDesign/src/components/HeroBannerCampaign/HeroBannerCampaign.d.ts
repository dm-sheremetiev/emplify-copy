import React, { FC } from 'react';
import './HeroBannerCampaign.scss';
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
declare const HeroBannerCampaign: FC<HeroBannerCampaignProps>;
export default HeroBannerCampaign;
