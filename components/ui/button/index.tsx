import { FC } from 'react';

import './button.scss';

enum ButtonStyleEnum {
  WHITE = 'WHITE',
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
}

export const Button: FC<ButtonProps> = ({ onClick, btnStyle, children, className, ...props }) => {
  const btnClasses = btnStyle === ButtonStyleEnum.WHITE ? 'white btn' : '';

  return (
    <button onClick={onClick} className={btnClasses} {...props}>
      {children}
    </button>
  );
};
