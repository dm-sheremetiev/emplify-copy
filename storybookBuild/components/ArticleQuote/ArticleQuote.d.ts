import './ArticleQuote.scss';
export type ArticleQuoteProps = {
    id?: string;
    quote?: string;
    company?: string;
    by?: string;
};
declare const ArticleQuote: (props: ArticleQuoteProps) => JSX.Element;
export { ArticleQuote };
export default ArticleQuote;
