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

export default function InventroySwiperSlider() {
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
                    <img src="./images/InventroySliderpic-1.webp" alt='InventroySliderpic-1'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/InventroySliderpic-2.webp" alt='InventroySliderpic-2'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/InventroySliderpic-3.webp" alt='InventroySliderpic-3'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/InventroySliderpic-4.webp" alt='InventroySliderpic-4'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/InventroySliderpic-5.webp" alt='InventroySliderpic-5'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/InventroySliderpic-6.webp" alt='InventroySliderpic-6'/>
                </SwiperSlide>


            </Swiper>
        </>
    );
}
