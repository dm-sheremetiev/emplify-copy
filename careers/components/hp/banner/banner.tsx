import React from 'react';
import Link from 'next/link';
import { useI18n } from 'next-localization';
import { HomepageCopy } from '@/careers/types/copy-types';

import bannerStyles from './banner.module.scss';
import btnStyles from '@/careers/styles/modules/buttons.module.scss';
import layoutStyles from '@/careers/styles/modules/layout.module.scss';
import typographyStyles from '@/careers/styles/modules/typography.module.scss';

type Props = {
  positionsCount: number;
  copy: Pick<HomepageCopy, 'title' | 'excerpt'>;
};

export default function Banner({ positionsCount, copy }: Props): JSX.Element {
  const i18n = useI18n();
  const { title, excerpt } = copy;

  return (
    <div className={bannerStyles.wrapper}>
      <div className={layoutStyles.container}>
        <h1 className={`${typographyStyles.headingHero} ${bannerStyles.header}`}>{title}</h1>
        <p className={bannerStyles.perex}>{excerpt}</p>
        <div className={bannerStyles.btnWrapper}>
          <Link prefetch={false} href="/careers/open-positions" className={`${btnStyles.btnPrimary} ${btnStyles.btnLg}`} passHref>
            {i18n.t('button', { positionsCount })}
          </Link>
        </div>
      </div>
      <span className={`${bannerStyles.pattern} ${bannerStyles.pattern1}`} />
      <span className={`${bannerStyles.pattern} ${bannerStyles.pattern2}`} />
    </div>
  );
}
