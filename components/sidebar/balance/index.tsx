import { Button } from '@/components/ui/button';
import { AiOutlinePlus } from 'react-icons/ai';
import { FC } from 'react';

interface BalanceProps {}

export const Balance: FC<BalanceProps> = ({}) => {
  return (
    <div className="balance">
      <div className="balance-row">
        <h4 className="balance-title">Баланс</h4>
        <Button variant="OUTLINE">
          <AiOutlinePlus size={20} /> Пополнить
        </Button>
      </div>
      <div className="balance-row">
        <span className="balance-t">Доступно</span>
        <span className="balance-available">135$</span>
      </div>
      <div className="balance-row">
        <span className="balance-t">Зарезервировано</span>
        <span className="balance-reserve">600$</span>
      </div>
    </div>
  );
};
