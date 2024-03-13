import { ReactNode } from 'react';
import { IconsType } from '../../assets/icons';
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
declare const ArticleEditorialFooter: (props: ArticleEditorialFooterProps) => JSX.Element;
declare const ArticleEditorialSocialIcon: (props: ArticleEditorialSocialIconProps) => JSX.Element;
export { ArticleEditorialFooter, ArticleEditorialSocialIcon };
export default ArticleEditorialFooter;
