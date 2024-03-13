import React from 'react';
import { getGreenhouseViews } from '@/careers/utils/greenhouse';
import { InferGetStaticPropsType } from 'next';
import { useEntitiesMaps } from '@/careers/hooks/entities-hooks';
import Layout from '@/careers/components/layout/layout';
import PrivacyStatement from '@/careers/components/privacy-statement';
import { getPrivacyCopy } from '@/careers/utils/contentful';
import Metadata from '@/careers/components/metadata';
import withI18n from '@/careers/components/with-i18n';
import { careersGSSP } from '@/careers/utils/gssp';

export const getStaticProps = careersGSSP(async ({ preview = process.env.NEXT_PUBLIC_ENVIRONMENT === 'dev', locale }) => {
  const views = await getGreenhouseViews(locale);
  const copy = await getPrivacyCopy(preview, locale);

  return {
    props: {
      ...views.getCommonEntities(),
      copy
    }
  };
});

function PrivacyStatementPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { departments } = useEntitiesMaps(props);
  const { positionsCount, copy } = props;
  const { metadata } = copy;

  return (
    <>
      <Metadata metadata={metadata} />
      <Layout departments={departments} positionsCount={positionsCount}>
        <PrivacyStatement copy={copy} />
      </Layout>
    </>
  );
}

export default withI18n(PrivacyStatementPage);
