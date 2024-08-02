import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import './SwiperSliders.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function CabSwiperSlider() {
    return (
        <>
            <div style={{ textAlign: "center", marginTop: '30px' }}>
                <h1 style={{ textAlign: "center", fontWeight: "bold", fontFamily: "arial" }} className='Key-feature-heading'>Application Preview</h1>
            </div>

            <Swiper
                loop={true} // Enable infinite loop
                autoplay={{ delay: 3000 }} // Autoplay with 3-second delay
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
            >

                <SwiperSlide>
                    <img className='swiper-slider-images' src="./images/cabBookingsliderpic-1.webp" alt="cabBookingsliderpic-1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='swiper-slider-images' src="./images/cabBookingsliderpic-2.webp"  alt="cabBookingsliderpic-2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='swiper-slider-images' src="./images/cabBookingsliderpic-3.webp"  alt="cabBookingsliderpic-3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='swiper-slider-images' src="./images/cabBookingsliderpic-4.webp"   alt="cabBookingsliderpic-4"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='swiper-slider-images' src="./images/cabBookingsliderpic-5.webp"   alt="cabBookingsliderpic-5" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='swiper-slider-images' src="./images/cabBookingsliderpic-6.webp"   alt="cabBookingsliderpic-6"   />
                </SwiperSlide>

            </Swiper>
        </>
    );
}
