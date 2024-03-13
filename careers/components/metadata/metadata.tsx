import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo, NextSeoProps } from 'next-seo';
import { LocalePath } from '@/careers/types/locale-types';
import { defaultLocale, ogDefaultUrl } from '@/careers/config';
import Fonts from '@/components/layout/head/fonts';
import Favicons from '@/components/layout/head/favicons';
import GTMScript from '@/components/layout/head/gtm-script';

const DEFAULT_OG_IMAGE = [
  {
    url: ogDefaultUrl,
    width: 1200,
    height: 630
  }
];

type MetadataProps = {
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: {
    url: string;
  };
};
type Props = {
  metadata: Omit<NextSeoProps, 'openGraph' | 'languageAlternates'> & MetadataProps;
  localePaths?: LocalePath[];
};

function generateLangAlternates(asPath: string): NextSeoProps['languageAlternates'] {
  const defaultURL = process.env.SERVER_URL + asPath;
  return [
    { href: defaultURL, hrefLang: 'x-default' },
    { href: defaultURL, hrefLang: 'en' },
    { href: process.env.SERVER_URL + '/fr' + asPath, hrefLang: 'fr' }
  ];
}

function getAbsoluteLangAlternates(localePaths: LocalePath[], defaultLocale: string): NextSeoProps['languageAlternates'] {
  const languageAlternates = [];
  for (const { locale, path } of localePaths) {
    if (locale === defaultLocale) {
      const href = process.env.SERVER_URL + path;
      languageAlternates.push({ hrefLang: 'x-default', href }, { hrefLang: locale, href });
    } else {
      languageAlternates.push({ hrefLang: locale, href: process.env.SERVER_URL + '/' + locale + path });
    }
  }
  return languageAlternates;
}

export default function Metadata({ metadata, localePaths }: Props): JSX.Element {
  const { title, description, ogTitle, ogDescription, ogImage, additionalMetaTags, twitter } = metadata;
  const { locale, asPath } = useRouter();
  const serverUrl = process.env.SERVER_URL;
  const pathLocale = locale === defaultLocale ? '' : `/${locale}`;
  const canonical = serverUrl + pathLocale + asPath;
  const languageAlternates = localePaths ? getAbsoluteLangAlternates(localePaths, defaultLocale) : generateLangAlternates(asPath);

  const seoIndexing = [];
  if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'dev') {
    seoIndexing.push('noindex', 'nofollow');
  } else {
    seoIndexing.push('index', 'follow');
  }

  return (
    <>
      <NextSeo
        titleTemplate="%s | Emplifi"
        title={title}
        description={description}
        openGraph={{
          url: canonical,
          title: ogTitle,
          description: ogDescription,
          type: 'website',
          images: ogImage
            ? [
                {
                  url: ogImage.url,
                  alt: ogTitle
                }
              ]
            : DEFAULT_OG_IMAGE
        }}
        canonical={canonical.split('?')[0]}
        additionalMetaTags={additionalMetaTags}
        languageAlternates={languageAlternates.map((item) => ({ ...item, href: item.href.split('?')[0] }))}
        twitter={twitter}
      />

      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover" />
        <meta key="robots" name="robots" content={seoIndexing.join(',')} />
        <meta key="googlebot" name="googlebot" content={seoIndexing.join(',')} />
        <meta key="googlebot-news" name="googlebot-news" content={seoIndexing.join(',')} />

        <Fonts />
        <Favicons />
      </Head>

      {process.env.NEXT_PUBLIC_ENVIRONMENT !== 'dev' && <GTMScript />}
    </>
  );
}
