'use client';

import ListContainer from '@/components/layout/ListContainer';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import Spinner from '@/components/common/Spinner';
import Link from 'next/link';
import PostItem from '@/components/page/PostItem';
import { PostItemType } from '@/types/post';

export default function NewsList() {
  const infiniteRef = useRef<HTMLDivElement | null>(null);

  const fetchHotNewsList = async () => {
    const res = await fetch('/api/news/hot');
    return res.json();
  };

  const {
    data: hotNewsList,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['hot-news'],
    queryFn: fetchHotNewsList,
  });

  const fetchNewsList = async ({ pageParam = 1 }) => {
    const res = await fetch(`/api/news?page=${pageParam}&limit=10`);
    return res.json();
  };

  const {
    data: newsList,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['news'],
    queryFn: fetchNewsList,
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
    <div className="sticky-wrapper">
      <ListContainer title={'NEWS'} className={'left'}>
        {newsList?.pages.map((page, pageIndex) =>
          page.data.map((news: PostItemType) => (
            <Link className="text-inherit" href={`/news/${news.id}`}>
              <PostItem key={`news-${news.id}`} {...news} />
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

      <ListContainer title={'🔥 HOT NEWS'} className={'right'}>
        {hotNewsList?.map((news: PostItemType) => (
          <Link className="text-inherit" href={`/news/${news.id}`}>
            <PostItem key={`hot-news-${news.id}`} {...news} />
          </Link>
        ))}

        <div ref={infiniteRef} style={{ height: 1 }} />
        {isFetchingNextPage && (
          <div>
            <Spinner size={24} />
            로딩 중...
          </div>
        )}
      </ListContainer>
    </div>
  );
}
