import React from "react";
import "../gernralgames/GeneralGamesDevelopment.css";
import AutoPlay from "../../MainPage/ReactSlick";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import AutoPlaygame from "../gernralgames/Gameslider";
import GameDemandSlider from "../gernralgames/GameDemandSlider";
const RouletteGameDevelopment = () => {
  const encodedText = encodeURIComponent(
    "Hello, I am Interested in Game Development"
  );

  const navigate = useNavigate();

  return (
    <div>
      {" "}
      <main id="game_dev_comp_main">
        <section className="cta mt-5 position-relative overflow-hidden ">
          {/* <img class="bg-img" src="./assets/img/—webptree—casino slot with chips and_5986400.webp" alt=""> */}
          {/* <div class="bg-filter-dark"></div> */}
          {/* <img class="bg-img" src="./assets/img/h2-img-3.webp" alt=""> */}
          <div className="row">
            <div className="cta-content ps-5 col-lg-6 d-flex align-items-center overflow-hidden">
              <div className="container  row gx-5  align-items-center">
                <h1 className="display-5  glow-text lh-1 text-white fw-bold g-text">
                  Roulette Game
                  <span style={{ fontWeight: "lighter" }}>
                    {" "}
                    Development <span></span>
                  </span>
                </h1>
                {/* <h2 class="text-white display-1 lh-1 mb-4 ">
              WE MAKE DREAMS <br> COME TO LIFE
          </h2> */}
                <h3 className=" mb-4 mt-4 txt-center-m">
                  Top Rated Roulette Game Developer
                </h3>
                <p
                  style={{ color: "white" }}
                  className=" fw-normal mb-4 txt-center-m"
                >
                  One of the top companies for developing Roulette games is MetaBlock. Our skilled group of Roulette game developers specializes in making games that are both easy to use and graphically appealing. We provide cutting-edge features that improve the overall play experience for fans of Roulette all over the world. Our mission is to provide players all around the world with an unmatched Roulette gaming experience that piques their curiosity and brings them delight.
                </p>
                <div className="d-flex flex-row"> {/* Parent container with flex-row class */}
                  <div className="d-flex btn-box flex-column flex-lg-row align-items-center fade-in one w-fit">
                    <a
                      target="_blank"
                      href={`https://api.whatsapp.com/send?phone=9358593003&text=${encodedText}`}
                      className="color-btn-inner gap-2"
                    >
                      Get Quote{" "}
                      {/* <ion-icon name="rocket-outline" className="fs-5 rocket" /> */}
                    </a>
                  </div>
                  <div className="d-flex btn-box flex-column flex-lg-row align-items-center fade-in one w-fit" style={{ marginLeft: 15 }}>
                    <a
                      target="_blank"
                      href={`https://api.whatsapp.com/send?phone=9358593003&text=${encodedText}`}
                      className="color-btn-inner gap-2"
                    >
                      See Our Work{" "}
                      {/* <ion-icon name="rocket-outline" className="fs-5 rocket" /> */}
                    </a>
                  </div>
                </div>



                {/* <a href="#!" class="btn btn-outline-primary text-primary1 bg-transparent">Explore games</a> */}
              </div>
            </div>
            <div className="col-lg-6 ps-0">
              <img
                className="cta-content-img1"
                src="./images/Roulettegame1.webp"
                alt='Roulettegame1'
              />
            </div>
          </div>
        </section>

        <section className=".section bg-main position-relative">
          {/* <img class="bg-img" src="./assets/img/—webptree—casino slot with chips and_5986400.webp" alt="">
  <div class="bg-filter-dark"></div> */}
          <div className="row">
            <div className="col-lg-6 ps-0">
              <img
                className="cta-content-img"
                src="./images/Roulettegame2.webp"
                alt='Roulettegame2'
              />
            </div>
            <div className="cta-content ps-5 col-lg-6 d-flex align-items-center overflow-hidden">
              <div style={{ paddingTop: "30px" }} className="container row gx-5 align-items-center">
                <h1 className="display-5 glow-text lh-1 mb-3 text-white fw-bold g-text">
                  Roulette Game Development Services
                </h1>
                {/* <h2 class="text-white display-1 lh-1 mb-4 ">
              WE MAKE DREAMS <br> COME TO LIFE
          </h2> */}
                <h3 style={{ textAlign: "center" }} className="text-white mb-4 mt-4">
                  Developed 100+ Roulette Game
                </h3>
                <p className=" fw-normal text-white mb-4 ">
                  Our team of highly qualified game developers has a wealth of experience in making Roulette games that make you feel nostalgic and bring back happy childhood memories. With their skills, they can create games that perfectly represent the spirit of your history, guaranteeing a fun gaming experience. We have an established track record of success in the industry with the game Roulette. We have always demonstrated that we are the best Roulette game development company with our practical solutions.
                </p>
                {/* <div class="d-flex flex-column flex-lg-row align-items-center fade-in one w-fit">
                  <a href="#!" class="color-btn-inner-inner-inner-inner btn-hover gap-2">Explore games <ion-icon name="rocket-outline" class="fs-5 rocket"></ion-icon></a>
              </div> */}
                {/* <a href="#!" class="btn btn-outline-primary text-primary1 bg-transparent">Explore games</a> */}
              </div>
            </div>
          </div>
          {/* Swiper */}
        </section>

        {/* <section className="game_dev_comp_banner">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-6 col-12">
                                <div className="banner_sec">
                                    <h1 className="title">
                                        <span className="bnr_clr_title">Roulette Game </span>{" "}
                                        <br /> Development
                                    </h1>
                                    <p className="contents">
                                        MetaBlock is a leading Roulette Game development company. Our experienced team of Roulette game developers specialized in creating visually captivating and user-friendly Roulette games. We incorporate advanced features that enhance the overall gaming experience, catering to Roulette enthusiasts worldwide. Our goal is to deliver an unparalleled Roulette gaming experience that captures the interest and enjoyment of players globally.
                                    </p>
                                    <div className="HddrBtns banner_btn_sec"
                                        onClick={() => navigate('/contact-us')}
                                    >
                                        <button
                                            data-toggle="modal"
                                            data-target="#popup_form_modal"
                                            className="btn banner_btn"
                                        >
                                            <span>Tap for a Quotation</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

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
                  Roulette Game Development on Prime Platforms
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
            <div className="Admin-control-main-container">
              <h4>Online Roulette Game Features</h4>
              <div className="Admin-control-inner-container">
                <div className="a-card card-discover card1 col-md-3">
                  <div className="card-icon-title-wrapper">
                    <div className="card__icon pb-1">
                      <div className="icon__wrapper">
                        <img src="./images/Play-with-your-friends.webp" alt="Play with your friends" />
                      </div>
                    </div>
                    <h1 className="card__title fs-4 g-text">
                      Play with your friends
                    </h1>
                  </div>
                  <p className="card__description">
                    Play Roulette using your skills and win to earn real
                    cash. Use your Roulette expertise to earn real money
                    instead of just using it to pass time.
                  </p>
                </div>
                <div className="a-card card-discover card1 col-md-3">
                  <div className="card-icon-title-wrapper">
                    <div className="card__icon pb-1">
                      <div className="icon__wrapper">
                        <img
                          src="./images/Play-Online-with-real-money.webp"
                          alt="Play Online with real money"
                        />
                      </div>
                    </div>
                    <h1 className="card__title fs-4 g-text">
                      Play Online with real money
                    </h1>
                  </div>
                  <p className="card__description">
                    Play Roulette using your skills and win to earn real
                    cash. Use your Roulette expertise to earn real money
                    instead of just using it to pass time.
                  </p>
                </div>

                <div className="a-card card-discover col-md-3">
                  <div className="card-icon-title-wrapper">
                    <div className="card__icon pb-1">
                      <div className="icon__wrapper">
                        <img src="./images/Play-with-Computer.webp" alt="Play with Computer" />
                      </div>
                    </div>
                    <h1 className="card__title fs-4 g-text">
                      Play with Computer
                    </h1>
                  </div>
                  <p className="card__description">
                    Play Roulette using your skills and win to earn real
                    cash. Use your Roulette expertise to earn real money
                    instead of just using it to pass time.
                  </p>
                </div>

                <div className="a-card card-discover col-md-3">
                  <div className="card-icon-title-wrapper">
                    <div className="card__icon pb-1">
                      <div className="icon__wrapper">
                        <img src="./images/Play-with-timer.webp" alt="Play with timer" />
                      </div>
                    </div>
                    <h1 className="card__title fs-4 g-text">Play with timer</h1>
                  </div>
                  <p className="card__description">
                    Play Roulette using your skills and win to earn real
                    cash. Use your Roulette expertise to earn real money
                    instead of just using it to pass time.
                  </p>
                </div>
              </div>
              <div className="Admin-control-inner-container">
                <div className="a-card card-discover card1 col-md-3">
                  <div className="card-icon-title-wrapper">
                    <div className="card__icon pb-1">
                      <div className="icon__wrapper ">
                        <img src="./images/Daily-Bonus.webp" alt='Daily Bonus' />
                      </div>
                    </div>
                    <h1 className="card__title fs-4 g-text">Daily Bonus</h1>
                  </div>
                  <p className="card__description">
                    Play Roulette using your skills and win to earn real
                    cash. Use your Roulette expertise to earn real money
                    instead of just using it to pass time.
                  </p>
                </div>
                <div className="a-card card-discover card1 col-md-3">
                  <div className="card-icon-title-wrapper">
                    <div className="card__icon pb-1">
                      <div className="icon__wrapper ">
                        <img src="./images/Live-Chat.webp" alt='Live Chat' />
                      </div>
                    </div>
                    <h1 className="card__title fs-4 g-text"> Live Chat</h1>
                  </div>
                  <p className="card__description">
                    Play Roulette using your skills and win to earn real
                    cash. Use your Roulette expertise to earn real money
                    instead of just using it to pass time.
                  </p>
                </div>

                <div className="a-card card-discover col-md-3">
                  <div className="card-icon-title-wrapper">
                    <div className="card__icon pb-1">
                      <div className="icon__wrapper">
                        <img src="./images/Refer-&-Earn.webp" alt='Refer & Earn' />
                      </div>
                    </div>
                    <h1 className="card__title fs-4 g-text">Refer & Earn</h1>
                  </div>
                  <p className="card__description">
                    Play Roulette using your skills and win to earn real
                    cash. Use your Roulette expertise to earn real money
                    instead of just using it to pass time.
                  </p>
                </div>

                <div className="a-card card-discover col-md-3">
                  <div className="card-icon-title-wrapper">
                    <div className="card__icon pb-1">
                      <div className="icon__wrapper ">
                        <img
                          src="./images/Quick-Deposit-&-Withdraw-money.webp"
                          alt='Quick Deposit & Withdraw money'
                        />
                      </div>
                    </div>
                    <h1 className="card__title fs-4 g-text">
                      {" "}
                      Quick Deposit & Withdraw money
                    </h1>
                  </div>
                  <p className="card__description">
                    Play Roulette using your skills and win to earn real
                    cash. Use your Roulette expertise to earn real money
                    instead of just using it to pass time.
                  </p>
                </div>
              </div>
              <div className="Admin-control-inner-container">
                <div className="a-card card-discover card1 col-md-3">
                  <div className="card-icon-title-wrapper">
                    <div className="card__icon pb-1">
                      <div className="icon__wrapper ">
                        <img src="./images/Game-history.webp" alt='Game History' />
                      </div>
                    </div>
                    <h1 className="card__title fs-4 g-text">Game History</h1>
                  </div>
                  <p className="card__description">
                    Play Roulette using your skills and win to earn real
                    cash. Use your Roulette expertise to earn real money
                    instead of just using it to pass time.
                  </p>
                </div>
                <div className="a-card card-discover card1 col-md-3">
                  <div className="card-icon-title-wrapper">
                    <div className="card__icon pb-1">
                      <div className="icon__wrapper ">
                        <img src="./images/Auto-move.webp" alt='Auto move' />
                      </div>
                    </div>
                    <h1 className="card__title fs-4 g-text"> Auto move</h1>
                  </div>
                  <p className="card__description">
                    Play Roulette using your skills and win to earn real
                    cash. Use your Roulette expertise to earn real money
                    instead of just using it to pass time.
                  </p>
                </div>

                <div className="a-card card-discover col-md-3">
                  <div className="card-icon-title-wrapper">
                    <div className="card__icon pb-1">
                      <div className="icon__wrapper">
                        <img
                          src="./images/Deposit-&-withdraw-history.webp"
                          alt='Deposit & withdraw history'
                        />
                      </div>
                    </div>
                    <h1 className="card__title fs-4 g-text">
                      Deposit & withdraw history
                    </h1>
                  </div>
                  <p className="card__description">
                    Play Roulette using your skills and win to earn real
                    cash. Use your Roulette expertise to earn real money
                    instead of just using it to pass time.
                  </p>
                </div>

                <div className="a-card card-discover col-md-3">
                  <div className="card-icon-title-wrapper">
                    <div className="card__icon pb-1">
                      <div className="icon__wrapper ">
                        <img src="./images/Live-Support-feature.webp" alt='Live Support features' />
                      </div>
                    </div>
                    <h1 className="card__title fs-4 g-text">
                      Live Support features
                    </h1>
                  </div>
                  <p className="card__description">
                    Play Roulette using your skills and win to earn real
                    cash. Use your Roulette expertise to earn real money
                    instead of just using it to pass time.
                  </p>
                </div>
              </div>
              <div className="Admin-control-inner-container">
                <div className="a-card card-discover card1 col-md-3">
                  <div className="card-icon-title-wrapper">
                    <div className="card__icon pb-1">
                      <div className="icon__wrapper ">
                        <img src="./images/Mobile-and-email-login.webp" alt='Mobile and email login' />
                      </div>
                    </div>
                    <h1 className="card__title fs-4 g-text">
                      Mobile and email login
                    </h1>
                  </div>
                  <p className="card__description">
                    Play Roulette using your skills and win to earn real
                    cash. Use your Roulette expertise to earn real money
                    instead of just using it to pass time.
                  </p>
                </div>
                <div className="a-card card-discover card1 col-md-3">
                  <div className="card-icon-title-wrapper">
                    <div className="card__icon pb-1">
                      <div className="icon__wrapper ">
                        <img src="./images/Multiple-Payment-Option.webp" alt='Multiple Payment Option' />
                      </div>
                    </div>
                    <h1 className="card__title fs-4 g-text">
                      Multiple Payment Option
                    </h1>
                  </div>
                  <p className="card__description">
                    Play Roulette using your skills and win to earn real
                    cash. Use your Roulette expertise to earn real money
                    instead of just using it to pass time.
                  </p>
                </div>

                <div className="a-card card-discover col-md-3">
                  <div className="card-icon-title-wrapper">
                    <div className="card__icon pb-1">
                      <div className="icon__wrapper">
                        <img src="./images/2-and-4-player-system.webp" alt='2&4 player system' />
                      </div>
                    </div>
                    <h1 className="card__title fs-4 g-text">
                      2&4 player system
                    </h1>
                  </div>
                  <p className="card__description">
                    Play Roulette using your skills and win to earn real
                    cash. Use your Roulette expertise to earn real money
                    instead of just using it to pass time.
                  </p>
                </div>

                <div className="a-card card-discover col-md-3">
                  <div className="card-icon-title-wrapper">
                    <div className="card__icon pb-1">
                      <div className="icon__wrapper ">
                        <img src="./images/Tournament-system.webp" alt=' Tournament system' />
                      </div>
                    </div>
                    <h1 className="card__title fs-4 g-text">
                      {" "}
                      Tournament system
                    </h1>
                  </div>
                  <p className="card__description">
                    Play Roulette using your skills and win to earn real
                    cash. Use your Roulette expertise to earn real money
                    instead of just using it to pass time.
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
        <section className="game_dev_comp_services">
          <div className="container">
            <h2 className="title">Our Game Development Services Range</h2>
            <div className="nft-marketplace-usecase slider">
              <AutoPlaygame />
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
                    style={{ borderRadius: "10px", width: "300%" }}
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
                      As a committed game design firm, we thoroughly delve into
                      project requisites. Our team establishes consistent
                      communication to gather comprehensive inputs. By means of
                      documentation and ongoing dialogue, we ensure seamless
                      alignment between both parties from the very outset.
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
                      Conducting concept analysis and research rooted in client
                      inputs, we formulate game design documents, flow
                      structures, and execution strategies. Collaborative
                      dialogues with stakeholders precede subsequent
                      pre-production and production stages, ensuring a
                      comprehensive understanding before commencing development
                    </p>
                  </div>
                  <div className="why_box">
                    <div className="head_sec">
                      <img
                        style={{ width: "40px" }}
                        src="./images/contact.webp"
                        alt="Game_Production"
                        title="Game Production"
                      />
                      <h3 className="sub_title">
                        Imagination Depiction and Asset Creation
                      </h3>
                    </div>
                    <p className="sub_contents">
                      Guided by the game's theme and vision, our team produces
                      concept art and sketches. Our asset production unit,
                      consisting of modelers, animation experts, rigging
                      artists, and more, then meticulously crafts an array of 2D
                      and 3D assets, ranging from props to characters and
                      environments. These assets harmoniously align with the
                      finalized 3D art and sketches.
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
                      Similar to reputable video game firms, our development
                      squad possesses practical familiarity with crafting games
                      using leading game engines and advanced technologies.
                      Additionally, our team features adept testers who
                      meticulously subject each game to rigorous quality
                      assurance and thorough device compatibility assessments.
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
                      MetaBlock delivers post-publishing technical support and
                      game maintenance. We ensure games remain current across
                      devices and operating systems. Our services span standard
                      support packages to tailor-made service-level agreements,
                      aligning with gaming industry benchmarks.
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
                      In mobile game development, player retention and
                      engagement rely on unique in-game events, promotional
                      deals, cosmetic upgrades, and adjustments to the game
                      economy. As a devoted provider of game design and
                      development services, we also integrate approaches to
                      monetize through ads and in-app purchases (IAPs).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="game_dev_comp_why">
          <div className="container">
            {/* <div className="why_img_sec">
              <img
                style={{ width: "30px" }}
                src="./images/contact.webp"
                className="img-fluid lazyload"
                alt="MetaBlock_Your_go_to_game_development_company"
                title="MetaBlock Your go-to game development company.Find out why"
              />
            </div> */}
            <div className="row align-items-center">
              <div className="col-lg-3 col-12">
                <h2 className="ourservice-titles-new">
                  <span style={{ color: "#FFA024" }}>MetaBlock</span>
                  <br /> Your go-to game development <br /> company.
                  <br /> Find out why
                </h2>
                <p className="contents">
                  We pursue our passions and sources of inspiration, which is
                  why every project we undertake elevates the brand's reputation
                  and sparks lively conversations among players. Join us to
                  experience the transformative impact firsthand!
                </p>
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
                      Our team employs an iterative and product-centric agile
                      development approach. We segment development into multiple
                      sprints, crafting functional features during each phase to
                      ensure the highest quality delivery.
                    </p>
                  </div>
                  <div className="why_box">
                    <h3 className="sub_title">Passionate Game Creators</h3>
                    <p className="sub_contents">
                      Harnessing a 350+ member team, we craft remarkable games
                      featuring innovation, captivating art, and solid design.
                      Our mastery spans both creative and business aspects of
                      video games, propelled by vigilant tracking of industry
                      trends and technology.
                    </p>
                  </div>
                  <div className="why_box">
                    <h3 className="sub_title">Eclectic Portfolio</h3>
                    <p className="sub_contents">
                      Our rich selection features over 400 impressive games
                      across Windows, Web, iOS, AR/VR, Android, and platforms.
                      Genres range from casual and hyper-casual to sports, RPG,
                      arcade, MMORPG, and action.
                    </p>
                  </div>
                  <div className="why_box">
                    <h3 className="sub_title">Different Engagement Formats</h3>
                    <p className="sub_contents">
                      We provide diverse game development options: Time and
                      Material, Resource-based, and Fixed Cost models, etc.
                      Tailor your choice to your project's scope and preferences
                      for the ideal engagement model.
                    </p>
                  </div>
                  <div className="why_box">
                    <h3 className="sub_title">Agile Connection</h3>
                    <p className="sub_contents">
                      We customize the communication process according to your
                      distinct needs. Reach out through emails, instant
                      messaging, or calls, aligning with your schedule and
                      preferences.
                    </p>
                  </div>
                  <div className="why_box">
                    <h3 className="sub_title">Ease of Access</h3>
                    <p className="sub_contents">
                      Having established ourselves as a thriving video game
                      brand, we've forged partnerships with multiple Small and
                      Medium-sized Businesses (SMBs), entrepreneurs, and
                      government entities from various sectors around the globe.
                    </p>
                  </div>
                </div>
                <a
                  target="_blank"
                  href={`https://api.whatsapp.com/send?phone=9358593003&text=${encodedText}`}
                >
                  <div
                    className="game_dev_btn_sec"
                    onClick={() => navigate("/contact-us")}
                  >
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
            </div>
          </div>
        </section>
      </main>
    </div >
  );
};

export default RouletteGameDevelopment;
