import React from 'react'
import styles from '@/components/blocks/UiTrialTable/table.module.scss';

const TableHeading = ({title}) => (
  <div className={styles.tableHeadingWrapper}>
    <h3>{title}</h3>
  </div>
)

export default TableHeading
