import React, { ReactNode } from 'react';
import './ResourceList.scss';

export type ResourceListProps = {
  id?: string;
  itemsChildren?: ReactNode;
  buttonChildren?: ReactNode;
}

const ResourceList = (props: ResourceListProps) => {
  return (
    <div id={props.id} className="resource-list">
      {props.itemsChildren && <div className="resource-list__container">{props.itemsChildren}</div>}
      {props.buttonChildren && <div className="resource-list__button-container">{props.buttonChildren}</div>}
    </div>
  )
}

export { ResourceList};
export default ResourceList;
