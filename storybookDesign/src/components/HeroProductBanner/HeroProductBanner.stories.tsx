import HeroProductBanner from "./HeroProductBanner";
import React from "react";
import ImgProductBanner from '../../assets/images/product_banner.png';
import Button from "../Button/Button";
import { number, text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Hero / Hero Product Banner",
  component: HeroProductBanner,
  decorators: [withKnobs],
};

export const Playground = ({
  title,
  body,
  imgSrc,
  isRight,
  alt,
  imgTitle
}: any) => (
  <div>
    <HeroProductBanner
      title={title}
      body={body}
      imgSrc={imgSrc}
      imgTitle={imgTitle}
      isRight={isRight}
      alt={alt}
      buttonChildren={
        <Button type="ProductPrimary">Get a Demo</Button>
      }
      backgroundColor={text('backgroundColor', '#fff')}
      paddingTop={number('paddingTop', 0)}
      paddingLeft={number('paddingLeft', 0)}
      paddingRight={number('paddingRight', 0)}
      paddingBottom={number('paddingBottom',0)}
    />
  </div>
);

HeroProductBanner.defaultProps = {
  title: "Kundeanfragen souverän, effizient und genau lösen.",
  imgSrc: ImgProductBanner,
  alt: "Hero Product Banner Image",
  imgTitle: "Image Title",
  body:
    "To drive the best experiences you need to continuously listen to your audience across the entire customer journey. With Socialbakers, you can instantly use data from every touchpoint to boost customer experiences at every stage.",
  isRight: true,
};
