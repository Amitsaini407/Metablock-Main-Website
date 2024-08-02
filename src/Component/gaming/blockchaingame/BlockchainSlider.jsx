import React, { Component } from "react";
import Slider from "react-slick";
// import Slider from "react-slick";
// import './ReactSlick.css'
// import "./gameslider.css";
// import "./CasinoGames.css";
import './BlockchainGame.css'
export default class Blockchainslider extends Component {
  render() {
    const settings = {
      //   dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      responsive: [
        {
          breakpoint: 911,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],

      //    cssEase: "linear"
    };

    const gamesliderdata = [
      {
        Image: "https://www.MetaBlocktechnologies.com/asset/inner-pages-new/blockchain-game-development-company/techstack-icons.webp",
        name: "Ethereum",

      },
      {
        Image: "https://www.MetaBlocktechnologies.com/asset/inner-pages-new/blockchain-game-development-company/techstack-icons.webp",
        name: "Ethereum",

      },
      {
        Image: "https://www.MetaBlocktechnologies.com/asset/inner-pages-new/blockchain-game-development-company/techstack-icons.webp",
        name: "Polygon",

      },
      {
        Image: "https://www.MetaBlocktechnologies.com/asset/inner-pages-new/blockchain-game-development-company/techstack-icons.webp",
        name: "Waves",

      },
      {
        Image: "https://www.MetaBlocktechnologies.com/asset/inner-pages-new/blockchain-game-development-company/techstack-icons.webp",
        name: "Avalanche",

      },
      {
        Image: "https://www.MetaBlocktechnologies.com/asset/inner-pages-new/blockchain-game-development-company/techstack-icons.webp",
        name: "Avalanche",

      },
      {
        Image: "https://www.MetaBlocktechnologies.com/asset/inner-pages-new/blockchain-game-development-company/techstack-icons.webp",
        name: "Avalanche",

      },
      {
        Image: "https://www.MetaBlocktechnologies.com/asset/inner-pages-new/blockchain-game-development-company/techstack-icons.webp",
        name: "Avalanche",

      },
    ];
    return (
      <div className="blockchaincasino-main-slider-div" style={{ maxWidth: '100%', marginBottom: "100px", marginLeft: "100px" }}>
        <div className="casino-main-box">
          {/* Your other code */}
          <Slider {...settings}>
            {gamesliderdata.map((item, index) => (
              <div key={index}>
                <div className="techstack_list">
                  <img
                    src={item.Image}
                    alt="Avalanche"
                    title="Avalanche"
                    className="sprite_icons"
                    style={{ objectPosition: "-2170px 0px" }}
                  />
                  <h3 className="sub_title">{item.name}</h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

    );
  }
}
