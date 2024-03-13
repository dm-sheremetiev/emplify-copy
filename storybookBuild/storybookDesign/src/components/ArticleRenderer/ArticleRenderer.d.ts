import './ArticleRenderer.scss';
export type ArticleRendererProps = {
    id?: string;
    articleBody?: string;
    paddingTop?: number;
    paddingLeft?: number;
    paddingRight?: number;
    paddingBottom?: number;
};
declare const ArticleRenderer: (props: ArticleRendererProps) => JSX.Element;
export { ArticleRenderer };
export default ArticleRenderer;
