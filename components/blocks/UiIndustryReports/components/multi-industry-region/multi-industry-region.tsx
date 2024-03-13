import React from 'react'
import {useAvailableReports} from '../../use-available-reports'
import {INDUSTRY_ALL, REGION_ALL} from '../../utils/industry-reports-constants'
import styles from './multi-industry-region.module.scss'
import ReportsTile from '../reports-tiles/reports-tile'
import ReportsTilesAllRegions from '../reports-tiles/reports-tiles-all-regions'
import NoReportAvailable from '../alerts/no-report-available'
import {IndustryReportsQuarter, Filter} from '../../types/industry-reports-types'

type Props = {
  missingReports: string[]
  filter: Filter
  quarter: IndustryReportsQuarter
}

export default function MultiIndustryRegion({ missingReports, filter, quarter} :Props) {
  const availableReports = useAvailableReports(missingReports, filter, quarter)
  const isAllRegions = filter.region === REGION_ALL.id
  const isAllIndustries = filter.industry === INDUSTRY_ALL.id

  if(isAllRegions) {
    return (
      <ReportsTilesAllRegions
        industryReports={availableReports}
        quarter={quarter}
      />
    )
  }
  // 3. all industries + single region (grid)
  if(isAllIndustries) {
    return (
      <div className={styles.grid}>
        {availableReports.map((industryReport) => (
          <ReportsTile
            industryReport={industryReport}
            quarter={quarter}
            key={industryReport.industry.id}/>
        ))}
      </div>
    )
  }

  return <NoReportAvailable />
}
