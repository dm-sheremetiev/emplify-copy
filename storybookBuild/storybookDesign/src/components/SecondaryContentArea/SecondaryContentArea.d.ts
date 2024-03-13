import { ReactNode } from 'react';
import './SecondaryContentArea.scss';
export type SecondaryContentAreaProps = {
    id?: string;
    imgSrc?: string;
    imgSrcDesktop?: string;
    imgAlt?: string;
    imgTitle?: string;
    title?: string;
    paragraph?: string;
    buttonChildren?: ReactNode | string;
};
declare const SecondaryContentArea: {
    (props: SecondaryContentAreaProps): JSX.Element;
    defaultProps: {
        imgSrc: string;
        imgSrcDesktop: string;
        imgAlt: string;
        imgTitle: string;
    };
};
export { SecondaryContentArea };
export default SecondaryContentArea;
