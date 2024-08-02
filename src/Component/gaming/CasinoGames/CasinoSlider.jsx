import React, { Component } from "react";
import Slider from "react-slick";
// import Slider from "react-slick";
// import './ReactSlick.css'
// import "./gameslider.css";
import "./CasinoGames.css";
export default class Casinoslider extends Component {
  render() {
    const settings = {
    //   dots: true,
      infinite: true,
      slidesToShow: 1,
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

    const gamesliderdata = [
      {
        name: "Game Dynamics",
        paragraph:
          "Enhance your gaming experience with engaging and intuitive mechanics, where fun meets clear objectives for players' enjoyment and immersion.",
      },
      {
        name: "RNG",
        paragraph:
          "A dependable and secure random number generator is a crucial element, guaranteeing fairness and absolute randomness in each casino game round.",
      },
      {
        name: "Graphics and Soundtrack",
        paragraph:
          "Delivering an immersive gaming adventure greatly hinges on a casino game's visual and auditory components. High-quality graphics and captivating sound effects are pivotal in drawing and captivating players.",
      },
      {
        name: "Jackpots and Bonuses",
        paragraph:
          "Incorporating bonuses and jackpots enhances player engagement, nurtures loyalty, and sparks excitement, promoting recurring gameplay.",
      },
    ];
    return (
       <div className="casino-main-slider-div" style={{ maxWidth: '300px' }}>
  <div className="casino-main-box">
    {/* Your other code */}
    <Slider {...settings}>
      {gamesliderdata.map((item, index) => (
        <div key={index}>
          <div className="item-2">
            <div className="feature_box">
              <h3 className="sub_title">{item.name}</h3>
              <p className="sub_contents">{item.paragraph}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>

    );
  }
}
