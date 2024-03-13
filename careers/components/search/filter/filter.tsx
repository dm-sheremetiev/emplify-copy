import clsx from 'clsx';
import React from 'react';
import { useI18n } from 'next-localization';
import { Department, Location, Position } from '@/careers/types/entities-types';

import styles from './filter.module.scss';
import buttonStyle from '@/careers/styles/modules/buttons.module.scss';

type Props = {
  filters: any;
  setFilters: any;
  locationsEntries: [id: string, item: Location][];
  positionsEntries: [id: string, item: Position][];
  departmentsEntries: [id: string, item: Department][];
};

export default function Filter(props: Props): JSX.Element {
  const i18n = useI18n();

  const onChange = (e) => {
    if (e.target.value) {
      props.setFilters({ ...(props.filters || {}), [e.target.name]: e.target.value });
    } else {
      delete props.filters[e.target.name];
      props.setFilters({ ...(props.filters || {}) });
    }
  };

  return (
    <aside className={styles.wrapper}>
      <label htmlFor="search-name">{i18n.t('jobSearch.filterNameLabel')}:</label>
      <input
        id="search-name"
        className={styles.input}
        name="name"
        type="text"
        placeholder={i18n.t('jobSearch.filterNamePlaceholder')}
        onChange={onChange}
      />

      <label htmlFor="search-department">{i18n.t('jobSearch.filterDepartmentLabel')}:</label>
      <select id="search-department" name="department" className={styles.input} placeholder="" onChange={onChange}>
        <option value="">{i18n.t('jobSearch.filterDepartmentPlaceholder')}</option>

        {props.departmentsEntries.map(([id, item], index) => (
          <option value={item.name} key={index}>
            {item.name}
          </option>
        ))}
      </select>

      <label htmlFor="search-location">{i18n.t('jobSearch.filterLocationLabel')}:</label>
      <select id="search-location" name="location" className={styles.input} placeholder="" onChange={onChange}>
        <option value="">{i18n.t('jobSearch.filterLocationPlaceholder')}</option>

        {props.locationsEntries.map(([id, item], index) => (
          <option value={item.name} key={index}>
            {item.name}
          </option>
        ))}
      </select>

      <button className={clsx(styles.button, buttonStyle.btn, buttonStyle.btnPrimary)}>{i18n.t('jobSearch.search')}</button>
    </aside>
  );
}
