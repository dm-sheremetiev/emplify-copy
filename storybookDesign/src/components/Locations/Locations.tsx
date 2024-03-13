import React, { ReactNode } from 'react';
import './Locations.scss'
import Typography from '../Typography/Typography';

export type LocationsProps = {
  id?: string;
  name: string;
  address: string;
}

export type LocationsGroupProps = {
  id?: string;
  title: string;
  locationsChildren: ReactNode;
}

const Locations = (props: LocationsProps) => {
  const {name, address} = props

  return (
    <div className="locations-item">
      {name && <Typography type="BrandGuideH2" as="h3">{name}</Typography>}
      {address && <div className="locations-item__text-wrapper"><div className="typography typography--BrandGuideCopy" dangerouslySetInnerHTML={{ __html: props.address}}></div></div>}
    </div>
  )
}

const LocationsGroup = (props: LocationsGroupProps) => {
  const {title} = props
  return (
    <div className="locations__wrapper" id={props.id}>
      <div className="locations__inner">
        {title && <Typography type="Headline2" as="h2">{props.title}</Typography>}
        <div id={props.id} className="locations__group">{props.locationsChildren}</div>
      </div>
    </div>
  )
}

export {Locations, LocationsGroup}
export default Locations
