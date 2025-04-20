import { formatLocalString } from '@/utils/format';
import '@/styles/components/item.scss';
import { ChartItemType } from '@/types/chart';

export default function ChartItem(props: ChartItemType) {
  const getRankChange = (rank: number, prevRank: number) => {
    const diff = prevRank - rank;
    if (diff === 0) return '-';
    return diff > 0 ? `▲ ${diff}` : `▼ ${Math.abs(diff)}`;
  };

  const rankClass =
    props.prevRank > props.rank
      ? 'up'
      : props.prevRank < props.rank
        ? 'down'
        : '';

  return (
    <div className="chart-item flex flex-align-center">
      <div className="chart-img img-square-16">
        <img src="https://picsum.photos/300/200" alt="카드 이미지" />
      </div>
      <div className="card-content flex ">
        <p className="char-info chart-rank">
          <span className="rank">{props.rank}</span>
          <span className={`num ${rankClass}`}>
            {getRankChange(props.rank, props.prevRank)}
          </span>
        </p>
        <div className="char-info chart-artist">
          <span>{props.artist}</span>
          <span className="ellipsis-clamp">{props.agency}</span>
        </div>
        <p className="char-info chart-factor ml-auto">
          {formatLocalString(props.score)}
        </p>
      </div>
    </div>
  );
}
