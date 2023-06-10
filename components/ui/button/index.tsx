import { FC } from 'react';
import clsx from 'clsx';

import './button.scss';

enum ButtonStyleEnum {
  WHITE = 'WHITE',
}

enum ButtonVariantEnum {
  OUTLINE = 'OUTLINE',
}

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /**
   * btnStyle button
   */
  btnStyle?: keyof typeof ButtonStyleEnum;
  /**
   * variant
   */
  variant?: keyof typeof ButtonVariantEnum;
   /**
   * start icon
   */
   startIcon?: React.ReactNode;
   /**
    * endIcon
    */
   endIcon?: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({
  onClick,
  btnStyle,
  variant,
  children,
  className,
  startIcon,
  endIcon,
  ...props
}) => {
  const btnClasses = clsx('btn', {
    'white-btn': btnStyle === ButtonStyleEnum.WHITE,
    'outline-btn': variant === ButtonVariantEnum.OUTLINE,
  });

  return (
    <button onClick={onClick} className={btnClasses} {...props}>
      {!!startIcon && <>{startIcon}</>}
      {children}
      {!!endIcon && <>{endIcon}</>}
    </button>
  );
};
