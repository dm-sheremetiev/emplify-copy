import React from 'react'
import {
  Entry,
  IndustryReportsQuarter,
  RegionEntry,
} from '../../types/industry-reports-types'
import styles from './reports-list.module.scss'

type Props = Readonly<{
  industry: Entry
  region: RegionEntry
  quarter: IndustryReportsQuarter
}>

const ReportsListItem = ({industry, region, quarter}: Props) => {
  return (
      <li className={styles.listItem} onClick={()=> window.open(`https://emplifi.s3.amazonaws.com/website/pages/industry-reports/${quarter.y}_q${quarter.q}/${quarter.y}_q${quarter.q}_${industry.id}_${region.id}.pdf`)}>
        <a className={styles.link}>
          <h2>{region.name}</h2>
          <p>{`Q${quarter.q} ${quarter.y}`}</p>
        </a>
      </li>
  )
}

export default ReportsListItem
