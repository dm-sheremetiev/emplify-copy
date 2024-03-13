import React, { useEffect, useState } from 'react';
import Header, {
  HeaderMenuContainer,
  HeaderOtherMenusContainer,
  HeaderOtherMenuItem,
  HeaderSubMenuContainer,
  HeaderSubMenuItem,
  HeaderSecondaryMenuContainer,
  HeaderProductMenu,
  HeaderCompanyMenu,
  HeaderCustomerStoriesMenu,
  HeaderProductMenuContent,
  HeaderProductMenuItem,
  HeaderProductMenuContentItem,
  HeaderCompanyMenuItem
} from './Header';
import Button from '../Button/Button';
import TranslationButton, { TranslationButtonGroup } from '../TranslationButton/TranslationButton';
import Icon from '../Icon/Icon';
import colours from '../../assets/colours';
import Typography from '../Typography/Typography';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import LogoProduct from '../../assets/images/logos/emplifi-logo-tagline.png';
// import ProductMenuImage from  '../../assets/images/product-cx-cloud.png';
import CompanyMenuImage from '../../assets/images/company-menu.png';
import CustomerStoriesCardImage from '../../assets/images/customer-stories-card.png';
import CustomerStoriesCardLogoImage from '../../assets/images/brand-logos/Delta-260x173.png';
import CustomerStoriesCard from '../CustomerStoriesCard/CustomerStoriesCard';

import CustomerStoriesDeltaCardImage from '../../assets/images/delta-customer-story-card-img.jpg';
import CustomerStoriesMLSCardImage from '../../assets/images/MLS-customer-story-card-img.jpg';

import CustomerStoriesCardDeltaLogoImage from '../../assets/images/Delta-625x417.png';
import CustomerStoriesCardMLSLogoImage from '../../assets/images/MLS-625x417.png';

export default {
  title: 'Header/Header',
  component: Header,
  decorators: [withKnobs],
};


const productsLinks = [
  {
    id: 1,
    color: '#49C7ED',
    text: 'Social Marketing Cloud'
  },
  {
    id: 2,
    color: '#485DAA',
    text: 'Social Marketing Cloud'
  },
  {
    id: 3,
    color: '#003A5D',
    text: 'Social Marketing Cloud'
  },
  {
    id: 4,
    color: '#454647',
    text: 'Social Marketing Cloud'
  },
  {
    id: 5,
    color: '#C12982',
    text: 'Social Marketing Cloud'
  },
  {
    id: 6,
    color: '#C12982',
    text: 'Social Marketing Cloud'
  }
];

const productsContentLinks = [
  {
    text: 'Social listening and intelligence'
  },
  {
    text: 'Schedulling and publishing'
  },
  {
    text: 'Emplifi Agent'
  },
  {
    text: 'Emplifi Agent'
  },
  {
    text: 'Emplifi Agent'
  },
  {
    text: 'Emplifi Agent'
  },
];

const companyLinks = [
  {
    text: 'About Us'
  },
  {
    text: 'About Us'
  },
  {
    text: 'About Us'
  },
  {
    text: 'About Us'
  },
  {
    text: 'About Us'
  },
];

