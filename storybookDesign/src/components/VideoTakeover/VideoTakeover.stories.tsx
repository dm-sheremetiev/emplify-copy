import React from 'react';
import VideoTakeover from './VideoTakeover';
import BgImage from '../../assets/images/couple-on-sholders.jpg';
import Icon from '../../assets/images/icon-play.svg'
import {
  withKnobs,
} from "@storybook/addon-knobs";

export default {
  title: 'Video Takeover/Video Takeover',
  decorators: [withKnobs],
  component: VideoTakeover
};

export const Playground = () => {
  return (
    <VideoTakeover externalLink='https://player.vimeo.com/video/656213803' imgSrc={BgImage} iconPlay={Icon}/>
  )
}


