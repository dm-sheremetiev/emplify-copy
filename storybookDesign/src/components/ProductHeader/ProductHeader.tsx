import React, { ReactNode, useState, MouseEvent } from 'react';
import './ProductHeader.scss';
import LogoProduct from '../../assets/images/logos/emplifi-logo-tagline.png';
import Typography from '../Typography/Typography';
import Icon from '../Icon/Icon';

export type ProductHeaderProps = {
  id?: string;
  imgSrc?: ReactNode | string;
  isMenuOpen?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
};

export type ProductHeaderMenuProps = {
  id?: string;
  children?: ReactNode;
};

export type ProductHeaderMenuItemProps = {
  id?: string;
  text: string;
  href?: string;
  target?: string;
};

const ProductHeader = (props: ProductHeaderProps) => {
  const [isOpen, setOpen] = useState<boolean>(props.isMenuOpen || false);

  const openMenu = (isOpen: boolean) => {
    let value = isOpen;
    value = !value;
    setOpen(value);
  }

  return (
    <header id={props.id} className="emplifi-product-header">
      <div className="emplifi-product-header__logo-menu-button-container">
        {props.imgSrc && <>{props.imgSrc}</>}
        <button
          className="emplifi-product-header__button"
          type="button"
          onClick={() => openMenu(isOpen)}
          aria-label="Button"
        >
          {
            isOpen ?
            <Icon name="close" size={30} colour="#043A5D"></Icon> :
            <Icon name="menu" size={30} colour="#043A5D"></Icon>
          }
        </button>
      </div>
      {
        props.children &&
        <>
          {isOpen && <div className="emplifi-product-header__mobile-only">{props.children}</div>}
          <div className="emplifi-product-header__desktop-only">{props.children}</div>
        </>
      }
    </header>
  )
};

const ProductHeaderMenu = (props: ProductHeaderMenuProps) => {
  if (!props.children) {
    return (
      <div id={props.id} className="emplifi-product-header-menu">
        <Typography type="ProductHeaderLink" as="span">Please pass `ProductHeaderMenuItem` component down to children</Typography>
      </div>
    )
  }

  return (
    <div id={props.id} className="emplifi-product-header-menu">{props.children}</div>
  )
};

const ProductHeaderMenuItem = (props: ProductHeaderMenuItemProps) => {
  return (
    <a
      id={props.id}
      className="emplifi-product-header-menu-item"
      href={props.href}
      target={props.target ? props.target : undefined}
      rel={props.target === '_blank' ? 'noopener noreferrer' : undefined}
    >
      <Typography type="ProductHeaderLink" as="span">{props.text}</Typography>
    </a>
  )
};

ProductHeader.defaultProps = {
  imgSrc: <a href="https://emplifi-ui.netlify.app/"><img className="emplifi-product-header__logo" src={LogoProduct} alt="Emplifi" width="135px" height="28px" /></a>,
  isMenuOpen: false
}

ProductHeaderMenu.defaultProps = {};

ProductHeaderMenuItem.defaultProps = {
  text: 'Link name'
};

export { ProductHeader, ProductHeaderMenu, ProductHeaderMenuItem }
export default ProductHeader;
