import React from 'react';
import './ArticleRenderer.scss';

export type ArticleRendererProps = {
  id?: string;
  articleBody?: string;
  paddingTop?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingBottom?: number;
};

const ArticleRenderer = (props: ArticleRendererProps) => {
  return (
    <div id={props.id} className="emplifi-article-renderer">
      <div className="emplifi-article-renderer__article-body" dangerouslySetInnerHTML={{ __html: props.articleBody || '' }}></div>
    </div>
  );
};

export { ArticleRenderer };
export default ArticleRenderer;
