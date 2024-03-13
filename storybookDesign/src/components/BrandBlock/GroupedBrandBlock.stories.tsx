//@ts-nocheck
import React from "react";
import ThreeIconParagraph from "../ThreeIconParagraph/ThreeIconParagraph";
import Card, { ThreeCardGroup, TheeCardGroupIcon } from "../Card/Card";
import BrandBlock from "./BrandBlock";

export default {
  title: "BrandBlock/GroupedBrandBlock",
  component: ThreeIconParagraph,
  BrandBlock,
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Playground = () => (
  <>
    <ThreeIconParagraph
      iconNameLeft="empathy"
      iconNameMiddle="brand-connection"
      iconNameRight="iot"
      children={
        <ThreeCardGroup>
          <Card
            header="Convert followers into customers"
            paragraph="Drive growth and analyze engagement by presenting memorable experiences across all your social media channels. We empower brands to drive success at each stage of the marketing cycle, from strategy planning to content creation to measurement and reporting."
            image="https://i.imgur.com/SxO3SkN.png"
          />
          <TheeCardGroupIcon name={"add"} size={55} />
          <Card
            header="Show them<br>you care"
            paragraph="At Emplifi, we believe all companies should be able to show genuine empathy toward their customers and gain the insights needed to meet fast-changing expectations. Our mission is to close the customer experience gap, bringing together social media, marketing and care teams to optimize digital interactions."
            image="https://i.imgur.com/SxO3SkN.png"
          />
          <TheeCardGroupIcon name={"equals"} size={55} />
          <Card
            blue
            header="Our Vision"
            paragraph="At Emplifi, we believe all companies should be able to show genuine empathy toward their customers and gain the insights needed to meet fast-changing expectations. Our mission is to close the customer experience gap, bringing together social media, marketing and care teams to optimize digital interactions."
            image="https://i.imgur.com/SxO3SkN.png"
          />
        </ThreeCardGroup>
      }
    />
    <BrandBlock />
  </>
);
