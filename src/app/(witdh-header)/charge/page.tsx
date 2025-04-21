import PointInfo from '@/components/common/PointInfo';
import CreditItem from '@/components/page/CreditItem';

export default function page() {
  return (
    <section className="charge_section">
      <article>
        <div className="inner">
          <PointInfo />
          <CreditItem />
          <CreditItem />
          <CreditItem />
          <CreditItem />
        </div>
      </article>
    </section>
  );
}
