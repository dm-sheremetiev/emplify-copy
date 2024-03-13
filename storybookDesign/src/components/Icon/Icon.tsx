import React, { SVGProps, useState } from 'react';
import { getIconByName, IconsType, SingleIcon } from '../../assets/icons';
import { SVGUniqueID } from 'react-svg-unique-id';
import { imagesI } from '../../../../interfaces';

export type IconProps = SVGProps<SVGSVGElement> & {
  id?: string;
  name?: IconsType;
  size?: number;
  colour?: string;
  viewBox?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  titleId?: string;
  image?: imagesI;
};

const randomId = () =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

const getIcon = (props: IconProps, localId: string) => {
  if (props.name) {
    return getIconByName(props.name as IconsType, localId) as SingleIcon;
  }

  return {
    path: undefined,
    strokeWidth: undefined,
    viewBox: undefined
  } as SingleIcon;
};

export const Icon = (props: IconProps) => {
  const { colour = 'currentColour', className, name, title, titleId } = props;
  const [localId] = useState<string>(randomId());

  const icon = getIcon(props, localId);
  const _className = `emplifi-icon icon-${name} ${className || ''}`;
  const _path = icon?.path || <></>;
  const _viewBox = props.viewBox || icon?.viewBox || '0 0 24 24';
  const _strokeWidth = props.strokeWidth || icon?.strokeWidth || undefined;
  const defaultStyles = {
    w: '1em',
    h: '1em',
    display: 'inline-block',
    lineHeight: '1em',
    flexShrink: 0,
    color: colour,
    ...(props.size
      ? {
          width: props.size,
          height: props.size
        }
      : {}),
    strokeWidth: props.strokeWidth,
    ...props.style
  };

  if (props.image) {
    const imageSrc = props.image?.url;
    const imageAlt = props.image?.title || props.image?.description;

    return (
      <picture className={className}>
        <source srcSet={imageSrc} media="(min-width:768px)" />
        <img
          id={titleId || ''}
          style={{ objectFit: 'contain', ...(props.style || {}) }}
          src={imageSrc}
          alt={imageAlt || title || ''}
          role="presentation"
          loading="lazy"
        />
      </picture>
    );
  }

  return (
    <SVGUniqueID>
      <svg
        id={props.id}
        className={_className}
        viewBox={_viewBox}
        strokeWidth={_strokeWidth}
        aria-labelledby={titleId}
        {...props}
        style={defaultStyles}
      >
        <>
          {title ? <title id={titleId}>{title}</title> : null}
          {_path}
        </>
      </svg>
    </SVGUniqueID>
  );
};

export default Icon;
