import React from 'react';
import { GetStaticPaths } from 'next';
import { useI18n } from 'next-localization';

import { careersGSSP } from '@/careers/utils/gssp';
import { locales, ogDefaultUrl } from '@/careers/config';
import { getGreenhouseViews } from '@/careers/utils/greenhouse';
import { PositionDetail } from '@/careers/types/entities-types';
import { CommonEntities } from '@/careers/types/entities-views';
import { useEntitiesMaps } from '@/careers/hooks/entities-hooks';
import { LocalePath, LocalizedPositionKey } from '@/careers/types/locale-types';

import Layout from '@/careers/components/layout';
import Metadata from '@/careers/components/metadata';
import withI18n from '@/careers/components/with-i18n';
import PositionDetailTemplate from '@/careers/components/position-detail';

type Params = { positionKey: string };

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = [];
  for (const locale of locales) {
    const views = await getGreenhouseViews(locale);
    const positions = views.raw.getAllPositions();
    const params =
      positions.map((position) => ({
        params: { positionKey: position.urlKey },
        locale
      })) ?? [];
    paths.push(...params);
  }
  return {
    fallback: 'blocking',
    paths
  };
};

type Props = CommonEntities & {
  positionDetail: PositionDetail;
  ogImage: string;
  localePaths: LocalePath[];
};

function convertToLocalePaths(localeKeys: LocalizedPositionKey[]): LocalePath[] {
  return localeKeys.map(({ locale, urlKey }) => {
    return {
      locale,
      path: `/careers/open-positions/detail/${urlKey}`
    };
  });
}

export const getStaticProps = careersGSSP<Props, Params>(async ({ params, locale }) => {
  const { positionKey } = params;

  const ogImage = ogDefaultUrl;
  const views = await getGreenhouseViews(locale);
  const commonEntities = views.getCommonEntities();
  const positionDetail = await views.getPositionDetail(positionKey);
  const alternateKeys = await views.getAlternatePositionKeys(positionKey);

  return {
    props: {
      ...commonEntities,
      ogImage,
      positionDetail,
      localePaths: convertToLocalePaths(alternateKeys)
    }
  };
});

function PositionDetailPage(props: Props) {
  const { departments } = useEntitiesMaps(props);
  const { positionsCount, positionDetail, ogImage, localePaths } = props;
  const { title, location } = positionDetail;
  const i18n = useI18n();
  return (
    <Layout departments={departments} positionsCount={positionsCount} localePaths={localePaths}>
      <Metadata
        metadata={{
          title: title,
          description: i18n.t('jobDetail.meta.description', { title, location }),
          ogTitle: i18n.t('jobDetail.meta.ogTitle', { title }),
          ogDescription: i18n.t('jobDetail.meta.ogDescription', {
            title,
            location
          }),
          ogImage: {
            url: ogImage
          }
        }}
        localePaths={localePaths}
      />
      <PositionDetailTemplate positionDetail={positionDetail} departments={departments} />
    </Layout>
  );
}

export default withI18n(PositionDetailPage);
