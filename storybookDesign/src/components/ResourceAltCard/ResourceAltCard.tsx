import React, { ReactNode } from 'react';
import './ResourceAltCard.scss';
import colours from '../../assets/colours';
import { imageContentfulTransformUrl } from '../../utils/contenful-helper-functions';

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

const ResourceAltCard = (props: ResourceAltCardProps) => {
  const classes = ['emplifi-resource-alt-card', props.contentAlign ? `emplifi-resource-alt-card--content-${props.contentAlign}` : ''].join(' ');
  return (
    <div className={classes} style={{ backgroundColor: props.backgroundColor || colours.white }}>
      <div className="emplifi-resource-alt-card__inner">
        {props?.imageSrc && (
          <div className="emplifi-resource-alt-card__image-container">
            <img width="360px" height="240px" className="emplifi-resource-alt-card__image" src={imageContentfulTransformUrl(props?.imageSrc)} alt={props.imageAlt} loading="lazy" />
          </div>
        )}
        <div className="emplifi-resource-alt-card__content">
          <div className="emplifi-resource-alt-card__title-paragraph">
            {props.title && <div className="typography typography--MenuSubMenuBody" dangerouslySetInnerHTML={{ __html: props.title || '' }}></div>}
            {props.body && <div className="typography typography--Body3" dangerouslySetInnerHTML={{ __html: props.body || '' }}></div>}
          </div>
          {props.buttonChildren && <>{props.buttonChildren}</>}
        </div>
      </div>
    </div>
  );
};

export { ResourceAltCard };
export default ResourceAltCard;
