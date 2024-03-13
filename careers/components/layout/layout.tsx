import clsx from 'clsx';
import React, { ReactNode } from 'react';

import Menu from '../menu/menu';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useI18n } from 'next-localization';
import { LocalePath } from '@/careers/types/locale-types';
import { DepartmentsMap } from '../../types/entities-types';
import LanguageSwitcher from '../header/language-switcher';

import styles from './layout.module.scss';
import typographyStyles from '@/careers/styles/modules/global-typography.module.scss';

type Props = {
  children: ReactNode;
  departments: DepartmentsMap;
  positionsCount: number;
  overflowHidden?: boolean;
  localePaths?: LocalePath[];
};

export default function Layout({ children, departments, positionsCount, overflowHidden, localePaths }: Props): JSX.Element {
  const i18n = useI18n();

  return (
    <>
      <Header title={i18n.t('nav.title')}>
        <Menu
          departments={departments}
          positionsCount={positionsCount}
          languageSwitcher={<LanguageSwitcher selectLanguageCopy={i18n.t('nav.selectLng')} localePaths={localePaths} />}
        />
      </Header>
      <div className={clsx(typographyStyles.global, overflowHidden && styles.overflowHidden)}>{children}</div>
      <Footer />
    </>
  );
}
