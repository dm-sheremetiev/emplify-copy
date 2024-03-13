import 'react-modal-video/scss/modal-video.scss';
import './VideoTakeOver.scss';
export type VideoTakeoverProps = {
    externalLink: string;
    imgSrc: string;
    iconPlay: string;
    allowFullScreen: boolean;
};
declare const VideoTakeover: ({ externalLink, allowFullScreen, imgSrc, iconPlay }: VideoTakeoverProps) => JSX.Element;
export default VideoTakeover;
