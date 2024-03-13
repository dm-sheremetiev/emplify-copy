import {select, text, withKnobs} from '@storybook/addon-knobs';
import React from 'react';
import Button from '../Button/Button';
import ResourceAltCard from './ResourceAltCard';
import ResourceAltCardImage from '../../assets/images/resource-alt-card-image.png';
import colours from "../../assets/colours";

export default {
  title: 'Resources/ResourceAltCard',
  component: ResourceAltCard,
  decorators: [withKnobs],
}

export const Playground = () => {
  return (
    <ResourceAltCard 
      imageSrc={ResourceAltCardImage}
      imageAlt={text('Image Alt', "Resource Alt Card")}
      imageTitle={text('Image Title', "Resource Image Title")}
      title={text('title', "Top 40 customer experience statistics to know in 2021")}
      contentAlign={select('contentAlign', ['','left','center'], '')}
      backgroundColor={select('backgroundColor', [colours.white, colours.abbey, colours.astronautBlue, colours.silver, colours.gallery], colours.white)}
      body="Closing the customer experience gap is only becoming more critical for brands. Here are the customer experience trends and stats every customer-centric brand must know today."
      buttonChildren={
        <>
          <Button type="Primary">Download</Button>
        </>
      }

    />
  )
}
