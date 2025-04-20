'use client';

import ListContainer from '@/components/layout/ListContainer';
import ChartItem from '@/components/page/ChartItem';
import { ChartItemType } from '@/types/chart';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import Spinner from '@/components/common/Spinner';

export default function ChartList({ title }: { title: string }) {
  const infiniteRef = useRef<HTMLDivElement | null>(null);

  const fetchChartList = async ({ pageParam = 1 }) => {
    const res = await fetch(`/api/chart?page=${pageParam}&limit=10`);
    return res.json();
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['chart'],
      queryFn: fetchChartList,
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
    <ListContainer title={title}>
      {data?.pages.map((page, pageIndex) =>
        page.data.map((chart: ChartItemType) => (
          <ChartItem key={`chart-${chart.id}`} {...chart} />
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
