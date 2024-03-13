import { UrlKey } from '@/careers/types/entities-types';

type GreenhouseId = string;

export type Location = {
  urlKey: UrlKey;
  id: GreenhouseId;
  name: string;
  location: string | null;
};

export type Department = {
  urlKey: UrlKey;
  id: GreenhouseId;
  name: string;
  parentId: GreenhouseId | null;
  childrenIds: GreenhouseId[];
};

export type PositionItem = {
  urlKey: UrlKey;
  id: GreenhouseId;
  internalJobId: string;
  ghUrl: string;
  title: string;
  updatedAt: string;
  locationIds: Set<GreenhouseId>;
  departmentIds: Set<GreenhouseId>;
  locations: Location[];
  departments: Department[];
  boardToken: string;
};

export type PositionDetail = PositionItem & {
  content: string;
  metadata: Array<{
    name: string;
    value: string;
  }>;
};
