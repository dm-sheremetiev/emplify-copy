import React, {useCallback} from 'react'
import {useRouter} from 'next/router'
import styles from './industry-reports.module.scss'
import BannerForm from './components/banner-form/banner-form'

import {
  INDUSTRY_ALL,
  REGION_ALL,
  REGION_WORLDWIDE,
} from './utils/industry-reports-constants'
import {
  getAvailableQuarters,
  getMissingReportsKeys,
} from 'ssr-utils/industry-reports-ssr-utils'
import {latestQuarter} from 'config/industry-reports'
import MultiIndustryRegion from './components/multi-industry-region/multi-industry-region'
import HeroBanner from './components/hero-banner/hero-banner'
import SingleIndustryRegion from './components/single-industry-region/single-industry-region'
import { jsonModel } from '@/interfaces/blocks';

function resolveFilter(query: {industry?: string; region?: string}) {
  return {
    industry: query.industry || INDUSTRY_ALL.id,
    region: query.region || REGION_WORLDWIDE.id,
  }
}

export function UiIndustryReportsPageComp(props: { block: jsonModel }): JSX.Element {
  const { data } = props.block
  const router = useRouter()
  const quarter = latestQuarter.quarter
  const filter = resolveFilter(router.query)

  const onFilterChange = useCallback(
    (formValues) => {
      router.push({ pathname: window.location.pathname, query: formValues }, undefined, { scroll: false, shallow: true });
    },
    [router]
  );

  let availableQuarters = null;
  let missingReports = null;

  if (filter.industry !== INDUSTRY_ALL.id && filter.region !== REGION_ALL.id) {
    availableQuarters = getAvailableQuarters(filter.industry, filter.region);
  } else {
    missingReports = getMissingReportsKeys(latestQuarter, filter);
  }

  return (
    <div className={styles.pageWrapper}>
      <HeroBanner data={data}>
        <BannerForm filter={filter} onFilterChange={onFilterChange} />
      </HeroBanner>
      <div className={styles.container}>
        {availableQuarters ? (
          <SingleIndustryRegion
            availableQuarters={availableQuarters}
            filter={filter}
          />
        ) : (
          <MultiIndustryRegion filter={filter} quarter={quarter} missingReports={missingReports} />
        )}
      </div>
    </div>
  )
}
