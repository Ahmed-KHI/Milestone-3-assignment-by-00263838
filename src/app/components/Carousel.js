'use client'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow ,Pagination} from 'swiper/modules';
import Image from 'next/image';

export default function Carousel() {
  return (
   <div className='w-[400px] h-[430px]'>
     <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        // pagination={{clickable:true}}
        autoplay={{
          delay:2500,
          disableOnInteraction:false
        }}
      >
         <SwiperSlide>
        <Image src={'/home-book-1.png'} alt='image' width={300} height={180}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={'/book-10.jpg'} alt='image' width={300} height={180}/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={'/home-book-4.png'} alt='image' width={300} height={180}/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={'/book-6.jpg'} alt='image' width={300} height={180}/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={'/book-1.jpg'} alt='image' width={300} height={180}/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={'/home-book-2.png'} alt='image' width={300} height={180}/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={'/discount-book-2.png'} alt='image' width={300} height={180}/>
        </SwiperSlide>
        <SwiperSlide>
         <Image src={'/book-9.jpg'} alt='image' width={300} height={180}/>
        </SwiperSlide>
        <SwiperSlide>
         <Image src={'/book-2.jpg'} alt='image' width={300} height={180}/>
        </SwiperSlide>
      </Swiper>
    </>
   </div>
  );
}