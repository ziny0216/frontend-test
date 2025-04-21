import OnlyImageSwiper from '@/components/common/OnlyImageSwiper';
import ProductList from '@/components/page/ProductList';

export default function page() {
  return (
    <section className="store_section">
      <div className="inner">
        <OnlyImageSwiper />
        <div>
          <ProductList title={'상품'}></ProductList>
        </div>
      </div>
    </section>
  );
}
