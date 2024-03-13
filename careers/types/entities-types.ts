export type UrlKey = string;

export type Position = {
  urlKey: UrlKey;
  ghUrl: string;
  title: string;
  updatedAt: string;
  location: string;
  department: string;
};

export type PositionDetail = Position & {
  content: string;
  metadata: Array<{
    name: string;
    value: string;
  }>;
  departmentKeys: UrlKey[];
  boardToken: string;
};

export type Location = {
  urlKey: UrlKey;
  name: string;
  location: string | null;
  positionsCount: number;
};

export type Department = {
  urlKey: UrlKey;
  name: string;
  positionsCount: number;
};

export type DepartmentPositionsItem = {
  department: Department;
  positions: Position[];
};

export type LocationsMap = Map<UrlKey, Location>;
export type DepartmentsMap = Map<UrlKey, Department>;
export type PositionsMap = Map<UrlKey, Position>;
