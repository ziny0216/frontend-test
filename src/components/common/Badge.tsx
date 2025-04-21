import '@/styles/components/badge.scss';

export default function Badge({
  size = 'md',
  color = 'pink',
  text = '진행중',
}: {
  size?: 'md' | 'sm';
  color?: 'pink' | 'black' | 'gray';
  text?: string;
}) {
  return (
    <span className={`${size === 'md' ? 'badge' : 'badge-sm'} badge-${color}`}>
      {text}
    </span>
  );
}
