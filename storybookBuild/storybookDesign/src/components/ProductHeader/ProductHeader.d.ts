import { ReactNode, MouseEvent } from 'react';
import './ProductHeader.scss';
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
declare const ProductHeader: {
    (props: ProductHeaderProps): JSX.Element;
    defaultProps: {
        imgSrc: JSX.Element;
        isMenuOpen: boolean;
    };
};
declare const ProductHeaderMenu: {
    (props: ProductHeaderMenuProps): JSX.Element;
    defaultProps: {};
};
declare const ProductHeaderMenuItem: {
    (props: ProductHeaderMenuItemProps): JSX.Element;
    defaultProps: {
        text: string;
    };
};
export { ProductHeader, ProductHeaderMenu, ProductHeaderMenuItem };
export default ProductHeader;
