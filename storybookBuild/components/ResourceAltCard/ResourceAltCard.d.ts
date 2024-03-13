import { ReactNode } from 'react';
import './ResourceAltCard.scss';
export type ResourceAltCardProps = {
    imageSrc?: string;
    imageAlt?: string;
    imageTitle?: string;
    title?: string;
    body?: string;
    buttonChildren?: ReactNode;
    backgroundColor?: string;
    contentAlign?: 'left' | 'center';
};
declare const ResourceAltCard: (props: ResourceAltCardProps) => JSX.Element;
export { ResourceAltCard };
export default ResourceAltCard;
