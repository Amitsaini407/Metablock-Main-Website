import React from "react";
import "./GeneralGamesDevelopment.css";
import AutoPlay from "../../MainPage/ReactSlick";
import AutoPlaygame from "./Gameslider";
import { useNavigate } from "react-router-dom";
import GameDemandSlider from "./GameDemandSlider";
import WhyChooseUs from "../../MainPage/WhyChooseUs";
const GeneralGamesDevelopment = () => {
  const encodedText = encodeURIComponent(
    "Hello, I am Interested in Game Development"
  );

  const navigate = useNavigate();

  return (
    <div>
      {" "}
      <main id="game_dev_comp_main">
        <section className="game_dev_comp_banner">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-12">
                <div className="banner_sec">
                  <h1 className="ourservice-titles-new">
                    <span className="bnr_clr_title">Game Development</span>
                    <br /> Company
                  </h1>
                  <p className="contents">
                    When it comes to cutting-edge game development, go with MetaBlock Technologies.
                  </p>
                  <a
                    target="_blank"
                    href={`https://api.whatsapp.com/send?phone=9358593003&text=${encodedText}`}
                  >
                    <div
                      className="HddrBtns banner_btn_sec"
                    // onClick={() => navigate("/contact-us")}
                    >
                      <button
                        data-toggle="modal"
                        data-target="#popup_form_modal"
                        className="btn banner_btn"
                      >
                        <span>Tap for a Quotation</span>
                      </button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="game_dev_comp_services">
          <div className="container">
            <h2 className="title ">Our Game Development Services Range</h2>
            <div className="nft-marketplace-usecase slider">
              {/* <div className="item">
                <a href="https://www.MetaBlocktechnologies.com/blog/web3-game-development" target="_blank">
                  <div className="service_box">
                    <div className="img_sec">
                      <img src="https://www.MetaBlocktechnologies.com/asset/inner-pages-new/game-development-company/service1.webp" className="img-fluid lazyload" alt="Web3_Game_Development" title="Web3 Game Development" />
                    </div>
                    <h3 className="sub_title">Web3 Game Development</h3>
                    <p className="sub_contents">Utilizing blockchain technologies, our group of video game developers constructs secure and decentralized Web3 games. Our specialization includes decentralized governance, player ownership, and the provision of fair gameplay
                      experiences.</p>
                  </div>
                </a>
              </div> */}
              {/* <div className="item">
                <a href="https://www.MetaBlocktechnologies.com/nft-game-development" target="_blank">
                  <div className="service_box">
                    <div className="img_sec">
                      <img src="https://www.MetaBlocktechnologies.com/asset/inner-pages-new/game-development-company/service2.webp" className="img-fluid lazyload" alt="nft_Game_Development" title="NFT Game Development" />
                    </div>
                    <h3 className="sub_title">NFT Game Development</h3>
                    <p className="sub_contents">Specializing in NFT-infused games, we elevate in-game assets with real-world significance. By utilizing top-tier blockchains, we empower players to craft, trade, and vend NFTs directly within the gaming ecosystem.</p>
                  </div>
                </a>
              </div> */}
              {/* <div className="item">
                <a href="https://www.MetaBlocktechnologies.com/metaverse-game-development" target="_blank">
                  <div className="service_box">
                    <div className="img_sec">
                      <img src="https://www.MetaBlocktechnologies.com/asset/inner-pages-new/game-development-company/service3.webp" className="img-fluid lazyload" alt="Metaverse_Game_Development" title="Metaverse Game Development" />
                    </div>
                    <h3 className="sub_title">Metaverse Game Development</h3>
                    <p className="sub_contents">As a premier video game development company, we strongly prioritize the creation of immersive metaverse games that evolve in sync with their communities. We encompass all the top metaverse features, including interactivity,
                      user-generated content, and social connectivity.</p>
                  </div>
                </a>
              </div> */}
              {/* <div className="item">
                <a href="https://www.MetaBlocktechnologies.com/blockchain-game-development-company" target="_blank">
                  <div className="service_box">
                    <div className="img_sec">
                      <img src="https://www.MetaBlocktechnologies.com/asset/inner-pages-new/game-development-company/service4.webp" className="img-fluid lazyload" alt="Blockchain_Game_Development" title="Blockchain Game Development" />
                    </div>
                    <h3 className="sub_title">Blockchain Game Development</h3>
                    <p className="sub_contents">Covering a spectrum of blockchain game development solutions, our team offers services that span from incorporating smart contracts to conducting security audits. Our blockchain gaming projects encompass the integration
                      of player-centric economies and the implementation of secure in-game transactions.</p>
                  </div>
                </a>
              </div> */}
              {/* <div className="item">
                <a href="https://www.MetaBlocktechnologies.com/contact-us" target="_blank">
                  <div className="service_box">
                    <div className="img_sec">
                      <img src="https://www.MetaBlocktechnologies.com/asset/inner-pages-new/game-development-company/service5.webp" className="img-fluid lazyload" alt="Mobile_Game_Development" title="Mobile Game Development" />
                    </div>
                    <h3 className="sub_title">Mobile Game Development</h3>
                    <p className="sub_contents">We specialize in offering complete mobile gaming solutions for iOS and Android platforms. As a premier game development agency, we guarantee the creation of highly polished, high-performance games with captivating player
                      experiences.</p>
                  </div>
                </a>
              </div> */}
              {/* <div className="item">
                <a href="https://www.MetaBlocktechnologies.com/contact-us" target="_blank">
                  <div className="service_box">
                    <div className="img_sec">
                      <img src="https://www.MetaBlocktechnologies.com/asset/inner-pages-new/game-development-company/service6.webp" className="img-fluid lazyload" alt="AR_VR_Game_Development" title="AR and VR Game Development" />
                    </div>
                    <h3 className="sub_title">AR and VR Game Development</h3>
                    <p className="sub_contents">We develop AR and VR games that offer players engaging real-time experiences. Our games feature interactive gameplay, high-quality graphics, and leverage advanced AR/VR and devices, platforms, and frameworks.</p>
                  </div>
                </a>
              </div> */}
              {/* <div className="item">
                <a href="https://www.MetaBlocktechnologies.com/contact-us" target="_blank">
                  <div className="service_box">
                    <div className="img_sec">
                      <img src="https://www.MetaBlocktechnologies.com/asset/inner-pages-new/game-development-company/service7.webp" className="img-fluid lazyload" alt="Unity_3D_Game_Development" title="Unity 3D Game Development" />
                    </div>
                    <h3 className="sub_title">Unity 3D Game Development</h3>
                    <p className="sub_contents">Our team of Unity game developers utilizes the latest attributes of the foremost game engine to produce visually captivating and interactive 2D and 3D games. Furthermore, we ensure the seamless performance of these games
                      on numerous platforms.</p>
                  </div>
                </a>
              </div> */}
              {/* <div className="item">
                <a href="https://www.MetaBlocktechnologies.com/contact-us" target="_blank">
                  <div className="service_box">
                    <div className="img_sec">
                      <img src="https://www.MetaBlocktechnologies.com/asset/inner-pages-new/game-development-company/service8.webp" className="img-fluid lazyload" alt="Desktop_Game_Development" title="Desktop Game Development" />
                    </div>
                    <h3 className="sub_title">Desktop Game Development</h3>
                    <p className="sub_contents">Our proficiency lies in crafting intricate, top-tier games through the sophisticated toolkit of Unreal Engine. Our creations enthrall gamers with breathtaking graphics, immersive settings, and exhilarating gameplay moments.</p>
                  </div>
                </a>
              </div> */}
              {/* <div className="item">
                <a href="https://www.MetaBlocktechnologies.com/contact-us" target="_blank">
                  <div className="service_box">
                    <div className="img_sec">
                      <img src="https://www.MetaBlocktechnologies.com/asset/inner-pages-new/game-development-company/service9.webp" className="img-fluid lazyload" alt="Unreal_Game_Development" title="Unreal Game Development" />
                    </div>
                    <h3 className="sub_title">Unreal Game Development</h3>
                    <p className="sub_contents">Our proficiency lies in crafting intricate, top-tier games through the sophisticated toolkit of Unreal Engine. Our creations enthrall gamers with breathtaking graphics, immersive settings, and exhilarating gameplay moments.</p>
                  </div>
                </a>
              </div> */}
              {/* <div className="item">
                <a href="https://www.MetaBlocktechnologies.com/contact-us" target="_blank">
                  <div className="service_box">
                    <div className="img_sec">
                      <img src="https://www.MetaBlocktechnologies.com/asset/inner-pages-new/game-development-company/service10.webp" className="img-fluid lazyload" alt="HTML5_Game_Development" title="HTML5 Game Development" />
                    </div>
                    <h3 className="sub_title">HTML5 Game Development</h3>
                    <p className="sub_contents">Focusing on HTML5 game development, we design cross-platform games that align with client needs. Our games are engaging, easily accessible, and deliver flawless performance on web browsers across a range of platforms.</p>
                  </div>
                </a>
              </div> */}
              <AutoPlaygame />
            </div>
          </div>
        </section>
        <section className="game_dev_comp_platform">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-5 p-lg-0">
                <img
                  style={{ width: "80%" }}
                  src="images/gaming-web-image.webp"
                  className="img-fluid lazyload"
                  alt="Game_Development_on_Prime_Platforms"
                  title="Our Game Development on Prime Platforms"
                />
              </div>
              <div className="col-lg-7 cus_col">
                <h2 className="title">
                  Our Game Development on Prime Platforms
                </h2>
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-12">
                    <div className="platform_box-inner">
                      <div className="head_sec">
                        <img
                          src="./images/vr-goggles.webp"
                          className="sprite_icons lazyload"
                          alt="AR_VR_Icon"
                          title="AR and VR"
                        // style={{ objectPosition: "0px 0px" }}
                        />
                        <h3 className="sub_title">AR and VR</h3>
                      </div>
                      <p className="sub_contents">
                        We make use of latest AR and VR technologies to produce
                        thrilling games.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12">
                    <div className="platform_box-inner">
                      <div className="head_sec">
                        <img
                          src="./images/game-console.webp"
                          className="sprite_icons lazyload"
                          alt="Console_Icon"
                          title="Console"
                        // style={{ objectPosition: "-94px 0px" }}
                        />
                        <h3 className="sub_title">Console</h3>
                      </div>
                      <p className="sub_contents">
                        We create games for prominent console platforms such as
                        PlayStation 4, Nintendo.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12">
                    <div className="platform_box-inner">
                      <div className="head_sec">
                        <img
                          src="./images/gaming.webp"
                          className="sprite_icons lazyload"
                          alt="Mobile_Icon"
                          title="Mobile"
                        // style={{ objectPosition: "-186px 0px" }}
                        />
                        <h3 className="sub_title">Mobile</h3>
                      </div>
                      <p className="sub_contents">
                        We develop games for both Android and iOS platforms
                        in cross-platform development.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12">
                    <div className="platform_box-inner">
                      <div className="head_sec">
                        <img
                          src="./images/computer-game.webp"
                          className="sprite_icons lazyload"
                          alt="PC_Icon"
                          title="PC"
                        // style={{ objectPosition: "-280px 0px" }}
                        />
                        <h3 className="sub_title">PC</h3>
                      </div>
                      <p className="sub_contents">
                        We offer comprehensive game development for personal
                        computers, with the capability to port.
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  target="_blank"
                  href={`https://api.whatsapp.com/send?phone=9358593003&text=${encodedText}`}
                >
                  <div
                    className="game_dev_btn_sec"
                  // onClick={() => navigate("/contact-us")}
                  >
                    <button
                      data-toggle="modal"
                      data-target="#popup_form_modal"
                      className="btn game_dev_btn"
                    >
                      <span>Get A Live Demo</span>
                    </button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="game_dev_comp_techstack">
          <div className="container">
            <h2 className="title">Technologies we are skilled in</h2>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="tech_box">
                  <h3 className="sub_title">Unreal Engine</h3>
                  <p className="sub_contents">
                    With its powerful renderer, physics, AI, and real-time features, Unreal Engine is a versatile game development framework that makes it possible to create visually stunning, interactive experiences for a variety of platforms.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="tech_box">
                  <h3 className="sub_title">Unity</h3>
                  <p className="sub_contents">
                    Unity is a well-known cross-platform game engine that gives our developers the ability to write interactive 2D and 3D games, simulations, development environment and scripting capabilities.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="tech_box">
                  <h3 className="sub_title">Node</h3>
                  <p className="sub_contents">
                    Node is a potent platform for game development that is renowned for its dynamic physics, high-fidelity graphics, and AI capabilities. These features enable our creators to create engaging and visually appealing experiences.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="tech_box">
                  <h3 className="sub_title">Java</h3>
                  <p className="sub_contents">
                    One of the most popular and adaptable system programming languages is Java, which is valued for its effectiveness, portability, and low-level control when creating a wide range of software solutions and applications.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="tech_box">
                  <h3 className="sub_title">C++</h3>
                  <p className="sub_contents">
                    With object-oriented features added, C++ is a sophisticated programming language that expands the capabilities of C, allowing for efficient, modular, and versatile software development across a range of applications and industries.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="tech_box">
                  <h3 className="sub_title">React</h3>
                  <p className="sub_contents">
                    Microsoft has created a contemporary object-oriented programming language called React. It is extensively utilized in the development of a wide range of applications, including as desktop, web, and game development.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="tech_box">
                  <h3 className="sub_title">Swift</h3>
                  <p className="sub_contents">
                    Swift is a robust and user-friendly programming language
                    created by Apple for developing applications across their
                    ecosystem. It offers modern syntax, high performance, and
                    safety features.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="tech_box">
                  <h3 className="sub_title">HTML</h3>
                  <p className="sub_contents">
                    The standard language for writing and organizing web information is called HTML (Hypertext Markup Language). It makes use of tags to specify the components and design of web pages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="game_dev_comp_quant">
          <div className="container">
            <h2 className="title">Quantifying Our Journey</h2>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="quant_list">
                  <img
                    src="./images/rating.webp"
                    className="sprite_icons lazyload"
                    alt="250+_Innovators_Crafting_Games"
                    title="250+ Innovators Crafting Games"
                  // style={{ objectPosition: "0px 0px" }}
                  />
                  <div className="sub_title">
                    250+ Innovators Crafting Games
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="quant_list">
                  <img
                    src="./images/handshake.webp"
                    className="sprite_icons lazyload"
                    alt="400+_Projects_Set_in_Motion"
                    title="400+ Projects Set in Motion"
                  // style={{ objectPosition: "-318px 0px" }}
                  />
                  <div className="sub_title">400+ Projects Set in Motion</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="quant_list">
                  <img
                    src="./images/coordinator.webp"
                    className="sprite_icons lazyload"
                    alt="15+_Years_of_Gaming_Mastery"
                    title="15+ Years of Gaming Mastery"
                  // style={{ objectPosition: "-647px 0px" }}
                  />
                  <div className="sub_title">15+ Years of Gaming Mastery</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="quant_list">
                  <img
                    src="./images/enjoy.webp"
                    className="sprite_icons lazyload"
                    alt="75+_Countries_Immersed_in_Fun"
                    title="75+ Countries Immersed in Fun"
                  // style={{ objectPosition: "-989px 0px" }}
                  />
                  <div className="sub_title">75+ Countries Immersed in Fun</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <GameDemandSlider />
        <section className="game_dev_comp_production">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-12 order-2 order-lg-1">
                <div className="img_sec">
                  <img
                    style={{ borderRadius: "10px", width: "200%" }}
                    src="./images/stake-img.webp"
                    className="img-fluid lazyload"
                    alt="MetaBlock_Your_go_to_game_development_company"
                    title="MetaBlock Your go-to game development company.Find out why"
                  />
                </div>
              </div>
              <div className="col-lg-7 col-12 order-1 order-lg-2">
                <h2 className="title">
                  Our Game Production From Start to Finish
                </h2>
                <div className="why_scrollsec">
                  <div className="why_box">
                    <div className="head_sec">
                      <img
                        style={{ width: "40px" }}
                        src="./images/blueprint.webp"
                        className="img-fluid lazyload"
                        alt="Game_Production"
                        title="Game Production"
                      />
                      <h3 className="sub_title">Information Collation</h3>
                    </div>
                    <p className="sub_contents">
                      As a dedicated game design company, we carefully consider the requirements of each project. For the purpose of obtaining thorough input, our team sets up regular communication. We provide flawless alignment between both parties from the beginning through documentation and continuous communication.
                    </p>
                  </div>
                  <div className="why_box">
                    <div className="head_sec">
                      <img
                        style={{ width: "40px" }}
                        src="./images/artist.webp"
                        className="img-fluid lazyload"
                        alt="Game_Production"
                        title="Game Production"
                      />
                      <h3 className="sub_title">Blueprinting</h3>
                    </div>
                    <p className="sub_contents">
                      By performing idea analysis and research based on inputs from the customer, we create game design documents, flow structures, and implementation plans. Before moving further with development, collaborative discussions with stakeholders take place before the pre-production and production phases, guaranteeing a thorough understanding.
                    </p>
                  </div>
                  <div className="why_box">
                    <div className="head_sec">
                      <img
                        style={{ width: "40px" }}
                        src="./images/contact.webp"
                        className="img-fluid lazyload"
                        alt="Game_Production"
                        title="Game Production"
                      />
                      <h3 className="sub_title">
                        Imagination Depiction and Asset Creation
                      </h3>
                    </div>
                    <p className="sub_contents">
                      Inspired by the idea and vision of the game, our team creates concept art and sketches. We then painstakingly create a variety of 2D and 3D assets, ranging from props to characters and settings, in our asset creation team, which is made up of modelers, animation specialists, rigging artists, and more. These materials blend in perfectly with the completed 3D artwork and sketches.
                    </p>
                  </div>
                  <div className="why_box">
                    <div className="head_sec">
                      <img
                        style={{ width: "40px" }}
                        src="./images/game-development.webp"
                        className="img-fluid lazyload"
                        alt="Game_Production"
                        title="Game Production"
                      />
                      <h3 className="sub_title">
                        Game Design and Intensive Quality Testing
                      </h3>
                    </div>
                    <p className="sub_contents">
                      Our development team shares practical experience creating games with cutting-edge technologies and top game engines, just like respectable video game companies.
                      Our team also includes skilled testers who painstakingly put every game through a rigorous quality assurance and comprehensive device compatibility evaluation process.
                    </p>
                  </div>
                  <div className="why_box">
                    <div className="head_sec">
                      <img
                        style={{ width: "40px" }}
                        src="./images/gaming.webp"
                        className="img-fluid lazyload"
                        alt="Game_Production"
                        title="Game Production"
                      />
                      <h3 className="sub_title">Help &amp; Upkeep</h3>
                    </div>
                    <p className="sub_contents">
                      Game maintenance and technical support following publication are provided by MetaBlock. We guarantee that games are up to date on all platforms and operating systems. Our services meet industry standards for the gaming sector and range from conventional support packages to customized service-level agreements.
                    </p>
                  </div>
                  <div className="why_box">
                    <div className="head_sec">
                      <img
                        style={{ width: "40px" }}
                        src="./images/computer-game.webp"
                        className="img-fluid lazyload"
                        alt="Game_Production"
                        title="Game Production"
                      />
                      <h3 className="sub_title">
                        {" "}
                        Game Longevity and Revenue Strategies
                      </h3>
                    </div>
                    <p className="sub_contents">
                      Unique in-game events, promotional offers, cosmetic enhancements, and changes to the game economy are all crucial for retaining players and encouraging their engagement in mobile game development. In addition to offering comprehensive game design and development services, we also incorporate methods for in-app purchases (IAPs) and advertising revenue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <WhyChooseUs />
        <section className="game_dev_comp_why">
          <div className="container">
            <div className="why_img_sec">
              <img
                style={{ width: "30px" }}
                src="./images/contact.webp"
                className="img-fluid lazyload"
                alt="MetaBlock_Your_go_to_game_development_company"
                title="MetaBlock Your go-to game development company.Find out  why"
              />
            </div>
            <div className="row align-items-center">
              <div className="col-lg-3 col-12">
                <h2 className="title">
                  <span style={{ color: "#FFA024" }}>MetaBlock</span>
                  <br /> Your go-to game development <br /> company.
                  <br /> Find out why
                </h2>
                <p className="contents">
                  Every initiative we work on improves the brand's reputation and ignites passionate discussions among gamers because we follow our hobbies and inspirations. Come along with us to personally witness the transforming effect!
                </p>
                <a
                  target="_blank"
                  href={`https://api.whatsapp.com/send?phone=9358593003&text=${encodedText}`}
                >
                  <div className="game_dev_btn_sec">
                    <button
                      data-toggle="modal"
                      data-target="#popup_form_modal"
                      className="btn game_dev_btn"
                    >
                      <span>Tap for a Quotation</span>
                    </button>
                  </div>
                </a>
              </div>
              <div className="col-lg-5 col-12">
                <div className="img_sec">
                  <img
                    // style={{ paddingLeft: "150px" }}
                    src="./images/3dimage-in.webp"
                    className="lazyload go-to-gamedevelopment"
                    alt="MetaBlock_Your_go_to_game_development_company"
                    title="MetaBlock Your go-to game development company.Find out why"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="why_scrollsec">
                  <div className="why_box">
                    <h3 className="sub_title">Flex Method</h3>
                    <p className="sub_contents">
                      Our group uses an agile development methodology that is iterative and product-centric. Development is divided into several sprints, with functional features being created at each stage to guarantee the best possible delivery quality.
                    </p>
                  </div>
                  <div className="why_box">
                    <h3 className="sub_title">Passionate Game Creators</h3>
                    <p className="sub_contents">
                      Using a staff of more than 350 people, we create amazing games that combine creativity, eye-catching graphics, and sound design.
                      We are experts in both the business and creative facets of video game development, driven by our close observation of market developments and technological advancements.
                    </p>
                  </div>
                  <div className="why_box">
                    <h3 className="sub_title">Eclectic Portfolio</h3>
                    <p className="sub_contents">
                      We have more than 400 amazing games in our vast collection, available for Windows, Web, iOS, AR/VR, Android, and more platforms.
                      There are many other genres to choose from, including sports, action, RPG, arcade, MMORPG, and casual and hyper-casual.
                    </p>
                  </div>
                  <div className="why_box">
                    <h3 className="sub_title">Different Engagement Formats</h3>
                    <p className="sub_contents">
                      We provide a variety of alternatives for game production, including resource-based, fixed cost, time and material, and more.
                      Make a decision based on the preferences and scope of your project to choose the best engagement model.
                    </p>
                  </div>
                  <div className="why_box">
                    <h3 className="sub_title">Agile Connection</h3>
                    <p className="sub_contents">
                      Our approach to communicating is tailored to meet your specific requirements. Communicate with us via phone calls, emails, or instant chat that works with your schedule and preferences.
                    </p>
                  </div>
                  <div className="why_box">
                    <h3 className="sub_title">Ease of Access</h3>
                    <p className="sub_contents">
                      After becoming a well-known and successful video game brand, we collaborated with numerous small and medium-sized businesses (SMBs), entrepreneurs, and government agencies from different industries all over the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GeneralGamesDevelopment;
