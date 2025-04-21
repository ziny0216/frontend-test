import Badge from '@/components/common/Badge';
import '@/styles/components/item.scss';
import { CreditItemType } from '@/types/credit';
import dayjs from 'dayjs';
import { formatLocalString } from '@/utils/format';

export default function CreditItem(props: CreditItemType) {
  return (
    <div className="credit-item">
      <p className="credit-info top">
        {props.type === 'use' ? (
          <Badge text={'사용'} size={'md'} color={'gray'} />
        ) : (
          <Badge text={'충전/적립'} size={'md'} color={'pink'} />
        )}
      </p>
      <p className="credit-info middle">
        <span className="ellipsis1">{props.memo}</span>
        <span>{formatLocalString(props.credit)} Credit</span>
      </p>
      <p className="credit-info btm">
        <span>잔여 {formatLocalString(props.rest_credit)} Credit</span>
        <span className="date">
          {dayjs(props.date).format('YYYY.MM.DD hh:mm')}
        </span>
      </p>
    </div>
  );
}
