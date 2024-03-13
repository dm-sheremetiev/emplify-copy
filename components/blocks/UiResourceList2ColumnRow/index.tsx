import { ResourceCard, ResourceCardGroup } from '../../../storybookBuild/index';
import { LinkHandlerButton } from '@/components/common/handleLink';
import { UiResourceFeatureCardComp } from '../';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { ImageComponent } from '@/components/common/Image';
// import { useRouter } from 'next/router';
// import { useLanguageDetector } from 'context/langDetector';

// Interfaces
import { UiResourceList2ColumnRow } from '@/interfaces/blocks';

export function UiResourceList2ColumnRowComp(props: { block: UiResourceList2ColumnRow }): JSX.Element {
  const { block } = props;
  // const router = useRouter();
  // const { langDetector } = useLanguageDetector();
  return (
    <ResourceCardGroup id={block?.anchorId}>
      {block.columnCardsCollection.items.length > 0 &&
        block.columnCardsCollection.items.map((item, index) => {
          if (item.__typename === 'UiResourceCard') {
            // Check if there is not translated text // Alert message
            // langDetector([item.displaySubTitle, documentToHtmlString(item?.title?.json), item.displayContent], router.locale);
            return (
              <ResourceCard
                hideButton={!item.cta}
                key={index}
                meta={item.displaySubTitle}
                paragraph={item.displayContent}
                header={documentToHtmlString(item?.title?.json)}
                image={item.image?.url && <ImageComponent layout="fill" src={item.image?.url} alt={item.image?.description || item.image?.title} />}
                buttonChildren={item.cta && <LinkHandlerButton hasArrow={true} cta={item.cta} ctaType={item.ctaType} />}
              />
            );
          } else if (item.__typename === 'UiResourceFeatureCard') {
            return <UiResourceFeatureCardComp key={index} block={item} />;
          }
        })}
    </ResourceCardGroup>
  );
}
