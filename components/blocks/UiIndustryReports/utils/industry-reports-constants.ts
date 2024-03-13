import {industries, regions, allIndustries, allRegions} from '../data/definitions'

export const REGIONS = regions
export const INDUSTRIES = industries
export const REGION_WORLDWIDE = regions[0]
export const REGION_ALL = allRegions
export const INDUSTRY_ALL = allIndustries

export const INDUSTRIES_FULL = [...industries, allIndustries]
export const REGIONS_FULL = [...regions, allRegions]
export const INDUSTRIES_KEYS = new Set(INDUSTRIES_FULL.map(({id}) => id))
export const REGIONS_KEYS = new Set(REGIONS_FULL.map(({id}) => id))

