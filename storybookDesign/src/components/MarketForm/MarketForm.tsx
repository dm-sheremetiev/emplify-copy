import React, { ReactNode } from 'react';
import './MarketForm.scss';

export type MarketFormProps = {
  id?: string;
  type: 'default' | 'alt' | 'article';
  title?: string;
  subTitle?: string;
  formChildren?: ReactNode | string;
  backgroundColor?: string;
  textColorTitle?: string;
  textColorSubTitle?: string;
};

const MarketForm = (props: MarketFormProps) => {
  return (
    <div id={props.id} style={{ backgroundColor: props.backgroundColor }} className={`emplifi-market-form emplifi-market-form--type-${props.type}`}>
      <div className="emplifi-market-form__container">
        {(props.title || props.subTitle) && (
          <div className="emplifi-market-form__header">
            {props.title && (
              <div
                style={{ color: props.textColorTitle || '' }}
                className="typography typography--Headline1"
                dangerouslySetInnerHTML={{ __html: props.title || '' }}
              />
            )}
            {props.subTitle && (
              <div
                style={{ color: props.textColorSubTitle || '' }}
                className="typography typography--Headline2"
                dangerouslySetInnerHTML={{ __html: props.subTitle || '' }}
              />
            )}
          </div>
        )}
        {props.formChildren && <div className="emplifi-market-form__form">{props.formChildren}</div>}
      </div>
    </div>
  );
};

MarketForm.defaultProps = {
  type: 'default'
};

export default MarketForm;
