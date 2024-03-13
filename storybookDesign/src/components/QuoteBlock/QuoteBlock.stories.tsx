import React from 'react';
import QuoteBlock, { QuoteBlockImage } from './QuoteBlock';
import {
  withKnobs,
  text
} from "@storybook/addon-knobs";
import ExampleLogo from '../../assets/images/samsung-logo.png';
import Button from '../Button/Button';

export default {
  title: 'QuoteBlock/QuoteBlock',
  decorators: [withKnobs],
  component: QuoteBlock
};

export const Playground = () => {
  return (
    <QuoteBlock 
      quote={text('quote', '“Emplifi’s listening made us see our audience completely different and helped us turn those insights into hard ROI.”')}
      companyName={text('companyName', 'McDonalods')}
      by={text('by', 'Lesley Vos, Head of Insights')}
      buttonChildren={
        <Button type="ProductSecondary">Read the full story</Button>
      }
      imagesChildren={
        <>
          <QuoteBlockImage imgSrc={ExampleLogo} imgAlt="Samsung Logo" imgTitle="Samsung" />
          <QuoteBlockImage imgSrc={ExampleLogo} imgAlt="Samsung Logo" imgTitle="Samsung" />
          <QuoteBlockImage imgSrc={ExampleLogo} imgAlt="Samsung Logo" imgTitle="Samsung" />
          <QuoteBlockImage imgSrc={ExampleLogo} imgAlt="Samsung Logo" imgTitle="Samsung" />
        </>
      }
    />
  )
}
