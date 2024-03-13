import React, { ReactNode, useContext } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useI18n } from 'next-localization';

import { PrimaryNavContext } from './menu-context';
import { DepartmentsMap } from '@/careers/types/entities-types';

import nav from './nav.module.scss';
import navLink from './nav-link.module.scss';
import styles from './external-link.module.scss';
import primaryNav from './primary-nav.module.scss';
import secondaryNav from './secondary-nav.module.scss';
import flag from '../../styles/modules/flag.module.scss';
import toggleSecondary from './secondary-toggler.module.scss';

type Props = {
  departments: DepartmentsMap;
  positionsCount: number;
  languageSwitcher: ReactNode;
};

const closeDesktopSecondaryNavigation = () => {
  const element: HTMLElement = document.querySelector('.js-nav');
  if (element) {
    element.classList.add(secondaryNav.closeSecondary);
  }
};

const enableDesktopSecondaryNavigation = () => {
  const element: HTMLElement = document.querySelector('.js-nav');
  if (element) {
    element.classList.remove(secondaryNav.closeSecondary);
  }
};

export default function Menu({ departments, languageSwitcher }: Props): JSX.Element {
  const { isPrimaryOpen, setPrimaryOpen } = useContext(PrimaryNavContext);
  const menuDepartments = Array.from(departments.values());
  const { pathname } = useRouter();
  const i18n = useI18n();

  const closeMobileNavigation = () => {
    setPrimaryOpen(false);
  };

  const closeSecondaryNav = () => {
    closeMobileNavigation();
    closeDesktopSecondaryNavigation();
  };

  return (
    <nav className={clsx('js-nav', nav.nav, isPrimaryOpen && nav.navOpen)}>
      <ul className={primaryNav.primaryNav}>
        <li>
          <Link
            prefetch={false}
            href="/careers/open-positions"
            className={clsx(
              navLink.navLink,
              navLink.hasFlag,
              pathname === '/careers/open-positions/[locationKey]' && navLink.active,
              pathname === '/careers/open-positions' && navLink.active
            )}
            onClick={closeMobileNavigation}
          >
            {i18n.t('nav.openPositions')}
            {/* FIXME */}
            {/* after release, remove positionsCount from layout */}
            {/* <span className={flag.flag}>{positionsCount}</span> */}
          </Link>
        </li>
        <li className={primaryNav.hasSubmenu} tabIndex={0} onMouseEnter={enableDesktopSecondaryNavigation}>
          <input type="checkbox" className={toggleSecondary.checkbox} id="menu-secondary-toggler" />
          <label htmlFor="menu-secondary-toggler" className={toggleSecondary.label}>
            <span
              role="button"
              className={clsx(
                toggleSecondary.labelInner,
                primaryNav.navLink,
                navLink.navLink,
                pathname === '/careers/[departmentKey]' && navLink.activeHasSubmenu
              )}
            >
              {i18n.t('nav.departments')}
            </span>
          </label>
          <ul className={`${toggleSecondary.navigation} ${secondaryNav.secondaryNav}`}>
            {menuDepartments.map(({ name, positionsCount, urlKey }) => (
              <li key={urlKey}>
                <Link
                  prefetch={false}
                  href={`/careers/${urlKey}`}
                  className={`${navLink.navLink} ${navLink.navLinkSecondary}`}
                  onClick={closeSecondaryNav}
                  passHref
                >
                  {name}
                  {positionsCount > 0 && <span className={flag.flag}>{positionsCount}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className={primaryNav.dropdown}>
          {languageSwitcher}
          <Link prefetch={false} href="/" className={styles.external} onClick={closeMobileNavigation}>
            emplifi.io
          </Link>
        </li>
      </ul>
    </nav>
  );
}
