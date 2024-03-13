import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ArticleArea, ArticleEditorialFooter, ArticleRenderer } from '../../../storybookBuild/index'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { renderToStaticMarkup } from 'react-dom/server'
// import { useLanguageDetector } from 'context/langDetector'

// Interfaces
import { UiArticle } from '@/interfaces/blocks'
import { pageData } from '@/interfaces/queries'
import { BLOCKS } from '@contentful/rich-text-types'
import { ComponentShow } from '@/components/common/componentShow'
import Image from 'next/image'

export function UiArticleComp(props: { block: UiArticle; articles: pageData['articles']; isArticle }): JSX.Element {
  const type = 'Editorial'
  const router = useRouter()
  // const { langDetector } = useLanguageDetector()
  const date = new Date(props.articles?.publishedDate?.replace(/-/g, '/')?.replace(/T.+/, ''))
  const datePublished = {
    day: date.getDate() || 0,
    month: date.toLocaleString('default', { month: 'long' }).toUpperCase() || '',
    year: date.getFullYear() || 0
  }

  const stageJSON = props?.articles?.content?.json as any
  const articleImgData = props?.articles?.content?.links?.assets?.block

  if (articleImgData?.length) {
    stageJSON?.content.forEach((item, index) => {
      if (item.nodeType !== 'embedded-asset-block') return

      const imgData = articleImgData.find((img) => img?.sys?.id === item?.data?.target?.sys?.id)
      if (imgData != null) {
        stageJSON.content[index] = {
          ...stageJSON.content[index],
          data: {
            ...stageJSON.content[index].data,
            fields: {
              url: imgData.url,
              alt: imgData.description,
              title: imgData.title
            }
          }
        }
      }
    })
  }

  let compCounter = 0
  const articleCompData = props?.articles?.content.links.entries.inline
  stageJSON?.content.forEach((item, index) => {
    const findEntryInsideP = item?.content.find((item) => item.nodeType === 'embedded-entry-inline')
    const findEntryInsidePIndex = item?.content.findIndex((item) => item.nodeType === 'embedded-entry-inline')
    if (findEntryInsideP) {
      stageJSON.content[index].content[findEntryInsidePIndex].data = articleCompData[compCounter]
      compCounter++
    }
  })

  const checkLinkTarget = (node) => {
    const link = node?.data?.uri || node
    return link && !/^#/g.test(link) && /(https:\/\/|http:\/\/|mailto:|tel:|@)/g.test(link.toLowerCase())
  }

  const linkEntriesData: any = props?.articles?.content?.links?.entries
  const parseLink = (node) => {
    const linkData = {
      id: node?.data?.target?.sys?.id,
      text: node?.content[0]?.value
    }
    const findLink = linkEntriesData?.hyperlink?.find((item) => item?.sys?.id === linkData?.id)
    const findLinkIndex = linkEntriesData?.hyperlink?.findIndex((item) => item?.sys?.id === linkData?.id)

    if (findLink) {
      const item = linkEntriesData?.hyperlink[findLinkIndex]
      const href = item.pagePath ? `/${item.pagePath}/${item.slug}` : `/${item.slug}`

      const anchorAttrs = checkLinkTarget(href)
        ? {
            target: '_blank',
            rel: 'noopener noreferrer'
          }
        : {}

      return (
        <Link prefetch={false} href={href} locale={router.locale !== 'en' && router.locale} {...anchorAttrs} passHref>
          {linkData.text}
        </Link>
      )
    } else {
      return linkData.text
    }
  }

  const options = {
    renderNode: {
      'embedded-asset-block': (node) => {
        let markup = ''
        if (node.data.fields) {
          const embeddedVideoAssetMp4 = node.data.fields.url.includes('mp4')

          const jsx = (
            <div>
              {embeddedVideoAssetMp4 ? (
                <video width="100%" height="100%" controls>
                  <source src={node.data.fields.url} type="video/mp4" />
                </video>
              ) : (
                <Image src={node.data.fields.url} alt={node.data.fields.alt} priority={false} width="1000" height="1000" />
              )}
            </div>
          )
          markup = renderToStaticMarkup(jsx)
        }
        return markup
      },
      'embedded-entry-inline': (node) => {
        const jsx = ComponentShow(node.data)
        return renderToStaticMarkup(jsx)
      },
      'entry-hyperlink': (node) => {
        const jsx = parseLink(node)
        return renderToStaticMarkup(jsx)
      },
      hyperlink: (node, next) => {
        const hasBlankTarget = checkLinkTarget(node)
        return `<a ${hasBlankTarget ? 'target="_blank" rel="noopener noreferrer"' : ''} href='${node.data.uri}'>${next(node.content)}</a>`
      },
      [BLOCKS.PARAGRAPH]: (node, next) => {
        if (node.content[0]?.value && node.content[0]?.value.includes('<div')) {
          return node.content[0]?.value
        } else {
          return `<p>${next(node.content)}</p>`
        }
      }
    }
  }

  const elBody = documentToHtmlString(stageJSON, options)
    .replace(/\n/g, `<br/>`)
    .replace(/<code>/g, '<pre><code>')
    .replace(/<\/code>/g, '</code></pre>')

  // Check if there is not translated text // Alert message
  // langDetector([props.articles?.displayTitle, props.articles?.subTitle, elBody], router.locale)

  return (
    <>
      <ArticleArea
        type={type}
        imgSrc={props.articles?.image?.url}
        imgSrcDesktop={props.articles?.image?.url}
        imgAlt={props.articles?.image?.description || props.articles?.image?.title}
        imgTitle={props.articles?.image?.title}
        meta={props.articles?.postMeta}
        title={`<h1>${props.articles?.displayTitle}</h1>`}
        subTitle={props.articles?.subTitle}
      />

      <ArticleRenderer articleBody={elBody} />
      {props.articles && props.isArticle && (
        <ArticleEditorialFooter
          by={props?.articles?.author && props?.articles?.author?.fullName}
          articlePublished={`${datePublished.month} ${datePublished.day}, ${datePublished.year}`}
          byText="By"
          articlePublishedText="ARTICLE PUBLISHED"
        />
      )}
    </>
  )
}
