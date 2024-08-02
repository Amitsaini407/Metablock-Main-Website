import React, { Component } from "react";
import Slider from "react-slick";
// import "./gameslider.css";
export default class AutoPlaymusic extends Component {
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
          "./images/user.webp", name: "Ownership and Royalties",
        paragraph:
          " Musicians can tokenize their music as NFTs, representing ownership rights and revenue-sharing agreements. Fans and investors can purchase these NFTs, providing direct financial support to artists and earning royalties from their music's revenue streams.",
      },
      {
        image:
          "./images/user.webp", name: "Limited Edition Releases",
        paragraph:
          "Artists can release limited edition music NFTs, offering exclusive content, artwork, or experiences to collectors. These limited edition NFTs can create scarcity and value, attracting collectors and generating additional revenue for artists.",
      },
      {
        image:
          "./images/user.webp", name: "Fan Engagement and Rewards",
        paragraph:
          "NFT music marketplaces can offer unique experiences and rewards to fans who collect and trade music NFTs. Artists can offer exclusive perks such as backstage passes, meet-and-greets, or VIP concert tickets to NFT holders, fostering deeper connections and engagement with their fan base.",
      },
      {
        image:
          "./images/user.webp", name: "Music Licensing and Sync Deals",
        paragraph:
          "NFT music marketplaces can facilitate the licensing and sale of music rights for commercial use in films, TV shows, advertisements, and video games. Music NFTs can represent licensing agreements, enabling buyers to use the music in their projects while ensuring fair compensation for artists and rights holders.",
      },
      {
        image:
          "./images/user.webp", name: "Memorabilia and Merchandise",
        paragraph:
          "In addition to music, artists can tokenize memorabilia and merchandise items as NFTs, including concert tickets, posters, t-shirts, and other collectibles. Fans can purchase and trade these NFTs, owning unique digital representations of their favorite artist's merchandise and memorabilia.",
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
