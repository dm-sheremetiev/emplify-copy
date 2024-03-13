import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { internalLinkParse } from 'scripts/internalLinkFill';
import { Feature, FeatureGroup } from '../../../storybookBuild/index';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

// Interfaces
import { UiFeatureGroup } from '@/interfaces/blocks';
// import { useLanguageDetector } from 'context/langDetector';

export function UiFeatureGroupComp(props: { block: UiFeatureGroup }): JSX.Element {
  const { block } = props;
  const [content, setContent] = useState<Array<string>>([]);
  const contentArray = block?.featuresCollection?.items;
  const router = useRouter();
  // const { langDetector } = useLanguageDetector();

  const showContent = async () => {
    const some = Promise.all(
      contentArray?.map(async (item) => {
        const contentParse = documentToHtmlString(item?.content.json);

        if (contentParse.includes('entry-hyperlink')) {
          return await internalLinkParse(contentParse, router.locale, item?.content.json);
        } else {
          return contentParse;
        }
      })
    );
    setContent(await some);
  };

  useEffect(() => {
    showContent();
  }, [contentArray]);

  return (
    <FeatureGroup title={documentToHtmlString(block?.title?.json)}>
      {block?.featuresCollection?.items?.length > 0 &&
        block?.featuresCollection?.items?.map((item, index) => {
          // Check if there is not translated text // Alert message
          // langDetector([documentToHtmlString(item?.title?.json), content[index]], router.locale);
          return (
            <Feature
              key={index}
              className={block.type === 'campaign' && 'emplifi-icon-feature-group--campaign'}
              title={documentToHtmlString(item?.title?.json)}
              icon={item?.iconLink?.icon}
              paragraph={content[index]}
            />
          );
        })}
    </FeatureGroup>
  );
}
