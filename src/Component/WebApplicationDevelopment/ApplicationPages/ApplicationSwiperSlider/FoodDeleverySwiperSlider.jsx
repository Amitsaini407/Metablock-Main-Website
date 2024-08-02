import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function FoodDeleverySwiperSlider() {
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
                    <img className='swiper-slider-images' src="./images/FoodDeliverysliderpic-1.webp" alt="FoodDeliverysliderpic-1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='swiper-slider-images' src="./images/FoodDeliverysliderpic-2.webp" alt="FoodDeliverysliderpic-2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='swiper-slider-images' src="./images/FoodDeliverysliderpic-3.webp" alt="FoodDeliverysliderpic-3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='swiper-slider-images' src="./images/FoodDeliverysliderpic-4.webp"  alt="FoodDeliverysliderpic-4"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='swiper-slider-images' src="./images/FoodDeliverysliderpic-5.webp"  alt="FoodDeliverysliderpic-5" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='swiper-slider-images' src="./images/FoodDeliverysliderpic-6.webp"  alt="FoodDeliverysliderpic-6"/>
                </SwiperSlide>

            </Swiper>
        </>
    );
}
