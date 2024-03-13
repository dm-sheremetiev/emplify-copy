import React from 'react';
import Icon, { IconProps } from '../Icon/Icon';
import Typography from '../Typography/Typography';
import './Card.scss';
import { imageContentfulTransformUrl } from '../../utils/contenful-helper-functions';

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  id?: string;
  className?: string;
  header?: string | Element | any;
  paragraph?: string | Element | any;
  image?: string;
  imageProps?: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
  blue?: boolean;
};

const Card = (props: CardProps) => {
  const { image, header, paragraph, blue } = props;
  const HTMLProps = { ...props } as any;
  delete HTMLProps.id;
  delete HTMLProps.header;
  delete HTMLProps.paragraph;
  delete HTMLProps.image;
  delete HTMLProps.imageProps;
  delete HTMLProps.blue;
  return (
    <div
      {...HTMLProps}
      id={props.id}
      className={['shadow-md flex flex-col items-center justify-center emplifi-card', blue ? 'emplifi-card--blue' : undefined, props?.className].join(
        ' '
      )}
    >
      <div className="emplifi-card__inner flex flex-col items-center justify-center">
        {image && (
          <img
            width="135px"
            height="28px"
            alt={props?.imageProps?.alt || 'defaultAlt'}
            {...props.imageProps}
            src={imageContentfulTransformUrl(image)}
            loading="lazy"
            className={['emplifi-card__image', props?.imageProps?.className].join(' ')}
          />
        )}
        {header && <div className="typography typography--Headline3 emplifi-card__title" dangerouslySetInnerHTML={{ __html: header || '' }}></div>}
        {paragraph && <Typography type="Body1" as="div" className="emplifi-card__paragraph" dangerouslySetInnerHTML={{ __html: paragraph || '' }} />}
      </div>
    </div>
  );
};

export type ThreeCardGroupProps = {};
const ThreeCardGroup = (props: React.PropsWithChildren<ThreeCardGroupProps>) => {
  if (props.children && (props.children as any).length && (props.children as any).length > 5) {
    console.error('<ThreeCardGroup/> Only expects 5 children. 3 Cards and two icons.');
  }

  return (
    <div className="emplifi-card--group grid justify-center auto-rows-auto auto-cols-auto lg:grid-flow-col sm:grid-flow-row">{props.children}</div>
  );
};

const TheeCardGroupIcon = (props: IconProps) => {
  return (
    <div className="emplifi-icon-container flex justify-center items-center">
      <div className="emplifi-icon-container-absolute flex justify-center items-center">
        <Icon {...props} />
      </div>
    </div>
  );
};

export { ThreeCardGroup, TheeCardGroupIcon, Card };
export default Card;
