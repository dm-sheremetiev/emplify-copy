import { ArticleCallToAction } from '../../../storybookBuild/index';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { LinkHandlerButton } from '@/components/common/handleLink';
import { UiArticleCallToAction } from '@/interfaces/blocks';

export function UiArticleCTAComp(props: { block: UiArticleCallToAction }): JSX.Element {
  const { block } = props;

  const contentParse = documentToHtmlString(block?.content?.json);

  return (
    <ArticleCallToAction
      id={block?.anchorId}
      backgroundColor={'#1A4073'}
      imgSrc={block?.image?.url}
      imgAlt={block?.image?.description}
      imgTitle={block?.image?.title}
      title={block.displayTitle}
      articleBody={contentParse}
      buttonChildren={<LinkHandlerButton cta={block.cta} />}
    />
  );
}
