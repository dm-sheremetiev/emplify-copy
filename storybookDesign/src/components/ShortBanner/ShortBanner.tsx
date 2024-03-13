import React, { ReactNode } from 'react';
import Typography from '../Typography/Typography';
import './ShortBanner.scss';
import { imageContentfulTransformUrl } from '../../utils/contenful-helper-functions';

export type ShortBannerProps = {
  id?: string;
  type: string;
  title?: string;
  paragraph?: string;
  buttonChildren?: ReactNode | string;
  className?: string;
  imgSrc?: string;
  imgAlt?: string;
  imgTitle?: string;
};

const ShortBanner = (props: ShortBannerProps) => {
  return (
    <div id={props.id} className={['emplifi-short-header', 'emplifi-short-header--type-' + props.type, props?.className].join(' ')}>
      <div className="emplifi-short-header__container">
        <div className="emplifi-short-header__info">
          {props.title && <div className="typography typography--Headline1" dangerouslySetInnerHTML={{ __html: props.title || '' }}></div>}
          {props.paragraph && (
            <Typography type="Body1" as="p">
              {props.paragraph}
            </Typography>
          )}
          {props.buttonChildren && <>{props.buttonChildren}</>}
        </div>
        {props.imgSrc && (
          <div className="emplifi-short-header__image-container">
            <img
              className="emplifi-short-header__image"
              src={imageContentfulTransformUrl(props.imgSrc)}
              alt={props.imgAlt || props.imgTitle}
              title={props.imgTitle}
              loading="lazy"
              width="426px"
              height="255px"
            />
          </div>
        )}
      </div>
    </div>
  );
};

ShortBanner.defaultProps = {
  type: 'Resource'
};

export { ShortBanner };
export default ShortBanner;
