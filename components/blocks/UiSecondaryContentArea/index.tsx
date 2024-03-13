import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
import Link from 'next/link'
import ShowDown from 'showdown';
import { Button, SecondaryContentArea } from '../../../storybookBuild/index';
// import { useLanguageDetector } from 'context/langDetector';


// Interfaces
import { jsonModel } from '@/interfaces/blocks';

export function UiSecondaryContentAreaComp(props: { block: jsonModel }): JSX.Element {
  const { block } = props;
  const { data } = block;

  const [content, setContent] = useState('');
  const contentParse = data?.content;
  // const router = useRouter();
  // const { langDetector } = useLanguageDetector();
  const converter = new ShowDown.Converter();

  const showContent = async () => {
    {
      let htmlOutput = '';
      
      data?.content?.forEach(item => {
        const questionHtml = converter.makeHtml(item?.question);
        const answerHtml = converter.makeHtml(item?.answer);
        htmlOutput += `<p>
                      ${questionHtml ? `<p><b>${questionHtml}</b></p>` : ''}<p>${answerHtml}</p></p>`
      }); 

      setContent(htmlOutput);
    };
  }

  function LinkComponent(dataa) {
    const data = dataa?.data;
    return (
      <Link
        prefetch={false}
        href={data?.cta?.link}
        target={data?.cta?.target ? data?.cta?.target : undefined}
        rel={data?.cta?.target === '_blank' ? 'noopener noreferrer' : undefined}
        passHref
      >
        <Button type={data?.type}>
        {data?.cta?.text.replace(' >', '')}
      </Button>
      </Link>
    );
  }  

  useEffect(() => {
    showContent()
  }, [contentParse])

  // Check if there is not translated text // Alert message
  // langDetector([block?.data?.secondaryContentTitle, content], router.locale);
  return (
    <SecondaryContentArea
      id={block?.data?.anchorId}
      imgSrc={block?.data?.mobileImage}
      imgSrcDesktop={block?.data?.desktopImage}
      imgAlt={block?.data?.desktopImageText}
      imgTitle={block?.data?.desktopImageText}
      title={block?.data?.title}
      paragraph={content}
      buttonChildren={<LinkComponent data={data} />}
    />
  )
}
