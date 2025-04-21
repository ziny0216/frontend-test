'use client';

import ListContainer from '@/components/layout/ListContainer';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import Spinner from '@/components/common/Spinner';
import Link from 'next/link';
import { PostItemType } from '@/types/post';
import PostItem from '@/components/page/PostItem';

export default function WhookList() {
  const infiniteRef = useRef<HTMLDivElement | null>(null);

  const fetchWhookList = async ({ pageParam = 1 }) => {
    const res = await fetch(`/api/whook?page=${pageParam}&limit=10`);
    return res.json();
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['whook'],
      queryFn: fetchWhookList,
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
    <ListContainer
      className={'grid'}
      title={'📌 4월 4주차 주제'}
      subTitle={'여러분들의 포토카드를 자랑해주세요😎'}
    >
      {data?.pages.map((page, pageIndex) =>
        page.data.map((whook: PostItemType) => (
          <Link className="text-inherit" href={`/event/${whook.id}`}>
            <PostItem type={'col'} key={`event-${whook.id}`} {...whook} />
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
