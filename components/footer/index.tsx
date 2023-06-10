import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { LanguageBtn } from '../ui/language-btn';

import './footer.scss';

interface FooterProps {}

export const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <Link href="/">
          <Image
            src="https://static.biterika.team/brobooster/assets/images/logo.svg"
            width={236}
            height={34}
            alt="logo"
          />
        </Link>
        <div className="footer-actions">
          <Link href="#">Политика конфиденциальности</Link>
          <Link href="#">Правила пользования</Link>
          <LanguageBtn />
        </div>
      </div>
    </footer>
  );
};
