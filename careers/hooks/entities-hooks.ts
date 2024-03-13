import { denormalizePositionsByDepartment, entriesToMaps } from '@/careers/utils/entities';

// FIXME: These are just pass-through hooks to utils for now, add memoization
export const useEntitiesMaps: typeof entriesToMaps = (props) => {
  return entriesToMaps(props);
};

export const usePositionsByDepartment: typeof denormalizePositionsByDepartment = (positionsByDepartmentKeys, props) => {
  return denormalizePositionsByDepartment(positionsByDepartmentKeys, props);
};
