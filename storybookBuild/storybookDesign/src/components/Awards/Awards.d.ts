import { ReactNode } from 'react';
import './Awards.scss';
export type AwardsProps = {
    id?: string;
    title: string;
    images: AwardsImageProps[];
};
export type AwardsGroupProps = {
    id?: string;
    title: string;
    awardsChildren: ReactNode;
};
export type AwardsImageProps = {
    imageSrc?: string;
    imageAlt?: string;
    imageTitle?: string;
};
declare const Awards: (props: AwardsProps) => JSX.Element;
declare const AwardsImage: (props: AwardsImageProps) => JSX.Element;
declare const AwardsGroup: (props: AwardsGroupProps) => JSX.Element;
export { Awards, AwardsGroup, AwardsImage };
export default Awards;
