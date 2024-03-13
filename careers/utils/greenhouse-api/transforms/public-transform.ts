import { Department, Location, PositionDetail, PositionItem } from '../types/our-types';
import * as et from '@/careers/types/entities-types';

export function convertPositionToPublic(position: PositionItem): et.Position {
  return {
    urlKey: position.urlKey,
    ghUrl: position.ghUrl,
    title: position.title,
    updatedAt: position.updatedAt,
    location: position.locations.map(({ name }) => name).join(', '),
    department: position.departments.map(({ name }) => name).join(', ')
  };
}

export function convertPositionDetailToPublic(position: PositionDetail): et.PositionDetail {
  return {
    ...convertPositionToPublic(position),
    metadata: position.metadata,
    content: position.content,
    departmentKeys: position.departments.map(({ urlKey }) => urlKey),
    boardToken: position.boardToken
  };
}

export function convertLocationToPublic(location: Location, positionsCount = 0): et.Location {
  return {
    urlKey: location.urlKey,
    name: location.name,
    location: location.location,
    positionsCount
  };
}

export function convertDepartmentToPublic(location: Department, positionsCount = 0): et.Department {
  return {
    urlKey: location.urlKey,
    name: location.name,
    positionsCount
  };
}
