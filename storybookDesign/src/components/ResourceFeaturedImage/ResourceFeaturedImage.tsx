import React from 'react';
import Typography from '../../components/Typography/Typography';
import './ResourceFeaturedImage.scss';
import { imageContentfulTransformUrl } from '../../utils/contenful-helper-functions';

export type ResourceFeaturedImageProps = {
  id?: string;
  imgSrc?: string;
  imgSrcDesktop?: string;
  imgAlt?: string;
  imgTitle?: string;
  label?: string;
};

const ResourceFeaturedImage = (props: ResourceFeaturedImageProps) => {
  return (
    <div id={props.id} className="emplifi-resource-featured-image">
      {props.label && (
        <div className="emplifi-resource-featured-image__featured">
          <Typography type="ResourceParagraph">{props.label}</Typography>
        </div>
      )}
      <div className="emplifi-resource-featured-image__image-container">
        {props?.imgSrc && (
          <img
          className="emplifi-resource-featured-image__image emplifi-resource-featured-image__image--mobile"
          src={imageContentfulTransformUrl(props?.imgSrc)}
          alt={props.imgAlt || props.imgTitle}
          title={props.imgTitle}
          loading="lazy"
          width="135px"
          height="28px"
          />
        )}
        {props?.imgSrcDesktop && (
          <img
            className="emplifi-resource-featured-image__image emplifi-resource-featured-image__image--desktop"
            src={imageContentfulTransformUrl(props.imgSrcDesktop)}
            alt={props.imgAlt || props.imgTitle}
            title={props.imgTitle}
            loading="lazy"
            width="543px"
            height="362px"
          />
        )}
      </div>
    </div>
  );
};

ResourceFeaturedImage.defaultProps = {
  imgSrc: 'https://via.placeholder.com/303x320',
  imgSrcDesktop: 'https://via.placeholder.com/625x417',
  imgAlt: 'Placeholder Alt',
  imgTitle: 'Placeholder Title'
};

export { ResourceFeaturedImage };
export default ResourceFeaturedImage;
