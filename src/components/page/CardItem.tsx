import dayjs from 'dayjs';
import '@/styles/components/item.scss';
import '@/styles/components/button.scss';
import Badge from '@/components/common/Badge';
import { BannerItemType } from '@/types/banner';

export default function CardItem(props: BannerItemType) {
  return (
    <div className="card-item">
      <div className="card-img img-wide">
        <img
          src={`https://picsum.photos/seed/${props.id}/1500`}
          alt={`${props.title} 배너 이미지`}
        />
        <Badge />
      </div>
      <div className="card-content flex flex-col">
        <div className="title flex flex-between-center">
          <h6 className="ellipsis1">{props.title}</h6>
          {props.type !== 'etc' && (
            <span className="btn-sm btn-border-pink btn-rounded">
              {props.type === 'vote' ? '투표하기' : '이벤트가기'}
            </span>
          )}
        </div>
        {(props.start_date || props.end_date) && (
          <p className="date">
            <span>{dayjs(props.start_date).format('YYYY.MM.DD hh:mm')}</span>
            <span>~ {dayjs(props.end_date).format('YYYY.MM.DD hh:mm')}</span>
          </p>
        )}
      </div>
    </div>
  );
}
