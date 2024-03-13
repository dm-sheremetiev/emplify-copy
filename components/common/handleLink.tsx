/* eslint-disable no-case-declarations */
import Link from 'next/link';
import { Button, Typography } from '../../storybookBuild/index';

// Interfaces
import { UiHero } from '@/interfaces/blocks';
import { MouseEventHandler } from 'react';
import { externalLink, internalLink, navigationLink } from '@/interfaces/index';

export function LinkHandlerButton(props: {
  cta: navigationLink;
  ctaType?: UiHero['ctaType'];
  typography?: boolean;
  hasArrow?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}): JSX.Element {
  const { ctaType, cta, typography } = props;
  const type = ctaType || 'Primary';
  const navLink = linkHandler(cta);

  if (typography) {
    return (
      <Link
        prefetch={false}
        href={navLink.link}
        onClick={props?.onClick}
        target={navLink.target ? navLink.target : undefined}
        rel={navLink.target === '_blank' ? 'noopener noreferrer' : undefined}
        passHref
      >
        <Typography type="HomeHeroCopy">{navLink.title}</Typography>
      </Link>
    );
  }

  if (navLink.link) {
    return <Link
      prefetch={false}
      href={navLink.link}
      onClick={props?.onClick}
      target={navLink.target ? navLink.target : undefined}
      rel={navLink.target === '_blank' ? 'noopener noreferrer' : undefined}
      passHref
    >
      <Button type={type}>
        {navLink?.title?.replace(' >', '')} {props.hasArrow ? '»' : ''}
      </Button>
    </Link>
  }

  return (
    <></>
  );
}

export function linkHandler(navLink: navigationLink): { link: string; target: string; title: string } {
  let link = '';
  let target = '';
  let title = '';
  let typename = '';

  if ((navLink as internalLink)?.internalLink) {
    typename = 'InternalNavigationLink';
  } 
  else {
    typename = 'ExternalNavigationLink';
  } 
  
  switch (typename) {
    case 'ExternalNavigationLink':
      const externalLink = navLink as externalLink;
      link = externalLink?.externalLink;
      target = externalLink?.target || '_blank';
      title = externalLink?.displayTitle;
      break;
    case 'InternalNavigationLink':
      const internalLink = navLink as internalLink;
      if (internalLink?.internalLink) {
        link = internalLink?.internalLink?.pagePath
          ? `/${internalLink?.internalLink?.pagePath}/${internalLink?.internalLink?.slug}`
          : `/${internalLink?.internalLink?.slug}`;
      }

      if (internalLink?.querystring) {
        link += internalLink?.querystring;
      }

      title = internalLink?.displayTitle;
      break;
    default:
      break;
  }

  return {
    link,
    target,
    title
  };
}
