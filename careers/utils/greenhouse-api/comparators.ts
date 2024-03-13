export function compareByProperty<T>(propertyName: string) {
  return (a: T, b: T): number => {
    return a[propertyName].localeCompare(b[propertyName], 'en');
  };
}

export const compareByName = compareByProperty<{ name: string }>('name');

type HasUpdatedAt = { updatedAt: string };

export function compareByUpdatedAt(a: HasUpdatedAt, b: HasUpdatedAt): number {
  const aDate = a.updatedAt;
  const bDate = b.updatedAt;
  return aDate < bDate ? 1 : aDate > bDate ? -1 : 0;
}

const DEPARTMENTS_ORDER = {
  sales: 0,
  'customer-success': 1,
  marketing: 2,
  engineering: 3,
  'innovations-research-data': 4,
  product: 5,
  'finance-operations': 6,
  'people-culture': 7,
  'customer-support': 8,
  design: 9
};

type HasUrlKey = { urlKey: string };

export function compareByDepartmentKey(a: HasUrlKey, b: HasUrlKey): number {
  const orderA = DEPARTMENTS_ORDER[a.urlKey] ?? 1000;
  const orderB = DEPARTMENTS_ORDER[b.urlKey] ?? 1000;
  return orderA - orderB;
}
