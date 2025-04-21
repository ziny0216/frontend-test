'use client';

import InfiniteList from '@/components/layout/InfiniteList';
import PostItem from '@/components/page/PostItem';
import { PostItemType } from '@/types/post';
import Link from 'next/link';

export default function WhookList() {
  const fetchWhookList = async ({ pageParam = 1 }) => {
    const res = await fetch(`/api/whook?page=${pageParam}&limit=10`);
    return res.json();
  };

  return (
    <InfiniteList<PostItemType>
      title={'📌 4월 4주차 주제'}
      className={'grid'}
      subTitle={'여러분들의 포토카드를 자랑해주세요😎'}
      queryKey={['whook']}
      fetchList={fetchWhookList}
      renderItem={whook => (
        <Link
          key={`whook-${whook.id}`}
          href={`/whook/${whook.id}`}
          className="text-inherit"
        >
          <PostItem type="col" {...whook} />
        </Link>
      )}
    />
  );
}
