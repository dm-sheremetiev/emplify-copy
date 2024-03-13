import { ReactNode } from 'react';
import './Resources.scss';
export type ResourcesProps = {
    id?: string;
    title?: string;
    titleColor?: string;
    cardsChildren?: ReactNode;
    backgroundColor?: string;
    layout?: 'left' | 'center';
    type?: string;
};
declare const Resources: ({ id, title, titleColor, cardsChildren, backgroundColor, type, layout }: ResourcesProps) => JSX.Element;
export default Resources;
