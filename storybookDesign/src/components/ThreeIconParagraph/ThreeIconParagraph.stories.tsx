import React from "react";
import ThreeIconParagraph from "./ThreeIconParagraph";
import Card, { ThreeCardGroup, TheeCardGroupIcon } from "../Card/Card";
import ThreeIconParagraphAlt from "./ThreeIconParagraphAlt";
import CardAlt, { ThreeCardAltGroup } from "../Card/CardAlt";
import backgroundCardImage from "../../assets/images/background_card_image.png";
import backgroundCardImageSecond from "../../assets/images/background_card_image_second.png";
import backgroundCardImageThird from "../../assets/images/background_card_image_three.png";
import Button from "../Button/Button";

export default {
  title: "BrandBlock/Three Icon Paragraph",
  component: ThreeIconParagraph,
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Playground = ({
  title,
  iconOneTitle,
  iconThreeTitle,
  body,
}: any) => (
  <div>
    <ThreeIconParagraph
      title={title}
      iconOneTitle={iconOneTitle}
      iconThreeTitle={iconThreeTitle}
      iconNameLeft="empathy"
      iconNameMiddle="brand-connection"
      iconNameRight="iot"
      body={body}
    />
  </div>
);

ThreeIconParagraph.defaultProps = {
  title: "Close the customer experience gap",
  iconOneTitle: "Empathy",
  iconThreeTitle: "Experience",
  body:
    "Start with empathy, and you’ll always know what to do next. Emplifi’s unified CX platform optimizes digital interactions, so you can deliver the best experience at just the right time. ",
};

export const ThreeIconParagraphWithCards = ({
  title,
  iconOneTitle,
  iconThreeTitle,
  body,
}: any) => (
  <div>
    <ThreeIconParagraph
      title={title}
      iconOneTitle={iconOneTitle}
      iconThreeTitle={iconThreeTitle}
      body={body}
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
  </div>
);

ThreeIconParagraphWithCards.args = {
  title: "Close the customer experience gap",
  iconOneTitle: "Empathy",
  iconThreeTitle: "Experience",
  iconNameLeft: "empathy",
  iconNameMiddle: "brand-connection",
  iconNameRight: "iot",
  body:
    "Start with empathy, and you’ll always know what to do next. Emplifi’s unified CX platform optimizes digital interactions, so you can deliver the best experience at just the right time. ",
};

export const ThreeIconParagraphWithCardsAlt = () => (
  <div>
    <ThreeIconParagraphAlt
      title="<h1>One platform. Infinite powerful experiences across the customer journey</h1>"
      children={
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
      }
    />
  </div>
);
