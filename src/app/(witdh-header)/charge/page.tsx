import PointInfo from '@/components/common/PointInfo';
import CreditList from '@/components/page/CreditList';

export default function page() {
  return (
    <section className="charge_section">
      <article>
        <div className="inner">
          <PointInfo />
          <CreditList />
        </div>
      </article>
    </section>
  );
}
