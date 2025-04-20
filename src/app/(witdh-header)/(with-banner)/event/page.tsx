import EventList from '@/components/page/EventList';

export default function page() {
  return (
    <section className="event_section">
      <div className="inner">
        <EventList title={'이벤트'} />
      </div>
    </section>
  );
}
