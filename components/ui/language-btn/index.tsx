import Link from 'next/link';
import { FC } from 'react';
import { MdOutlineLanguage } from 'react-icons/md';

import './style.scss';

interface LanguageBtnProps {}

export const LanguageBtn: FC<LanguageBtnProps> = ({}) => {
  return (
    <Link href="#" className="lang-btn">
      <MdOutlineLanguage size={28} />
      Русский
    </Link>
  );
};
