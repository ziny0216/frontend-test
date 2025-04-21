'use client';

import { BannerItemType } from '@/types/banner';
import Link from 'next/link';
import InfiniteList from '@/components/layout/InfiniteList';
import CardItem from '@/components/page/CardItem';

export default function EventList() {
  const fetchEventList = async ({ pageParam = 1 }) => {
    const res = await fetch(`/api/event?page=${pageParam}&limit=10`);
    return res.json();
  };

  return (
    <InfiniteList<BannerItemType>
      title={'이벤트'}
      className={'grid'}
      queryKey={['event']}
      fetchList={fetchEventList}
      renderItem={event => (
        <Link
          key={`event-${event.id}`}
          href={`/event/${event.id}`}
          className="text-inherit"
        >
          <CardItem {...event} />
        </Link>
      )}
    />
  );
}
