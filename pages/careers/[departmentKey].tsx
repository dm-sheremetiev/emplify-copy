import React from 'react';
import { GetStaticPaths } from 'next';
import { locales } from '@/careers/config';
import Layout from '@/careers/components/layout';
import { careersGSSP } from '@/careers/utils/gssp';
import Metadata from '@/careers/components/metadata';
import withI18n from '@/careers/components/with-i18n';
import { DepartmentsCopy } from '@/careers/types/copy-types';
import { getDepartmentCopy } from '@/careers/utils/contentful';
import { getGreenhouseViews } from '@/careers/utils/greenhouse';
import { useEntitiesMaps } from '@/careers/hooks/entities-hooks';
import { getBoardForLocale } from '@/careers/utils/greenhouse-locale';
import DepartmentBanner from '@/careers/components/department-detail';
import OnPageNavigation from '@/careers/components/onpage-navigation';
import Positions from '@/careers/components/department-detail/positions';
import { getDepartmentCopyFallback } from '@/careers/utils/copy-fallbacks';
import DepartmentCopy from '@/careers/components/department-detail/department-copy';
import PositionsHeader from '@/careers/components/department-detail/positions-header';
import { NormalizedPositionsEntries, CommonEntities } from '@/careers/types/entities-views';

import layoutStyles from '@/careers/styles/modules/layout.module.scss';
import styles from '@/careers/components/onpage-navigation/onpage-nav.module.scss';

type Params = { departmentKey: string };

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = [];
  for (const locale of locales) {
    const views = await getGreenhouseViews(locale);
    const params = views.raw.getDepartments().map(([urlKey]) => ({ params: { departmentKey: urlKey }, locale })) ?? [];
    paths.push(...params);
  }
  return {
    paths,
    fallback: 'blocking'
  };
};

type Props = CommonEntities & {
  departmentKey: string;
  boardToken: string | null;
  prospectPostId: string | null;
  departmentCopy: DepartmentsCopy;
  positionsEntries: NormalizedPositionsEntries;
};

export const getStaticProps = careersGSSP<Props, Params>(async ({ params, preview = process.env.NEXT_PUBLIC_ENVIRONMENT === 'dev', locale }) => {
  const { departmentKey } = params;
  const views = await getGreenhouseViews(locale);
  const entities = views.getEntitiesForDepartment(departmentKey);

  let departmentCopy = await getDepartmentCopy(departmentKey, preview, locale);
  const boardToken = getBoardForLocale(locale)[0];

  if (!departmentCopy) {
    const departments = new Map(entities.departmentsEntries);
    departmentCopy = getDepartmentCopyFallback(departments.get(departmentKey));
  }

  return {
    props: {
      boardToken,
      departmentKey,
      prospectPostId: await views.getProspectPostId(),
      ...entities,
      departmentCopy
    },
    revalidate: 300
  };
});

function PositionDetail(props: Props) {
  const { departmentKey, positionsCount, prospectPostId, departmentCopy, boardToken } = props;
  const { positions, departments } = useEntitiesMaps(props);
  const department = departments.get(departmentKey);
  const { metadata, mainImage } = departmentCopy;

  return (
    <>
      <Metadata metadata={metadata} />
      <Layout overflowHidden positionsCount={positionsCount} departments={departments}>
        <DepartmentBanner department={department} description={departmentCopy.perex} data={mainImage} />
        <PositionsHeader department={department} positions={Array.from(positions.values())} />
        <Positions positions={Array.from(positions.values())} prospectPostId={prospectPostId} boardToken={boardToken} />
        <DepartmentCopy copy={departmentCopy} />
        <div className={layoutStyles.container}>
          <OnPageNavigation
            customClassName={styles.navWrapper}
            entities={departments}
            activeEntity={department?.urlKey || ''}
            entitiesType="departments"
          />
        </div>
      </Layout>
    </>
  );
}

export default withI18n(PositionDetail);
