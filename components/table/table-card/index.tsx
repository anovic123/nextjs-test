import Image from 'next/image';
import { FC } from 'react';

import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { BsChevronRight } from 'react-icons/bs';
import { TableProgress } from '../table-progress';

import './style.scss';

interface TableCardProps {
  id: number;
  title: string;
  city: string;
  state: string;
  locations: number;
  transports: number;
  display: string;
  budget: number;
  photos: string[];
}

export const TableCard: FC<TableCardProps> = ({
  budget,
  city,
  display,
  id,
  locations,
  photos,
  state,
  title,
  transports,
}) => {
  return (
    <tr className="card-col">
      <td className="card-info-container">
        <h3 className="card-title">{title}</h3>
        <span className="card-id">ID {id}</span>
        <span className="card-date">12 янв 2023 в 14:45</span>
        <TableProgress status={state} />
      </td>
      <td>
        <div className="card-img-container">
          {photos.map((el: string, i: number) => (
            <Image src={el} alt="Img" key={i} height={72} width={48} className="card-img" />
          ))}
        </div>
      </td>
      <td className="card-info">{city}</td>
      <td className="card-info">{locations}</td>
      <td className="card-info">{transports}</td>
      <td className="card-info">{display}ч</td>
      <td className="card-info">{budget}$</td>
      <td>
        <BiDotsHorizontalRounded />
      </td>
      <td>
        <BsChevronRight size={20} className="card-actions" />
      </td>
    </tr>
  );
};
