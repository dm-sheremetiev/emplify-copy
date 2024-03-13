import React, { FC } from "react";
import "./ArticleAreaWithBottomImg.scss";
import ArticleRenderer from "../ArticleRenderer/ArticleRenderer";
import { imageContentfulTransformUrl } from "../../utils/contenful-helper-functions";

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

const ArticleAreaWithBottomImg: FC<ArticleAreaWithBottomImgProps> = (
  props: ArticleAreaWithBottomImgProps
) => {
  const {
    title,
    paragraph,
    imgSrcDesktop,
    imgSrcMobile,
    imgAlt,
    imgTitle,
  } = props;
  const HTMLProps = { ...props } as any;
  delete HTMLProps.id;
  delete HTMLProps.title;
  delete HTMLProps.paragraph;
  delete HTMLProps.imgSrcDesktop;
  delete HTMLProps.imgSrcMobile;
  delete HTMLProps.imgAlt;
  delete HTMLProps.imgTitle;
  return (
    <div
      {...HTMLProps}
      id={props.id}
      className={["emplifi-article-area-btm-img", props?.className].join(" ")}
    >
      <div className="emplifi-article-area-btm-img__container">
        <div className="emplifi-article-area-btm-img__image-container">
          {imgSrcDesktop && (
            <div className="emplifi-article-area-btm-img__image-container--desktop">
              <img src={imageContentfulTransformUrl(imgSrcDesktop)} alt={imgAlt} width="135px" height="28px" loading="lazy" />
            </div>
          )}
          {imgSrcMobile && (
            <div className="emplifi-article-area-btm-img__image-container--mobile">
              <img src={imageContentfulTransformUrl(imgSrcMobile)} alt={imgAlt} width="135px" height="28px" loading="lazy" />
            </div>
          )}
        </div>
        <div className="emplifi-article-area-btm-img__text-area">
          {title && <div className="typography typography--Headline3" dangerouslySetInnerHTML={{ __html: title || "" }}></div>}
          {paragraph && <ArticleRenderer articleBody={paragraph} />}
        </div>
      </div>
    </div>
  );
};

export default ArticleAreaWithBottomImg;
