import React from "react";
import "./MainBlockchain.css";
import SimilarFile from "../../SimilarFile";
import { Link } from "react-router-dom";

const MainBlockchain = () => {
  return (
    <div>
      <div className="Main-section MnuPaddTop">
        <section className="main-blockchain-header" id="homebanner">
          <div className="container-fluid pl-0 pr-0">
            <div className="VideoWrper VidoFltr">
              <video autoPlay muted loop playsInline preload="metadata">
                <source
                  src=""
                  type="video/mp4"
                />
              </video>
              <div className="VidoCnt">
                <div className="BnrCnt bnrVideoTop">
                  <h2 className="mb-lg-2 text">Blockchain</h2>
                  <span className="typed-cursor">|</span>
                  <h2>
                    <span className="TxtGrdnt" data-shine="Development">
                      Development
                    </span>
                    <span className="Fw-600 ">Company</span>
                  </h2>
                  <p>
                    Leverage our customizable end-to-end blockchain services
                    that are designed to meet the unique needs of businesses.
                  </p>
                </div>

                <div className="HddrBtns banner_btn_sec">
                  <Link to="/contact-us">
                    <button
                      data-toggle="modal"
                      data-target="#popup_form_modal"
                      className="btn BtnPrimry TlkBtn"
                    >
                      <span>

                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9483 23.8503C5.33292 23.8669 -0.00474671 18.5293 3.16764e-06 11.9008C0.00475304 5.38755 5.39111 0.00237574 11.902 8.01666e-07C18.5245 -0.00237413 23.8028 5.27236 23.8171 11.9079C23.8325 18.5399 18.5708 23.8337 11.9483 23.8503ZM14.5964 10.7122C14.5607 10.7798 14.5263 10.8463 14.4907 10.914C14.1986 10.914 13.9076 10.914 13.6155 10.914C11.4591 10.914 9.30263 10.9081 7.14619 10.9188C6.32327 10.9223 5.85303 11.4246 5.97534 12.1205C6.06797 12.6501 6.47052 12.9375 7.17469 12.9387C9.42969 12.9446 11.6847 12.941 13.9409 12.941C14.1463 12.941 14.3517 12.941 14.7329 12.941C14.1392 13.5502 13.6737 14.0228 13.2142 14.5026C12.7617 14.9752 12.7285 15.4585 13.1097 15.8586C13.5253 16.2944 14.0121 16.279 14.5026 15.7815C15.5178 14.7543 16.5248 13.7188 17.527 12.6798C18.0246 12.1644 18.027 11.6871 17.5294 11.1812C16.5011 10.1386 15.4656 9.10432 14.4254 8.07479C13.9254 7.57961 13.4493 7.55942 13.0325 7.99404C12.6382 8.4049 12.6584 8.87514 13.1298 9.343C13.606 9.81443 14.1071 10.2574 14.5964 10.7122Z" fill="white"></path></svg>
                        Talk Now
                      </span>
                      <span>
                        {/* <img
                        src="./SGimage/rating.webp"
                        alt="enquiry"
                        loading="eager"
                        className="img-fluid lazyload mr-2"
                      /> */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9483 23.8503C5.33292 23.8669 -0.00474671 18.5293 3.16764e-06 11.9008C0.00475304 5.38755 5.39111 0.00237574 11.902 8.01666e-07C18.5245 -0.00237413 23.8028 5.27236 23.8171 11.9079C23.8325 18.5399 18.5708 23.8337 11.9483 23.8503ZM14.5964 10.7122C14.5607 10.7798 14.5263 10.8463 14.4907 10.914C14.1986 10.914 13.9076 10.914 13.6155 10.914C11.4591 10.914 9.30263 10.9081 7.14619 10.9188C6.32327 10.9223 5.85303 11.4246 5.97534 12.1205C6.06797 12.6501 6.47052 12.9375 7.17469 12.9387C9.42969 12.9446 11.6847 12.941 13.9409 12.941C14.1463 12.941 14.3517 12.941 14.7329 12.941C14.1392 13.5502 13.6737 14.0228 13.2142 14.5026C12.7617 14.9752 12.7285 15.4585 13.1097 15.8586C13.5253 16.2944 14.0121 16.279 14.5026 15.7815C15.5178 14.7543 16.5248 13.7188 17.527 12.6798C18.0246 12.1644 18.027 11.6871 17.5294 11.1812C16.5011 10.1386 15.4656 9.10432 14.4254 8.07479C13.9254 7.57961 13.4493 7.55942 13.0325 7.99404C12.6382 8.4049 12.6584 8.87514 13.1298 9.343C13.606 9.81443 14.1071 10.2574 14.5964 10.7122Z" fill="white"></path></svg>
                        Talk to our Experts
                      </span>
                    </button>
                  </Link>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-12">
                    <div>
                      <p style={{ fontSize: 18, textTransform: "uppercase" }}>
                        Be the pioneer of the digital world
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-lg-2 col-6">
                        <div className="vdoCntLst">
                          <p className="vdoCntLstCount">350+</p>
                          <p className="vdoCntLstTlt">Developers</p>
                        </div>
                      </div>
                      <div className="col-lg-2 col-6">
                        <div className="vdoCntLst">
                          <p className="vdoCntLstCount">1500+</p>
                          <p className="vdoCntLstTlt">Projects Delivered</p>
                        </div>
                      </div>
                      <div className="col-lg-2 col-6">
                        <div className="vdoCntLst">
                          <p className="vdoCntLstCount">15+</p>
                          <p className="vdoCntLstTlt">Years of Expertise</p>
                        </div>
                      </div>
                      <div className="col-lg-2 col-6">
                        <div className="vdoCntLst">
                          <p className="vdoCntLstCount">75+</p>
                          <p className="vdoCntLstTlt">Countries Served</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="GrdentBg" />
            </div>
          </div>
        </section>
        <section className="BnnerCntSec development-mistake">
          <div className="container container-1170">
            <div className="row align-items-center">
              <div className="col-xl-10">
                <div className="BnrCnt mb-3 pb-1 mt-1">
                  <div className="mb-3">
                    <h1 style={{ textAlign: "center" }}>
                      Blockchain
                      <span className="TxtGrdnt ml-3" data-shine="Development">
                        Development
                      </span>
                      <span className="cus_title_we">Company</span>
                    </h1>
                  </div>
                  <p>
                    MetaBlock Technologies, drawing upon extensive experience and proficiency in blockchain development,
                    stands as a reliable industry partner. Harnessing the capabilities of cutting-edge technologies such
                    as Ethereum, Hyperledger, and Stellar, we specialize in crafting secure and scalable blockchain applications
                    tailored to diverse business needs. Our commitment to a customer-centric approach ensures open communication
                    and collaboration throughout the project lifecycle, promoting transparency and timely project delivery.
                    Choosing MetaBlock Technologies as your blockchain development partner guarantees high-quality solutions
                    that seamlessly propel your business operations into the decentralized future.
                  </p>
                </div>
                <div className="GetBtnSec">
                  <Link to="/contact-us">
                    <span
                      className="btn BtnPrimry TlkBtn Btn175-44 mr-2 mb-2 btn-12">
                      <span>Get a live demo</span>
                      <span>Get a live demo</span>
                    </span>
                  </Link>
                  {/* <button
                    className="btn BtnPrimry TlkBtn Btn175-44 mb-2 BtnTrnsp btn-12"
                    data-toggle="modal"
                    data-target="#popup_form_modal"
                  >
                    <span>Get a live demo</span>
                    <span>Get a live demo</span>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="scroll-reveal-section">
          <div className="service_head_sec blockchain-our-service ">
            <div className="container container-1170 ">
              <div className="OurSrvcHdd">
                <div className="ourservice-title grident-color-sub-title">Our Services</div>
              </div>
              <div className="BnrCnt OurservHdd ">
                <h2>
                  Blockchain Development <br />
                  Services for your
                  <span className="Txt8282 px-2">Innovative Business</span>
                </h2>
              </div>
            </div>
          </div>
          <div classname="item-6">
            {/* <section className="blockchain_service_sec image-holder">
              <div className="container container-1170">
                <div className="blockchain_imgsec">
                  <img
                  style={{width:"40%"}}
                    src="./SGimage/blockchaindev_img.webp"
                    loading="eager"
                    className='new-blockchain'  
                    alt="Blockchain-Empower-Your-Business-Operations-With-Blockchain-Technology"
                    title="Blockchain - Empower Your Business Operations With Blockchain Technology"
                  />
                </div>
                <div className="row">
                  <div className="col-xl-7 offset-xl-5">
                    <div className="CmmnSdCnt">
                      <div className="MtavCntHdd my-md-3">
                        <h3 className="h3_title">
                          Blockchain - Empower Your Business Operations With
                          Blockchain Technology
                        </h3>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Enterprise Blockchain Solutions
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Blockchain Crowdfunding Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Smart Contract Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Private/Public Blockchain Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Blockchain P2P Lending Platform
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Blockchain AI Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">Token Development</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            DAO Blockchain Development
                          </div>
                        </div>
                      </div>
                      <div className="CmmnSdHdd">
                        <svg
                          height={100}
                          strokeWidth={1}
                          className="text-line"
                          width="100%"
                        >
                          <text
                            x="35%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            y="50%"
                          >
                            Blockchain
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}

            <section className="metaverse_game_clone blockchain-metaverse blockchain-our-service">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-4 col-md-12 col-12 pr-lg-0">
                    <div className="clone_list_sec">
                      <div className="clone_list">
                        <img src="./SGimage/right-arrow.webp" alt="Clone List" title="Clone List" className="img-fluid lazyload"
                          style={{ width: '25px'}} />
                        <div className="grident-color-sub-title sub_title">Enterprise Blockchain Solutions</div>
                      </div>
                      <div className="clone_list">
                        <img src="./SGimage/right-arrow.webp" alt="Clone List" title="Clone List" className="img-fluid lazyload"
                          style={{ width: '25px' }} />
                        <div className="grident-color-sub-title sub_title">Blockchain Crowdfunding Development
                        </div>
                      </div>
                      <div className="clone_list">
                        <img src="./SGimage/right-arrow.webp" alt="Clone List" title="Clone List" className="img-fluid lazyload"
                          style={{ width: '25px' }} />
                        <div className="grident-color-sub-title sub_title"> Smart Contract Development
                        </div>
                      </div>
                      <div className="clone_list">
                        <img src="./SGimage/right-arrow.webp" alt="Clone List" title="Clone List" className="img-fluid lazyload"
                          style={{ width: '25px' }} />
                        <div className="grident-color-sub-title sub_title">Private/Public Blockchain Development</div>
                      </div>
                      <div className="clone_list">
                        <img src="./SGimage/right-arrow.webp" alt="Clone List" title="Clone List" className="img-fluid lazyload"
                          style={{ width: '25px' }} />
                        <div className="grident-color-sub-title sub_title">Blockchain P2P Lending Platform</div>
                      </div>
                      <div className="clone_list">
                        <img src="./SGimage/right-arrow.webp" alt="Clone List" title="Clone List" className="img-fluid lazyload"
                          style={{ width: '25px' }} />
                        <div className="grident-color-sub-title sub_title">Blockchain AI Development</div>
                      </div>
                      <div className="clone_list">
                        <img src="./SGimage/right-arrow.webp" alt="Clone List" title="Clone List" className="img-fluid lazyload"
                          style={{ width: '25px' }} />
                        <div className="grident-color-sub-title sub_title">DAO Blockchain Development</div>
                      </div>
                      <div className="clone_list">
                        <img src="./SGimage/right-arrow.webp" alt="Clone List" title="Clone List" className="img-fluid lazyload"
                          style={{ width: '25px' }} />
                        <div className="grident-color-sub-title sub_title">Blockchain</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-12 pl-0 game_devlist">
                    <img src="./SGimage/blockchaindev_img.webp" alt="Clone List" title="Clone List" className="img-fluid lazyload text-center"
                      style={{ width: '500px', borderRadius: '5px' }} />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div classname="item-6">
            <section className="MtaverseSec image-holder blockchain-our-service">
              <div className="container container-1170">
                <div className="row">
                  <div className="col-xl-7">
                    <div className="CmmnSdCnt">
                      <div className="MtavCntHdd my-md-4">
                        <h3 className="ourservices-titles-new grident-color-sub-title">
                          Metaverse - Enter the world beyond imagination with
                          Metaverse.
                        </h3>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">Metaverse Development</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Metaverse 3D Spaces Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Metaverse Token Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Metaverse Game Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Metaverse E-commerce Platform Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Metaverse NFT Marketplace Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Metaverse Solutions for Industries
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Metaverse Integration Services
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Metaverse Social Media Platform Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Metaverse Event Platform Development
                          </div>
                        </div>
                      </div>
                      <div className="CmmnSdHdd">
                        <svg
                          height={100}
                          strokeWidth={1}
                          className="text-line"
                          width="100%"
                        >
                          <text
                            x="35%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            y="50%"
                          >
                            Metaverse
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="MtrvrRtImg MxBlndLight MtrvrRtImg_cus_img">
                    <img
                      src="./SGimage/metaverse_img.webp"
                      loading="eager"
                      className="img-fluid lazyload"
                      alt="Metaverse - Enter The World Beyond Imagination With Metaverse"
                      title="Metaverse - Enter The World Beyond Imagination With Metaverse"

                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div classname="item-6">
            <section className="metaverse_dev_why blockchain-our-service">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-5 col-12 pl-lg-0">
                    < img src="./SGimage/nft_img.webp" alt="Blockchain Consulting Company" title="Blockchain Consulting Company" style={{ borderRadius: '20px' }} />

                  </div>
                  <div className="col-lg-7 col-12 pr-lg-0">

                    <div className="CmmnSdCnt">
                      <div className="MtavCntHdd my-4">
                        <h3 style={{ fontSize: "40px" }} className="ourservice-titles-new grident-color-sub-title">
                          NFT - Digitalize and own one-of-a-kind assets, forever
                          in your secure wallet.
                        </h3>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            NFT Marketplace Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">NFT Token Development</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            NFT Gaming Platform Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            NFT Art Marketplace Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            NFT Music Marketplace Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            NFT Launchpad Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            NFT Exchange Platform Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Celebrity NFT Marketplace Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            NFT Staking &amp; Lending Platform Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Cross-Chain NFT Marketplace Development
                          </div>
                        </div>
                      </div>
                      <div className="CmmnSdHdd NftSvgTxt">
                        <svg
                          height={100}
                          strokeWidth={1}
                          className="text-line"
                          width="100%"
                        >
                          <text
                            x="45%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            y="50%"
                          >
                            Non-Fungible Token
                          </text>
                        </svg>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div classname="item-6">
            <section className="metaverse_dev_why blockchain-our-service">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-5 col-12 pl-lg-0">
                    < img src="./SGimage/defi_img.webp" alt="Blockchain Consulting Company" title="Blockchain Consulting Company" className="img-fluid" style={{ borderRadius: '20px', width: "500px", height: '45vh' }} />

                  </div>
                  <div className="col-lg-7 col-12 pr-lg-0">

                    <div className="CmmnSdCnt">
                      <div className="MtavCntHdd my-4">
                        <h3 style={{ fontSize: '40px' }} className="ourservice-titles-new grident-color-sub-title">
                          Defi - Defy traditional finance with the DeFi
                          revolution.
                        </h3>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Decentralized Finance (DeFi) Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            DeFi Lending/ Borrowing Platform Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            DeFi Smart Contract Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">DeFi DApp Development</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">DeFi Token Development</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            DeFi Exchange Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">DeFi Wallet Development</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            DeFi Insurance Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            DeFi Staking Platform Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            DeFi Yield Farming Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            DeFi Solutions for Industries
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            DeFi Crypto Synthetic Assets Development
                          </div>
                        </div>
                      </div>
                      <div className="CmmnSdHdd">
                        <svg
                          height={100}
                          strokeWidth={1}
                          className="text-line"
                          width="100%"
                        >
                          <text
                            x="45%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            y="50%"
                          >
                            Decentralized Finance
                          </text>
                        </svg>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div classname="item-6">


            <section className="metaverse_dev_why blockchain-our-service">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-5 col-12 pl-lg-0">
                    < img src="./SGimage/dapp_img.webp" alt="Blockchain Consulting Company" title="Blockchain Consulting Company" style={{ borderRadius: '20px' }} />

                  </div>
                  <div className="col-lg-7 col-12 pr-lg-0">
                    <div className="CmmnSdCnt">
                      <div className="MtavCntHdd my-4">
                        <h3 style={{ fontSize: '40px' }} className="ourservice-titles-new grident-color-sub-title">
                          DApp - Decentralize your business with our DApp today
                        </h3>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">Solana Dapp Development</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">EOS Dapp Development</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">Cosmos Dapp Development</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Ethereum Dapp Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Binance smart chain Dapp Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">Matic Dapp Development</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Sports Betting Dapp Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">Tron Dapp Development</div>
                        </div>
                      </div>
                      <div className="CmmnSdHdd LtrSpcNorml">
                        <svg
                          height={100}
                          strokeWidth={1}
                          className="text-line"
                          width="100%"
                        >
                          <text
                            x="15%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            y="50%"
                          >
                            DApps
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
          <div classname="item-6">
            <section className="metaverse_dev_why blockchain-our-service">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-5 col-12 pl-lg-0">
                    < img src="./SGimage/crypto_img.webp" alt="Blockchain Consulting Company" title="Blockchain Consulting Company" style={{ borderRadius: '20px' }} />

                  </div>
                  <div className="col-lg-7 col-12 pr-lg-0">

                    <div className="CmmnSdCnt">
                      <div className="MtavCntHdd my-4">
                        <h3 style={{ fontSize: "40px" }} className="ourservice-titles-new grident-color-sub-title">
                          Crypto Exchange - Secure, decentralized, and
                          limitless: enter the world of cryptocurrency.
                        </h3>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Altcoin Creation Services
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">Stablecoin Development</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Cryptocurrency Exchange Software Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Decentralized Exchange Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Centralized Exchange Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Hybrid Crypto Exchange Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Cryptocurrency MLM Software Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Cryptocurrency Exchange App Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Cryptocurrency Wallet Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Crypto Payment Gateway Development
                          </div>
                        </div>
                      </div>
                      <div className="CmmnSdHdd">
                        <svg
                          height={100}
                          strokeWidth={1}
                          className="text-line"
                          width="100%"
                        >
                          <text
                            x="38%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            y="50%"
                          >
                            Crypto Currency
                          </text>
                        </svg>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div classname="item-6">


            <section className="metaverse_dev_why blockchain-our-service">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-5 col-12 pl-lg-0">
                    < img src="./SGimage/clone_img.webp" alt="Blockchain Consulting Company" title="Blockchain Consulting Company" style={{ borderRadius: '20px' }} />

                  </div>
                  <div className="col-lg-7 col-12 pr-lg-0">

                    <div className="CmmnSdCnt">
                      <div className="MtavCntHdd my-4">
                        <h3 style={{ fontSize: "40px" }} className="ourservice-titles-new grident-color-sub-title">
                          Exchange Clone - Revamp your trading potential with
                          Exchange Clone.
                        </h3>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">Binance Clone Script</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            LocalBitcoins Clone Script
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">Remitano Clone Script</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">Paxful Clone Script</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">Poloniex Clone Script</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">Coinbase Clone Script</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">Wazirx Clone Script</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">Bitstamp Clone Script</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">ByBit Clone Script</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">IDEX Clone Script</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">Kucoin Clone Script</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">Bitfinex Clone Script</div>
                        </div>
                      </div>
                      <div className="CmmnSdHdd">
                        <svg
                          height={100}
                          strokeWidth={1}
                          className="text-line"
                          width="100%"
                        >
                          <text
                            x="50%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            y="50%"
                          >
                            Exchange
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section className="mnyExpoSc blockchain_dev_sec ">
          <div className="container container-1170">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div>
                  <div className="BnrCnt OurservHdd mb-4 grident-color-sub-title">
                    <h2 className="text-capitalize ourservice-titles-new">
                      Blockchain Development
                      <span style={{ fontSize: '35px' }} className="Txt8282 px-2">Services</span>
                    </h2>
                    <p>
                      Blockchain development services have the potential to completely transform your company's overall efficacy and efficiency.
                      From blockchain-based apps to personalized smart contracts, we provide innovative solutions that transform markets and
                      enable companies for the long term.
                    </p>
                    <div className="HddrBtns blockchain_dev_btnsec mt-4">
                      <Link to="/contact-us">
                        <span
                          className="btn BtnPrimry TlkBtn"
                        >
                          <span>
                            {/* <img
                            src="./SGimage/"
                            alt="enquiry"
                            loading="eager"
                            className="img-fluid lazyload mr-2"
                          /> */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9483 23.8503C5.33292 23.8669 -0.00474671 18.5293 3.16764e-06 11.9008C0.00475304 5.38755 5.39111 0.00237574 11.902 8.01666e-07C18.5245 -0.00237413 23.8028 5.27236 23.8171 11.9079C23.8325 18.5399 18.5708 23.8337 11.9483 23.8503ZM14.5964 10.7122C14.5607 10.7798 14.5263 10.8463 14.4907 10.914C14.1986 10.914 13.9076 10.914 13.6155 10.914C11.4591 10.914 9.30263 10.9081 7.14619 10.9188C6.32327 10.9223 5.85303 11.4246 5.97534 12.1205C6.06797 12.6501 6.47052 12.9375 7.17469 12.9387C9.42969 12.9446 11.6847 12.941 13.9409 12.941C14.1463 12.941 14.3517 12.941 14.7329 12.941C14.1392 13.5502 13.6737 14.0228 13.2142 14.5026C12.7617 14.9752 12.7285 15.4585 13.1097 15.8586C13.5253 16.2944 14.0121 16.279 14.5026 15.7815C15.5178 14.7543 16.5248 13.7188 17.527 12.6798C18.0246 12.1644 18.027 11.6871 17.5294 11.1812C16.5011 10.1386 15.4656 9.10432 14.4254 8.07479C13.9254 7.57961 13.4493 7.55942 13.0325 7.99404C12.6382 8.4049 12.6584 8.87514 13.1298 9.343C13.606 9.81443 14.1071 10.2574 14.5964 10.7122Z" fill="white"></path></svg>
                            Request For Quote
                          </span>
                          <span>

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9483 23.8503C5.33292 23.8669 -0.00474671 18.5293 3.16764e-06 11.9008C0.00475304 5.38755 5.39111 0.00237574 11.902 8.01666e-07C18.5245 -0.00237413 23.8028 5.27236 23.8171 11.9079C23.8325 18.5399 18.5708 23.8337 11.9483 23.8503ZM14.5964 10.7122C14.5607 10.7798 14.5263 10.8463 14.4907 10.914C14.1986 10.914 13.9076 10.914 13.6155 10.914C11.4591 10.914 9.30263 10.9081 7.14619 10.9188C6.32327 10.9223 5.85303 11.4246 5.97534 12.1205C6.06797 12.6501 6.47052 12.9375 7.17469 12.9387C9.42969 12.9446 11.6847 12.941 13.9409 12.941C14.1463 12.941 14.3517 12.941 14.7329 12.941C14.1392 13.5502 13.6737 14.0228 13.2142 14.5026C12.7617 14.9752 12.7285 15.4585 13.1097 15.8586C13.5253 16.2944 14.0121 16.279 14.5026 15.7815C15.5178 14.7543 16.5248 13.7188 17.527 12.6798C18.0246 12.1644 18.027 11.6871 17.5294 11.1812C16.5011 10.1386 15.4656 9.10432 14.4254 8.07479C13.9254 7.57961 13.4493 7.55942 13.0325 7.99404C12.6382 8.4049 12.6584 8.87514 13.1298 9.343C13.606 9.81443 14.1071 10.2574 14.5964 10.7122Z" fill="white"></path></svg>
                            Request For Quote
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mnyExpoScImg">
                  <img
                    style={{ marginLeft: "25px" }}
                    src="./SGimage/blockchain-development-services_img.webp"
                    loading="eager"
                    alt="Blockchain Development Services"
                    title="Blockchain Development Services"
                  />
                </div>
              </div>
            </div>
            <div className="CmmnSdHdd">
              <svg
                height={100}
                strokeWidth={1}
                className="text-line"
                width="100%"
              >
                <text
                  x="45%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  y="33%"
                >
                  Blockchain
                </text>
              </svg>
            </div>
          </div>
        </section>
        <section className="blockchain_solution_sec blockchain-our-service">
          <div className="container">
            <div className="BnrCnt OurservHdd mb-lg-4">
              <h2 className="grident-color-sub-title ">
                Blockchain
                Solutions for the
                Enterprise
              </h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="blck_sol_box">
                  <div className="img_sec">
                    <img
                      src="./images/Supplychain-blockchain.webp"
                      loading="eager"
                      // className="sprite_icons lazyload"
                      alt="Blockchain in Supplychain"
                      title="Blockchain in Supplychain"
                      style={{ width: "50px" }}
                    />
                  </div>
                  <div className="grident-color-sub-title sub_title">Blockchain in Supplychain</div>
                  <p className="sub_contents">
                    We build transparent and traceable supply chain networks by utilizing the irreversible feature of blockchain,
                    which gets rid of inefficiencies, lowers fraud, and builds trust.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="blck_sol_box">
                  <div className="img_sec">
                    <img
                      src="./images/finance-in-Blockchain.webp"
                      loading="eager"
                      // className="sprite_icons lazyload"
                      alt="Blockchain in Finance"
                      title="Blockchain in Finance"
                      style={{ width: "50px" }}
                    />
                  </div>
                  <div className="grident-color-sub-title sub_title">Blockchain in Finance</div>
                  <p className="sub_contents">
                    With our cutting-edge blockchain solutions for the finance industry, you can discover new avenues for frictionless asset management, decentralized lending, and easy cross-border payments.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="blck_sol_box">
                  <div className="img_sec">
                    <img
                      src="./images/Blockchain-In-Insurance.webp"
                      loading="eager"
                      // className="sprite_icons lazyload"
                      alt="Blockchain in Insurance"
                      title="Blockchain in Insurance"
                      style={{ width: "50px" }}
                    />
                  </div>
                  <div className="grident-color-sub-title sub_title">Blockchain in Insurance</div>
                  <p className="sub_contents">
                    Insurance companies can use blockchain technology to improve data privacy,
                    expedite claims processing, lower fraud, and automate policy administration using smart contracts.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="blck_sol_box">
                  <div className="img_sec">
                    <img
                      src="./images/Blockchain-In-Healthcare.webp"
                      loading="eager"
                      // className="sprite_icons lazyload"
                      alt="Blockchain in Healthcare"
                      title="Blockchain in Healthcare"
                      style={{ width: "50px" }}
                    />
                  </div>
                  <div className="grident-color-sub-title sub_title">Blockchain in Healthcare</div>
                  <p className="sub_contents">
                    Healthcare providers may work together more easily and improve patient outcomes by
                    securely storing and exchanging patient records via blockchain.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="blck_sol_box1">
                  <div className="img_sec">
                    <img
                      src="./images/Blockchain-In-Energy-Oil.webp"
                      loading="eager"
                      // className="sprite_icons lazyload"
                      alt="Blockchain in Energy Oil and Gas"
                      title="Blockchain in Energy Oil and Gas"
                      style={{ width: "50px" }}
                    />
                  </div>
                  <div className="grident-color-sub-title sub_title">
                    Blockchain in Energy Oil and Gas
                  </div>
                  <p className="sub_contents">
                    The decentralized structure of blockchain technology enables stakeholders to attain increased transparency and accountability,
                    hence creating a more sustainable and efficient energy economy.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="blck_sol_box1">
                  <div className="img_sec">
                    <img
                      src="./images/Blockchain-In-Retail.webp"
                      loading="eager"
                      // className="sprite_icons lazyload"
                      alt="Blockchain in Retail"
                      title="Blockchain in Retail"
                      style={{ width: "50px" }}
                    />
                  </div>
                  <div className="grident-color-sub-title sub_title">Blockchain in Retail</div>
                  <p className="sub_contents">
                    Retailers can prevent the sale of fake goods and guarantee product authenticity
                    by using blockchain technology to safely trace and authenticate products along the supply chain.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="blck_sol_box1">
                  <div className="img_sec">
                    <img
                      src="./images/Blockchain-In-Transportation.webp"
                      loading="eager"
                      // className="sprite_icons lazyload"
                      alt="Blockchain in Transportation"
                      title="Blockchain in Transportation"
                      style={{ width: "50px" }}
                    />
                  </div>
                  <div className="grident-color-sub-title sub_title">Blockchain in Transportation</div>
                  <p className="sub_contents">
                    Transportation businesses may improve supply chain visibility and
                    cut down on delays by using blockchain technology to track and trace items in real-time.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="blck_sol_box1">
                  <div className="img_sec">
                    <img
                      src="./images/Blockchain-In-Agriculture.webp"
                      loading="eager"
                      // className="sprite_icons lazyload"
                      alt="Blockchain in Agriculture"
                      title="Blockchain in Agriculture"
                      style={{ width: "50px" }}
                    />
                  </div>
                  <div className="grident-color-sub-title sub_title">Blockchain in Agriculture</div>
                  <p className="sub_contents">
                    The agriculture industry could undergo a significant transformation thanks to blockchain technology,
                    which can boost sustainability & reduce food fraud.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mnyExpoSc blockchain_dev_sec blockchain-our-service">
          <div className="container container-1170">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-1 order-2">
                <div className="mnyExpoScImg">
                  <img
                    style={{ borderRadius: "10px" }}
                    src="./SGimage/Blockchain-app-development.webp"
                    loading="eager"
                    alt="Blockchain App Development"
                    title="Blockchain App Development"
                  />
                </div>
              </div>
              <div className="col-lg-6 order-lg-2 order-1">
                <div>
                  <div className="BnrCnt OurservHdd mb-4">
                    <h2 className="ourservice-titles-new grident-color-sub-title text-capitalize">
                      Blockchain App
                      Development
                    </h2>
                    <p>
                      One well-known company with expertise in blockchain and web development is Metablock Technologies.
                      In addition to providing a broad range of enterprise blockchain applications, online and mobile applications, and
                      software development services, we also have a strong foundation in blockchain development, DEX development, coin
                      and token creation, DeFi products, and knowledge of the Metaverse/NFT ecosystem. Blockchain-led technologies are
                      leading the way in creating a fair and progressive digital world, and we think Web 3.0 is crucial to achieving this..

                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="CmmnSdHdd">
              <svg
                height={100}
                strokeWidth={1}
                className="text-line"
                width="100%"
              >
                <text
                  x="45%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  y="50%"
                >
                  Blockchain App
                </text>
              </svg>
            </div>
          </div>
        </section>
        <section className="blockchain_process_sec blockchain-our-services-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-12">
                <div className="pros_head_Sec">
                  <h2 className="grident-color-sub-title ourservice-titles-new">
                    Our Step by Step Blockchain Development
                    Process
                  </h2>
                  <p className="contents">
                    From requirement research to a smooth launch, our team of experts discusses
                    your needs at every stage of the project to help your blockchain development
                    project reach its objectives.
                  </p>
                  <div className="HddrBtns mt-4">
                    <Link to="/contact-us">
                      <button
                        data-toggle="modal"
                        data-target="#popup_form_modal"
                        className="btn BtnPrimry TlkBtn"
                        target="_blank"
                      >
                        <span>

                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9483 23.8503C5.33292 23.8669 -0.00474671 18.5293 3.16764e-06 11.9008C0.00475304 5.38755 5.39111 0.00237574 11.902 8.01666e-07C18.5245 -0.00237413 23.8028 5.27236 23.8171 11.9079C23.8325 18.5399 18.5708 23.8337 11.9483 23.8503ZM14.5964 10.7122C14.5607 10.7798 14.5263 10.8463 14.4907 10.914C14.1986 10.914 13.9076 10.914 13.6155 10.914C11.4591 10.914 9.30263 10.9081 7.14619 10.9188C6.32327 10.9223 5.85303 11.4246 5.97534 12.1205C6.06797 12.6501 6.47052 12.9375 7.17469 12.9387C9.42969 12.9446 11.6847 12.941 13.9409 12.941C14.1463 12.941 14.3517 12.941 14.7329 12.941C14.1392 13.5502 13.6737 14.0228 13.2142 14.5026C12.7617 14.9752 12.7285 15.4585 13.1097 15.8586C13.5253 16.2944 14.0121 16.279 14.5026 15.7815C15.5178 14.7543 16.5248 13.7188 17.527 12.6798C18.0246 12.1644 18.027 11.6871 17.5294 11.1812C16.5011 10.1386 15.4656 9.10432 14.4254 8.07479C13.9254 7.57961 13.4493 7.55942 13.0325 7.99404C12.6382 8.4049 12.6584 8.87514 13.1298 9.343C13.606 9.81443 14.1071 10.2574 14.5964 10.7122Z" fill="white"></path></svg>
                          Get A Quote
                        </span>
                        <span>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9483 23.8503C5.33292 23.8669 -0.00474671 18.5293 3.16764e-06 11.9008C0.00475304 5.38755 5.39111 0.00237574 11.902 8.01666e-07C18.5245 -0.00237413 23.8028 5.27236 23.8171 11.9079C23.8325 18.5399 18.5708 23.8337 11.9483 23.8503ZM14.5964 10.7122C14.5607 10.7798 14.5263 10.8463 14.4907 10.914C14.1986 10.914 13.9076 10.914 13.6155 10.914C11.4591 10.914 9.30263 10.9081 7.14619 10.9188C6.32327 10.9223 5.85303 11.4246 5.97534 12.1205C6.06797 12.6501 6.47052 12.9375 7.17469 12.9387C9.42969 12.9446 11.6847 12.941 13.9409 12.941C14.1463 12.941 14.3517 12.941 14.7329 12.941C14.1392 13.5502 13.6737 14.0228 13.2142 14.5026C12.7617 14.9752 12.7285 15.4585 13.1097 15.8586C13.5253 16.2944 14.0121 16.279 14.5026 15.7815C15.5178 14.7543 16.5248 13.7188 17.527 12.6798C18.0246 12.1644 18.027 11.6871 17.5294 11.1812C16.5011 10.1386 15.4656 9.10432 14.4254 8.07479C13.9254 7.57961 13.4493 7.55942 13.0325 7.99404C12.6382 8.4049 12.6584 8.87514 13.1298 9.343C13.606 9.81443 14.1071 10.2574 14.5964 10.7122Z" fill="white"></path></svg>
                          Get A Quote
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-12">
                <div className="process_listsec">
                  <div className="process_list">
                    <div className="img_sec">
                      <img
                        src="./images/Requirement-Analysis.webp"
                        loading="eager"

                        alt="Requirement-Analysis"
                        title="Requirement Analysis"
                        style={{ width: "50px" }}
                      />
                      <h3 className="grident-color-sub-title sub_title">Requirement Analysis</h3>
                    </div>
                    <p className="sub_contents">
                      Your needs and objectives for your blockchain development project are first discussed by our experts.
                    </p>
                  </div>
                  <div className="process_list">
                    <div className="img_sec">
                      <img
                        src="./images/Blockchain-Optimisation.webp"
                        loading="eager"

                        alt="Blockchain-Optimisation"
                        title="Blockchain Optimisation"
                        style={{ width: "50px" }}
                      />
                      <h3 className="grident-color-sub-title sub_title">Blockchain Optimisation</h3>
                    </div>
                    <p className="sub_contents">
                      The blockchain network is then optimized in accordance with your specifications.

                    </p>
                  </div>
                  <div className="process_list">
                    <div className="img_sec">
                      <img
                        src="./images/Ideation.webp"
                        loading="eager"

                        alt="Ideation-Icon"
                        title="Ideation"
                        style={{ width: "50px" }}
                      />
                      <h3 className="grident-color-sub-title sub_title">Ideation</h3>
                    </div>
                    <p className="sub_contents">
                      We offer creative notions and thoughts for blockchain applications and solutions.

                    </p>
                  </div>
                  <div className="process_list">
                    <div className="img_sec">
                      <img
                        src="./images/PoC-Development.webp"
                        loading="eager"

                        alt="PoC-Development"
                        title="PoC Development"
                        style={{ width: "50px" }}
                      />
                      <h3 className="grident-color-sub-title sub_title">PoC Development</h3>
                    </div>
                    <p className="sub_contents">
                      We offer creative notions and thoughts for blockchain applications and solutions.
                    </p>
                  </div>
                  <div className="process_list">
                    <div className="img_sec">
                      <img
                        src="./images/Testing-blockchain.webp"
                        loading="eager"

                        alt="Testing-Icon"
                        title="Testing"
                        style={{ width: "50px" }}
                      />
                      <h3 className="grident-color-sub-title sub_title">Testing</h3>
                    </div>
                    <p className="sub_contents">
                      We conduct thorough testing to guarantee the project's dependability, security, and functionality.

                    </p>
                  </div>
                  <div className="process_list">
                    <div className="img_sec">
                      <img
                        src="./images/Successful-Launch.webp"
                        loading="eager"

                        alt="Successful-Launch"
                        title="Successful Launch"
                        style={{ width: "50px" }}
                      />
                      <h3 className="grident-color-sub-title sub_title">Successful Launch</h3>
                    </div>
                    <p className="sub_contents">
                      At this last phase, our professionals implement blockchain ideas for practical use and acceptance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {<SimilarFile />}
      </div>
    </div>
  );
};

export default MainBlockchain;
