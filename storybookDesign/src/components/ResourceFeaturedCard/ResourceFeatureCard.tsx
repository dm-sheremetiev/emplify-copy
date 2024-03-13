import React, { ReactNode } from 'react';
import ResourceFeaturedImage from '../ResourceFeaturedImage/ResourceFeaturedImage';
import Typography from '../Typography/Typography';
import './ResourceFeatureCard.scss';

export type ResourceFeatureCardProps = {
  id?: string;
  label?: string;
  imgSrc?: string;
  imgSrcDesktop?: string;
  imgAlt?: string;
  imgTitle?: string;
  meta?: string;
  title?: string;
  paragraph?: string;
  buttonChildren?: ReactNode;
  variations: '1' | '2' | '3';
  position: 'top' | 'left' | 'right';
  regular?: boolean;
};

export type ResourceInfoProps = {
  id?: string;
  meta?: string;
  title?: string;
  paragraph?: string;
  buttonChildren?: ReactNode;
};

const ResourceFeatureCard = (props: ResourceFeatureCardProps) => {
  const { label, imgSrc, imgSrcDesktop, imgAlt, imgTitle, variations, meta, title, paragraph, buttonChildren, position, regular } = props;

  return (
    <div
      id={props.id}
      className={`emplifi-resource-featured-card emplifi-resource-featured-card--variation-${variations} emplifi-resource-featured-card--position-${position} ${
        regular ? 'emplifi-resource-featured-card--regular' : ''
      }`}
    >
      <div className="emplifi-resource-featured-card--content-container">
        <ResourceFeaturedImage label={label} imgSrc={imgSrc} imgSrcDesktop={imgSrcDesktop} imgAlt={imgAlt || imgTitle} imgTitle={imgTitle} />
        <ResourceInfo meta={meta} title={title} paragraph={paragraph} buttonChildren={buttonChildren} />
      </div>
    </div>
  );
};

const ResourceInfo = (props: ResourceInfoProps) => {
  const { meta, title, paragraph, buttonChildren } = props;

  return (
    <div id={props.id} className="emplifi-resource-info">
      <div className="emplifi-resource-info__inner">
        {meta && <Typography type="Body1">{meta}</Typography>}
        {title && <div className="typography typography--Headline3" dangerouslySetInnerHTML={{ __html: title || '' }}></div>}
        {paragraph && (
          <Typography className="emplifi-resource-info__paragraph" type="ResourceParagraph" as="p">
            {paragraph}
          </Typography>
        )}
      </div>
      {buttonChildren && <>{buttonChildren}</>}
    </div>
  );
};

ResourceFeatureCard.defaultProps = {
  imgSrc: 'https://via.placeholder.com/303x320',
  imgSrcDesktop: 'https://via.placeholder.com/625x417',
  imgAlt: 'Placeholder Alt',
  imgTitle: 'Placeholder Title',

  label: '',
  title: 'Featured post headline - What do people really expect',
  paragraph:
    '75% of consumers say that businesses don’t meet their customer service expectations. What are they exactly? We surveyed the modern consumer to find out.',
  variations: '1',
  position: 'left'
};

ResourceInfo.defaultProps = {
  title: 'Featured post headline - What do people really expect',
  paragraph:
    '75% of consumers say that businesses don’t meet their customer service expectations. What are they exactly? We surveyed the modern consumer to find out.'
};

export { ResourceFeatureCard, ResourceInfo };
export default ResourceFeatureCard;
