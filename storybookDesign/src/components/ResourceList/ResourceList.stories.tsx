import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import ResourceList from './ResourceList';
import Button from '../Button/Button';
import ResourceCard, { ResourceCardGroup } from '../ResourceCard/ResourceCard';
import ResourceFeatureCard from '../ResourceFeaturedCard/ResourceFeatureCard';

export default {
  title: 'Card/Resource List Block',
  component: ResourceList,
  decorators: [withKnobs],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

export const List = () => {
  return (
    <ResourceList 
      itemsChildren={
        <>
          <ResourceCardGroup>
            <ResourceCard   
              image="https://i.imgur.com/LLAbaZq.png"
              meta="Optional Post Meta "
              header="Continuous and always-on listening for actionable audience insights"
              paragraph="To drive the best experiences you need to continuously listen to your audience across the entire customer journey."
              buttonChildren={<Button type="ResourceCardButton">Read More</Button>} 
            />
            <ResourceCard   
              image="https://i.imgur.com/LLAbaZq.png"
              meta="Optional Post Meta "
              header="Continuous and always-on listening for actionable audience insights"
              paragraph="To drive the best experiences you need to continuously listen to your audience across the entire customer journey. To drive the best experiences you need to continuously listen to your audience across the entire customer journey."
              buttonChildren={<Button type="ResourceCardButton">Read More</Button>} 
            />
            <ResourceCard   
              image="https://i.imgur.com/LLAbaZq.png"
              meta="Optional Post Meta "
              header="Continuous and always-on listening for actionable audience insights"
              paragraph="To drive the best experiences you need to continuously listen to your audience across the entire customer journey. To drive the best experiences you need to continuously listen to your audience across the entire customer journey. To drive the best experiences you need to continuously listen to your audience across the entire customer journey."
              buttonChildren={<Button type="ResourceCardButton">Read More</Button>} 
            />
          </ResourceCardGroup>
          <ResourceCardGroup>
            <ResourceFeatureCard 
              variations="1"
              position="left"
              imgSrc="https://via.placeholder.com/303x320"
              imgSrcDesktop="https://via.placeholder.com/596x173"
              buttonChildren={<Button type="ProductPrimary">Read More</Button>}
            />
            <ResourceCard   
              image="https://i.imgur.com/LLAbaZq.png"
              meta="Optional Post Meta "
              header="Continuous and always-on listening for actionable audience insights"
              paragraph="To drive the best experiences you need to continuously listen to your audience across the entire customer journey. To drive the best experiences you need to continuously listen to your audience across the entire customer journey."
              buttonChildren={<Button type="ResourceCardButton">Read More</Button>} 
            />
          </ResourceCardGroup>  
        </>
      }
      buttonChildren={<Button type="LoadMore">Load More Articles {'>'}</Button>}
    ></ResourceList>
  )
};

export const ListWithOutButton = () => {
  return (
    <ResourceList
      itemsChildren={
        <>
          <ResourceCardGroup>
            <ResourceCard   
              image="https://i.imgur.com/LLAbaZq.png"
              meta="Optional Post Meta "
              header="Continuous and always-on listening for actionable audience insights"
              paragraph="To drive the best experiences you need to continuously listen to your audience across the entire customer journey."
              buttonChildren={<Button type="ResourceCardButton">Read More</Button>} 
            />
            <ResourceCard   
              image="https://i.imgur.com/LLAbaZq.png"
              meta="Optional Post Meta "
              header="Continuous and always-on listening for actionable audience insights"
              paragraph="To drive the best experiences you need to continuously listen to your audience across the entire customer journey. To drive the best experiences you need to continuously listen to your audience across the entire customer journey."
              buttonChildren={<Button type="ResourceCardButton">Read More</Button>} 
            />
            <ResourceCard   
              image="https://i.imgur.com/LLAbaZq.png"
              meta="Optional Post Meta "
              header="Continuous and always-on listening for actionable audience insights"
              paragraph="To drive the best experiences you need to continuously listen to your audience across the entire customer journey. To drive the best experiences you need to continuously listen to your audience across the entire customer journey. To drive the best experiences you need to continuously listen to your audience across the entire customer journey."
              buttonChildren={<Button type="ResourceCardButton">Read More</Button>} 
            />
          </ResourceCardGroup>
          <ResourceCardGroup>
            <ResourceFeatureCard 
              variations="1"
              position="left"
              imgSrc="https://via.placeholder.com/303x320"
              imgSrcDesktop="https://via.placeholder.com/596x173"
              buttonChildren={<Button type="ProductPrimary">Read More</Button>}
            />
            <ResourceCard   
              image="https://i.imgur.com/LLAbaZq.png"
              meta="Optional Post Meta "
              header="Continuous and always-on listening for actionable audience insights"
              paragraph="To drive the best experiences you need to continuously listen to your audience across the entire customer journey. To drive the best experiences you need to continuously listen to your audience across the entire customer journey."
              buttonChildren={<Button type="ResourceCardButton">Read More</Button>} 
            />
          </ResourceCardGroup>  
        </>
      }></ResourceList>
  )
};