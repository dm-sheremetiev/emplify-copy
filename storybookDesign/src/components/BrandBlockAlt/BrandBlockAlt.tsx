import React from 'react';
import colours from '../../assets/colours';
import './BrandBlockAlt.scss';

export type BrandBlockAltProps = {
  id?: string;
  title?: string;
  items?: BrandBlockAltItemProps[];
  titleColor?: string;
  backgroundColor?: string;
};

export type BrandBlockAltItemProps = {
  id?: string;
  dataText?: string;
  dataSupText?: string;
  body?: string;
};

const BrandBlockAlt = (props: BrandBlockAltProps) => {
  return (
    <div className="emplifi-brand-block-alt" id={props.id} style={{ backgroundColor: props.backgroundColor || colours.abbey}}>
      <div className="emplifi-brand-block-alt__container">
        <div className="emplifi-brand-block-alt__title-container">
          <div className="typography typography--Headline2" style={{ color: props.titleColor || colours.white }} dangerouslySetInnerHTML={{ __html: props.title || "" }}></div>
        </div>
        {
          props.items && 
          <div className="emplifi-brand-block-alt__items">
            {props.items.map((item, index) => <BrandBlockAltItem key={index} id={item.id} dataText={item.dataText} dataSupText={item.dataSupText} body={item.body} />)}
          </div>
        }
      </div>
    </div>
  )
};

const BrandBlockAltItem = (props: BrandBlockAltItemProps) => {
  return (
    <div className="emplifi-brand-block-alt-item" id={props.id}>
      {props.dataText && <h2 className="emplifi-brand-block-alt-item__text">{props.dataText}<sup className="emplifi-brand-block-alt-item__sup-text">{props.dataSupText}</sup></h2>}
      {props.body && <p className="emplifi-brand-block-alt-item__body">{props.body}</p>}
    </div>
  )
};

export { BrandBlockAlt, BrandBlockAltItem }
export default BrandBlockAlt;