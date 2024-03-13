import React, { ReactNode } from 'react';
import './Card.scss';
import { IconsType } from '../../assets/icons';
export type CardAltProps = React.HTMLAttributes<HTMLDivElement> & {
    id?: string;
    className?: string;
    header?: string | Element | any;
    paragraph?: string | Element | any;
    icon: IconsType;
    backgroundColor?: string;
    buttonChildren?: ReactNode;
    image?: string;
    imageProps?: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
};
declare const CardAlt: (props: CardAltProps) => JSX.Element;
export type ThreeCardAltGroupProps = {};
declare const ThreeCardAltGroup: (props: React.PropsWithChildren<ThreeCardAltGroupProps>) => JSX.Element;
export { ThreeCardAltGroup, CardAlt };
export default CardAlt;
