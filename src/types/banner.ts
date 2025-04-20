export interface BannerItemType {
  id: number;
  title: string;
  url?: string;
  target?: '1' | '2';
  start_date?: string;
  end_date?: string;
  type: 'vote' | 'event' | 'etc';
}
