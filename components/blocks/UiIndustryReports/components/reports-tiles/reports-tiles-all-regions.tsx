import React, {useMemo} from 'react'
import {
  Entry,
  IndustryReportsQuarter,
  RegionEntry,
  IndustryReport
} from '../../types/industry-reports-types'
import ReportListRegions from '../reports-list/reports-list-regions'
import IndustryHeader from '../reports-tiles/industry-header'

type Props = Readonly<{
  industryReports: Array<IndustryReport>
  quarter: IndustryReportsQuarter
}>

type RegionsByIndustry = [industry: Entry, regions: Entry[]][]

function groupRegionsByIndustry(
  industryReports: IndustryReport[]
): RegionsByIndustry {
  const grouping = new Map<Entry, RegionEntry[]>()
  for (const ir of industryReports) {
    const regions = grouping.get(ir.industry) || []
    regions.push(ir.region)
    grouping.set(ir.industry, regions)
  }
  return Array.from(grouping.entries())
}

export default function ReportsTilesAllRegions({ industryReports, quarter}: Props) {
  const regionsByIndustry = useMemo<RegionsByIndustry>(
    () => groupRegionsByIndustry(industryReports),
    [industryReports]
  )
  return (
    <>
      {regionsByIndustry.map(([industry, regions]) => {
        return (
          <section key={industry.id}>
            <IndustryHeader industry={industry} />
            <ReportListRegions
              industry={industry}
              regions={regions}
              quarter={quarter}
            />
          </section>
        )
      })}
    </>
  )
}
