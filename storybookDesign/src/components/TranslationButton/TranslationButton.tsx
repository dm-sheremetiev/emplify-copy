import React, { MouseEvent, ReactNode } from 'react';
import { colours } from '../../assets/colours';
import Icon from '../Icon/Icon';
import Typography from '../Typography/Typography';
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

const TranslationButton = (props: TranslationButtonProps) => {
  const HTMLProps = { ...props } as any;
  delete HTMLProps.id;
  delete HTMLProps.text;
  delete HTMLProps.isActive;
  delete HTMLProps.onClick;


  return (
    <button 
      {...HTMLProps}
      id={props.id}
      className={[`emplifi-translation-button`, props.isActive ? 'emplifi-translation-button--is-active' : undefined, props?.className].join(" ")}
      aria-label="Button"
      type="button"
      onClick={props.onClick}
    >
      <Typography type="Headline4" as="span" className="emplifi-translation-button__text">{props.text}</Typography>
      {
        props.isActive && 
        <Icon 
          name="chevron-down" 
          color={colours.white} 
          size={15} 
        />
      }
    </button>
  )
};

const TranslationButtonGroup = (props: TranslationButtonGroupProps) => {
  const HTMLProps = { ...props } as any;
  delete HTMLProps.children;

  return (
    <div {...HTMLProps} className={["emplifi-translation-button-group", props?.className].join(" ")}>
      {props.children}
    </div>
  )
}

TranslationButton.defaultProps = {
  text: 'EN',
  isActive: false
};

export { TranslationButton, TranslationButtonGroup }
export default TranslationButton;
