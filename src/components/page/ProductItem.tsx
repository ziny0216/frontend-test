import '@/styles/components/item.scss';
import { ProductItemType } from '@/types/product';
import Badge from '@/components/common/Badge';
import { formatLocalString } from '@/utils/format';

export default function ProductItem(props: ProductItemType) {
  return (
    <div className="prod-item">
      <div className="prod-img img-square-8">
        <img
          src={`https://picsum.photos/seed/${props.prod_title}/300/200`}
          alt="카드 이미지"
        />
      </div>
      <div className="prod-content flex">
        <p className="prod-title  ">
          {props.stock <= 5 && (
            <Badge size={'sm'} color={'gray'} text={'품절 임박'} />
          )}

          <span className="title ellipsis-clamp">{props.prod_title}</span>
        </p>
        <div className="prod-price">
          <span className="percent">{props.discount_percent}</span>
          <span className="sale-price ml-auto">
            {formatLocalString(props.sale_price)}원
          </span>
          <span className="price"> {formatLocalString(props.price)}원</span>
        </div>
      </div>
    </div>
  );
}
