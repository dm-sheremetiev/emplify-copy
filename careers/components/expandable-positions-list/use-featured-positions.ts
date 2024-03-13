import { useCallback, useState } from 'react';
import { Position } from '@/careers/types/entities-types';

type OutputTypes = {
  positionsToRender: Array<Position>;
  setFeaturedPositions: (number) => void;
  showAllPositions: () => void;
  hiddenPositionsCount: number;
};

export const useFeaturedPositions = (positions: Position[]): OutputTypes => {
  const [positionsToRender, setPositions] = useState(positions);
  const [hiddenPositionsCount, setHiddenPositionCount] = useState(0);

  const setFeaturedPositions = useCallback(
    (numberOfFeaturedPositions: number): void => {
      setPositions(positions.slice(0, numberOfFeaturedPositions));
      setHiddenPositionCount(positions.length - numberOfFeaturedPositions);
    },
    [positions, setPositions, setHiddenPositionCount]
  );
  const showAllPositions = useCallback((): void => {
    setPositions(positions);
    setHiddenPositionCount(0);
  }, [positions, setPositions, setHiddenPositionCount]);

  return {
    showAllPositions,
    positionsToRender,
    setFeaturedPositions,
    hiddenPositionsCount
  };
};
