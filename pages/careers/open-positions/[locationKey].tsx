import React from 'react';
import Layout from '@/careers/components/layout/layout';
import l from '@/careers/styles/modules/layout.module.scss';
import s from '@/careers/components/onpage-navigation/onpage-nav.module.scss';
import Banner from '@/careers/components/open-positions/banner';
import PositionsByDepartment from '@/careers/components/positions-by-deparment';
import { locales } from '@/careers/config';
import { getGreenhouseViews } from '@/careers/utils/greenhouse';
import { useEntitiesMaps, usePositionsByDepartment } from '@/careers/hooks/entities-hooks';
import { GetStaticPaths } from 'next';
import { Location } from '@/careers/types/entities-types';
import OnPageNavigation from '@/careers/components/onpage-navigation';
import { CommonEntities, DepartmentPositionsKeys, DepartmentsDescriptions, NormalizedPositionsEntries } from '@/careers/types/entities-views';
import LocationWrapper from '@/careers/components/open-positions/location-wrapper/location-wrapper';
import NoPositions from '@/careers/components/open-positions/no-positions';
import { useI18n } from 'next-localization';
import { getLocationCopy, getOpenPositionsDepartments } from '@/careers/utils/contentful';
import Metadata from '@/careers/components/metadata';
import withI18n from '@/careers/components/with-i18n';
import { useRouter } from 'next/router';
import { careersGSSP } from '@/careers/utils/gssp';
import { LocationCopy } from '@/careers/types/copy-types';
import { getBoardForLocale } from '@/careers/utils/greenhouse-locale';

type Params = { locationKey: string | null };
export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = [];
  for (const locale of locales) {
    const views = await getGreenhouseViews(locale);
    const params = views.raw.getLocations().map(([urlKey]) => ({ params: { locationKey: urlKey }, locale })) ?? [];
    paths.push(...params);
  }

  return {
    paths: paths,
    fallback: 'blocking'
  };
};

type Props = CommonEntities & {
  locationCopy: LocationCopy | null;
  prospectPostId: string | null;
  departmentsDescriptions: DepartmentsDescriptions;
  positionsEntries: NormalizedPositionsEntries;
  positionsByDepartmentKeys: DepartmentPositionsKeys[];
  boardToken: string | null;
};

export const getStaticProps = careersGSSP<Props, Params>(async ({ params, locale, preview }) => {
  const { locationKey } = params;
  const views = await getGreenhouseViews(locale);
  const entities = views.getEntitiesForLocation(locationKey);
  const desc = await getOpenPositionsDepartments(preview, locale);
  const departmentsDescriptions = desc.map(({ slug, perex }) => {
    return [slug, perex ?? ''];
  });
  const locationCopy = await getLocationCopy(locationKey, preview);
  const boardToken = getBoardForLocale(locale)[0];

  return {
    props: {
      boardToken,
      locationKey,
      locationCopy: locationCopy ?? null,
      ...entities,
      prospectPostId: await views.getProspectPostId(),
      departmentsDescriptions: Object.fromEntries(departmentsDescriptions) as DepartmentsDescriptions
    }
  };
});

function OpenPositions(props: Props) {
  const { positionsCount, departmentsDescriptions, prospectPostId, locationCopy, boardToken } = props;
  const { departments, locations, positions } = useEntitiesMaps(props);
  const positionsByDepartment = usePositionsByDepartment(props.positionsByDepartmentKeys, {
    departments,
    positions
  });

  const { t } = useI18n();
  const { query } = useRouter();
  let currentLocationPositionCount = positionsCount;
  let currentLocation: Location | undefined;
  if (query.locationKey) {
    currentLocation = locations.get(query.locationKey.toString());
    currentLocationPositionCount = currentLocation.positionsCount;
  }

  const locationName = currentLocation?.name;
  const locationFullName = currentLocation?.location;
  const hasPositions = positionsByDepartment.length > 0;

  const defaultMetadata = {
    title: t('openPositions.meta.title'),
    description: t('openPositions.meta.description'),
    ogTitle: t('openPositions.meta.og.title'),
    ogDescription: t('openPositions.meta.og.description')
  };

  return (
    <>
      {currentLocation ? (
        <Metadata
          metadata={{
            title: t('openPositions.meta.current.title', { locationName }),
            description: t('openPositions.meta.current.description', {
              locationFullName
            }),
            ogTitle: t('openPositions.meta.current.og.title', {
              locationFullName
            }),
            ogDescription: t('openPositions.meta.current.og.description', {
              locationFullName
            })
          }}
        />
      ) : (
        <Metadata metadata={defaultMetadata} />
      )}

      <Layout overflowHidden departments={departments} positionsCount={positionsCount}>
        <Banner
          positionsCount={currentLocationPositionCount}
          currentLocation={currentLocation}
          locations={locations}
          allPositionCount={positionsCount}
        />
        <div className={l.container}>
          <LocationWrapper locationCopy={locationCopy}>
            {hasPositions ? (
              positionsByDepartment.map(({ positions, department }) => (
                <PositionsByDepartment
                  key={department.urlKey}
                  department={department}
                  departmentDescription={departmentsDescriptions[department.urlKey]}
                  positions={positions}
                />
              ))
            ) : (
              <NoPositions prospectPostId={prospectPostId} boardToken={boardToken} />
            )}
          </LocationWrapper>

          <OnPageNavigation
            customClassName={s.navWrapper}
            entities={locations}
            activeEntity={currentLocation?.urlKey || ''}
            entitiesType="locations"
          />
        </div>
      </Layout>
    </>
  );
}

export default withI18n(OpenPositions);
