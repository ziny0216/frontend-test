'use client';

import ListContainer from '@/components/layout/ListContainer';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import Spinner from '@/components/common/Spinner';
import ProductItem from '@/components/page/ProductItem';
import { ProductItemType } from '@/types/product';
import Link from 'next/link';

export default function ProductList({ title }: { title?: string }) {
  const infiniteRef = useRef<HTMLDivElement | null>(null);

  const fetchProductList = async ({ pageParam = 1 }) => {
    const res = await fetch(`/api/product?page=${pageParam}&limit=10`);
    return res.json();
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['product'],
      queryFn: fetchProductList,
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
    <ListContainer className={'grid-4 top-margin'} title={title}>
      {data?.pages.map((page, pageIndex) =>
        page.data.map((prod: ProductItemType) => (
          <Link className="text-inherit" href={`/product/${prod.id}`}>
            <ProductItem {...prod} />
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
