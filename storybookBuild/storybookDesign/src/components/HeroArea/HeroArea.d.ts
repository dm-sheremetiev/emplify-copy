import { ReactNode } from 'react';
import './HeroArea.scss';
export type HeroAreaProps = {
    id?: string;
    type?: 'default' | 'default-alt' | 'campaign';
    imgSrc?: string;
    imgAlt?: string;
    imgTitle?: string;
    desktopImgSrc?: string;
    title?: string;
    body?: string;
    position: 'left' | 'right';
    buttonChildren?: ReactNode;
};
declare const HeroArea: {
    (props: HeroAreaProps): JSX.Element;
    defaultProps: {
        type: string;
        imgSrc: string;
        imgAlt: string;
        imgTitle: string;
        desktopImgSrc: string;
        title: string;
        body: string;
        position: string;
    };
};
declare const HeroAreaImage: (props: HeroAreaProps) => JSX.Element;
declare const HeroAreaInfo: (props: HeroAreaProps) => JSX.Element;
export { HeroArea, HeroAreaInfo, HeroAreaImage };
export default HeroArea;
