import React, { ReactNode } from 'react';
import Typography from '../Typography/Typography';
import './ResourceCard.scss';

export type ResourceCardProps = React.HTMLAttributes<HTMLDivElement> & {
  id?: string;
  image?: string | JSX.Element | ReactNode;
  meta?: string;
  header?: string;
  paragraph?: string;
  hideButton?: boolean; //It looks like this card will always have a button, but just in case there is a time you dont want one.
  buttonChildren?: ReactNode;
};

const ResourceCard = (props: ResourceCardProps) => {
  const { image, meta, header, paragraph, hideButton, buttonChildren } = props;
  const imageIsString = typeof image === 'string';
  const HTMLProps = { ...props } as any;

  delete HTMLProps.id;
  delete HTMLProps.image;
  delete HTMLProps.meta;
  delete HTMLProps.header;
  delete HTMLProps.paragraph;
  delete HTMLProps.hideButton;
  delete HTMLProps.buttonChildren;

  return (
    <div {...HTMLProps} id={props.id} className={['emplifi-resource-card', props?.className].join(' ')}>
      <div className="emplifi-resource-card__inner flex flex-col h-full">
        {image && imageIsString && <div className="emplifi-resource-card__image" style={{ backgroundImage: `url(${image})` }} />}
        {image && !imageIsString && <div className="emplifi-resource-card__image relative">{image}</div>}
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col">
            {meta && (
              <div className="emplifi-resource-card__meta">
                <Typography type="Body1">{meta}</Typography>
              </div>
            )}
            {header && (
              <div className="emplifi-resource-card__header typography typography--Caption1" dangerouslySetInnerHTML={{ __html: header || '' }}></div>
            )}
            {paragraph && (
              <div className="emplifi-resource-card__paragraph">
                <Typography type="ResourceParagraph">{paragraph}</Typography>
              </div>
            )}
          </div>
          {!hideButton && buttonChildren}
        </div>
      </div>
    </div>
  );
};

const ResourceCardGroup = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const length = (props.children as any).length;

  if (length === 2) {
    return <TwoColumnResourceCardGroup {...props} />;
  }

  if (length === 3) {
    return <ThreeColumnResourceCardGroup {...props} />;
  }

  if (length === 4) {
    return <FourColumnResourceCardGroup {...props} />;
  }

  return (
    <div {...props} id={props.id} className={['emplifi-resource-card-group', props?.className].join(' ')}>
      <div className="emplifi-resource-card-group__container">{props.children}</div>
    </div>
  );
};

const TwoColumnResourceCardGroup = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} id={props.id} className={['emplifi-two-column-resource-card-group', props?.className].join(' ')}>
      <div className="emplifi-two-column-resource-card-group__container">{props.children}</div>
    </div>
  );
};

const ThreeColumnResourceCardGroup = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} id={props.id} className={['emplifi-three-column-resource-card-group', props?.className].join(' ')}>
      <div className="emplifi-three-column-resource-card-group__container">{props.children}</div>
    </div>
  );
};

const FourColumnResourceCardGroup = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} id={props.id} className={['emplifi-four-column-resource-card-group', props?.className].join(' ')}>
      <div className="emplifi-four-column-resource-card-group__container">{props.children}</div>
    </div>
  );
};

export { ResourceCardGroup, ResourceCard, TwoColumnResourceCardGroup, ThreeColumnResourceCardGroup, FourColumnResourceCardGroup };
export default ResourceCard;
