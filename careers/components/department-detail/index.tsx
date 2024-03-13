import React from 'react';
import Banner from './banner';
import { Department } from '@/careers/types/entities-types';
import { DepartmentsCopy } from '@/careers/types/copy-types';

type Props = {
  department: Department;
  data: DepartmentsCopy['mainImage'];
  description: string;
};

export default function DepartmentBanner({ department, description, data }: Props): JSX.Element {
  return <Banner heading={department.name} perex={description} image={data} />;
}
