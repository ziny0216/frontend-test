import '@/styles/components/item.scss';
import { PostItemType } from '@/types/post';
import dayjs from 'dayjs';

export default function PostItem(props: PostItemType) {
  return (
    <div className="post-item flex">
      <div className="post-img img-full">
        <img
          src={`https://picsum.photos/seed/${props.id}/300`}
          alt={`${props.title} 배너 이미지`}
        />
      </div>
      <div className="post-content flex flex-col">
        <div className="post-txt ">
          <h5 className="post-title ellipsis1">{props.title}</h5>
          <p className="post-desc ellipsis3">{props.description}</p>
        </div>
        <div className="post-info">
          <span className="writer">{props.writer}</span>
          <span className="date">
            {dayjs(props.date).format('YYYY.MM.DD hh:mm')}
          </span>
        </div>
      </div>
    </div>
  );
}
