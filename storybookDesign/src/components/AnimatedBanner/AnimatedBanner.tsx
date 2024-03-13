import React, { useRef, useEffect, FC, ReactNode } from 'react';
import './AnimatedBanner.scss';
// import SvgBackground from "./heart-clouds.svg";
import { cloudSVGAnimation, imageAnimation, textAnimation, scrollButton } from './animation';
export type AnimatedBannerProps = React.HTMLAttributes<HTMLDivElement> & {
  id?: string;
  className?: string;
  animationType?: string;
  bannerType?: string;
  buttonType?: string;
  headlineLeft?: string;
  headlineRight?: string;
  title?: string;
  subTitle?: string;
  body?: string;
  imgSrc?: string;
  imgAlt?: string;
  imgTitle?: string;
  imgWidth?: number;
  imgHeight?: number;
  buttonArr?: {
    href: string;
    text: string;
    type: string;
    target?: string;
  }[];
  buttonChildren?: ReactNode;
};

const AnimatedBanner: FC<AnimatedBannerProps> = (props: AnimatedBannerProps) => {
  const {
    animationType,
    bannerType,
    headlineLeft,
    headlineRight,
    title,
    subTitle,
    imgSrc,
    imgAlt,
    imgTitle,
    imgWidth,
    imgHeight,
    buttonArr,
    buttonChildren
  } = props;
  const HTMLProps = { ...props } as any;
  delete HTMLProps.animationType;
  delete HTMLProps.bannerType;
  delete HTMLProps.headlineLeft;
  delete HTMLProps.headlineRight;
  delete HTMLProps.title;
  delete HTMLProps.subTitle;
  delete HTMLProps.buttonChildren;
  delete HTMLProps.imgSrc;
  delete HTMLProps.imgAlt;
  delete HTMLProps.imgTitle;
  delete HTMLProps.imgWidth;
  delete HTMLProps.imgHeight;
  delete HTMLProps.buttonArr;

  // Class variations
  // Set defaults
  let aType = animationType ? animationType : 'pull';
  let animationClass = 'emplifi-animated-banner--animation-' + aType;
  let bannerClass = bannerType ? 'emplifi-animated-banner--' + bannerType : '';
  let hasImageClass = imgSrc ? 'emplifi-animated-banner--has-image' : '';
  let buttonsOnlyClass = !title && !subTitle && buttonArr?.length && buttonArr[0].type !== 'null' ? 'emplifi-animated-banner--buttons-only' : '';
  //Animation
  //Create a variable for our dom nodes
  let banner = useRef<HTMLDivElement>(null);
  let headlines = useRef<HTMLDivElement>(null);
  let cloudSVG = useRef<SVGSVGElement>(null);
  let bannerImage = useRef<HTMLImageElement>(null);
  const buttonList = buttonArr?.map((el: any, i) => {
    if (el.type == 'scroll') {
      return (
        <button key={i} data-scroll="scroll" aria-label="Scroll to next element" className={'emplifi-button emplifi-button--' + el.type}>
          {el.text}
        </button>
      );
    } else if (el.type == 'null') {
      return null;
    } else {
      return (
        <a
          key={i}
          href={el.href}
          target={el.target ? el.target : undefined}
          rel={el.target === '_blank' ? 'noopener noreferrer' : undefined}
          className={'emplifi-button emplifi-button--' + el.type}
        >
          {el.text}
        </a>
      );
    }
  });

  useEffect(() => {
    imageAnimation(bannerImage.current, banner.current);
    cloudSVGAnimation(cloudSVG.current, banner.current);
    textAnimation(headlines.current, banner.current, aType);
    scrollButton(banner.current);
  }, []);
  return (
    <div
      {...HTMLProps}
      id={props.id}
      ref={banner}
      className={['emplifi-animated-banner', props?.className, animationClass, bannerClass, hasImageClass, buttonsOnlyClass].join(' ')}
    >
      <div className="emplifi-animated-banner__canvas">
        <div className="emplifi-animated-banner__headline" ref={headlines}>
          <span role="presentation" className="emplifi-animated-banner__arrow emplifi-animated-banner__arrow--left" />
          <span role="presentation" className="emplifi-animated-banner__arrow emplifi-animated-banner__arrow--right" />
          {headlineLeft?.length && (
            <span className="emplifi-animated-banner__headline-left" dangerouslySetInnerHTML={{ __html: headlineLeft || '' }} />
          )}
          <span className="emplifi-animated-banner__arrow-spacer" />
          {headlineRight?.length && (
            <span className="emplifi-animated-banner__headline-right" dangerouslySetInnerHTML={{ __html: headlineRight || '' }} />
          )}
        </div>

        <svg
          ref={cloudSVG}
          className="emplifi-animated-banner__background"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 815.2 455.6"
          enableBackground="new 0 0 815.2 455.6;"
          xmlSpace="preserve"
        >
          <path
            opacity="0.4"
            fill="#49C7ED"
            d="M678.3,147.5L678.3,147.5c0-9.2-7.6-16.8-16.8-16.8H658v-3.5c0-9.2-7.6-16.8-16.8-16.8h0
	c-9.2,0-16.8,7.6-16.8,16.8v3.5l0,33.6H658v0h3.5C670.7,164.3,678.3,156.8,678.3,147.5z"
          />
          <path
            opacity="0.2"
            fill="#49C7ED"
            d="M220.6,181.1h-6v-6c0-16-13.1-29-29-29h0c-16,0-29,13.1-29,29v6h-6c-16,0-29,13.1-29,29
	v0c0,16,13.1,29,29,29h6v6c0,2.4,0.3,4.7,0.9,7c3.1,12.6,14.6,22,28.1,22h0c16,0,29-13.1,29-29v-6h6c16,0,29-13.1,29-29v0
	C249.6,194.2,236.6,181.1,220.6,181.1z"
          />

          <polygon opacity="0.6" fill="#49C7ED" points="57.9,325.1 0,325.1 0,380.7 0,383 0,389 0,397 14,383 57.9,383 	" />
          <path
            opacity="0.6"
            fill="#49C7ED"
            d="M815.2,455.6v-61.2h0v-9.2c0-24.4-20-44.4-44.4-44.4h0c-24.4,0-44.4,20-44.4,44.4v9.2
	h-9.2c-24.4,0-44.4,20-44.4,44.4v0c0,5.9,1.2,11.6,3.3,16.8H815.2z"
          />
          <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="483.2357" y1="296.9269" x2="638.7201" y2="167.9456">
            <stop offset="1.075149e-02" stopColor="#49C7ED" stopOpacity="0.1" />
            <stop offset="1" stopColor="#49C7ED" />
          </linearGradient>
          <path
            opacity="0.35"
            fill="url(#SVGID_1_)"
            d="M719.1,455.6c43.7-25.9,73.1-73.6,73.1-127.8v0c0-81.7-66.9-148.6-148.6-148.6
	H613v-30.6C613,66.9,546.2,0,464.5,0h0c-81.7,0-148.6,66.9-148.6,148.6v30.6l0,276.4H719.1z"
          />
          <linearGradient
            id="SVGID_00000066492111017620875280000000984742525362855091_"
            gradientUnits="userSpaceOnUse"
            x1="244.0006"
            y1="392.652"
            x2="153.0069"
            y2="306.0755"
          >
            <stop offset="0" stopColor="#49C7ED" stopOpacity="0.1" />
            <stop offset="1" stopColor="#49C7ED" />
          </linearGradient>
          <path
            opacity="0.35"
            fill="url(#SVGID_00000066492111017620875280000000984742525362855091_)"
            d="M354.1,455.6l0-143h0v-20.2
	c0-53.9-44.1-98-98-98h0c-53.9,0-98,44.1-98,98v20.2h-20.2c-53.9,0-98,44.1-98,98v0c0,16.2,4,31.5,11,44.9H354.1z"
          />
        </svg>
        {imgSrc && (
          <picture className="emplifi-animated-banner__image">
            <img src={imgSrc} alt={imgAlt || imgTitle} title={imgTitle} width={imgWidth} height={imgHeight} ref={bannerImage} />
          </picture>
        )}
      </div>
      {(title || subTitle || (buttonList && buttonList?.length > 0)) && (
        <div className={`emplifi-animated-banner__content`}>
          {title && <div className="emplifi-animated-banner__title" dangerouslySetInnerHTML={{ __html: title || '' }} />}
          {subTitle && <div className="emplifi-animated-banner__sub-title" dangerouslySetInnerHTML={{ __html: subTitle || '' }} />}

          <div className="emplifi-animated-banner__action-group">
            {/*{buttonChildren}*/}
            {buttonList}
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimatedBanner;
