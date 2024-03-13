import React from 'react';
import ContentfulImage from '../../contentful-image';
import { DepartmentsCopy } from '@/careers/types/copy-types';

import assets from './assets.module.scss';
import bannerStyles from './banner.module.scss';
import layoutStyles from '@/careers/styles/modules/layout.module.scss';
import typographyStyles from '@/careers/styles/modules/typography.module.scss';

type Image = DepartmentsCopy['mainImage'];

type Props = {
  heading: string;
  perex: string;
  image: Image;
};

const widths = [288, 470, 570];
const sizes = '(min-width: 1200px) 570px, (min-width: 1000px) 470px, (min-width: 780px) 50vw, (min-width: 580px) 510px, calc(100vw - 32px)';

export default function Banner({ heading, perex, image }: Props): JSX.Element {
  return (
    <div className={bannerStyles.wrapper}>
      <div className={`${layoutStyles.container} ${bannerStyles.content}`}>
        <div className={bannerStyles.text}>
          <h1 className={typographyStyles.heading}>{heading}</h1>
          <p className={typographyStyles.paragraph}>{perex}</p>
        </div>
        {image && (
          <div className={assets.assets}>
            <ContentfulImage
              image={image}
              widths={widths}
              sizes={sizes}
              expectedFormat="jpg"
              className={assets.img}
              alt=""
              role="presentation"
              loading="eager"
            />
          </div>
        )}
      </div>
    </div>
  );
}
