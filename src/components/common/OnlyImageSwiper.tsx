'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { Pagination } from 'swiper/modules';
import '@/styles/components/banner.scss';

export default function OnlyImageSwiper() {
  return (
    <div className="only-img-swiper">
      <Swiper
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination]}
        pagination={{
          type: 'fraction',
        }}
      >
        <SwiperSlide>
          <Link className="text-inherit" href={`/store/1}`}>
            <div className="store-img img-wide">
              <img src="https://picsum.photos/300/200" alt="상품 배너 이미지" />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className="text-inherit" href={`/store/1}`}>
            <div className="store-img img-wide">
              <img src="https://picsum.photos/300/200" alt="상품 배너 이미지" />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className="text-inherit" href={`/store/1}`}>
            <div className="store-img img-wide">
              <img src="https://picsum.photos/300/200" alt="상품 배너 이미지" />
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
