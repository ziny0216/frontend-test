import MainBannerSwiper from '@/components/common/MainBannerSwiper';
import ChartItem from '@/components/page/ChartItem';
import ListContainer from '@/components/layout/ListContainer';

export default function page() {
  return (
    <section className="home_section">
      <MainBannerSwiper />
      <article className="bg-gray">
        <div className="inner">
          <ListContainer title="🌎 월드 차트">
            <ChartItem />
          </ListContainer>
        </div>
      </article>
    </section>
  );
}
