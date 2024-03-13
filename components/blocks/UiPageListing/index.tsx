import Link from 'next/link'
import { ResourceAltCard, Resources, CustomerStories, CustomerStoriesCard, Typography } from '../../../storybookBuild/index'
import { LinkHandlerButton, linkHandler } from '@/components/common/handleLink'
// import { useLanguageDetector } from 'context/langDetector'
// import { useRouter } from 'next/router'

// Interfaces
import { UiPageListing, UiPageListingNotDynamic } from '@/interfaces/blocks'
import { pageData } from '@/interfaces/queries'
import { internalLink } from '@/interfaces/index'

export function UiPageListingComp(props: {
  block: UiPageListing & UiPageListingNotDynamic
  pageListingArticle?: pageData['pageListingArticle']
  pageListingCustomerStory?: pageData['pageListingArticle']
}): JSX.Element {
  const { block, pageListingArticle, pageListingCustomerStory } = props

  // const router = useRouter()
  // const { langDetector } = useLanguageDetector()

  function getArticleIndex(article) {
    let articleItemIndex = 0
    if (article.blocksCollection && article.blocksCollection.items) {
      article.blocksCollection.items.forEach(function (item, i) {
        if (item && item.__typename == 'Article') {
          articleItemIndex = i
        }
      })
    }

    return articleItemIndex
  }

  switch (block.type) {
    case 'resources':
      // eslint-disable-next-line no-case-declarations
      const resources = {
        title: '',
        titleColor: '',
        backgroundColor: ''
      }
      if (block.__typename === 'UiPageListingNotDynamic') {
        resources.title = block?.displayTitle
        resources.titleColor = block?.css
        resources.backgroundColor = block?.backgroundColor
      } else {
        resources.title = block?.displayTitle
        resources.titleColor = block?.css
        resources.backgroundColor = block?.cssBackgroundColor
      }
      return (
        <Resources
          title={block?.displayTitle}
          titleColor={block?.css}
          backgroundColor={resources?.backgroundColor}
          type={block?.componentType}
          layout={block.centerContentResources || block.__typename !== 'UiPageListingNotDynamic' ? 'center' : 'left'}
          cardsChildren={
            <>
              {block.__typename === 'UiPageListingNotDynamic'
                ? block.cardContentCollection.items.length > 0 &&
                  block.cardContentCollection.items.map((item: any, index) => {
                    const resourceCard =
                      item?.__typename === 'InternalNavigationLink'
                        ? {
                            image: item.internalLink?.blocksCollection.items[0]?.image,
                            title: item.internalLink?.blocksCollection.items[0]?.displayTitle,
                            previewContent: item.internalLink?.blocksCollection.items[0]?.previewContent
                          }
                        : item?.__typename === 'ExternalNavigationLink' && {
                            image: item?.previewImage,
                            title: item?.previewTitle,
                            previewContent: item?.previewContent
                          }
                    // Check if there is not translated text // Alert message
                    // langDetector([block.displayTitle, resourceCard?.title, resourceCard?.previewContent], router.locale)
                    return (
                      <ResourceAltCard
                        key={index}
                        imageSrc={resourceCard?.image?.url}
                        imageAlt={resourceCard?.image?.description}
                        imageTitle={resourceCard?.image?.title}
                        title={resourceCard?.title}
                        body={resourceCard?.previewContent}
                        buttonChildren={
                          <>
                            <LinkHandlerButton cta={item} />
                          </>
                        }
                      />
                    )
                  })
                : pageListingArticle &&
                  pageListingArticle.length > 0 &&
                  pageListingArticle.map((item, index) => {
                    const internalLink = createInternalLink(block.linkCardTitle, item.slug, item.pagePath)
                    // Check if there is not translated text // Alert message
                    // langDetector([block.displayTitle, item.title, item.blocksCollection.items[0].previewContent], router.locale)

                    const articleIndex = getArticleIndex(item)

                    return (
                      <ResourceAltCard
                        key={index}
                        imageSrc={item.blocksCollection.items[articleIndex].image.url}
                        imageAlt={item.blocksCollection.items[articleIndex].image.description}
                        imageTitle={item.blocksCollection.items[articleIndex].image.title}
                        title={item.title}
                        body={item.blocksCollection.items[articleIndex].previewContent}
                        buttonChildren={
                          <>
                            <LinkHandlerButton cta={internalLink} />
                          </>
                        }
                      />
                    )
                  })}
            </>
          }
        />
      )
    case 'customer stories':
      // eslint-disable-next-line no-case-declarations
      const customerStories = {
        title: '',
        titleColor: '',
        backgroundColor: ''
      }
      if (block.__typename === 'UiPageListingNotDynamic') {
        customerStories.title = block.displayTitle
        customerStories.titleColor = block?.css
        customerStories.backgroundColor = block?.backgroundColor
      } else {
        customerStories.title = block.displayTitle
        customerStories.titleColor = block?.css
        customerStories.backgroundColor = block?.cssBackgroundColor
      }

      return (
        <CustomerStories
          title={customerStories.title}
          titleColor={customerStories.titleColor}
          backgroundColor={customerStories.backgroundColor}
          storiesChildren={
            <>
              {block.__typename === 'UiPageListingNotDynamic'
                ? block.cardContentCollection.items.length > 0 &&
                  block.cardContentCollection.items.map((item: any, index) => {
                    const link = linkHandler(item)

                    const storieData =
                      item.__typename === 'InternalNavigationLink'
                        ? {
                            logoImage: item.internalLink?.blocksCollection.items[0]?.image,
                            previewContent: item.internalLink?.blocksCollection.items[0]?.previewContent,
                            image: item.internalLink?.blocksCollection.items[0]?.secondaryPreviewImage
                          }
                        : item.__typename === 'ExternalNavigationLink' && {
                            logoImage: item.previewImage,
                            previewContent: item.previewContent,
                            image: item.secondaryPreviewImage
                          }

                    // Check if there is not translated text // Alert message
                    // langDetector([customerStories.title, storieData?.previewContent], router.locale)
                    return (
                      <CustomerStoriesCard
                        key={index}
                        imageSrc={storieData?.image?.url}
                        imageAlt={storieData?.image?.description}
                        imageTitle={storieData?.image?.title}
                        paragraph={storieData?.previewContent}
                        logoSrc={storieData?.logoImage?.url}
                        logoAlt={storieData?.logoImage?.description}
                        logoTitle={storieData?.logoImage?.title}
                        linkChildren={
                          <Link
                            prefetch={false}
                            href={link.link}
                            target={link.target}
                            rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                            passHref
                          >
                            <Typography as="span" type="Link3">
                              {link.title}
                            </Typography>
                          </Link>
                        }
                      />
                    )
                  })
                : pageListingCustomerStory &&
                  pageListingCustomerStory.length > 0 &&
                  pageListingCustomerStory.map((item, index) => {
                    const internalLink = createInternalLink(block.linkCardTitle, item.slug, item.pagePath)
                    const link = linkHandler(internalLink)

                    // Check if there is not translated text // Alert message
                    // langDetector([customerStories.title, item.blocksCollection.items[0].previewContent], router.locale)

                    const articleIndex = getArticleIndex(item)

                    return (
                      <CustomerStoriesCard
                        key={index}
                        imageSrc={item.blocksCollection.items[articleIndex].image?.url}
                        imageAlt={item.blocksCollection.items[articleIndex].image?.description}
                        imageTitle={item.blocksCollection.items[articleIndex].image?.title}
                        paragraph={item.blocksCollection.items[articleIndex].previewContent}
                        logoSrc={item.blocksCollection.items[articleIndex].secondaryPreviewImage?.url}
                        logoAlt={item.blocksCollection.items[articleIndex].secondaryPreviewImage?.description}
                        logoTitle={item.blocksCollection.items[articleIndex].secondaryPreviewImage?.title}
                        linkChildren={
                          <Link
                            prefetch={false}
                            href={link.link}
                            target={link.target}
                            rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                            passHref
                          >
                            <Typography as="span" type="Link3">
                              {link.title}
                            </Typography>
                          </Link>
                        }
                      />
                    )
                  })}
            </>
          }
        />
      )
    default:
      return <h1>Missing ${block.type}</h1>
  }
}

export function createInternalLink(displayTitle: string, slug: string, pagePath: string): internalLink {
  return {
    __typename: 'InternalNavigationLink',
    css: '',
    displayTitle: displayTitle,
    internalLink: {
      pagePath: pagePath,
      slug: slug,
      title: displayTitle
    },
    querystring: '',
    target: ''
  }
}
