// import { useRouter } from 'next/router';
import clsx from 'clsx';

import styles from './proofPoints.module.scss';
// import { useLanguageDetector } from 'context/langDetector';
import { UiCardAdvanced } from '@/interfaces/blocks';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { LinkHandlerButton } from '@/components/common/handleLink';
import { contentfulImageLoaderFunction } from 'utils/contenful-helper-functions';
import Image from 'next/image';

export default function ProofPointsItem(props: { item: UiCardAdvanced, isRounded: boolean }): JSX.Element {
  const { item, isRounded } = props;
  const content = documentToHtmlString(item?.cardContent?.json);
  // const router = useRouter();
  // const { langDetector } = useLanguageDetector();

  // Check if there is not translated text // Alert message
  // langDetector([item.tabTitle, content], router.locale);

  return (
    <div className={clsx(styles.item, isRounded && styles.isRounded)}>
      <div className={styles.contentWrapper}>
        <p className={clsx(styles.statFigure, isRounded && styles.isRounded)} style={{ color: item.tabHeadlineColor || '#69BAE8' }}>
          {item.statPrefix && <span>{item.statPrefix}</span>}
          {item.tabTitle}
          {item.statSuffix && <span>{item.statSuffix}</span>}
        </p>
        <div
          className={clsx(styles.description, isRounded && styles.isRounded)}
          dangerouslySetInnerHTML={{ __html: content || '' }}
          style={{ color: item.tabDescriptionColor || '#003A5D' }}
        />
        {item.backgroundImage?.url && (
          <Image
            loader={contentfulImageLoaderFunction}
            src={item.backgroundImage?.url}
            alt={item.backgroundImage?.title}
            width={1000}
            height={1000}
            loading="lazy"
            priority={false}
          />
        )}
        {item?.cta && <LinkHandlerButton cta={item?.cta} ctaType={item?.ctaType} />}
      </div>
    </div>
  );
}
