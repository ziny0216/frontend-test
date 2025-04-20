'use client';
import { useEffect, useState } from 'react';
import ListContainer from '@/components/layout/ListContainer';
import { ChartItemType } from '@/types/chart';
import ChartItem from '@/components/page/ChartItem';

export default function ChartList({ title }: { title: string }) {
  const [chartList, setChartList] = useState<ChartItemType[]>([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchChart = async () => {
      const res = await fetch('/api/chart?page=1&limit=10');
      const { data } = await res.json();

      if (data < 10) {
        alert('마지막 페이지 입니다.');
      }

      setChartList(prev => [...data, ...prev]);
    };

    fetchChart();
  }, []);

  return (
    <ListContainer title={title}>
      {chartList.map(chart => (
        <ChartItem key={`chart-${chart.id}`} {...chart} />
      ))}
    </ListContainer>
  );
}
