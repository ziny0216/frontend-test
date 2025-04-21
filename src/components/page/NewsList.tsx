'use client';

import ListContainer from '@/components/layout/ListContainer';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import PostItem from '@/components/page/PostItem';
import { PostItemType } from '@/types/post';
import InfiniteList from '@/components/layout/InfiniteList';

export default function NewsList() {
  const fetchHotNewsList = async () => {
    const res = await fetch('/api/news/hot');
    return res.json();
  };

  const { data: hotNewsList } = useQuery({
    queryKey: ['hot-news'],
    queryFn: fetchHotNewsList,
  });

  const fetchNewsList = async ({ pageParam = 1 }) => {
    const res = await fetch(`/api/news?page=${pageParam}&limit=10`);
    return res.json();
  };

  return (
    <div className="sticky-wrapper">
      <InfiniteList<PostItemType>
        title={'NEWS'}
        className={'left'}
        queryKey={['news']}
        fetchList={fetchNewsList}
        renderItem={news => (
          <Link
            key={`news-${news.id}`}
            href={`/news/${news.id}`}
            className="text-inherit"
          >
            <PostItem {...news} />
          </Link>
        )}
      />

      <ListContainer title={'🔥 HOT NEWS'} className={'right'}>
        {hotNewsList?.map((news: PostItemType) => (
          <Link
            key={`hot-news-${news.id}`}
            className="text-inherit"
            href={`/news/${news.id}`}
          >
            <PostItem {...news} />
          </Link>
        ))}
      </ListContainer>
    </div>
  );
}
