import './ArticleArea.scss';
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
declare const ArticleArea: (props: ArticleAreaProps) => JSX.Element;
export { ArticleArea };
export default ArticleArea;
