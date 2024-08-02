import React from "react";
import "../WebApplicationMainPage.css";
import OnDemandAppSlider from "../OnDemandAppSlider";

import SimilarFile from "../../SimilarFile";

import { useNavigate } from "react-router-dom";
import SwiperSlider from "../SoftwarePages/SwiperSlider/SwiperSlider";
import KeyFeature from "../SoftwarePages/KeyFeatures/KeyFeature";
import SoftwareUsesTechnology from "../SoftwarePages/SoftwareUsesTechnology/SoftwareUsesTechnology";
import AdminControlFeature from "../SoftwarePages/AdminControlFeature/AdminControlFeature";
import FoodDelevryKeyFeature from "./KeyFeature/FoodDelevryKeyFeature";
import FoodDelevryIndustries from "./ApplicationUsesIndustries/FoodDelevryIndustries";
import FoodDeleverySwiperSlider from "./ApplicationSwiperSlider/FoodDeleverySwiperSlider";

// import '../../main.css'

const FooddeliveryApps = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="main-div-Application">
        <header className="enterprise-mobile-app-development arkit header-shadow">

          <div className="container h-100">
            <div className="row h-100">

              <div className="col-lg-12 my-auto">
                <div className="header-content mx-auto">
                  <h1 className="mb-5">
                    Food Delivery Apps
                  </h1>
                  <h3 className="heading-tagline">
                    Food delivery apps revolutionize dining experiences, offering a diverse selection of cuisines for users to enjoy at home. With convenient ordering and reliable delivery services, they elevate the convenience of meal delivery.
                  </h3>

                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="Enterprise-container">
          <div className="Enterprise-box">
            <div className="Enterprise-left-div">
              <h1 className='Key-feature-heading'>We Are Specialist</h1>
              <p style={{ fontSize: "20px" }}>
                Experience unparalleled convenience with our intuitive search filters, allowing you to browse by cuisine type, dietary restrictions, and meal preferences, ensuring every craving is satisfied. Seamlessly integrate social media sharing options to spread the joy of delicious discoveries with friends and family. With our commitment to quality and customer satisfaction, rest assured that every order is prepared with care and delivered promptly to your doorstep. Explore new culinary horizons with our rotating selection of featured restaurants and trending dishes, curated just for you. Stay informed and engaged with real-time notifications on order status updates, promotions, and exciting culinary events in your area. Customize your ordering experience with options for contactless delivery, special instructions, and preferred delivery times to suit your busy lifestyle.

              </p>



              <button
                type="button"
                data-toggle="modal"
                data-target="#popup_form_modal"
                class="btn BtnPrimry TlkBtn"
                onClick={() => navigate("/contact-us")}
              >
                <span>Talk to our Experts</span>
                <span>Talk to our Experts</span>
              </button>
            </div>
            <div className="Enterprise-right-div">
              <img src="./images/cabserviceimg.webp" alt="cabserviceimg" />
            </div>
          </div>
        </section>

        <FoodDeleverySwiperSlider />
        <FoodDelevryKeyFeature />
        {/*============= Technology Stack We Use========= */}

        <section className="section-heading mid_section-1">
          <div className="container">
            <div className="row">
              <div className="col-md-12 grident-color-sub-title">
                <h2 style={{ color: "#D166AF ", fontSize: "40px" }} className="text-center Technology-Stack">Technology Stack We Use</h2>
              </div>
            </div>
            <div className="row tech p-5 pt-0 mt-5 mb-5">
              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img src="./images/physics.webp" className="w-100 h-40" alt="React" />
                <h5>React</h5>
              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img src="./images/python.webp" alt="Python" className="w-100 h-40" />
                <h5>Python</h5>

              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3" >
                <img src="./images/mysql.webp" alt="MySQL" className="w-100 h-40" />
                <h5>MySQL</h5>
              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img src="./images/java-script.webp" alt="Java Srcipt" className="w-100 h-40" />
                <h5>Java Srcipt</h5>

              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img src="./images/SQL-Lite.webp" alt="SQL Lite" className="w-100 h-40" />
                <h5>SQL Lite</h5>

              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img src="./images/html.webp" alt="HTML" className="w-100 h-40" />
                <h5>HTML</h5>

              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img src="./images/android.webp" alt="Android" className="w-100 h-40" />
                <h5>Android</h5>

              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img src="./images/mongo-db-icon.webp" alt="Mongo DB" className="w-100 h-40" />
                <h5>Mongo DB</h5>

              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img src="./images/app-store.webp" alt="App Store" className="w-100 h-40" />
                <h5>App Store</h5>

              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img src="./images/atom.webp" alt="Atom" className="w-100 h-40" />
                <h5>Atom</h5>

              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img src="./images/laravel.webp" alt="Laravel" className="w-100 h-40" />
                <h5>Laravel</h5>

              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img src="./images/python.webp" alt="Python" className="w-100 h-40" />
                <h5>Python</h5>

              </div>
            </div>
          </div>
        </section>
        <FoodDelevryIndustries />
        <AdminControlFeature />
        <section className="process_we_follow section-heading">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="cms text-center Process">
                  <h3>Our Step-By-Step Software Development Process</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <img src="/images/process-flow-new.webp" alt="process-flow-new" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>
        <section className="OnDemandApp_section">
          <OnDemandAppSlider />
          {/* <CardSlider/> */}
        </section>

        <section>
          <SimilarFile />
        </section>
      </div>
    </>
  );
}

export default FooddeliveryApps
