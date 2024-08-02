import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay styles
import "./BenefitsOfColabrating.css";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

export default function BenefitsColabratingSlider() {
  const slides = [
    {
      title: (
        <div className="grident-color-sub-title">
          Tension Free <br /> Business
        </div>
      ),
      image: "./images/Tention-free-business-slider-img.webp",
      alt:"Web development company | metablocktechnologies"
    },
    {
      title: "Your Business Our Commitment",
      image: "./images/Your-Business-Our-Commitment.webp",
      alt:"Grow with metablocktechnologies"
    },
    {

      title: "Partner With Us For Peace of Mind",
      image: "./images/Partner-With-Us-For-Peace-of-Mind.webp",
      alt:"Choose Us | metablocktechnologies"
    },
    {
      title: "Your Data is Safe With Us",
      image: "./images/Your-data-safe-with-us.webp",
      alt:'Data Safety |metablocktechnologies',
    },
    {
      title: "Be a Part of Our Spiritual Team",
      image: "./images/Be-a-Part-of-Our-spritual-team.webp",
      alt:"Hire Our software & Game and app development services | metablocktechnologies"
    },
    {
      title: "Get Genuine Suggestions",
      image: "./images/Blockchain-consulting-company-img.webp",
      alt:"Best Counsulting with us | metablocktechnologies"
    },
  ];

  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 911) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="benefits-slider-main-container">
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        slidesPerView={slidesPerView}
        spaceBetween={30} // Add space between slides
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="benefits-slider-box">
              <img title={slide.title} src={slide.image} alt="" />
              <h4 className="grident-color-sub-title">{slide.title}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
