import React from 'react';
import Link from 'next/link';
import { useI18n } from 'next-localization';

import styles from './asset-holder.module.scss';
import footerStyles from './footer.module.scss';
import layoutStyles from '../../styles/modules/layout.module.scss';
import linkStyles from '@/careers/styles/modules/link.module.scss';
import typographyStyles from '../../styles/modules/typography.module.scss';

export default function Footer(): JSX.Element {
  const i18n = useI18n();

  return (
    <footer className={footerStyles.footer}>
      <span className={`${footerStyles.pattern} ${footerStyles.pattern1}`} />
      <span className={`${footerStyles.pattern} ${footerStyles.pattern2}`} />
      <div className={layoutStyles.container}>
        <div className={styles.assetHolder}>
          <img loading="lazy" src="/images/emplifi-logo-wht.svg" alt="Emplifi" className={styles.logo} />
          <div className={styles.bgImage} />
        </div>
        <ul className={footerStyles.credit}>
          <li>
            <Link href="/careers/privacy-statement" prefetch={false} className={linkStyles.arrowWhite}>
              {i18n.t('footer.privacy')}
            </Link>
          </li>
          <li className={typographyStyles.paragraphSm}>&copy; Emplifi</li>
        </ul>
      </div>
    </footer>
  );
}
