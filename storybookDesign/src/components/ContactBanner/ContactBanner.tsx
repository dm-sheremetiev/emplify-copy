import React, { FC, ReactNode } from 'react';
import Typography from '../Typography/Typography';
import './ContactBanner.scss';
import { imageContentfulTransformUrl } from '../../utils/contenful-helper-functions';

export type ContactBannerProps = {
  id?: string;
  className?: string;
  title?: string | any;
  body?: string;
  imgSrc?: string;
  imgAlt?: string;
  imgTitle?: string;
  children?: ReactNode;
  isRight?: boolean;
};

const ContactBanner: FC<ContactBannerProps> = (props: ContactBannerProps) => {
  const { title, body, imgSrc, imgAlt, imgTitle, children, isRight } = props;
  const HTMLProps = { ...props } as any;
  delete HTMLProps.id;
  delete HTMLProps.title;
  delete HTMLProps.body;
  delete HTMLProps.imgSrc;
  delete HTMLProps.imgAlt;
  delete HTMLProps.imgTitle;
  delete HTMLProps.children;
  delete HTMLProps.isRight;
  return (
    <div {...HTMLProps} id={props.id} className={['emplifi-contact-banner', props?.className].join(' ')}>
      <div className={`emplifi-contact-banner__container ${isRight ? 'right' : 'left'}`}>
        {(title || body || imgSrc) && (
          <>
            <div className="emplifi-contact-banner__container--text-area">
              {title && <div className="typography typography--Headline1" dangerouslySetInnerHTML={{ __html: title || '' }}></div>}
              {body && (
                <Typography type="Body1" as="p">
                  {body}
                </Typography>
              )}
              {imgSrc && <img src={imageContentfulTransformUrl(imgSrc)} alt={imgAlt || imgTitle} width="551px" height="295px" loading="lazy" />}
            </div>
          </>
        )}
        {children && <div className="emplifi-contact-banner__container--form">{children}</div>}
      </div>
    </div>
  );
};

export default ContactBanner;
