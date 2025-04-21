import Badge from '@/components/common/Badge';
import '@/styles/components/item.scss';

export default function CreditItem() {
  return (
    <div className="credit-item">
      <p className="credit-info top">
        <Badge text={'충전'} size={'md'} color={'pink'} />
        {/*<Badge text={'사용'} size={'md'} color={'gray'} />*/}
        <span className="date">2024.02.13 12:00 </span>
      </p>
      <p className="credit-info middle">
        <span>앨범 할인</span>
        <span>5000Credit</span>
      </p>
      <p className="credit-info btm">
        <span>잔여 금액 100Credit</span>
      </p>
    </div>
  );
}
