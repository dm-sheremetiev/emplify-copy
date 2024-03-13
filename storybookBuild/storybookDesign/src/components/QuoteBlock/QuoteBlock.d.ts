import React, { ReactNode } from 'react';
import './QuoteBlock.scss';
export type QuoteBlockProps = React.HTMLAttributes<HTMLDivElement> & {
    id?: string;
    by?: string;
    headline?: string;
    quote?: string;
    quoteColor?: string;
    imgSrc?: string;
    imgMobileSrc?: string;
    imgAlt?: string;
    imgTitle?: string;
    className?: string;
    companyName?: string;
    imagesChildren?: ReactNode;
    buttonChildren?: ReactNode;
    role?: string;
    companyNameColor?: string;
    quoteByColor?: string;
    headlineColor?: string;
    roleColor?: string;
    type?: 'poster' | 'solid';
    backgroundColor?: string;
    backgroundPosition?: string;
    backgroundSize?: 'cover' | 'contain' | 'fill' | 'none';
    orientation?: 'left' | 'center' | 'right';
};
export type QuoteBlockImageProps = React.HTMLAttributes<HTMLImageElement> & {
    id?: string;
    imgSrc?: string;
    imgAlt?: string;
    imgTitle?: string;
    className?: string;
};
declare const QuoteBlock: {
    (props: QuoteBlockProps): JSX.Element;
    defaultProps: {
        imgSrc: string;
        imgAlt: string;
        imgTitle: string;
        quote: string;
        companyName: string;
        by: string;
    };
};
declare const QuoteBlockImage: {
    (props: QuoteBlockImageProps): JSX.Element;
    defaultProps: {
        imgSrc: string;
        imgAlt: string;
        imgTitle: string;
    };
};
export { QuoteBlock, QuoteBlockImage };
export default QuoteBlock;
