import Image from 'next/image';
import Link from 'next/link';
import { HeaderActions } from './actions';

import './header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link href="/">
          <Image
            src="https://static.biterika.team/brobooster/assets/images/logo.svg"
            width={236}
            height={33}
            alt="Logo"
          />
        </Link>
        <HeaderActions />
      </div>
    </header>
  );
};
