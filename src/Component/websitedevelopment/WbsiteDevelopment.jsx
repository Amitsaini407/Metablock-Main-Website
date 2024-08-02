import React from "react";
import "./WbsiteDevelopment.css";
import { Link, useNavigate } from "react-router-dom";
import SimilarFile from "../SimilarFile";
import { Button } from "@mui/material";
const WbsiteDevelopment = () => {
  const navigate = useNavigate();

  return (
    <>
      <main className="">
        <section className=" Website-development-banner">
          <div className="container-fluid p-0">
            <div className="VideoWrper">
              {/* <div className="video_sec">
                <img style={{ width: "100%", height: "92vh" }} alt="" src="./images/software-background-image.jpg" />
              </div> */}
              <div className="container">
                <div className="content_sec">
                  <div className="title_sec">
                    <h1 className="ourservice-title main-titile">
                      Website Development
                    </h1>
                  </div>
                  <p className="contents">
                    We adopt a unique and agile approach to web development and
                    design services, tailored to meet diverse business needs and
                    stand out in the competitive landscape.
                  </p>
                  <div
                    className="web-development-button"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "20px",
                    }}
                  >
                    <div
                      className="webdesi_bannerbtn "
                      onClick={() => navigate("/contact-us")}
                    >
                      <span className="expert-btn">Get A Free Quote</span>
                    </div>
                    <div
                      className="webdesi_bannerbtn "
                      onClick={() => navigate("/contact-us")}
                    >
                      <span className="expert-btn">Get A Live Demo</span>
                    </div>
                  </div>
                  <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5 col-md-5 col-10">
                      <div className="search_sec">
                        {/* <form action="{{url('news')}}" method="get"> */}
                        <div className="sear_fd1">
                          {/* <div className="input-group">
                                                          <input type="text" name="search" className="form-control" placeholder="SEARCH" id="getsearchtext" />
                                                          <span className="input-group-addon"><button className="btn search_btn" onclick="load_search()"><i className="fa fa-search" /></button></span>
                                                      </div> */}
                        </div>
                        {/* </form> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section core-value bg-tertiary py-5 pb-0 position-relative">
          <img
            className="bg-img parellex-img"
            src="./assets/img/gray-abstract-wireframe-technology-background.jpg"
            alt="wireframe-technology"
          />
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="row position-relative gy-4">
                  <img
                    className="w-100"
                    src="./images/manwithlaptop.webp"
                    alt="manwithlaptop"
                  />
                </div>
              </div>
              <div className="col-lg-7 mt-5 mt-lg-0">
                <div className="section-title ps-0 ps-lg-5">
                  {/* <p style={{ fontSize: '54px' }} className=" fw-semibold mb-2 g-text lg-text-center">
                    Blockchain Development services </p> */}
                  <h3 className="h1 display-4 mb-3 fw-bold lg-text-center grident-color-sub-title">
                    Web Development &amp; Blockchain Development Company
                  </h3>
                  <div>
                    <p className="fs-5  mb-3">
                      Trusted partner for 30+ companies. Expert IT solutions.
                      Elevate your ventures with our innovative and tailored
                      expertise.
                    </p>
                    <p className="fs-5  mb-3">
                      We are a top Blockchain app development company,
                      proficient in both web and blockchain development. Our
                      skilled team excels in integrating decentralized solutions
                      for diverse applications, from smart contracts to games
                      and exchanges. Join us as we redefine possibilities and
                      empower businesses in the evolving digital landscape.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="mid_section sol-website grey-bg"
          id="premium_webservice"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div
                className="col-lg-4 col-12"
                // onClick={() => navigate("/Static")}
                // style={{ cursor: "pointer" }}
              >
                <div className="services_box">
                  <span />
                  <span />
                  <span />
                  <span />
                  <div className="sol-icon"></div>
                  <h2
                    style={{ fontSize: "30px" }}
                    className="grident-color-sub-title title1 "
                  >
                    Static Website Development
                  </h2>
                  <p className="desc">
                    Elevate your static website Development online presence with
                    our Static Website Development services. We craft visually
                    stunning and efficient static websites amd ensuring a
                    seamless user experience.
                  </p>
                  <div
                    className=""
                    onClick={() => navigate("/staticwebsite")}
                    style={{ cursor: "pointer" }}
                  >
                    <Button className="button-who"> Visit Now</Button>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-12"
                onClick={() => navigate("/DynamicWebsite")}
                style={{ cursor: "pointer" }}
              >
                <div className="services_box">
                  <span />
                  <span />
                  <span />
                  <span />
                  <div className="sol-icon"></div>
                  <h2
                    style={{ fontSize: "30px" }}
                    className=" grident-color-sub-title title1"
                  >
                    Dynamic Website Development
                  </h2>
                  <p className="desc">
                    Enhance your digital footprint with our Dynamic Website
                    Development services. We design and develop visually
                    striking and dynamic websites, offering an interactive user
                    experience that embodies essence of brand.
                  </p>
                  <div
                    className=""
                    onClick={() => navigate("/staticwebsite")}
                    style={{ cursor: "pointer" }}
                  >
                    <Button className="button-who"> Visit Now</Button>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-12"
                onClick={() => navigate("/Ecommerce-website")}
                style={{ cursor: "pointer" }}
              >
                <div className="services_box">
                  <span />
                  <span />
                  <span />
                  <span />
                  <div className="sol-icon"></div>
                  <h2
                    style={{ fontSize: "30px" }}
                    className="grident-color-sub-title title1"
                  >
                    E-Commerce Website Development
                  </h2>
                  <p className="desc">
                    Enhance your digital storefront with our E-commerce Website
                    Development services. We meticulously design, develop, and
                    create visually captivating, user-friendly e-commerce
                    websites.
                  </p>
                  <div
                    className=""
                    onClick={() => navigate("/staticwebsite")}
                    style={{ cursor: "pointer" }}
                  >
                    <Button className="button-who"> Visit Now</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="webdesign_frameworks"
          className="mid_section sol-website  "
        >
          <div className="container">
            <div className="cm_head2 section-heading text-center grident-color-sub-title">
              <h2
                className="hire_modal_hd "
                style={{ textAlign: "center", fontSize: "45px" }}
              >
                Website development Frameworks we Expertise
              </h2>
            </div>
            <div className="row ">
              <div className="col-lg-4 col-12">
                <div className="platform_box">
                  <div className="webdframeworks_icons ">
                    <img
                      src="./SGimage/reactjs.webp"
                      alt="ReactJS Development "
                      title="ReactJS Development "
                      className=""
                      style={{ width: "230px", borderRadius: "50px" }}
                    />
                  </div>
                  <h3 className="sub_title">React JS</h3>
                  <p
                    className="sub_contents"
                    style={{ textDecorationLine: "none" }}
                  >
                    React JS is one of the important tools that we have. It is
                    mostly used in building both short and long websites. It is
                    very optimised making your website load supper fast on all
                    devices. React JS is proven technology and it is being used
                    by huge companies like Meta (Facebook)
                  </p>
                  <p></p>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="platform_box">
                  <div className="webdframeworks_icons javascript-icon">
                    <img
                      src="./SGimage/js.webp"
                      alt="JS Framework Development "
                      title="JS Framework Development "
                      className=""
                      style={{ width: "230px", borderRadius: "50px" }}
                    />
                  </div>
                  <h3 className="sub_title">JavaScript</h3>
                  <p className="sub_contents">
                    Java Script is the go-to tool for the developing Front End
                    of the website. Front End is the part that the user sees and
                    interacts with. It is also used to manage the interaction
                    between the website and the web servers.
                  </p>
                  <p></p>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="platform_box">
                  <div className="webdframeworks_icons javascript-icon-1">
                    <img
                      src="./SGimage/htmlimg.webp"
                      alt="HTML & CSS Development "
                      title="HTML & CSS  Development "
                      // className="webdesign_frameworks_sprite"
                      // style={{ objectPosition: "-766px -25px" }}
                    />
                  </div>
                  <h3 className="sub_title">HTML & CSS</h3>
                  <p className="sub_contents">
                    HTML is the most commonly used language for building a
                    website or any web page. It is used to create the basic
                    structure of the website. It is the skeleton of your website
                    telling everything where certain elements will be placed.
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-4 col-12">
                <div className="platform_box">
                  <div className="webdframeworks_icons javascript-icon-2 ">
                    <img
                      src="./SGimage/nodejs.jpg"
                      alt="NodeJS Framework Development "
                      title="NodeJS Framework Development "
                      // className="webdesign_frameworks_sprite"
                      style={{ borderRadius: "50px" }}
                    />
                  </div>
                  <h3 className="sub_title">Node JS</h3>
                  <p className="sub_contents">
                    Node JS is extremely useful for real-time interactions. Most
                    of the chat features on the website use Node JS. Node JS
                    beautifully handles cross-platform applications. It supports
                    other technologies. It makes sure that other technologies
                    works smoothly with each other.
                  </p>
                  <p></p>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="platform_box">
                  <div className="webdframeworks_icons javascript-icon-3 ">
                    <img
                      src="./SGimage/express-js.webp"
                      alt="Express JS Development "
                      title="Express JS Development "
                      style={{ width: "230px", borderRadius: "50px" }}

                      // className="webdesign_frameworks_sprite"
                    />
                  </div>
                  <h3 className="sub_title">Express JS</h3>
                  <p className="sub_contents">
                    Leverage the prowess of Express JS for real-time
                    interactions on your website. This framework excels in
                    powering chat features, ensuring seamless cross-platform
                    applications. Express JS seamlessly integrates with various
                    technologies.
                  </p>
                  <p></p>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="platform_box">
                  <div className="webdframeworks_icons javascript-icon-4 ">
                    <img
                      src="./SGimage/mongodb-logo.webp"
                      alt="Mongo DB Development "
                      title="Mongo DB Development "
                      style={{ width: "230px", borderRadius: "50px" }}
                      // className="webdesign_frameworks_sprite"
                      // style={{ objectPosition: "-766px -25px" }}
                    />
                  </div>
                  <h3 className="sub_title">Mongo DB</h3>
                  <p className="sub_contents">
                    MongoDB, a robust and scalable NoSQL database, Widely
                    utilized for chat features, MongoDB seamlessly integrates
                    with Node.js, ensuring smooth cross-platform applications.
                    Its versatility allows for seamless collaboration with
                    various technologies.
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="mid_section sol-website "
          id="webdesign_jsframeworks"
        ></section>
        <section className="mid_section" id="webdesign_industry">
          <div className="container">
            <div className="row">
              <div className="col-md-12 section-heading text-center grident-color-sub-title">
                <h2
                  className="hire_modal_hd"
                  style={{ textAlign: "center", fontSize: "50px" }}
                >
                  Industries we serve
                </h2>
                <p>
                  We've helped customers in various sectors with highly scalable
                  &amp; secure Web App development solutions.{" "}
                </p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-2">
                <div className="webdesign_indusbox">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={50} // Initial width of the SVG
                    height={50} // Initial height of the SVG
                    viewBox="0 0 32 32"
                    className="icon"
                  >
                    <path
                      fill="white"
                      d="M26 30h-2v-3a5.006 5.006 0 0 0-5-5h-6a5.006 5.006 0 0 0-5 5v3H6v-3a7.008 7.008 0 0 1 7-7h6a7.008 7.008 0 0 1 7 7zM5 6a1 1 0 0 0-1 1v9h2V7a1 1 0 0 0-1-1"
                    ></path>
                    <path
                      fill="white"
                      d="M4 2v2h5v7a7 7 0 0 0 14 0V4h5V2Zm7 2h10v3H11Zm5 12a5 5 0 0 1-5-5V9h10v2a5 5 0 0 1-5 5"
                    ></path>
                  </svg>
                  <p>Education</p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="webdesign_indusbox">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={48}
                    height={48}
                    viewBox="0 0 48 48"
                  >
                    <g
                      fill="none"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M30.24 19.1c-2.002.008-3.798 1.76-3.798 3.798v16.864c0 1.972 1.807 3.738 3.738 3.738h3.751c2.042 0 3.74-1.754 3.74-3.74V22.733c0-2.02-1.806-3.656-3.75-3.648zm-3.772 5.818h11.2m-11.2 12.752h11.2M30.3 22.003h3.33"></path>
                      <path d="M32.977 40.438a.988.988 0 1 1 0-.001zm-22.649 2.675v-10.2c0-5.603 4.811-9.095 9.096-9.095s6.151 2.046 7.02 3.03m.212-15.205a7.143 7.143 0 1 1 0-.008z"></path>
                    </g>
                  </svg>
                  <p>Telecom</p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="webdesign_indusbox">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={48}
                    height={48}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M18.06 23h1.66c.84 0 1.53-.65 1.63-1.47L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26c1.44 1.42 2.43 2.89 2.43 5.29zM1 22v-1h15.03v1c0 .54-.45 1-1.03 1H2c-.55 0-1-.46-1-1m15.03-7C16.03 7 1 7 1 15zM1 17h15v2H1z"
                    ></path>
                  </svg>
                  <p>Food</p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="webdesign_indusbox">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={48}
                    height={48}
                    viewBox="0 0 48 48"
                  >
                    <g
                      fill="none"
                      stroke="white"
                      strokeLinejoin="round"
                      strokeWidth={4}
                    >
                      <path d="M42 8H20a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2ZM4 34h14V20h-7l-7 6.462z"></path>
                      <path
                        strokeLinecap="round"
                        d="M18 36a4 4 0 0 1-8 0m30 0a4 4 0 0 1-8 0"
                      ></path>
                    </g>
                  </svg>
                  <p>Transport</p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="webdesign_indusbox">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={48}
                    height={48}
                    viewBox="0 0 48 48"
                  >
                    <g fill="white">
                      <path d="M22 22v-7h4v7h7v4h-7l-.001 7h-4v-7h-7v-4z"></path>
                      <path
                        fillRule="evenodd"
                        d="M13.823 36.991c2.448 2.211 5.13 4.037 8.158 5.477c1.622.77 3.546.7 5.101-.187c2.623-1.496 4.906-3.297 7.113-5.29c4.679-4.226 7.406-10.041 7.585-16.174l.209-7.151c.024-.832.001-2.666.001-2.666a70.828 70.828 0 0 0-3.162-.426c-3.27-.392-6.526-.781-9.383-2.528l-2.037-1.245a5.537 5.537 0 0 0-5.737 0L19.72 7.994c-3.267 1.996-7.248 2.374-11.101 2.74c-.873.083-1.74.166-2.59.266c0 0-.024 1.845 0 2.689l.209 7.128c.179 6.133 2.906 11.948 7.585 16.174m-5.804-24.19c0 .32.003.615.01.83l.208 7.128c.163 5.57 2.64 10.876 6.926 14.748c2.312 2.087 4.833 3.802 7.677 5.154a3.545 3.545 0 0 0 3.252-.117c2.455-1.4 4.619-3.101 6.763-5.037c4.286-3.872 6.763-9.177 6.926-14.748l.209-7.151c.006-.224.01-.539.01-.875c-.468-.06-.944-.117-1.43-.176l-.054-.006a68.637 68.637 0 0 1-3.322-.455c-2.244-.38-4.592-.999-6.792-2.343l-2.037-1.246a3.537 3.537 0 0 0-3.651 0L20.763 9.7c-2.32 1.417-4.88 2.089-7.347 2.486c-1.53.246-3.178.403-4.721.551z"
                        clipRule="evenodd"
                      ></path>
                    </g>
                  </svg>
                  <p>Health</p>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-2">
                <div className="webdesign_indusbox">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={48}
                    height={48}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M6.75 8a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75zm.75 3.5v-2h9v2zm6.25 2.5a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75h3.5a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75zm.75 2.5v-1h2v1zM4 3a2 2 0 0 0-1 3.732V20.25c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75V6.732A2 2 0 0 0 20 3zm15.5 4v12.5h-8v-4.75a.75.75 0 0 0-.75-.75h-4a.75.75 0 0 0-.75.75v4.75H4.5V7zm-16-2a.5.5 0 0 1 .5-.5h16a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5M10 19.5H7.5v-4H10z"
                    ></path>
                  </svg>
                  <p>Retail </p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="webdesign_indusbox">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={48}
                    height={48}
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="none"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={32}
                      d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81c-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0 0 18 0c96.26-65.34 184.09-143.09 183-252.42c-.54-52.67-42.32-96.81-95.08-96.81"
                    ></path>
                    <path
                      fill="none"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={32}
                      d="M48 256h112l48-96l48 160l48-96l32 64h128"
                    ></path>
                  </svg>
                  <p>Fintech </p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="webdesign_indusbox">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={48}
                    height={48}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"
                    ></path>
                  </svg>
                  <p>Ecommerce</p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="webdesign_indusbox">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={48}
                    height={48}
                    viewBox="0 0 2048 2048"
                  >
                    <path
                      fill="white"
                      d="M256 384h128v128H256zm0 256h128v128H256zm896-256h128v128h-128zm731 896h-310l155-154zm-475-320q0-26 19-45t45-19q26 0 45 19t19 45q0 26-19 45t-45 19q-26 0-45-19t-19-45m640-320v896h-128V768H640v549l320-319l448 447l128-128v182l-37 37h-182l-357-358l-320 321v165h640v128H512v-640H0V0h1536v640zm-640 0V128h-128v128h-128V128H384v128H256V128H128v896h128V896h128v128h128V640zm384 1024h256v128h-256v256h-128v-256h-256v-128h256v-256h128z"
                    ></path>
                  </svg>
                  <p>Media</p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="webdesign_indusbox">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={48}
                    height={48}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M19 14.77v-7l-5.5-3.847L8 7.77v2.693H7V7.288l6.5-4.634L20 7.288v7.481zm-4.904-6.328h.808v-.807h-.808zm-2 0h.808v-.807h-.808zm2 2h.808v-.807h-.808zm-2 0h.808v-.807h-.808zm-5.692 8.212l7.565 2.208l5.989-1.85q-.03-.456-.273-.657q-.243-.201-.55-.201H14.39q-.634 0-1.15-.05q-.515-.05-1.055-.239l-2.19-.717l.338-.988l2.025.732q.482.183 1.096.22q.613.036 1.68.042q0-.467-.172-.756q-.172-.288-.493-.402l-5.754-2.111q-.057-.02-.105-.03q-.048-.009-.106-.009h-2.1zm-4 2.346v-8.154H8.48q.14 0 .288.032q.148.032.275.074l5.78 2.117q.536.204.923.733q.388.529.388 1.352h3q.903 0 1.384.565q.481.566.481 1.435v.615l-6.98 2.154l-7.616-2.22V21zm1-1h2v-6.154h-2z"
                    ></path>
                  </svg>
                  <p>RealEstate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="custweb_servs" className="mid_section sol-website grey-bg">
          <div className="container">
            <div className="cm_head2 section-heading text-center grident-color-sub-title">
              <h2
                className="hire_modal_hd"
                style={{ textAlign: "center", fontSize: "40px" }}
              >
                What Set us ahead in Custom Website Development
              </h2>
              <p style={{ textAlign: "center" }}>
                Adapt to evolving customer demands and stay ahead of market
                trends by embracing our custom web development services. Unlock
                the potential of attracting a high-quality client base through
                innovative solutions tailored to meet dynamic requirements.
              </p>
            </div>
            <div className="row mt-5">
              <div className="col-md-4 mt-3">
                <div className="sol-box ">
                  <div className="custserv_ictit">
                    <div className="sol-icon">
                      <div className="webporteldev_icons">
                        <img
                          src="./SGimage/User-Management.webp"
                          alt="Requirement Analysis "
                          title="Requirement Analysis "
                        />
                      </div>
                    </div>
                    <h2 className="title grident-color-sub-title">
                      Requirement Analysis
                    </h2>
                  </div>
                  <p className="desc">
                    Brainstorm with us, gather the industry’s best ideas and
                    convert them to reality with our solutions.{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-4 mt-3">
                <div className="sol-box">
                  <div className="custserv_ictit">
                    <div className="sol-icon">
                      <div className="webporteldev_icons">
                        <img
                          src="./SGimage/Payment-gateway-management.webp"
                          alt="Impressive Web - Designs "
                          title="Impressive Web - Designs "
                          // className="custweb_servs_sprite"
                          // style={{ objectPosition: "-3631px -24px" }}
                        />
                      </div>
                    </div>
                    <h2 className="title grident-color-sub-title">
                      Impressive Web - Designs
                    </h2>
                  </div>
                  <p className="desc">
                    Develop your websites with all the latest designs and
                    convert a large portion of traffic into leads.{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-4 mt-3">
                <div className="sol-box ">
                  <div className="custserv_ictit">
                    <div className="sol-icon">
                      <div className="webporteldev_icons">
                        <img
                          src="./SGimage/Popup-Banner-management.webp"
                          alt="Responsive Web app "
                          title=" Responsive Web app"
                        />
                      </div>
                    </div>
                    <h2 className="title grident-color-sub-title">
                      Responsive Web app
                    </h2>
                  </div>
                  <p className="desc">
                    Get your website designed in such a way that it is
                    responsive in all website applications.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-4 mt-3">
                <div className="sol-box ">
                  <div className="custserv_ictit">
                    <div className="sol-icon">
                      <div className="webporteldev_icons">
                        <img
                          src="./SGimage/Admin-staff-management-with-permission.webp"
                          alt=" Efficiency in Performance & Speed"
                          title="Efficiency in Performance & Speed "
                        />
                      </div>
                    </div>
                    <h2 className="title grident-color-sub-title">
                      Efficiency in Performance &amp; Speed
                    </h2>
                  </div>
                  <p className="desc">
                    Reduce your website bounce rate by improving performance
                    efficiency and speed.{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-4 mt-3">
                <div className="sol-box">
                  <div className="custserv_ictit">
                    <div className="sol-icon">
                      <div className="webporteldev_icons">
                        <img
                          src="./SGimage/Admin-commission-setting.webp"
                          alt="Highly Secured & Scalable "
                          title="Highly Secured & Scalable "
                        />
                      </div>
                    </div>
                    <h2 className="title grident-color-sub-title">
                      Highly Secured &amp; Scalable
                    </h2>
                  </div>
                  <p className="desc">
                    Build your secure and scalable website that complies with
                    all the latest security regulations.{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-4 mt-3">
                <div className="sol-box">
                  <div className="custserv_ictit">
                    <div className="sol-icon">
                      <div className="webporteldev_icons">
                        <img
                          src="./SGimage/Refer-&-Earn.webp"
                          alt="SEO Friendly "
                          title="SEO Friendly "
                        />
                      </div>
                    </div>
                    <h2 className="title grident-color-sub-title">
                      SEO Friendly
                    </h2>
                  </div>
                  <p className="desc">
                    Let your website rank higher on all the search engines with
                    inbuilt SEO features.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SimilarFile />
      </main>
    </>
  );
};

export default WbsiteDevelopment;
