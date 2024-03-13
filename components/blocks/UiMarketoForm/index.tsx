import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { MarketFormAlt } from '../../../storybookBuild'
import InnerHTML from 'dangerously-set-html-content'

// Interfaces
import { UiEmbeddedForm } from '@/interfaces/blocks'

declare global {
  interface Window {
    loadMarketoForm: any
  }
}

export function UiEmbeddedFormComp(props: { block: UiEmbeddedForm }): JSX.Element {
  const { block } = props
  const router = useRouter()
  const rawHtml = block?.rawFormEmbed?.rawHtml
  const [form, setForm] = useState('')

  useEffect(() => {
    if (!router.isReady) return

    if (block?.formOptions) {
      const data = block?.formOptions?.data
      setForm(`<form id="mktoForm_${data?.formId}" />`)
      if (window?.loadMarketoForm) window?.loadMarketoForm(data)
    } else if (rawHtml) {
      setForm(rawHtml)
    }
  }, [router.isReady])

  return (
    <MarketFormAlt
      id={block?.anchorId}
      eyebrow={block?.eyebrow}
      title={block?.formTitle}
      subTitle={block?.formSubTitle}
      textColorTitle={block?.titleCss}
      textColorSubTitle={block?.subTitleCss}
      backgroundType={block?.backgroundType}
      backgroundSize={block?.backgroundSize}
      backgroundColor={block?.backgroundColor}
      backgroundPosition={block?.backgroundPosition}
      imgSrc={block?.image?.url}
      imgSrcMobile={block?.mobileImage?.url}
      imgAlt={block?.image?.description}
      imgTitle={block?.image?.title}
      formStyle={block?.formStyle}
      twoColumns={block?.twoColumns}
      formChildren={form && <InnerHTML html={form} />}
    />
  )
}
