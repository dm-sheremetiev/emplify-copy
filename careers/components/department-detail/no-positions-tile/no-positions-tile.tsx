import React from 'react';
import { useI18n } from 'next-localization';
import GreenhouseForm from '@/careers/components/greenhouse-form';

import styles from './no-positions-tile.module.scss';
import typographyStyles from '../../../styles/modules/typography.module.scss';

type Props = {
  prospectPostId?: string | null;
  boardToken?: string | null;
};

export default function NoPositionsTile({ prospectPostId, boardToken }: Props): JSX.Element {
  const i18n = useI18n();
  return (
    <div className={styles.container}>
      <p className={typographyStyles.paragraph}>{i18n.t('openPositions.noPositionsDescription')}</p>
      {prospectPostId && <GreenhouseForm positionId={prospectPostId} boardToken={boardToken} center />}
    </div>
  );
}
