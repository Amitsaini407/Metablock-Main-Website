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

export default function SwiperSlider() {
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
                    <img src="./images/1-Dashboard (1).webp" alt='Dashboard' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/11-Stock Report.webp" alt='Stock%20Report' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/1-Dashboard.webp" alt='Dashboard' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/p2.webp" alt='posking'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/PreviewScreenshots.webp" alt='PreviewScreenshots'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/04_student_profile.webp" alt='04_student_profile' />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
