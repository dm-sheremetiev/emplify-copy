import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { jsonModel } from '@/interfaces/blocks';
import axios from 'axios';
import Highlighter from 'react-highlight-words';
import { Element, scroller } from 'react-scroll';
import { Icon } from '../../../storybookBuild/index';

export function UiSearchResultsView(props: { block: jsonModel }): JSX.Element {
  const { block } = props;
  const pageSize = block?.data?.resultsPerPage;
  const [search, setSearch] = useState('');
  const [fullResults, setFullResults] = useState([]);
  const [currentResults, setCurrentResults] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searching, setSearching] = useState(true);
  const [page, setPage] = useState(1);
  const [maxPageNumber, setMaxPageNumber] = useState(5);
  const [pagesToAllow, setPageToAllow] = useState([1, 2, 3]);

  const router = useRouter();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    if (searchParams.has('query')) {
      setSearch(searchParams.get('query'));
    }

    document.addEventListener('new-search', function (event: any) {
      router.push({
        pathname: '/' + process.env.SEARCH_PAGE_NAME,
        query: { query: event.detail },
      });
      setSearch(event.detail);
    });
  }, []);

  useEffect(() => {
    async function getResults() {
      if (search != '') {
        const searchResponse = await getAllResults(0, 0, search);
        if (searchResponse && searchResponse instanceof Array) {
          setCurrentResults(searchResponse.filter((result) => result && result._source && result._source.link));
          setFullResults(searchResponse.filter((result) => result && result._source && result._source.link));
          setSearching(false);
        }
      }
    }

    getResults();
  }, [search]);

  useEffect(() => {
    getCategories();
  }, [fullResults]);

  useEffect(() => {
    updatePagesToAllow();
  }, [maxPageNumber]);

  useEffect(() => {
    setPage(1);
    setMaxPageNumber(Math.ceil(currentResults.length / pageSize));
  }, [currentResults]);

  async function getAllResults(start: number, currentCount: number, keyword: string) {
    const searchResponse = await axios.get(process.env.SEARCH_BASE_DOMAIN + '?keyword=' + keyword + "&from=" + start + "&size=" + pageSize);

    let results = searchResponse?.data?.data;
    const totalResults = searchResponse?.data?.total;
    if ((currentCount + results.length) < totalResults) {
      results = results.concat(await getAllResults(start + pageSize, currentCount + results.length, keyword));
    }

    return results;
  }

  function getCategories() {
    const categories = [{ title: 'All', selected: true, amount: currentResults.length }];

    currentResults.forEach((result: any) => {
      if (result._source.category) {
        if (!categories.find((c) => c.title === mapCategoryName(result._source.category))) {
          const category = { title: mapCategoryName(result._source.category), selected: false, amount: 1 };
          if (category.title != '') {
            categories.push(category);
          }
        } else {
          const category = categories.find((c) => c.title === mapCategoryName(result._source.category));
          category.amount++;
        }
      }
    });

    setCategories(categories);
  }

  function getFilteredResults() {
    const filteredResults = fullResults.filter((result) => {
      const selectedCategory = categories.find((c) => c.selected).title;
      return selectedCategory === 'All' || mapCategoryName(result._source.category) === mapCategoryName(selectedCategory);
    });

    setCurrentResults(filteredResults);
  }

  function mapCategoryName(category: string) {
    if (category) {
      switch (category.trim()) {
        case 'products':
          return 'Products';
        case 'customers':
          return 'Customer Stories';
        case 'resources':
          return 'Resources';
        case 'blog':
          return 'Resources';
        case 'press':
          return 'Resources';
        case 'company':
          return 'Company';
        case 'legal':
          return 'Company';
        case 'events':
          return 'Resources';
        case 'webinar':
          return 'Resources';
        case 'contact':
          return 'Company';
        case 'resouces':
          return 'Resources';
        case 'all':
          return 'All';
        case 'trial':
          return 'Trial';
        default:
          return category;
      }
    }

    return '';
  }

  function changeCategory(category: any) {
    const newCategories = categories.map((c) => {
      if (c.title === category.title) {
        c.selected = true;
      } else {
        c.selected = false;
      }
      return c;
    });

    setCategories(newCategories);
    getFilteredResults();
  }

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  function jumpToTopOfArticles() {
    scroller.scrollTo('searchResults', {
      duration: 1000,
      smooth: true,
    });
  }

  function updatePagesToAllow() {
    const newPagesToAllow = [];
    for (let index = page > 2 ? page - 2 : page > 1 ? page - 1 : page; index <= maxPageNumber; index++) {
      if (newPagesToAllow.length < 5) newPagesToAllow.push(index);
    }
    setPageToAllow(newPagesToAllow);
  }

  return <>
    {!searching && fullResults.length > 0 && (
      <div className="search-results">
        <Element name="searchResults" className="categories">
          <div className="scrollable-area">
            <ul style={{ width: categories.length * 130 }}>
              {categories.map((category) => (
                <li key={category.title}>
                  <button
                    className={category.selected ? 'selected' : ''}
                    onClick={() => {
                      changeCategory(category);
                    }}
                  >
                    {category.title} <span>{category.amount}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </Element>
        <div className="results">
          {currentResults.slice((page - 1) * pageSize, page * pageSize).map((result: any, i: number) => {
            if (result && result._source && result._source.link) {
              const url = result._source.link.replace(/^.*\/\[^\/]+/, '').replace("https://", "").replace("http://", "");
              const pathArray = url.split('/').slice(1, 10);
              const pathLength = pathArray.length;
              const words = search.split(' ');

              return (
                <div className="result" key={i}>
                  <div className="breadcrumb">
                    {pathArray.map((part: any, i: number) => {
                      return (
                        <div key={i}>
                          <p>{toTitleCase(part.replace(/-/g, ' '))}</p>
                          {i < pathLength - 1 && <Icon name="chevron-down" size={6} colour="#454647" />}
                        </div>
                      );
                    })}
                  </div>
                  <Link href={result._source.link} aria-label={'go to article: ' + result._source.title}>

                    <h2>
                      <Highlighter highlightClassName="highlighted-text" searchWords={words} autoEscape={true} textToHighlight={result._source.title} />
                    </h2>

                  </Link>
                  <p>
                    <Highlighter highlightClassName="highlighted-text" searchWords={words} autoEscape={true} textToHighlight={result._source.description} />
                  </p>
                </div>
              );
            }
          })}
        </div>
        <div className="article-paging">
          <ul>
            {page > 1 && (
              <li>
                <button
                  aria-label="previous page of articles"
                  onClick={() => {
                    setPage(page - 1);
                    jumpToTopOfArticles();
                    if (!pagesToAllow.includes(page - 1)) {
                      updatePagesToAllow();
                    }
                  }}
                >
                  Prev
                </button>
              </li>
            )}
            {pagesToAllow.map((pageNumber, i, { length }) => {
              return (
                <li key={i + '_page'} aria-label={'go to page ' + (i + 1) + ' of articles'}>
                  <button
                    onClick={() => {
                      setPage(pageNumber);
                      jumpToTopOfArticles();
                      if (i + 1 === length) {
                        updatePagesToAllow();
                      }
                    }}
                    className={page == pageNumber ? 'selected' : ''}
                  >
                    {pageNumber}
                  </button>
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
                <button
                  aria-label="next page of articles"
                  onClick={() => {
                    setPage(page + 1);
                    jumpToTopOfArticles();
                    if (!pagesToAllow.includes(page + 1)) {
                      updatePagesToAllow();
                    }
                  }}
                >
                  Next
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    )}
    {search != '' && !searching && fullResults.length == 0 && (
      <div className="no-search-results">
        <h2>{block?.data?.noResultsTitle}</h2>
        <p>{block?.data?.noResultsText}</p>
      </div>
    )}
  </>;
}
