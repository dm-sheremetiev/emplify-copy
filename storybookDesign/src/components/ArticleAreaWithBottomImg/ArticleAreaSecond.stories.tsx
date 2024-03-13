import ArticleAreaWithBottomImg from "./ArticleAreaWithBottomImg";
import React from "react";
import Image from "../../assets/images/article-btm-image.png";
import ImageMobile from "../../assets/images/article-btn-img-mobile.png";

export default {
  title: "Article / Article Area With Bottom Image",
  component: ArticleAreaWithBottomImg,
};

export const Playground = ({ title, imgSrcDesktop, imgSrcMobile, imgAlt, imgTitle }: any) => (
  <div>
    <ArticleAreaWithBottomImg
      title={title}
      imgSrcDesktop={imgSrcDesktop}
      imgSrcMobile={imgSrcMobile}
      imgAlt={imgAlt}
      imgTitle={imgTitle}
      paragraph="
        <p>A seasoned executive, Mark brings more than 25 years of experience
        in executive roles with high-growth SaaS cloud companies in the
        areas of digital marketing, content management, customer experience
        (CX), and data executive roles with platforms.</p>
        <p>A seasoned executive, Mark brings more than 25 years of experience
        in executive roles with high-growth SaaS cloud companies in the
        areas of digital marketing, content management, customer experience
        (CX), and data executive roles with platforms.</p>
        <p>A seasoned executive, Mark brings more than 25 years of experience
        in executive roles with high-growth SaaS cloud companies in the
        areas of digital marketing, content management, customer experience
        (CX), and data executive roles with platforms.</p>
        <p>A seasoned executive, Mark brings more than 25 years of experience
        in executive roles with high-growth SaaS cloud companies in the
        areas of digital marketing, content management, customer experience
        (CX), and data executive roles with platforms.</p>
        <p>A seasoned executive, Mark brings more than 25 years of experience
        in executive roles with high-growth SaaS cloud companies in the
        areas of digital marketing, content management, customer experience
        (CX), and data executive roles with platforms.</p>
        <p>A seasoned executive, Mark brings more than 25 years of experience
        in executive roles with high-growth SaaS cloud companies in the
        areas of digital marketing, content management, customer experience
        (CX), and data executive roles with platforms.</p>
        <p>A seasoned executive, Mark brings more than 25 years of experience
        in executive roles with high-growth SaaS cloud companies in the
        areas of digital marketing, content management, customer experience
        (CX), and data executive roles with platforms.</p>
        <p>A seasoned executive, Mark brings more than 25 years of experience
        in executive roles with high-growth SaaS cloud companies in the
        areas of digital marketing, content management, customer experience
        (CX), and data executive roles with platforms.</p>
        <p>A seasoned executive, Mark brings more than 25 years of experience
        in executive roles with high-growth SaaS cloud companies in the
        areas of digital marketing, content management, customer experience
        (CX), and data executive roles with platforms.</p>
        <p>A seasoned executive, Mark brings more than 25 years of experience
        in executive roles with high-growth SaaS cloud companies in the
        areas of digital marketing, content management, customer experience
        (CX), and data executive roles with platforms.</p>
        <p>A seasoned executive, Mark brings more than 25 years of experience
        in executive roles with high-growth SaaS cloud companies in the
        areas of digital marketing, content management, customer experience
        (CX), and data executive roles with platforms.</p>
        <p>A seasoned executive, Mark brings more than 25 years of experience
        in executive roles with high-growth SaaS cloud companies in the
        areas of digital marketing, content management, customer experience
        (CX), and data executive roles with platforms.</p>
      "
    />
  </div>
);

ArticleAreaWithBottomImg.defaultProps = {
  title: "Required rich text editor",
  imgSrcDesktop: Image,
  imgSrcMobile: ImageMobile,
  imgAlt: "image",
  imgTitle: "image title"
};
