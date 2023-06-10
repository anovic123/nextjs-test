'use client';

import { useMediaQuery } from '@/hooks/use-media-query';
import Image from 'next/image';
import Link from 'next/link';
import { HeaderActions } from './actions';


import './header.scss';
import { MobileMenu } from './mobile-menu';

export const Header = () => {

  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="header-logo">
          <Image
            src="https://static.biterika.team/brobooster/assets/images/logo.svg"
            width={236}
            height={34}
            alt="logo"
          />
        </Link>
        {/* {isTablet ? <MobileMenu /> : <HeaderActions />} */}
        <MobileMenu />
        <HeaderActions />
      </div>
    </header>
  );
};
