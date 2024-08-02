import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './ReactSlick.css';

// import required modules
import { Autoplay, Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules';

export default function WhyChooseSlider() {
  return (
    <>
      <Swiper

        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
        loop={true}
      // autoplay={{
      //   delay: 5000,
      //   disableOnInteraction: false,
      // }}
      >
        <SwiperSlide>
          <div className="col-lg-12">
            <div className="row gap-5 c-contant-1 d-flex justify-content-center">
              <div className="award-1 col-lg-4 p-0 px-1 pt-1">
                <div className="text-start text-white p-award-1 rounded-10 p-3">
                  {/* <h1 className="fs-4 year">YEARS of Work Exp.</h1> */}
                  <h3 className="text-warning">In-House Development</h3>
                  <p>
                    Our in-house developers provide us
                    with a competitive advantage by
                    understanding our clients needs and
                    providing tailored solutions.
                  </p>
                </div>
              </div>
              <div className="award-1 col-lg-4 p-0 px-1 pt-1">
                <div className="text-start text-white p-award-1 rounded-10 p-3">
                  <h3 className="text-warning">Using Latest
                    Technologies</h3>
                  <p>
                    {" "}
                    Our use of the latest technologies
                    enables us to offer cutting-edge
                    solutions. Our innovative approaches
                    ensure unparalleled service to our
                    clients.
                  </p>
                </div>
              </div>
              <div className="award-1 col-lg-4 p-0 px-1 pt-1 award-same-1">
                <div className="text-start text-white p-award-1 rounded-10 p-3">
                  <h3 className="text-warning">Testing Facility</h3>
                  <p>
                    Our dedicated testing facility ensures
                    rigorous quality control, setting us apart
                    with flawless software solutions and
                    unparalleled reliability in the market.                  </p>
                </div>
              </div>
              <div className="award-1 col-lg-4 p-0 px-1 pt-1 award-same-1">
                <div className="text-start text-white p-award-1 rounded-10 p-3">
                  <h3 className="text-warning">After-Sale Support</h3>
                  <p>

                    Our committed support staff puts the
                    needs of our clients first, establishing
                    enduring relationships based on
                    dependability and trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col-lg-12">
            <div className="row gap-5 c-contant-1 d-flex justify-content-center">
              <div className="award-1 col-lg-4 p-0 px-1 pt-1">
                <div className="text-start text-white p-award-1 rounded-10 p-3">
                  <h3 className="text-warning">Post Payment Terms</h3>
                  <p>
                    Post-payment conditions set us apart
                    from other IT companies by providing
                    clients with the highest level of
                    assurance and flexibility.
                  </p>
                </div>
              </div>

              <div className="award-1 col-lg-4 p-0 px-1 pt-1">
                <div className="text-start text-white p-award-1 rounded-10 p-3">
                  <h3 className="text-warning">On-Time Project
                    Delivery</h3>
                  <p>
                    We firmly believe that time is
                    money, and we are committed to
                    providing the project on the
                    predefined timeline.
                  </p>
                </div>
              </div>
              <div className="award-1 col-lg-4 p-0 px-1 pt-1 award-same-1">
                <div className="text-start text-white p-award-1 rounded-10 p-3">
                  <h3 className="text-warning">Expert Team & Religious Team</h3>
                  <p>
                    Our technical expertise and our staff's
                    religious commitment and dedication to
                    customer satisfaction set us apart.
                  </p>
                </div>
              </div>
              <div className="award-1 col-lg-4 p-0 px-1 pt-1 award-same-1">
                <div className="text-start text-white p-award-1 rounded-10 p-3">
                  <h3 className="text-warning">Cost Effective Development</h3>
                  <p>
                    Our focus on cost-effective development
                    enables us to deliver high-quality solutions
                    at competitive prices, setting us apart from
                    other IT firms in the market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* 
        <SwiperSlide>
          <div className="award-1 col-lg-4 p-0 px-1 pt-1">
            <div className="text-start text-white p-award-1 rounded-10 p-3">
              <h3 className="text-warning">Post Payment Terms</h3>
              <p>
                Post-payment conditions set us apart
                from other IT companies by providing
                clients with the highest level of
                assurance and flexibility.
              </p>
            </div>
          </div>
          <div className="award-1 col-lg-4 p-0 px-1 pt-1">
            <div className="text-start text-white p-award-1 rounded-10 p-3">
              <h3 className="text-warning">Using Latest
                Technologies</h3>
              <p>
                {" "}
                Our use of the latest technologies
                enables us to offer cutting-edge
                solutions. Our innovative approaches
                ensure unparalleled service to our
                clients.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="award-1 col-lg-4 p-0 px-1 pt-1">
            <div className="text-start text-white p-award-1 rounded-10 p-3">
              <h3 className="text-warning">Expert Team & Religious Team</h3>
              <p>
                Our technical expertise and our staff's
                religious commitment and dedication to
                customer satisfaction set us apart.
              </p>
            </div>
          </div>
          <div className="award-1 col-lg-4 p-0 px-1 pt-1">
            <div className="text-start text-white p-award-1 rounded-10 p-3">
              <h3 className="text-warning">Cost Effective Development</h3>
              <p>
                Our focus on cost-effective development
                enables us to deliver high-quality solutions
                at competitive prices.
              </p>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}



