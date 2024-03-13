import { compareByDepartmentKey } from './comparators';

describe('.compareByDepartmentKey', () => {
  function createUrlKey(urlKey: string) {
    return { urlKey };
  }

  const allDepartmentsShuffled = [
    'customer-success',
    'customer-support',
    'design',
    'engineering',
    'sales',
    'people-culture',
    'finance-operations',
    'product',
    'innovations-research-data',
    'marketing'
  ].map(createUrlKey);

  const allDepartmentsSorted = [
    'sales',
    'customer-success',
    'marketing',
    'engineering',
    'innovations-research-data',
    'product',
    'finance-operations',
    'people-culture',
    'customer-support',
    'design'
  ].map(createUrlKey);

  it('sorts departments in given custom order', () => {
    const actual = allDepartmentsShuffled.sort(compareByDepartmentKey);
    expect(actual).toEqual(allDepartmentsSorted);
  });

  it('sorts unknown departments to the end', () => {
    const input = [
      createUrlKey('catering'),
      ...allDepartmentsShuffled,
      createUrlKey('some-random-department'),
      createUrlKey('other-random-department')
    ];
    const expected = [
      ...allDepartmentsShuffled,
      createUrlKey('catering'),
      createUrlKey('some-random-department'),
      createUrlKey('other-random-department')
    ];
    const actual = input.sort(compareByDepartmentKey);
    expect(actual).toEqual(expected);
  });
});
