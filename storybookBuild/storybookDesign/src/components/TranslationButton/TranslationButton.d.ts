import React, { MouseEvent, ReactNode } from 'react';
import './TranslationButton.scss';
export type TranslationButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    id?: string;
    text: string;
    isActive?: boolean;
    className?: string;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};
export type TranslationButtonGroupProps = React.HTMLAttributes<HTMLDivElement> & {
    children?: ReactNode | string;
    className?: string;
};
declare const TranslationButton: {
    (props: TranslationButtonProps): JSX.Element;
    defaultProps: {
        text: string;
        isActive: boolean;
    };
};
declare const TranslationButtonGroup: (props: TranslationButtonGroupProps) => JSX.Element;
export { TranslationButton, TranslationButtonGroup };
export default TranslationButton;
