import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { HeroProductBanner } from '../../../storybookBuild/index';
import { LinkHandlerButton } from '@/components/common/handleLink';
import { Layout } from '@/components/layout';
import { internalLinkParse } from 'scripts/internalLinkFill';
// import { useLanguageDetector } from 'context/langDetector';

// Interfaces
import { UiProductBanner } from '@/interfaces/blocks';

export function UiHeroProductBanner(props: { block: UiProductBanner }): JSX.Element {
  const { block } = props;
  const [content, setContent] = useState('');

  const router = useRouter();
  // const { langDetector } = useLanguageDetector();
  const contentParse = documentToHtmlString(block?.content?.json);

  const showContent = async () => {
    if (contentParse.includes('entry-hyperlink')) {
      const linkParsed = await internalLinkParse(contentParse, router.locale, block?.content?.json);
      return setContent(linkParsed);
    } else {
      return setContent(contentParse);
    }
  };

  useEffect(() => {
    showContent();
  }, [contentParse]);

  // Check if there is not translated text // Alert message
  // langDetector([documentToHtmlString(block.title?.json), content], router.locale);

  return (
    <Layout id={block?.anchorId}>
      <HeroProductBanner
        title={documentToHtmlString(block?.title?.json)}
        body={content}
        imgSrc={block?.image?.url}
        isRight={!block?.alignTextLeft}
        imgTitle={block?.image?.title}
        alt={block?.image?.description}
        buttonChildren={block?.cta && <LinkHandlerButton cta={block.cta} ctaType={block.ctaType} />}
      />
    </Layout>
  );
}
