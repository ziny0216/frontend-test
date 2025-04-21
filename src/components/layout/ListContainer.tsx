import '@/styles/components/list.scss';
import { ReactNode } from 'react';

export default function ListContainer({
  title = '리스트',
  subTitle,
  className,
  children,
}: {
  title?: string;
  subTitle?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`list-container ${className || ''}`}>
      <div className="list-title">
        {title && <h1>{title}</h1>}
        {subTitle && <h2 className="sub-title">{subTitle}</h2>}
      </div>

      <div className="list-content">{children}</div>
    </div>
  );
}
