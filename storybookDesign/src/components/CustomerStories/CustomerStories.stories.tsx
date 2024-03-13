import CustomerStories from "./CustomerStories";
import React from "react";
import CustomerStoriesCard from "../CustomerStoriesCard/CustomerStoriesCard";
import CustomerStoriesCardImage from '../../assets/images/customer-stories-card.png';
import CustomerStoriesCardLogoImage from '../../assets/images/brand-logos/Delta-260x173.png';
import Typography from "../Typography/Typography";
import { select, text, withKnobs } from "@storybook/addon-knobs";
import colours from "../../assets/colours";

export default {
  title: "Customer Stories/Customer Stories",
  component: CustomerStories,
  decorators: [withKnobs],
};

const stories = [
  {
    type: 'default',
    imageSrc: CustomerStoriesCardImage,
    imageAlt: "Image",
    imageTitle: 'Image',
    logoSrc: CustomerStoriesCardLogoImage,
    logoAlt: 'Logo',
    logoTitle: 'Logo',
    paragraph: 'These devices let flight attendants identify and greet travelers by name, address travel disruptions in real-time, provide connecting flight gate information, access FAA-mandated safety, and service manuals, complete in-flight purchases, and more.'
  },
  {
    type: 'default',
    imageSrc: CustomerStoriesCardImage,
    imageAlt: "Image",
    imageTitle: 'Image',
    logoSrc: CustomerStoriesCardLogoImage,
    logoAlt: 'Logo',
    logoTitle: 'Logo',
    paragraph: 'These devices let flight attendants identify and greet travelers by name, address travel disruptions in real-time, provide connecting flight gate information, access FAA-mandated safety, and service manuals, complete in-flight purchases, and more.'
  },
  {
    type: 'default',
    imageSrc: CustomerStoriesCardImage,
    imageAlt: "Image",
    imageTitle: 'Image',
    logoSrc: CustomerStoriesCardLogoImage,
    logoAlt: 'Logo',
    logoTitle: 'Logo',
    paragraph: 'These devices let flight attendants identify and greet travelers by name, address travel disruptions in real-time, provide connecting flight gate information, access FAA-mandated safety, and service manuals, complete in-flight purchases, and more.'
  },
  {
    type: 'default',
    imageSrc: CustomerStoriesCardImage,
    imageAlt: "Image",
    imageTitle: 'Image',
    logoSrc: CustomerStoriesCardLogoImage,
    logoAlt: 'Logo',
    logoTitle: 'Logo',
    paragraph: 'These devices let flight attendants identify and greet travelers by name, address travel disruptions in real-time, provide connecting flight gate information, access FAA-mandated safety, and service manuals, complete in-flight purchases, and more.'
  }
]

export const Playground = () => <CustomerStories 
  title={text('title', 'Customer experience solutions that deliver results')}
  titleColor={select('titleColor', [colours.abbey, colours.astronautBlue, colours.bahamaBlue, colours.white], colours.white)}
  backgroundColor={select('backgroundColor', [colours.abbey, colours.astronautBlue, colours.bahamaBlue, colours.white], colours.abbey)}
  storiesChildren={
    <>
      {stories.map((story, index) => 
        <CustomerStoriesCard 
          key={index}
          imageSrc={story.imageSrc}
          imageAlt={story.imageAlt}
          imageTitle={story.imageTitle}
          logoSrc={story.logoSrc}
          logoAlt={story.logoAlt}
          logoTitle={story.logoTitle}
          paragraph={story.paragraph}
          linkChildren={
            <a href="#">
              <Typography as="span" type="Link3">Read the full story »</Typography>
            </a>
          }
        />
      )}
    </>
  }
/>

export const regular = () => <CustomerStories 
  title="Customer experience solutions that deliver results"
  titleColor={colours.white}
  backgroundColor={colours.abbey}
  storiesChildren={
    <>
      {stories.map((story, index) => 
        <CustomerStoriesCard 
          key={index}
          imageSrc={story.imageSrc}
          imageAlt={story.imageAlt}
          imageTitle={story.imageTitle}
          logoSrc={story.logoSrc}
          logoAlt={story.logoAlt}
          logoTitle={story.logoTitle}
          paragraph={story.paragraph}
          linkChildren={
            <a href="#">
              <Typography as="span" type="Link3">Read the full story »</Typography>
            </a>
          }
        />
      )}
    </>
  }
/>

export const WithoutLeftSideImage = () => <CustomerStories 
  title="Customer experience solutions that deliver results"
  titleColor={colours.white}
  backgroundColor={colours.abbey}
  storiesChildren={
    <>
      {stories.map((story, index) => 
        <CustomerStoriesCard 
          key={index}
          logoSrc={story.logoSrc}
          logoAlt={story.logoAlt}
          logoTitle={story.logoTitle}
          paragraph={story.paragraph}
          linkChildren={
            <a href="#">
              <Typography as="span" type="Link3">Read the full story »</Typography>
            </a>
          }
        />
      )}
    </>
  }
/>