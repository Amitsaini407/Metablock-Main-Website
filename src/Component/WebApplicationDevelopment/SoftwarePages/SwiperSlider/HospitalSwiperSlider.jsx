import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './SwiperSlider.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function HospitalSwiperSlider() {
    return (
        <>
            <div style={{ textAlign: "center", marginTop: '30px' }}>
                <h1 style={{ textAlign: "center", fontWeight: "bold", fontFamily: "arial" }} className='Key-feature-heading'>Software Preview</h1>
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
                    <img src="./images/hoshpitalslider-1.webp" alt='hoshpitalslider-1'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/hoshpitalslider-2.webp" alt='hoshpitalslider-2'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/hoshpitalslider-3.webp" alt='hoshpitalslider-3'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/hoshpitalslider-4.webp" alt='hoshpitalslider-4'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/hoshpitalslider-5.webp" alt='hoshpitalslider-5'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/hoshpitalslider-6.webp" alt='hoshpitalslider-6'/>
                </SwiperSlide>

            </Swiper>
        </>
    );
}
