import React, { FC, ReactNode } from 'react';
import './ThreeIconParagraph.scss';
import { imageContentfulTransformUrl } from '../../utils/contenful-helper-functions';

export type ThreeIconParagraphAltProps = React.HTMLAttributes<HTMLDivElement> & {
  id?: string;
  title: string;
  dense?: boolean;
  expandContainer?: boolean;
  children: ReactNode;
  titleColor?: string;
  backgroundSize?: string;
  backgroundColor?: string;
  backgroundPosition?: string;
  image?: string;
  mobileImage?: string;
};

const ThreeIconParagraphAlt: FC<ThreeIconParagraphAltProps> = (props: ThreeIconParagraphAltProps) => {
  const {
    id,
    title,
    children,
    titleColor,
    dense = false,
    expandContainer = false,
    image,
    mobileImage,
    backgroundColor = '#fff',
    backgroundSize = 'cover',
    backgroundPosition = 'center center'
  } = props;

  const backgroundImage = image ? `url(${imageContentfulTransformUrl(image)})` : '';
  const backgroundMobileImage = mobileImage ? `url(${imageContentfulTransformUrl(mobileImage)})` : '';

  return (
    <div
      id={id}
      style={
        backgroundImage
          ? {
              backgroundImage,
              backgroundColor,
              backgroundRepeat: 'no-repeat',
              backgroundSize: backgroundSize?.toLowerCase(),
              backgroundPosition: backgroundPosition?.toLowerCase()
            }
          : { backgroundColor }
      }
      className={['emplifi-three-icon-paragraph-alt', props?.className].join(' ')}
    >
      <div
        className="emplifi-three-icon-paragraph-container"
        style={
          backgroundMobileImage
            ? {
                backgroundRepeat: 'no-repeat',
                backgroundImage: backgroundMobileImage,
                backgroundSize: backgroundSize?.toLowerCase(),
                backgroundPosition: backgroundPosition?.toLowerCase(),
                padding: expandContainer ? '60px 0' : ''
              }
            : expandContainer
            ? { padding: '60px 0' }
            : {}
        }
      >
        {title && (
          <div
            style={{ color: titleColor, marginBottom: dense ? 0 : 75 }}
            className="typography typography--Headline2 emplifi-three-icon-paragraph-alt__title"
            dangerouslySetInnerHTML={{ __html: title || '' }}
          />
        )}
        {children && <div className="emplifi-three-icon-alt--children">{children}</div>}
      </div>
    </div>
  );
};

export default ThreeIconParagraphAlt;
