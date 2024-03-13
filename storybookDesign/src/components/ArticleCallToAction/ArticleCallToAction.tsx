import React, { ReactNode } from 'react';
import ArticleRenderer from '../ArticleRenderer/ArticleRenderer';
import './ArticleCallToAction.scss';

export type ArticleCallToActionProps = {
  id?: string;
  backgroundColor?: string;
  imgSrc?: string;
  imgAlt?: string;
  imgTitle?: string;
  title?: string;
  articleBody?: string;
  buttonChildren?: ReactNode;
};

const ArticleCallToAction = (props: ArticleCallToActionProps) => {
  return (
    <div id={props?.id} className="emplifi-article-call-to-action-container">
      <div className="emplifi-article-call-to-action" style={{ backgroundColor: props?.backgroundColor }}>
        <div className="emplifi-article-call-to-action__container">
          <div className="emplifi-article-call-to-action__info">
            {props?.title && <div className="typography typography--Headline2" dangerouslySetInnerHTML={{ __html: props?.title || '' }}></div>}
            {props?.articleBody && <ArticleRenderer articleBody={props?.articleBody} />}
            {props?.buttonChildren && <>{props?.buttonChildren}</>}
          </div>
        </div>
      </div>

      <div className="emplifi-article-call-to-action-image-container">
        <img
          className="emplifi-article-call-to-action-image-container__image"
          src={props?.imgSrc}
          alt={props?.imgAlt || props?.imgTitle}
          title={props?.imgTitle}
          width="599px"
          height="458px"
        />
      </div>

      <div className="emplifi-article-call-to-action-white-space"></div>
    </div>
  );
};

ArticleCallToAction.defaultProps = {
  backgroundColor: '#1A4073'
};

export { ArticleCallToAction };
export default ArticleCallToAction;
