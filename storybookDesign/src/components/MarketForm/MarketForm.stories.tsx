import { select, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import MarketForm from './MarketForm';
import MarketFormAlt from './MarketFormAlt';
import MarketFormImage from '../../assets/images/marketform-image.png';
import MarketFormImageMobile from '../../assets/images/marketform-image-mobile.png';

export default {
  title: 'Form/Form',
  component: MarketForm,
  decorators: [withKnobs]
};

const colours = ['#69BAE8', '#FFFFFF', '#49C7ED', '#485DAA', '#003A5D', '#454647', '#03699B', '#F0F0F0'];

export const Playground = () => (
  <MarketForm
    type={select('type', ['default', 'alt', 'article'], 'default')}
    title={text('title', 'Ready to close your customer experience gap?')}
    subTitle={text('subTitle', 'Get started with Emplifi today.')}
    backgroundColor="#194484"
    textColorTitle="#69BAE8"
    textColorSubTitle="#FFFFFF"
  />
);

export const Default = () => (
  <MarketForm
    type="default"
    title="Ready to close your customer experience gap?"
    subTitle="Get started with Emplifi today."
    backgroundColor="#194484"
    textColorTitle="#69BAE8"
    textColorSubTitle="#FFFFFF"
  />
);

export const Alt = () => (
  <MarketForm
    type="alt"
    title="Get started with Emplifi today - The leading customer experience software"
    backgroundColor="#69BAE8"
    textColorTitle="#FFFFFF"
    textColorSubTitle="#FFFFFF"
  />
);

export const Article = () => (
  <MarketForm type="article" title="Optional Marketo Form CTA" backgroundColor="#69BAE8" textColorTitle="#FFFFFF" textColorSubTitle="#FFFFFF" />
);

export const MarketFormAlternative = () => (
  <MarketFormAlt
    title={text('title', 'Request a personalized demo')}
    subTitle={text('subTitle', 'See how Emplifi can empower your business to elevate the customer experience.')}
    backgroundColor={select('backgroundColor', colours, '#69BAE8')}
    textColorTitle={select('textColorTitle', colours, '#FFFFFF')}
    textColorSubTitle={select('textColorSubTitle', colours, '#FFFFFF')}
    backgroundSize={'cover'}
    backgroundPosition={'center center'}
    formStyle={'dark'}
    imgSrc={MarketFormImage}
    imgSrcMobile={MarketFormImageMobile}
    imgAlt="Image Alt"
    imgTitle="Image Title"
    twoColumns={false}
    formChildren={<div style={{ backgroundColor: '#FFFFFF', height: 700 }}></div>}
  />
);
