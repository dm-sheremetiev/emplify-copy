import React, { ReactNode } from 'react';
import './QuoteBlock.scss';

export type QuoteBlockProps = React.HTMLAttributes<HTMLDivElement> & {
  id?: string;
  imgSrc?: string;
  imgMobileSrc?: string;
  imgAlt?: string;
  imgTitle?: string;
  headline?: string;
  quote?: string;
  quoteColor?: string;
  companyName?: string;
  companyNameColor?: string;
  quoteByColor?: string;
  headlineColor?: string;
  roleColor?: string;
  by?: string;
  imagesChildren?: ReactNode;
  className?: string;
  buttonChildren?: ReactNode;
  role: string;
  type: string;
  backgroundColor: string;
  backgroundPosition: string;
  backgroundSize: 'cover' | 'contain' | 'fill' | 'none';
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
