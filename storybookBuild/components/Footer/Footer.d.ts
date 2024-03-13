import './Footer.scss';
import { ReactNode, FC } from "react";
export type FooterProps = {
    id?: string;
    className?: string;
    children?: ReactNode;
    img?: ReactNode[] | any[];
    imgSrc?: string;
    imgAlt?: string;
    imgTitle?: string;
    type?: 'default' | 'alt' | 'article';
    title?: string;
    subTitle?: string;
    formChildren?: ReactNode | string;
    backgroundFormColor?: string;
};
declare const Footer: FC<FooterProps>;
export { Footer };
export default Footer;
