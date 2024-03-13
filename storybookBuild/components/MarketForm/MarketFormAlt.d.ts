import { ReactNode } from 'react';
import './MarketFormAlt.scss';
export type MarketFormAltProps = {
    id?: string;
    title?: string;
    subTitle?: string;
    textColorTitle?: string;
    textColorSubTitle?: string;
    formChildren?: ReactNode | string;
    formStyle?: string;
    backgroundType?: 'poster' | 'solid';
    backgroundColor?: string;
    backgroundSize?: string;
    backgroundPosition?: string;
    imgSrc?: string;
    imgSrcMobile?: string;
    imgAlt?: string;
    imgTitle?: string;
    twoColumns?: boolean
    eyebrow?: string;
};
declare const MarketFormAlt: (props: MarketFormAltProps) => JSX.Element;
export default MarketFormAlt;
