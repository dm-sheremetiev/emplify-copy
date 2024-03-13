import React, { FC, ReactNode } from 'react';
import './HeroProductBanner.scss';
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
declare const HeroProductBanner: FC<HeroProductBannerProps>;
export default HeroProductBanner;
