import Link from 'next/link';
import TabSwiper from '@/components/common/TabSwiper';
import { naviList } from '@/mock/tabList';
import '@/styles/layout/header.scss';
import Image from 'next/image';

export default function LayoutHeader() {
  return (
    <header className="layout-header navibar">
      <div className="header-inner flex-justify-center">
        <Link className="text-none logo flex flex-center" href="/">
          <Image width="30" height="30" src="/logo.png" alt="로고" />
          YEOJIN
        </Link>
      </div>
      <div>
        <TabSwiper tabList={naviList} activeValue="chart" />
      </div>
    </header>
  );
}
