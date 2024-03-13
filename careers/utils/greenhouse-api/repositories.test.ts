import { DepartmentsRepository, LocationsRepository, MultiKeyAble, MultiKeyRepository, PositionsRepository } from './repositories';
import { DEPARTMENTS_DATA_TREE, DEPT_ROOT_ID } from './__fixtures__/departments';
import { LOCATIONS_DATA } from './__fixtures__/locations';
import { Department, Location, PositionItem } from './types/our-types';

const testLocationPrg: Location = {
  urlKey: 'prague',
  id: '4007982003',
  name: 'Prague',
  location: 'Praha, Hlavní město Praha, Czech Republic'
};
const testDepartment: Department = {
  urlKey: 'customer-success',
  id: DEPT_ROOT_ID,
  name: 'Root Department',
  parentId: null,
  childrenIds: ['4014357003', '4014358003']
};

describe('MultiKeyRepository', () => {
  const testEntity: MultiKeyAble = {
    urlKey: 'test',
    id: '1'
  };
  const testEntity2: MultiKeyAble = {
    urlKey: 'test2',
    id: '2'
  };

  class TestRepository extends MultiKeyRepository<MultiKeyAble> {}

  let repo: TestRepository;
  beforeEach(() => {
    repo = new TestRepository([testEntity, testEntity2]);
  });
  describe('.findByKey', () => {
    it('finds entity by urlKey', () => {
      expect(repo.findByKey(testEntity.urlKey)).toEqual(testEntity);
    });
    it('returns undefined when entity not found', () => {
      expect(repo.findByKey('SOME_INVALID_KEY')).toBeUndefined();
    });
  });
  describe('.findById', () => {
    it('finds entity by id', () => {
      expect(repo.findById(testEntity.id)).toEqual(testEntity);
    });
    it('returns undefined when entity not found', () => {
      expect(repo.findById('SOME_INVALID_ID')).toBeUndefined();
    });
  });
  describe('.findByKeys', () => {
    it('returns all entities matching the keys', () => {
      const keys = ['test', 'test2'];
      expect(repo.findByKeys(keys)).toEqual([testEntity, testEntity2]);
    });
    it('ignores non-existent entities', () => {
      const keys = ['test', 'invalid-key'];
      expect(repo.findByKeys(keys)).toEqual([testEntity]);
    });
  });
  describe('.findByIds', () => {
    it('returns all entities matching the IDs', () => {
      const ids = ['1', '2'];
      expect(repo.findByIds(ids)).toEqual([testEntity, testEntity2]);
    });
    it('ignores non-existent entities', () => {
      const ids = ['1', 'invalid-id'];
      expect(repo.findByIds(ids)).toEqual([testEntity]);
    });
  });
});

describe('LocationsRepository', () => {
  let locationsRepo: LocationsRepository;
  beforeEach(() => {
    locationsRepo = new LocationsRepository(LOCATIONS_DATA);
  });
  describe('sanity check', () => {
    test('.findByKey', () => {
      expect(locationsRepo.findByKey(testLocationPrg.urlKey)).toEqual(testLocationPrg);
    });
    test('.findById', () => {
      expect(locationsRepo.findById(testLocationPrg.id)).toEqual(testLocationPrg);
    });
  });

  describe('No Office location', () => {
    it('ignores no-office location with id 0', () => {
      expect(locationsRepo.findById('0')).toBeUndefined();
      expect(locationsRepo.findByKey('no-office')).toBeUndefined();
    });
  });

  describe('Inactive location', () => {
    it('ignores location with (inactive) in name', () => {
      expect(locationsRepo.findById('4026292003')).toBeUndefined();
      expect(locationsRepo.findByKey('hong-kong-inactive')).toBeUndefined();
    });
  });
});

