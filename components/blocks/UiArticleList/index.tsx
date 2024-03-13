import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router';
import { Element, scroller } from 'react-scroll';
import Link from 'next/link';
import Image from 'next/legacy/image';

import { pageData } from '@/interfaces/queries';
import { linkHandler } from '@/components/common/handleLink';
import { UiArticleListModel } from '@/interfaces/blocks';

export function UiArticleList(props: { block: UiArticleListModel; articles: pageData['articleList'] }): JSX.Element {
  const { block } = props;

  const router = useRouter();

  const searchParams = useSearchParams()
  const queryParamPage = searchParams.get('page')

  const headingMain = block?.headingMain;
  const [, setHref] = useState<string>()
  const pageSize = block?.articlesPerPage;
  const imageSize = block?.imageSize || '100%';
  const imageObjectFit = block?.imageObjectFit || 'cover';

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [regularArticlesToShow, setRegularArticles] = useState([]);
  const [featuredArticlesToShow, setFeaturedArticles] = useState([]);

  const categories = getCategories(props.articles);
  const [topics, setTopics] = useState(getTopics());
  const [selectedTopics, setSelectedTopics] = useState([]);

  const [page, setPage] = useState(1);
  const [maxPageNumber, setMaxPageNumber] = useState(5);
  const [pagesToAllow, setPageToAllow] = useState([1, 2, 3]);

  let featuredArticleIndex = 0;
  if (block?.featuredArticle) {
    featuredArticleIndex = getArticleIndex(block?.featuredArticle);
  }
  const featuredArticle =
    block?.featuredArticle && block?.featuredArticle?.blocksCollection?.items
      ? block?.featuredArticle?.blocksCollection?.items[featuredArticleIndex]?.__typename == 'Article'
        ? block?.featuredArticle?.blocksCollection?.items[featuredArticleIndex]
        : null
      : null;

  let featuredArticleLinkURL = block?.featuredArticle ? '/' + block?.featuredArticle?.pagePath + '/' + block?.featuredArticle?.slug : null;
  let featuredArticleCTAText = '';
  let featuredArticleCTATarget = '';

  // Override link if it exists
  if (featuredArticle && featuredArticle.overrideLink) {
    const overrideLink = linkHandler(featuredArticle.overrideLink);
    featuredArticleLinkURL = overrideLink?.link;
    featuredArticleCTAText = overrideLink?.title;
    featuredArticleCTATarget = overrideLink?.target;
  }

  if (!featuredArticleCTATarget) featuredArticleCTATarget = /(https:\/\/|http:\/\/|mailto:|tel:|@)/g.test(featuredArticleLinkURL) ? '_blank' : '';

  // Check if there is not translated text // Alert message
  // langDetector([block?.title], router.locale);

  function toggleTopic(topic: any) {
    let newSelectedTopics = selectedTopics;
    if (selectedTopics.includes(topic)) {
      const stringIndex = selectedTopics.indexOf(topic);
      newSelectedTopics = selectedTopics;
      newSelectedTopics.splice(stringIndex, 1);
    } else {
      newSelectedTopics.push(topic);
    }

    setSelectedTopics([...newSelectedTopics]);
  }

  function sortArticles(a, b) {
    const articleItemIndexA = getArticleIndex(a);
    const articleItemIndexB = getArticleIndex(b);

    const articleDetailA = a.blocksCollection.items[articleItemIndexA];
    const articleDetailB = b.blocksCollection.items[articleItemIndexB];

    const dateA = new Date(articleDetailA.publishedDate).getTime();
    const dateB = new Date(articleDetailB.publishedDate).getTime();
    return dateA < dateB ? 1 : -1;
  }

  function getFeaturedArticles(articles: any[]): any[] {
    const featuredArticles: any[] = [];

    articles.forEach((article) => {
      const articleItemIndex = getArticleIndex(article);

      if (article.blocksCollection.items.length > 0 && article.blocksCollection.items[articleItemIndex]) {
        const articleDetail = article.blocksCollection.items[articleItemIndex];
        if (articleDetail && articleDetail.__typename == 'Article' && articleDetail.isFeaturedArticle && !articleDetail.hideFromLists) {
          if (
            (articleDetail?.category.displayTitle == 'All' || selectedCategory == 'All' || articleDetail?.category?.displayTitle == selectedCategory) &&
            (selectedTopics.length == 0 || articleHasSelectedTopic(articleDetail))
          ) {
            featuredArticles.push(article);
          }
        }
      }
    });

    featuredArticles.sort(sortArticles);

    return featuredArticles;
  }

  function getArticleIndex(article) {
    let articleItemIndex = 0;
    if (article.blocksCollection && article.blocksCollection.items) {
      article.blocksCollection.items.forEach(function (item, i) {
        if (item && item.__typename == 'Article') {
          articleItemIndex = i;
        }
      });
    }

    return articleItemIndex;
  }

  function articleHasSelectedTopic(article: any) {
    let hasTopic = false;
    selectedTopics.forEach((topic) => {
      if (article.topicCollection.items.find((t) => t.displayTitle === topic)) {
        hasTopic = true;
      }
    });

    return hasTopic;
  }

  function getRegularArticles(articles: any[]): any[] {
    let regularArticles: any[] = [];

    articles.forEach((article) => {
      const articleItemIndex = getArticleIndex(article);

      if (
        article.blocksCollection.items.length > 0 &&
        article.blocksCollection.items[articleItemIndex] &&
        article.blocksCollection.items[articleItemIndex]
      ) {
        const articleDetail = article.blocksCollection.items[articleItemIndex];
        if (
          articleDetail &&
          articleDetail.__typename == 'Article' &&
          (!articleDetail.isFeaturedArticle || block.hideFeaturedSection) &&
          !articleDetail.hideFromLists
        ) {
          if (
            (articleDetail?.category?.displayTitle == 'All' || selectedCategory == 'All' || articleDetail?.category?.displayTitle == selectedCategory) &&
            (selectedTopics?.length == 0 || articleHasSelectedTopic(articleDetail))
          ) {
            regularArticles.push(article);
          }
        }
      }
    });

    // we need to add all the featured articles that are not going to be shown
    // to the regular article list before sorting
    const featuredArticles = !block.hideFeaturedSection ? getFeaturedArticles(props.articles) : [];
    const amountOfArticlesToCut = (featuredArticles.length - 4) * -1;
    const cutFeaturedArticles = featuredArticles.slice(amountOfArticlesToCut);

    regularArticles = regularArticles.concat(cutFeaturedArticles);

    regularArticles.sort(sortArticles);

    return regularArticles;
  }

  function getCategories(articles: any[]): any[] {
    const categories = [{ title: 'All', selected: true, order: 0 }];

    articles.forEach((article) => {
      const articleItemIndex = getArticleIndex(article);

      if (
        article.blocksCollection.items.length > 0 &&
        article.blocksCollection.items[articleItemIndex] &&
        article.blocksCollection.items[articleItemIndex].__typename == 'Article'
      ) {
        const selectedCategory = article.blocksCollection.items[articleItemIndex]?.category;
        const newCategory = { title: selectedCategory?.displayTitle, order: selectedCategory?.order || articles.length, selected: false };

        if (selectedCategory && newCategory?.title != 'All' && !categories.find((c) => c.title === newCategory?.title)) {
          categories.push(newCategory);
        }
      }
    });

    categories
      .sort((a, b) => {
        const textA = a.title.toUpperCase();
        const textB = b.title.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      })
      .sort((a, b) => {
        return a.order - b.order;
      });

    return categories;
  }

  function getTopics(): any[] {
    const articles = regularArticlesToShow.concat(featuredArticlesToShow);
    const topics = [];

    articles.forEach((article) => {
      const articleItemIndex = getArticleIndex(article);

      if (
        article.blocksCollection.items.length > 0 &&
        article.blocksCollection.items[articleItemIndex] &&
        article.blocksCollection.items[articleItemIndex].__typename == 'Article' &&
        article.blocksCollection.items[articleItemIndex].topicCollection
      ) {
        article.blocksCollection.items[articleItemIndex].topicCollection.items.forEach((topic) => {
          if (!topics.includes(topic.displayTitle)) {
            topics.push(topic.displayTitle);
          }
        });
      }
    });

    if (topics.length > 0) {
      topics.sort(function (a, b) {
        const textA = a.toUpperCase();
        const textB = b.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
    }

    return topics;
  }

  function updatePagesToAllow() {
    const newPagesToAllow = [];
    for (let index = page > 2 ? page - 2 : page > 1 ? page - 1 : page; index <= maxPageNumber; index++) {
      if (newPagesToAllow.length < 5) newPagesToAllow.push(index);
    }
    setPageToAllow(newPagesToAllow);
  }

  function jumpToTopOfArticles() {
    scroller.scrollTo('articleList', {
      duration: 1000,
      smooth: true
    });
  }

  useEffect(() => {
    if (queryParamPage && typeof queryParamPage === 'string') {
      setPage(parseInt(queryParamPage));
    }

    setHref(window?.location?.href ?? '')
  }, [queryParamPage])

  useEffect(() => {
    return () => {
      setPage(1);
      setSelectedTopics([]);
      setSelectedCategory('All');
    };
  }, [props.articles]);

  useEffect(() => {
    setFeaturedArticles(!block.hideFeaturedSection ? getFeaturedArticles(props.articles) : []);
    setRegularArticles(getRegularArticles(props.articles));
  }, [selectedCategory, selectedTopics, props.articles]);

  useEffect(() => {
    setPage(1);
    if (block.showTopics) {
      setTopics(getTopics());
    }
    setMaxPageNumber(Math.ceil(regularArticlesToShow.length / pageSize));
  }, [regularArticlesToShow]);

  useEffect(() => {
    updatePagesToAllow();
  }, [maxPageNumber]);
  return (
    <div className={block?.blueTheme ? 'ui-article-list blue-theme ' + (!featuredArticle ? 'no-article' : '') : 'ui-article-list'}>
      {headingMain && (
        <div className="container-heading">
          <h1 className="article-heading-main">{block?.headingMain}</h1>
        </div>
      )}
      {featuredArticle && (
        <div className="container-wrapper">
          <div className="main-article">
            <div className="row">
              <div className="image one-half-column">
                <Link
                  prefetch={false}
                  href={featuredArticleLinkURL}
                  target={featuredArticleCTATarget ? featuredArticleCTATarget : undefined}
                  rel={featuredArticleCTATarget === '_blank' ? 'noopener noreferrer' : undefined}
                  aria-label={'go to article: ' + featuredArticle.displayTitle}
                  passHref
                >
                  <div
                    style={{
                      minWidth: imageSize,
                      maxWidth: imageSize,
                      minHeight: imageSize,
                      maxHeight: imageSize
                    }}
                    className="image-container"
                  >
                    {featuredArticle.image && (
                      <Image
                        src={featuredArticle.image.url}
                        alt={featuredArticle.image.description}
                        objectFit={imageObjectFit}
                        loading="eager"
                        layout="fill"
                      />
                    )}
                  </div>
                </Link>
              </div>
              <div className="article-card one-half-column">
                <div className="tags">
                  {featuredArticle.topicCollection.items.slice(0, 3).map((topic: any, k: number) => {
                    return <p key={k}>{topic.displayTitle}</p>;
                  })}
                </div>
                <Link
                  prefetch={false}
                  href={featuredArticleLinkURL}
                  aria-label={'go to article: ' + featuredArticle.displayTitle}
                  target={featuredArticleCTATarget ? featuredArticleCTATarget : undefined}
                  rel={featuredArticleCTATarget === '_blank' ? 'noopener noreferrer' : undefined}
                >
                  <h3>{featuredArticle.displayTitle}</h3>
                </Link>
                <p>
                  {featuredArticle.previewContent}
                  {featuredArticle.previewContent && <br />}
                  <Link
                    prefetch={false}
                    href={featuredArticleLinkURL}
                    className="article-cta-button"
                    target={featuredArticleCTATarget ? featuredArticleCTATarget : undefined}
                    rel={featuredArticleCTATarget === '_blank' ? 'noopener noreferrer' : undefined}
                    aria-label={'go to article: ' + featuredArticle.displayTitle}
                    passHref
                  >
                    {featuredArticleCTAText != '' ? featuredArticleCTAText : 'Learn More'}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="theme-wrapper">
        <div className="filter-rows">
          {block.showCategories && (
            <div className="row category-filters">
              <div className="scrollable-area">
                <ul style={{ width: categories.length * 130 }}>
                  {categories.map((category: any, i: number) => {
                    return (
                      <li key={i + '_category'}>
                        <button
                          onClick={() => {
                            setSelectedCategory(category.title);
                          }}
                          className={category.title == selectedCategory ? 'selected' : ''}
                        >
                          {category.title}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
          {block.showTopics && (
            <div className="row topics-filters">
              <h3>Topics</h3>
              <div className="scrollable-area">
                <ul style={{ width: topics.length * 100 }}>
                  {topics.map((topic: any, i: number) => {
                    return (
                      <li key={i + '_topic'}>
                        <button
                          onClick={() => {
                            toggleTopic(topic);
                          }}
                          className={selectedTopics.includes(topic) ? 'selected' : ''}
                        >
                          {topic}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="article-listing-wrapper">
          <div className="row featured-article-listing">
            {featuredArticlesToShow.slice(0, 4).map((article: any, i: number) => {
              if (article.blocksCollection.items.length > 0) {
                const articleItemIndex = getArticleIndex(article);

                const articleDetail = article.blocksCollection.items[articleItemIndex];
                let articleLink = '/' + article.pagePath + '/' + article.slug;

                if (articleDetail?.overrideLink) articleLink = linkHandler(articleDetail?.overrideLink)?.link;
                const articleTarget = /(https:\/\/|http:\/\/|mailto:|tel:|@)/g.test(articleLink) ? '_blank' : '';

                if (articleDetail) {
                  return (
                    <div className="one-half-column" key={i + '_featuredArticle'}>
                      <div className="article-card">
                        <Link
                          prefetch={false}
                          href={articleLink}
                          className="image-link"
                          aria-label={'go to article: ' + articleDetail?.title}
                          target={articleTarget ? articleTarget : undefined}
                          rel={articleTarget === '_blank' ? 'noopener noreferrer' : undefined}
                          passHref
                        >
                          <div
                            style={{
                              minWidth: imageSize,
                              maxWidth: imageSize,
                              minHeight: imageSize,
                              maxHeight: imageSize
                            }}
                            className="image-container"
                          >
                            {articleDetail.image && (
                              <Image src={articleDetail.image.url} alt={articleDetail.image.description} layout="fill" objectFit={imageObjectFit} />
                            )}
                            {!articleDetail.image && (
                              <Image
                                src={'https://via.placeholder.com/336x240.png'}
                                alt={'Placeholder image'}
                                title={'Placeholder image'}
                                layout="fill"
                                objectFit="cover"
                              />
                            )}
                          </div>
                        </Link>
                        <div className="tags">
                          {articleDetail.topicCollection.items.slice(0, 3).map((topic: any, k: number) => {
                            return (
                              <button
                                onClick={() => {
                                  toggleTopic(topic.displayTitle);
                                }}
                                key={k}
                              >
                                {topic.displayTitle}
                              </button>
                            );
                          })}
                        </div>
                        <Link
                          prefetch={false}
                          href={articleLink}
                          target={articleTarget ? articleTarget : undefined}
                          rel={articleTarget === '_blank' ? 'noopener noreferrer' : undefined}
                          passHref
                        >
                          <h3>{articleDetail.title}</h3>
                        </Link>
                        <p>{articleDetail.previewContent}</p>
                      </div>
                    </div>
                  );
                }
              }
            })}
          </div>
        </div>
      </div>
      <Element name="articleList" className="row standard-article-listing">
        {regularArticlesToShow.slice((page - 1) * pageSize, page * pageSize).map((article: any, i: number) => {
          if (article.blocksCollection.items.length > 0) {
            const articleItemIndex = getArticleIndex(article);

            const articleDetail = article.blocksCollection.items[articleItemIndex];
            let articleLink = '/' + article.pagePath + '/' + article.slug;

            if (articleDetail.overrideLink) {
              articleLink = linkHandler(articleDetail.overrideLink).link;
            }
            const articleTarget = /(https:\/\/|http:\/\/|mailto:|tel:|@)/g.test(articleLink) ? '_blank' : '';

            if (articleDetail) {
              return (
                <div className="one-third-column" key={i + '_article'}>
                  <div className="article-card">
                    <Link
                      prefetch={false}
                      href={articleLink}
                      className="image-link"
                      aria-label={'go to article: ' + articleDetail.title}
                      target={articleTarget ? articleTarget : undefined}
                      rel={articleTarget === '_blank' ? 'noopener noreferrer' : undefined}
                      passHref
                    >
                      <div
                        style={{
                          minWidth: imageSize,
                          maxWidth: imageSize,
                          minHeight: imageSize,
                          maxHeight: imageSize
                        }}
                        className="image-container"
                      >
                        {articleDetail.image && (
                          <Image src={articleDetail.image.url} alt={articleDetail.image.description} layout="fill" objectFit={imageObjectFit} />
                        )}
                        {!articleDetail.image && (
                          <Image
                            src={'https://via.placeholder.com/336x240.png'}
                            objectFit="cover"
                            title={'Placeholder image'}
                            alt={'Placeholder image'}
                            layout="fill"
                          />
                        )}
                      </div>
                    </Link>
                    <div className="mobile-container">
                      <div className="tags">
                        {articleDetail.topicCollection.items.slice(0, 3).map((topic: any, k: number) => {
                          return (
                            <button
                              onClick={() => {
                                toggleTopic(topic.displayTitle);
                              }}
                              key={k}
                            >
                              {topic.displayTitle}
                            </button>
                          );
                        })}
                      </div>
                      <Link
                        prefetch={false}
                        href={articleLink}
                        target={articleTarget ? articleTarget : undefined}
                        rel={articleTarget === '_blank' ? 'noopener noreferrer' : undefined}
                        passHref
                      >
                        <h3>{articleDetail.title}</h3>
                      </Link>
                    </div>
                    <p>{articleDetail.previewContent}</p>
                  </div>
                </div>
              );
            }
          }
        })}
      </Element>
      <div className="row article-paging">
      <ul>
          {page > 1 && (
            <li>
              <Link
                  href={{
                    pathname: router?.asPath?.split('?')?.[0] ?? '/',
                    query: { page: page - 1 }
                  }}
                  onClick={() => {
                    setPage(page - 1);
                    jumpToTopOfArticles();
                    if (!pagesToAllow.includes(page - 1)) {
                      updatePagesToAllow();
                    }
                  }}
                  passHref
                  shallow={true}
                  scroll={false}
                  replace
                >
                <button aria-label="previous page of articles">
                  Prev
                </button>
              </Link>
            </li>
          )}
          {pagesToAllow.map((pageNumber, i, { length }) => {
            return (
              <li key={i + '_page'} aria-label={'go to page ' + (i + 1) + ' of articles'}>
                <Link
                  href={{
                    pathname: router?.asPath?.split('?')?.[0] ?? '/',
                    query: { page: pageNumber }
                  }}
                  onClick={() => {
                    setPage(pageNumber);
                    jumpToTopOfArticles();
                    if (i + 1 === length) {
                      updatePagesToAllow();
                    }
                  }}
                  passHref
                  shallow={true}
                  scroll={false}
                  replace
                >
                  <button className={page == pageNumber ? 'selected' : ''}>
                    {pageNumber}
                  </button>
                </Link>
              </li>
            );
          })}
          {!pagesToAllow.includes(maxPageNumber) && (
            <li>
              <button disabled>...</button>
            </li>
          )}
          {page < maxPageNumber && (
            <li>
              <Link
                href={{
                  pathname: router?.asPath?.split('?')?.[0] ?? '/',
                  query: { page: page + 1 }
                }}
                onClick={() => {
                  setPage(page + 1);
                  jumpToTopOfArticles();
                  if (!pagesToAllow.includes(page + 1)) {
                    updatePagesToAllow();
                  }
                }}
                passHref
                shallow={true}
                scroll={false}
                replace
              >
              <button aria-label="next page of articles">
                Next
              </button>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
