import { FC, ReactNode } from 'react';
import './ArticleInfo.scss';
export type ArticleInfoProps = {
    id?: string;
    imgSrc?: string;
    imgAlt?: string;
    imgTitle?: string;
    text?: string;
    body?: string;
};
export type ArticleInfoGroupProps = {
    id?: string;
    children?: ReactNode | string;
};
declare const ArticleInfo: (props: ArticleInfoProps) => JSX.Element;
declare const ArticleInfoGroup: FC<ArticleInfoGroupProps>;
export { ArticleInfo, ArticleInfoGroup };
export default ArticleInfo;
