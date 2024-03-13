//@ts-nocheck
import React from "react";
import Card, { ThreeCardGroup, TheeCardGroupIcon } from "./Card";
import CardAlt, { ThreeCardAltGroup } from "./CardAlt";
import colours from "../../assets/colours";
import backgroundCardImage from "../../assets/images/background_card_image.png";
import backgroundCardImageSecond from "../../assets/images/background_card_image_second.png";
import backgroundCardImageThird from "../../assets/images/background_card_image_three.png";
import Button from "../Button/Button";

export default {
  title: "Card/Three Card Group",
  component: ThreeCardGroup,
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Group = () => (
  <ThreeCardGroup>
    <Card
      header="Convert followers into customers"
      paragraph="<p>Drive growth and analyze engagement by presenting memorable experiences across all your social media channels. We empower brands to drive success at each stage of the marketing cycle, from strategy planning to content creation to measurement and reporting. <a href='#'>Testing Hello</a></p>"
      image="https://i.imgur.com/SxO3SkN.png"
    />
    <TheeCardGroupIcon name={"add"} size={55} colour={colours.white} />
    <Card
      header="Show them you care"
      paragraph="<p>Drive growth and analyze engagement by presenting memorable experiences across all your social media channels. We empower brands to drive success at each stage of the marketing cycle, from strategy planning to content creation to measurement and reporting. <br/><a href='#'>Testing Hello</a></p>"
      image="https://i.imgur.com/SxO3SkN.png"
    />
    <TheeCardGroupIcon name={"equals"} size={55} colour={colours.white} />
    <Card
      blue
      header="Our Vision"
      paragraph="<p>Drive growth and analyze engagement by presenting memorable experiences across all your social media channels. We empower brands to drive success at each stage of the marketing cycle, from strategy planning to content creation to measurement and reporting. <br/><a href='#'>Testing Hello</a><br/><a href='#'>Testing Hello</a><br/><a href='#'>Testing Hello</a></p>"
      image="https://i.imgur.com/SxO3SkN.png"
    />
  </ThreeCardGroup>
);

export const GroupAlt = () => (
  <ThreeCardAltGroup>
    <CardAlt
      header="Social Marketing Cloud"
      paragraph="<p>Convert followers into customers. Amplify memorable experiences across your entire social presence (and do it at scale).</p>"
      backgroundColor="#49C7ED"
      icon="cloud-message"
      buttonChildren={<Button type="CardAlt">Learn More</Button>}
      image={backgroundCardImageSecond}
    />
    <CardAlt
      header="Social Commerce Cloud"
      paragraph="<p>Make your brand shoppable. Deliver easy shopping experiences your customers crave on their favorite social platforms.</p>"
      backgroundColor="#485DAA"
      icon="cloud-bag"
      buttonChildren={<Button type="CardAlt">Learn More</Button>}
      image={backgroundCardImage}
    />
    <CardAlt
      header="Service Cloud"
      paragraph="<p>Show them you care. Power great customer service and care experiences with AI-powered tools and targeted insights.</p>"
      backgroundColor="#003A5D"
      icon="cloud-heart"
      buttonChildren={<Button type="CardAlt">Learn More</Button>}
      image={backgroundCardImageThird}
    />
  </ThreeCardAltGroup>
);

export const GroupAltNoImage = () => (
  <ThreeCardAltGroup>
    <CardAlt
      header="Social Marketing Cloud"
      paragraph="<p>Convert followers into customers. Amplify memorable experiences across your entire social presence (and do it at scale).</p>"
      backgroundColor="#49C7ED"
      icon="cloud-message"
      buttonChildren={<Button type="CardAlt">Learn More</Button>}
    />
    <CardAlt
      header="Social Commerce Cloud"
      paragraph="<p>Make your brand shoppable. Deliver easy shopping experiences your customers crave on their favorite social platforms.</p>"
      backgroundColor="#485DAA"
      icon="cloud-bag"
      buttonChildren={<Button type="CardAlt">Learn More</Button>}
    />
    <CardAlt
      header="Service Cloud"
      paragraph="<p>Show them you care. Power great customer service and care experiences with AI-powered tools and targeted insights.</p>"
      backgroundColor="#003A5D"
      icon="cloud-heart"
      buttonChildren={<Button type="CardAlt">Learn More</Button>}
    />
  </ThreeCardAltGroup>
);