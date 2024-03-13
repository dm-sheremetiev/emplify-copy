import React from 'react'
import container from '@/components/blocks/UiTrialTable/container.module.scss';
import clsx from 'clsx';
import styles from '@/components/blocks/UiTrialTable/row/table-row.module.scss';
import tableHeader from './table-header.module.scss'

const TableHeader = ({data}) => {
  return (
    <div className={container.container}>
      <div className={tableHeader.tableHeader}>
        <div className={clsx(styles.tableRow, styles.noBorder, styles.noWrap)}>
          {data.tableHeading.map((item, i) => {
            return (
              <div key={i} className={clsx(styles.cell, styles.asHeading, styles.noBg)}>
                <div className={clsx(styles.featureValue, styles.asHeading)}>
                  {item.value}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TableHeader
