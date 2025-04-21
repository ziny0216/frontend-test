import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="inner">
        <h2>⚠️ Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
    </section>
  );
}
