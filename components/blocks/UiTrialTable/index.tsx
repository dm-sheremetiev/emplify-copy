import React from 'react';
import styles from './table.module.scss';
import container from './container.module.scss';
import TableRow from './row/table-row';
import TableHeading from './table-heading';
import StickyHeader from './sticky-header/sticky-header';
import TableHeader from './table-header/table-header';
import ReactTooltip from 'react-tooltip';

const getTooltipPosition = ({ left, top }, currentEvent, currentTarget, node) => {
  const d = document.documentElement;
  left = Math.min(d.clientWidth - node.clientWidth, left);
  top = Math.min(d.clientHeight - node.clientHeight, top);
  left = Math.max(0, left);
  top = Math.max(0, top);
  return { top, left };
};

export function Table({ data }) {
  return (
    <div className={styles.table}>
      <TableHeader data={data} />
      {data.withStickyHeader && <StickyHeader data={data} />}
      <div className={container.container}>
        <ReactTooltip arrowColor="transparent" backgroundColor="#1A1F26" uuid="sbks" effect="solid" overridePosition={getTooltipPosition} />
        <div className={styles.tableWrapper}>
          {data.tables.map((data, j) => {
            const lastRow = data.rows.length - 1;
            return (
              <React.Fragment key={j}>
                <TableHeading title={data.tableTitle} />
                {data.rows.map((item, i) => {
                  return (
                    <TableRow
                      data={item}
                      // eslint-disable-next-line react/no-array-index-key
                      last={lastRow === i}
                      key={`${j}-${i}`}
                    />
                  );
                })}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
