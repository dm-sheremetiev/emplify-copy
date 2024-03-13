import React from 'react';
import Link from 'next/link';
import { Department as DepartmentType, Position as PositionType } from '@/careers/types/entities-types';
import DepartmentHeader from '@/careers/components/open-positions/department-header';
import ExpandablePositionsList from '@/careers/components/expandable-positions-list';

type Props = {
  departmentDescription: string;
  department: DepartmentType;
  positions: PositionType[];
};

export default function PositionsByDepartment({ department, departmentDescription, positions = [] }: Props): JSX.Element {
  const hasPositions = positions.length > 0;

  return (
    <section data-testid={`open-positions-${department.urlKey}`}>
      <DepartmentHeader description={departmentDescription}>
        <Link prefetch={false} href="/careers/[departmentKey]" as={`/careers/${department.urlKey}`}>
          {department.name}
        </Link>
      </DepartmentHeader>

      {hasPositions && <ExpandablePositionsList positions={positions} hideDepartment />}
    </section>
  );
}
