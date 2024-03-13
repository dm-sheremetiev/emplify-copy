import React from 'react'
import {Entry, IndustryReportsQuarter} from '../../types/industry-reports-types'
import styles from './reports-list.module.scss'
import ReportsListItem from '../../components/reports-list/reports-list-item';

type Props = {
  industry: Entry
  region: Entry
  availableQuarters: IndustryReportsQuarter[]
}

export default function ReportListQuarters({ industry, region, availableQuarters}: Props) {
  const [recentQuarter, ...olderQuarters] = availableQuarters

  return (
    <>
      <h2 className={styles.listHeading}>Recent Report</h2>
      <ul className={styles.list}>
        <ReportsListItem
          industry={industry}
          region={region}
          quarter={recentQuarter}
        />
      </ul>
      {olderQuarters.length > 0 && (
        <>
          <h2 className={styles.listHeading}>Older Reports</h2>
          <ul className={styles.list}>
            {olderQuarters.map((quarter) => (
              <ReportsListItem
                key={`${quarter.y}${quarter.q}`}
                industry={industry}
                region={region}
                quarter={quarter}
              />
            ))}
          </ul>
        </>
      )}
    </>
  )
}
