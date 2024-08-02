import React, { Component } from "react";
import Slider from "react-slick";
// import "./gameslider.css";
export default class AutoPlayminting extends Component {
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
          "./images/user.webp", name: "Digital Art",
        paragraph:
          "NFT minting platforms enable artists to tokenize their digital artworks as non-fungible tokens (NFTs), providing proof of ownership and authenticity on the blockchain. Artists can mint NFTs representing their digital art pieces, which collectors can then purchase and trade on NFT marketplaces.",
      },
      {
        image:
          "./images/user.webp", name: "Collectibles",
        paragraph:
          "NFT minting platforms allow users to create and mint digital collectibles as NFTs, including items such as trading cards, virtual pets, and limited-edition memorabilia. Collectors can mint NFTs representing their collectibles, which can be bought, sold, and traded with other users.",
      },
      {
        image:
          "./images/user.webp", name: "Gaming Assets",
        paragraph:
          " NFT minting platforms facilitate the creation and minting of in-game assets and items as NFTs, including characters, weapons, skins, and virtual goods. Gamers can mint NFTs representing their gaming assets, which can be used within games, traded on NFT marketplaces, or integrated with other gaming platforms.",
      },
      {
        image:
          "./images/user.webp", name: "Event Tickets and Experiences",
        paragraph:
          "NFT minting platforms enable the creation of NFTs representing event tickets and experiences, such as concert tickets, festival passes, and virtual event access tokens. Event organizers can mint NFTs representing their tickets, which attendees can purchase and redeem for access to events and experiences.",
      },
      {
        image:
          "./images/user.webp", name: "Environmental Conservation",
        paragraph:
          "NFT minting platforms can be used to create and mint NFTs representing environmental conservation efforts and initiatives. Organizations can mint NFTs representing conservation projects, which supporters can purchase and contribute to environmental preservation while receiving digital collectibles or rewards in return.",
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
