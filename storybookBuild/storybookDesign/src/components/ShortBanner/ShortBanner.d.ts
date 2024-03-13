import { ReactNode } from 'react';
import './ShortBanner.scss';
export type ShortBannerProps = {
    id?: string;
    type: string;
    title?: string;
    paragraph?: string;
    buttonChildren?: ReactNode | string;
    className?: string;
    imgSrc?: string;
    imgAlt?: string;
    imgTitle?: string;
};
declare const ShortBanner: {
    (props: ShortBannerProps): JSX.Element;
    defaultProps: {
        type: string;
    };
};
export { ShortBanner };
export default ShortBanner;
