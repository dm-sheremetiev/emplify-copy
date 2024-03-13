import React from "react";
import { select, text, withKnobs } from "@storybook/addon-knobs";
import ArticleInfo, { ArticleInfoGroup } from './ArticleInfo';
import ArticleGraphImage from '../../assets/images/article-graph-image.png';

export default {
  title: "Article/Article Info",
  component: ArticleInfo,
  decorators: [withKnobs],
};

export const Playground = () =>       
  <ArticleInfo 
    imgSrc={select('imgSrc', [ArticleGraphImage, ''], '')}
    text={text('text', '$100m')}
    body={text('body', 'A Lorem ipsum dolor sit amet, consectetur adipiscing elit.')}
  />
;

export const Single = () => 
  <ArticleInfo 
    text="$100m" 
    body="A Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
  />
;

export const Group = () => {
  return (
    <ArticleInfoGroup>
      <ArticleInfo 
        text="$100m" 
        body="A Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
      />
      <ArticleInfo 
        text="$100m" 
        body="A Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
      />
      <ArticleInfo 
        text="$100m" 
        body="A Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
      />
      <ArticleInfo 
        imgSrc={ArticleGraphImage}
        imgAlt="Article Graph"
        imgTitle="Article Graph"
        body="A Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
      />
      <ArticleInfo 
        imgSrc={ArticleGraphImage}
        imgAlt="Article Graph"
        imgTitle="Article Graph"
        body="A Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
      />
      <ArticleInfo 
        imgSrc={ArticleGraphImage}
        imgAlt="Article Graph"
        imgTitle="Article Graph"
        body="A Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
      />
    </ArticleInfoGroup>
  )
};
