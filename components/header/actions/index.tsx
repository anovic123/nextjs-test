import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { RxExit } from 'react-icons/rx';
import { FC } from 'react';
import { LanguageBtn } from '@/components/ui/language-btn';

interface HeaderActionsProps {}

export const HeaderActions: FC<HeaderActionsProps> = ({}) => {
  return (
    <div className="actions">
      <Link href="#">
        <Button btnStyle="WHITE">Создать кампанию</Button>
      </Link>
      <LanguageBtn />
      <Link href="#" className="actions-btn">
        <RxExit size={24} />
      </Link>
    </div>
  );
};
