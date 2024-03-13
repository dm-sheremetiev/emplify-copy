import React, { ReactNode } from 'react';
import colours from '../../assets/colours';
import './CustomerStories.scss';

export type CustomerStoriesProps = {
  id?: string;
  title?: string;
  storiesChildren?: ReactNode;
  titleColor?: string;
  backgroundColor?: string;
}

const CustomerStories = (props: CustomerStoriesProps) => {
  return (
    <div className="emplifi-customer-stories" style={{ backgroundColor: props.backgroundColor || colours.abbey}}>
      <div className="emplifi-customer-stories__container">
        {
          props.title && 
          <div className="emplifi-customer-stories__title-container">
            <div className="typography typography--Headline2" style={{ color: props.titleColor || colours.white }} dangerouslySetInnerHTML={{ __html: props.title || "" }}></div>
          </div>
        }
        {props.storiesChildren && <div className="emplifi-customer-stories__stories grid grid-cols-1 lg:grid-cols-2 gap-4">{props.storiesChildren}</div>}
      </div>
    </div>
  )
}

export { CustomerStories }
export default CustomerStories;
