import React from "react";
import Card from "./Card";
import CardAlt from "./CardAlt";
import backgroundCardImage from "../../assets/images/background_card_image.png";
import backgroundCardImageSecond from "../../assets/images/background_card_image_second.png";
import Button from "../Button/Button";

export default {
  title: "Card/Card",
  component: Card,
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Playground = ({ ...args }: any) => <Card {...args} />;
Playground.args = {
  header: "Convert followers into customers",
  paragraph:
    "<p>Drive growth and analyze engagement by presenting memorable experiences across all your social media channels. We empower brands to drive success at each stage of the marketing cycle, from strategy planning to content creation to measurement and reporting. <a href='#'>Testing Hello</a></p>",
  image: "https://i.imgur.com/SxO3SkN.png",
};

export const PlaygroundCardAlt = ({ ...args }: any) => <CardAlt {...args} />;
PlaygroundCardAlt.args = {
  header: "Social Commerce Cloud",
  paragraph:
    "<p>Make your brand shoppable. Deliver easy shopping experiences your customers crave on their favorite social platforms.</p>",
  backgroundColor: "#485DAA",
  icon: "cloud-bag",
  buttonChildren: <Button type="CardAlt">Learn More</Button>,
  image: backgroundCardImage
};

export const PlaygroundCardAltSecond = ({ ...args }: any) => <CardAlt {...args} />;
PlaygroundCardAltSecond.args = {
  header: "Social Marketing Cloud",
  paragraph:
    "<p>Convert followers into customers. Amplify memorable experiences across your entire social presence (and do it at scale).</p>",
  backgroundColor: "#49C7ED",
  icon: "cloud-message",
  buttonChildren: <Button type="CardAlt">Learn More</Button>,
  image: backgroundCardImageSecond
};
