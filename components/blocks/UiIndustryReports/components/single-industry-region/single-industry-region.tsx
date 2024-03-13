import React, {useMemo} from 'react'
import {Filter, IndustryReportsQuarter} from '../../types/industry-reports-types'
import IndustryHeader from '../reports-tiles/industry-header';
import ReportListQuarters from '../reports-list/reports-list-quarters'
import NoReportAvailable from '../alerts/no-report-available'
import {INDUSTRIES, REGIONS} from '../../utils/industry-reports-constants'

type Props = {
  filter: Filter
  availableQuarters: IndustryReportsQuarter[]
}

function SingleIndustryRegion({filter, availableQuarters}: Props) {
  const {region, industry} = useMemo(() => {
    return {
      region: REGIONS.find(({id}) => id === filter.region),
      industry: INDUSTRIES.find(({id}) => id === filter.industry),
    }
  }, [filter.region, filter.industry])
  return (
    <>
      <IndustryHeader industry={industry} />
      <ReportListQuarters
        industry={industry}
        region={region}
        availableQuarters={availableQuarters}
      />
    </>
  )
}
export default function SingleIndustryRegionWrapper({ filter, availableQuarters}: Props) {
  if (availableQuarters.length === 0) {
    return <NoReportAvailable />
  }
  return (
    <SingleIndustryRegion
      filter={filter}
      availableQuarters={availableQuarters}
    />
  )
}
