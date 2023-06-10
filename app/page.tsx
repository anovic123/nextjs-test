import { Table } from '@/components/table';
import { HTag } from '@/components/ui/hTag';
import { notFound } from 'next/navigation';

export interface Campaign {
  campaigns: {
    id: number
    title: string
    city: string
    state: string
    locations: number
    transports: number
    display: string
    budget: number
    photos: string[]
  }
}

async function Home() {
  try {
    const res = await fetch('https://test-api.biterika.team/v1/campaigns/');
    const result: Campaign = await res.json();
    return (
      <main>
        <HTag tag="h2">Компании</HTag>
        {/* Filter */}
        <Table data={result.campaigns} />
      </main>
    );
  } catch (err) {
    notFound();
  }
}

export default Home;
