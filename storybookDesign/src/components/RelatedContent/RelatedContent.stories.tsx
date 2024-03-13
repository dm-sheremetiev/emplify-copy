import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import RelatedContent from './RelatedContent';
import ResourceCard from '../ResourceCard/ResourceCard';
import Button from '../Button/Button';

export default {
  title: 'Block/Related Content',
  component: RelatedContent,
  decorators: [withKnobs],
}

export const Playground = () => {
  return (
    <RelatedContent 
      title={text('title', 'Optional Related Content')}
      cardChildren={
        <>
          <ResourceCard 
            image="https://i.imgur.com/LLAbaZq.png" 
            meta="Optional Post Meta" 
            header="Continuous and always-on listening for actionable audience insights"
            paragraph="To drive the best experiences you need to continuously listen to your audience across the entire customer journey"
            buttonChildren={<Button type="ResourceCardButton">Read More</Button>}
          />
          <ResourceCard 
            image="https://i.imgur.com/LLAbaZq.png" 
            meta="Optional Post Meta" 
            header="Continuous and always-on listening for actionable audience insights"
            paragraph="To drive the best experiences you need to continuously listen to your audience across the entire customer journey"
            buttonChildren={<Button type="ResourceCardButton">Read More</Button>}
          />
          <ResourceCard 
            image="https://i.imgur.com/LLAbaZq.png" 
            meta="Optional Post Meta" 
            header="Continuous and always-on listening for actionable audience insights"
            paragraph="To drive the best experiences you need to continuously listen to your audience across the entire customer journey"
            buttonChildren={<Button type="ResourceCardButton">Read More</Button>}
          />
        </>
      }
    />
  )
}
