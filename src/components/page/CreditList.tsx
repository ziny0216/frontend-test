'use client';

import ListContainer from '@/components/layout/ListContainer';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import Spinner from '@/components/common/Spinner';
import CreditItem from '@/components/page/CreditItem';
import { CreditItemType } from '@/types/credit';

export default function CreditList({ title }: { title?: string }) {
  const infiniteRef = useRef<HTMLDivElement | null>(null);

  const fetchCreditList = async ({ pageParam = 1 }) => {
    const res = await fetch(`/api/credit?page=${pageParam}&limit=10`);
    return res.json();
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['credit'],
      queryFn: fetchCreditList,
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
    <ListContainer className={' top-margin'} title={'💰 충전 내역'}>
      {data?.pages.map((page, pageIndex) =>
        page.data.map((credit: CreditItemType) => (
          <CreditItem key={`event-${credit.id}`} {...credit} />
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
