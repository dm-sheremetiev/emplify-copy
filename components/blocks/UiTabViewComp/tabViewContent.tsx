// import { useRouter } from 'next/router'
import styles from './tabView.module.scss'
import { UiCardAdvanced } from '@/interfaces/blocks'
import { LinkHandlerButton } from '@/components/common/handleLink'
// import { useLanguageDetector } from '../../../context/langDetector'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { INLINES } from '@contentful/rich-text-types'
import { EMPLIFI_SITES } from 'utils/constants'
import { imageContentfulTransformUrl } from 'utils/contenful-helper-functions'

// https://www.contentfulcommunity.com/t/add-a-target-blank-to-hyperlink-within-rich-text-content-type/2650/11
const options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      let anchorAttrs = {}

      if (!EMPLIFI_SITES.some((el) => node.data.uri.includes(el))) {
        anchorAttrs = {
          target: '_blank',
          rel: 'noopener noreferrer'
        }
      }

      return (
        <a {...anchorAttrs} href={node.data.uri}>
          {children}
        </a>
      )
    }
  }
}

export default function TabViewContent(props: { item: UiCardAdvanced; show: boolean }): JSX.Element {
  const { item, show } = props
  // const router = useRouter()
  // const { langDetector } = useLanguageDetector()

  const headline = documentToHtmlString(item?.title?.json)
  const content = documentToReactComponents(item?.cardContent?.json, options)
  const tabBullets = documentToHtmlString(item?.tabBullets?.json)
  const backgroundImage = item?.backgroundImage?.url ? `url(${imageContentfulTransformUrl(item?.backgroundImage?.url)})` : ''

  // Check if there is not translated text // Alert message
  // langDetector([headline, tabBullets], router.locale)

  return (
    <div
      style={{
        backgroundColor: item?.backgroundColor || '#fff',
        backgroundImage,
        height: show ? 'auto' : '0',
        paddingTop: show ? '50px' : '0',
        paddingBottom: show ? '30px' : '0'
      }}
      className={styles.tabContent}
    >
      {headline && (
        <div
          className={styles.tabContentTitle}
          style={{ color: item.tabHeadlineColor || '#000' }}
          dangerouslySetInnerHTML={{ __html: headline || '' }}
        />
      )}

      <div className={styles.tabContentWrapper}>
        <div className={styles.tabContentDescription} style={{ color: item?.tabDescriptionColor || '#000' }}>
          {content}
        </div>
        {tabBullets && (
          <div
            className={styles.tabBulletContent}
            style={{ color: item?.tabBulletsColor || '#000' }}
            dangerouslySetInnerHTML={{ __html: tabBullets || '' }}
          />
        )}
      </div>

      <div className={styles.actionGroup}>
        {item?.cta && <LinkHandlerButton cta={item?.cta} ctaType={item?.ctaType} />}
        {item?.optionalCta && <LinkHandlerButton cta={item?.optionalCta} ctaType={item?.optionalCtaType} />}
      </div>
    </div>
  )
}
