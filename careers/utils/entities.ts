import {
  DepartmentPositionsKeys,
  NormalizedDepartmentsEntries,
  NormalizedLocationsEntries,
  NormalizedPositionsEntries
} from '@/careers/types/entities-views';
import {
  Department,
  DepartmentPositionsItem,
  DepartmentsMap,
  Location,
  LocationsMap,
  Position,
  PositionsMap,
  UrlKey
} from '@/careers/types/entities-types';

type CommonEntries = {
  locationsEntries: NormalizedLocationsEntries;
  departmentsEntries: NormalizedDepartmentsEntries;
};
type CommonMapsResult = {
  locations: LocationsMap;
  departments: DepartmentsMap;
};
type EntriesWithPositions = CommonEntries & {
  positionsEntries: NormalizedPositionsEntries;
};
type MapsWithPositions = CommonMapsResult & {
  positions: PositionsMap;
};

function entriesToMaps(entries: EntriesWithPositions): MapsWithPositions;
function entriesToMaps(entries: CommonEntries): CommonMapsResult;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function entriesToMaps({ locationsEntries, departmentsEntries, positionsEntries }) {
  const result = {
    locations: new Map<UrlKey, Location>(locationsEntries),
    departments: new Map<UrlKey, Department>(departmentsEntries),
    positions: undefined
  };
  if (positionsEntries) {
    result.positions = new Map<UrlKey, Position>(positionsEntries);
  }
  return result;
}

// Avoid duplicating `export` with overload
export { entriesToMaps };

export function denormalizePositionsByDepartment(
  positionsByDepartmentKeys: DepartmentPositionsKeys[],
  {
    departments,
    positions
  }: {
    departments: DepartmentsMap;
    positions: PositionsMap;
  }
): DepartmentPositionsItem[] {
  return positionsByDepartmentKeys.map((dpEntry) => {
    return {
      department: departments.get(dpEntry.departmentKey),
      positions: dpEntry.positionKeys.map((positionKey) => positions.get(positionKey))
    };
  });
}
