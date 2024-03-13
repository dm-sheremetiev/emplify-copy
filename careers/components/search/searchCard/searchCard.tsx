import React from 'react';
import Link from 'next/link';
import { Position } from '@/careers/types/entities-types';

import styles from './searchCard.module.scss';

type Props = {
  item: Position;
  viewMode: string;
};

export default function SearchCard({ item, viewMode }: Props): JSX.Element {
  return (
    <div className={styles.wrapper} style={{ width: viewMode === 'row' ? 'calc(33.333% - 20px)' : 'calc(100% - 20px)' }}>
      <h3>
        <Link prefetch={false} href="/careers/open-positions/detail/[positionKey]" as={`/careers/open-positions/detail/${item.urlKey}`} passHref>
          {item.title}
        </Link>
      </h3>
      <div>{item.department}</div>
      <div>{item.location}</div>
    </div>
  );
}
