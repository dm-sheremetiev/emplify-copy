import memoize from 'lodash.memoize'
import {quartersConfig, quartersKeys} from '../config/industry-reports'
import {
	IndustryRegionPair,
	IndustryReportsQuarter,
	QuarterConfig,
} from '../config/industry-reports/types/industry-reports-types'
import {
	isFilteredIndustry,
	isFilteredRegion,
} from 'utils/industry-reports-utils'

function getIndustryRegionKey({industry, region}: IndustryRegionPair): string {
	return `${industry}/${region}`
}

function getMissingReportsKeys(
	quarterConfig: QuarterConfig,
	filter: IndustryRegionPair
): string[] {
	const missingReports: string[] = []
	for (const report of quarterConfig.missingReports) {
		if (
			isFilteredIndustry(report.industry, filter) &&
			isFilteredRegion(report.region, filter)
		) {
			missingReports.push(getIndustryRegionKey(report))
		}
	}
	return missingReports
}

const getMissingReportsKeysMem = memoize(
	getMissingReportsKeys,
	({quarter}: QuarterConfig, filter: IndustryRegionPair) =>
		`${quarter.q}/${quarter.y}/${filter.industry}/${filter.region}`
)

export {getMissingReportsKeysMem as getMissingReportsKeys}

function getAvailableQuarters(
	industryId: string,
	regionId: string
): IndustryReportsQuarter[] {
	const isMissing = ({missingReports}: QuarterConfig) => {
		return missingReports.some((missingReport) => {
			return (
				missingReport.industry === industryId &&
				missingReport.region === regionId
			)
		})
	}
	const availableQuarters = []

	// Iterate through quartersKeys which is guaranteed to be sorted from the most recent
	for (const key of quartersKeys) {
		const quarterConfig = quartersConfig[key]
		if (!isMissing(quarterConfig)) {
			availableQuarters.push(quarterConfig.quarter)
		}
	}
	return availableQuarters
}

const getAvailableQuartersMem = memoize(
	getAvailableQuarters,
	(industryId: string, regionId: string) => `${industryId}/${regionId}`
)

export {getAvailableQuartersMem as getAvailableQuarters}
