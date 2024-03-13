import React, { ReactNode } from 'react';
import './Awards.scss'

export type AwardsProps = {
  id?: string;
  title: string;
  images: AwardsImageProps[];
}

export type AwardsGroupProps = {
  id?: string;
  title: string;
  awardsChildren: ReactNode;
}

export type AwardsImageProps = {
  imageSrc?: string;
  imageAlt?: string;
  imageTitle?: string;
}

const Awards = (props: AwardsProps) => {
  const {title} = props
  const renderLogos = () => {
    if (props.images) {
      return (
        <div className="awards-item__images">
          {props.images.map((image, index) => <AwardsImage key={index} imageSrc={image.imageSrc} imageAlt={image.imageAlt} />)}
        </div>
      )
    }
  }

  return (
    <div className="awards-item">
      {title && <div className="typography typography--Headline3 awards-item__title" dangerouslySetInnerHTML={{ __html: props.title || "" }}></div>}
      {renderLogos()}
    </div>
  )
}

const AwardsImage = (props: AwardsImageProps) => {
  const {imageSrc, imageAlt, imageTitle} = props
  return (
    <div className="awards-item__image-holder">
      <img src={imageSrc} alt={imageAlt} loading="lazy" width="97px" height="109px"  />
      {imageTitle && <p className="awards-item__image-title">{imageTitle}</p>}
    </div>
  )
}

const AwardsGroup = (props: AwardsGroupProps) => {
  const {title} = props
  return (
    <div className="awards__wrapper" id={props.id}>
      <div className="awards__inner">
        {title && <div className="typography typography--Headline1 awards__title" dangerouslySetInnerHTML={{ __html: props.title || "" }}></div>}
        <div id={props.id} className="awards__group">{props.awardsChildren}</div>
      </div>
    </div>
  )
}

export {Awards, AwardsGroup, AwardsImage}
export default Awards
