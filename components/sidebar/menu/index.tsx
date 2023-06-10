import { FC } from 'react';
'use client'

import { MenuItem } from './menu-item/menu-item';

interface MenuProps {}

const menuData = ['Компании', 'Креативы', 'Платежи', 'Помощь', 'Настройки'];

export const Menu: FC<MenuProps> = ({}) => {
  return (
    <ul className="menu-list">
      {menuData.map((el: string, i: number) => (
        <MenuItem key={i} el={el} i={i} />
      ))}
    </ul>
  );
};
