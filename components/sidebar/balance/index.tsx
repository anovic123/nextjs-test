import { Button } from '@/components/ui/button';
import { FC } from 'react';

interface BalanceProps {}

export const Balance: FC<BalanceProps> = ({}) => {
  return <div className="balance">
    <div className="balance-row">
      <h4 className="balance-title">Баланс</h4>
      <Button btnStyle="WHITE">+ Пополнить</Button>
    </div>
    <div className="balance-row">
      <span className="balance-t">Доступно</span>
      <span className="balance-available">135$</span>
    </div>
    <div className="balance-row">
      <span className="balance-t">Зарезервировано</span>
      <span className="balance-reserve">600$</span>
    </div>
  </div>;
};
