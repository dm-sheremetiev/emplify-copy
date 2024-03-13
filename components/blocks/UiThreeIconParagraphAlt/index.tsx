import { ThreeIconParagraphAlt } from '../../../storybookBuild/index'
import { UiThreeCardGroupComp } from '../UiThreeCardGroup'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

// Interfaces
import { UiThreeIconParagraphAlt } from '@/interfaces/blocks'
// import { useRouter } from 'next/router'
// import { useLanguageDetector } from 'context/langDetector'

export function UiThreeIconParagraphAltComp(props: { block: UiThreeIconParagraphAlt }): JSX.Element {
  const { block } = props

  // const router = useRouter()
  // const { langDetector } = useLanguageDetector()

  // Check if there is not translated text // Alert message
  // langDetector([documentToHtmlString(block.title?.json)], router.locale)
  return (
    <ThreeIconParagraphAlt
      id={block?.anchorId}
      title={documentToHtmlString(block?.title?.json)}
      // eslint-disable-next-line react/no-children-prop
      children={block && <UiThreeCardGroupComp block={block?.threeCardGroup} />}
    />
  )
}
