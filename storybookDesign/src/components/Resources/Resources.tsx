import React, { ReactNode } from 'react';
import colours from '../../assets/colours';
import './Resources.scss';

export type ResourcesProps = {
  id?: string;
  title?: string;
  titleColor?: string;
  cardsChildren?: ReactNode;
  backgroundColor?: string;
  layout?: 'left' | 'center';
  type?: string;
};

const Resources = ({ id, title, titleColor, cardsChildren, backgroundColor, type, layout }: ResourcesProps) => {
  let layoutClass = layout ? 'emplifi-resources__' + layout : null;
  let typeClass = type ? 'emplifi-resources--' + type : null;
  return (
    <div className={['emplifi-resources', layoutClass, typeClass].join(' ')} style={{ backgroundColor: backgroundColor || colours.gallery }}>
      <div className="emplifi-resources__container">
        {title && (
          <div
            className="typography typography--Headline2"
            style={{ color: titleColor || colours.abbey }}
            dangerouslySetInnerHTML={{ __html: title || '' }}
          />
        )}
        {cardsChildren && <div className={`emplifi-resources__list emplifi-resources__list--${layout}`}>{cardsChildren}</div>}
      </div>
    </div>
  );
};

export default Resources;
