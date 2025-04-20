import { ReactNode } from 'react';
import MainBannerSwiper from '@/components/common/MainBannerSwiper';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <MainBannerSwiper />
      {children}
    </>
  );
}
