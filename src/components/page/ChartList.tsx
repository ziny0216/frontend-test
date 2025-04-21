'use client';

import { ChartItemType } from '@/types/chart';
import InfiniteList from '@/components/layout/InfiniteList';
import ChartItem from '@/components/page/ChartItem';

export default function ChartList() {
  const fetchChartList = async ({ pageParam = 1 }) => {
    const res = await fetch(`/api/chart?page=${pageParam}&limit=10`);
    return res.json();
  };

  return (
    <InfiniteList<ChartItemType>
      title={'🌎 월드 차트'}
      queryKey={['chart']}
      fetchList={fetchChartList}
      renderItem={chart => <ChartItem {...chart} key={`chart-${chart.id}`} />}
    />
  );
}
