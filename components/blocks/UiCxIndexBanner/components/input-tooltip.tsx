import React from 'react'
import styles from './input-tooltip.module.scss'

type Props = {
  text: string
}

const InputTooltip = ({text}: Props) => (
  <p className={styles.tooltip}>{text}</p>
)

export default InputTooltip