describe('DepartmentsRepository', () => {
  describe('No Department department', () => {
    it('ignores no-department entity with id 0', () => {
      const noDpt: Department = {
        urlKey: 'no-department',
        id: '0',
        name: 'No Department',
        parentId: null,
        childrenIds: []
      };
      const repo = new DepartmentsRepository();
      repo.add(noDpt);
      expect(repo.findById('0')).toBeUndefined();
      expect(repo.findByKey('no-office')).toBeUndefined();
    });
  });
  describe('Child departments', () => {
    let repo: DepartmentsRepository;
    beforeEach(() => {
      repo = new DepartmentsRepository();
      for (const dpt of DEPARTMENTS_DATA_TREE) {
        repo.add(dpt);
      }
    });
    it('does not store child departments by key', () => {
      expect(repo.findByKey('cs-am-manager')).toBeUndefined();
    });
    it('resolves root department from child by ID', () => {
      expect(repo.findById('4014357003')).toHaveProperty('id', DEPT_ROOT_ID);
    });
    it('deduplicates multiple children with the same root ancestor', () => {
      const ids = ['4014357003', '4014358003'];
      const actual = repo.findByIds(ids);
      expect(actual).toHaveLength(1);
      expect(actual[0]).toHaveProperty('id', DEPT_ROOT_ID);
    });
  });
});

describe('PositionsRepository', () => {
  const testPositionId = '4077145003';
  const testInternalJobId = '5099945008';
  const boardToken = 'testToken';

  const testPosition: PositionItem = {
    urlKey: testPositionId,
    id: testPositionId,
    internalJobId: testInternalJobId,
    ghUrl: 'https://boards.greenhouse.io/socialbakers/jobs/4077145003',
    title: 'Enterprise Account Executive DACH',
    updatedAt: '2020-06-26T04:42:46-04:00',
    locationIds: new Set(),
    departmentIds: new Set(),
    locations: [],
    departments: [],
    boardToken: boardToken
  };
  const testPositionCopy: PositionItem = {
    ...testPosition,
    locationIds: new Set(),
    departmentIds: new Set(),
    locations: [],
    departments: []
  };

  let repo: PositionsRepository;
  beforeEach(() => {
    repo = new PositionsRepository();
  });

  describe('.constructor', () => {
    it('works with entities passed on initialization', () => {
      const repo = new PositionsRepository([testPosition]);
      expect(repo.findById(testPositionId)).toEqual(testPosition);
      expect(repo.findByInternalJobId(testInternalJobId)).toEqual(testPosition);
    });
  });

  describe('.add', () => {
    it("merges position's location IDs instead of replacing", () => {
      repo.add(testPosition);
      const addedPosition = repo.findById(testPositionId);
      expect(addedPosition.locationIds).toEqual(new Set());
      repo.add(testPositionCopy, testLocationPrg);
      expect(addedPosition.locationIds).toEqual(new Set([testLocationPrg.id]));
    });
    it("merges position's department IDs instead of replacing", () => {
      repo.add(testPosition);
      const addedPosition = repo.findById(testPositionId);
      expect(addedPosition.departmentIds).toEqual(new Set());
      repo.add(testPositionCopy, null, testDepartment);
      expect(addedPosition.departmentIds).toEqual(new Set([testDepartment.id]));
    });
    it("doesn't modify original position", () => {
      const existingDeptId = 'SOME_DEPARTMENT_ID';
      const existingLocationId = 'SOME_LOCATION_ID';
      const addedPosition: PositionItem = {
        ...testPosition,
        locationIds: new Set([existingLocationId]),
        departmentIds: new Set([existingDeptId]),
        locations: [],
        departments: []
      };
      repo.add(addedPosition, testLocationPrg, testDepartment);
      const foundPosition = repo.findById(addedPosition.id);
      expect(foundPosition).not.toBe(addedPosition);
      expect(addedPosition.departmentIds).toEqual(new Set([existingDeptId]));
      expect(addedPosition.locationIds).toEqual(new Set([existingLocationId]));
    });
  });
  describe('.findByInternalJobId', () => {
    it('finds the position by internalJobId', () => {
      repo.add(testPosition);
      const foundPosition = repo.findByInternalJobId(testInternalJobId);
      expect(foundPosition).toEqual(testPosition);
    });
  });
});
