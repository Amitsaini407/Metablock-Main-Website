import React from "react";
import "./whychoose.css";
import WhyChooseSlider from "./WhyChooseSlider";
const WhyChooseUs = () => {
  return (
    <section className="why-chhose-us-section cta position-relative  changing overflow-hidden">
      <img className="bg-img" src="./assets/img/blog-background-01.png" alt />
      <div className="bg-filter" />
      {/* <img class="bg-img" src="./assets/img/h2-img-3.png" alt=""> */}
      <div className="devanshu">
        <div className="col-lg-5 container c-contant-text  row gx-5   align-items-center">
          <div className="why-choose-us-right-slider">
            <h1
              style={{ fontSize: "40px" }}
              className="pb-3 glow-text c-head text-white fw-bold g-text g-text-h"
            >
              What Makes Us Different ?
            </h1>
            <p className="lead fw-normal text-light mb-0 ">
              We feed the needs of our clients with the best team distribution.
              In addition, our pool of talent helps us achieve outstanding and
              astonishing results in each project that we undertake.
            </p>
            <p className="lead fw-normal text-light mb-4 ">
              Our mission at MetaBlock is to create the most useful solutions
              for our clients and to help them achieve all their digital goals.
            </p>
            <img src="./images/Furore.webp" alt="Furore | metablocktechnologies" />
            {/* <a href="#!" className="btn btn-outline-primary text-primary1 bg-transparent">Explore games</a> */}
          </div>
        </div>

        <div className="col-lg-6">
          <WhyChooseSlider />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
