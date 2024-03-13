import React, { ReactNode } from 'react';
import CustomerStoriesCardImage from '../../assets/images/customer-stories-card.png';
import CustomerStoriesCardLogoImage from '../../assets/images/delta-alt-logo.png';
import './CustomerStoriesCard.scss';
import { imageContentfulTransformUrl } from '../../utils/contenful-helper-functions';

export type CustomerStoriesCardProps = {
  id?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageTitle?: string;
  paragraph?: string;
  linkChildren?: ReactNode;
  logoSrc?: string;
  logoAlt?: string;
  logoTitle?: string;
  type?: 'default' | 'menu';
};

const CustomerStoriesCard = (props: CustomerStoriesCardProps) => {
  return (
    <div className={`emplifi-customer-stories-card emplifi-customer-stories-card--type-${props.type}`}>
      {props.imageSrc && (
        <div className="emplifi-customer-stories-card__image-container">
          <img
            width="280px"
            height="344px"
            className="emplifi-customer-stories-card__image"
            src={imageContentfulTransformUrl(props?.imageSrc || CustomerStoriesCardImage)}
            alt={props.imageAlt || props.imageTitle}
            title={props.imageTitle}
            loading="lazy"
          />
        </div>
      )}
      <div className={`emplifi-customer-stories-card__content ${!props.imageSrc ? 'emplifi-customer-stories-card__content--no-image' : ''}`}>
        {props.logoSrc && (
          <div className="emplifi-customer-stories-card__logo-container">
            <img
              width="135px"
              height="28px"
              className="emplifi-customer-stories-card__logo"
              src={props.logoSrc || CustomerStoriesCardLogoImage}
              alt={props.logoAlt || props.logoTitle}
              title={props.logoTitle}
              loading="lazy"
            />
          </div>
        )}
        {props.paragraph && <div className="typography typography--Headline3" dangerouslySetInnerHTML={{ __html: props.paragraph || '' }}></div>}
        {props.linkChildren && <>{props.linkChildren}</>}
      </div>
    </div>
  );
};

CustomerStoriesCard.defaultProps = {
  paragraph: '$2 million+ saved in support and operations costs',
  type: 'default'
};

export { CustomerStoriesCard };
export default CustomerStoriesCard;
