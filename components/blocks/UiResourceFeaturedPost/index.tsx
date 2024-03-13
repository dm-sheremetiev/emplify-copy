import React, {useState, useCallback} from 'react';
import { ResourceFeaturedPost } from '../../../storybookBuild/index';
import { Layout } from '@/components/layout';
import { LinkHandlerButton } from '@/components/common/handleLink';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
// Interfaces
import { UiResourceFeaturedPost } from '@/interfaces/blocks';
import { externalLink } from '@/interfaces/index';
// import { useRouter } from 'next/router';
// import { useLanguageDetector } from 'context/langDetector';
import dynamic from 'next/dynamic';
import { Button } from '../../../storybookBuild/index';
const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false }) as any;

export function UiResourceFeaturedPostComp(props: { block: UiResourceFeaturedPost }): JSX.Element {
  const { block } = props;
  // const router = useRouter();
  // const { langDetector } = useLanguageDetector();

  const [isOpen, setOpen] = useState(false);
  const onClose = useCallback(() => {
    setOpen(false)
  }, [])

  const getVimeoId = (url) => {
    const match = /vimeo.*\/(\d+)/i.exec(url);

    if(match) {
      return match[1];
    }
  }

  const getUrl = block.cta
  const externalLink = (getUrl as externalLink)?.externalLink
  const titleCta = (getUrl as externalLink)?.displayTitle

  const ModalVideoComponent = <ModalVideo
    channel="vimeo"
    autoplay
    autopause
    isOpen={isOpen}
    videoId={getVimeoId(externalLink)}
    onClose={onClose}
  />

  // Check if there is not translated text // Alert message
  // langDetector([documentToHtmlString(block.title?.json), block.photoLabel, block.displaySubTitle, block.displayContent], router.locale);

  const ctaButtonHandler = externalLink?.includes('vimeo') ? <Button type="ProductPrimary" onClick={() => setOpen(true)}>{titleCta}</Button> : <LinkHandlerButton cta={block.cta} hasArrow={true} />

  return (
    <Layout id={block?.anchorId}>
      {ModalVideoComponent}
      <ResourceFeaturedPost
        label={block.photoLabel}
        imgSrc={block.mobileImage ? block.mobileImage.url : ""}
        imgSrcDesktop={block.desktopImage ? block.desktopImage.url : ""}
        imgAlt={block.desktopImage ? block.desktopImage.description : ""}
        imgTitle={block.desktopImage ? block.desktopImage.title : ""}
        meta={block.displaySubTitle}
        title={documentToHtmlString(block?.title?.json)}
        paragraph={block.displayContent}
        buttonChildren={ctaButtonHandler}
      />
    </Layout>
  );
}
