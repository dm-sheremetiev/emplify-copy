import { ReactNode } from 'react';
import './HeroBannerAlt.scss';
import { imagesI } from '@/interfaces/index';
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
declare const HeroBannerAlt: (props: HeroBannerAltProps) => JSX.Element;
export default HeroBannerAlt;