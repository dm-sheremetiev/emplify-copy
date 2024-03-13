import { useEffect } from 'react';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { AnimatedBanner } from '../../../storybookBuild/index';

// Interfaces
import { jsonModel } from '@/interfaces/blocks';
import { useRouter } from 'next/router';
// import { useLanguageDetector } from 'context/langDetector';
import { linkHandler } from '@/components/common/handleLink';

export function UiAnimatedBannerComp(props: { block: jsonModel }): JSX.Element {
  const { data } = props.block;
  const router = useRouter();
  // const { langDetector } = useLanguageDetector();
  const link = linkHandler(data?.cta)
  // Check if there is not translated text // Alert message
  // langDetector(
  //   [
  //     documentToHtmlString(data?.headlineLeft),
  //     documentToHtmlString(data?.headlineRight),
  //     documentToHtmlString(data?.title),
  //     documentToHtmlString(data?.subtitle)
  //   ],
  //   router.locale
  // )

  useEffect(() => {
    // Prefetch the dashboard page
    router.prefetch(link.link);
  }, []);

  return (
    <AnimatedBanner
      animationType={data?.animationType}
      bannerType={data?.bannerType}
      headlineLeft={data?.headlineLeft?.json && documentToHtmlString(data?.headlineLeft)}
      headlineRight={data?.headlineRight?.json && documentToHtmlString(data?.headlineRight)}
      title={data?.title && documentToHtmlString(data?.title)}
      subTitle={data?.subtitle && documentToHtmlString(data?.subtitle)}
      imgSrc={data?.image?.url}
      imgAlt={data?.image?.description}
      imgTitle={data?.image?.title}
      imgWidth={data?.image?.width}
      imgHeight={data?.image?.height}
      buttonArr={
        link.link || data?.buttonType
          ? [
              {
                href: link.link,
                text: link.title,
                type: data?.buttonType,
                target: link.target
              }
            ]
          : []
      }
    />
  )
}
