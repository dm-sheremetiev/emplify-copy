import { useState, useEffect } from 'react';
import { ContactBanner } from '../../../storybookBuild/index';
import InnerHTML from 'dangerously-set-html-content';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
// import { useRouter } from 'next/router';
// import { useLanguageDetector } from 'context/langDetector';

// Interfaces
import { UiContactBanner } from '@/interfaces/blocks';

export function UiContactBannerComp(props: { block: UiContactBanner }): JSX.Element {
  const { block } = props;
  const [form, setForm] = useState(block.form.rawHtml);

  // const router = useRouter();
  // const { langDetector } = useLanguageDetector();

  useEffect(() => {
    setForm(block.form.rawHtml);
  }, [block.form.rawHtml]);

  // Check if there is not translated text // Alert message
  // langDetector([documentToHtmlString(block.title?.json), block?.displayContent], router.locale);
  return (
    <ContactBanner
      id={block?.anchorId}
      title={documentToHtmlString(block?.title?.json)}
      body={block?.displayContent}
      imgSrc={block.image.url}
      imgAlt={block.image.description}
      imgTitle={block.image.title}
      isRight={block.alignLeft}
    >
      {form && <InnerHTML html={form} />}
    </ContactBanner>
  );
}
