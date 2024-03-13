import React, { ReactNode } from 'react';
import './SecondaryContentArea.scss';
import Typograhpy from '../Typography/Typography';

export type SecondaryContentAreaProps = {
  id?: string;
  imgSrc?: string;
  imgSrcDesktop?: string;
  imgAlt?: string;
  imgTitle?: string;

  title?: string;
  paragraph?: string;
  buttonChildren?: ReactNode | string;
};

const SecondaryContentArea = (props: SecondaryContentAreaProps) => {
  const { imgSrc, imgSrcDesktop, imgAlt, imgTitle, title, paragraph, buttonChildren } = props;
  return (
    <div id={props.id} className="emplifi-secondary-content-area-container flex justify-center">
      <div className="emplifi-secondary-content-area">
        <div className="emplifi-secondary-content-area__image-container">
          <img
            className="emplifi-secondary-content-area__image emplifi-secondary-content-area__image--mobile"
            src={imgSrc}
            alt={imgAlt || imgTitle}
            title={imgTitle}
            width="135px"
            height="28px"
          />
          <img
            className="emplifi-secondary-content-area__image emplifi-secondary-content-area__image--desktop"
            src={imgSrcDesktop}
            alt={imgAlt || imgTitle}
            title={imgTitle}
            width="135px"
            height="28px"
          />
        </div>
        <div className="emplifi-secondary-content-area__info">
          {title && <div className="typography typography--Headline3" dangerouslySetInnerHTML={{ __html: title || '' }}></div>}
          {paragraph && <Typograhpy as="div" type="Body1" dangerouslySetInnerHTML={{ __html: paragraph || '' }}></Typograhpy>}
          {buttonChildren && <>{buttonChildren}</>}
        </div>
      </div>
    </div>
  );
};

SecondaryContentArea.defaultProps = {
  imgSrc: 'https://via.placeholder.com/303x320',
  imgSrcDesktop: 'https://via.placeholder.com/423x530',
  imgAlt: 'Placeholder Alt',
  imgTitle: 'Placeholder Title'
};

export { SecondaryContentArea };
export default SecondaryContentArea;
