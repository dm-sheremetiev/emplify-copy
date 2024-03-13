import React from 'react';
import styles from './header-simplified.module.scss';
import Link from 'next/link';

type Props = {
  src?: string,
  alt?: string
}

const HeaderSimplified = ({src, alt}: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <Link
            prefetch={false}
            href='/'
            className={styles.link}
            passHref
          >
            <img className={styles.logo} src={src} alt={alt} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderSimplified;
