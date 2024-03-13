import React from 'react';
import { Entry } from '../../types/industry-reports-types';
import { getIndustryImgs } from '../../utils/index';
import styles from './reports-tile.module.scss';
import clsx from 'clsx';
import Image from 'next/image';
import { contentfulImageLoaderFunction } from 'utils/contenful-helper-functions';

type Props = Readonly<{
  industry: Entry;
}>;

export default function IndustryHeader({ industry }: Props) {
  const { icon, headerImg, headerImg2x } = getIndustryImgs(industry.id);
  return (
    <div className={clsx(styles.tile, styles.asHeader)}>
      <picture>
        <source srcSet={`${headerImg} 1x, ${headerImg2x} 2x`} type="image/jpg" />
        <Image
            loader={contentfulImageLoaderFunction}
            src={headerImg}
            alt={''}
            className={styles.backgroundImage}
            width={1200}
            height={1200}
            loading="lazy"
            priority={false}
          />
      </picture>
      <div className={clsx(styles.tileContent, styles.asHeader)}>
        <div className={styles.icon} style={{ backgroundImage: `url(${icon})` }} />
        <h2>{industry.name}</h2>
      </div>
    </div>
  );
}
