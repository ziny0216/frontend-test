'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import CardItem from '@/components/page/CardItem';
import '@/styles/components/banner.scss';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Link from 'next/link';

export default function MainBannerSwiper() {
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
        slidesPerView={1.1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Link
            className="text-inherit"
            href={'https://www.hanteochart.com/'}
            target="_blank"
          >
            <CardItem />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            className="text-inherit"
            href={'https://www.hanteochart.com/'}
            target="_blank"
          >
            <CardItem />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            className="text-inherit"
            href={'https://www.hanteochart.com/'}
            target="_blank"
          >
            <CardItem />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            className="text-inherit"
            href={'https://www.hanteochart.com/'}
            target="_blank"
          >
            <CardItem />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            className="text-inherit"
            href={'https://www.hanteochart.com/'}
            target="_blank"
          >
            <CardItem />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
