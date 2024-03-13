import React, { ReactNode } from 'react';
import { IconsType } from '../../assets/icons';
import Icon from '../Icon/Icon';
import Typography from '../Typography/Typography';
import './ArticleEditorialFooter.scss';

export type ArticleEditorialFooterProps = {
  id?: string;
  byText?: string;
  by?: string;
  articlePublishedText?: string;
  articlePublished?: string;
  socialChildren?: ReactNode;
};
export type ArticleEditorialSocialIconProps = {
  id?: string;
  anchor?: boolean;
  iconName: IconsType;
  iconSize: number;
  iconColour: string;
  href?: string;
  target?: string;
};

const ArticleEditorialFooter = (props: ArticleEditorialFooterProps) => {
  return (
    <div id={props.id} className="emplifi-article-editorial-footer">
      <div className="emplifi-article-editorial-footer__container">
        <div className="emplifi-article-editorial-footer__by-article-published">
          {props.by && (
            <Typography type="Eyebrow">
              {props.byText}: {props.by}
            </Typography>
          )}
          <Typography type="Eyebrow">
            {props.articlePublishedText}: {props.articlePublished}
          </Typography>
        </div>
        <div className="emplifi-article-editorial-footer__socials"> {props.socialChildren}</div>
      </div>
    </div>
  );
};

const ArticleEditorialSocialIcon = (props: ArticleEditorialSocialIconProps) => {
  if (props.anchor) {
    return (
      <a
        id={props.id}
        className="emplifi-article-editorial-footer-social-icon emplifi-article-editorial-footer-social-icon--anchor"
        href={props.href}
        target={props.target ? props.target : undefined}
        rel={props.target === '_blank' ? 'noopener noreferrer' : undefined}
      >
        <Icon name={props.iconName} size={props.iconSize} colour={props.iconColour} />
      </a>
    );
  }

  return (
    <div id={props.id} className="emplifi-article-editorial-footer-social-icon">
      <Icon name={props.iconName} size={props.iconSize} colour={props.iconColour} />
    </div>
  );
};

export { ArticleEditorialFooter, ArticleEditorialSocialIcon };
export default ArticleEditorialFooter;
