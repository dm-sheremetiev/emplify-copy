import React from 'react';
import Tile from './tile';
import { TileData } from '@/careers/types/copy-types';

import styles from './section-with-tiles.module.scss';
import layout from '@/careers/styles/modules/layout.module.scss';
import typographyStyles from '@/careers/styles/modules/typography.module.scss';

type Props = {
  data: TileData[];
  title: string;
};

export default function SectionWithTiles({ data, title }: Props): JSX.Element {
  return (
    <div className={`${styles.wrapper} ${layout.container}`}>
      <h2 className={typographyStyles.headingTertiary}>{title}</h2>
      <div className={styles.tiles}>
        {data.map(({ text, img, link }) => {
          return <Tile key={text} img={img} link={link} text={text} />;
        })}
      </div>
    </div>
  );
}
