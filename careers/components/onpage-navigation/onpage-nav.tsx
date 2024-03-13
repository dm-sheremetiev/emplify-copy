import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import styles from './onpage-nav.module.scss';
import typographyStyles from '@/careers/styles/modules/typography.module.scss';
import { DepartmentsMap, LocationsMap } from '@/careers/types/entities-types';
import { useI18n } from 'next-localization';

type Props = {
  entities: DepartmentsMap | LocationsMap;
  activeEntity?: string;
  entitiesType: 'locations' | 'departments';
  customClassName?: string;
};

const createLocationHref = (urlKey = '') => {
  return `/careers/open-positions/${urlKey}`;
};

const createDepartmentHref = (urlKey) => {
  return `/careers/${urlKey}`;
};

export default function OnPageNavigation({ entities, activeEntity = '', entitiesType, customClassName }: Props): JSX.Element {
  const i18n = useI18n();
  const createHref = entitiesType === 'locations' ? createLocationHref : createDepartmentHref;

  return (
    <ul className={clsx(styles.container, customClassName)}>
      {entitiesType === 'locations' && (
        <li className={clsx(styles.itemWrapper, activeEntity === '' && styles.active)}>
          <Link
            prefetch={false}
            href={createLocationHref()}
            className={clsx(typographyStyles.paragraphSm, styles.item, activeEntity === '' && styles.active)}
          >
            {i18n.t('allLocations')}
          </Link>
        </li>
      )}
      {Array.from(entities.values()).map((entity) => {
        const isActive = activeEntity === entity.urlKey;
        return (
          <li key={entity.urlKey} className={clsx(styles.itemWrapper, isActive && styles.active)}>
            <Link
              prefetch={false}
              href={createHref(entity.urlKey)}
              className={clsx(typographyStyles.paragraphSm, styles.item, isActive && styles.active)}
              passHref
            >
              {entity.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
