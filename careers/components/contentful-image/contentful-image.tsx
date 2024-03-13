import React from 'react';
import pictureStyles from '@/careers/styles/modules/picture.module.scss';
import type { Image } from '@/careers/types/copy-types';
import { getContentfulImageUrl, ImageFm } from '@/careers/utils/contentful-image-url';
import { calculateHeight } from '@/careers/utils/image-dimensions';

type Props = {
  image: Image;
  expectedFormat?: 'webp' | 'jpg' | 'png';
  widths: number[];
  sizes?: string;
} & React.ComponentPropsWithoutRef<'img'>;

function generateSrcSet({ url, width }: Image, widths: number[], fm?: ImageFm): string {
  const srcSet = [];
  for (const givenWidth of widths) {
    srcSet.push(`${getContentfulImageUrl(url, { w: givenWidth, fm })} ${givenWidth}w`);
    const twice = givenWidth * 2;
    if (twice <= width) {
      srcSet.push(`${getContentfulImageUrl(url, { w: twice, fm })} ${twice}w`);
    }
  }
  return srcSet.join(', ');
}

export default function ContentfulImage({
  image,
  expectedFormat,
  widths,
  sizes,
  alt = '',
  className = pictureStyles.picture,
  loading = 'lazy',
  ...imgProps
}: Props): JSX.Element {
  const srcSetDefault = generateSrcSet(image, widths, expectedFormat);
  const srcSetWebp = generateSrcSet(image, widths, 'webp');
  const defaultWidth = widths[widths.length - 1];

  return (
    <picture>
      <source type="image/webp" srcSet={srcSetWebp} sizes={sizes} />
      <img
        {...imgProps}
        alt={alt || ''}
        className={className}
        srcSet={srcSetDefault}
        sizes={sizes}
        src={getContentfulImageUrl(image.url, { w: defaultWidth })}
        width={defaultWidth}
        height={calculateHeight(image, defaultWidth)}
        loading={loading}
      />
    </picture>
  );
}
