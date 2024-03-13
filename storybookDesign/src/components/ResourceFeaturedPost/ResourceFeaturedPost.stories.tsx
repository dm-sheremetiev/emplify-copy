import { select, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import Button from '../Button/Button';
import { ResourceFeaturedPost } from './ResourceFeaturedPost';

export default {
  title: 'Card/Resource Featured Post',
  component: ResourceFeaturedPost,
  decorators: [withKnobs],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
}

export const Playground = () => {
  return (
    <ResourceFeaturedPost  
      label="Optional"
      imgSrc={select('imgSrc', ['https://via.placeholder.com/303x320', 'https://via.placeholder.com/303x320'], 'https://via.placeholder.com/303x320')}
      imgSrcDesktop={select('imgSrcDesktop', ['https://via.placeholder.com/625x417', 'https://via.placeholder.com/625x417'], 'https://via.placeholder.com/625x417')}
      imgAlt={text('imgAlt', 'Placeholder Alt')}
      imgTitle={text('imgTitle', 'Placeholder Title')}
      meta={text('meta', 'Optional Post Meta')}
      title={text('title', 'Featured post headline - What do people really expect')}
      paragraph={text('paragraph', '75% of consumers say that businesses don’t meet their customer service expectations. What are they exactly? We surveyed the modern consumer to find out.')}
      buttonChildren={
        <Button type="ProductPrimary">{text('Button Text', 'Read More')}</Button>
      }
    />
  )
}

export const Default = () => {
  return (
    <ResourceFeaturedPost  
      label="Optional"
      imgSrc="https://via.placeholder.com/303x320"
      imgSrcDesktop='https://via.placeholder.com/625x417'
      imgAlt='Placeholder Alt'
      imgTitle='Placeholder Title'
      meta='Optional Post Meta'
      title='Featured post headline - What do people really expect'
      paragraph='75% of consumers say that businesses don’t meet their customer service expectations. What are they exactly? We surveyed the modern consumer to find out.'
      buttonChildren={
        <Button type="ProductPrimary">{text('Button Text', 'Read More')}</Button>
      }
    />
  )
}
