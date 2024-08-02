import React, { Component } from "react";
import Slider from "react-slick";
// import "./gameslider.css";
export default class AutoPlaypancake extends Component {
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

    const sliderdata = [
      {
        image: "./images/user-1.webp",
        paragraph: " The Best Among the Rest is MetaBlock Tech!",
        paragraph1: "Raghav Sharma",
        paragraph2: " Financial Advisor at Liberty Life",
        paragraph3:
          "I have been working with MetaBlock Technologies for more than five months, and I am really happy with the results of their work. I worked with a business analyst who was a first-rate professional and provided exceptional customer service. I highlight to you their extensive expertise in the kind of platform they designed and their adaptability throughout the project's development.",
      },

      {
        image: "./images/user-1.webp",
        paragraph: " There is no comparison to MetaBlock Tech!",
        paragraph1: "Milind Nagpal",
        paragraph2: "Business Developer at SF Capital",
        paragraph3:
          "I've been collaborating with MetaBlock Technologies for more than 5 years now, and I must say, the results they've delivered have consistently exceeded my expectations. In particular, working with their Business Analyst has been a pleasure. Their professionalism and exceptional customer service stand out prominently. I've been impressed by their in-depth understanding of the platform they've developed for me, and their flexibility throughout the project's development has been invaluable.",
      },
      {
        image: "./images/user-1.webp",
        paragraph: " Your creativity and innovative thinking always bring fresh perspectives to our projects.",
        paragraph1: "Bhanu Sharma",
        paragraph2: "Project Manager at AGL Pvt. Ltd",
        paragraph3:
          "I've had the privilege of collaborating with MetaBlock on several projects, and their professionalism and expertise never fail to impress.",
      },
      {
        image: "./images/user-1.webp",
        paragraph: " The way they give attention to detail is truly remarkable, and it's evident in the quality of your work.",
        paragraph1: "Narendra Jangid",
        paragraph2: "Senior Software Engineer",
        paragraph3:
          "I'm continually amazed by MetaBlock's ability to solve complex problems with ease. Their analytical skills and attention to detail are unmatched.",
      },
      {
        image: "./images/user-1.webp",
        paragraph: " MetaBlock Tech is the Best above the Rest!",
        paragraph1: "Deependra Goyal",
        paragraph2: "Manager at JK Hotel ",
        paragraph3:
          "It's rare to find someone as committed to excellence as MetaBlock. They consistently deliver outstanding results and raise the bar for the entire team.",
      },
    ];
    return (
      <div>
        {/* <h2 class="title">
          Voices of Our <span class="cus_title">Satisfied Clients</span>
        </h2> */}

        <Slider {...settings}>
          {sliderdata.map((item, index) => (
            <div key={index}>
              <div className="item">
                <div className="testMoLst">
                  <div className="testMoImgBg">
                    <img
                      src={item.image}
                      alt={`Slider Image ${index}`}
                    />
                  </div>
                  <p className="testMoLstRev">{item.paragraph3}</p>
                  <p className="testMoLstTlt">{item.paragraph}</p>
                  <p className="testMoLstGard">{item.paragraph1}</p>
                  <p className="testMoLstCnt">{item.paragraph2}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
