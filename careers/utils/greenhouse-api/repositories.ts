import { Department, Location, PositionItem } from './types/our-types';
import { DepartmentsTree } from './departments-tree';

export type MultiKeyAble = {
  id: string;
  urlKey: string;
};

export abstract class MultiKeyRepository<T extends MultiKeyAble> {
  #mapById: Map<T['id'], T>;
  #mapByKey: Map<T['urlKey'], T>;

  constructor(entities?: T[]) {
    this.#mapById = new Map();
    this.#mapByKey = new Map();
    if (entities) {
      this.addMultiple(entities);
    }
  }

  get size(): number {
    return this.#mapByKey.size;
  }

  add(entity: T): void {
    if (this.#mapByKey.has(entity.urlKey)) {
      return;
    }
    this.set(entity);
  }

  query(queryFn: (e: T) => boolean): T[] {
    return Array.from(this.#mapByKey.values()).filter(queryFn);
  }

  findById(id: T['id']): T | undefined {
    return this.#mapById.get(id);
  }

  findByIds(ids: Iterable<T['id']>): T[] {
    return Array.from(ids)
      .map((id) => {
        return this.findById(id);
      })
      .filter(Boolean);
  }

  findByKey(urlKey: T['urlKey']): T | undefined {
    return this.#mapByKey.get(urlKey);
  }

  findByKeys(keys: Iterable<T['urlKey']>): T[] {
    return Array.from(keys)
      .map((key) => {
        return this.findByKey(key);
      })
      .filter(Boolean);
  }

  getEntities(): IterableIterator<T> {
    return this.#mapByKey.values();
  }

  getKeys(): IterableIterator<T['urlKey']> {
    return this.#mapByKey.keys();
  }

  protected addMultiple(entities: T[]): void {
    for (const entity of entities) {
      this.add(entity);
    }
  }

  protected set(entity: T): void {
    const { urlKey, id } = entity;
    this.#mapById.set(id, entity);
    this.#mapByKey.set(urlKey, entity);
  }
}

export class LocationsRepository extends MultiKeyRepository<Location> {
  add(location: Location): void {
    // Ignore "No Office" entity
    if (location.id === '0') {
      return;
    }
    // Ignore locations with "(inactive)" in their name
    if (location.name.includes('(inactive)')) {
      return;
    }
    super.add(location);
  }
}

export class DepartmentsRepository extends MultiKeyRepository<Department> {
  #departmentsTree: DepartmentsTree;

  constructor() {
    super();
    this.#departmentsTree = new DepartmentsTree();
  }

  add(department: Department): void {
    // Ignore "No Department" entity
    if (department.id === '0') {
      return;
    }
    this.#departmentsTree.add(department);
    // store only root depts
    if (department.parentId == null) {
      this.set(department);
    }
  }

  resolveRootAncestors(ghIds: Iterable<string>): Set<string> {
    return this.#departmentsTree.resolveRootAncestors(ghIds);
  }

  findById(id: string): Department | undefined {
    const rootId = this.#departmentsTree.getRootAncestor(id);
    return super.findById(rootId);
  }

  findByIds(ids: Iterable<string>): Department[] {
    const rootIds = this.#departmentsTree.resolveRootAncestors(ids);
    return super.findByIds(rootIds);
  }
}

function clonePosition(position: PositionItem): Readonly<PositionItem> {
  // Note that this is intentionally a shallow freeze since we need to modify locationIds and departmentIds later
  return Object.freeze({
    ...position,
    locationIds: new Set(Array.from(position.locationIds)),
    departmentIds: new Set(Array.from(position.departmentIds)),
    locations: [...position.locations],
    departments: [...position.departments]
  });
}

export class PositionsRepository extends MultiKeyRepository<Readonly<PositionItem>> {
  #mapByInternalJobId: Map<PositionItem['internalJobId'], PositionItem>;

  constructor(entities: PositionItem[] = []) {
    super();
    this.#mapByInternalJobId = new Map();
    if (entities) {
      this.addMultiple(entities);
    }
  }

  // Merge existing position instead of ignoring it
  add(position: Readonly<PositionItem>, location?: Location, department?: Department): void {
    const existingPos = this.findById(position.id) ?? clonePosition(position);
    if (location) {
      existingPos.locationIds.add(location.id);
    }
    if (department) {
      existingPos.departmentIds.add(department.id);
    }
    this.set(existingPos);
  }

  findByInternalJobId(id: PositionItem['internalJobId']): PositionItem | undefined {
    return this.#mapByInternalJobId.get(id);
  }

  protected set(entity: PositionItem): void {
    super.set(entity);
    this.#mapByInternalJobId.set(entity.internalJobId, entity);
  }
}
