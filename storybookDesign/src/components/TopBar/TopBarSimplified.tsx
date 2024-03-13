import React, { useCallback, useEffect, useState } from 'react';
import './TopBar.scss';

const TopBarSimplified = () => {
  const LS_KEY = 'topBar_ctaBanner';
  const LS_VALUE = 'hidden';
  const [isVisible, setVisibility] = useState(false);

  const hideTopBar = useCallback(() => {
    try {
      setVisibility(false);
      if (navigator.cookieEnabled) sessionStorage.setItem(LS_KEY, LS_VALUE);
    } catch (e) {
      console.error(e);
    }
  }, [LS_VALUE, setVisibility]);

  useEffect(() => {
    try {
      if (navigator.cookieEnabled) setVisibility(sessionStorage.getItem(LS_KEY) !== 'hidden');
    } catch (e) {
      console.error(e);
    }
  }, [LS_KEY, setVisibility]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="top-bar top-bar--simplified">
      <div className="top-bar__wrapper">
        <div className="top-bar__content">
          <h3 className="top-bar__heading">Emplifi Summit '22</h3>
          <p className="top-bar__paragraph">Virtual event October 5th, 9am ET</p>
          <a className="top-bar__btn" target="_blank" rel="noopener noreferrer" href="https://summit.emplifi.io">Register now</a>
        </div>
        <img className="top-bar__bg-img" src="/images/clouds.svg" alt="" role="presentation" />
      </div>
      <span className="top-bar__close" onClick={hideTopBar}>
        close
      </span>
    </div>
  );
};

export default TopBarSimplified;
