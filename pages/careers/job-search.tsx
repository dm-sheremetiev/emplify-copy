import React from 'react';
import { InferGetStaticPropsType } from 'next';

import { careersGSSP } from '@/careers/utils/gssp';
import Metadata from '@/careers/components/metadata';
import withI18n from '@/careers/components/with-i18n';
import Layout from '@/careers/components/layout/layout';
import SearchWrapper from '@/careers/components/search';

import { getSearchCopy } from '@/careers/utils/contentful';
import { getGreenhouseViews } from '@/careers/utils/greenhouse';
import { useEntitiesMaps } from '@/careers/hooks/entities-hooks';

export const getStaticProps = careersGSSP(async ({ preview = process.env.NEXT_PUBLIC_ENVIRONMENT == 'dev', locale }) => {
  const views = await getGreenhouseViews(locale);
  const copy = await getSearchCopy(preview, locale);
  const entities = views.getEntitiesForLocation();

  return {
    props: {
      ...entities,
      ...views.getCommonEntities(),
      copy
    }
  };
});

function SearchPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { departments } = useEntitiesMaps(props);
  const { positionsCount, copy } = props;
  const { metadata } = copy;

  return (
    <>
      <Metadata metadata={metadata} />
      <Layout departments={departments} positionsCount={positionsCount}>
        <SearchWrapper {...props} />
      </Layout>
    </>
  );
}

export default withI18n(SearchPage);
