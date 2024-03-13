import React from 'react';
import Banner from './banner';
import layout from '@/careers/styles/modules/layout.module.scss';
import Quotes from './quotes';
import styles from './hp-tiles.module.scss';
import { LocationsMap, Position } from '@/careers/types/entities-types';
import PositionsList from '@/careers/components/positions-list';
import ShowMoreContainer from '@/careers/components/show-more';
import Link from 'next/link';
import b from '@/careers/styles/modules/buttons.module.scss';
import { HomepageCopy } from '@/careers/types/copy-types';
import { useI18n } from 'next-localization';

type Props = {
  recentPositions: Position[];
  locations: LocationsMap;
  positionsCount: number;
  title?: boolean;
  copy: HomepageCopy;
};

export default function HomePage({ recentPositions = [], positionsCount, copy }: Props): JSX.Element {
  const i18n = useI18n();

  return (
    <main>
      <section data-testid="homepage-banner">
        <Banner positionsCount={positionsCount} copy={copy} />
      </section>

      <section data-testid="homepage-quotes">
        <div className={layout.container}>
          <Quotes copy={copy} />
        </div>
      </section>

      <section data-testid="homepage-positions">
        <div className={styles.headingWrapper}>
          <span className={`${styles.pattern} ${styles.pattern1}`} />
          <span className={`${styles.pattern} ${styles.pattern2}`} />
          <h2 className={`${styles.heading} ${styles.headingPositions}`}>{copy.positionsTitle}</h2>
        </div>

        <div className={layout.container}>
          <PositionsList positions={recentPositions} customClassName={styles.list} />
          <ShowMoreContainer customClassName={styles.showMore}>
            <Link prefetch={false} href="/careers/open-positions" className={`${b.btn} ${b.btnPrimary} ${b.btnLg}`}>
              {i18n.t('button', { positionsCount })}
            </Link>
          </ShowMoreContainer>
        </div>
      </section>
    </main>
  );
}
