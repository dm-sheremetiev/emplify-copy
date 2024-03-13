import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

import styles from './department-header.module.scss';
import typographyStyles from '@/careers/styles/modules/typography.module.scss';

type Props = PropsWithChildren<{
  isEmpty?: boolean;
  description: string;
}>;

export default function DepartmentHeader({ children, isEmpty = false, description }: Props): JSX.Element {
  return (
    <div className={clsx(styles.departmentHeader, isEmpty && styles.variantEmpty)}>
      <div className={styles.textWrapper}>
        <h3 className={styles.heading}>{children}</h3>
        <div className={clsx(typographyStyles.paragraphLg, styles.description)} dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
}
