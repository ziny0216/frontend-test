import { ButtonHTMLAttributes } from 'react';

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
