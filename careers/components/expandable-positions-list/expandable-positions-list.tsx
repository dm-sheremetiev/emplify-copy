import React, { useEffect } from 'react';
import PositionsList, { PositionsListProps } from '@/careers/components/positions-list';
import ShowMoreContainer from '@/careers/components/show-more';
import b from '@/careers/styles/modules/buttons.module.scss';
import { useFeaturedPositions } from './use-featured-positions';
import { useI18n } from 'next-localization';

export default function ExpandablePositionsList({ positions, ...props }: PositionsListProps): JSX.Element {
  const { positionsToRender, setFeaturedPositions, showAllPositions, hiddenPositionsCount } = useFeaturedPositions(positions);
  const i18n = useI18n();
  const hasEnoughPositions = positions.length > 5;

  useEffect(() => {
    if (hasEnoughPositions) {
      setFeaturedPositions(3);
    } else {
      showAllPositions();
    }
  }, [setFeaturedPositions, showAllPositions, hasEnoughPositions]);

  return (
    <>
      <PositionsList positions={positionsToRender} {...props} />
      {hasEnoughPositions && hiddenPositionsCount > 0 && (
        <ShowMoreContainer>
          <button className={`${b.btn} ${b.btnPrimary} ${b.btnLg}`} onClick={showAllPositions}>
            {i18n.t('morePositionsButton', { hiddenPositionsCount })}
          </button>
        </ShowMoreContainer>
      )}
    </>
  );
}
