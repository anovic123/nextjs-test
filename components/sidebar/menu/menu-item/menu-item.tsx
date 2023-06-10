import { FC } from 'react';

interface MenuItemProps {
  el: string;
  i: number;
}

export const MenuItem: FC<MenuItemProps> = ({ el, i }) => {

  return (
    <li className='menu-item'>
      <span>{el}</span>
    </li>
  );
};
