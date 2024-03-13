import {
	isFilteredIndustry,
	isFilteredRegion,
} from 'utils/industry-reports-utils'
import {industries, regions} from './data/definitions'
import {Filter, IndustryReport, IndustryReportsQuarter} from './types/industry-reports-types'
import {getReportKey} from './utils'

export function useAvailableReports(
	missingReportsKeys: string[],
	filter: Filter,
	quarter: IndustryReportsQuarter
): IndustryReport[] {
	const missingReportsSet = new Set(missingReportsKeys)
	const quarterArray = [quarter]
	const availableReports: IndustryReport[] = []

	for (const industry of industries) {
		if (!isFilteredIndustry(industry.id, filter)) {
			continue
		}
		for (const region of regions) {
			if (!isFilteredRegion(region.id, filter)) {
				continue
			}
			const key = getReportKey(industry, region)
			if (!missingReportsSet.has(key)) {
				availableReports.push({industry, region, quarters: quarterArray})
			}
		}
	}
	return availableReports
}
