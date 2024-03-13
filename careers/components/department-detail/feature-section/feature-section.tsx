import React, { ReactNode } from 'react';
import styles from './feature-section.module.scss';
import layout from '@/careers/styles/modules/layout.module.scss';
import clsx from 'clsx';

type Props = {
  reverse?: boolean;
  children: ReactNode;
};

export default function FeatureSection({ children, reverse }: Props): JSX.Element {
  return <div className={clsx(styles.wrapper, layout.container, reverse && styles.reverse)}>{children}</div>;
}
