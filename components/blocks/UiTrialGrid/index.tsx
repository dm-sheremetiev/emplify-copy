import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import styles from './trial-grid.module.scss'
import list from './items-list.module.scss'
import clsx from 'clsx';
import {UiTrialPageGrid } from '@/interfaces/blocks';
import {Table} from '../UiTrialTable'
import CtaBanner from './cta-banner/cta-banner'
import StripeBanner from './stripe-banner/stripe-banner'

export function UiTrialPageGridComp (props: { block: UiTrialPageGrid }): JSX.Element {
  const { block } = props
  const tableData = block.tableData
  const bulletPointsListLeft = documentToHtmlString(block.bulletPointsListColLeft?.json)
  const bulletPointsListColRight = documentToHtmlString(block.bulletPointsListColRight?.json)
  const descriptionRight = documentToHtmlString(block.descriptionRight?.json)
  const descriptionLeft = documentToHtmlString(block.descriptionLeft?.json)
  const ctaBannerData =  documentToHtmlString(block.ctaBanner?.json)

  return (
      <div className={styles.trialGridWrapper}>
        {block.headingRight && <div className={styles.trialGrid}>
          <div className={clsx(styles.item, styles.dark)}>
            <div>
              {block.tagRecommended &&
                <span className={styles.tagRecommended}>{block.tagRecommended}</span>
              }
              <h1>{block.headingRight}</h1>
            </div>
            <div className={styles.descriptionWrapper} dangerouslySetInnerHTML={{ __html: descriptionRight }} />
            <div className={clsx(list.itemsListHolder, list.magenta)} dangerouslySetInnerHTML={{ __html: bulletPointsListColRight }} />
            {block.ctaTextRight && <a className={styles.btn} href={block.ctaLinkRight}>{block.ctaTextRight}</a>}
          </div>
          <div className={styles.item}>
            <h2>{block.headingLeft}</h2>
            <div className={styles.descriptionWrapper} dangerouslySetInnerHTML={{ __html: descriptionLeft }} />
            <div className={clsx(list.itemsListHolder)}  dangerouslySetInnerHTML={{ __html: bulletPointsListLeft }} />
            {block.ctaTextLeft && <a className={styles.btn} href={block.ctaLinkLeft}>{block.ctaTextLeft}</a>}
            <p className={styles.notice}>{block.notice}</p>
          </div>
        </div>
        }
        {block.ctaBanner && <CtaBanner data={ctaBannerData} />}
        {block.tableData && <Table data={tableData} />}
        {block.stripeBanner && <StripeBanner data={block}/>}
      </div>
    )
}
