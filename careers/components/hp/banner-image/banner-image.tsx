import React from 'react';
import imgStyles from './banner-image.module.scss';
import { Image } from '@/careers/types/copy-types';
import ContentfulImage from '../../contentful-image';

type Props = {
  image: Image;
};

const widths = [909];
const sizes = '(max-width: 1199px) 0, 909w';

export default function BannerImage({ image }: Props): JSX.Element {
  return (
    <div className={imgStyles.wrapper}>
      <div className={imgStyles.inner}>
        <ContentfulImage image={image} widths={widths} sizes={sizes} alt="" role="presentation" />
      </div>
    </div>
  );
}
