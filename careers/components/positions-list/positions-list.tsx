import React from 'react';
import PositionTile, { PositionTileToggles } from '@/careers/components/position-tile';
import { Position } from '@/careers/types/entities-types';

export type PositionsListProps = PositionTileToggles & {
  positions: Array<Position>;
  customClassName?: string;
};

const PositionsList = ({ positions, customClassName, ...props }: PositionsListProps) => {
  return (
    <ul className={customClassName}>
      {positions.map((position) => (
        <li key={position.urlKey}>
          <PositionTile position={position} {...props} />
        </li>
      ))}
    </ul>
  );
};

export default PositionsList;
