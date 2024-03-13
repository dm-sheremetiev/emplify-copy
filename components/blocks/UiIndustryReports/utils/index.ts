import {Entry, IndustryImgs, RegionEntry} from '../types/industry-reports-types'

const industryReportsCdn = 'https://emplifi.s3.amazonaws.com/website/img/pages/industry-reports'
export const getIndustryImgs = (id: string): IndustryImgs => {
	return {
		icon: `${industryReportsCdn}/icon-${id}.svg`,
		img: `${industryReportsCdn}/bg-${id}.jpg`,
		headerImg: `${industryReportsCdn}/header-${id}.jpg`,
		headerImg2x: `${industryReportsCdn}/header-${id}@2x.jpg`,
	}
}

export const getReportKey = (industry: Entry, region: RegionEntry): string => {
	return `${industry.id}/${region.id}`
}
