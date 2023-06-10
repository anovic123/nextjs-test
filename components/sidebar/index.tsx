import { FC } from 'react';
import { Balance } from './balance';
import { Menu } from './menu';

import './sidebar.scss';

interface SidebarProps {}

export const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <Balance />
        <Menu />
      </div>
    </div>
  );
};
