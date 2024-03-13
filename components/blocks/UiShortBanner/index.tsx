import { ShortBanner } from '../../../storybookBuild/index';
import React from 'react';
import { LinkHandlerButton } from '@/components/common/handleLink';

// Interfaces
import { jsonModel } from '@/interfaces/blocks';
// import { useRouter } from 'next/router';
// import { useLanguageDetector } from 'context/langDetector';

export function UiShortBannerComp(props: { block: jsonModel }): JSX.Element {
  const { data } = props.block;
  // const router = useRouter();
  // const { langDetector } = useLanguageDetector();

  // Check if there is not translated text // Alert message
  // langDetector([data?.displayTitle, data.displayContent], router.locale)
  return (
    <ShortBanner
      id={data?.anchorId}
      type={data.type ? data.type : 'Resource'}
      title={data?.displayTitle}
      paragraph={data.displayContent}
      imgSrc={data?.image?.url}
      imgAlt={data?.image?.description}
      imgTitle={data?.image?.title}
      buttonChildren={data?.cta && <LinkHandlerButton cta={data?.cta} />}
    />
  )
}
