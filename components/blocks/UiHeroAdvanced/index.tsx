// import { useRouter } from 'next/router';
import { HeroBannerAlt } from '../../../storybookBuild/index';
import { LinkHandlerButton } from '@/components/common/handleLink';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

// Interfaces
import { UiHeroAdvanced } from '@/interfaces/blocks';
// import { useLanguageDetector } from 'context/langDetector';

export function UiHeroAdvancedComp(props: { block: UiHeroAdvanced }): JSX.Element {
  const { block } = props;
  const { title, subTitle, cta, ctaType, optionalCta, optionalCtaType, eyebrowHeadline } = block;

  // const router = useRouter();
  // const { langDetector } = useLanguageDetector();

  // Check if there is not translated text // Alert message
  // langDetector([documentToHtmlString(title?.json), documentToHtmlString(subTitle?.json), documentToHtmlString(eyebrowHeadline?.json)], router.locale);

  return (
    <HeroBannerAlt
      title={documentToHtmlString(title?.json)}
      subTitle={documentToHtmlString(subTitle?.json)}
      eyebrowHeadline={documentToHtmlString(eyebrowHeadline?.json)}
      buttonsChildren={
        <>
          {cta && <LinkHandlerButton cta={cta} ctaType={ctaType} />}
          {optionalCta && <LinkHandlerButton cta={optionalCta} ctaType={optionalCtaType} />}
        </>
      }
      theme={block.theme}
      bannerType={block.bannerType}
      titleColor={block.titleColor}
      orientation={block.orientation}
      bannerHeight={block.bannerHeight}
      subTitleColor={block.subTitleColor}
      backgroundSize={block.backgroundSize}
      backgroundColor={block.backgroundColor}
      boxBackgroundType={block.boxBackgroundType}
      boxBackgroundColor={block.boxBackgroundColor}
      eyebrowHeadlineColor={block.eyebrowHeadlineColor}
      image={block.image}
      mobileImage={block.mobileImage}
    />
  );
}
