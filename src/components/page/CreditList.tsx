'use client';

import CreditItem from '@/components/page/CreditItem';
import InfiniteList from '@/components/layout/InfiniteList';
import { CreditItemType } from '@/types/credit';

export default function CreditList() {
  const fetchCreditList = async ({ pageParam = 1 }) => {
    const res = await fetch(`/api/credit?page=${pageParam}&limit=10`);
    return res.json();
  };

  return (
    <InfiniteList<CreditItemType>
      className={' top-margin'}
      title={'💰 충전 내역'}
      queryKey={['credit']}
      fetchList={fetchCreditList}
      renderItem={credit => (
        <CreditItem {...credit} key={`credit-${credit.id}`} />
      )}
    />
  );
}
