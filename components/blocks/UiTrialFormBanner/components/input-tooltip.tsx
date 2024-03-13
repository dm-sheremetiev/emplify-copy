import React from 'react'
import styles from './input-tooltip.module.scss'

const InputTooltip = () => (
  <p className={styles.tooltip}>Password must contain at least TWO of the following: lowercase letters,
    uppercase letters, numbers, symbols ([ & @) or spaces. And consist of 8 or
    more characters.
  </p>
)

export default InputTooltip
