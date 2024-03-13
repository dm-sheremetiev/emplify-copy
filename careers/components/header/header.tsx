import React, { ReactNode, useEffect, useState } from 'react';
import styles from './header.module.scss';
import toggler from './primary-nav-toggler.module.scss';
import { PrimaryNavContext } from '@/careers/components/menu/menu-context';
import clsx from 'clsx';
import Link from 'next/link';
import detector from './intersection-detector.module.scss';
import { useIntersectionObserver } from '../../hooks/use-intersection-observer';
import globalTypography from '@/careers/styles/modules/global-typography.module.scss';
import globalContainer from '@/careers/styles/modules/container.module.scss';

type Props = {
  title: string;
  children: ReactNode;
};

export default function Header({ children, title }: Props): JSX.Element {
  const [isPrimaryOpen, setPrimaryOpen] = useState<boolean>(false);

  const togglePrimaryNav = () => {
    setPrimaryOpen(!isPrimaryOpen);
  };

  const closeMobileNavigation = () => {
    setPrimaryOpen(false);
  };

  const [ref, isIntersecting] = useIntersectionObserver();

  useEffect(() => {
    const htmlEL = document.documentElement;
    isPrimaryOpen ? htmlEL.classList.add(styles.bodyIsLockedMobile) : htmlEL.classList.remove(styles.bodyIsLockedMobile);
    return () => {
      htmlEL.classList.remove(styles.bodyIsLockedMobile);
    };
  }, [isPrimaryOpen]);

  return (
    <PrimaryNavContext.Provider value={{ isPrimaryOpen, setPrimaryOpen }}>
      <div ref={ref} className={detector.intersectionDetector} />
      <div className={styles.headerWrapper}>
        <header className={clsx(globalTypography.global, styles.header, !isIntersecting && styles.isFloating)}>
          <div className={clsx(globalContainer.container, styles.headerContainer)}>
            <Link prefetch={false} href="/careers" className={styles.link} onClick={closeMobileNavigation} passHref>
              <img className={styles.logo} width="150px" height="32px" src="/images/color-emplifi-logo-RGB.svg" alt="Emplifi" />
              <span className={styles.title}>{title}</span>
            </Link>
            <div className={styles.spacer} />
            <button
              aria-label="Mobile Navigation Trigger"
              aria-haspopup="true"
              aria-expanded="false"
              className={clsx(toggler.primaryNavToggler, isPrimaryOpen && toggler.isOpen)}
              onClick={togglePrimaryNav}
            />
            {children}
          </div>
        </header>
      </div>
    </PrimaryNavContext.Provider>
  );
}
