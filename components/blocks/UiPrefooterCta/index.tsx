import React from 'react';
import { PreFooterCTA } from '../../../storybookBuild/index';
import { Layout } from '@/components/layout';
// import { useRouter } from 'next/router';
// import { useLanguageDetector } from 'context/langDetector';

// Interfaces
import { UiPreFooterCta } from '@/interfaces/blocks';
import { LinkHandlerButton } from '@/components/common/handleLink';

export function UiPreFooterCtaComp(props: { block: UiPreFooterCta }): JSX.Element {
  const { block } = props;

  // const router = useRouter();
  // const { langDetector } = useLanguageDetector();

  // Check if there is not translated text // Alert message
  // langDetector([block.footerTitle, block.footerContent], router.locale);
  return (
    <Layout id={block?.anchorId}>
      <PreFooterCTA header={block.footerTitle} paragraph={block.footerContent}>
        <LinkHandlerButton cta={block.cta} ctaType={block.ctaType} />
      </PreFooterCTA>
    </Layout>
  );
}
