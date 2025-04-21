import '@/styles/components/list.scss';
import { ReactNode } from 'react';

export default function ListContainer({
  title = '리스트',
  className,
  children,
}: {
  title?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`list-container ${className || ''}`}>
      {title && <div className="list-title">{title}</div>}
      <div className="list-content">{children}</div>
    </div>
  );
}
