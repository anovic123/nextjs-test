import { FC } from 'react';
import { Balance } from './balance';
import { Menu } from './menu';

import './sidebar.scss';

interface SidebarProps {}

export const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-container">
        <Balance />
        <Menu />
      </div>
    </aside>
  );
};
