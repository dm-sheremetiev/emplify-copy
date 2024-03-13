//@ts-nocheck
import React from "react";
import BrandsLogos from "./BrandsLogos";
import { text, withKnobs } from "@storybook/addon-knobs";
import CardAlt, { ThreeCardAltGroup } from "../Card/CardAlt";
import Button from "../Button/Button";
import ThreeIconParagraphAlt from "../ThreeIconParagraph/ThreeIconParagraphAlt";

import MLSLogo from '../../assets/images/brand-logos/MLS-260x173.png';
import Wed2BLogo from '../../assets/images/brand-logos/Wed2B-260x173.png';
import BathAndBodyWorksLogo from '../../assets/images/brand-logos/Bath-and-Body-Works-260x173.png';
import DeltaLogo from '../../assets/images/brand-logos/Delta-260x173.png';
import UFCLogo from '../../assets/images/brand-logos/UFC-260x173.png';
import DailyBurnLogo from '../../assets/images/brand-logos/Daily-Burn-260x173.png';
import FerraraLogo from '../../assets/images/brand-logos/Ferrara-260x173.png';
import THLLogo from '../../assets/images/brand-logos/THL-260x173.png';
import backgroundCardImage from "../../assets/images/background_card_image.png";
import backgroundCardImageSecond from "../../assets/images/background_card_image_second.png";
import backgroundCardImageThird from "../../assets/images/background_card_image_three.png";

export default {
  title: "BrandsLogos/BrandsLogos",
  component: BrandsLogos,
  decorators: [withKnobs],
};

const logos = [
  {
    imageSrc: MLSLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: Wed2BLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: BathAndBodyWorksLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: DeltaLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: UFCLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: DailyBurnLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: FerraraLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: THLLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: MLSLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: Wed2BLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: BathAndBodyWorksLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: DeltaLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
];

const logosAlt = [
  {
    imageSrc: MLSLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: Wed2BLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: BathAndBodyWorksLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: DeltaLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: UFCLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: DailyBurnLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: FerraraLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: THLLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: MLSLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: Wed2BLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: BathAndBodyWorksLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: DeltaLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },  {
    imageSrc: MLSLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: Wed2BLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: BathAndBodyWorksLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: DeltaLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: UFCLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: DailyBurnLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: FerraraLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: THLLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: MLSLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: Wed2BLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: BathAndBodyWorksLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
  {
    imageSrc: DeltaLogo,
    imageAlt: "Delta",
    imageTitle: "Delta",
  },
];

export const Playground = () => (
  <BrandsLogos
    title={text("title", "Helping 7,000+ brands close the customer experience gap")}
    logos={logos}
  />
);

export const regular = () => (
  <BrandsLogos
    title="Helping 7,000+ brands close the customer experience gap"
    logos={logos}
  />
);

export const MaxLogos = () => (
  <BrandsLogos
    title="Helping 7,000+ brands close the customer experience gap"
    logos={logosAlt}
  />
);

export const BrandsLogosWithChildren = () => (
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
);
