import React, { ReactNode } from 'react';
import QuoteBlockImg from '../../assets/images/quote-block-image.png';
import ExampleLogo from '../../assets/images/samsung-logo.png';
import Typography from '../Typography/Typography';
import './QuoteBlock.scss';
import { imageContentfulTransformUrl } from '../../utils/contenful-helper-functions';

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

const QuoteBlock = (props: QuoteBlockProps) => {
  const isPoster = props.type?.toLowerCase() === 'poster';
  const backgroundColor = props.backgroundColor;
  const backgroundSize = props.backgroundSize || 'cover';
  const backgroundImage = props.imgSrc ? `url(${props.imgSrc})` : '';
  const backgroundMobileImage = props.imgMobileSrc ? `url(${props.imgMobileSrc})` : '';
  const backgroundPosition = props.backgroundPosition?.toLowerCase() || 'center center';

  const orientation = props.orientation?.toLowerCase() || 'right';
  let flexOrientation = 'center';
  switch (orientation) {
    case 'right':
      flexOrientation = 'flex-end';
      break;
    case 'left':
      flexOrientation = 'flex-start';
      break;
    default:
    case 'center':
      flexOrientation = 'center';
      break;
  }

  const quoteImage = (
    <img src={props.imgSrc} className="quote-block__image" alt={props.imgAlt || props.imgTitle} style={{ marginBottom: 20, marginTop: 20 }} />
  );

  return (
    <section
      id={props.id}
      className={['quote-block', props?.className].join(' ')}
      style={
        isPoster && backgroundImage ? { backgroundColor, backgroundSize, backgroundPosition, backgroundImage, backgroundRepeat: 'no-repeat' } : {}
      }
    >
      <div
        className="quote-block__container"
        style={
          isPoster && backgroundMobileImage
            ? {
                justifyContent: flexOrientation,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundImage: backgroundMobileImage,
                backgroundRepeat: 'no-repeat'
              }
            : { justifyContent: flexOrientation, paddingBottom: 0, paddingTop: 40 }
        }
      >
        {!isPoster && orientation === 'right' && quoteImage}
        <div className="quote-block__quote-block">
          {props.headline && (
            <>
              <div
                className="typography typography--Headline3 quote-block__headline"
                dangerouslySetInnerHTML={{ __html: props.headline || '' }}
                style={{ marginBottom: isPoster ? 40 : 20, color: props.headlineColor || '#1C4171' }}
              />
              <div className="quote-block__divider"></div>
            </>
          )}
          {!!props.imagesChildren && isPoster && (
            <div className="quote-block__images" style={{ marginBottom: 20 }}>
              {props.imagesChildren}
            </div>
          )}
          {props.quote && (
            <div
              className="typography typography--Headline3 lato"
              style={{ color: props.quoteColor || '#1C4171' }}
              dangerouslySetInnerHTML={{ __html: props.quote || '' }}
            />
          )}
          {props.companyName && (
            <div
              style={props.companyNameColor ? { color: props.companyNameColor } : {}}
              className="typography typography--Headline4 lato"
              dangerouslySetInnerHTML={{ __html: props.companyName || '' }}
            />
          )}
          {props.by && (
            <Typography style={props.quoteByColor ? { color: props.quoteByColor } : {}} type="Caption1" as="p" className="lato">
              {props.by}
            </Typography>
          )}
          {props.role && (
            <Typography style={props.roleColor ? { color: props.roleColor } : {}} type="Caption1" as="p" className="lato">
              {props.role}
            </Typography>
          )}
          {props.buttonChildren}
        </div>
        {!isPoster && orientation === 'left' && quoteImage}
      </div>

      {!!props.imagesChildren && !isPoster && (
        <div className="quote-block__images" style={{ marginBottom: 40 }}>
          {props.imagesChildren}
        </div>
      )}
    </section>
  );
};

const QuoteBlockImage = (props: QuoteBlockImageProps) => {
  const HTMLProps = { ...props } as any;
  delete HTMLProps.imgSrc;
  delete HTMLProps.imgAlt;
  delete HTMLProps.imgTitle;
  delete HTMLProps.className;

  return (
    <div className={['quote-block-image', props?.className].join(' ')}>
      {props.imgSrc && (
        <img
          {...HTMLProps}
          className="quote-block-image__image"
          src={imageContentfulTransformUrl(props?.imgSrc)}
          alt={props.imgAlt || props.imgTitle || 'Quote'}
          title={props.imgTitle}
          loading="lazy"
          width="135px"
          height="28px"
        />
      )}
    </div>
  );
};

QuoteBlock.defaultProps = {
  imgSrc: QuoteBlockImg,
  imgAlt: 'Quote Block',
  imgTitle: 'Quote Block Image',
  quote: '“Emplifi’s listening made us see our audience completely different and helped us turn those insights into hard ROI.”',
  companyName: 'McDonalods',
  by: 'Lesley Vos, Head of Insights'
};

QuoteBlockImage.defaultProps = {
  imgSrc: ExampleLogo,
  imgAlt: 'Quote Block Image',
  imgTitle: 'Quote Block Image'
};

export { QuoteBlock, QuoteBlockImage };
export default QuoteBlock;
