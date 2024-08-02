import Card from "./MainPage/Card";
import RelatedPortfolioSlider from "./MainPage/RelatedPortfolioSlider";
import AutoPlay from "./MainPage/ReactSlick";
import GenerativeAl from "./MainPage/GenerativeAl";
import React from "react";
import WhyChooseUs from "./MainPage/WhyChooseUs";
import TrandingProduct from "./MainPage/TrandingProduct";
import { Link } from "react-router-dom";
import PlayTOEarnPortfoliio from "./MainPage/PlayToEarnPorfolio";
import MetaversePortfolio from "./MainPage/MetaversePorfolio";
import BlockchainPorfolio from "./MainPage/BlockchainPorfolio";
import ExchangePorfolio from "./MainPage/ExchangePorfolio";
import NFTPorfolio from "./MainPage/NFTPorfolio";
import DefiPorfolio from "./MainPage/DefiPorfolio";
import DAppPorfolio from "./MainPage/DAppPorfolio";
import BrandsWork from "./MainPage/BrandsWork";
import Ourprocesure from "./MainPage/Ourprocesure";
import BenefitsColabratingSlider from "./MainPage/BenefitsOfColabratingSlider";

const SimilarFile = () => {
  return (
    <>
      <div className="responsive-in-black-bg">
        <div
          className="MtaverseSec DapsMainBg OurPrjctBg"
          style={{ background: "black" }}
        >
          <div>
            <WhyChooseUs />
          </div>

          <div className="browse-our-impactful MtaverseSec DapsMainBg OurPrjctBg">
            <div className="container container-1170">
              <div className="row">
                <div className=" col-xl-10">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    className="OurSrvcHdd mb-3"
                  >
                    <div
                      className="title our-service-heading"
                      style={{
                        color: "purple",
                        margin: "0px 0px 0px 0px",
                        width: "100%",
                      }}
                    >
                      Our Projects
                    </div>
                  </div>
                  <div
                    className="Browse-impactful BnrCnt OurservHdd mb-4 OurPrjctHddSec"
                    style={{ textAlign: "center" }}
                  >
                    <h2
                      className="grident-color-sub-title"
                      style={{ width: "80vw" }}
                    >
                      Browse our impactful
                      <span className="grident-color-sub-title px-2">
                        portfolio showcase.
                      </span>
                    </h2>
                    <p className="text-left">
                      Our services encompass web development, app development,
                      game development, software development, and blockchain
                      development.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="Portfolio-buttons col-lg-2">
                  <div
                    className="nav flex-column nav-pills VrtclTbb PrjctTb"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <button
                      className="nav-link active"
                      data-toggle="pill"
                      data-target="#PrjctTbb7"
                      type="button"
                      role="tab"
                      aria-controls="PrjctTbb7"
                      aria-selected="false"
                    >
                      Website
                    </button>
                    <button
                      className="nav-link"
                      data-toggle="pill"
                      data-target="#PrjctTbb3"
                      type="button"
                      role="tab"
                      aria-controls="PrjctTbb3"
                      aria-selected="false"
                    >
                      Blockchain
                    </button>
                    <button
                      className="nav-link"
                      data-toggle="pill"
                      data-target="#PrjctTbb4"
                      type="button"
                      role="tab"
                      aria-controls="PrjctTbb4"
                      aria-selected="false"
                    >
                      Software
                    </button>
                    <button
                      className="nav-link"
                      data-toggle="pill"
                      data-target="#PrjctTbb9"
                      type="button"
                      role="tab"
                      aria-controls="PrjctTbb9"
                      aria-selected="false"
                    >
                      Application
                    </button>
                    <button
                      className="nav-link"
                      data-toggle="pill"
                      data-target="#PrjctTbb1"
                      type="button"
                      role="tab"
                      aria-controls="PrjctTbb1"
                      aria-selected="false"
                    >
                      Metaverse
                    </button>

                    <button
                      className="nav-link"
                      data-toggle="pill"
                      data-target="#PrjctTbb5"
                      type="button"
                      role="tab"
                      aria-controls="PrjctTbb5"
                      aria-selected="false"
                    >
                      NFT
                    </button>
                    <button
                      className="nav-link "
                      data-toggle="pill"
                      data-target="#PrjctTbb6"
                      type="button"
                      role="tab"
                      aria-controls="PrjctTbb6"
                      aria-selected="true"
                    >
                      Game
                    </button>

                    <button
                      className="nav-link"
                      data-toggle="pill"
                      data-target="#PrjctTbb10"
                      type="button"
                      role="tab"
                      aria-controls="PrjctTbb10"
                      aria-selected="false"
                    >
                      Dapp
                    </button>
                  </div>
                </div>
                <div className="col-xl-10">
                  <div className="tab-content" id="v-pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="PrjctTbb6"
                      role="tabpanel"
                    >
                      <div>
                        <div className="PrjctDtlsItm game-1">
                          <div className="row align-items-center">
                            <div className="col-lg-7">
                              <div className="PrjctDtlCnt">
                                <div className="port_sub_title">Game</div>
                                <p>
                                  Welcome to our world of immersive gaming
                                  experiences! Where we strive to create
                                  immersive and exciting gaming experiences.
                                  With cutting-edge technology and a passionate
                                  team of developers, we offer a range of
                                  services including game design, programming,
                                  and much more. We pride ourselves on creating
                                  visually stunning games, with cutting-edge
                                  graphics and immersive gameplay mechanics that
                                  keep players engaged for hours on end. From
                                  indie gems to blockbuster hits, we cater to
                                  diverse gaming preferences, ensuring every
                                  player finds their perfect escape. Join us and
                                  unlock a world of limitless imagination and
                                  unforgettable experiences.
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="PrjctImg text-center">
                                <img
                                  src="./SGimage/gamerimg.webp"
                                  alt="Metaverse"
                                  title="Metaverse"
                                  loading="eager"
                                  className="img-fluid lazyload"
                                  width="70%"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="PrjctsBtnSec game_PrjctBtn">
                            <div className="mr-4 mb-4">
                              <div className="PrjctBtn_new Btn211-42">
                                Casino Game
                              </div>
                            </div>
                            <div className="mr-4 mb-4">
                              <div className="PrjctBtn_new Btn211-42">
                                TeenPati Game
                              </div>
                            </div>
                            <div className="mr-4 mb-4">
                              <div className="PrjctBtn_new Btn211-42">
                                Ludo Game
                              </div>
                            </div>
                            <div className="mr-4 mb-4">
                              <div className="PrjctBtn_new Btn211-42">
                                Fantasy Game
                              </div>
                            </div>
                          </div>
                          <div className="PrjctsBtnSec game_PrjctBtn">
                            <div className="mr-4 mb-4">
                              <div className="PrjctBtn_new Btn211-42">
                                Avitor Game
                              </div>
                            </div>
                            <div className="mr-4 mb-4">
                              <div className="PrjctBtn_new Btn211-42">
                                Rummy Game
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="RltdPrtflo">
                          <div className="RltdPrjHddSec">
                            <div className="RltdPrjHdd">
                              <div className="h5_title">Related Portfolio</div>
                            </div>
                          </div>

                          <RelatedPortfolioSlider />
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="PrjctTbb1"
                      role="tabpanel"
                    >
                      <div>
                        <div className="PrjctDtlsItm meta-1">
                          <div className="row align-items-center">
                            <div className="col-lg-7">
                              <div className="PrjctDtlCnt">
                                <div className="port_sub_title">Metaverse</div>
                                <p>
                                  Metaverse is the new evolution of the
                                  internet, a perfect mix of both the digital
                                  and physical worlds. Our team combines
                                  creativity with technical expertise to ensure
                                  every project is unique and engaging. What
                                  sets us apart is our commitment to innovation
                                  and quality, delivering experiences that
                                  exceed expectations. We offer customizable
                                  solutions to bring your vision to life in the
                                  Metaverse.
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="PrjctImg text-center">
                                <img
                                  src="./SGimage/metaverse.webp"
                                  alt="Metaverse"
                                  title="Metaverse"
                                  loading="eager"
                                  className="img-fluid lazyload"
                                  width="70%"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="PrjctsBtnSec">
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Metaverse_Game"
                              >
                                Smart Contract
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Metaverse_Casino_Game"
                              >
                                Private/Public Blockchain
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Metaverse_NFT_Marketplace"
                              >
                                Blockchain For Industries
                              </button>
                            </div>
                          </div>
                          <div className="PrjctsBtnSec">
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Metaverse_Wallet"
                              >
                                POC Development
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Metaverse_Token"
                              >
                                Enterprise Blockchain
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="RltdPrtflo">
                          <div className="RltdPrjHddSec">
                            <div className="RltdPrjHdd">
                              <div className="h5_title">Related Portfolio</div>
                            </div>
                          </div>

                          <PlayTOEarnPortfoliio />
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="PrjctTbb3"
                      role="tabpanel"
                    >
                      <div>
                        <div className="PrjctDtlsItm blkchain-1">
                          <div className="row align-items-center">
                            <div className="col-lg-7">
                              <div className="PrjctDtlCnt">
                                <div className="port_sub_title">Blockchain</div>
                                <p>
                                  Enter the decentralized world of the
                                  blockchain and leverage the power of the
                                  latest technologies to crush your competition.
                                  Our team of skilled developers specializes in
                                  designing, building, and implementing secure
                                  and scalable Blockchain solutions. Our
                                  comprehensive services encompass smart
                                  contract development, decentralized
                                  application (dApp) creation, and blockchain
                                  integration for various industries.
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="PrjctImg text-center">
                                <img
                                  src="./SGimage/blockchainimg.webp"
                                  alt="Blockchain"
                                  title="Blockchain"
                                  loading="eager"
                                  className="img-fluid lazyload"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="PrjctsBtnSec">
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Smart_Contract_Development"
                              >
                                Decentralization
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Private/Public Blockchain"
                              >
                                Immutability
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Blockchain Industries"
                              >
                                Transparency
                              </button>
                            </div>
                          </div>
                          <div className="PrjctsBtnSec">
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="POC Development"
                              >
                                Security
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Enterprise Blockchain Solutions"
                              >
                                Smart Contracts
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="RltdPrtflo">
                          <div className="RltdPrjHddSec">
                            <div className="RltdPrjHdd">
                              <div className="h5_title">Related Portfolio</div>
                            </div>
                          </div>

                          <MetaversePortfolio />
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="PrjctTbb4"
                      role="tabpanel"
                    >
                      <div>
                        <div className="PrjctDtlsItm">
                          <div className="row align-items-center">
                            <div className="col-lg-7">
                              <div className="PrjctDtlCnt">
                                <div className="port_sub_title">SoftWare</div>
                                <p>
                                  MetaBlock's software suite caters to every
                                  aspect of digital asset management. From
                                  blockchain infrastructure setup to smart
                                  contract development tools, wallet integration
                                  solutions, user-friendly interfaces, robust
                                  security features, compliance modules, and
                                  ongoing maintenance capabilities, MetaBlock
                                  ensures a seamless experience for clients
                                  launching and managing their coins and tokens.
                                  Their software empowers clients to navigate
                                  the dynamic cryptocurrency landscape with
                                  confidence and efficiency, offering innovative
                                  solutions tailored to their specific needs.
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="PrjctImg">
                                <img
                                  style={{ width: "200px" }}
                                  src="./images/software-crypto.webp "
                                  alt="Exchange"
                                  title="Exchange"
                                  loading="eager"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="PrjctsBtnSec">
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Crypto Exchange"
                              >
                                Software Development
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Crypto MLM"
                              >
                                HRMS Software
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Crypto HYIP"
                              >
                                SAAS Software
                              </button>
                            </div>
                          </div>
                          <div className="PrjctsBtnSec">
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Cryptocurrency"
                              >
                                Matrimonial Software
                              </button>
                            </div>

                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Cryptocurrency"
                              >
                                Hotel Management
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="RltdPrtflo">
                          <div className="RltdPrjHddSec">
                            <div className="RltdPrjHdd">
                              <div className="h5_title">Related Portfolio</div>
                            </div>
                          </div>

                          <BlockchainPorfolio />
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="PrjctTbb5"
                      role="tabpanel"
                    >
                      <div>
                        <div className="PrjctDtlsItm nft-1">
                          <div className="row align-items-center">
                            <div className="col-lg-7">
                              <div className="PrjctDtlCnt">
                                <div className="port_sub_title">NFT</div>
                                <p>
                                  NFTs are one kind of digital asset or a
                                  representation of physical assets in the real
                                  world. We specialize in creating unique and
                                  secure non-fungible tokens tailored to meet
                                  the diverse needs of our clients. Our team of
                                  experienced developers employs cutting-edge
                                  technology and industry best practices to
                                  ensure the utmost quality and innovation in
                                  every NFT project. With a proven track record
                                  of successful NFT launches, we are committed
                                  to delivering exceptional results that exceed
                                  expectations and drive tangible value for our
                                  clients.
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="PrjctImg text-center">
                                <img
                                  src="./SGimage/neft.webp"
                                  alt="Metaverse"
                                  title="Metaverse"
                                  loading="eager"
                                  className="img-fluid lazyload"
                                  width="70%"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="PrjctsBtnSec">
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="NFT Marketplace"
                              >
                                NFT Marketplace
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="NFT Game"
                              >
                                NFT Game Development
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="NFT Token"
                              >
                                NFT Token Development
                              </button>
                            </div>
                          </div>
                          <div className="PrjctsBtnSec">
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="White Label NFT Solutions"
                              >
                                White Label NFT Solutions
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Launchpad Solutions"
                              >
                                Launchpad Solutions
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Fractional NFT Marketplace"
                              >
                                Fractional NFT
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="RltdPrtflo">
                          <div className="RltdPrjHddSec">
                            <div className="RltdPrjHdd">
                              <div className="h5_title">Related Portfolio</div>
                            </div>
                          </div>

                          <ExchangePorfolio />
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="PrjctTbb7"
                      role="tabpanel"
                    >
                      <div>
                        <div className="PrjctDtlsItm play-1">
                          <div className="row align-items-center">
                            <div className="col-lg-7">
                              <div className="PrjctDtlCnt">
                                <div className="port_sub_title">
                                  Website development
                                </div>
                                <p>
                                  Launch your new website with MetaBlock, we
                                  specialize in creating visually stunning and
                                  functionally robust websites. Our team's
                                  unwavering commitment to client satisfaction,
                                  ensures transparent communication, timely
                                  delivery, and ongoing support. We only use the
                                  latest technologies for your project ensuring
                                  that you receive only the best-performing
                                  product.
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="PrjctImg text-center">
                                <img
                                  src="./SGimage/playto.webp "
                                  alt="Play To Earn"
                                  title="Play To Earn"
                                  loading="eager"
                                  className="img-fluid lazyload"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="PrjctsBtnSec">
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Axie Infinity"
                              >
                                Static Website
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Decentraland Clone"
                              >
                                Dynamic Website
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Gods Unchained Clone"
                              >
                                E-commerce Website
                              </button>
                            </div>
                          </div>
                          <div className="PrjctsBtnSec"></div>
                        </div>
                        <div className="RltdPrtflo">
                          <div className="RltdPrjHddSec">
                            <div className="RltdPrjHdd">
                              <div className="h5_title">Related Portfolio</div>
                            </div>
                          </div>

                          <NFTPorfolio />
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="PrjctTbb9"
                      role="tabpanel"
                    >
                      <div>
                        <div className="PrjctDtlsItm defi-1">
                          <div className="row align-items-center">
                            <div className="col-lg-7">
                              <div className="PrjctDtlCnt">
                                <div className="port_sub_title">
                                  Application
                                </div>
                                <p>
                                  MetaBlock specializes in crafting customized
                                  solutions for innovative applications,
                                  ensuring top-notch quality and reliability.
                                  Our services encompass software development,
                                  infrastructure setup, and system integration,
                                  tailored to meet the unique needs of each
                                  project. By leveraging the latest technologies
                                  and adhering to industry best practices, we
                                  deliver exceptional software solutions that
                                  set new standards for excellence. With
                                  MetaBlock, clients can confidently navigate
                                  the evolving digital landscape, equipped with
                                  robust and reliable software designed to
                                  surpass expectations.
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="PrjctImg text-center">
                                <img
                                  src="./images/application.webp "
                                  alt="Application"
                                  title="Application"
                                  loading="eager"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="PrjctsBtnSec">
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="DeFi Development"
                              >
                                Application Development
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Travelling Application"
                              >
                                Travelling Application
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Social media"
                              >
                                Social media application
                              </button>
                            </div>
                          </div>
                          <div className="PrjctsBtnSec">
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Grocery Application"
                              >
                                Grocery Application
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="fitness application"
                              >
                                fitness application
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="RltdPrtflo">
                          <div className="RltdPrjHddSec">
                            <div className="RltdPrjHdd">
                              <div className="h5_title">Related Portfolio</div>
                            </div>
                          </div>

                          <DefiPorfolio />
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="PrjctTbb10"
                      role="tabpanel"
                    >
                      <div>
                        <div className="PrjctDtlsItm dapp-1">
                          <div className="row align-items-center">
                            <div className="col-lg-7">
                              <div className="PrjctDtlCnt">
                                <div className="port_sub_title">Dapp</div>
                                <p>
                                  Enter the world of decentralized applications.
                                  We specialize in crafting decentralized
                                  applications tailored to meet diverse needs.
                                  We ensure seamless integration of blockchain
                                  technology into our solutions. Our team's
                                  expertise spans various blockchain platforms,
                                  enabling us to offer versatile and scalable
                                  solutions. We can bring your idea to life.
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="PrjctImg text-center">
                                <img
                                  src="./SGimage/dapp.webp "
                                  alt="Dapp"
                                  title="Dapp"
                                  loading="eager"
                                  className="img-fluid lazyload"
                                  width="60%"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="PrjctsBtnSec">
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Dapp Development"
                              >
                                Dapp Development
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Tron Dapp"
                              >
                                Tron Dapp Development
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Ethereum Dapp"
                              >
                                Ethereum Dapp
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="RltdPrtflo">
                          <div className="RltdPrjHddSec">
                            <div className="RltdPrjHdd">
                              <div className="h5_title">Related Portfolio</div>
                            </div>
                          </div>

                          <DAppPorfolio />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="AutoPlay-section" style={{ background: "black" }}>
            <AutoPlay />
          </div>

          <div className="why_MetaBlock_blockchain_sec">
            <div className="container">
              <div className="BnrCnt OurservHdd mb-lg-4">
                <h3
                  style={{ fontSize: "40px", fontWeight: "bold" }}
                  className="text-center why-Metablock-heading grident-color-sub-title "
                >
                  BENEFITS TO COLLABORATING WITH US
                  {/* BENEFITS TO COLLABORATING WITH US. */}
                </h3>
                <p className="text-center">
                  At MetaBlock, customers are like a part of the family, and we
                  treat every customer just like family and always put their
                  needs before ours.
                </p>
              </div>
              <div className="why_MetaBlock_blockchain_card">
                <div className="row align-items-center">
                  <BenefitsColabratingSlider />
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: "black" }}>
            <BrandsWork />
          </div>
          <div className="Ourprocesure-main-div">
            <Ourprocesure />
          </div>
          <main id="faq-questions-div" className="faq_main">
            <div className="faq_section_new">
              <div className="container">
                <div style={{ gap: "100px" }} className="row ">
                  <div className="col-xl-7 col-12">
                    <div className="mid_section">
                      <div className="section-heading">
                        <p className="faq_title">
                          Frequently Asked <br /> Questions (FAQs)
                        </p>
                        <p className="faq_contents" />
                      </div>
                    </div>
                    <div className="job-cnt">
                      <div className="panel-group" id="accordion">
                        <div className="panel panel-default" role="tablist">
                          <div
                            className="panel-heading"
                            role="tab"
                            aria-selected="true"
                            id="headingOne1"
                          >
                            <div className="panel-title">
                              <a
                                className="collapsed"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseOne1"
                                aria-expanded="false"
                                aria-controls="collapseOne1"
                              >
                                <p className="qus_title">
                                  1. What is blockchain development?
                                </p>
                              </a>
                            </div>
                          </div>
                          <div
                            id="collapseOne1"
                            className="panel-collapse collapse"
                            aria-labelledby="headingOne1"
                            data-parent="#accordion"
                          >
                            <div className="panel-body job-cnt-hd">
                              <p>
                                The process of developing and deploying
                                blockchain-based apps and solutions is referred
                                to as blockchain development. A distributed and
                                decentralized ledger system that securely logs
                                transactions over a network of computers is
                                known as blockchain technology. Every
                                transaction is recorded in a block that is
                                subsequently connected to earlier blocks to
                                create a chain of blocks.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default" role="tablist">
                          <div
                            className="panel-heading"
                            role="tab"
                            aria-selected="true"
                            id="headingOne2"
                          >
                            <div className="panel-title">
                              <a
                                className="collapsed"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseOne2"
                                aria-expanded="false"
                                aria-controls="collapseOne2"
                              >
                                <p className="qus_title">
                                  2. What is launchpad development?
                                </p>
                              </a>
                            </div>
                          </div>
                          <div
                            id="collapseOne2"
                            className="panel-collapse collapse"
                            aria-labelledby="headingOne2"
                            data-parent="#accordion"
                          >
                            <div className="panel-body job-cnt-hd">
                              <p>
                                The term "launchpad development" often pertains
                                to the establishment and administration of a
                                platform or infrastructure that enables the
                                introduction of novel projects, products, or
                                initiatives. This phrase is frequently used in
                                relation to technology firms, where a launchpad
                                acts as a central platform for managing a
                                project's complete lifespan.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default" role="tablist">
                          <div
                            className="panel-heading"
                            role="tab"
                            aria-selected="true"
                            id="headingOne3"
                          >
                            <div className="panel-title">
                              <a
                                className="collapsed"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseOne3"
                                aria-expanded="false"
                                aria-controls="collapseOne3"
                              >
                                <p className="qus_title">
                                  3. How can I begin developing a blockchain for
                                  my project or company?
                                </p>
                              </a>
                            </div>
                          </div>
                          <div
                            id="collapseOne3"
                            className="panel-collapse collapse"
                            aria-labelledby="headingOne3"
                            data-parent="#accordion"
                          >
                            <div className="panel-body job-cnt-hd">
                              <p>
                                Beginning blockchain development for your
                                project or business requires a number of steps,
                                including learning about the technology,
                                choosing the right platform, and developing
                                decentralized applications (DApps), or
                                blockchain-based solutions.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default" role="tablist">
                          <div
                            className="panel-heading"
                            role="tab"
                            aria-selected="true"
                            id="headingOne4"
                          >
                            <div className="panel-title">
                              <a
                                className="collapsed"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseOne4"
                                aria-expanded="false"
                                aria-controls="collapseOne4"
                              >
                                <p className="qus_title">
                                  4. For my project, which blockchain platform
                                  should I select?
                                </p>
                              </a>
                            </div>
                          </div>
                          <div
                            id="collapseOne4"
                            className="panel-collapse collapse"
                            aria-labelledby="headingOne4"
                            data-parent="#accordion"
                          >
                            <div className="panel-body job-cnt-hd">
                              <p>
                                The blockchain platform that you choose will
                                rely on the goals of your project, use cases,
                                scalability requirements, and development
                                preferences. Blockchain platforms that are
                                widely used include Ethereum, Hyperledger
                                Fabric, Binance Smart Chain, and others. Each
                                platform has its own unique features and
                                functionalities.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default" role="tablist">
                          <div
                            className="panel-heading"
                            role="tab"
                            aria-selected="true"
                            id="headingOne5"
                          >
                            <div className="panel-title">
                              <a
                                className="collapsed"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseOne5"
                                aria-expanded="false"
                                aria-controls="collapseOne5"
                              >
                                <p className="qus_title">
                                  5. How can I use the blockchain to implement a
                                  smart contract?
                                </p>
                              </a>
                            </div>
                          </div>
                          <div
                            id="collapseOne5"
                            className="panel-collapse collapse"
                            aria-labelledby="headingOne5"
                            data-parent="#accordion"
                          >
                            <div className="panel-body job-cnt-hd">
                              <p>
                                Using specialized tools and platforms made
                                available by the blockchain network, smart
                                contracts are implemented on the blockchain. For
                                the purpose of compiling, deploying, and
                                interacting with smart contracts, developers
                                usually utilize command-line tools, Integrated
                                Development Environments (IDEs), or
                                blockchain-specific platforms.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default" role="tablist">
                          <div
                            className="panel-heading"
                            role="tab"
                            aria-selected="true"
                            id="headingOne6"
                          >
                            <div className="panel-title">
                              <a
                                className="collapsed"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseOne6"
                                aria-expanded="false"
                                aria-controls="collapseOne6"
                              >
                                <p className="qus_title">
                                  6. What security factors are taken into
                                  account when developing a blockchain?
                                </p>
                              </a>
                            </div>
                          </div>
                          <div
                            id="collapseOne6"
                            className="panel-collapse collapse"
                            aria-labelledby="headingOne6"
                            data-parent="#accordion"
                          >
                            <div className="panel-body job-cnt-hd">
                              <p>
                                In the development of blockchains, security is
                                crucial. Vulnerabilities including reentrancy
                                attacks, front-running, and smart contract
                                issues must be taken into account by developers.
                                Secure coding techniques, stringent testing
                                procedures, and code auditing are examples of
                                best practices that guarantee the security of
                                DApps and smart contracts.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="panel panel-default"
                          role="tablist"
                          style={{ display: "none" }}
                        >
                          <div
                            className="panel-heading"
                            role="tab"
                            aria-selected="true"
                            id="headingOne7"
                          >
                            <div className="panel-title">
                              <a
                                className="collapsed"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseOne7"
                                aria-expanded="false"
                                aria-controls="collapseOne7"
                              >
                                <p className="qus_title">
                                  7. How should my blockchain application be
                                  tested?
                                </p>
                              </a>
                            </div>
                          </div>
                          <div
                            id="collapseOne7"
                            className="panel-collapse collapse"
                            aria-labelledby="headingOne7"
                            data-parent="#accordion"
                          >
                            <div className="panel-body job-cnt-hd">
                              <p>
                                A number of methods, including unit testing,
                                integration testing, and end-to-end testing, are
                                used to test blockchain applications. Frameworks
                                for testing DApps and smart contracts in
                                simulated or real-world blockchain settings are
                                offered by programs like Truffle, Ganache, and
                                Remix.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="panel panel-default"
                          role="tablist"
                          style={{ display: "none" }}
                        >
                          <div
                            className="panel-heading"
                            role="tab"
                            aria-selected="true"
                            id="headingOne8"
                          >
                            <div className="panel-title">
                              <a
                                className="collapsed"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseOne8"
                                aria-expanded="false"
                                aria-controls="collapseOne8"
                              >
                                <p className="qus_title">
                                  8. What are the blockchain development's
                                  scalability challenges?
                                </p>
                              </a>
                            </div>
                          </div>
                          <div
                            id="collapseOne8"
                            className="panel-collapse collapse"
                            aria-labelledby="headingOne8"
                            data-parent="#accordion"
                          >
                            <div className="panel-body job-cnt-hd">
                              <p>
                                One of the biggest obstacles to blockchain
                                development is scalability, particularly for
                                public blockchains. There are issues that must
                                be resolved, including transaction performance,
                                network congestion, and gas fees. Sharding,
                                off-chain scaling methods, and layer 2 scaling
                                solutions are some of the alternatives
                                available.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="panel panel-default"
                          role="tablist"
                          style={{ display: "none" }}
                        >
                          <div
                            className="panel-heading"
                            role="tab"
                            aria-selected="true"
                            id="headingOne9"
                          >
                            <div className="panel-title">
                              <a
                                className="collapsed"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseOne9"
                                aria-expanded="false"
                                aria-controls="collapseOne9"
                              >
                                <p className="qus_title">
                                  9. What is the process for enterprises to
                                  begin implementing metaverse development for
                                  their unique requirements?
                                </p>
                              </a>
                            </div>
                          </div>
                          <div
                            id="collapseOne9"
                            className="panel-collapse collapse"
                            aria-labelledby="headingOne9"
                            data-parent="#accordion"
                          >
                            <div className="panel-body job-cnt-hd">
                              <p>
                                <strong> </strong>
                              </p>
                              <p>
                                Establish precise aims and goals for the growth
                                of the metaverse.
                              </p>
                              <p>
                                Find a development team or partner that
                                specializes in metaverse technologies by doing
                                some research.
                              </p>
                              <p>
                                Make sure your project plan is well-defined and
                                meets your company's requirements.
                              </p>
                              <p>
                                To test the waters, think about implementing
                                pilot programs or smaller efforts.
                              </p>
                              <p>
                                It is important to consistently obtain user
                                feedback and make iterations on development in
                                order to enhance user experience and achieve
                                corporate objectives.
                              </p>
                              <p> </p>
                              <p>
                                You will receive guidance from our Metaverse
                                expert at every stage of the ideation and
                                project development cycle.
                              </p>
                            </div>
                          </div>
                        </div>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default SimilarFile;
