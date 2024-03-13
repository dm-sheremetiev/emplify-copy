import React from 'react';
import { IconProps } from '../Icon/Icon';
import './Card.scss';
export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
    id?: string;
    className?: string;
    header?: string | Element | any;
    paragraph?: string | Element | any;
    image?: string;
    imageProps?: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
    blue?: boolean;
};
declare const Card: (props: CardProps) => JSX.Element;
export type ThreeCardGroupProps = {};
declare const ThreeCardGroup: (props: React.PropsWithChildren<ThreeCardGroupProps>) => JSX.Element;
declare const TheeCardGroupIcon: (props: IconProps) => JSX.Element;
export { ThreeCardGroup, TheeCardGroupIcon, Card };
export default Card;
