import React, { PropsWithChildren } from 'react';
import ContentfulImage from '../../contentful-image';
import { LocationCopy } from '@/careers/types/copy-types';

import styles from './location-wrapper.module.scss';

type Props = PropsWithChildren<{ locationCopy: LocationCopy | null }>;

const widths = [288, 329, 360, 399, 510];
const sizes = '(min-width: 1200px) 399px, (min-width: 1000px) 329px, (min-width: 780px) 360px, (min-width: 580px) 510px, calc(100vw - 32px)';

export default function LocationWrapper({ locationCopy, children }: Props): JSX.Element {
  const image = locationCopy?.image;

  return (
    <div className={styles.locationWrapper}>
      {image && (
        <ContentfulImage
          image={image}
          widths={widths}
          sizes={sizes}
          expectedFormat="jpg"
          className={styles.locationImg}
          alt=""
          role="presentation"
          loading="eager"
        />
      )}
      {children}
    </div>
  );
}
