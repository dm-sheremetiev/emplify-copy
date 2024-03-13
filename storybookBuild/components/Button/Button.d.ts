import React, { FC, MouseEvent } from 'react';
import './Button.scss';
export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    id?: string;
    type: 'Primary' | 'OutlinePrimary' | 'Secondary' | 'PassiveAlt' | 'ProductPrimary' | 'ProductSecondary' | 'ProductPassiveAlt' | 'HeaderPrimary' | 'LoadMore' | 'ResourceCardButton' | 'CardAlt';
    text?: string;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    onMouseEnter?: (e: MouseEvent<HTMLButtonElement>) => void;
    onMouseLeave?: (e: MouseEvent<HTMLButtonElement>) => void;
};
declare const Button: FC<ButtonProps>;
export default Button;
