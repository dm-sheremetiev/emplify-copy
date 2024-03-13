import ArticleBanner, { ArticleBannerSocialIcon } from "./ArticleBanner";
import React from "react";
import ArticleImageDesktop from "../../assets/images/article-banner-image.png";
import ArticleImageMobile from "../../assets/images/article-banner-mobile-image.png";
import Icon from "../Icon/Icon";

export default {
  title: "Article / Article Banner",
  component: ArticleBanner,
};

export const Playground = ({
  imgSrcDesktop,
  imgSrcMobile,
  imgAlt,
  imgTitle,
  quoteText,
  subTextMedium,
  subTextRegular,
}: any) => (
  <div>
    <ArticleBanner
      imgSrcDesktop={imgSrcDesktop}
      imgSrcMobile={imgSrcMobile}
      imgAlt={imgAlt}
      imgTitle={imgTitle}
      quoteText={quoteText}
      subTextMedium={subTextMedium}
      subTextRegular={subTextRegular}
      socialMediaChildren={
        <>
          <ArticleBannerSocialIcon
            anchor={true}
            iconChildren={<Icon name="twitter" size={20} colour="#003A5D" />}
          />
          <ArticleBannerSocialIcon
            anchor={true}
            iconChildren={<Icon name="facebook" size={20} colour="#003A5D" />}
          />
          <ArticleBannerSocialIcon
            anchor={true}
            iconChildren={
              <Icon name="linkedin-second" size={20} colour="#003A5D" />
            }
          />
          <ArticleBannerSocialIcon
            anchor={true}
            iconChildren={<Icon name="envelope" size={22} colour="#003A5D" />}
          />
        </>
      }
    />
  </div>
);

ArticleBanner.defaultProps = {
  imgSrcDesktop: ArticleImageDesktop,
  imgSrcMobile: ArticleImageMobile,
  imgAlt: "Article Image",
  imgTitle: "Image Title",
  quoteText:
    "“Emplifi’s listening made us see our audience completely different and helped us turn those insights into hard ROI.”",
  subTextMedium: "Lesley Vos",
  subTextRegular: "Head of Insights, McDonalds",
  isRight: false
};
