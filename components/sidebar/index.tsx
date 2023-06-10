import { FC } from 'react';
import { Balance } from './balance';
import { Menu } from './menu';

import './sidebar.scss';

interface SidebarProps {}

export const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <aside className="sidebar">
      <Balance />
      <Menu />
    </aside>
  );
};
