import { ReactNode } from 'react';
import './ResourceFeatureCard.scss';
export type ResourceFeatureCardProps = {
    id?: string;
    label?: string;
    imgSrc?: string;
    imgSrcDesktop?: string;
    imgAlt?: string;
    imgTitle?: string;
    meta?: string;
    title?: string;
    paragraph?: string;
    buttonChildren?: ReactNode;
    variations: '1' | '2' | '3';
    position: 'top' | 'left' | 'right';
    regular?: boolean;
};
export type ResourceInfoProps = {
    id?: string;
    meta?: string;
    title?: string;
    paragraph?: string;
    buttonChildren?: ReactNode;
};
declare const ResourceFeatureCard: {
    (props: ResourceFeatureCardProps): JSX.Element;
    defaultProps: {
        imgSrc: string;
        imgSrcDesktop: string;
        imgAlt: string;
        imgTitle: string;
        label: string;
        title: string;
        paragraph: string;
        variations: string;
        position: string;
    };
};
declare const ResourceInfo: {
    (props: ResourceInfoProps): JSX.Element;
    defaultProps: {
        title: string;
        paragraph: string;
    };
};
export { ResourceFeatureCard, ResourceInfo };
export default ResourceFeatureCard;
