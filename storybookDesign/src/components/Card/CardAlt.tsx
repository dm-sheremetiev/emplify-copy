import React, { ReactNode } from 'react';
import Icon from '../Icon/Icon';
import Typography from '../Typography/Typography';
import './Card.scss';
import { IconsType } from '../../assets/icons';
import { imageContentfulTransformUrl } from '../../utils/contenful-helper-functions';

export type CardAltProps = React.HTMLAttributes<HTMLDivElement> & {
  id?: string;
  className?: string;
  header?: string | Element | any;
  paragraph?: string | Element | any;
  icon: IconsType;
  backgroundColor?: string;
  buttonChildren?: ReactNode;
  image?: string;
  imageProps?: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
};

const CardAlt = (props: CardAltProps) => {
  const { icon, header, paragraph, buttonChildren } = props;
  const HTMLProps = { ...props } as any;
  delete HTMLProps.id;
  delete HTMLProps.header;
  delete HTMLProps.paragraph;
  delete HTMLProps.backgroundColor;
  delete HTMLProps.icon;
  delete HTMLProps.buttonChildren;
  delete HTMLProps.image;
  delete HTMLProps.imageProps;

  return (
    <div className="emplifi-alt-card-display-flex">
      <div
        {...HTMLProps}
        id={props.id}
        style={{ backgroundColor: props.backgroundColor }}
        className={[
          'shadow-md flex flex-col emplifi-alt-card mx-auto',
          props?.className,
          props?.image ? 'emplifi-alt-card--image' : 'emplifi-alt-card--no-image',
        ].join(' ')}
      >
        <div className="emplifi-alt-card__inner flex flex-col">
          <div className="emplifi-alt-card__inner-content-container">
            {icon && (
              <div className="emplifi-alt-card__icon-container">
                <Icon name={icon} size={96} color={'#fff'} />
              </div>
            )}
            {header && (
              <div className="typography typography--Headline2 emplifi-alt-card__title" dangerouslySetInnerHTML={{ __html: header || '' }}></div>
            )}
            {paragraph && (
              <Typography as="div" type="Body2" className="emplifi-alt-card__paragraph" dangerouslySetInnerHTML={{ __html: paragraph || '' }} />
            )}
            {buttonChildren}
          </div>
          {props.image && (
            <img
              width="300px"
              height="292px"
              loading="lazy"
              alt={props?.imageProps?.alt || 'defaultAlt'}
              {...props.imageProps}
              src={imageContentfulTransformUrl(props.image)}
              className={['emplifi-alt-card__image', props?.imageProps?.className].join(' ')}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export type ThreeCardAltGroupProps = {};
const ThreeCardAltGroup = (props: React.PropsWithChildren<ThreeCardAltGroupProps>) => {
  if (props.children && (props.children as any).length && (props.children as any).length > 3) {
    console.error('<ThreeCardAltGroup/> Only expects 3 Cards.');
  }

  return (
    <div className="emplifi-card--group--alt grid justify-center auto-rows-auto auto-cols-auto lg:grid-flow-col sm:grid-flow-row">
      {props.children}
    </div>
  );
};

export { ThreeCardAltGroup, CardAlt };
export default CardAlt;
