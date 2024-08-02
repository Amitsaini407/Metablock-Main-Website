import React, { Component } from "react";
import Slider from "react-slick";
import './DeliveringNative.css'
import '../CardSlider.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faShare } from '@fortawesome/free-solid-svg-icons';

export default class DeliveringNative extends Component {


    render() {
        const settings = {
            // dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
            ]
            //    cssEase: "linear"
        }

        const data = [
            {
                images: 'https://www.MetaBlocktechnologies.com/asset/images/inner-pages/demand/tinder-clone.png'
            },
            {
                images: 'https://www.MetaBlocktechnologies.com/asset/images/inner-pages/demand/tinder-clone.png'
            },
            {
                images: 'https://www.MetaBlocktechnologies.com/asset/images/inner-pages/demand/tinder-clone.png'
            },
            {
                images: 'https://www.MetaBlocktechnologies.com/asset/images/inner-pages/demand/tinder-clone.png'
            },
            {
                images: 'https://www.MetaBlocktechnologies.com/asset/images/inner-pages/demand/tinder-clone.png'
            },
        ]

        return (
            <div className="RelatedPortfolioSlider-main-div-2">
                <h2 className="ondemand-head">Delivering Native & Hybrid Mobile App For Different Industries
                </h2>
                <div className="RelatedPortfolioSlider-div-2">
                    <Slider {...settings}>
                        {data.map((item, index) => (
                            <div>

                                <div key={index} className="owl-item active" style={{ width: 270, marginRight: 30 }}><div className="item-1">
                                    <div className="ondemand__app__box-1 ">
                                        <img style={{ position: 'relative', zIndex: '1' }} width={'280px'} height={'280px'} src={item.images} alt="Tinder Clone" title="Tinder Clone" className="crypto-xchange-sprite xchange-sprite-14" />

                                    </div>
                                </div></div>
                                <div className="image-upper-color" style={{ width: '270px', height: '280px', background: '#3e3e3eab', borderRadius: '9px', position: 'absolute', top: '0', zIndex: '2' ,padding:'100px 50px'}}>
                                    <h1>Visit Now</h1>
                                </div>
                                {/* <div className="image-upper-color" style={{ width: '270px', height: '280px', position: 'absolute', padding: '100px 0px', zIndex: '3', }}>
                                    <h1>Visit Now</h1>
                                </div> */}

                            </div>

                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}

