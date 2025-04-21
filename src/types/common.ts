import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface TabItemType {
  name: string;
  value: string;
  type: 'a' | 'button';
}

export type ButtonPropsType = {
  text: string;
  className: string;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export interface InfinitePropsType<T> {
  className?: string;
  title: string;
  subTitle?: string;
  fetchList: ({ pageParam }: { pageParam: number }) => Promise<{ data: T[] }>;
  renderItem: (item: T) => ReactNode;
  queryKey: string[];
  threshold?: number;
}
