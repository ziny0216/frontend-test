import { ReactNode } from 'react';
import LayoutHeader from '@/components/layout/LayoutHeader';
import LayoutFooter from '@/components/layout/LayoutFooter';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="wrapper">
      <LayoutHeader />
      {children}
      <LayoutFooter />
    </div>
  );
}
