import { FC } from 'react';

interface MenuItemProps {
  title: string;
  status: number;
  i: number;
  isActive: boolean;
  handleClick: (index: number) => void;
}

export const MenuItem: FC<MenuItemProps> = ({ title, status, i, isActive, handleClick }) => {
  return (
    <li className={`menu-item ${isActive ? 'active' : ''}`} onClick={() => handleClick(i)}>
      <div className="menu-title">{title}</div>
      {status > 0 && <div className="menu-status">{status}</div>}
    </li>
  );
};
