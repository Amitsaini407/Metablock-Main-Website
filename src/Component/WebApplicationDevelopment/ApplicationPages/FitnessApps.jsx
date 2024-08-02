import React from "react";
import "../WebApplicationMainPage.css";
import OnDemandAppSlider from "../OnDemandAppSlider";

import SimilarFile from "../../SimilarFile";

import { useNavigate } from "react-router-dom";
import SwiperSlider from "../SoftwarePages/SwiperSlider/SwiperSlider";
import KeyFeature from "../SoftwarePages/KeyFeatures/KeyFeature";
import SoftwareUsesTechnology from "../SoftwarePages/SoftwareUsesTechnology/SoftwareUsesTechnology";
import AdminControlFeature from "../SoftwarePages/AdminControlFeature/AdminControlFeature";
import FitnessKeyFeature from "./KeyFeature/FitnessKeyFeature";
import FitnessIndustries from "./ApplicationUsesIndustries/FitnessIndustries";
import FitnessSwiperSlider from "./ApplicationSwiperSlider/FitnessSwiperSlider";

const FitnessApps = () => {
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
                    Fitness Apps
                  </h1>
                  <h3 className="heading-tagline">
                    Fitness apps empower users to prioritize their health and wellness, offering personalized workout routines, nutrition plans, and progress tracking. With features like goal setting and workout reminders, they inspire motivation and accountability, facilitating a healthier lifestyle anytime, anywhere.
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

                As pioneers in the realm of fitness chatting apps, we've redefined how individuals engage with their health goals. Our platform serves as a dynamic hub for enthusiasts, providing tailored support, expert advice, and a vibrant community for sharing achievements and challenges. With real-time messaging, personalized workout plans, and nutrition guidance, users can seamlessly integrate wellness into their daily conversations. Whether you're seeking motivation, tips, or camaraderie, our app fosters connections that inspire progress and success. Join us in embracing a healthier lifestyle through interactive communication with our specialized fitness chatting app.
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

        <FitnessSwiperSlider />
        <FitnessKeyFeature />
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
        <FitnessIndustries />
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

export default FitnessApps
