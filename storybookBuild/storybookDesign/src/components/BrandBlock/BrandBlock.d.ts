import React, { FC } from 'react';
import './BrandBlock.scss';
export type BrandBlockProps = React.HTMLAttributes<HTMLDivElement> & {
    id?: string;
    imgSrc?: string;
    imgSubSrc?: string;
    imgSubAlt?: string;
    imgAlt?: string;
    imgTitle?: string;
    title?: string;
    body?: string;
    className?: string;
};
declare const BrandBlock: FC<BrandBlockProps>;
export default BrandBlock;
