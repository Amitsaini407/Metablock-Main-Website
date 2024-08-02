import React, { Component } from "react";
import Slider from "react-slick";
// import "./gameslider.css";
export default class AutoPlaybinance extends Component {
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
        image: "./images/user.webp",
        name: "Digital Art Marketplace",
        paragraph:
          "As NFTs, Binance might provide a market place for the purchase, sale, and exchange of digital art. Artists may use the Binance platform to tokenize their works, and collectors could buy and sell these exclusive digital assets safely.",
      },
      {
        image:
          "./images/user.webp", name: "Collectibles and Gaming Assets",
        paragraph:
          "NFTs for in-game items and collectibles from different online games and virtual worlds may be hosted on Binance. NFTs enable players to buy, sell, and trade digital assets in a safe and secure manner. They might be anything from rare in-game items to exclusive characters or properties.",
      },
      {
        image:
          "./images/user.webp", name: "Intellectual Property Rights",
        paragraph:
          "Binance may make it easier for intellectual property rights like patents, trademarks, and copyrights to be tokenized as NFTs. Tokenizing their intellectual property will allow authors and inventors to safely lease or sell their rights on the Binance platform.",
      },
      {
        image:
          "./images/user.webp", name: "Event Tickets and Experiences",
        paragraph:
          "Event organizers could be able to tokenize tickets for conferences, concerts, sports events, and other live experiences by using Binance's NFT-based event tickets and experiences. These NFT tickets can offer special advantages, entry to only-available material, or first-class experiences.",
      },
      {
        image:
          "./images/user.webp", name: "Real Estate Fractional Ownership",
        paragraph:
          "Binance may investigate the tokenization of real estate assets, enabling investors to buy NFTs representing a portion of a property's ownership. On the Binance platform, investors may safely purchase and sell fractions of real estate, releasing liquidity.",
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
