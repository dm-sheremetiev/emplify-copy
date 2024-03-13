import { UiResourceCardGroup } from '@/interfaces/blocks';
import { ResourceCard, ResourceCardGroup } from '../../../storybookBuild/index';
import { LinkHandlerButton } from '@/components/common/handleLink';
import { ImageComponent } from '@/components/common/Image';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
// import { useRouter } from 'next/router';
// import { useLanguageDetector } from 'context/langDetector';

export function UiResourceCardGroupComp(props: { block: UiResourceCardGroup }): JSX.Element {
  const { block } = props;

  // const router = useRouter();
  // const { langDetector } = useLanguageDetector();

  return (
    <ResourceCardGroup id={block?.anchorId}>
      {block.resourceCardsCollection.items.length > 0 &&
        block.resourceCardsCollection.items.map((item, index) => {
          // Check if there is not translated text // Alert message
          // langDetector([item.subTitle, documentToHtmlString(item?.title?.json), item.content], router.locale);
          return (
            <ResourceCard
              hideButton={!item.cta}
              key={index}
              meta={item.subTitle}
              paragraph={item.content}
              header={documentToHtmlString(item?.title?.json)}
              image={item.image?.url && <ImageComponent layout="fill" src={item.image?.url} alt={item.image?.description || item.image?.title} />}
              buttonChildren={item.cta && <LinkHandlerButton hasArrow={true} cta={item.cta} ctaType={item.ctaType} />}
            />
          );
        })}
    </ResourceCardGroup>
  );
}
