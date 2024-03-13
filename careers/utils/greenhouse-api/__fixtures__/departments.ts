import { Department } from '../types/our-types';

export const DEPT_ROOT_ID = '4014135003';
export const DEPARTMENTS_DATA_TREE: Department[] = [
  {
    urlKey: 'cs-am-manager',
    id: '4014357003',
    name: 'Dept Level 1 (1)',
    parentId: DEPT_ROOT_ID,
    childrenIds: []
  },
  {
    urlKey: 'cs-client-value-adoption',
    id: '4014358003',
    name: 'Dept Level 1 (2)',
    parentId: DEPT_ROOT_ID,
    childrenIds: ['4014454003']
  },
  {
    urlKey: 'cs-client-value-adoption-manager',
    id: '4014454003',
    name: 'Dept Level 2',
    parentId: '4014358003',
    childrenIds: []
  },
  {
    urlKey: 'customer-success',
    id: DEPT_ROOT_ID,
    name: 'Root Department',
    parentId: null,
    childrenIds: ['4014357003', '4014358003']
  }
];

export const DEPARTMENTS_DATA_FULL: Department[] = [
  {
    urlKey: 'customer-success',
    id: '4014135003',
    name: 'Customer Success',
    parentId: null,
    childrenIds: [
      '4014357003',
      '4014358003',
      '4014454003',
      '4014359003',
      '4014360003',
      '4014361003',
      '4014362003',
      '4014363003',
      '4014364003',
      '4014365003',
      '4014366003',
      '4014367003',
      '4014371003'
    ]
  },
  {
    urlKey: 'customer-support',
    id: '4013838003',
    name: 'Customer Support',
    parentId: null,
    childrenIds: ['4014369003']
  },
  {
    urlKey: 'design',
    id: '4014136003',
    name: 'Design',
    parentId: null,
    childrenIds: ['4014370003']
  },
  {
    urlKey: 'engineering',
    id: '4013722003',
    name: 'Engineering',
    parentId: null,
    childrenIds: [
      '4014372003',
      '4014373003',
      '4014374003',
      '4014375003',
      '4014376003',
      '4014378003',
      '4014377003',
      '4014379003',
      '4014380003',
      '4014381003',
      '4014382003',
      '4014383003',
      '4014384003',
      '4014385003',
      '4014387003',
      '4014388003',
      '4014386003',
      '4014389003',
      '4014390003',
      '4014391003',
      '4014392003',
      '4014393003',
      '4014394003',
      '4014395003'
    ]
  },
  {
    urlKey: 'finance-operations',
    id: '4014137003',
    name: 'Finance & Operations',
    parentId: null,
    childrenIds: [
      '4014396003',
      '4014397003',
      '4014398003',
      '4014399003',
      '4014400003',
      '4014401003',
      '4014402003',
      '4014403003',
      '4014404003',
      '4014406003',
      '4014405003',
      '4014870003'
    ]
  },
  {
    urlKey: 'innovations-research-data',
    id: '4013836003',
    name: 'Innovations, Research & Data',
    parentId: null,
    childrenIds: [
      '4014407003',
      '4014408003',
      '4014409003',
      '4014410003',
      '4014411003',
      '4014412003',
      '4014413003',
      '4014414003',
      '4014415003',
      '4014416003',
      '4014417003',
      '4014418003'
    ]
  },
  {
    urlKey: 'marketing',
    id: '4013843003',
    name: 'Marketing',
    parentId: null,
    childrenIds: [
      '4014419003',
      '4014420003',
      '4014421003',
      '4014422003',
      '4014423003',
      '4014455003',
      '4014424003',
      '4014425003',
      '4014426003',
      '4014456003',
      '4014427003',
      '4014428003',
      '4014429003',
      '4014430003'
    ]
  },
  {
    urlKey: 'people-culture',
    id: '4013721003',
    name: 'People & Culture',
    parentId: null,
    childrenIds: ['4014431003', '4014432003', '4014433003', '4014434003']
  },
  {
    urlKey: 'product',
    id: '4013837003',
    name: 'Product',
    parentId: null,
    childrenIds: ['4014435003', '4014436003', '4014437003', '4014438003']
  },
  {
    urlKey: 'sales',
    id: '4013720003',
    name: 'Sales',
    parentId: null,
    childrenIds: [
      '4014439003',
      '4013842003',
      '4013844003',
      '4014441003',
      '4014442003',
      '4014443003',
      '4014440003',
      '4014445003',
      '4014446003',
      '4014444003',
      '4014447003',
      '4014448003',
      '4014449003',
      '4014450003',
      '4014451003',
      '4014452003',
      '4014453003'
    ]
  },
  {
    urlKey: 'no-department',
    id: '0',
    name: 'No Department',
    parentId: null,
    childrenIds: []
  }
];
