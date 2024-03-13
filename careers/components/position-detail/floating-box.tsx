import React, { MouseEvent, ReactNode } from 'react';
import { useI18n } from 'next-localization';
import { PositionDetail } from '@/careers/types/entities-types';

import boxStyles from './box.module.scss';
import boxGridStyles from './box-grid.module.scss';
import btnStyles from '../../styles/modules/buttons.module.scss';
import typographyStyles from '../../styles/modules/typography.module.scss';

type Props = {
  positionDetail: PositionDetail;
  children: ReactNode;
};

function scrollToForm(e: MouseEvent<HTMLAnchorElement>) {
  const hashTarget = e.currentTarget.hash;
  if (!hashTarget) {
    return;
  }
  const targetElement = document.querySelector(hashTarget);
  if (!targetElement) {
    return;
  }
  e.preventDefault();
  targetElement.scrollIntoView({ behavior: 'smooth' });
}

export default function FloatingBox({ positionDetail, children }: Props): JSX.Element {
  const { department, title, metadata, location } = positionDetail;
  const i18n = useI18n();

  return (
    <div className={boxStyles.box}>
      <dl className={boxGridStyles.grid}>
        <div className={boxGridStyles.row}>
          <dt className={`${typographyStyles.paragraphSm} ${boxStyles.label}`}>{i18n.t('jobDetail.position')}:</dt>
          <dd className={`${typographyStyles.paragraphLg} ${boxStyles.name}`}>{title}</dd>
        </div>
        <div className={boxGridStyles.row}>
          <dt className={`${typographyStyles.paragraphSm} ${boxStyles.label}`}>{i18n.t('jobDetail.department')}:</dt>
          <dd className={typographyStyles.paragraphLg}>{department}</dd>
        </div>
        <div className={boxGridStyles.row}>
          <dt className={`${typographyStyles.paragraphSm} ${boxStyles.label}`}>{i18n.t('jobDetail.location')}:</dt>
          <dd className={`${typographyStyles.paragraphLg} ${boxStyles.visibilityHelper} ${boxGridStyles.dotSeparator}`}>{location}</dd>
        </div>
        {metadata.map(({ name, value }) => {
          const localizedName = i18n.t(`jobDetail.metadata.name.${name}`) || name;
          const localizedValue = i18n.t(`jobDetail.metadata.value.${value}`) || value;
          return (
            <div className={boxGridStyles.row} key={name}>
              <dt className={`${typographyStyles.paragraphSm} ${boxStyles.label}`}>{localizedName}:</dt>
              <dd className={`${typographyStyles.paragraphLg} ${boxStyles.visibilityHelper} ${boxGridStyles.dotSeparator} `}>{localizedValue}</dd>
            </div>
          );
        })}
      </dl>
      <a href="#grnhse_app" onClick={scrollToForm} className={`${btnStyles.btnPrimary} ${btnStyles.btnLg} gtm-careers-apply-link`}>
        {i18n.t('jobDetail.button')}
      </a>
      {children}
    </div>
  );
}
