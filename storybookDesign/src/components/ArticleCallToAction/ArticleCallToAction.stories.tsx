import React from "react";
import Button from "../Button/Button";
import ArticleCallToAction from "./ArticleCallToAction";
import ArticleCallToActionImageOne from '../../assets/images/article-call-to-action-image-1.png';
import ArticleCallToActionImageTwo from '../../assets/images/article-call-to-action-image-2.png';
import ArticleCallToActionImageThree from '../../assets/images/article-call-to-action-image-3.png';
import { select, text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Article/Article Call To Action",
  component: ArticleCallToAction,
  decorators: [withKnobs],
};

export const Playground = () => 
  <ArticleCallToAction 
    backgroundColor={select('backgroundColor', ['#1A4073', '#69BAE8', '#F4F4F4'], '#1A4073')}
    imgSrc={select('imgSrc', [ArticleCallToActionImageOne, ArticleCallToActionImageTwo, ArticleCallToActionImageThree], ArticleCallToActionImageOne)}
    imgAlt={text('imgAlt', 'Alt')}
    imgTitle={text('imgTitle', 'Title')}
    title={text('title', 'Optional rich text editor')}
    articleBody="<p>A seasoned executive, Mark brings more than 25 years of experience
    in executive roles with high-growth SaaS cloud companies in the
    areas of digital marketing, content management, customer experience
    (CX), and data executive roles with platforms.</p>
    <p>A seasoned executive, Mark brings more than 25 years of experience
    in executive roles with high-growth SaaS cloud companies in the
    areas of digital marketing, content management, customer experience
    (CX), and data executive roles with platforms.</p>"
    buttonChildren={<Button type="ProductPrimary">Optional CTA</Button>}
  />
;


export const Default = () => 
  <ArticleCallToAction 
    imgSrc={ArticleCallToActionImageOne}
    imgAlt="Alt"
    imgTitle="Title"
    title="Optional rich text editor"
    articleBody="<p>A seasoned executive, Mark brings more than 25 years of experience
    in executive roles with high-growth SaaS cloud companies in the
    areas of digital marketing, content management, customer experience
    (CX), and data executive roles with platforms.</p>
    <p>A seasoned executive, Mark brings more than 25 years of experience
    in executive roles with high-growth SaaS cloud companies in the
    areas of digital marketing, content management, customer experience
    (CX), and data executive roles with platforms.</p>"
    buttonChildren={<Button type="ProductPrimary">Optional CTA</Button>}
  />
;