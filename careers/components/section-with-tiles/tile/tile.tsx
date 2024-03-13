import React from 'react';

import styles from './tile.module.scss';
import typographyStyles from '@/careers/styles/modules/typography.module.scss';

type Props = {
  link: string;
  text: string;
  img: string;
};

export default function Tile({ link, text, img }: Props): JSX.Element {
  return (
    <a className={styles.wrapper} href={link} target="_blank" rel="noreferrer">
      <div className={styles.content}>
        <img src={img} alt="" role="presentation" />
        <p className={typographyStyles.paragraph}>{text}</p>
      </div>
    </a>
  );
}
