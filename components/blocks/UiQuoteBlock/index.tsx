import { Fragment } from 'react';
import { UiQuoteBlock } from '@/interfaces/blocks';
import { QuoteBlock, QuoteBlockImage } from '../../../storybookBuild/index';
import { LinkHandlerButton } from '@/components/common/handleLink';
// import { useRouter } from 'next/router';
// import { useLanguageDetector } from 'context/langDetector';

export function UiQuoteBlockComp(props: { block: UiQuoteBlock }): JSX.Element {
  const { block } = props;

  // const router = useRouter();
  // const { langDetector } = useLanguageDetector();

  // Check if there is not translated text // Alert message
  // langDetector([block.quote, block.companyName, block.quoteBy, block.role, block.headline], router.locale);

  return (
    <QuoteBlock
      by={block.quoteBy}
      id={block?.anchorId}
      quote={block.quote}
      headline={block.headline}
      quoteColor={block.quoteColor}
      companyName={block.companyName}
      companyNameColor={block.companyNameColor}
      quoteByColor={block.quoteByColor}
      headlineColor={block.headlineColor}
      roleColor={block.roleColor}
      buttonChildren={
        <div className="quote-block__action-group">
          {block.cta && <LinkHandlerButton cta={block.cta} ctaType={block?.ctaType} />}
          {block.optionalCta && <LinkHandlerButton cta={block.optionalCta} ctaType={block?.optionalCtaType} />}
        </div>
      }
      imgSrc={block.backgroundImage?.url}
      imgMobileSrc={block.backgroundMobileImage?.url}
      imgTitle={block.backgroundImage?.title}
      imgAlt={block.backgroundImage?.description}
      role={block.role}
      type={block.type}
      orientation={block.orientation}
      backgroundColor={block.backgroundColor}
      backgroundPosition={block.backgroundPosition}
      backgroundSize={block.backgroundSize}
      imagesChildren={
        <Fragment>
          {block && block.logoImagesCollection && block.logoImagesCollection?.items?.length !== 0 &&
          block.logoImagesCollection.items.map((item, key) => {
            return <QuoteBlockImage key={key} imgSrc={item.url} imgAlt={item.description} imgTitle={item.title} />;
          })}
        </Fragment>
      }
    />
  );
}
