import { HeroBannerCampaign } from '../../../storybookBuild/index';

// Interfaces
import { jsonModel } from '@/interfaces/blocks';
// import { useRouter } from 'next/router';
// import { useLanguageDetector } from 'context/langDetector';

export function UiHeroCampaignComp(props: { block: jsonModel }): JSX.Element {
  const { data } = props.block;
  // const router = useRouter();
  // const { langDetector } = useLanguageDetector();

  // Check if there is not translated text // Alert message
  // langDetector(
  //   [
  //     data?.headlineTop,
  //     data?.title,
  //     data?.subtitle,
  //     data?.perex
  //   ],
  //   router.locale
  // )

  return (
    <HeroBannerCampaign
      title={data?.title}
      subTitle={data?.subtitle}
      perex={data?.perex}
      imageSrc={data?.mobileImage?.url}
      imageDesktopSrc={data?.image?.url}
      imageAlt={data?.image?.description}
      headlineTop={data?.headlineTop}
      backgroundColor={data?.backgroundColor}
      titleColor={data?.titleColor}
      subtitleColor={data?.subtitleColor}
      perexColor={data?.perexColor}
    />
  );
}
