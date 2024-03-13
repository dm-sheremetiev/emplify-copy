import React from 'react';
import { ResourceFeatureCard } from '../../../storybookBuild/index';
import { LinkHandlerButton } from '@/components/common/handleLink';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

// Interfaces
import { UiResourceFeatureCardBlock } from '@/interfaces/blocks';
// import { useRouter } from 'next/router';
// import { useLanguageDetector } from 'context/langDetector';

export function UiResourceFeatureCardComp(props: { block: UiResourceFeatureCardBlock }): JSX.Element {
  const { block } = props;

  // const router = useRouter();
  // const { langDetector } = useLanguageDetector();
  // Check if there is not translated text // Alert message
  // langDetector([block.photoLabel, block.cardSubTitle, documentToHtmlString(block?.cardTitle?.json), block.cardContent], router.locale);
  return (
    <ResourceFeatureCard
      label={block.photoLabel}
      meta={block.cardSubTitle}
      imgSrc={block.mobileImage.url}
      imgSrcDesktop={block.desktopImage.url}
      imgAlt={block.desktopImage.description}
      imgTitle={block.desktopImage.title}
      title={documentToHtmlString(block?.cardTitle?.json)}
      paragraph={block.cardContent}
      buttonChildren={<LinkHandlerButton cta={block.cta} />}
      variations={block.variation ? '1' : '2'}
      position={block.cardPosition ? 'left' : 'right'}
    />
  );
}
