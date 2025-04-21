import '@/styles/components/badge.scss';

export default function Badge({
  size = 'md',
  color = 'pink',
}: {
  size?: 'md' | 'sm';
  color?: 'pink' | 'black' | 'gary';
}) {
  return (
    <span className={`${size === 'md' ? 'badge' : 'badge-sm'} badge-${color}`}>
      진행중
    </span>
  );
}
