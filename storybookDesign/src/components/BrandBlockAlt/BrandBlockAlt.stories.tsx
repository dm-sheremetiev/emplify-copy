//@ts-nocheck
import React from "react";
import colours from "../../assets/colours";
import BrandBlockAlt, { BrandBlockAltItem } from "./BrandBlockAlt";
import { select, text, withKnobs } from "@storybook/addon-knobs";

import CardAlt, { ThreeCardAltGroup } from "../Card/CardAlt";
import backgroundCardImage from "../../assets/images/background_card_image.png";
import backgroundCardImageSecond from "../../assets/images/background_card_image_second.png";
import backgroundCardImageThird from "../../assets/images/background_card_image_three.png";
import Button from "../Button/Button";
import ThreeIconParagraphAlt from "../ThreeIconParagraph/ThreeIconParagraphAlt";
import BrandsLogos from "../BrandsLogos/BrandsLogos";
import DeltaLogo from "../../assets/images/delta-logo-2.png";
import CheeseCakeFactoryLogo from "../../assets/images/the-chesse-cake-factory-logo.png";
import FordLogo from "../../assets/images/ford-logo.png";
import DiscoveryLogo from "../../assets/images/discovery-logo.png";

export default {
  title: "BrandBlock/Brand Block Alt",
  component: BrandBlockAlt,
  decorators: [withKnobs],
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

const logos = [
  {
    imageSrc: DeltaLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: CheeseCakeFactoryLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: FordLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: DiscoveryLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: DeltaLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: CheeseCakeFactoryLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: FordLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: DiscoveryLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: DeltaLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: CheeseCakeFactoryLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: FordLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: DiscoveryLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: DeltaLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: CheeseCakeFactoryLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: FordLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: DiscoveryLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: DeltaLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: CheeseCakeFactoryLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: FordLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: DiscoveryLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
];

const items = [
  {
    dataText: "25",
    dataSupText: "+",
    body: "years at the forefront of CX and social media.",
  },
  {
    dataText: "25",
    dataSupText: "+",
    body:
      "years at the forefront of CX and social media. years at the forefront of CX and social media.",
  },
  {
    dataText: "25",
    dataSupText: "+",
    body:
      "years at the forefront of CX and social media. years at the forefront of CX and social media. years at the forefront of CX and social media.",
  },
  {
    dataText: "25",
    dataSupText: "+",
    body:
      "years at the forefront of CX and social media. years at the forefront of CX and social media. years at the forefront of CX and social media. years at the forefront of CX and social media.",
  },
  {
    dataText: "25",
    dataSupText: "+",
    body: "years at the forefront of CX and social media.",
  },
  {
    dataText: "25",
    dataSupText: "+",
    body:
      "years at the forefront of CX and social media. years at the forefront of CX and social media.",
  },
  {
    dataText: "25",
    dataSupText: "+",
    body:
      "years at the forefront of CX and social media. years at the forefront of CX and social media. years at the forefront of CX and social media.",
  },
  {
    dataText: "25",
    dataSupText: "+",
    body:
      "years at the forefront of CX and social media. years at the forefront of CX and social media. years at the forefront of CX and social media. years at the forefront of CX and social media.",
  },
  {
    dataText: "25",
    dataSupText: "+",
    body:
      "years at the forefront of CX and social media. years at the forefront of CX and social media. years at the forefront of CX and social media. years at the forefront of CX and social media.",
  },
];

export const Playground = () => (
  <BrandBlockAlt
    title={text("title", "Why Emplifi? By the numbers?")}
    titleColor={select(
      "titleColor",
      [colours.abbey, colours.astronautBlue, colours.bahamaBlue, colours.white],
      colours.white
    )}
    backgroundColor={select(
      "backgroundColor",
      [colours.abbey, colours.astronautBlue, colours.bahamaBlue, colours.white],
      colours.abbey
    )}
    items={items}
  />
);

export const regular = () => (
  <BrandBlockAlt
    title="Why Emplifi? By the numbers?"
    titleColor={colours.white}
    backgroundColor={colours.abbey}
    items={items}
  />
);

export const ItemPlayground = () => (
  <BrandBlockAltItem
    dataText={text("dataText", "25")}
    dataSupText={text("dataSupText", "+")}
    body={text(
      "body",
      "years at the forefront of CX and social media. years at the forefront of CX and social media. years at the forefront of CX and social media. years at the forefront of CX and social media."
    )}
  />
);

export const item = () => (
  <BrandBlockAltItem
    dataText="25"
    dataSupText="+"
    body="years at the forefront of CX and social media. years at the forefront of CX and social media. years at the forefront of CX and social media. years at the forefront of CX and social media."
  />
);

export const BrandBlockGroupComponent = () => (
  <>
    <BrandsLogos
      title="Helping 7,000+ brands close the customer experience gap"
      logos={logos}
      cardsChildren={
        <ThreeIconParagraphAlt
          title="One platform. Infinite powerful experiences across the customer journey"
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
      }
    />
    <BrandBlockAlt
      title="Why Emplifi? By the numbers?"
      titleColor={colours.white}
      backgroundColor={colours.abbey}
      items={items}
    />
  </>
);
