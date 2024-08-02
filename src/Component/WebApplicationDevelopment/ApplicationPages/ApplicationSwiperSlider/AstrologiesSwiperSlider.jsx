import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../../SoftwarePages/SwiperSlider/SwiperSlider.css';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function AstrologiesSwiperSlider() {
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
                    <img className='swiper-slider-images-1' src="./images/Astrologysliderpic-1.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='swiper-slider-images-1' src="./images/Astrologysliderpic-2.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='swiper-slider-images-1' src="./images/Astrologysliderpic-3.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='swiper-slider-images-1' src="./images/Astrologysliderpic-4.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='swiper-slider-images-1' src="./images/Astrologysliderpic-5.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='swiper-slider-images-1' src="./images/Astrologysliderpic-6.webp" />
                </SwiperSlide>


            </Swiper>
        </>
    );
}
