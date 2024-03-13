import React from 'react'
import {getIndustryImgs} from '../../utils/index'
import styles from './reports-tile.module.scss'
import Image from 'next/image'
import { contentfulImageLoaderFunction } from 'utils/contenful-helper-functions'

const ReportsTile = ({industryReport, quarter}) => {
  const {industry, region} = industryReport
  const {icon, img} = getIndustryImgs(industry.id)

  return (
    <div className={styles.tile} onClick={()=> window.open(`https://emplifi.s3.amazonaws.com/website/pages/industry-reports/${quarter.y}_q${quarter.q}/${quarter.y}_q${quarter.q}_${industry.id}_${region.id}.pdf`)}>
      <Image
        loader={contentfulImageLoaderFunction}
        src={img}
        alt={industry.name || ''}
        className={styles.backgroundImage} 
        width={1000}
        height={1000}
        loading="lazy"
        priority={false}
      />
      <div className={styles.tileContent}>
        <div className={styles.icon} style={{backgroundImage: `url(${icon})`}} />
        <h2>{industry.name}</h2>
        <div className={styles.tileItems}>
          <p>{region.name}</p>
          <p>{`Q${quarter.q} ${quarter.y}`}</p>
        </div>
      </div>
    </div>
  )
}

export default ReportsTile
