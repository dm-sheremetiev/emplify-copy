import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import logo  from '../../assets/images/award-badge.png'
import Awards, { AwardsGroup } from './Awards';

export default {
  title: 'Awards / Awards',
  component: Awards,
  decorators: [withKnobs],
};
const logos1 = [
  {
    imageSrc: logo,
    imageAlt: "Award",
    imageTitle: "",
  },
  {
    imageSrc: logo,
    imageAlt: "Award 2",
    imageTitle: "Award",
  },
  {
    imageSrc: logo,
    imageAlt: "Award 3",
    imageTitle: "Award",
  },
]

const logos2 = [
  {
    imageSrc: logo,
    imageAlt: "Award",
    imageTitle: "",
  },
  {
    imageSrc: logo,
    imageAlt: "Award 2",
    imageTitle: "Award",
  },
  {
    imageSrc: logo,
    imageAlt: "Award 3",
    imageTitle: "Award",
  },
  {
    imageSrc: logo,
    imageAlt: "Award 3",
    imageTitle: "Award",
  },
  {
    imageSrc: logo,
    imageAlt: "Delta 3",
    imageTitle: "Delta",
  },
  {
    imageSrc: logo,
    imageAlt: "Award 3",
    imageTitle: "Award",
  },
  {
    imageSrc: logo,
    imageAlt: "Award 3",
    imageTitle: "Award",
  },
]

export const Playground = () => (
  <div>
    <AwardsGroup title="Awards" awardsChildren={
      <>
        <Awards title="title item" images={logos1}/>
        <Awards title="title item 2" images={logos2}/>
        <Awards title="title item 3" images={logos1} />
      </>
      }
    />
  </div>
);
