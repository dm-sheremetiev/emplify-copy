import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { Position } from '@/careers/types/entities-types';

import styles from './position-tile.module.scss';

export type PositionTileToggles = {
  hideDepartment?: boolean;
  hideLocation?: boolean;
};

type Props = PositionTileToggles & { position: Position };

export default function PositionTile({ position, hideDepartment = false, hideLocation = false }: Props): JSX.Element {
  const { urlKey, title, department, location } = position;
  const hasDecorator = !hideDepartment && !hideLocation;

  return (
    <Link
      prefetch={false}
      href="/careers/open-positions/detail/[positionKey]"
      as={`/careers/open-positions/detail/${urlKey}`}
      className={styles.container}
      passHref
    >
      <div className={clsx(hasDecorator && styles.withDecorator)}>
        <h4 className={styles.heading}>{title}</h4>
        {!hideDepartment && <p>{department}</p>}
        {!hideLocation && <p>{location}</p>}
      </div>
    </Link>
  );
}
