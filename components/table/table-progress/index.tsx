import clsx from 'clsx';
import { FC } from 'react';
import { AiOutlinePause } from 'react-icons/ai';

import './style.scss';

interface TableProgressProps {
  status: string;
}

export const TableProgress: FC<TableProgressProps> = ({ status }) => {
  const classes = clsx('progress', {
    'green-status': status === 'in_progress',
    'white-status': status === 'moderation',
    'orange-status': status === 'paused',
    'red-status': status === '',
  });

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'in_progress':
        return <div className={classes}>В работе</div>;
      case 'moderation':
        return <div className={classes}>На модерации</div>;
      case 'paused':
        return (
          <div className={classes}>
            <AiOutlinePause size={16} color="orange" />
            Приостановлена
          </div>
        );
      default:
        return (
          <div className={classes}>
            <AiOutlinePause size={16} color="orange" />
            Отклонен
          </div>
        );
    }
  };

  return <div>{getStatusLabel(status)}</div>;
};
