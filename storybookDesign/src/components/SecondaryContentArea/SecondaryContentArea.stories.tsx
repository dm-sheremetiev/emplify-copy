import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import Button from '../Button/Button';
import { SecondaryContentArea } from './SecondaryContentArea';

export default {
  title: 'Article/Secondary Content Area',
  component: SecondaryContentArea,
  decorators: [withKnobs],
}

export const Playground = () => {
  return (
    <SecondaryContentArea
      imgSrc="https://via.placeholder.com/303x320'"
      imgSrcDesktop="https://via.placeholder.com/423x530"
      imgAlt="Placeholder Alt"
      imgTitle="Placeholder Title"
      title="Optional CTA/Secondary Content area"
      paragraph="<p>A seasoned executive, Mark brings more than 25 years of experience in executive roles with high-growth SaaS cloud companies in the areas of digital marketing, content management, customer experience (CX), and data platforms. Mark has a proven track record of delivering breakout performance at various B2B technology market leaders due to his particular expertise in strategy development, operational excellence and Go-to-Market transformation.</p><p>A seasoned executive, Mark brings more than 25 years of experience in executive roles with high-growth SaaS cloud companies in the areas of digital marketing, content management, customer experience (CX), and data platforms. Mark has a proven track record of delivering breakout performance at various B2B technology market leaders due to his particular expertise in strategy development, operational excellence and Go-to-Market transformation.</p><p>A seasoned executive, Mark brings more than 25 years of experience in executive roles with high-growth SaaS cloud companies in the areas of digital marketing, content management, customer experience (CX), and data platforms. Mark has a proven track record of delivering breakout performance at various B2B technology market leaders due to his particular expertise in strategy development, operational excellence and Go-to-Market transformation.</p><p>A seasoned executive, Mark brings more than 25 years of experience in executive roles with high-growth SaaS cloud companies in the areas of digital marketing, content management, customer experience (CX), and data platforms. Mark has a proven track record of delivering breakout performance at various B2B technology market leaders due to his particular expertise in strategy development, operational excellence and Go-to-Market transformation.</p><p>A seasoned executive, Mark brings more than 25 years of experience in executive roles with high-growth SaaS cloud companies in the areas of digital marketing, content management, customer experience (CX), and data platforms. Mark has a proven track record of delivering breakout performance at various B2B technology market leaders due to his particular expertise in strategy development, operational excellence and Go-to-Market transformation.</p>" 
      buttonChildren={
        <Button type="ProductPrimary">Hello World</Button>
      }
    />
  )
}
