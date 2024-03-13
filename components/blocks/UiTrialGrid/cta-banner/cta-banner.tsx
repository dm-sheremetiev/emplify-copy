import React from 'react';
import styles from './cta-banner.module.scss';
import container from '../../UiTrialTable/container.module.scss';

const CtaBanner = ({ data }) => {
  return (
    <div className={container.container}>
      <section className={styles.ctaBanner} dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  );
};

export default CtaBanner;
