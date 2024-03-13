import React from 'react'
import styles from './no-report-available.module.scss'

type Props = {
  headline?: string
  subheadline?: string
}

const defaultCopy = {
  headline: 'We are sorry but we have no data for this combination',
  subheadline: 'Please choose different filter values',
}

const NoReportAvailable = ({
  headline = defaultCopy.headline,
  subheadline = defaultCopy.subheadline
}: Props) => {
  return (
    <div className={styles.noReportAvailable}>
      <span className={styles.icon} />
      <h4>{headline}</h4>
      <p>{subheadline}</p>
    </div>
  )
}

export default NoReportAvailable
