import React from "react";
import BrandBlock from "./BrandBlock";
import ImgBrandBlock from "../../assets/images/credibility-banner-bg-no-bubbles.jpg";
import ImgSubBrandBlock from "../../assets/images/Woman.png"

export default {
  title: "BrandBlock/BrandBlock",
  component: BrandBlock
};

export const Playground = ({ imgSrc, imgAlt, title, body, imgSubSrc, imgSubAlt }: any) => (
  <div>
    <BrandBlock imgSrc={imgSrc} imgAlt={imgAlt} title={title} body={body} imgSubSrc={imgSubSrc} imgSubAlt={imgSubAlt}/>
  </div>
);

BrandBlock.defaultProps = {
  title: "Emplifi serves 7,000+ brands",
  imgSrc: ImgBrandBlock,
  imgSubSrc: ImgSubBrandBlock,
  imgSubAlt: "Woman",
  imgAlt: "Brand Block Image",
  body: "We give innovative brands the tools they need to create powerful experiences throughout the customer journey."
};