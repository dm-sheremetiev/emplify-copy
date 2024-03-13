import React from 'react';
import HeroBannerAlt from './HeroBannerAlt';
import HeroBannerAltImage from '../../assets/images/hero-banner-alt.png';
import HeroBannerAltImageOpt2 from '../../assets/images/couple-on-sholders.jpg';
import HeroBannerAltImageOpt3 from '../../assets/images/woman-on-skateboard.jpg';

export default {
  title: 'Hero / Hero Banner Alt',
  component: HeroBannerAlt,
  argTypes: {
    imageSrc: {
      options: [HeroBannerAltImage, HeroBannerAltImageOpt2, HeroBannerAltImageOpt3],
      control: { type: 'select' }
    },
    theme: {
      options: ['dark', 'medium', 'light', 'none', null],
      control: { type: 'select' }
    },
    orientation: {
      options: ['left', 'center', 'right'],
      control: { type: 'select' }
    },
    type: {
      options: ['none', 'full', 'tall', 'half', 'short', null],
      control: { type: 'select' }
    },
    backgroundColor: {
      table: {
        disable: true
      }
    },
    imageDesktopSrc: {
      table: {
        disable: true
      }
    },
    subTitleColor: {
      table: {
        disable: true
      }
    },
    titleColor: {
      table: {
        disable: true
      }
    }
  }
};

HeroBannerAlt.defaultProps = {
  title: '<h1>The unified CX platform top brands count on to elevate experiences</h1>',
  subTitle:
    'The unified CX platform top brands count on to elevate experiences. The unified CX platform top brands count on to elevate experiences. The unified CX platform top brands count on to elevate experiences.',
  image: {
    alt: 'Hero',
    title: 'Hero',
    src: HeroBannerAltImageOpt2
  },
  theme: 'none',
  titleColor: '#333',
  orientation: 'left',
  subTitleColor: '#333',
  backgroundColor: '#fff',
  eyebrowHeadlineColor: '#333',
  boxBackgroundColor: 'rgba(255,255,255,0.7)',
  bannerType: 'solid',
  boxBackgroundType: 'half',
  backgroundSize: 'cover'
};
