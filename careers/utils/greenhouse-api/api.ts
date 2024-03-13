import { NotFoundError } from '../errors';
import { getBoardForLocale } from '../greenhouse-locale';
import { JobDetail, OfficesListResponse, SectionsResponse } from './types/greenhouse-types';

// https://developers.greenhouse.io/job-board.html
const BOARDS_BASE_URL = 'https://boards-api.greenhouse.io/v1/boards/';

type EtagBody = { etag: string; body: Record<string, any> };

async function fetchApi(url: string, prevEtag: string): Promise<EtagBody> {
  const res = await fetch(url, { headers: { 'if-none-match': prevEtag, 'Cache-Control': 'must-revalidate' } });
  if (res.status === 304) {
    return { etag: prevEtag, body: {} };
  }
  if (res.status === 404) {
    throw new NotFoundError();
  }
  if (res.status !== 200) {
    const resText = await res.text();
    throw new Error(`Greenhouse API Error for ${url}: ${resText}`);
  }
  const etag = res.headers.get('etag');
  const body = await res.json();

  return { etag, body };
}

function mergeData({ body, etag }: EtagBody) {
  return { ...body, etag };
}

function resolveURLs(locale: string, subPath: string): { url: string; boardToken: string }[] {
  const boardTokens = getBoardForLocale(locale);

  return boardTokens.map((token) => {
    return {
      url: new URL(`${token}/${subPath}`, BOARDS_BASE_URL).toString(),
      boardToken: token
    };
  });
}

export async function fetchOffices(locale: string, etag: string): Promise<OfficesListResponse> {
  const officesURL = resolveURLs(locale, 'offices');

  const outputWithOffices = await Promise.all(officesURL.map((url) => fetchApi(url.url, etag)));
  const offices = getOutput(outputWithOffices, 'offices');
  return mergeData({ body: { offices }, etag: outputWithOffices[0].etag }) as OfficesListResponse;
}

const getOutput = (output, entity) => {
  const entities = [];

  output.forEach((data) => {
    data.body?.[entity]?.forEach((entity1) => {
      const entity2 = entities.find((entity2) => entity2.name === entity1.name);

      if (entity2) {
        entity1.departments.forEach((department1) => {
          entity2.departments.forEach((department2) => {
            if (department1.name === department2.name) {
              department2.jobs.push(...department1.jobs);
            }
          });
        });
      } else {
        entities.push(entity1);
      }
    });
  });
  return entities;
};

export async function fetchJobDetail(locale: string, jobID: string | number, etag: string): Promise<JobDetail> {
  const detailURL = resolveURLs(locale, `jobs/${jobID}`);
  let jobDetailOutput;

  for (const url of detailURL) {
    try {
      jobDetailOutput = await fetchApi(url.url, etag);
      if (jobDetailOutput) {
        jobDetailOutput.body.boardToken = url.boardToken;
        break;
      }
    } catch (err) {
      console.log(err);
    }
  }

  if (!jobDetailOutput) {
    throw new NotFoundError();
  }

  return mergeData(jobDetailOutput) as JobDetail;
}

export async function fetchSections(locale: string, etag: string): Promise<SectionsResponse> {
  const sectionsURL = resolveURLs(locale, 'sections');
  const outputWithSections = await Promise.all(sectionsURL.map((url) => fetchApi(url.url, etag)));
  const sections = getOutput(outputWithSections, 'sections');

  return mergeData({ body: { sections }, etag: outputWithSections[0].etag }) as SectionsResponse;
}
