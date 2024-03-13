import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useI18n } from 'next-localization';
import { Location, LocationsMap } from '../../../types/entities-types';

import listStyles from './list.module.scss';
import linkStyles from './link.module.scss';
import styles from './locations.module.scss';
import mapStyles from './world-map.module.scss';
import headingStyles from './heading.module.scss';
import layoutStyles from '../../../styles/modules/layout.module.scss';
import typographyStyles from '../../../styles/modules/typography.module.scss';

type Props = {
  locations: LocationsMap;
  positionsCount: number;
};

export default function Locations({ locations, positionsCount }: Props): JSX.Element {
  const i18n = useI18n();
  const allLocations = Array.from(locations.values());

  return (
    <>
      <div className={layoutStyles.container}>
        <h2 className={`${typographyStyles.headingTertiary} ${headingStyles.heading}`}>{i18n.t('map')}</h2>
      </div>
      <ul className={listStyles.list}>
        <li className={styles.listItem}>
          <Link prefetch={false} href="/careers/open-positions/" className={linkStyles.link}>
            {i18n.t('allLocations')} <span className={linkStyles.content}>{positionsCount} positions</span>
          </Link>
        </li>
        {allLocations.map((location: Location) => {
          return (
            <li
              key={location.name}
              className={clsx(styles.listItem, {
                [mapStyles[location.urlKey]]: location.urlKey
              })}
            >
              <Link
                prefetch={false}
                href={'/careers/open-positions/[locationKey]'}
                as={`/careers/open-positions/${location.urlKey}`}
                className={linkStyles.link}
                passHref
              >
                <span className={styles.dot} />
                {location.name}{' '}
                {location.positionsCount > 0 && (
                  <span className={linkStyles.content}>
                    {location.positionsCount} <span className={linkStyles.copy}>position{location.positionsCount > 1 && 's'}</span>
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
