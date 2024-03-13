import React from 'react';
import { Location } from '../../../types/entities-types';
import list from './country-list.module.scss';
import flag from '../../../styles/modules/flag.module.scss';
import Link from 'next/link';
import clsx from 'clsx';
import { useI18n } from 'next-localization';

type Props = {
  allPositionCount: number;
  currentLocation?: Location;
  allLocations: Array<Location>;
  isListOpen: boolean;
  toggleList: () => void;
};

export default function CountryList({ allPositionCount, isListOpen, allLocations, toggleList, currentLocation }: Props): JSX.Element {
  const { t } = useI18n();

  return (
    <div className={clsx(list.container, isListOpen && list.isOpen)}>
      <ul className={list.wrapper}>
        <li>
          <Link
            prefetch={false}
            href="/careers/open-positions/"
            className={clsx(list.item, !currentLocation && list.isActive)}
            onClick={toggleList}
            passHref
          >
            {t('openPositions.allLocations')} <span className={flag.flag}>{allPositionCount}</span>
          </Link>
        </li>
        {allLocations.map((location: Location) => {
          return (
            <li key={location.name}>
              <Link
                prefetch={false}
                href={'/careers/open-positions/[locationKey]'}
                as={`/careers/open-positions/${location.urlKey}`}
                className={clsx(list.item, currentLocation && currentLocation.name === location.name && list.isActive)}
                onClick={toggleList}
              >
                {location.name} {location.positionsCount > 0 && <span className={flag.flag}>{location.positionsCount}</span>}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
