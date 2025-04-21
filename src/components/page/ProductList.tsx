'use client';

import Link from 'next/link';
import InfiniteList from '@/components/layout/InfiniteList';
import ProductItem from '@/components/page/ProductItem';
import { ProductItemType } from '@/types/product';

export default function ProductList() {
  const fetchProductList = async ({ pageParam = 1 }) => {
    const res = await fetch(`/api/product?page=${pageParam}&limit=10`);
    return res.json();
  };

  return (
    <InfiniteList<ProductItemType>
      title={'상품'}
      className={'grid-4 top-margin'}
      queryKey={['product']}
      fetchList={fetchProductList}
      renderItem={prod => (
        <Link key={`prod-${prod.id}`} href={`/prod`} className="text-inherit">
          <ProductItem {...prod} />
        </Link>
      )}
    />
  );
}
