/* eslint-disable camelcase */

type JobId = number;

type JobMetadata = {
  id: number;
  name: string;
  value: string;
  value_type: string;
};

export type Job = {
  id: JobId;
  title: string;
  updated_at: string;
  requisition_id: string;
  absolute_url: string;
  metadata: JobMetadata[];
  data_compliance: Array<{
    type: string;
    requires_consent: boolean;
    retention_period: null | number;
  }>;
  internal_job_id: number;
  location: {
    name: string;
  };
  boardToken: string;
};

type DepartmentId = number;

export type DepartmentBase = {
  id: DepartmentId;
  name: string;
  jobs: Job[];
};

export type DepartmentTreeItem = DepartmentBase & {
  children: DepartmentTreeItem[];
};

export type DepartmentListItem = DepartmentBase & {
  parent_id: null | DepartmentId;
  child_ids: DepartmentId[];
};
type OfficeId = number;

export type OfficeBase = {
  id: OfficeId;
  name: string;
  location: string | null;
  departments: DepartmentListItem[];
};

export type OfficeListItem = OfficeBase & {
  parent_id: null | OfficeId;
  child_ids: OfficeId[];
};

export type OfficesListResponse = {
  etag: string;
  offices: OfficeListItem[];
};

export type JobDetail = Job & {
  etag: string;
  content: string;
  departments: DepartmentListItem[];
  offices: OfficeListItem[];
  boardToken: string;
};

export type Section = {
  id: number;
  name: string;
  jobs: Job[];
};

export type SectionsResponse = {
  etag: string;
  sections: Section[];
};
