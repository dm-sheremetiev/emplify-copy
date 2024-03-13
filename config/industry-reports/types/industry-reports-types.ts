export type IndustryImgs = {
	icon: string
	img: string
	headerImg: string
	headerImg2x: string
}

export type Entry = {
	id: string
	name: string
}

export type IndustryEntry = Entry & IndustryImgs

export type RegionEntry = Entry

export type AllIndustries = Entry

export type LegacyEntry = {
	id: string
	matchWithId: string
}

export type IndustryReportsQuarter = {
	y: number
	q: number
}

export type IndustryReportsConfig = {
	quarters: Array<IndustryReportsQuarter>
	regions: Array<RegionEntry>
	industries: Array<IndustryEntry>
	allIndustries: AllIndustries
	allRegions: RegionEntry
}

export type IndustryRegionPair = {
	industry: string
	region: string
}

export type QuarterConfig = {
	quarter: IndustryReportsQuarter
	missingReports: IndustryRegionPair[]
}
