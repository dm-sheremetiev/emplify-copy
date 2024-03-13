import React, { FC, ReactNode } from 'react';
import Typography from '../Typography/Typography';
import './ArticleInfo.scss';

export type ArticleInfoProps = {
  id?: string;
  imgSrc?: string;
  imgAlt?: string;
  imgTitle?: string;
  text?: string;
  body?: string;
}

export type ArticleInfoGroupProps = {
  id?: string;
  children?: ReactNode | string;
}

const ArticleInfo = (props: ArticleInfoProps) => {
  return (
    <div id={props.id} className="emplifi-article-info">
      {props.imgSrc && <img src={props.imgSrc} alt={props.imgAlt} width="135px" height="28px"  />}
      {props.text && <div className="typography typography--Headline2" dangerouslySetInnerHTML={{ __html: props.text || "" }}></div>}
      {props.body && <Typography type="Body1">{props.body}</Typography>}
    </div>
  )
};

const ArticleInfoGroup: FC<ArticleInfoGroupProps> = (props: ArticleInfoGroupProps) => {
  return (
    <div id={props.id} className="emplifi-article-info-group">
      <div className="emplifi-article-info-group__container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-4 md:gap-10 justify-between">
        {props.children}
      </div>
    </div>
  )
};

export { ArticleInfo, ArticleInfoGroup }
export default ArticleInfo;
