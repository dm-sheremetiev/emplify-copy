import {IndustryRegionPair} from '../config/industry-reports/types/industry-reports-types'

export function isFilteredIndustry(
	matchingIndustryId: string,
	{industry}: IndustryRegionPair
): boolean {
	if (industry === "all-industries") {
		return true
	}
	return matchingIndustryId === industry
}
export function isFilteredRegion(
	matchingRegionId: string,
	{region}: IndustryRegionPair
): boolean {
	if (region === "all-regions") {
		return true
	}
	return matchingRegionId === region
}
