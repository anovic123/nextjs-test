'use client';

import { FC, useState } from 'react';
import { MenuItem } from './menu-item/menu-item';

interface MenuProps {}

const menuData = [
  {
    title: 'Компании',
    status: 1
  },
  {
    title: 'Креативы',
    status: 0
  },
  {
    title: 'Платежи',
    status: 0
  },
  {
    title: 'Помощь',
    status: 0
  },
  {
    title: 'Настройки',
    status: 0
  },
]

export const Menu: FC<MenuProps> = ({}) => {
  const [activeLink, setActiveLink] = useState(0);

  const handleClick = (index: number) => {
    setActiveLink(index);
  };

  return (
    <ul className="menu-list">
      {menuData.map((el: { title: string, status: number }, i: number) => (
        <MenuItem key={i} {...el} i={i} isActive={activeLink === i} handleClick={handleClick} />
      ))}
    </ul>
  );
};
