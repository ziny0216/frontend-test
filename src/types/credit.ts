export interface CreditItemType {
  id: number;
  type: 'use' | 'charge' | 'reward';
  memo: string;
  date: string;
  credit: number;
  rest_credit: number;
}
