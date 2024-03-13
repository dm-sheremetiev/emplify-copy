import { DepartmentsTree } from './departments-tree';
import { DEPARTMENTS_DATA_TREE, DEPT_ROOT_ID } from './__fixtures__/departments';

describe('DepartmentsTree', () => {
  let tree: DepartmentsTree;
  beforeEach(() => {
    tree = new DepartmentsTree();
    DEPARTMENTS_DATA_TREE.forEach((dept) => tree.add(dept));
  });
  describe('.getRootAncestor', () => {
    it('resolves root ancestor from a set of departments', () => {
      // root
      expect(tree.getRootAncestor(DEPT_ROOT_ID)).toBe(DEPT_ROOT_ID);
      // level 1
      expect(tree.getRootAncestor('4014358003')).toBe(DEPT_ROOT_ID);
      // level 2
      expect(tree.getRootAncestor('4014454003')).toBe(DEPT_ROOT_ID);
    });
  });
  describe('.resolveRootAncestors', () => {
    it('resolves given set of ids to their ancestor', () => {
      const input = new Set(['4014357003', '4014358003', '4014454003']);
      const expected = new Set([DEPT_ROOT_ID]);
      expect(tree.resolveRootAncestors(input)).toEqual(expected);
    });
  });
});
