import React from 'react';
import { useI18n } from 'next-localization';
import { Department, Position } from '@/careers/types/entities-types';

import styles from './positions-header.module.scss';
import layoutStyles from '@/careers/styles/modules/layout.module.scss';
import typographyStyles from '@/careers/styles/modules/typography.module.scss';

type Props = {
  department: Department;
  positions: Position[];
};

export default function PositionsHeader({ department, positions }: Props): JSX.Element {
  const i18n = useI18n();
  const departmentName = department.name;

  return (
    <div className={layoutStyles.container}>
      {positions.length > 0 ? (
        <h2 className={`${typographyStyles.headingTertiary} ${styles.heading}`}>{i18n.t('departments.allRoles', { departmentName })}</h2>
      ) : (
        <h2 className={`${typographyStyles.headingTertiary} ${styles.heading}`}>{i18n.t('departments.allRolesFilled', { departmentName })}</h2>
      )}
    </div>
  );
}
