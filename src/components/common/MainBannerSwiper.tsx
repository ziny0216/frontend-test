'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import CardItem from '@/components/page/CardItem';
import '@/styles/components/banner.scss';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { BannerItemType } from '@/types/banner';

export default function MainBannerSwiper() {
  const fetchBannerList = async () => {
    const res = await fetch('/api/banner');
    return res.json();
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['banner'],
    queryFn: fetchBannerList,
  });

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>에러 발생!</p>;
  return (
    <div className="main-banner">
      <Swiper
        pagination={{
          clickable: true,
        }}
        centeredSlides
        modules={[Pagination, Autoplay]}
        loop
        spaceBetween={8}
        autoHeight
        slidesPerView={1.1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {data.map((banner: BannerItemType) => (
          <SwiperSlide>
            {banner.url ? (
              <Link
                className="text-inherit"
                href={banner.url}
                target={banner.target === '1' ? '_blank' : '_self'}
              >
                <CardItem {...banner} />
              </Link>
            ) : (
              <CardItem {...banner} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
