import { FC } from 'react';

interface MobileItemProps {
  icon: any;
  name: string;
  i: number;
  isActive: boolean;
  handleClick: (index: number) => void;
}

export const MobileItem: FC<MobileItemProps> = ({ icon, name, i, isActive, handleClick }) => {
  return (
    <li
      className={`mobile-item  ${isActive ? 'mobile-active' : ''}`}
      onClick={() => handleClick(i)}
    >
      {icon}
      <span>{name}</span>
    </li>
  );
};
