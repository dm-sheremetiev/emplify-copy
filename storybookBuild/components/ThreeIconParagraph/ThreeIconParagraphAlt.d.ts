import React, { FC, ReactNode } from 'react';
import './ThreeIconParagraph.scss';
export type ThreeIconParagraphAltProps = React.HTMLAttributes<HTMLDivElement> & {
    id?: string;
    title: string;
    dense?: boolean;
    expandContainer?: boolean;
    children: ReactNode;
    titleColor?: string;
    backgroundSize?: string;
    backgroundColor?: string;
    backgroundPosition?: string;
    image?: string;
    mobileImage?: string;
};
declare const ThreeIconParagraphAlt: FC<ThreeIconParagraphAltProps>;
export default ThreeIconParagraphAlt;
