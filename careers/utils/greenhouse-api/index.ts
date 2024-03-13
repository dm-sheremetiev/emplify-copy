import { fetchJobDetail, fetchOffices, fetchSections } from './api';
import { deserializeFromOffices } from './deserialize';
import { createViews, resolvePositionDetail } from './views';
import { PositionDetail, UrlKey } from '@/careers/types/entities-types';
import { extractProspectPostId } from './transforms/internal-transform';
import { createCachedConstructor } from './cache';
import HLRU from 'hashlru';

const JOB_DETAILS_CAPACITY = 100;

export type Views = ReturnType<typeof createViews>;

export const createGreenhouseViews = createCachedConstructor({
  fetchData: fetchOffices,
  convertData: (rawData) => createViews(deserializeFromOffices(rawData))
});

export const getProspectPostId = createCachedConstructor({
  fetchData: fetchSections,
  convertData: extractProspectPostId
});

const positionDetailsCache = HLRU(JOB_DETAILS_CAPACITY);

export async function getPositionDetail(locale: string, positionKey: UrlKey, repositories: Views['repositories']): Promise<PositionDetail> {
  const cachedData = positionDetailsCache.get(positionKey);
  let etag: string;
  if (cachedData) {
    etag = cachedData.etag;
  }
  const rawData = await fetchJobDetail(locale, positionKey, etag);

  if (rawData.etag === etag) {
    return { ...cachedData.data, boardToken: rawData.boardToken };
  }
  const data = resolvePositionDetail(rawData, repositories);
  positionDetailsCache.set(positionKey, { etag: rawData.etag, data });
  return data;
}
