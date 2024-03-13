import React from 'react';
import styles from './table-row.module.scss'
import icons from '../icons.module.scss'
import tooltip from '../table-tooltip.module.scss'
import clsx from 'clsx';

const TableRow = ({data, last}) => {
  return (
    <div className={clsx(styles.tableRow, last && styles.last)}>
      <div className={clsx(styles.colSpan, data[0].noBg && styles.noBgColspan )}>
        {data[0].withTooltip ? (
          <span className={tooltip.tooltip} data-tip={data[0].tooltip}>
            {data[0].value}
            <div className={icons.infoIcon} />
          </span>
        ) : (
          <p>{data[0].value}</p>
        )}
      </div>

       <div className={clsx(styles.cell, data[1].noBg && styles.noBg)}>
          <div className={clsx(styles.featureValue, data[1].asHeading && styles.asHeading)}>
            {data[1].withTooltip ? (
              <span className={clsx(tooltip.tooltip, tooltip.dark)} data-tip={data[1].tooltip}>
                {data[1].value}
                <div className={icons.infoIcon} />
              </span>
            ) : (
              data[1].value
            )}
            {data[1].showIconCheck && <span className={clsx(icons.icon, icons.checkIcon)} />}
            {data[1].showIconX && <span className={clsx(icons.icon, icons.xIcon)} />}
          </div>
       </div>

      <div className={clsx(styles.cell, data[2].withBorderBottom && styles.withBorderBottom)}>
        <div className={clsx(styles.featureValue, data[2].asHeading && styles.asHeading)}>
          {data[2].withTooltip ? (
            <span className={clsx(tooltip.tooltip, tooltip.dark)} data-tip={data[2].tooltip}>
                {data[2].value}
                <div className={icons.infoIcon} />
            </span>
          ) : (
            data[2].value
          )}
          {data[2].showIconCheck && <span className={clsx(icons.icon, icons.checkIcon)} />}
          {data[2].showIconX && <span className={clsx(icons.icon, icons.xIcon)} />}
        </div>
      </div>
    </div>
  )
}

export default TableRow
