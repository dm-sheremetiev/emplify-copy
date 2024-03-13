import { ReactNode } from 'react';
import './BrandsLogos.scss';
export type BrandsLogosProps = {
    title?: string;
    logos?: BrandLogoProps[];
    cardsChildren?: ReactNode;
};
export type BrandLogoProps = {
    imageSrc?: string;
    imageAlt?: string;
    imageTitle?: string;
};
declare const BrandsLogos: (props: BrandsLogosProps) => JSX.Element;
declare const BrandLogo: (props: BrandLogoProps) => JSX.Element;
export { BrandsLogos, BrandLogo };
export default BrandsLogos;
