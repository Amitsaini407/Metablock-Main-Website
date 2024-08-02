import React, { Component } from "react";
import Slider from "react-slick";
import "./gameslider.css";
export default class AutoPlaygame extends Component {
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
          "./images/casino.webp",
          altText:"Casino Game Development",
        name: "Casino Game Development",
        paragraph:
          "Casino game development involves creating captivating and fair games of chance, integrating features like graphics, sound, and secure transactions.",
      },
      {
        image:
          "./images/game.webp",
          altText:"NFT Game Development",
         name: "NFT Game Development",
        paragraph:
          "Specializing in NFT-infused games, we elevate in-game assets with real-world significance. By utilizing top-tier blockchains, we empower players to craft, trade, and vend NFTs directly within the gaming ecosystem.",
      },
      {
        image:
          "./images/winner.webp",
          altText:"Metaverse  Game Development",

        name: "Metaverse Game Development",
        paragraph:
          "As a premier video game development company, we strongly prioritize the creation of immersive metaverse games that evolve in sync with their communities. We encompass all the top metaverse features, including interactivity, user-generated content, and social connectivity.",
      },
      {
        image:
          "./images/programmer.webp",
          altText:"General Game Development",
        name: "General Game Development",
        paragraph:
          "General game development encompasses the creation of interactive digital entertainment, involving various disciplines such as programming, design, art, and sound to craft immersive gaming experiences for diverse platforms and audiences.",
      },
    ];
    return (
      <div>
        {/* <h2 class="title">
          Voices of Our <span class="cus_title">Satisfied Clients</span>
        </h2> */}

        <Slider {...settings}>
          {sliderdata.map((item, index) => (
            <div>
              <div key={index} className="item-2">
                <a href={item.link} target="_blank">
                  <div className="service_box">
                    <div className="img_sec">
                      <img
                        style={{ width: "120px", padding: "20px" }}
                        src={item.image}
                        className="img-fluid lazyload"
                        alt={item.altText}
                        title={item.title}
                      />
                    </div>
                    <h3 className="sub_title">{item.name}</h3>
                    <p className="sub_contents">{item.paragraph}</p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
