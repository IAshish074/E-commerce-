import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import slideBanner from '../../assets/fullstack-ecommerce/images/slideBanner1.jpg'
import slideBanner2 from '../../assets/fullstack-ecommerce/images/slideBanner2.jpg'
function HomeSlider(){

    return (
      <>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slideBanner} alt="" className="!w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slideBanner} alt="" className="!w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slideBanner2} alt="" className="!w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slideBanner} alt="" className="!w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slideBanner2} alt="" className="!w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slideBanner} alt="" className="!w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slideBanner2} alt="" className="!w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slideBanner2} alt="" className="!w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slideBanner2} alt="" className="!w-full" />
          </SwiperSlide>
        </Swiper>
      </>
    );
}

export default HomeSlider