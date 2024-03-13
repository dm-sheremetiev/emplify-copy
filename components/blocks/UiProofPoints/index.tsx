import { Fragment } from 'react';
import { UiThreeCardGroup } from '@/interfaces/blocks';
import styles from './proofPoints.module.scss';
import ProofPointsItem from './proofPointsItem';
import clsx from 'clsx';

export default function UiProofPointsComp(props: { block: UiThreeCardGroup, isRounded: boolean, title: string }): JSX.Element {
  const { block, isRounded, title } = props;
  const items = block.cardsCollection?.items;

  return (
    items &&
    items.length !== 0 && (
      <div className={clsx(styles.wrapper, isRounded && styles.isRounded)}>
        {isRounded && <div className={styles.titleHolder} dangerouslySetInnerHTML={{ __html: title || '' }} />}
        <div className={clsx(styles.inner, isRounded && styles.isRounded)}>
          {items.map((item, index) => (
            <Fragment key={index}>
              <ProofPointsItem isRounded={isRounded} item={item} />
            </Fragment>
          ))}
        </div>
      </div>
    )
  );
}
