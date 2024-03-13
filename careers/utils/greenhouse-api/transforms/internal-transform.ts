import slugify from '@sindresorhus/slugify';
import he from 'he';
import * as ourt from '../types/our-types';
import * as ght from '../types/greenhouse-types';

function createSlug(input: string): string {
  return slugify(input, { customReplacements: [['&', ' ']] });
}

export function transformDepartment(dept: ght.DepartmentListItem): ourt.Department {
  let parentId = null;
  if (dept.parent_id != null) {
    parentId = dept.parent_id.toString();
  }
  return {
    urlKey: createSlug(dept.name),
    id: dept.id.toString(),
    name: dept.name,
    parentId,
    childrenIds: dept.child_ids.map((id) => id.toString())
  };
}

export function transformOffice(office: ght.OfficeListItem): ourt.Location {
  return {
    urlKey: createSlug(office.name),
    id: office.id.toString(),
    name: office.name,
    location: office.location
  };
}

export function transformJob(job: ght.Job): ourt.PositionItem {
  const id = job.id.toString();
  return {
    urlKey: id,
    id: id,
    internalJobId: job.internal_job_id.toString(),
    ghUrl: job.absolute_url,
    title: job.title,
    updatedAt: job.updated_at,
    locationIds: new Set(),
    departmentIds: new Set(),
    locations: [],
    departments: [],
    boardToken: job.boardToken
  };
}

export function transformJobDetail(jobDetail: ght.JobDetail): ourt.PositionDetail {
  const locationIds = jobDetail.offices.map(({ id }) => id.toString());
  const departmentIds = jobDetail.departments.map(({ id }) => id.toString());

  return {
    ...transformJob(jobDetail),
    locationIds: new Set(locationIds),
    departmentIds: new Set(departmentIds),
    content: he.decode(jobDetail.content),
    metadata: jobDetail.metadata.map(({ name, value }) => ({ name, value }))
  };
}

export function extractProspectPostId(sectionsResponse: ght.SectionsResponse): string | null {
  const { sections } = sectionsResponse;
  const id = sections[0]?.jobs[0]?.id.toString();

  return id ?? null;
}
