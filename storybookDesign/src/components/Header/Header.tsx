import React, { ReactNode, MouseEvent, forwardRef } from 'react';
import './Header.scss';
import Icon from '../Icon/Icon';
import TopBar from '../TopBar/TopBar';
import colours from '../../assets/colours';
import Logo from '../../assets/images/logos/emplifi-logo.png';
import Typography from '../Typography/Typography';

export type HeaderProps = {
  id?: string;
  imgSrc?: ReactNode | string;
  isMenuOpen?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  onMobileSearchClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickOutSide?: (e: MouseEvent<HTMLDivElement>) => void;
  onMouseOver?: (e: MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (e: MouseEvent<HTMLDivElement>) => void;
  menuChildren?: ReactNode;
  searchInput?: ReactNode;
  miscMenuChildren?: ReactNode;
  showTopBar?: boolean
  dataSource?: string;
  // Secondary
  secondaryChildren?: ReactNode;
  isSecondaryMenuOpen?: boolean;
  secondaryOnClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  isScrolling?: boolean;
};

export type HeaderMenuContainerProps = {
  id?: string;
  isMenuOpen?: boolean;
  children?: ReactNode;
}

export type HeaderSubMenuContainerProps = {
  id?: string;
  children?: ReactNode;
}

export type HeaderSubMenuItemProps = {
  id?: string;
  isActive?: boolean;
  text: string;
};

export type HeaderOtherMenuItemProps = {
  id?: string;
  text: string;
  link: string;
};

export type HeaderOtherMenusContainerProps = {
  id?: string;
  isMenuOpen?: boolean;
  topRow?: ReactNode;
  searchToggle: ReactNode;
  bottomRow?: ReactNode;
  imgSrc?: ReactNode | string;
}

export type HeaderSecondaryMenuContainerProps = {
  id?: string;
  isSecondaryMenuOpen?: boolean;
  children?: ReactNode;
}

export type HeaderProductMenuProps = {
  id?: string;
  title?: string;
  linkChildren?: ReactNode;
  linksChildren?: ReactNode;
  contentChildren?: ReactNode;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>
}

export type HeaderCompanyMenuProps = {
  id?: string;
  title?: string;
  linkChildren?: ReactNode;
  linksChildren?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  imageTitle?: string;
}

export type HeaderCustomerStoriesMenuProps = {
  id?: string;
  linkChildren?: ReactNode;
  title?: string;
  storiesChildren?: ReactNode;
}

export type HeaderProductMenuContentProps = {
  id?: string;
  activeId?: number;
  backgroundColor?: string;
  backgroundImage?: string;
  linksChildren?: ReactNode;
  title?: string;
  // iconName: IconsType;
  // iconColour?: string;
  // paragraph?: string;
  // linkChildren?: ReactNode;
}

export type HeaderProductMenuItemProps = {
  onClick?: (e: MouseEvent<HTMLLIElement>) => void;
  onMouseOver?: (e: MouseEvent<HTMLLIElement>) => void;
  onMouseLeave?: (e: MouseEvent<HTMLLIElement>) => void;
  href?: string;
  target?: string;
  color?: string;
  text?: string;
}

export type HeaderProductMenuContentItemProps = {
  href?: string;
  target?: string;
  text?: string;
}

export type HeaderCompanyMenuItemProps = {
  href?: string;
  target?: string;
  text?: string;
}

const Header = forwardRef<HTMLDivElement, HeaderProps>((props: HeaderProps , ref) => {
  const defaultMenu = () => {
    return (
      <>
        {props.isMenuOpen ?
          <button className="emplifi-header__menu-button" type="button" aria-label="Close Menu" onClick={props.onClick}>
            <Icon  name="close-small" size={30} colour="#043A5D" />
          </button> :
            <div className='mobile-buttons'>
              <button className="emplifi-header__menu-button" type="button" aria-label="Open global search box" onClick={props.onMobileSearchClick}>
                <Icon name="search-icon" size={24} colour="#FFFFFF" />
              </button>
              <button className="emplifi-header__menu-button" type="button" aria-label="Open Menu"  onClick={props.onClick} >
                <Icon name="menu" size={30} colour="#043A5D" />
              </button>
            </div>
          }
      </>
    )
  };

  const productMenu = () => {
    return (
      <>
        {props.isSecondaryMenuOpen ?
          <button className="emplifi-header__menu-button" type="button" aria-label="Close Menu" onClick={props.secondaryOnClick}>
            <Icon  name="close-small" size={30} colour="#043A5D" />
          </button> :
          <button className="emplifi-header__menu-button" type="button" aria-label="Open Menu"  onClick={props.secondaryOnClick}>
            <Icon name="menu" size={30} colour="#043A5D" />
          </button>}
      </>
    )
  };

  return (
    <div
      ref={ref}
      id={props.id}
      className={`emplifi-header ${props.isScrolling ? 'scrolled' : ''}`}
    >
      {props.showTopBar && <TopBar dataSource={props.dataSource}/>}
      <div onMouseEnter={props.onMouseLeave} className="emplifi-header__misc-menu-children desktop-only">{props.miscMenuChildren}</div>
      <div className="emplifi-header__container">
        <div className="emplifi-header__logo-menu-button-menu-children-container">
          <div className="emplifi-header__logo-menu-button-container">
            {props.imgSrc && <>{props.imgSrc}</>}
            {<>{defaultMenu()}</>}
          </div>
        </div>
        {
          props.menuChildren && props.miscMenuChildren &&
          <div className="emplifi-header__menu-misc-menu-children-container">
            {props.searchInput}
            <div className="emplifi-header__menu-children">{props.menuChildren}</div>
            <div className="emplifi-header__misc-menu-children mobile-only">{props.miscMenuChildren}</div>
          </div>
        }
        {
          props.secondaryChildren &&
          <div className="emplifi-header__secondary-menu-children">{props.secondaryChildren}</div>
        }
      </div>
    </div>
  )
});

const HeaderMenuContainer = (props: HeaderMenuContainerProps) => {
  return (
    <>
      {props.isMenuOpen && <div id={props.id} className="emplifi-menu-container emplifi-menu-container--mobile">{props.children}</div>}
      <div id={props.id} className="emplifi-menu-container emplifi-menu-container--desktop">{props.children}</div>
    </>
  );
};

const HeaderSubMenuContainer = (props: HeaderSubMenuContainerProps) => {
  return (
    <div id={props.id} className="emplifi-sub-menu-container">{props.children}</div>
  )
}

const HeaderSubMenuItem = (props: HeaderSubMenuItemProps) => {
  return (
    <div id={props.id} className={`emplifi-sub-menu-item ${props.isActive ? 'emplifi-sub-menu-item--is-active' : ''} `}>
      <Typography type="HomeSubMenuLink" as="span">{props.text}</Typography>
    </div>
  )
};

const HeaderOtherMenusContainer = (props: HeaderOtherMenusContainerProps) => {
  return (
    <>
      {
        props.isMenuOpen &&
        <div id={props.id} className="emplifi-other-menus-container emplifi-other-menus-container--mobile">
          {props.topRow ? <div className="emplifi-other-menus-container__top-row">{props.topRow}</div> : ''}
          {props.bottomRow ? <div className="emplifi-other-menus-container__bottom-row">{props.bottomRow}</div> : ''}
        </div>
      }
      <div id={props.id} className="emplifi-other-menus-container emplifi-other-menus-container--desktop">
        {props.imgSrc && <>{props.imgSrc}</>}
        {props.searchToggle ? <>{props.searchToggle}</> : ''}
        {props.topRow ? <div className="emplifi-other-menus-container__top-row">{props.topRow}</div> : ''}
        {props.bottomRow ? <div className="emplifi-other-menus-container__bottom-row">{props.bottomRow}</div> : ''}
      </div>
    </>
  )
};

const HeaderOtherMenuItem = (props: HeaderOtherMenuItemProps) => {
  return (
    <Typography
      id={props.id}
      className="emplifi-other-menu-item"
      type="HomeMiscLink"
      as="span"
    >
     {props.text}
    </Typography>
  )
};

const HeaderSecondaryMenuContainer = (props: HeaderSecondaryMenuContainerProps) => {
  return (
    <>
      {props.isSecondaryMenuOpen && <div id={props.id} className="emplifi-secondary-menu-container emplifi-secondary-menu-container--mobile">{props.children}</div>}
      <div id={props.id} className="emplifi-secondary-menu-container emplifi-secondary-menu-container--desktop">{props.children}</div>
    </>
  )
}

const HeaderProductMenu = (props: HeaderProductMenuProps) => {
  return (
    <div onMouseLeave={props.onMouseLeave} className="emplifi-product-menu" id={`${props.id}`}>
      <div className="emplifi-product-menu-cx-cloud">
        {props.title && <Typography as="span" type="MenuTitle" className="emplifi-product-menu-cx-cloud__title">{props.title}</Typography>}
        {/* {props.linkChildren && <>{props.linkChildren}</>} */}
        {props.linksChildren && <ul className="emplifi-product-menu-cx-cloud__cx-cloud-list">{props.linksChildren}</ul>}
      </div>
      {props.contentChildren && <>{props.contentChildren}</>}
    </div>
  )
}

const HeaderProductMenuContent = (props: HeaderProductMenuContentProps) => {
  return (
    <div
      className="emplifi-product-menu-cx-cloud-content"
      style={{
        backgroundColor: props.backgroundColor || colours.astronautBlue,
        backgroundImage: props.backgroundImage
      }}
    >
      <div
        className={`emplifi-product-menu-cx-cloud-content__left-arrow emplifi-product-menu-cx-cloud-content__left-arrow--${props.activeId}`}
        style={{borderRightColor: props.backgroundColor || colours.astronautBlue}}
      ></div>
      <div className="emplifi-product-menu-cx-cloud-content__menu">
        {
          props.title &&
          <Typography as="span" type="MenuSubMenuTitle2" className="emplifi-product-menu-cx-cloud-content__title emplifi-product-menu-cx-cloud-content__title--mobile">
            {/* <Icon name={props.iconName} size={50} colour={props.iconColour} /> */}
            {props.title}
          </Typography>
        }
        {props.linksChildren && <ul className="emplifi-product-menu-cx-cloud-content__list">{props.linksChildren}</ul>}
      </div>
      {/* <div className="emplifi-product-menu-cx-cloud-content__content emplifi-product-menu-cx-cloud-content__content--desktop">
        <div className="emplifi-product-menu-cx-cloud-content__content-container">
          {
            props.title &&
            <Typography as="h3" type="MenuSubMenuTitle2" className="emplifi-product-menu-cx-cloud-content__title emplifi-product-menu-cx-cloud-content__title">
              <Icon name={props.iconName} size={50} colour={props.iconColour} />
              {props.title}
            </Typography>
          }
          {props.paragraph && <Typography as="p" type="MenuSubMenuBody" className="emplifi-product-menu-cx-cloud-content__paragraph">{props.paragraph}</Typography>}
          {props.linkChildren && <>{props.linkChildren}</>}
        </div>
      </div> */}
    </div>
  )
}

const HeaderProductMenuItem = (props: HeaderProductMenuItemProps) => {
  return (
    <li
      className="emplifi-product-menu-cx-cloud__cx-cloud-list-item"
      onClick={props.onClick}
      onMouseOver={props.onMouseOver}
      onMouseLeave={props.onMouseLeave}
    >
      <a href={props.href} target={props.target ? props.target : undefined} rel={props.target === '_blank' ? 'noopener noreferrer' : undefined}>
        <Typography style={{color: props.color}} as="span" type="MenuSubMenu1">{props.text}</Typography>
      </a>
    </li>
  )
}

const HeaderProductMenuContentItem = (props: HeaderProductMenuContentItemProps) => {
  return (
    <li className="emplifi-product-menu-cx-cloud-content__list-item">
      <a href={props.href} target={props.target ? props.target : undefined} rel={props.target === '_blank' ? 'noopener noreferrer' : undefined}>
        <Typography as="span" type="MenuSubMenu2">{props.text} »</Typography>
      </a>
    </li>
  )
}

const HeaderCompanyMenu = (props: HeaderCompanyMenuProps) => {
  return (
    <div className="emplifi-company-menu" id={`${props.id}`}>
      <div className="emplifi-company-menu__menu">
        {props.title && <Typography as="h3" type="MenuTitle" className="emplifi-company-menu__title">{props.title}</Typography>}
        {/* {props.linkChildren && <>{props.linkChildren}</>} */}
        {props.linksChildren && <ul className="emplifi-company-menu__list">{props.linksChildren}</ul>}
      </div>
      {
        props.imageSrc &&
        <div className="emplifi-company-menu__image-container">
          <img
            className="emplifi-company-menu__image"
            src={props.imageSrc}
            alt={props.imageAlt}
            title={props.imageTitle}
            width="135px"
            height="28px"
          />
        </div>
      }
    </div>
  )
}

const HeaderCompanyMenuItem = (props: HeaderCompanyMenuItemProps) => {
  return (
    <li className="emplifi-company-menu__list-item">
      <a href={props.href} target={props.target ? props.target : undefined} rel={props.target === '_blank' ? 'noopener noreferrer' : undefined}>
        <Typography as="span" type="MenuSubMenu3">{props.text}</Typography>
      </a>
    </li>
  )
}

const HeaderCustomerStoriesMenu = (props: HeaderCustomerStoriesMenuProps) => {
  return (
    <div className="emplifi-customer-stories-menu" id={`${props.id}`}>
      {props.linkChildren && <>{props.linkChildren}</>}
      <div className="emplifi-customer-stories-menu__featured-customers-stories" style={{ marginTop: props.linkChildren ? 45 : 0 }}>
        {props.title && <div className="typography typography--MenuTitle" dangerouslySetInnerHTML={{ __html: props.title || "" }}></div>}
        {props.storiesChildren && <div className="emplifi-customer-stories-menu__list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">{props.storiesChildren}</div>}
      </div>
    </div>
  )
}

Header.defaultProps = {
  imgSrc: <a href="/"><img className="emplifi-header__logo" src={Logo} alt="Emplifi" width="135px" height="28px"  /></a>,
  isMenuOpen: false,
  isSecondaryMenuOpen: false,
  isScrolling: false,
}

HeaderMenuContainer.defaultProps = {
  isMenuOpen: false
}

HeaderOtherMenusContainer.defaultProps = {
  isMenuOpen: false,
  imgSrc: <a href="/"><img className="emplifi-header__logo" src={Logo} alt="Emplifi" width="135px" height="28px"  /></a>,
}

HeaderSecondaryMenuContainer.defaultProps = {
  isSecondaryMenuOpen: false
}

HeaderProductMenuContent.defaultProps = {
  activeId: 1
}

export {
  Header,
  HeaderMenuContainer,
  HeaderSubMenuContainer,
  HeaderSubMenuItem,
  HeaderOtherMenusContainer,
  HeaderOtherMenuItem,
  HeaderSecondaryMenuContainer,
  HeaderProductMenu,
  HeaderProductMenuContent,
  HeaderProductMenuItem,
  HeaderProductMenuContentItem,
  HeaderCompanyMenu,
  HeaderCompanyMenuItem,
  HeaderCustomerStoriesMenu
}

export default Header;
