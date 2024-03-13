import React from 'react';
import RichText from '../../rich-text';
import { GenericPageCopy } from '../../../types/copy-types';

import bannerStyles from './banner.module.scss';
import layoutStyles from '../../../styles/modules/layout.module.scss';
import typographyStyles from '@/careers/styles/modules/typography.module.scss';

type Props = {
  copy: Partial<GenericPageCopy>;
};

export default function Banner({ copy }: Props): JSX.Element {
  const { title, excerpt } = copy;

  return (
    <div className={bannerStyles.wrapper}>
      <div className={layoutStyles.container}>
        <h1 className={typographyStyles.heading}>{title}</h1>
        <RichText content={excerpt.json} />
      </div>
    </div>
  );
}
