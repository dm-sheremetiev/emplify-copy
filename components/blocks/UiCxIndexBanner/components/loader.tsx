import React from 'react'
import styles from './loader.module.scss'

const Loader = () => (
  <div className={styles.loader}>
    <span className={styles.dot}></span>
    <span className={styles.dot}></span>
    <span className={styles.dot}></span>
  </div>
)

export default Loader
