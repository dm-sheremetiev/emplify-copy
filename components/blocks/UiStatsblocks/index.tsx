import { jsonModel } from '@/interfaces/blocks';
import { BrandBlockAlt } from '../../../storybookBuild/index';
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
// import { useLanguageDetector } from 'context/langDetector';
// import { useRouter } from 'next/router';
import ShowDown from 'showdown';

export function UiStatsblocksComp(props: { block: jsonModel }): JSX.Element {
  const { data } = props.block;
  // const router = useRouter();
  // const { langDetector } = useLanguageDetector();
  const converter = new ShowDown.Converter();
  const displayTitle = () => converter.makeHtml(data?.displayTitle);

  return (
    <>
      <BrandBlockAlt
        title={displayTitle()}
        titleColor={data?.titleColor}
        backgroundColor={data?.backgroundColor}
        items={data?.statsFields?.map((item) => {
          // Check if there is not translated text // Alert message
          // langDetector([documentToHtmlString(displayTitle()), item.title, item.dataSupText, item.content], router.locale)
          return {
            dataText: item.title,
            dataSupText: item.dataSupText,
            body: item.content
          }
        })}
      />
    </>
  )
}
