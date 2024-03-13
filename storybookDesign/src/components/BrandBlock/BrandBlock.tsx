import React, { FC } from 'react';
import Typography from '../Typography/Typography';
import './BrandBlock.scss';

export type BrandBlockProps = React.HTMLAttributes<HTMLDivElement> & {
  id?: string;
  imgSrc?: string;

  imgSubSrc?: string;
  imgSubAlt?: string;

  imgAlt?: string;
  imgTitle?: string;
  title?: string;
  body?: string;
  className?: string;
};

const BrandBlock: FC<BrandBlockProps> = (props: BrandBlockProps) => {
  const { imgSrc, imgSubSrc, imgSubAlt, imgAlt, imgTitle, title, body } = props;
  const HTMLProps = { ...props } as any;
  delete HTMLProps.id;
  delete HTMLProps.title;
  delete HTMLProps.body;
  delete HTMLProps.imgAlt;
  delete HTMLProps.imgSrc;
  delete HTMLProps.imgSubSrc;
  delete HTMLProps.imgSubAlt;
  delete HTMLProps.imgTitle;
  delete HTMLProps.children;

  return (
    <section {...HTMLProps} id={props.id} className={['emplifi-brand-block', props?.className].join(' ')}>
      <img src={imgSrc} alt={imgAlt || imgTitle} title={imgTitle} className="emplifi-brand-block__image--desktop" width="135px" height="28px" />
      <img src={imgSubSrc} alt={imgSubAlt || imgTitle} className="emplifi-brand-block__image--sub-desktop" />
      <div className="emplifi-brand-block__content">
        <div className="emplifi-brand-block__text-area">
          {title && <div className="typography typography--BrandGuideH1" dangerouslySetInnerHTML={{ __html: title || '' }}></div>}
          {body && (
            <Typography type="BrandGuideCopy" as="p">
              {body}
            </Typography>
          )}
        </div>
      </div>
    </section>
  );
};

export default BrandBlock;
