import React, { useRef } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faHeart, faShare } from '@fortawesome/free-solid-svg-icons';

const SoftwareCarousel = [
  {
    name: "LUDO Game Development",
    path: "/ERPSoftware",
    image: "./images/_a01cbe44-aa6b-410f-80e3-b26fbe1718f5.webp",
   
  },
  {
    name: "Rummy Game Development    ",
    path: "/SAASSoftware",
    image: "./images/_160b4fd5-b2bd-4088-a127-5a93b5288a91.webp",
  },
  {
    name: "Teenpatti Game Development    ",
    path: "/WarehouseManagmentSoftware",
    image: "./images/_d1f5a8fc-d265-4d99-bcc8-da1993559abc.webp",
  },
  {
    name: "Dragon & Toger Game ",
    path: "/HRMSSoftware",
    image: "./images/_15652fde-6786-4493-a5d3-8109e010fbf2.webp",
  },
  {
    name: "Pokar Game Development    ",
    path: "/InventoryManagmentSoftware",
    image: "./images/_415e8f37-1963-485e-b972-c769f8384781.webp",
  },
  {
    name: "Baccarat Game Development    ",
    path: "/AccountingBillingSoftware",
    image: "./images/_3f74d1c5-ca9b-46f0-9af8-91b2c7351661.webp",
  },

  {
    name: "Andar Bahar Game  ",
    path: "/AttendanceSystemSoftware",
    image: "./images/_7abdf805-4a8e-4984-bf41-456cd6ca1f20.webp",
  },
  {
    name: "Fantasy Cricket   ",
    path: "/LibraryManagmentSystem",
    image: "./images/fantasygame2.webp",
  },
];

const GameDemandSlider = () => {
  const encodedText = encodeURIComponent(
    "Hello, I am Interested in Game Development"
  );
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    responsive: [
      {
        breakpoint: 588,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="RelatedPortfolioSlider-main-div-2">
      <div className="slider-container">
        <h2 style={{ color: " #BF6DBF" }} className="ondemand-head">Demanding Games</h2>
        <div className="slider-navigation">
          <button className="slider-nav-button slider-nav-prev" onClick={goToPrevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="slider-nav-button slider-nav-next" onClick={goToNextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
      <div className="RelatedPortfolioSlider-div-2">
        <Slider ref={sliderRef} {...settings}>
          {SoftwareCarousel.map((item, index) => (
            <div key={index} className="owl-item active" style={{ width: 270, marginRight: 30 }}>
              <div className="item-1">
                <div className="ondemand__app__box">
                  <img
                    src={item.image}
                    alt={item.name}
                    title={item.name}
                    className="crypto-xchange-sprite xchange-sprite-14"
                  />
                  <div className="title__div">
                    <p>{item.name}</p>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div style={{ width: "90px !important" }} className="overlay">
                      <a
                        style={{ color: "white" }}
                        target="_blank"

                        href={`https://api.whatsapp.com/send?phone=9358593003&text=${encodedText}`}
                      >                      Get Quote
                      </a>

                    </div>
                    <div style={{ width: "90px !important" }} className="overlay" >
                      <a
                        style={{ color: "white" }}
                        target="_blank"

                        href={`https://api.whatsapp.com/send?phone=9358593003&text=${encodedText}`}
                      >                                           Know More

                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

    </div>
  );
};

export default GameDemandSlider;