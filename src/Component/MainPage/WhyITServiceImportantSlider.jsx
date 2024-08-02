import React, { Component } from "react";
import Slider from "react-slick";
import "./ReactSlick.css";

export default class WhyITServiceImportantSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
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
        return (
            <div className="">
                <Slider {...settings}>
                    <div className="col-lg-12">
                        <div className="row gap-5 c-contant-1 d-flex justify-content-center">
                            <div className="award-2 col-lg-4 p-0 px-1 pt-1">
                                <div className="text-start text-white p-award-1 rounded-10 p-3">
                                    {/* <h1 className="fs-4 year">YEARS of Work Exp.</h1> */}
                                    <img src="./images/Why-it-important-brand.jpg" alt="" />
                                    <h3 style={{ textAlign: 'center' }} className=" grident-color-sub-title">Brand Showcasing</h3>

                                </div>
                            </div>
                            <div className="award-2 col-lg-4 p-0 px-1 pt-1">
                                <div className="text-start text-white p-award-1 rounded-10 p-3">
                                    {/* <h1 className="fs-4 year">YEARS of Work Exp.</h1> */}
                                    <img src="./images/Cradibility-slider-img.jpg" alt="" />
                                    <h3 style={{ textAlign: 'center' }} className="grident-color-sub-title">Credibility</h3>

                                </div>
                            </div>
                            <div className="award-2 col-lg-4 p-0 px-1 pt-1">
                                <div className="text-start text-white p-award-1 rounded-10 p-3">
                                    {/* <h1 className="fs-4 year">YEARS of Work Exp.</h1> */}
                                    <img src="./images/Availability-slider-pic.jpg" alt="" />
                                    <h3 style={{ textAlign: 'center' }} className="grident-color-sub-title"> 24 * 7 <br />Availability</h3>

                                </div>
                            </div>
                            <div className="award-2 col-lg-4 p-0 px-1 pt-1">
                                <div className="text-start text-white p-award-1 rounded-10 p-3">
                                    {/* <h1 className="fs-4 year">YEARS of Work Exp.</h1> */}
                                    <img src="./images/Lead-Generation-slider-pic.png" alt="" />
                                    <h3 style={{ textAlign: 'center' }} className="grident-color-sub-title">Lead Generation</h3>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="row gap-5 c-contant-1 d-flex justify-content-center">
                            <div className="award-2 col-lg-4 p-0 px-1 pt-1">
                                <div className="text-start text-white p-award-1 rounded-10 p-3">
                                    {/* <h1 className="fs-4 year">YEARS of Work Exp.</h1> */}
                                    <img src="./images/Customer-Convenience-slider-pic.jpeg" alt="" />
                                    <h3 style={{ textAlign: 'center' }} className="grident-color-sub-title">Customer Convenience </h3>

                                </div>
                            </div>
                            <div className="award-2 col-lg-4 p-0 px-1 pt-1">
                                <div className="text-start text-white p-award-1 rounded-10 p-3">
                                    {/* <h1 className="fs-4 year">YEARS of Work Exp.</h1> */}
                                    <img src="./images/Organic-Traffic-slider-pic.webp" alt="" />
                                    <h3 style={{ textAlign: 'center' }} className="grident-color-sub-title">Organic Traffic</h3>

                                </div>
                            </div>
                            <div className="award-2 col-lg-4 p-0 px-1 pt-1">
                                <div className="text-start text-white p-award-1 rounded-10 p-3">
                                    {/* <h1 className="fs-4 year">YEARS of Work Exp.</h1> */}
                                    <img src="./images/Globel-reach-slider-pic.jpeg" alt="" />
                                    <h3 style={{ textAlign: 'center' }} className="grident-color-sub-title">Globel Reach</h3>

                                </div>
                            </div>
                            <div className="award-2 col-lg-4 p-0 px-1 pt-1">
                                <div className="text-start text-white p-award-1 rounded-10 p-3">
                                    {/* <h1 className="fs-4 year">YEARS of Work Exp.</h1> */}
                                    <img src="./images/Brand-Awardness.jpg" alt="" />
                                    <h3 style={{ textAlign: 'center' }} className="grident-color-sub-title">Brand Awardness</h3>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="row gap-5 c-contant-1 d-flex justify-content-center">
                            <div className="award-2 col-lg-4 p-0 px-1 pt-1">
                                <div className="text-start text-white p-award-1 rounded-10 p-3">
                                    {/* <h1 className="fs-4 year">YEARS of Work Exp.</h1> */}
                                    <img src="./images/Cost-Effective-Advertising.jpeg" alt="" />
                                    <h3 style={{ textAlign: 'center' }} className="grident-color-sub-title">Cost Effective Advertising </h3>

                                </div>
                            </div>
                            <div className="award-2 col-lg-4 p-0 px-1 pt-1">
                                <div className="text-start text-white p-award-1 rounded-10 p-3">
                                    {/* <h1 className="fs-4 year">YEARS of Work Exp.</h1> */}
                                    <img src="./images/Full-Design-Control.jpg" alt="" />
                                    <h3 style={{ textAlign: 'center' }} className="grident-color-sub-title">Full Design Control</h3>
                                </div>

                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}
