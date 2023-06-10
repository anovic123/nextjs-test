import { Campaign } from '@/app/page';
import { FC } from 'react';
import { TableCard } from './table-card';
import './table.scss';

interface TableProps {
  data: any;
}

const tableTop = [
  'Кампания',
  'Креативы',
  'Место проведения',
  'Локации',
  'Транспорт',
  'Показ',
  'Бюджет',
];

export const Table: FC<TableProps> = ({ data }) => {
  console.log('🚀 ~ file: index.tsx:11 ~ data:', data);
  return (
    <table className="table">
      <thead>
        <tr className="table-top">
          {tableTop.map((el) => (
            <th className="table-title" key={el}>
              {el}
            </th>
          ))}
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
