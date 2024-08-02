import React from "react";
import "../WebApplicationMainPage.css";
import OnDemandAppSlider from "../OnDemandAppSlider";
import CardSlider from "../CardSlider";
import DeliveringNative from "../Delivering Native/DeliveringNative";
import Phonecardslider from "../Phonecardslider/Phonecardslider";
import SimilarFile from "../../SimilarFile";
import SwiperSlider from "./SwiperSlider/SwiperSlider";
import AdminControlFeature from "./AdminControlFeature/AdminControlFeature";
import Wherehousekeyfeature from "./KeyFeatures/Wherehousekeyfeature";
import WhereHouseSoftwareuses from "./SoftwareUsesTechnology/WhereHouseSoftwareuses";
import { useNavigate } from "react-router-dom";
import WareHouseSwiperSlider from "./SwiperSlider/WareHouseSwiperSlider";

// import '../../main.css'

const WarehouseManagmentSoftware = () => {
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
                    {/* Blockchain Finance Management */}Warehouse Managment
                    Software Development Company
                  </h1>
                  <h3 className="heading-tagline">
                    Warehouse Management Software optimizes inventory control
                    and distribution operations, streamlining processes from
                    receiving to shipping. By integrating real-time data
                    analytics and automation, it enhances visibility, accuracy,
                    and efficiency, empowering businesses to meet customer
                    demands while minimizing costs and errors.
                  </h3>

                </div>
              </div>
            </div>
          </div>
        </header>


        <section className="Enterprise-container">
          <div className="Enterprise-box">
            <div className="Enterprise-left-div">
              <h1 className="Key-feature-heading">We Are Specialist</h1>
              <p style={{ fontSize: "20px" }}>
                As specialists in warehouse management software, our expertise
                lies in providing comprehensive solutions tailored to the unique
                needs of businesses involved in storage, logistics, and
                distribution. Our software is designed to optimize inventory
                management, streamline workflows, and enhance overall efficiency
                within warehouse operations. From inventory tracking and order
                fulfillment to automated replenishment and reporting, our
                solutions empower businesses to maximize their warehouse space,
                reduce operational costs, and improve customer satisfaction.
                With our specialized knowledge and dedication to innovation, we
                strive to equip organizations with the tools they need to
                succeed in the dynamic world of warehouse management.{" "}
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

              <img src="./images/devanshusoftware-3.jfif.webp" alt="devanshusoftware" />
            </div>
          </div>
        </section>

        <WareHouseSwiperSlider />
        <Wherehousekeyfeature />
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

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img src="./images/mysql.webp" alt="MySQL" className="w-100 h-40" />
                <h5>MySQL</h5>
              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img
                  src="./images/java-script.webp"
                  alt="Java Srcipt"
                  className="w-100 h-40"
                />
                <h5>Java Srcipt</h5>
              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img
                  src="/images/SQL-Lite.webp"
                  alt="SQL Lite"
                  className="w-100 h-40"
                />
                <h5>SQL Lite</h5>
              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img src="./images/html.webp" alt="HTML" className="w-100 h-40" />
                <h5>HTML</h5>
              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img
                  src="/images/android.webp"
                  alt="Android"
                  className="w-100 h-40"
                />
                <h5>Android</h5>
              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img
                  src="/images/mongo-db-icon.webp"
                  alt="Mongo DB"
                  className="w-100 h-40"
                />
                <h5>Mongo DB</h5>
              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img
                  src="/images/app-store.webp"
                  alt="App Store"
                  className="w-100 h-40"
                />
                <h5>App Store</h5>
              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img
                  src="/images/atom.webp"
                  alt="Atom"
                  className="w-100 h-40"
                />
                <h5>Atom</h5>
              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img
                  src="/images/laravel.webp"
                  alt="Laravel"
                  className="w-100 h-40"
                />
                <h5>Laravel</h5>
              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img src="./images/python.webp" alt="Python" className="w-100 h-40" />
                <h5>Python</h5>
              </div>
            </div>
          </div>
        </section>
        <WhereHouseSoftwareuses />
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

        {/* <section >
          <CardSlider/>
        </section> */}
        {/* <RelatedPortfolioSlider/> */}
        {/* <OnDemandAppSlider/> */}

        {/* <section className='Phone-card-slider'>
          <Phonecardslider />
        </section> */}


        <section>
          <SimilarFile />
        </section>
      </div>
    </>
  );
};

export default WarehouseManagmentSoftware;
