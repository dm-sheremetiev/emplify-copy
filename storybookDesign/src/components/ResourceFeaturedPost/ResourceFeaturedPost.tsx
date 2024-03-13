import React, { ReactNode } from 'react';
import Typography from '../Typography/Typography';
import ResourceFeaturedImage from '../ResourceFeaturedImage/ResourceFeaturedImage';
import './ResourceFeaturedPost.scss';

export type ResourceFeaturedPostProps = {
  id?: string;
  imgSrc?: string;
  imgSrcDesktop?: string;
  imgAlt?: string;
  imgTitle?: string;

  label?: string;
  meta?: string;
  title?: string;
  paragraph?: string;
  buttonChildren?: ReactNode;
};

const ResourceFeaturedPost = (props: ResourceFeaturedPostProps) => {
  const { label, imgSrc, imgSrcDesktop, imgAlt, imgTitle, meta, title, paragraph, buttonChildren } = props;
  return (
    <div id={props.id} className="resource-featured-post">
      <div className="resource-featured-post__container">
        <ResourceFeaturedImage label={label} imgSrc={imgSrc} imgSrcDesktop={imgSrcDesktop} imgAlt={imgAlt || imgTitle} imgTitle={imgTitle} />
        <div className="resource-featured-post__info">
          {meta && <Typography type="Body1">{meta}</Typography>}
          {title && <div className="typography typography--Headline2" dangerouslySetInnerHTML={{ __html: title || '' }}></div>}
          {paragraph && (
            <Typography type="ResourceParagraph" as="p">
              {paragraph}
            </Typography>
          )}
          {buttonChildren && <>{buttonChildren}</>}
        </div>
      </div>
    </div>
  );
};

ResourceFeaturedPost.defaultProps = {
  imgSrc: 'https://via.placeholder.com/303x320',
  imgSrcDesktop: 'https://via.placeholder.com/625x417',
  imgAlt: 'Placeholder Alt',
  imgTitle: 'Placeholder Title',

  label: '',
  title: 'Featured post headline - What do people really expect',
  paragraph:
    '75% of consumers say that businesses don’t meet their customer service expectations. What are they exactly? We surveyed the modern consumer to find out.'
};

export { ResourceFeaturedPost };
export default ResourceFeaturedPost;
