import { Department, Location, Position, UrlKey } from './entities-types';

export type NormalizedPositionsEntries = Array<[UrlKey, Position]>;
export type NormalizedLocationsEntries = Array<[UrlKey, Location]>;
export type NormalizedDepartmentsEntries = Array<[UrlKey, Department]>;

export type DepartmentPositionsKeys = {
  departmentKey: UrlKey;
  positionKeys: UrlKey[];
};

export type CommonEntities = {
  positionsCount: number;
  locationsEntries: NormalizedLocationsEntries;
  departmentsEntries: NormalizedDepartmentsEntries;
};

// Object, since we don't care about order here and we can save demarshalling to Map
export type DepartmentsDescriptions = {
  departmentsDescriptions: { [key: string]: string };
};