export const Playground = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [isSecondaryMenuOpen, setSecondaryMenuOpen] = useState<boolean>(false);
  const [isProductSubMenuOpen, setProductSubMenuOpen] = useState<boolean>(false);
  const [isCustomerStoriesSubMenuOpen, setCustomerStoriesSubMenuOpen] = useState<boolean>(false);
  const [isCompanySubMenuOpen, setCompanySubMenuOpen] = useState<boolean>(false);
  const [isLanguageMenuOpen, setLanguageMenuOpen] = useState<boolean>(false);
  const [isScrolling, setScrolling] = useState<boolean>(false);

  const [isProductBackground, setProductBackground] = useState('#49C7ED');
  const [isProductActiveId, setProductActiveId] = useState(1);
  const productMenuChange = (backgroundColor: string, id: number) => {
    setProductBackground(backgroundColor);
    setProductActiveId(id);
  }

  const openMenu = (isMenuOpen: boolean) => {
    let value = isMenuOpen;
    value = !value;
    setMenuOpen(value);
  }

  const openSecondaryMenu = (isSecondaryMenuOpen: boolean) => {
    let value = isSecondaryMenuOpen;
    value = !value;
    setSecondaryMenuOpen(value);
  }

  const openProductSubMenu = (isProductSubMenuOpen: boolean) => {
    let value = isProductSubMenuOpen;
    value = !value;
    setProductSubMenuOpen(value);
  }

  const openCustomerStoriesSubMenu = (isCustomerStoriesSubMenuOpen: boolean) => {
    let value = isCustomerStoriesSubMenuOpen;
    value = !value;
    setCustomerStoriesSubMenuOpen(value);
  }

  const openCompanySubMenu = (isComppanySubMenuOpen: boolean) => {
    let value = isComppanySubMenuOpen;
    value = !value;
    setCompanySubMenuOpen(value);
  }

  const openLanguage = (isLanguageMenuOpen: boolean) => {
    let value = isLanguageMenuOpen;
    value = !value;
    setLanguageMenuOpen(value);
  }

  const selectLanguage = () => {
    setLanguageMenuOpen(false);
  }

  const onClickOutSide = () => {
    if (isProductSubMenuOpen || isCustomerStoriesSubMenuOpen || isCompanySubMenuOpen || isLanguageMenuOpen) {
      setProductSubMenuOpen(false);
      setCustomerStoriesSubMenuOpen(false);
      setCompanySubMenuOpen(false);
      setLanguageMenuOpen(false);
    }
  }

  useEffect(() => {
    const headerScrolling = () => {
      if (document?.documentElement?.scrollTop > 200 || document?.body?.scrollTop > 200) {
        return setScrolling(true);
      } else {
        return setScrolling(false);
      }
    };

    window.addEventListener('scroll', headerScrolling);
    return () => {
      window.removeEventListener('scroll', headerScrolling);
    }
  }, [isScrolling]);

  return (
    <Header
      imgSrc={
        <a href="https://emplifi-ui.netlify.app/" target="_self"><img className="emplifi-header__logo" src={LogoProduct} alt="Emplifi" /></a>
      }
      isMenuOpen={isMenuOpen}
      onClick={() => openMenu(isMenuOpen)}
      onClickOutSide={onClickOutSide}
      onMouseLeave={() => {
        if (isProductSubMenuOpen || isCustomerStoriesSubMenuOpen || isCompanySubMenuOpen){
          setProductSubMenuOpen(false);
          setCustomerStoriesSubMenuOpen(false);
          setCompanySubMenuOpen(false);
          setLanguageMenuOpen(false);
        }
      }}
      isScrolling={boolean('isScrolling', false)}
      isSecondaryMenuOpen={isSecondaryMenuOpen}
      secondaryOnClick={() => openSecondaryMenu(isSecondaryMenuOpen)}
      menuChildren={
        <HeaderMenuContainer isMenuOpen={isMenuOpen}>

        </HeaderMenuContainer>
      }
      miscMenuChildren={
        <HeaderOtherMenusContainer
          isMenuOpen={isMenuOpen}
          // topRow={
          //   <>
          //     <HeaderOtherMenuItem text="Customer Center" link="#" />
          //     <HeaderOtherMenuItem text="Log In" link="#" />
          //     <HeaderOtherMenuItem text="Start Trial" link="#" />
          //   </>
          // }
          searchToggle={null}
          bottomRow={
            <>
              <Button type="HeaderPrimary">Get a Demo</Button>
              {
                !isLanguageMenuOpen &&
                <button
                  className="emplifi-header__transition-button emplifi-header__transition-button--mobile"
                  type="button"
                  aria-label="Translation Button"
                  onClick={() => openLanguage(isLanguageMenuOpen)}
                >
                  <Typography type="HomeMiscLink" as="span">EN</Typography>
                  <Icon
                    name="chevron-down"
                    color={colours.pictonBlue}
                    size={15}
                  />
                </button>
              }
              <button
                className={`emplifi-header__transition-button emplifi-header__transition-button--desktop ${isLanguageMenuOpen ? 'emplifi-header__transition-button--is-active' : ''}`}
                type="button"
                aria-label="Translation Button"
                onClick={() => openLanguage(isLanguageMenuOpen)}
              >
                <Typography type="HomeMiscLink" as="span">EN</Typography>
                <Icon
                  name="chevron-down"
                  color={colours.pictonBlue}
                  size={15}
                />
              </button>
              {
                isLanguageMenuOpen &&
                <TranslationButtonGroup>
                  <TranslationButton text="EN" isActive={true} onClick={() => selectLanguage()} />
                  <TranslationButton text="FR" isActive={false} onClick={() => selectLanguage()} />
                  <TranslationButton text="DE" isActive={false} onClick={() => selectLanguage()} />
                </TranslationButtonGroup>
              }
            </>
          }
        />
      }
      secondaryChildren={
        <HeaderSecondaryMenuContainer
          isSecondaryMenuOpen={isSecondaryMenuOpen}
          children={
            <ul className="emplifi-secondary-header-lists">
              <li className="emplifi-secondary-header-list-item">
                <a href="http://localhost:6006/?path=/story/article-article-area--playground">
                  <Typography type="ProductHeaderLink" as="span">Product One</Typography>
                </a>
              </li>
              <li className="emplifi-secondary-header-list-item">
                <a href="http://localhost:6006/?path=/story/article-article-area-with-bottom-image--playground">
                  <Typography type="ProductHeaderLink" as="span">Product two</Typography>
                </a>
              </li>
              <li className="emplifi-secondary-header-list-item">
                <a href="http://localhost:6006/?path=/story/article-article-banner--playground">
                  <Typography type="ProductHeaderLink" as="span">Product three</Typography>
                </a>
              </li>
              <li className="emplifi-secondary-header-list-item">
                <a href="http://localhost:6006/?path=/story/article-article-call-to-action--playground">
                  <Typography type="ProductHeaderLink" as="span">Product four</Typography>
                </a>
              </li>
            </ul>
          }
        />
      }
    />
  )
}
