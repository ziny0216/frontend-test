'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import { TabItemType } from '@/types/common';
import '@/styles/components/tab.scss';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function TabSwiper({
  tabList,
  handleTabItem,
  activeValue,
}: {
  tabList: TabItemType[];
  activeValue?: string;
  handleTabItem?: (tab: TabItemType) => void;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [activeTab, setActiveTab] = useState(activeValue ?? '');
  useEffect(() => {
    console.log(pathname);
    const activeName = pathname === '/' ? '/' : pathname.replace('/', '');
    setActiveTab(activeName);
  }, [pathname]);

  const onClickTab = (tab: TabItemType, idx: number) => {
    setActiveTab(tab.value); // 활성화 탭 저장
    swiper?.slideTo(idx); // 클릭한 슬라이드 index 이동
    if (tab.type === 'a') {
      router.push(tab.value);
    } else {
      handleTabItem?.(tab);
    }
  };

  useEffect(() => {}, []);
  return (
    <div className="tab-list">
      <Swiper
        onSwiper={swiper => {
          setSwiper(swiper);
        }}
        spaceBetween={8}
        slidesPerView={'auto'}
      >
        {tabList.map((tab, idx) => (
          <SwiperSlide key={tab.value}>
            <button
              className={`tab-item ${activeTab === tab.value ? 'active' : ''}`}
              type="button"
              onClick={() => onClickTab(tab, idx)}
            >
              {tab.name}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
