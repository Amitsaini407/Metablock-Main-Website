import React, { Component } from "react";
import Slider from "react-slick";
// import "./gameslider.css";
export default class AutoPlaynftmarket extends Component {
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
          "./images/user.webp",
        name: "Artist Showcase NFT",
        paragraph:
          "As an artist, the NFT platform provided me with an unprecedented opportunity to showcase my work to a global audience. The authenticity and uniqueness guaranteed by NFTs added incredible value to my art. It's amazing to see collectors from around the world appreciating and investing in my creations.",
      },
      {
        image:
          "./images/user.webp",
        name: "Collectible Trading Card NFT",
        paragraph:
          "Being an avid collector, I've always cherished the tangible aspect of trading cards. With NFTs, I found a new dimension to my hobby. The ability to own and trade digital collectibles securely on the blockchain has revolutionized the way I interact with my favorite franchises. ",
      },
      {
        image:
          "./images/user.webp",
        name: "Virtual Real Estate NFT",
        paragraph:
          "Investing in virtual real estate through NFTs has been a game-changer for me. The decentralized nature of blockchain ensures transparency and security in property ownership. I've witnessed firsthand the potential for virtual spaces to appreciate in value over time",
      },
      {
        image:
          "./images/user.webp",
        name: "Gaming Asset NFT",
        paragraph:
          "NFTs have transformed the gaming industry by giving players true ownership of in-game assets. No longer are our hard-earned items confined to a single game or platform. With NFTs, we can trade, sell, and even use our virtual belongings across different games.",
      },
      {
        image:
          "./images/user.webp",
        name: "Digital Fashion NFT",
        paragraph:
          "As a fashion enthusiast, NFTs have opened up a whole new realm of creativity and expression for me. The ability to own and wear exclusive digital fashion items is not only a statement of style but also a reflection of individuality. ",
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
                    <img src={item.image} style={{ width: "50px" }} alt="NFT for Art" title="NFT for Art" />
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
