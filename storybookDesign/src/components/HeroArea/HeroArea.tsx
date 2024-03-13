import React, { ReactNode } from 'react';
import './HeroArea.scss';
import HeroAreaMobileImage from '../../assets/images/hero-area-mobile.png';
import HeroAreaDesktopImage from '../../assets/images/hero-area-desktop.png';
import Typography from '../Typography/Typography';
import { imageContentfulTransformUrl } from '../../utils/contenful-helper-functions';

export type HeroAreaProps = {
  id?: string;
  type?: 'default' | 'default-alt' | 'campaign';
  imgSrc?: string;
  imgAlt?: string;
  imgTitle?: string;
  desktopImgSrc?: string;
  title?: string;
  body?: string;
  position: 'left' | 'right';
  buttonChildren?: ReactNode;
};

const HeroArea = (props: HeroAreaProps) => {
  const classes = [
    'emplifi-hero-area',
    props.type ? `emplifi-hero-area--${props.type}` : null,
    props.position ? `emplifi-hero-area--position-${props.position}` : null,
  ];
  const classesString = classes.filter((i) => i !== null).join(' ');

  return (
    <section id={props.id} className={classesString}>
      <div className="emplifi-hero-area__container">
        <HeroAreaImage {...props} />
        <HeroAreaInfo {...props} />
      </div>
    </section>
  );
};

const HeroAreaImage = (props: HeroAreaProps) => {
  return (
    <div id={props.id} className="emplifi-hero-area__image-container">
      <img
        className="emplifi-hero-area__image emplifi-hero-area__image--mobile"
        src={imageContentfulTransformUrl(props.imgSrc)}
        loading="lazy"
        alt={props.imgAlt}
        title={props.imgTitle}
        width="135px"
        height="28px"
      />
      <img
        className="emplifi-hero-area__image emplifi-hero-area__image--desktop"
        src={imageContentfulTransformUrl(props.desktopImgSrc)}
        loading="lazy"
        alt={props.imgAlt}
        title={props.imgTitle}
        width="135px"
        height="28px"
      />
    </div>
  );
};

const HeroAreaInfo = (props: HeroAreaProps) => {
  return (
    <div id={props.id} className="emplifi-hero-area__content">
      <div className="emplifi-hero-area__content-container">
        {props.title && <div className="typography typography--Headline2" dangerouslySetInnerHTML={{ __html: props.title || '' }} />}
        {props.body && <Typography type="Body1">{props.body}</Typography>}
        {props.buttonChildren}
      </div>
    </div>
  );
};

HeroArea.defaultProps = {
  type: 'default',
  imgSrc: HeroAreaMobileImage,
  imgAlt: 'Hero Area Default Image',
  imgTitle: 'Hero Area Image Title',
  desktopImgSrc: HeroAreaDesktopImage,
  title: 'Continuous and always-on listening for actionable audience insights',
  body: 'To drive the best experiences you need to continuously listen to your audience across the entire customer journey. With Socialbakers, you can instantly use data from every touchpoint to boost customer experiences at every stage.',
  position: 'left',
};

export { HeroArea, HeroAreaInfo, HeroAreaImage };
export default HeroArea;
