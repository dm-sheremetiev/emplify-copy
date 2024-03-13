import allQuarters from './all-quarters.json'

/**
 * @typedef { import("types/industry-reports-types").QuarterConfig } QuarterConfig
 * @typedef { import("types/industry-reports-types").IndustryReportsQuarters } IndustryReportsConfig
 */

/** @type {Record<string, QuarterConfig>} */
export const quartersConfig = allQuarters

/** @type {string[]} */
export const quartersKeys = Object.keys(allQuarters).sort().reverse() // Apparently this is the fastest inverse sort?

/** @type {QuarterConfig} */
export const latestQuarter = allQuarters[quartersKeys[0]]
