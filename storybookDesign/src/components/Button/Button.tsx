import React, { FC, MouseEvent } from 'react';
import Typography from '../Typography/Typography';
import './Button.scss';

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  id?: string;
  type:
    | 'Primary'
    | 'OutlinePrimary'
    | 'Secondary'
    | 'PassiveAlt'
    | 'ProductPrimary'
    | 'ProductSecondary'
    | 'ProductPassiveAlt'
    | 'HeaderPrimary'
    | 'LoadMore'
    | 'ResourceCardButton'
    | 'CardAlt';
  text?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (e: MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { children, text, type, onClick, onMouseEnter, onMouseLeave } = props;
  const HTMLProps = { ...props } as any;
  delete HTMLProps.text;
  delete HTMLProps.type;
  delete HTMLProps.onClick;
  delete HTMLProps.onMouseEnter;
  delete HTMLProps.onMouseLeave;

  return (
    <button
      id={props.id}
      className={`emplifi-button emplifi-button--type-${type}`}
      aria-label="Button"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
      type="button"
    >
      <Typography
        type="Button1"
        as="span"
        className="emplifi-button__text"
        style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word', flexWrap: 'wrap' }}
      >
        {children || text}
      </Typography>
    </button>
  );
};

Button.defaultProps = {
  children: 'CTA to go here',
  type: 'Primary'
};

export default Button;
