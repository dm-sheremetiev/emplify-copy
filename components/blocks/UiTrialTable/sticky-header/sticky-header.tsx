import React from 'react'
import sticky from './sticky-header.module.scss'
import container from '../container.module.scss'
import clsx from 'clsx';
import styles from '@/components/blocks/UiTrialTable/row/table-row.module.scss';

const StickyHeader = ({data}) => (
  <div className={sticky.stickyHeader}>
    <div className={container.container}>
      <div className={clsx(styles.tableRow, styles.noBorder, styles.noWrap)}>
        {data.stickyHeader.map((item, i) => {
          return (
            <div key={i} className={clsx(styles.cell, styles.noBg)}>
              <div className={clsx(styles.featureValue, styles.asHeading)}>
                {item.ctaText && <a href={item.ctaLink} className={sticky.button}>{item.ctaText}</a>}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </div>
)

export default StickyHeader
