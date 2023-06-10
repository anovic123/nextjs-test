import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MdOutlineLanguage } from 'react-icons/md';
import { RxExit } from 'react-icons/rx';
import { FC } from 'react';

interface HeaderActionsProps {}

export const HeaderActions: FC<HeaderActionsProps> = ({}) => {
  return (
    <div className="actions">
      <Link href="#">
        <Button btnStyle="WHITE">Создать кампанию</Button>
      </Link>
      <Link href="#" className="actions-btn">
        <MdOutlineLanguage size={28} />
        Русский
      </Link>
      <Link href="#" className="actions-btn">
        <RxExit size={24} />
      </Link>
    </div>
  );
};
