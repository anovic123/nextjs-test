import { Campaign } from '@/app/page';
import { FC } from 'react';
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
      <td>
        <h3 className="title-table">{title}</h3>
        <span>ID {id}</span>
        <div>{state}</div>
      </td>
      <td>
        {photos.map((el: string, i: number) => (
          <img src={el} alt="Img" key={i} height={48} width={72} className="title-img" />
        ))}
      </td>
      <td>{city}</td>
      <td>{locations}</td>
      <td>{transports}</td>
      <td>{display}</td>
      <td>{budget}</td>
    </tr>
  );
};
