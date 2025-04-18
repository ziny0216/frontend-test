import Link from 'next/link';
import TabSwiper from '@/components/common/TabSwiper';
import { naviList } from '@/mock/tabList';
import '@/styles/layout/header.scss';

export default function LayoutHeader() {
  return (
    <header className="layout_header">
      <div className="header_inner flex-justify-center">
        <Link className="text-none" href="/">
          로고
        </Link>
      </div>
      <TabSwiper tabList={naviList} />
    </header>
  );
}
