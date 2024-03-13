import clsx from 'clsx';
import React, { useCallback, useState } from 'react';
import { Location, LocationsMap } from '../../../types/entities-types';
import selector from './country-selector.module.scss';
import CountryList from './country-list';
import { useI18n } from 'next-localization';

import styles from './banner.module.scss';
import layoutStyles from '@/careers/styles/modules/layout.module.scss';
import typographyStyles from '../../../styles/modules/typography.module.scss';

type Props = {
  positionsCount: number;
  allPositionCount: number;
  currentLocation?: Location;
  locations: LocationsMap;
};

export default function Banner({ allPositionCount, positionsCount, currentLocation, locations }: Props): JSX.Element {
  const [isListOpen, setListOpen] = useState(false);
  const allLocations = Array.from(locations.values());
  const toggleList = useCallback(() => {
    setListOpen(!isListOpen);
  }, [isListOpen]);
  const i18n = useI18n();
  const headerCopy = positionsCount === 0 ? i18n.t('openPositions.noPositionsTitle') : i18n.t('openPositions.title');

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={`${layoutStyles.container} ${styles.inner}`}>
          <div className={styles.headingBox}>
            <h1 className={typographyStyles.heading}>
              {headerCopy}{' '}
              <button className={selector.location} onClick={toggleList}>
                {currentLocation ? currentLocation.name : i18n.t('openPositions.anyLocation')}{' '}
                <span className={clsx(selector.arrow, isListOpen && selector.arrowUp)} />
              </button>
            </h1>
          </div>
        </div>
      </div>
      <CountryList
        isListOpen={isListOpen}
        allPositionCount={allPositionCount}
        currentLocation={currentLocation}
        allLocations={allLocations}
        toggleList={toggleList}
      />
    </div>
  );
}
