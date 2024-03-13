import { Department } from './types/our-types';

type EntityId = string;

export class DepartmentsTree {
  parents: Map<EntityId, EntityId>;
  rootDepartments: Set<EntityId>;

  constructor() {
    this.parents = new Map();
    this.rootDepartments = new Set();
  }

  add(dept: Department): void {
    const { id, parentId, childrenIds } = dept;
    // root dept
    if (parentId == null) {
      this.rootDepartments.add(id);
      for (const childId of childrenIds) {
        this.parents.set(childId, id);
      }
      return;
    }
    // short circuit
    if (this.parents.has(id)) {
      return;
    }
    // child dept
    this.parents.set(id, parentId);
  }

  getRootAncestor(id: EntityId): EntityId {
    if (this.rootDepartments.has(id)) {
      return id;
    }
    // FIXME: do / while?
    let lastParentId = id;
    let currentParentId = id;
    while ((currentParentId = this.parents.get(currentParentId))) {
      lastParentId = currentParentId;
    }
    return lastParentId;
  }

  resolveRootAncestors(ghIds: Iterable<EntityId>): Set<EntityId> {
    const resolvedIds = new Set<EntityId>();
    for (const ghId of ghIds) {
      const rootId = this.getRootAncestor(ghId);
      resolvedIds.add(rootId);
    }
    return resolvedIds;
  }
}
