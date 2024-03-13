import React from 'react';
import Banner from './banner/banner';
import RichText from '../rich-text';
import styles from './privacy-statement.module.scss';
import layout from '../../styles/modules/layout.module.scss';
import { GenericPageCopy } from '@/careers/types/copy-types';

type Props = {
  copy: Partial<GenericPageCopy>;
};

export default function PrivacyStatement({ copy }: Props): JSX.Element {
  const { title, content, excerpt } = copy;

  return (
    <>
      <Banner copy={{ title, excerpt }} />
      <div className={`${layout.container} ${styles.wrapper}`}>
        <section className={styles.section}>
          <RichText content={content.json} />
        </section>
      </div>
    </>
  );
}
