import React, { useState } from 'react';
import 'react-modal-video/scss/modal-video.scss';
import './VideoTakeOver.scss';
import ModalVideo from 'react-modal-video';

export type VideoTakeoverProps = {
  externalLink: string;
  imgSrc: string;
  iconPlay: string;
  allowFullScreen: boolean;
};

const VideoTakeover = ({ externalLink, allowFullScreen = true, imgSrc, iconPlay }: VideoTakeoverProps) => {
  const getVimeoId = (url: string) => {
    const match = /vimeo.*\/(\d+)/i.exec(url);

    if (match) {
      return match[1];
    }
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <ModalVideo
        key={`${getVimeoId(externalLink)}`}
        channel="vimeo"
        isOpen={isModalOpen}
        allowFullScreen={allowFullScreen}
        videoId={`${getVimeoId(externalLink)}`}
        onClose={() => setIsModalOpen(false)}
      />
      <div
        className="video-takeover__wrapper"
        style={{ backgroundImage: `url(${imgSrc})` }}
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <div className="video-takeover__button" style={{ backgroundImage: `url(${iconPlay})` }} />
      </div>
    </>
  );
};

export default VideoTakeover;
