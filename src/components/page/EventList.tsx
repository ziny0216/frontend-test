'use client';

import ListContainer from '@/components/layout/ListContainer';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import Spinner from '@/components/common/Spinner';
import CardItem from '@/components/page/CardItem';
import { BannerItemType } from '@/types/banner';
import Link from 'next/link';

export default function EventList({ title }: { title: string }) {
  const infiniteRef = useRef<HTMLDivElement | null>(null);

  const fetchEventList = async ({ pageParam = 1 }) => {
    const res = await fetch(`/api/event?page=${pageParam}&limit=10`);
    return res.json();
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['chart'],
      queryFn: fetchEventList,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.data.length < 10 ? undefined : allPages.length + 1;
      },
      initialPageParam: 1,
    });

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      {
        threshold: 1.0,
      },
    );

    const el = infiniteRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, [hasNextPage, isFetchingNextPage]);

  return (
    <ListContainer className={'grid'} title={title}>
      {data?.pages.map((page, pageIndex) =>
        page.data.map((event: BannerItemType) => (
          <Link className="text-inherit" href={`/event/${event.id}`}>
            <CardItem key={`event-${event.id}`} {...event} />
          </Link>
        )),
      )}

      <div ref={infiniteRef} style={{ height: 1 }} />
      {isFetchingNextPage && (
        <div>
          <Spinner size={24} />
          로딩 중...
        </div>
      )}
    </ListContainer>
  );
}
