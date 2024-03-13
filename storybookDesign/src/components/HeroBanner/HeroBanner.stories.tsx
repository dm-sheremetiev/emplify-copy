import HeroBanner from "./HeroBanner";
import React from "react";
import ImgHeroBanner from "../../assets/images/hero-banner-image.png";
import Button from "../Button/Button";
import { number, text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Hero / Hero Banner",
  component: HeroBanner,
  decorators: [withKnobs],
};

export const Playground = ({
  title,
  subTitle,
  body,
  imgSrc,
  isRight,
  alt,
  imgTitle
}: any) => (
  <div>
    <HeroBanner
      title={title}
      subTitle={subTitle}
      body={body}
      imgSrc={imgSrc}
      isRight={isRight}
      alt={alt}
      imgTitle={imgTitle}
      buttonChildren={
        <Button type="Primary">CTA to go here ›</Button>
      }
      backgroundColor={text('backgroundColor', '#fff')}
      paddingTop={number('paddingTop', 0)}
      paddingLeft={number('paddingLeft', 0)}
      paddingRight={number('paddingRight', 0)}
      paddingBottom={number('paddingBottom',0)}
    />
  </div>
);

HeroBanner.defaultProps = {
  title: "Introducing Emplifi:",
  subTitle: "A unified CX platform for enterprises",
  imgSrc: ImgHeroBanner,
  alt: "Hero Banner Image",
  imgTitle: "Title for the image",
  body:
    "Astute has joined with Socialbakers, empowering brands to meet fast-changing customer expectations. Now you can acquire, engage and support customers at every touchpoint along the evolving buyer’s journey.",
  isRight: true,
};
