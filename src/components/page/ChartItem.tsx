import { formatLocalString } from '@/utils/format';
import '@/styles/components/item.scss';

export default function ChartItem() {
  return (
    <div className="chart-item flex flex-align-center">
      <div className="chart-img img-square-16">
        <img src="https://picsum.photos/300/200" alt="카드 이미지" />
      </div>
      <div className="card-content flex ">
        <p className="char-info chart-rank">
          <span>1</span>
          <span>-</span>
        </p>
        <div className="char-info">
          <span>마크</span>
          <span>SM</span>
        </div>
        <p className="char-info chart-factor ml-auto">
          {formatLocalString(123123)}
        </p>
      </div>
    </div>
  );
}
