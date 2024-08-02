import React, { Component } from "react";
import Slider from "react-slick";
import "./ReactSlick.css";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      responsive: [
        {
          breakpoint: 911,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],

      //    cssEase: "linear"
    };
    return (
      <div className="slider-main-div">
        <h2 class="title1">Testimonials from Delighted Clients</h2>
        <div className="slider-div-1">
          <Slider {...settings}>
            <div>
              <div className="item testimonial_resposive ">
                <img
                  src="./SGimage/userpic.webp"
                  className="img-fluid user_img"
                  alt="Testimonials"
                  title="Testimonials"
                />
                <div className="testMoLst">
                  <div className="testMoImgBg testimonial_rating">
                    <div className="head_sec">
                      <p className="sub_title">Naveen Singh</p>
                      <p className="sub_title1"></p>
                    </div>
                    <div className="star_rating">⭐⭐⭐⭐⭐</div>

                  </div>
                  <p className="sub_contents">
                    "For our company, working with MetaBlock was revolutionary. Our vision was realized via the skill and commitment of their team, who produced a website and app that surpassed our expectations. Strongly advised!"
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="item testimonial_resposive">
                <img
                  src="./SGimage/userpic.webp"
                  className="img-fluid user_img"
                  alt="Testimonials"
                  title="Testimonials"
                />
                <div className="testMoLst">
                  <div className="testMoImgBg testimonial_rating">
                    <div className="head_sec">
                      <p className="sub_title">Akash Sharma</p>
                      <p className="sub_title1">
                        {/* Business Developer at SF Capital */}
                      </p>
                    </div>

                    <div className="star_rating">⭐⭐⭐⭐⭐</div>

                  </div>
                  <p className="sub_contents">
                    "I contacted MetaBlock when I wanted my website in a very
                    short duration. Everyone else said that no one can deliver
                    my website that fast, but MetaBlock delivered the website on
                    time. They literally saved my small business. I can’t thank
                    them enough."
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="item testimonial_resposive">
                <img
                  src="./SGimage/userpic.webp"
                  className="img-fluid user_img"
                  alt="Testimonials"
                  title="Testimonials"
                />
                <div className="testMoLst">
                  <div className="testMoImgBg testimonial_rating">
                    <div className="head_sec">
                      <p className="sub_title">Neha Gupta</p>
                      <p className="sub_title1">
                        {/* Business Developer at SF Capital */}
                      </p>
                    </div>
                    <div className="star_rating">⭐⭐⭐⭐⭐</div>

                  </div>
                  <p className="sub_contents">
                    "One of the best choices we ever made for the development of our website and app was to use MetaBlock. The product genuinely embodies our corporate identity, thanks to the team's experience and dedication to customer satisfaction.
                    "
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="item testimonial_resposive">
                <img
                  src="./SGimage/userpic.webp"
                  className="img-fluid user_img"
                  alt="Testimonials"
                  title="Testimonials"
                />
                <div className="testMoLst">
                  <div className="testMoImgBg testimonial_rating">
                    <div className="head_sec">
                      <p className="sub_title">Rajesh Kumar</p>
                      <p className="sub_title1">
                        {/* Business Developer at SF Capital */}
                      </p>
                    </div>

                    <div className="star_rating">⭐⭐⭐⭐⭐</div>

                  </div>
                  <p className="sub_contents">
                    "The expertise and inventiveness of the MetaBlock team astounded us. They took our ideas and created an amazing website and app that have received positive feedback from users and other professionals in the field. Strongly advised due of their professionalism and dependability!"
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="item testimonial_resposive">
                <img
                  src="./SGimage/userpic.webp"
                  className="img-fluid user_img"
                  alt="Testimonials"
                  title="Testimonials"
                />
                <div className="testMoLst">
                  <div className="testMoImgBg testimonial_rating">
                    <div className="head_sec">
                      <p className="sub_title">Deepak Kumar</p>
                      <p className="sub_title1">
                        {/* Business Developer at SF Capital */}
                      </p>
                    </div>

                    <div className="star_rating">⭐⭐⭐⭐⭐</div>

                  </div>
                  <p className="sub_contents">
                    "We are grateful to the excellent team at MetaBlock for their outstanding work on our app and website. They paid attention to our needs, provided insightful advice, and produced a product that greatly improved our internet visibility. An incredibly fruitful and cooperative experience!
                    "
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}


