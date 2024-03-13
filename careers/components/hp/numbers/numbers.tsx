import React from 'react';
import { useI18n } from 'next-localization';
import numbers from './numbers.module.scss';
import typographyStyles from '@/careers/styles/modules/typography.module.scss';

export default function Numbers(): JSX.Element {
  const i18n = useI18n();

  return (
    <ul className={numbers.list}>
      <li className={numbers.item}>
        2008
        <span className={typographyStyles.paragraphSm}>{i18n.t('numbers.founded')}</span>
      </li>
      <li className={numbers.item}>
        500+
        <span className={typographyStyles.paragraphSm}>{i18n.t('numbers.employees')}</span>
      </li>
      <li className={numbers.item}>
        40+
        <span className={typographyStyles.paragraphSm}>{i18n.t('numbers.nationalities')}</span>
      </li>
    </ul>
  );
}
