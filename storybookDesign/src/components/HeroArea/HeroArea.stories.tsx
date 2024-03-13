//@ts-nocheck
import React from "react";
import HeroArea from './HeroArea';

import HeroAreaMobileImage from '../../assets/images/hero-area-mobile.png';
import HeroAreaDesktopImage from '../../assets/images/hero-area-desktop.png';

import HeroAreaAltMobileImage from '../../assets/images/hero-area-default-alt-mobile.png';
import HeroAreaAltDesktopImage from '../../assets/images/hero-area-default-alt-desktop.png';
import { withKnobs, text, select } from "@storybook/addon-knobs";
import Button from "../Button/Button";

export default {
  title: "Hero/Hero Area",
  component: HeroArea,
  decorators: [withKnobs],
};

export const Playground = () => {
  return (
    <HeroArea
      type={select('type', ['default', 'default-alt'], 'default')}
      position={select('position', ['left', 'right'], 'left')}
      imgSrc={HeroAreaMobileImage} 
      imgAlt={text('imgAlt', 'Hero Area Default Image')}
      imgTitle={text('imgTitle', 'Hero Area Image Title')}
      desktopImgSrc={HeroAreaDesktopImage}
      title={text('title', 'Continuous and always-on listening for actionable audience insights')}
      body={text('body', 'To drive the best experiences you need to continuously listen to your audience across the entire customer journey. With Socialbakers, you can instantly use data from every touchpoint to boost customer experiences at every stage.')}
      buttonChildren={
        <Button type="ProductPrimary">Get A Demo</Button>
      }
    />
  )
}

export const defaultHeroArea = () => {
  return (
    <HeroArea
      type='default'
      position='left'
      imgSrc={HeroAreaMobileImage}
      imgAlt='Hero Area Default Image'
      imgTitle="Hero Area Image Title"
      desktopImgSrc={HeroAreaDesktopImage}
      title='Continuous and always-on listening for actionable audience insights'
      body='To drive the best experiences you need to continuously listen to your audience across the entire customer journey. With Socialbakers, you can instantly use data from every touchpoint to boost customer experiences at every stage.'
      buttonChildren={
        <Button type="ProductPrimary">Get A Demo</Button>
      }
    />
  )
}

export const defaultHeroAreaAltLeft = () => {
  return (
    <HeroArea
      type='default-alt'
      position='left'
      imgSrc={HeroAreaAltMobileImage}
      imgAlt='Hero Area Default Image'
      imgTitle="Hero Area Image Title"
      desktopImgSrc={HeroAreaAltDesktopImage}
      title='Continuous and always-on listening for actionable audience insights'
      body='To drive the best experiences you need to continuously listen to your audience across the entire customer journey. With Socialbakers, you can instantly use data from every touchpoint to boost customer experiences at every stage.'
      buttonChildren={
        <Button type="ProductPrimary">Get A Demo</Button>
      }
    />
  )
}

export const defaultHeroAreaAltRight = () => {
  return (
    <HeroArea
      type='default-alt'
      position='right'
      imgSrc={HeroAreaAltMobileImage}
      imgAlt='Hero Area Default Image'
      imgTitle="Hero Area Image Title"
      desktopImgSrc={HeroAreaAltDesktopImage}
      title='Continuous and always-on listening for actionable audience insights'
      body='To drive the best experiences you need to continuously listen to your audience across the entire customer journey. With Socialbakers, you can instantly use data from every touchpoint to boost customer experiences at every stage.'
      buttonChildren={
        <Button type="ProductPrimary">Get A Demo</Button>
      }
    />
  )
}
