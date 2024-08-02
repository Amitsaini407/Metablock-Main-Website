import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const WebApplication = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    // centerPadding: '0',
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="/images/who-we-are-bg.webp " width={'200px'} alt="Image 1" />
      </div>
      <div>
        <img src="/images/who-we-are-bg.webp " width={'200px'} alt="Image 1" />
      </div>
      <div>
        <img src="/images/who-we-are-bg.webp " width={'200px'} alt="Image 1" />
      </div>
      <div>
        <img src="/images/who-we-are-bg.webp " width={'200px'} alt="Image 1" />
      </div>
      <div>
        <img src="/images/who-we-are-bg.webp " width={'200px'} alt="Image 1" />
      </div>
      <div>
        <img src="/images/who-we-are-bg.webp " width={'200px'} alt="Image 1" />
      </div>

      {/* Add more slides as needed */}
    </Slider> 
  );
};

export default WebApplication;
