import React from 'react';
import DepartmentHeader from '../department-header';
import GreenhouseForm from '@/careers/components/greenhouse-form';
import { useI18n } from 'next-localization';

type Props = {
  prospectPostId?: string | null;
  boardToken?: string | null;
};

export default function NoPositions({ prospectPostId, boardToken }: Props): JSX.Element {
  const { t } = useI18n();

  return (
    <div>
      <DepartmentHeader isEmpty description={t('openPositions.noPositionsDescription')}>
        {t('openPositions.noWorries')}
      </DepartmentHeader>
      {prospectPostId && <GreenhouseForm positionId={prospectPostId} boardToken={boardToken} center />}
    </div>
  );
}
