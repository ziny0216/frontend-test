import '@/styles/components/list.scss';
import Spinner from '@/components/common/Spinner';
import ListContainer from '@/components/layout/ListContainer';
import { useEffect, useRef } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { InfinitePropsType } from '@/types/common';

export default function InfiniteList<T>({
  className,
  title,
  subTitle,
  fetchList,
  renderItem,
  queryKey,
  threshold = 1.0,
}: InfinitePropsType<T>) {
  const infiniteRef = useRef<HTMLDivElement | null>(null);
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey,
      queryFn: fetchList,
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
        threshold: threshold,
      },
    );

    const el = infiniteRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, [hasNextPage, isFetchingNextPage]);
  return (
    <ListContainer className={className} title={title} subTitle={subTitle}>
      {data?.pages.map(page => page.data.map(item => renderItem(item)))}
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
