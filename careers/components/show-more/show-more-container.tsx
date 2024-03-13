import React, { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './show-more.module.scss';

type Props = {
  customClassName?: string;
  children: ReactNode;
};

function ShowMoreContainer({ customClassName, children }: Props) {
  return <div className={clsx(styles.container, customClassName)}>{children}</div>;
}

export default ShowMoreContainer;
