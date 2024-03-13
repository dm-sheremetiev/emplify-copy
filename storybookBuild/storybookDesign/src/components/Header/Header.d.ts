import React, { ReactNode, MouseEvent } from 'react';
import './Header.scss';
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
    showTopBar?: boolean;
    dataSource?: string;
    secondaryChildren?: ReactNode;
    isSecondaryMenuOpen?: boolean;
    secondaryOnClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    isScrolling?: boolean;
};
export type HeaderMenuContainerProps = {
    id?: string;
    isMenuOpen?: boolean;
    children?: ReactNode;
};
export type HeaderSubMenuContainerProps = {
    id?: string;
    children?: ReactNode;
};
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
};
export type HeaderSecondaryMenuContainerProps = {
    id?: string;
    isSecondaryMenuOpen?: boolean;
    children?: ReactNode;
};
export type HeaderProductMenuProps = {
    id?: string;
    title?: string;
    linkChildren?: ReactNode;
    linksChildren?: ReactNode;
    contentChildren?: ReactNode;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
};
export type HeaderCompanyMenuProps = {
    id?: string;
    title?: string;
    linkChildren?: ReactNode;
    linksChildren?: ReactNode;
    imageSrc?: string;
    imageAlt?: string;
    imageTitle?: string;
};
export type HeaderCustomerStoriesMenuProps = {
    id?: string;
    linkChildren?: ReactNode;
    title?: string;
    storiesChildren?: ReactNode;
};
export type HeaderProductMenuContentProps = {
    id?: string;
    activeId?: number;
    backgroundColor?: string;
    backgroundImage?: string;
    linksChildren?: ReactNode;
    title?: string;
};
export type HeaderProductMenuItemProps = {
    onClick?: (e: MouseEvent<HTMLLIElement>) => void;
    onMouseOver?: (e: MouseEvent<HTMLLIElement>) => void;
    onMouseLeave?: (e: MouseEvent<HTMLLIElement>) => void;
    href?: string;
    target?: string;
    color?: string;
    text?: string;
};
export type HeaderProductMenuContentItemProps = {
    href?: string;
    target?: string;
    text?: string;
};
export type HeaderCompanyMenuItemProps = {
    href?: string;
    target?: string;
    text?: string;
};
declare const Header: React.ForwardRefExoticComponent<HeaderProps & React.RefAttributes<HTMLDivElement>>;
declare const HeaderMenuContainer: {
    (props: HeaderMenuContainerProps): JSX.Element;
    defaultProps: {
        isMenuOpen: boolean;
    };
};
declare const HeaderSubMenuContainer: (props: HeaderSubMenuContainerProps) => JSX.Element;
declare const HeaderSubMenuItem: (props: HeaderSubMenuItemProps) => JSX.Element;
declare const HeaderOtherMenusContainer: {
    (props: HeaderOtherMenusContainerProps): JSX.Element;
    defaultProps: {
        isMenuOpen: boolean;
        imgSrc: JSX.Element;
    };
};
declare const HeaderOtherMenuItem: (props: HeaderOtherMenuItemProps) => JSX.Element;
declare const HeaderSecondaryMenuContainer: {
    (props: HeaderSecondaryMenuContainerProps): JSX.Element;
    defaultProps: {
        isSecondaryMenuOpen: boolean;
    };
};
declare const HeaderProductMenu: (props: HeaderProductMenuProps) => JSX.Element;
declare const HeaderProductMenuContent: {
    (props: HeaderProductMenuContentProps): JSX.Element;
    defaultProps: {
        activeId: number;
    };
};
declare const HeaderProductMenuItem: (props: HeaderProductMenuItemProps) => JSX.Element;
declare const HeaderProductMenuContentItem: (props: HeaderProductMenuContentItemProps) => JSX.Element;
declare const HeaderCompanyMenu: (props: HeaderCompanyMenuProps) => JSX.Element;
declare const HeaderCompanyMenuItem: (props: HeaderCompanyMenuItemProps) => JSX.Element;
declare const HeaderCustomerStoriesMenu: (props: HeaderCustomerStoriesMenuProps) => JSX.Element;
export { Header, HeaderMenuContainer, HeaderSubMenuContainer, HeaderSubMenuItem, HeaderOtherMenusContainer, HeaderOtherMenuItem, HeaderSecondaryMenuContainer, HeaderProductMenu, HeaderProductMenuContent, HeaderProductMenuItem, HeaderProductMenuContentItem, HeaderCompanyMenu, HeaderCompanyMenuItem, HeaderCustomerStoriesMenu };
export default Header;
