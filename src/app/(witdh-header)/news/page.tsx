import PostItem from '@/components/page/PostItem';
import '@/styles/pages/news.scss';

export default function page() {
  return (
    <section className="news_section">
      <div className="inner">
        <div className="news-list recent-news">
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />

          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />

          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />

          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />

          <PostItem />
          <PostItem />
          <PostItem />
        </div>
        <div className="news-list popular-news">
          <PostItem />
          <PostItem />
          <PostItem />
        </div>
      </div>
    </section>
  );
}
