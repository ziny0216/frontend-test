import { ReactNode } from 'react';
import LayoutHeader from '@/components/layout/LayoutHeader';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="wrapper">
      <LayoutHeader />
      {children}
    </div>
  );
}
