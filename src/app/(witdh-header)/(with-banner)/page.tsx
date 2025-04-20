import ChartList from '@/components/page/ChartList';

export default function page() {
  return (
    <section className="home_section">
      <article className="bg-gray">
        <div className="inner">
          <ChartList title={'🌎 월드 차트'} />
        </div>
      </article>
    </section>
  );
}
