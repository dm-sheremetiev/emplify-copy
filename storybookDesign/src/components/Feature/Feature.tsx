import React from 'react';
import colours from '../../assets/colours';
import { IconsType } from '../../assets/icons';
import Icon, { IconProps } from '../Icon/Icon';
import Typography from '../Typography/Typography';
import './Feature.scss';

export type IconFeatureProps = React.HTMLAttributes<HTMLDivElement> & {
  id?: string;
  className?: string;
  icon?: IconsType;
  iconProps?: IconProps;
  title?: string;
  paragraph?: string;
};

const Feature = (props: IconFeatureProps) => {
  const HTMLProps = { ...props } as any;
  delete HTMLProps.id;
  delete HTMLProps.icon;
  delete HTMLProps.iconProps;
  delete HTMLProps.title;
  delete HTMLProps.paragraph;

  return (
    <div {...HTMLProps} id={props.id} className={['emplifi-icon-feature', props.className || ''].join(' ')}>
      {props.icon && <Icon className="emplifi-icon-feature__icon" size={47} name={props.icon} color={colours.pictonBlue} {...props.iconProps} />}
      {props.title && (
        <div className="typography typography--Headline3 emplifi-icon-feature__title" dangerouslySetInnerHTML={{ __html: props.title || '' }}></div>
      )}
      {props.paragraph && (
        <Typography as="div" type="Body1" className="emplifi-icon-feature__paragraph" dangerouslySetInnerHTML={{ __html: props.paragraph || '' }} />
      )}
    </div>
  );
};

const FeatureGroup = ({ title, children, className }: { children?: any; className?: string; title?: string }) => {
  return (
    <div className={['emplifi-icon-feature-group', className || ''].join(' ')}>
      {title && <div className="emplifi-icon-feature-group__header" dangerouslySetInnerHTML={{ __html: title || '' }}></div>}
      <div className="emplifi-icon-feature-group__content">{children}</div>
    </div>
  );
};

export { Feature, FeatureGroup };
export default Feature;
