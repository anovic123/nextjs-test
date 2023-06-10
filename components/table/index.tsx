import { Campaign } from '@/app/page';
import { FC } from 'react';
import { TableCard } from './table-card';
import './table.scss';

interface TableProps {
  data: any;
}

export const Table: FC<TableProps> = ({ data }) => {
  console.log("🚀 ~ file: index.tsx:11 ~ data:", data)
  return (
    <table className="table">
      <thead>
        <tr className="table-top">
          <th>Кампания</th>
          <th>Креативы</th>
          <th>Место проведения</th>
          <th>Локации</th>
          <th>Транспорт</th>
          <th>Показ</th>
          <th>Бюджет</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((el: any, i: number) => (
          <TableCard key={`table-card-${i}`} {...el} />
        ))}
      </tbody>
    </table>
  );
};
