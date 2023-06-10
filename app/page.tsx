import { Filters } from '@/components/filters';
import { Table } from '@/components/table';
import { HTag } from '@/components/ui/hTag';
import { notFound } from 'next/navigation';
import { AiOutlinePlus } from 'react-icons/ai';

export interface Campaign {
  campaigns: {
    id: number;
    title: string;
    city: string;
    state: string;
    locations: number;
    transports: number;
    display: string;
    budget: number;
    photos: string[];
  };
}

async function Home() {
  try {
    const res = await fetch('https://test-api.biterika.team/v1/campaigns/');
    const result: Campaign = await res.json();
    return (
      <section className="cabinet">
        <div className="cabinet-title">
          <HTag tag="h1">Компании</HTag>
          <AiOutlinePlus />
        </div>
        <Filters />
        <Table data={result.campaigns} />
      </section>
    );
  } catch (err) {
    notFound();
  }
}

export default Home;
