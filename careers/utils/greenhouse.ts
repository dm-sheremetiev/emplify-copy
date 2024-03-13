import { createGreenhouseViews, getPositionDetail, getProspectPostId, Views } from './greenhouse-api';
import { UrlKey } from '@/careers/types/entities-types';
import { CommonEntities } from '@/careers/types/entities-views';

import { compareByUpdatedAt } from './greenhouse-api/comparators';
import { getAlternateLocale } from './greenhouse-locale';

import { NotFoundError } from './errors';
import { LocalizedPositionKey } from '../types/locale-types';

type WrappedViews = ReturnType<typeof viewsWrapper>;

function viewsWrapper(locale: string, views: Views) {
  let prospectPostId: string | null | undefined;

  function getCommonEntities(): CommonEntities {
    return {
      positionsCount: views.getPositionsCount(),
      locationsEntries: views.getLocations(),
      departmentsEntries: views.getDepartments()
    };
  }

  return {
    locale,
    raw: views,
    getCommonEntities,
    getEntitiesForDepartment(departmentKey: UrlKey) {
      const foundDepartment = views.repositories.departments.findByKey(departmentKey);
      if (!foundDepartment) {
        throw new NotFoundError('Department not found');
      }

      return {
        ...getCommonEntities(),
        positionsEntries: views.getPostionsForDepartment(departmentKey)
      };
    },
    getEntitiesForLocation(locationKey: UrlKey | null = null) {
      if (locationKey) {
        const foundLocation = views.repositories.locations.findByKey(locationKey);
        if (!foundLocation) {
          throw new NotFoundError('Location not found');
        }
      }

      return {
        ...getCommonEntities(),
        ...views.getPositionsByDepartment(locationKey)
      };
    },
    getEntitiesForHomepage() {
      const recentPositions = views.getAllPositions().sort(compareByUpdatedAt).slice(0, 3);
      return {
        ...getCommonEntities(),
        recentPositions
      };
    },
    async getPositionDetail(positionKey: UrlKey) {
      try {
        return getPositionDetail(locale, positionKey, views.repositories);
      } catch (err) {
        console.error(err);
        throw new NotFoundError(`Failed to fetch position detail (${positionKey})`);
      }
    },
    async getProspectPostId() {
      // Strict equal to identify from null
      if (prospectPostId === undefined) {
        prospectPostId = await getProspectPostId(locale);
      }
      return prospectPostId;
    },
    async getAlternatePositionKeys(positionKey: UrlKey): Promise<LocalizedPositionKey[]> {
      const internalPosition = views.repositories.positions.findByKey(positionKey);

      const positionKeys: LocalizedPositionKey[] = [
        {
          locale,
          urlKey: positionKey
        }
      ];
      try {
        const { internalJobId } = internalPosition;
        const altLocale = getAlternateLocale(locale);
        const altViews = await createGreenhouseViews(altLocale);
        const altPosition = altViews.repositories.positions.findByInternalJobId(internalJobId);
        if (altPosition) {
          positionKeys.push({
            locale: altLocale,
            urlKey: altPosition.urlKey
          });
        }
      } catch (error) {
        console.error('getAlternatePositionKeys failed', { response: error });
      }
      return positionKeys.sort((a, b) => a.locale.localeCompare(b.locale));
    }
  };
}

export async function getGreenhouseViews(locale: string): Promise<WrappedViews> {
  try {
    return viewsWrapper(locale, await createGreenhouseViews(locale));
  } catch (error) {
    console.error('getGreenhouseViews failed', { response: error });
    throw error;
  }
}
