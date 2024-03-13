import React, { ReactNode } from 'react';
import './RelatedContent.scss';

export type RelatedContentProps = {
  id?: string;
  title?: string;
  cardChildren?: ReactNode | string;
}

const RelatedContent = (props: RelatedContentProps) => {
  return (
    <div id={props.id} className="emplifi-related-content flex flex-col justify-center items-center">
      {/* <div className="emplifi-related-content__cloud"></div> */}
      {props.title && <div className="typography typography--Headline3" dangerouslySetInnerHTML={{ __html: props.title || "" }}></div>}
      {props.cardChildren && <div className="emplifi-related-content__container grid grid-cols-1 md:grid-cols-3 md:justify-items-stretch md:gap-4">{props.cardChildren}</div>}
    </div>
  )
}

export { RelatedContent }
export default RelatedContent;
