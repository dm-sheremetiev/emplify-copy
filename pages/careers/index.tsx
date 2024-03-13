import React from 'react';
import { InferGetStaticPropsType } from 'next';

import Layout from '@/careers/components/layout';
import { careersGSSP } from '@/careers/utils/gssp';
import Metadata from '@/careers/components/metadata';
import withI18n from '@/careers/components/with-i18n';
import HomePage from '@/careers/components/hp/home-page';
import { getHomepageCopy } from '@/careers/utils/contentful';
import { getGreenhouseViews } from '@/careers/utils/greenhouse';
import { useEntitiesMaps } from '@/careers/hooks/entities-hooks';
import { getHomepageCopyFallback } from '@/careers/utils/copy-fallbacks';

// Nextjs 13 revalidate
export const revalidate = 900

export const getStaticProps = careersGSSP(async ({ preview = process.env.NEXT_PUBLIC_ENVIRONMENT === 'dev', locale }) => {
  const views = await getGreenhouseViews(locale);
  const homepageCopy = (await getHomepageCopy(preview, locale)) ?? getHomepageCopyFallback();

  return {
    props: {
      ...views.getEntitiesForHomepage(),
      homepageCopy
    },
    revalidate: 300
  };
});

function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { recentPositions, positionsCount, homepageCopy } = props;
  const { metadata } = homepageCopy;
  const { departments, locations } = useEntitiesMaps(props);

  return (
    <>
      <Metadata metadata={metadata} />
      <Layout departments={departments} positionsCount={positionsCount} overflowHidden>
        <HomePage recentPositions={recentPositions} locations={locations} positionsCount={positionsCount} copy={homepageCopy} />
      </Layout>
    </>
  );
}

export default withI18n(Home);
