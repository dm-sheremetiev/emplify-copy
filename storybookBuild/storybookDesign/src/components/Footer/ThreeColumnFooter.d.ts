import "./Footer.scss";
import { ReactNode, FC } from "react";
export type ThreeColumnFooterProps = {
    id?: string;
    className?: string;
    children?: ReactNode;
    img?: ReactNode[] | any[];
    imgSrc?: string;
    imgAlt?: string;
    imgTitle?: string;
    copyright?: ReactNode | string;
    logoChildren?: ReactNode | string;
    socialCollection?: ReactNode;
    linksChildren?: ReactNode | string;
};
declare const ThreeColumnFooter: FC<ThreeColumnFooterProps>;
export default ThreeColumnFooter;
