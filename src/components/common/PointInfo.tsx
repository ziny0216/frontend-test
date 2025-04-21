import Button from '@/components/common/Button';
import '@/styles/pages/charge.scss';
import { formatLocalString } from '@/utils/format';

export default function PointInfo() {
  return (
    <div className="point-box">
      <div className="point-info">
        <span className="title">보유 크레딧</span>
        <p className="point">{formatLocalString(1000000)}</p>
      </div>
      <Button className={'btn btn-gray'} text={'충전하기'} />
    </div>
  );
}
