import { VideoTakeover } from '../../../storybookBuild/index';
import React from 'react';

// Interfaces
import { UiVideoTakeover } from '@/interfaces/blocks';

export function UiVideoTakeoverComp(props: { block: UiVideoTakeover }): JSX.Element {
  const { block } = props;

  return (
    <VideoTakeover
      allowFullScreen
      externalLink={block.videoSourceUrl}
      imgSrc={block.backgroundCoverImage?.url}
      iconPlay={block.iconPlay?.url || '/images/icon-play.svg'}
    />
  );
}
