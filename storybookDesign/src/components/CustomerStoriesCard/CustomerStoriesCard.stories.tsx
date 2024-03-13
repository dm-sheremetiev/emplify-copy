import CustomerStoriesCard from "./CustomerStoriesCard";
import React from "react";
import Typography from '../Typography/Typography';
import CustomerStoriesCardImage from '../../assets/images/customer-stories-card.png';
import CustomerStoriesCardLogoImage from '../../assets/images/brand-logos/Delta-260x173.png';

export default {
  title: "Customer Stories/Customer Stories Card",
  component: CustomerStoriesCard,
};

export const Playground = () => 
  <CustomerStoriesCard 
    type="default"
    imageSrc={CustomerStoriesCardImage}
    imageAlt="Image"
    imageTitle="Image"
    logoSrc={CustomerStoriesCardLogoImage}
    logoAlt="Logo"
    logoTitle="Logo"
    paragraph="These devices let flight attendants identify and greet travelers by name, address travel disruptions in real-time, provide connecting flight gate information, access FAA-mandated safety, and service manuals, complete in-flight purchases, and more."
    linkChildren={
      <a href="#">
        <Typography as="span" type="Link3">Read the full story &#187;</Typography>
      </a>
    }
  />

export const CustomerStories = () => 
  <CustomerStoriesCard 
    type="default"
    imageSrc={CustomerStoriesCardImage}
    imageAlt="Image"
    imageTitle="Image"
    logoSrc={CustomerStoriesCardLogoImage}
    logoAlt="Logo"
    logoTitle="Logo"
    paragraph="These devices let flight attendants identify and greet travelers by name, address travel disruptions in real-time, provide connecting flight gate information, access FAA-mandated safety, and service manuals, complete in-flight purchases, and more."
    linkChildren={
      <a href="#">
        <Typography as="span" type="Link3">Read the full story &#187;</Typography>
      </a>
    }
  />

  export const WithoutLeftSideImage = () => 
  <CustomerStoriesCard 
    type="default"
    logoSrc={CustomerStoriesCardLogoImage}
    logoAlt="Logo"
    logoTitle="Logo"
    paragraph="These devices let flight attendants identify and greet travelers by name, address travel disruptions in real-time, provide connecting flight gate information, access FAA-mandated safety, and service manuals, complete in-flight purchases, and more."
    linkChildren={
      <a href="#">
        <Typography as="span" type="Link3">Read the full story &#187;</Typography>
      </a>
    }
  />

export const CustomerStoriesMenu = () => 
  <CustomerStoriesCard 
    type="menu"
    imageSrc={CustomerStoriesCardImage}
    imageAlt="Image"
    imageTitle="Image"
    logoSrc={CustomerStoriesCardLogoImage}
    logoAlt="Logo"
    logoTitle="Logo"
    paragraph="<ul><li>Quick, scaleable support for 22,000+ flight attendants.</li><li>Quick, scaleable support for 22,000+ flight attendants.</li</ul>"
    linkChildren={
      <a href="#">
        <Typography as="span" type="Link3">Read the full story &#187;</Typography>
      </a>
    }
  />
 