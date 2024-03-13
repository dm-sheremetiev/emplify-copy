import React from 'react';
import ImgHeroBanner from '../../assets/images/campaign-hero.png';
import { withKnobs } from '@storybook/addon-knobs';
import HeroBannerCampaign from './HeroBannerCampaign';

export default {
  title: 'Campaign Banner / Campaign Banner',
  component: HeroBannerCampaign,
  decorators: [withKnobs],
};

export const Playground = ({
  title,
  subTitle,
  perex,
  headlineTop,
  imageSrc,
  imageAlt,
  backgroundColor,
  titleColor,
  subtitleColor,
  perexColor,
}: any) => (
  <div>
    <HeroBannerCampaign
      title={title}
      subTitle={subTitle}
      perex={perex}
      headlineTop={headlineTop}
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      backgroundColor={backgroundColor}
      titleColor={titleColor}
      subtitleColor={subtitleColor}
      perexColor={perexColor}
    />
  </div>
);

HeroBannerCampaign.defaultProps = {
  title: 'Introducing Emplifi:',
  subTitle: 'Social superstars make it happen.',
  perex:
    'Today’s social media manager has to wear many hats — the strategist, the storyteller, the community builder, the customer care provider — all while inspiring followers to become customers.',
  imageSrc: ImgHeroBanner,
  imageAlt: 'Hero Banner Image',
  headlineTop: 'headline top.',
  titleColor: 'red',
  subtitleColor: 'green',
  perexColor: 'yellow',
  backgroundColor: 'black',
};
