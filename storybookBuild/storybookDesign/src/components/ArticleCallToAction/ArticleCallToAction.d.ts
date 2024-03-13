import { ReactNode } from 'react';
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
declare const ArticleCallToAction: {
    (props: ArticleCallToActionProps): JSX.Element;
    defaultProps: {
        backgroundColor: string;
    };
};
export { ArticleCallToAction };
export default ArticleCallToAction;
