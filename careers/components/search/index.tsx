import React, { useEffect, useState } from 'react';

import clsx from 'clsx';
import { Property } from 'csstype';
import { useI18n } from 'next-localization';

import { GenericPageCopy } from '@/careers/types/copy-types';
import { Department, Location, Position } from '@/careers/types/entities-types';

import Filter from '@/careers/components/search/filter';
import Banner from '@/careers/components/search/banner';
import SearchCard from '@/careers/components/search/searchCard';

import styles from './search.module.scss';
import layout from '../../styles/modules/layout.module.scss';
import searchCardStyle from './searchCard/searchCard.module.scss';
import buttonStyle from '@/careers/styles/modules/buttons.module.scss';

type Props = {
  locationsEntries: [id: string, item: Location][];
  positionsEntries: [id: string, item: Position][];
  departmentsEntries: [id: string, item: Department][];
  copy: Partial<GenericPageCopy>;
};

export default function SearchWrapper(props: Props): JSX.Element {
  const i18n = useI18n();
  const { copy, ...rest } = props;
  const { title, excerpt } = copy;
  const [filters, setFilters] = useState<any>(null);
  const [viewMode, setViewMode] = useState<Property.FlexDirection>('row');
  const [filteredData, setFilteredData] = useState<Position[]>([]);
  const viewModes: { id: Property.FlexDirection; icon: any }[] = [
    {
      id: 'column',
      icon: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z'/></svg>`
    },
    {
      id: 'row',
      icon: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path d='M192 80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80zm0 256c0-26.5-21.5-48-48-48H48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V336zM256 80v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H304c-26.5 0-48 21.5-48 48zM448 336c0-26.5-21.5-48-48-48H304c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V336z'/></svg>`
    }
  ];

  useEffect(() => {
    let result: Position[] = rest.positionsEntries.map(([id, item]) => item);
    if (filters) {
      if (filters.name) {
        result = result.filter((item) => {
          const name = filters.name.toLowerCase();
          const title = item.title.toLowerCase();
          const location = item.location.toLowerCase();
          const department = item.department.toLowerCase();

          return title.includes(name) || location.includes(name) || department.includes(name);
        });
      }
      if (filters.location) {
        result = result.filter((item) => item.location.toLowerCase().includes(filters.location.toLowerCase()));
      }
      if (filters.department) {
        result = result.filter((item) => item.department.toLowerCase().includes(filters.department.toLowerCase()));
      }
    }

    setFilteredData(result);
  }, [filters, rest.positionsEntries]);

  return (
    <>
      <Banner copy={{ title, excerpt }} />
      <div className={`${layout.container} ${styles.wrapper}`}>
        <div className={styles.viewMode}>
          {viewModes.map((item, index) => (
            <button
              className={clsx(buttonStyle.btn, viewMode === item.id && `${buttonStyle.btnPrimary} ${styles.active}`)}
              key={index}
              onClick={() => setViewMode(item.id)}
            >
              <div dangerouslySetInnerHTML={{ __html: item.icon }}></div>
            </button>
          ))}
        </div>
        <section className={styles.sectionWrapper}>
          <Filter {...rest} filters={filters} setFilters={setFilters} />
          <div className={styles.section} style={{ flexDirection: viewMode }}>
            {filteredData.map((item, index) => (
              <SearchCard key={index} item={item} viewMode={viewMode} />
            ))}

            {filteredData.length === 0 && (
              <div className={searchCardStyle.wrapper}>
                <h4>{i18n.t('jobSearch.noResult')}</h4>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
