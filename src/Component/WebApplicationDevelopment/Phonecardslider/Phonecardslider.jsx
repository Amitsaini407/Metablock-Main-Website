import React, { Component } from "react";
import Slider from "react-slick";

export default class Phonecardslider extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        // cssEase: "linear"
    };
    return (
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
        <div id="card-slider-fullwidth">
                    <div id="slider">
                        <img src="https://unsplash.it/200/300/?image=100" alt={100} className="behinder left" />
                        {/* <img src="https://unsplash.it/200/300/?image=200" alt={200} className="behind left" />
                        <img src="https://unsplash.it/200/300/?image=320" alt={300} className="center" />
                        <img src="https://unsplash.it/200/300/?image=400" alt={400} className="behind right" />
                        <img src="https://unsplash.it/200/300/?image=500" alt={500} className="behinder right" /> */}
                    </div>
                </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    );
  }
}


{/*   

import './Phonecardslider.scss'


<>
            <div>
                <div id="card-slider-fullwidth">
                    <div id="slider">
                        <img src="https://unsplash.it/200/300/?image=100" alt={100} className="behinder left" />
                        <img src="https://unsplash.it/200/300/?image=200" alt={200} className="behind left" />
                        <img src="https://unsplash.it/200/300/?image=320" alt={300} className="center" />
                        <img src="https://unsplash.it/200/300/?image=400" alt={400} className="behind right" />
                        <img src="https://unsplash.it/200/300/?image=500" alt={500} className="behinder right" />
                    </div>
                </div>
                <div id="right">Switch, baby.</div>
            </div>
        </>*/}