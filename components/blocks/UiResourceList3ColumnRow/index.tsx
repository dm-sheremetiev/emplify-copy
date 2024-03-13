import { UiResourceList3ColumnRow } from '@/interfaces/blocks';
import { Button, ResourceCard, ResourceCardGroup } from '../../../storybookBuild/index';
import { LinkHandlerButton } from '@/components/common/handleLink';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { ImageComponent } from '@/components/common/Image';
// import { useRouter } from 'next/router';
// import { useLanguageDetector } from 'context/langDetector';
import React, { Fragment, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { externalLink } from '@/interfaces/index';

const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false }) as any;

export function UiResourceList3ColumnRowComp(props: { block: UiResourceList3ColumnRow }): JSX.Element {
  const { block } = props;
  // const router = useRouter();
  // const { langDetector } = useLanguageDetector();

  // Is any modal open or closed
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  // Keeps track of open all the modals
  const openObj = useRef<{ [p: string]: boolean }>({});

  const getVimeoId = (url) => {
    const match = /vimeo.*\/(\d+)/i.exec(url);

    if (match) {
      return match[1];
    }
  };

  return (
    <ResourceCardGroup id={block?.anchorId}>
      {block?.columnCards?.resourceCardsCollection.items.length > 0 &&
        block?.columnCards?.resourceCardsCollection.items.map((item, index) => {
          // Check if there is not translated text // Alert message
          // langDetector([item.displaySubTitle, documentToHtmlString(item?.title?.json), item.displayContent], router.locale);

          const getUrl = item.cta;
          const externalLink = getUrl ? (getUrl as externalLink).externalLink : null;
          const titleCta = getUrl ? (getUrl as externalLink).displayTitle : '';

          return (
            <Fragment key={index}>
              {externalLink ? (
                <ModalVideo
                  key={getVimeoId(externalLink)}
                  channel="vimeo"
                  autoplay
                  autopause
                  isOpen={isModalOpen && openObj.current[index]}
                  videoId={getVimeoId(externalLink)}
                  onClose={() => {
                    openObj.current[index] = false;
                    setIsModalOpen(false);
                  }}
                />
              ) : (
                ''
              )}
              <ResourceCard
                hideButton={!item.cta}
                key={index}
                meta={item.displaySubTitle}
                paragraph={item.displayContent}
                header={documentToHtmlString(item?.title?.json)}
                image={item.image?.url && <ImageComponent layout="fill" src={item.image?.url} alt={item.image?.description || item?.image?.title} />}
                buttonChildren={
                  externalLink?.includes('vimeo') ? (
                    <Button
                      type="ProductPrimary"
                      onClick={() => {
                        openObj.current[index] = true;
                        setIsModalOpen(true);
                      }}
                    >
                      {titleCta}
                    </Button>
                  ) : (
                    <LinkHandlerButton hasArrow={true} cta={item.cta} ctaType={item.ctaType} />
                  )
                }
              />
            </Fragment>
          );
        })}
    </ResourceCardGroup>
  );
}
