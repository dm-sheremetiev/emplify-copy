import React from 'react';
import './ArticleArea.scss';
import Typography from '../Typography/Typography';
import ArticleRenderer from '../ArticleRenderer/ArticleRenderer';
import clsx from 'clsx';
import { imageContentfulTransformUrl } from '../../utils/contenful-helper-functions';

export type ArticleAreaProps = {
  id?: string;
  type: 'Area' | 'Editorial';
  imgSrc?: string;
  imgSrcDesktop?: string;
  imgAlt?: string;
  imgTitle?: string;
  imgPosition?: 'center' | 'top' | 'bottom';
  meta?: string;
  title?: string;
  subTitle?: string;
  paragraph?: string;
};

const ArticleArea = (props: ArticleAreaProps) => {
  return (
    <div id={props.id} className={`emplifi-article-area emplifi-article-area--type-${props.type}`}>
      <div className={`emplifi-article-area__container emplifi-article-area__container--image-position-${props.imgPosition}`}>
        {props.imgSrcDesktop && (
          <div className="emplifi-article-area__image-container">
            <picture>
              <source srcSet={imageContentfulTransformUrl(props.imgSrcDesktop)} media="(min-width:768px)" />
              <img className="emplifi-article-area__image" src={props.imgSrc} alt={props.imgAlt || props.imgTitle} width="496" height="330" loading="lazy" />
            </picture>
          </div>
        )}
        {(props.meta || props.title || props.subTitle || props.paragraph) && (
          <div className={clsx('emplifi-article-area__info', !props.imgSrcDesktop && 'no-image')}>
            {props.meta && <Typography type="Eyebrow">{props.meta}</Typography>}
            {props.title && <div className="typography typography--Headline1" dangerouslySetInnerHTML={{ __html: props.title || '' }}></div>}
            {props.subTitle && <div className="typography typography--Headline5" dangerouslySetInnerHTML={{ __html: props.subTitle || '' }}></div>}
            {props.paragraph && (
              <div className="emplifi-article-area__paragraph">
                <ArticleRenderer articleBody={props.paragraph} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export { ArticleArea };
export default ArticleArea;
