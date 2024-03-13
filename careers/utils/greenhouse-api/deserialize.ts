import { OfficesListResponse } from './types/greenhouse-types';
import * as ourt from './types/our-types';
import { transformDepartment, transformJob, transformOffice } from './transforms/internal-transform';
import { compareByName } from './comparators';
import { DepartmentsRepository, LocationsRepository, PositionsRepository } from './repositories';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function deserializeFromOffices({ offices }: OfficesListResponse) {
  const locationsRepo = new LocationsRepository();
  const departmentsRepo = new DepartmentsRepository();

  // 1)
  // - Build mapping for locations and departments
  // - Build departments hierarchy for jobs resolution
  // - Extract positions for further processing
  function normalizeFromOfficesTree() {
    const positionsRepo = new PositionsRepository();
    for (const ghOffice of offices) {
      const location = transformOffice(ghOffice);
      locationsRepo.add(location);
      for (const ghDepartment of ghOffice.departments) {
        const department = transformDepartment(ghDepartment);
        departmentsRepo.add(department);
        for (const ghJob of ghDepartment.jobs) {
          const position = transformJob(ghJob);
          positionsRepo.add(position, location, department);
        }
      }
    }
    return positionsRepo;
  }

  // 2) Resolve jobs' departments to respective root ancestor
  function resolveJobs(positionsRepo: PositionsRepository) {
    const reparentedPositions: ourt.PositionItem[] = [];
    for (const position of positionsRepo.getEntities()) {
      const departmentIds = departmentsRepo.resolveRootAncestors(position.departmentIds);
      const departments = departmentsRepo.findByIds(departmentIds).sort(compareByName);
      const locations = locationsRepo.findByIds(position.locationIds).sort(compareByName);
      reparentedPositions.push({
        ...position,
        departmentIds,
        locations,
        departments
      });
    }
    return new PositionsRepository(reparentedPositions);
  }

  return {
    positions: resolveJobs(normalizeFromOfficesTree()),
    locations: locationsRepo,
    departments: departmentsRepo
  };
}
