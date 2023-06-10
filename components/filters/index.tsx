'use client';

import { FC, useState } from 'react';

import './filter.scss';

interface FiltersProps {}

const filterData = [
  'Все',
  'В работе',
  'Ожидают начала',
  'Приостановлены',
  'На модерации',
  'Завершенные',
];

export const Filters: FC<FiltersProps> = ({}) => {
  const [activeFilter, setActiveFilter] = useState<number>(0);

  return (
    <ul className="filter">
      {filterData.map((el, i) => (
        <li
          key={`filter-key-${i}`}
          onClick={() => setActiveFilter(i)}
          className={`filter-item ${activeFilter === i ? 'filterActive' : ''}`}
        >
          {el}
        </li>
      ))}
    </ul>
  );
};
