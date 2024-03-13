import React, { FC, ReactNode } from 'react';
import './AnimatedBanner.scss';
export type AnimatedBannerProps = React.HTMLAttributes<HTMLDivElement> & {
    id?: string;
    className?: string;
    animationType?: string;
    bannerType?: string;
    buttonType?: string;
    headlineLeft?: string;
    headlineRight?: string;
    title?: string;
    subTitle?: string;
    body?: string;
    imgSrc?: string;
    imgAlt?: string;
    imgTitle?: string;
    imgWidth?: number;
    imgHeight?: number;
    buttonArr?: {
        href: string;
        text: string;
        type: string;
        target?: string;
    }[];
    buttonChildren?: ReactNode;
};
declare const AnimatedBanner: FC<AnimatedBannerProps>;
export default AnimatedBanner;
