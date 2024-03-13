import { defaultLocale } from '../config';

const prefix = '/careers';
export const staticPaths = {
  home: prefix,
  openPositions: prefix + '/open-positions',
  privacyStatement: prefix + '/privacy-statement'
};

export const localePrefix = (path: string, locale: string): string => {
  const prepend = locale === defaultLocale ? '' : `/${locale}`;
  return prepend + path;
};

export const departmentPath = (departmentKey: string, locale: string) => localePrefix(staticPaths.home + '/' + departmentKey, locale);
export const positionDetailPath = (positionKey: string, locale: string) => localePrefix(staticPaths.openPositions + '/detail/' + positionKey, locale);
export const locationPath = (locationKey: string, locale: string) => localePrefix(staticPaths.openPositions + '/' + locationKey, locale);
