import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { MouseEvent, useRef, useState } from 'react';

import { locales } from '@/careers/config';
import { LocalePath } from '@/careers/types/locale-types';
import useOnClickOutside from '../../hooks/use-outside-click';

import styles from './language-switcher.module.scss';
import linkStyles from '@/careers/styles/modules/link.module.scss';

type Props = {
  selectLanguageCopy: string;
  localePaths?: LocalePath[];
};

function getPaths(asPath: string, localePaths?: LocalePath[]): LocalePath[] {
  if (localePaths) {
    return localePaths;
  }

  return locales.map((locale) => {
    return {
      locale,
      path: asPath
    };
  });
}

export default function LanguageSwitcher({ selectLanguageCopy, localePaths }: Props): JSX.Element {
  const [isOpen, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const { locale: currentLocale, asPath } = router;
  const ref = useRef<HTMLDivElement>(null);

  const toggleSwitcher = () => {
    setOpen(!isOpen);
  };

  const closeSwitcher = (e: MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).closest('a')) {
      setOpen(false);
    }
  };
  useOnClickOutside(ref, () => setOpen(false));

  const paths = getPaths(asPath, localePaths);
  if (paths.length <= 1) return null;

  return (
    <div className={styles.lngSwitcher} ref={ref}>
      <div>
        <button onClick={toggleSwitcher} className={clsx(linkStyles.arrowWhite, styles.button, isOpen && styles.isClicked)}>
          {selectLanguageCopy} ({currentLocale})
        </button>
        <ul className={clsx(styles.lngList, isOpen && styles.isOpen)} onClick={closeSwitcher}>
          {paths.map(({ locale, path }) => {
            return (
              <li key={locale}>
                <Link
                  prefetch={false}
                  href={path}
                  locale={locale}
                  className={clsx(styles.lngLink, currentLocale === locale && styles.isActive)}
                  passHref
                >
                  {locale}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
