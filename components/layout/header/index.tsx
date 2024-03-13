import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { linkHandler, LinkHandlerButton } from '@/components/common/handleLink';
import { ImageComponent } from '@/components/common/Image';
import Image from "next/legacy/image";
import HeaderSimplified from './header-simplified/header-simplified';

import {
  Header,
  HeaderOtherMenusContainer,
  HeaderOtherMenuItem,
  TranslationButtonGroup,
  TranslationButton,
  Typography,
  Icon
} from '../../../storybookBuild/index';
import Moment from 'moment';

// Interface
import { siteConfigI } from '@/interfaces/siteConfig';
import { imagesI, uiUniquePage } from '@/interfaces/index';

export function HeaderComp(props: { data: siteConfigI; slugs: uiUniquePage[]; isSimplified }): JSX.Element {
  
  const router = useRouter();
  const { data, slugs, isSimplified } = props;
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [isLanguageMenuOpen, setLanguageMenuOpen] = useState<boolean>(false);
  const [languageSelected, setLanguageSelected] = useState<string>('');
  const [activeMenu, setActiveMenu] = useState(0);
  const [scrolled, setScrolled] = useState<number>(0);
  const [searchMenuActive, setSearchMenuActive] = useState(false);
  
  // Show Top Bar
  let dataSource = '';
  let showTopBar = false;
  if (router.asPath.indexOf('utm_source=socialbakers.com') > 0) {
    showTopBar = true;
    dataSource = 'sbks';
  } else if (router.asPath.indexOf('utm_source=goinstore.com') > 0) {
    showTopBar = true;
    dataSource = 'gis';
  } else if (router.asPath.indexOf('utm_source=pixlee.com') > 0) {
    showTopBar = true;
    dataSource = 'pixlee';
  }

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  const backgroundColorMap = (color: string): string => {
    let bgColor = '';
    switch (color) {
      case 'Dark Blue':
        bgColor = 'dark-blue-bg';
        break;
      case 'Purple':
        bgColor = 'purple-bg';
        break;
      case 'Cornflower Dark Blue':
        bgColor = 'cornflower-blue-bg';
        break;
      case 'Dark Gray':
        bgColor = 'dark-gray-bg';
        break;
      case 'Light Gray':
        bgColor = 'light-gray-bg';
        break;
      default:
        bgColor = '';
        break;
    }

    return bgColor;
  };

  const openSubMenuDesktop = (id: number) => {
    if (getWindowDimensions().width > 991) {
      setActiveMenu(id);
    }
  };

  const openSubMenuMobile = (id: number) => {
    if (getWindowDimensions().width < 992) {
      if (activeMenu == id) {
        setActiveMenu(0);
      } else {
        setActiveMenu(id);
      }
    }
  };

  const mouseOut = () => {
    if (getWindowDimensions().width > 991) {
      setActiveMenu(0);
    }
  };

  const openMenu = (isMenuOpen: boolean) => {
    if (searchMenuActive) {
      setSearchMenuActive(false);
    } else {
      let value = isMenuOpen;
      value = !value;
      setMenuOpen(value);
    }
  };

  const openLanguage = (isLanguageMenuOpen: boolean) => {
    let value = isLanguageMenuOpen;
    value = !value;
    setLanguageMenuOpen(value);
  };

  const selectLanguage = () => {
    setLanguageMenuOpen(false);
  };

  const reloadLanguage = () => {
    router.locales.map((item) => {
      languageSelected === item ? router.reload() : console.log('');
    });
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      if (languageSelected.length > 0) {
        reloadLanguage();
      }
    });
  }, [router.events, languageSelected]);

  useEffect(() => {
    const onScroll = (e) => {
      setScrolled(e?.target?.documentElement?.scrollTop);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrolled]);

  const menuRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if(!menuRef.current?.contains(e.target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  return (
    <>
      {isSimplified ? (
        <HeaderSimplified src={data?.headerLogo?.url} alt={data?.headerLogo?.description} />
      ) : (
        <Header
          ref={menuRef}
          imgSrc={
            <Link prefetch={false} href="/" className="d-inline-flex" passHref>
              <Image
                className="emplifi-header__logo"
                src={data?.headerLogo?.url}
                alt={data?.headerLogo?.description || 'Emplifi'}
                layout="fixed"
                width="135"
                height="29"
                loading="eager"
              />
            </Link>
          }
          isMenuOpen={isMenuOpen}
          onMouseLeave={mouseOut}
          onMobileSearchClick={() => setSearchMenuActive(!searchMenuActive)}
          onClick={() => openMenu(isMenuOpen)}
          showTopBar={showTopBar}
          dataSource={dataSource}
          menuChildren={
            <div className={'emplifi-mega-menu ' + (isMenuOpen ? 'mobile-menu-open' : '')}>
              <ul>
                {data?.headerNewMainMenu?.subMenusCollection.items.map((megaMenuSubNav, i) => {
                  return (
                    <li key={i + 1}>
                      <button
                        className={activeMenu == i + 1 ? 'menu-open' : ''}
                        onClick={() => openSubMenuMobile(i + 1)}
                        onMouseOver={() => openSubMenuDesktop(i + 1)}
                        onFocus={() => openSubMenuDesktop(i + 1)}
                      >
                        {megaMenuSubNav.navigationTitle} <Icon name="chevron-down-small" color={'#1e1e1e'} size={15} />
                      </button>

                      <div
                        onMouseLeave={mouseOut}
                        key={i + 1}
                        className={activeMenu == i + 1 ? 'emplifi-mega-menu-submenus open' : 'emplifi-mega-menu-submenus'}
                      >
                        <div className="emplifi-mega-menu-columns-container">
                          <div className="emplifi-mega-menu-columns-row">
                            <div className="emplifi-mega-menu-column title-column">
                              <div className="desktop-content">
                                {megaMenuSubNav.title && <span>{megaMenuSubNav.title}</span>}
                                {megaMenuSubNav.abstract && <p>{megaMenuSubNav.abstract}</p>}
                                <Link
                                  prefetch={false}
                                  href={linkHandler(megaMenuSubNav.ctaLink).link}
                                  target={linkHandler(megaMenuSubNav.ctaLink).target ? linkHandler(megaMenuSubNav.ctaLink).target : undefined}
                                  rel={linkHandler(megaMenuSubNav.ctaLink).target === '_blank' ? 'noopener noreferrer' : undefined}
                                  onClick={() => setActiveMenu(0)}
                                  passHref
                                >
                                  {megaMenuSubNav.learnMoreText} <Icon name="chevron-down" color={'#1e1e1e'} size={15} />
                                </Link>
                              </div>
                              <div className="mobile-content">
                                <Link
                                  prefetch={false}
                                  href={linkHandler(megaMenuSubNav.ctaLink).link}
                                  target={linkHandler(megaMenuSubNav.ctaLink).target ? linkHandler(megaMenuSubNav.ctaLink).target : undefined}
                                  rel={linkHandler(megaMenuSubNav.ctaLink).target === '_blank' ? 'noopener noreferrer' : undefined}
                                  onClick={() => setActiveMenu(0)}
                                  passHref
                                >
                                  {megaMenuSubNav.title}
                                </Link>
                              </div>
                            </div>
                            {megaMenuSubNav.subMenuColumnsCollection &&
                              megaMenuSubNav.subMenuColumnsCollection.items.map((column, k) => {
                                let articleTitle,
                                  articlePreviewContent,
                                  articleDate = ''
                                let articleImage: imagesI = null

                                if (column.columnTitleLink) {
                                  if (
                                    column.columnTitleLink.internalLink &&
                                    column.columnTitleLink.internalLink.blocksCollection.items &&
                                    column.columnTitleLink.internalLink.blocksCollection.items.length > 0
                                  ) {
                                    if (
                                      column.columnTitleLink.internalLink.blocksCollection.items[0] &&
                                      column.columnTitleLink.internalLink.blocksCollection.items[0].__typename == 'Article'
                                    ) {
                                      articleTitle = column.columnTitleLink.internalLink.blocksCollection.items[0].title
                                      articlePreviewContent = column.columnTitleLink.internalLink.blocksCollection.items[0].previewContent
                                      articleImage = column.columnTitleLink.internalLink.blocksCollection.items[0].image
                                      articleDate = Moment(column.columnTitleLink.internalLink.blocksCollection.items[0].publishedDate).format(
                                        'DD MMMM, YYYY'
                                      )
                                    }
                                  }
                                }

                                // if any override field is filled in contentful, override auto-retrieved field
                                articleTitle = column.columnTitle ? column.columnTitle : articleTitle
                                articlePreviewContent = column.abstract ? column.abstract : articlePreviewContent
                                articleDate = !column.hideDate ? (column.date ? Moment(column.date).format('DD MMMM, YYYY') : articleDate) : ''
                                articleImage = column.thumbnail ? column.thumbnail : articleImage

                                return (
                                  <div className={'emplifi-mega-menu-column ' + backgroundColorMap(column.backgroundColor)} key={k}>
                                    {articleImage?.url && (
                                      <Link
                                        prefetch={false}
                                        href={linkHandler(column.columnTitleLink).link}
                                        className="emplifi-mega-menu-column-image"
                                        target={linkHandler(column.columnTitleLink).target ? linkHandler(column.columnTitleLink).target : undefined}
                                        rel={linkHandler(column.columnTitleLink).target === '_blank' ? 'noopener noreferrer' : undefined}
                                        aria-label={linkHandler(column.columnTitleLink).title}
                                        onClick={() => setActiveMenu(0)}
                                        passHref
                                      >
                                        <ImageComponent
                                          width="247"
                                          height="140"
                                          src={articleImage.url}
                                          alt={articleImage.description || articleTitle}
                                        />
                                      </Link>
                                    )}
                                    {column?.columnTitleLink && articleTitle && (
                                      <Link
                                        prefetch={false}
                                        href={linkHandler(column.columnTitleLink).link}
                                        target={linkHandler(column.columnTitleLink).target ? linkHandler(column.columnTitleLink).target : undefined}
                                        rel={linkHandler(column.columnTitleLink).target === '_blank' ? 'noopener noreferrer' : undefined}
                                        onClick={() => setActiveMenu(0)}
                                        passHref
                                      >
                                        <h3>{articleTitle}</h3>
                                      </Link>
                                    )}
                                    {!column.columnTitleLink && <h3>{articleTitle}</h3>}
                                    {articlePreviewContent && <p>{articlePreviewContent}</p>}
                                    <ul>
                                      {column?.linkListCollection?.items?.map((linkListItem, j) => (
                                        <li key={j}>
                                          <Link
                                            prefetch={false}
                                            href={linkHandler(linkListItem).link}
                                            target={linkHandler(linkListItem).target ? linkHandler(linkListItem).target : undefined}
                                            rel={linkHandler(linkListItem).target === '_blank' ? 'noopener noreferrer' : undefined}
                                            onClick={() => setActiveMenu(0)}
                                            passHref
                                          >
                                            {linkHandler(linkListItem).title}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                    {articleDate && <p className="date">{articleDate}</p>}
                                  </div>
                                )
                              })}
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          }
          searchInput={
            <>
              {searchMenuActive && (
                <div className="global-search-input">
                  <div className="wrapper">
                    <Icon name="search-icon" size={24} colour="#FFFFFF" />
                    <input
                      placeholder="Search"
                      type="text"
                      onKeyDown={(e: any) => {
                        if (e.keyCode === 13) {
                          const searchTerm = e.target.value
                          if (searchTerm.length > 2) {
                            if (location.href.includes('/' + process.env.SEARCH_PAGE_NAME)) {
                              document.dispatchEvent(new CustomEvent('new-search', { detail: e.target.value }))
                            } else {
                              router.push({ pathname: '/' + process.env.SEARCH_PAGE_NAME, query: { query: e.target.value } })
                            }
                          }
                        }
                      }}
                    />
                    <button onClick={() => setSearchMenuActive(false)}>Cancel</button>
                  </div>
                </div>
              )}
            </>
          }
          miscMenuChildren={
            <HeaderOtherMenusContainer
              isMenuOpen={isMenuOpen}
              searchToggle={
                <>
                  {process.env.SEARCH_ENABLED && process.env.SEARCH_ENABLED == 'true' && (
                    <div className="search-toggle" onClick={() => setSearchMenuActive(!searchMenuActive)}>
                      <Icon name="search-icon" size={24} colour="#FFFFFF" />
                    </div>
                  )}
                </>
              }
              topRow={
                <>
                  {data.headerUtilityNavigationCollection.items.length > 0 &&
                    data.headerUtilityNavigationCollection.items.map((item, index) => {
                      const utilityNavLink = linkHandler(item)
                      return (
                        <Link
                          prefetch={false}
                          href={utilityNavLink.link}
                          key={index}
                          target={utilityNavLink.target ? utilityNavLink.target : undefined}
                          rel={utilityNavLink.target === '_blank' ? 'noopener noreferrer' : undefined}
                          passHref
                        >
                          <HeaderOtherMenuItem text={utilityNavLink.title} link={utilityNavLink.link} />
                        </Link>
                      )
                    })}
                </>
              }
              bottomRow={
                <>
                  {data?.headerUtilityNavigationCta && <LinkHandlerButton onClick={() => setMenuOpen(false)} cta={data.headerUtilityNavigationCta} />}
                  {!isLanguageMenuOpen && (
                    <button
                      className="emplifi-header__transition-button emplifi-header__transition-button--mobile"
                      onClick={() => openLanguage(isLanguageMenuOpen)}
                    >
                      <Typography type="HomeMiscLink" as="span">
                        {router.locale.toUpperCase()}
                      </Typography>
                      <Icon name="chevron-down" color={'#1e1e1e'} size={15} />
                    </button>
                  )}
                  <button
                    className={`emplifi-header__transition-button emplifi-header__transition-button--desktop ${
                      isLanguageMenuOpen ? 'emplifi-header__transition-button--is-active' : ''
                    }`}
                    onClick={() => openLanguage(isLanguageMenuOpen)}
                  >
                    <Typography type="HomeMiscLink" as="span">
                      {router.locale.toUpperCase()}
                    </Typography>
                    <Icon name="chevron-down-small" color={'#1e1e1e'} size={15} />
                  </button>
                  <TranslationButtonGroup onMouseLeave={() => openLanguage(isLanguageMenuOpen)}>
                    {isLanguageMenuOpen &&
                      data?.headerLanguagesCollection.items[0]?.data?.items?.length > 0 &&
                      data?.headerLanguagesCollection.items[0]?.data?.items.map((item, index) => {
                        const lang = slugs?.find((slugPage) => slugPage?.language === item?.languageCode)

                        // if no slug was found for this lang version (meaning that version of this page does not exist)
                        // do not render the link to that language version
                        if (lang != null && lang?.slug != '') {
                          const link = router.asPath === '/' ? '/' : lang?.pagePath ? `/${lang.pagePath}/${lang.slug}` : `/${lang.slug}`
                          return (
                            <Link
                              passHref
                              key={index}
                              href={link}
                              prefetch={false}
                              locale={item.languageCode}
                              onClick={() => {
                                setLanguageSelected(router.locale)
                                setMenuOpen(false)
                              }}
                            >
                              <TranslationButton
                                text={item.displayTitle}
                                isActive={false}
                                onClick={() => {
                                  setLanguageSelected(router.locale)
                                  selectLanguage()
                                }}
                              />
                            </Link>
                          )
                        } else {
                          return <></>
                        }
                      })}
                  </TranslationButtonGroup>
                </>
              }
            />
          }
          isScrolling={scrolled != 0}
        />
      )}
    </>
  )
}
