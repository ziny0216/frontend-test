export interface ChartItemType {
  id: number;
  artist: string; // 아티스트명
  title: string; // 곡 제목
  agency: string; // 소속사
  rank: number; // 순위
  score: number; // 정수로 된 지수
  prevRank: number; // 이전 순위
}

export interface ChartResponseType {
  page: number;
  limit: number;
  total: number;
  data: ChartItemType[] | [];
}
