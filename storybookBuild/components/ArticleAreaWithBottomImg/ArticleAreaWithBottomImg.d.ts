import { FC } from "react";
import "./ArticleAreaWithBottomImg.scss";
export type ArticleAreaWithBottomImgProps = {
    id?: string;
    className?: string;
    title?: string;
    paragraph: string;
    imgSrcDesktop?: string;
    imgSrcMobile?: string;
    imgAlt?: string;
    imgTitle?: string;
};
declare const ArticleAreaWithBottomImg: FC<ArticleAreaWithBottomImgProps>;
export default ArticleAreaWithBottomImg;
