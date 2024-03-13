import { asyncFlat, asyncWrap } from 'iter-tools';
import { SitemapItemLoose } from 'sitemap';
import { locales } from './config';
import { getGreenhouseViews } from './utils/greenhouse';
import { departmentPath, localePrefix, locationPath, positionDetailPath, staticPaths as staticPathsUnprefixed } from './utils/paths';

const staticPaths = Object.fromEntries(
  locales.map((locale) => {
    const paths = Object.values(staticPathsUnprefixed);
    const sitemapItems = paths.map((path) => ({
      url: localePrefix(path, locale)
    }));
    return [locale, sitemapItems];
  })
);

async function* getCareersPathsGroups(locale: string): AsyncGenerator<SitemapItemLoose[]> {
  yield staticPaths[locale];
  const views = await getGreenhouseViews(locale);
  yield views.raw.getDepartments().map(([urlKey]) => ({
    url: departmentPath(urlKey, locale)
  }));
  yield views.raw.getLocations().map(([urlKey]) => ({
    url: locationPath(urlKey, locale)
  }));
  yield views.raw.getAllPositions().map((position) => ({
    url: positionDetailPath(position.urlKey, locale),
    lastmod: position.updatedAt
  }));
}

export default function getCareersPaths(locale: string): AsyncIterableIterator<SitemapItemLoose> {
  if (!locales.includes(locale)) {
    return asyncWrap([]);
  }
  return asyncFlat(1, getCareersPathsGroups(locale));
}
