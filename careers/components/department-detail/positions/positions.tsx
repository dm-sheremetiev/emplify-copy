import React from 'react';
import { Position } from '@/careers/types/entities-types';
import layout from '@/careers/styles/modules/layout.module.scss';
import styles from './positions.module.scss';
import NoPositionsTile from '../no-positions-tile';
import ExpandablePositionsList from '@/careers/components/expandable-positions-list';

type Props = {
  boardToken?: string;
  positions: Position[];
  prospectPostId?: string;
};

export default function Positions({ positions, prospectPostId, boardToken }: Props): JSX.Element {
  return (
    <section className={`${layout.container} ${styles.tiles}`}>
      {positions.length > 0 ? (
        <ExpandablePositionsList positions={positions} hideDepartment />
      ) : (
        <NoPositionsTile prospectPostId={prospectPostId} boardToken={boardToken} />
      )}
    </section>
  );
}
