import React, { SyntheticEvent, useCallback, useEffect, useState } from 'react';
import shareIcons from './share-icons.module.scss';

type Props = {
  description: string;
  twDescription: string;
  defaultUrl?: string;
  title: string;
};

export default function ShareIcons({ defaultUrl, description, twDescription, title }: Props): JSX.Element {
  const [url, setUrl] = useState(defaultUrl || '');
  useEffect(() => {
    if (!url) {
      setUrl(window.location.href);
    }
  }, [url]);

  const encodedDescription = encodeURIComponent(description);
  const encodedTwDescription = encodeURIComponent(twDescription);
  const encodedTitle = encodeURIComponent(title);
  const facebookHref = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(url + '?utm_source=fb&utm_medium=organic')}`;
  const twitterHref = `https://twitter.com/share?text=${encodedTwDescription}&url=${encodeURIComponent(url + '?utm_source=tw&utm_medium=organic')}`;
  const linkedInHref = `https://www.linkedin.com/shareArticle?mini=true&title=${encodedTitle}&summary=${encodedDescription}&url=${encodeURIComponent(
    url + '?utm_source=li&utm_medium=organic'
  )}`;
  const handleClick = useCallback<(e: SyntheticEvent<HTMLAnchorElement>) => void>((e) => {
    e.preventDefault();
    window.open(e.currentTarget.href, 'sharer', 'width=600,height=400');
  }, []);

  return (
    <ul className={shareIcons.shareIcons}>
      <li>
        <a href={facebookHref} onClick={handleClick} className={shareIcons.fb} rel="noopener noreferrer" target="popup">
          <span className={shareIcons.visuallyHidden}>Share this position on Facebook</span>
        </a>
      </li>
      <li>
        <a href={twitterHref} className={shareIcons.tw} onClick={handleClick} rel="noopener noreferrer" target="popup">
          <span className={shareIcons.visuallyHidden}>Share this position on Twitter</span>
        </a>
      </li>
      <li>
        <a href={linkedInHref} onClick={handleClick} className={shareIcons.in} rel="noopener noreferrer" target="popup">
          <span className={shareIcons.visuallyHidden}>Share this position on LinkedIn</span>
        </a>
      </li>
    </ul>
  );
}
