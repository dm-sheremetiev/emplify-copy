import React from 'react';

export const Layout = (props: { children: React.ReactNode; id?: string }): JSX.Element => {
  const { children } = props;
  return (
    <div style={styles.layout as React.CSSProperties}>
      <div id={props?.id} style={styles.container}>
        {children}
      </div>
    </div>
  );
};

const styles = {
  layout: {
    width: '100%',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
  },
};

export { HeadComponent } from './head';
export { HeaderComp } from './header';
export { UiAwardsComp } from '../blocks/UiAwards';
export { FooterComp } from './footer';
