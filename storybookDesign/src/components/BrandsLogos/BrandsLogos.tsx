import React, { ReactNode } from 'react';
import Typography from '../Typography/Typography';
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

const BrandsLogos = (props: BrandsLogosProps) => {
  const renderLogos = () => {
    if (props.logos && props.logos.length > 12) {
      return <div className="emplifi-brands-logos__logos"></div>;
    }

    if (props.logos) {
      return (
        <div className="emplifi-brands-logos__logos">
          {props.logos.map((logo, index) => (
            <BrandLogo key={index} imageSrc={logo.imageSrc} imageAlt={logo.imageAlt || logo.imageTitle || 'Emplifi Brands'} />
          ))}
        </div>
      );
    }
  };

  return (
    <div className="emplifi-brands-logos">
      <div className="emplifi-brands-logos__container">
        {props.title && (
          <div className="emplifi-brands-logos__title">
            <Typography as="h2" type="Headline2">
              {props.title}
            </Typography>
          </div>
        )}
        {renderLogos()}
        {props.cardsChildren && <div className="emplifi-brands-logos__cards">{props.cardsChildren}</div>}
      </div>
    </div>
  );
};

const BrandLogo = (props: BrandLogoProps) => {
  return (
    <div className="emplifi-brand-logo">
      <img width="135px" height="28px" className="emplifi-brand-logo__image" src={props.imageSrc} alt={props.imageAlt} loading="lazy" />
    </div>
  );
};

export { BrandsLogos, BrandLogo };
export default BrandsLogos;
