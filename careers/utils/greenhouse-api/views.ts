import { Department, PositionItem } from './types/our-types';
import { compareByDepartmentKey, compareByName } from './comparators';
import { ArrayMultiMap } from './structures';
import * as et from '@/careers/types/entities-types';
import { UrlKey } from '@/careers/types/entities-types';
import * as ev from '@/careers/types/entities-views';
import {
  convertDepartmentToPublic,
  convertLocationToPublic,
  convertPositionDetailToPublic,
  convertPositionToPublic
} from './transforms/public-transform';
import { DepartmentsRepository, LocationsRepository, PositionsRepository } from './repositories';
import { JobDetail } from './types/greenhouse-types';
import { transformJobDetail } from './transforms/internal-transform';

type PositionsDepartmentPair = {
  positionsEntries: ev.NormalizedPositionsEntries;
  positionsByDepartmentKeys: ev.DepartmentPositionsKeys[];
};

type Repositories = {
  locations: LocationsRepository;
  departments: DepartmentsRepository;
  positions: PositionsRepository;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createViews({ locations, departments, positions }: Repositories) {
  // Count positions
  const positionsCountByLocation = new Map<UrlKey, number>();
  const positionsCountByDepartment = new Map<UrlKey, number>();

  for (const position of positions.getEntities()) {
    for (const { urlKey } of position.locations) {
      const cnt = positionsCountByLocation.get(urlKey) ?? 0;
      positionsCountByLocation.set(urlKey, cnt + 1);
    }
    for (const { urlKey } of position.departments) {
      const cnt = positionsCountByDepartment.get(urlKey) ?? 0;
      positionsCountByDepartment.set(urlKey, cnt + 1);
    }
  }

  return {
    repositories: { departments, locations, positions },
    getLocations(): ev.NormalizedLocationsEntries {
      return Array.from(locations.getEntities())
        .sort(compareByName)
        .map((location) => {
          const { urlKey } = location;
          return [urlKey, convertLocationToPublic(location, positionsCountByLocation.get(urlKey))];
        });
    },

    getDepartments(): ev.NormalizedDepartmentsEntries {
      return Array.from(departments.getEntities())
        .sort(compareByDepartmentKey)
        .map((department) => {
          const { urlKey } = department;
          return [urlKey, convertDepartmentToPublic(department, positionsCountByDepartment.get(urlKey))];
        });
    },

    getPositionsByDepartment(locationUrlKey?: UrlKey): PositionsDepartmentPair {
      function hasLocation({ locations }: PositionItem) {
        if (!locationUrlKey) {
          return true;
        }
        return locations.some((location) => location.urlKey === locationUrlKey);
      }

      const positionsByDepartmentMap = new ArrayMultiMap<Department, PositionItem>();
      const usedPositions = new Map<UrlKey, et.Position>();
      for (const position of positions.getEntities()) {
        for (const department of position.departments) {
          if (hasLocation(position)) {
            positionsByDepartmentMap.set(department, position);
            usedPositions.set(position.urlKey, convertPositionToPublic(position));
          }
        }
      }

      // Convert references to respective url keys
      const positionsByDepartment = Array.from(positionsByDepartmentMap.entries())
        .sort(([departmentA], [departmentB]) => compareByDepartmentKey(departmentA, departmentB))
        .map(([department, positions]) => {
          return {
            departmentKey: department.urlKey,
            positionKeys: positions.map(({ urlKey }) => urlKey)
          };
        });

      return {
        positionsEntries: Array.from(usedPositions.entries()),
        positionsByDepartmentKeys: positionsByDepartment
      };
    },

    getPostionsForDepartment(departmentUrlKey?: UrlKey): ev.NormalizedPositionsEntries {
      const usedPositions = new Map<UrlKey, et.Position>();

      function hasDepartment({ departments }: PositionItem) {
        if (!departmentUrlKey) {
          return true;
        }
        return departments.some(({ urlKey }) => urlKey === departmentUrlKey);
      }

      for (const position of positions.getEntities()) {
        if (hasDepartment(position)) {
          usedPositions.set(position.urlKey, convertPositionToPublic(position));
        }
      }
      return [...usedPositions.entries()];
    },

    getAllPositions(): et.Position[] {
      return Array.from(positions.getEntities()).map(convertPositionToPublic);
    },

    getPositionsCount(): number {
      return positions.size;
    }
  };
}

export function resolvePositionDetail(rawData: JobDetail, repositories: Repositories): et.PositionDetail {
  const pDetail = transformJobDetail(rawData);
  const departments = repositories.departments.findByIds(pDetail.departmentIds);
  const locations = repositories.locations.findByIds(pDetail.locationIds);
  return convertPositionDetailToPublic({ ...pDetail, locations, departments });
}
