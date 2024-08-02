import React, { Component } from "react";
import Slider from "react-slick";
import './OnDemandAppSlider.css'
import './CardSlider.scss'
import { useNavigate } from "react-router-dom";
import Visitbutton from "./Visitbutton";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faHeart, faShare } from '@fortawesome/free-solid-svg-icons';

const SoftwareCarousel = [
  {
    name: "ERP Software",
    path: "/ERPSoftware",
    image: "./images/ERP.webp",
    className: 'item-10',
    alt:'ERP Software'
  },
  {
    name: "SAAS Software",
    path: "/SAASSoftware",
    image: "./images/saas.webp",
    className: 'item-10',
    alt:'SAAS Software'

  },
  {
    name: "Warehouse Managment Software",
    path: "/WarehouseManagmentSoftware",
    image: "./images/Warehouse.webp",
    className: 'item-10',
    alt:'Warehouse Managment Software'


  },
  {
    name: "HRMS Software",
    path: "/HRMSSoftware",
    image: "./images/HRMS.webp",
    className: 'item-10',
    alt:'HRMS Software'
  },
  {
    name: "Inventory Managment Software",
    path: "/InventoryManagmentSoftware",
    image: "./images/Inventory.webp",
    className: 'item-10',
    alt:'Inventory Managment Software'
  },
  {
    name: "Accounting & Billing Software",
    path: "/AccountingBillingSoftware",
    image: "./images/Accounting & Billing.webp"
    ,
    className: 'item-10',
    alt:'Accounting & Billing Software'
  },
  {
    name: "POS System Software",
    path: "/POSSystemSoftware",
    image: "./images/POS System.webp"
    ,
    className: 'item-10',
    alt:'POS System Software'
  },
  {
    name: "Employee Tracking Software",
    path: "/EmployeeTrackingSoftware",
    image: "./images/Employee Tracking.webp",
    className: 'item-10',
    alt:'Employee Tracking Software'
  },
  {
    name: "Attendance System Software",
    path: "/AttendanceSystemSoftware",
    image: "./images/Attendance.webp",
    className: 'item-10',
    alt:'Attendance System Software'
  },
  {
    name: "Library Managment System",
    path: "/LibraryManagmentSystem",
    image: "./images/Library.webp",
    className: 'item-10',
    alt:'Library Managment System'
  },
  // {
  //   name: "Library Managment System",
  //   path: "/LMSWithLiveClassSoftware",
  //   image: "./images/LMSWithLiveClassSoftware.webp",
  //   className: 'item-10',
  //   alt:'Library Managment System'
  // },
  {
    name: "University Managment  Software",
    path: "/UniversityManagmentSoftware",
    image: "./images/UniversityManagmentSoftware.webp",
    className: 'item-10',
    alt:'University Managment  Software'
  },
  {
    name: "Quiz System Software",
    path: "/QuizSystemSoftware",
    image: "./images/QuizSystemSoftware.webp",
    className: 'item-10',
    alt:'Quiz System Software'
  },
  {
    name: "Astrology Software",
    path: "/AstrologySoftware",
    image: "./images/QuizSystemSoftware.webp",
    className: 'item-10',
    alt:'Astrology Software'
  },
  {
    name: "Travel Booking Software",
    path: "/TravelBookingSoftware",
    image: "./images/TravelBookingSoftware.webp",
    className: 'item-10',
    alt:'Travel Booking Software'
  },
  {
    name: "Matrimonial Software",
    path: "/MatrimonialSoftware",
    image: "./images/Matrimonial.webp",
    className: 'item-10',
    alt:'Matrimonial Software'
  },
  {
    name: "Restaurant Managment  Software",
    path: "/RestaurantManagmentSoftware",
    image: "./images/Restaurant Managment.webp",
    className: 'item-10',
    alt:'Restaurant Managment  Software'
  },
  {
    name: "Hotel Managment Software",
    path: "/HotelManagmentSoftware",
    image: "./images/Hotel Managment.webp",
    className: 'item-10',
    alt:'Hotel Managment Software'
  },
  {
    name: "Event management Software",
    path: "/EventmanagementSoftware",
    image: "./images/Event management.webp",
    className: 'item-10',
    alt:'Event management Software'
  },
  {
    name: "Hospital Managment System Software",
    path: "/HospitalManagementSoftware",
    image: "./images/Hospital Managment.webp",
    className: 'item-10',
    alt:'Hospital Managment System Software'
  },
  {
    name: "Real state Software",
    path: "/RealstateSoftware",
    image: "./images/Real state.webp",
    className: 'item-10',
    alt:'Real state Software'
  },
  {
    name: "Clinic Managment Software",
    path: "/ClinicManagmentSoftware",
    image: "./images/Clinic Managment.webp",
    className: 'item-10',
    alt:'Clinic Managment Software'
  },
  {
    name: "MLM Software",
    path: "/MLMSoftware",
    image: "./images/MLMSoftware.webp",
    className: 'item-10',
    alt:'MLM Software'
  },
  {
    name: "Trading Software",
    path: "/TradingSoftware",
    image: "./images/TradingSoftware.webp",
    className: 'item-10',
    alt:'Trading Software'
  },
  {
    name: "Job Portal Software",
    path: "/JobPortalSoftware",
    image: "./images/JobPortalSoftware.webp",
    className: 'item-10',
    alt:'Job Portal Software'
  },
];


const OnDemandAppSlider = () => {
  const navigate = useNavigate();


  const settings = {
    infinite: true,
    // dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
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
    ]
  };

  return (
    <div className="slider-main-div-1"
      style={{ marginBottom: '40px' }}
    >
      <h2 className="ondemand-head grident-color-sub-title" style={{ color: 'black', fontSize: '40px' }}>On Demand Software
      </h2>
      <div className="slider-div">

        <Slider {...settings}>
          {SoftwareCarousel.map((item, index) => (


            <div key={index}>
              <div className={item.className}>
                <div>

                  <img src={item.image} alt={item.alt} />

                </div>
                <div className="img-upper-background">
                </div>
                <div className="visit-now-button" onClick={() => navigate(item.path)}>
                  {/* <Visitbutton /> */}
                  <button className="btn-hover"><span>{item.name}</span></button>
                  {/*  <button className="btn-hover"><span>{item.name}<i class="fa-solid fa-right-long"></i></span></button> */}
                </div>

              </div>

            </div>
          ))}

        </Slider>
      </div>
    </div>
  );
};

export default OnDemandAppSlider;