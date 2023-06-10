import { FC, useState } from 'react';

import { AiOutlineNotification } from 'react-icons/ai';
import { BiImages, BiCoin } from 'react-icons/bi';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { MobileItem } from './mobile-item';

interface MobileMenuProps {}

const menuData = [
  {
    icon: <AiOutlineNotification />,
    name: 'Кампании',
  },
  {
    icon: <BiImages />,
    name: 'Креативы',
  },
  {
    icon: <BiCoin />,
    name: 'Платежи',
  },
  {
    icon: <MdOutlineAccountCircle />,
    name: 'Аккаунт',
  },
];

export const MobileMenu: FC<MobileMenuProps> = ({}) => {
  const [activeLink, setActiveLink] = useState(0);

  const handleClick = (index: number) => {
    setActiveLink(index);
  };

  return (
    <nav className="mobile-menu">
      <ul className="mobile-list">
        {menuData.map((el, i) => (
          <MobileItem
            key={el.name}
            {...el}
            i={i}
            isActive={activeLink === i}
            handleClick={handleClick}
          />
        ))}
      </ul>
    </nav>
  );
};
