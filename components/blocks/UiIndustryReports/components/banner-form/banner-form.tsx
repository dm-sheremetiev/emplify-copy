import React, {useCallback, useRef} from 'react'
import styles from './banner-form.module.scss'
import {industries, allIndustries, regions, allRegions} from '../../data/definitions'
import {Filter} from '../../types/industry-reports-types'

type Props = {
  filter: Filter
  onFilterChange: (a: Filter) => void
}

const BannerForm = ({filter: currentFilter, onFilterChange} :Props) => {
  const formRef = useRef<HTMLFormElement | null>(null)

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formRef.current) {
      const formData = new FormData(formRef.current)
      const formValues: any = Object.fromEntries(formData.entries())
      onFilterChange(formValues)
    }
  }, [onFilterChange])

  return (
    <div className={styles.bannerForm}>
      <div className={styles.formHead}>
        <h3>Select Your Report</h3>
      </div>
      <form ref={formRef} onSubmit={handleSubmit} onChange={handleSubmit}>
        <div className={styles.fieldsWrapper}>
          <label htmlFor="banner-form-industry">Industry</label>
          <select defaultValue={currentFilter.industry} id='banner-form-industry' name='industry'>
            <option value={allIndustries.id}>{allIndustries.name}</option>
            {industries.map(({id, name}) => {
              return (
                <option key={id} value={id}>{name}</option>
              )
            })}
          </select>
        </div>
        <p>in</p>
        <div className={styles.fieldsWrapper}>
          <label htmlFor="">Country</label>
          <select defaultValue={currentFilter.region} id='banner-form-region' name='region'>
            <option value={allRegions.id}>{allRegions.name}</option>
            {regions.map(({id, name}) => {
              return (
                <option key={id} value={id}>{name}</option>
              )
            })}
          </select>
        </div>
      </form>
    </div>
  )
}

export default BannerForm
