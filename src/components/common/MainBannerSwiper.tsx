'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import CardItem from '@/components/page/CardItem';
import '@/styles/components/banner.scss';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

export default function MainBannerSwiper() {
  return (
    <div className="main_banner">
      <Swiper
        pagination={{
          clickable: true,
        }}
        centeredSlides
        modules={[Pagination, Autoplay]}
        loop
        spaceBetween={8}
        slidesPerView={1.1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <CardItem />
        </SwiperSlide>
        <SwiperSlide>
          <CardItem />
        </SwiperSlide>
        <SwiperSlide>
          <CardItem />
        </SwiperSlide>
        <SwiperSlide>
          <CardItem />
        </SwiperSlide>
        <SwiperSlide>
          <CardItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
