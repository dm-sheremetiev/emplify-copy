import React from 'react'
import {
  Entry,
  IndustryReportsQuarter,
  RegionEntry,
} from '../../types/industry-reports-types'
import styles from './reports-list.module.scss'
import ReportsListItem from '../reports-list/reports-list-item'


type Props = Readonly<{
  industry: Entry
  regions: Array<RegionEntry>
  quarter: IndustryReportsQuarter
}>

const ReportListRegions = ({industry, regions, quarter}: Props) => {
  if (!regions.length) {
    return (
      <div>
        Not available!
      </div>
    )
  }

  return (
    <ul className={styles.list}>
      {regions.map((region) => {
        return (
          <ReportsListItem
            key={region.id}
            region={region}
            industry={industry}
            quarter={quarter}
          />
        )
      })}
    </ul>
  )
}

export default ReportListRegions
