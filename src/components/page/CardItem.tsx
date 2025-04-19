import dayjs from 'dayjs';
import '@/styles/components/item.scss';
import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';

export default function CardItem() {
  return (
    <div className="card-item">
      <div className="card-img img-wide">
        <img src="https://picsum.photos/1500" alt="카드 이미지" />
        <Badge />
      </div>
      <div className="card-content flex flex-col">
        <div className="title flex flex-between-center">
          <h6 className="ellipsis1">
            [M COUNTDOWN] 10월 2주차 엠사 사전 녹화 예약
          </h6>
          <Button
            text={'투표하기'}
            className={'btn-sm btn-border-pink btn-rounded'}
          />
        </div>
        <p className="date">
          {dayjs().format('YYYY.MM.DD hh:mm')}~
          {dayjs().format('YYYY.MM.DD hh:mm')}
        </p>
      </div>
    </div>
  );
}
