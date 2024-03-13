import React from 'react';
import styles from '../hp-tiles.module.scss';
import { Position } from '@/careers/types/entities-types';
import PositionTile from '@/careers/components/position-tile';

type Props = {
  positions: Position[];
};

export default function Positions({ positions }: Props): JSX.Element {
  return (
    <ul className={styles.list}>
      {positions.map((position) => {
        return (
          <li key={position.urlKey}>
            <PositionTile position={position} />
          </li>
        );
      })}
    </ul>
  );
}
