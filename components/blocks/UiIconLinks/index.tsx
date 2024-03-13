
import { IconLinks } from '../../../storybookBuild/index';

// Interfaces
import { jsonModel } from '@/interfaces/blocks';
// import { useRouter } from 'next/router';
// import { useLanguageDetector } from 'context/langDetector';

export function IconLinksComp(props: { block: jsonModel }): JSX.Element {
  const { block } = props;

  // const router = useRouter();
  // const { langDetector } = useLanguageDetector();

  // Check if there is not translated text // Alert message
  // langDetector([block?.data?.title], router.locale);

  return (
    <IconLinks
      id="emplifi-icon-links"
      title={block?.data?.title}
      links={
        block?.data?.links.length > 0 &&
        block?.data?.links.map((item: any) => {
          return {
            name: item.name,
            href: item.href,
            target: item.target,
            title: item.title
          }
        })
      }
    />
  )
}