import React, { Component } from "react";
import Slider from "react-slick";
// import "./gameslider.css";
export default class AutoPlayfantasy extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
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
        image:
          "./images/user.webp", name: "Unique Player Cards",
        paragraph:
          "NFTs can represent unique player cards within the fantasy sports platform, with each card embodying specific attributes and statistics of real-life athletes. Users can collect, trade, and use these NFT player cards to build their fantasy teams.",
      },
      {
        image:
          "./images/user.webp", name: "Player Performance Tracking",
        paragraph:
          "NFTs can be used to track and verify the performance of real-life athletes in fantasy sports contests. Smart contracts embedded in NFTs can automatically update player statistics and performance metrics based on real-world events, ensuring accuracy and transparency.",
      },
      {
        image:
          "./images/user.webp", name: "Limited Edition Collectibles",
        paragraph:
          "Fantasy sports platforms can release limited edition or one-of-a-kind NFT collectibles, such as commemorative player cards, championship trophies, or special event memorabilia. Collectors can acquire these NFTs as tokens of participation and achievement within the platform.",
      },
      {
        image:
          "./images/user.webp", name: "Rewards and Prizes",
        paragraph:
          "NFTs can serve as rewards and prizes for fantasy sports contests and competitions. Winners can receive NFT tokens representing exclusive digital assets, merchandise, or experiences, adding value and prestige to their achievements.",
      },
      {
        image:
          "./images/user.webpbp", name: "Player Ownership and Trading",
        paragraph:
          "Users can acquire ownership of real-life athletes as NFTs within the fantasy sports platform, enabling them to buy, sell, and trade players in a secondary marketplace. This introduces a new dimension of strategy and speculation to fantasy sports gameplay.",
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
                <div className="usecase_box ">
                  <div className="head_sec">
                    <img width={'50px'} src={item.image} alt="NFT for Art" title="NFT for Art" />
                    <div className="head_sec">
                      <h3 className="sub_title grident-color-sub-title">{item.name}</h3>
                    </div>
                  </div>
                  <p className="sub_contents">{item.paragraph}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
