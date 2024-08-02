import React from "react";
import "./LunchpadDevelopment.css";
import { Link } from "react-router-dom";

const LunchpadDevelopment = () => {
  return (
    <div>
      <main className="blockchain_iot_development">
        <section className="blockchain_development_bnr_section mt-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <h1 className="ourservice-title">
                  Blockchain <span className="cus_title"> </span>
                  <span className="grad_text"> Launchpad </span> Development
                  Company
                </h1>
                <h3 className="contents">
                  Combining Internet of Things (IoT) and Blockchain applications to forge a new
                  route for business process automation in a decentralized ecosystem for smart businesses.
                </h3>
                <div className="blk_dev_bnr_btn_sec">
                  <Link to="/contact-us">
                    <span
                      data-toggle="modal"
                      data-target="#popup_form_modal"
                      className="blk_dev_bnr_btn"
                    >
                      Request For Quote
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-12" />
            </div>
          </div>
        </section>
        <section className="blockchain_software">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-7">
                <div className="bs_d_c_bg">
                  <h2 className="blockchain_dev_aboutus_title grident-color-sub-title">
                    Development Company for Blockchain-Based IoT Applications
                  </h2>
                  <div>
                    <p className="section_heading">
                      Blockchain technology has started to play a big part in the rapidly expanding digital world because of its high security and trust features. The Internet of Things (IoT), a new wireless technology that is being combined with blockchain technology, has the potential to completely transform a number of industries due to its ability to connect and communicate with billions of objects via the Internet. In addition to creating the foundation for blockchain IoT, the internet-connected world has opened up a plethora of opportunities for businesses in the future by enhancing transparency, accountability, and trust while optimizing corporate procedures.

                    </p>
                    <p className="section_heading">
                      One of India's top blockchain and Internet of Things development companies, MetaBlock Technologies has extensive
                      experience in developing cutting-edge technologies such as blockchain and the Internet of Things (IoT).
                      We specialize in building faultless blockchain networks with ideal IoT solutions, regardless of the size or
                      kind of your company, to cut complexity and increase the intelligence of your enterprise.
                    </p>
                    <div className="blk_dev_bnr_btn_sec">
                      <Link to="/contact-us">
                        <span
                          className="blk_dev_bnr_btn"
                          data-toggle="modal"
                          data-target="#popup_form_modal"
                        >
                          View Live Demo
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="video-wrapper">
                  <div className="video-container" id="video-container-next">
                    <div className="videoCoverImage">
                      <div onclick="thevid=document.getElementById('thevideo_b'); thevid.style.display='block'; this.style.display='none'">
                        <img

                          loading="eager"
                          style={{ cursor: "pointer" }}
                          src="./images/Blockchain-Based-IoT-Applications-img.webp"
                          alt="Blockchain-Based-IoT-Applications-img"
                        />
                      </div>
                      <div
                        id="thevideo_b"
                        style={{ display: "none" }}
                        className="youtube"
                        data-embed="YDrAqczPmLs"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="alg_mac">
          <div className="container">
            <div className="section-heading text-center">
              <h3 className="ourservice-title grident-color-sub-title">Advantages Of Internet of Things Blockchain</h3>
              <p className="para_title">
                The revolutionary technology known as the "internet of things" makes any task involving
                internet-connected gadgets easier. This technology becomes blockchain of things when it
                is integrated with the cutting-edge blockchain technology, which serves the global business
                community in the following ways..
              </p>
              <div className="why_round"> </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-4">
                <ul className="ul_list">
                  <li>An additional security measure</li>
                  <li>Track the product</li>
                  <li>Establish trust</li>
                  <li>Cut down on extra expenses</li>
                </ul>
              </div>
              <div className="col-sm-4 pt-5">
                <img
                  src="./images/gamefi-lunchped-blockchain-iot.webp"
                  alt="Benefits of blockchain IOT"
                  title="Benefits of blockchain IOT"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="col-lg-4">
                <ul className="ul_list enhanced-monetization">
                  <li>Quicken the transaction process.</li>
                  <li>Indestructible record</li>
                  <li>Lower the chance of losing</li>
                  <li>Get Rid of Fraud</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="metaverse_game_services">
          <div className="container">
            <h2 className="ourservice-titles-new grident-color-sub-title">
              Procedures for Developing Blockchain-Based IOT Applications
            </h2>
            <p className="contents" />
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="service_box">

                  <div className="gamefi-procedures-developing">
                    Determine And Explain The Issue
                  </div>
                  <p className="sub_contenn">
                    Providing answers for any problem relating to blockchain technology is the main
                    goal of blockchain IoT. In order to decide on the best plan of action and pertinent
                    remedies, the first thing we do is identify the problem and its nature.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="service_box">

                  <div className="gamefi-procedures-developing">Create the Solution</div>
                  <p className="sub_contenn">
                    Finding a solution to the issue will be the following step after the problem has been recognized. It is possible to get at a certain solution by using the solution and its derivatives quite successfully.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="service_box">

                  <div className="gamefi-procedures-developing">Develop an App Based on the Solution</div>
                  <p className="sub_contenn">
                    After the solution has been developed, the following stage would be to develop an application
                    or other asset to test the developed solutions and resolve the problem by gathering all necessary
                    needs in one location.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="service_box">

                  <div className="gamefi-procedures-developing">Apply the application into practice.</div>
                  <p className="sub_contenn">
                    After the application or asset has been generated, it will be applied to the specified problem and tested to see if it can help solve the specified issue or not.

                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="service_box">

                  <div className="gamefi-procedures-developing">Assist and Improve</div>
                  <p className="sub_contenn">
                    After it is established that the asset or application is operating effectively and
                    that the users are benefiting from it, ongoing support will be given to determine
                    whether any additional updates or repairs are required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="crypto_exch_listing_services">
          <div className="container">
            <h2 className="ourservice-titles-new grident-color-sub-title">IoT Blockchain Solutions</h2>
            <div className="row justify-content-center cus_row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="service_box">
                  <div className="inr_img">
                    <img
                      width={'60px'}
                      src="./images/decentralizes.webp"
                      alt="Decentralization"
                      title="Decentralization"

                    />
                  </div>
                  <div className="sub_title">Decentralization</div>
                  <p className="sub_contents">
                    Peer-to-peer transactions on blockchain will no longer be subject to transaction fees, and transactions will go more quickly within the secure network.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="service_box">
                  <div className="inr_img">
                    <img
                      width={'60px'}
                      src="./images/idea.webp"
                      alt="Blockchain As A Service (BaaS)"
                      title="Blockchain As A Service (BaaS)"

                    />
                  </div>
                  <div className="sub_title">
                    Blockchain Solutions, Inc. (BaaS)
                  </div>
                  <p className="sub_contents">
                    A blockchain application will be integrated with cloud services to enable projects to be
                    easily deployed and complicated free of charge.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="service_box">
                  <div className="inr_img">
                    <img
                      width={'60px'}
                      src="./images/accounting-book.webp"
                      alt="Blockless Distributed Ledger"
                      title="Blockless Distributed Ledger"

                    />
                  </div>
                  <div className="sub_title">Unblockable Dispersed Ledger</div>
                  <p className="sub_contents">
                    The distributed ledger facilitates the identification and approval of transactions without requiring the deployment of blockchain technology.

                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="service_box">
                  <div className="inr_img">
                    <img
                      width={'60px'}
                      src="./images/hotel.webp"
                      alt="Shared Devices And Private Entities"
                      title="Shared Devices And Private Entities"

                    />
                  </div>
                  <div className="sub_title">
                    Private Entities And Shared Devices
                  </div>
                  <p className="sub_contents">
                    To achieve the intended outcomes, share IoT-linked wireless devices
                    and purchase private entities with blockchain connected IoT solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="metaverse_game_industry">
          <div className="container">
            <h2 className="ourservice-titles-new grident-color-sub-title">Blockchain and IoT Use in Industries</h2>
            <p className="contents">
              The business world is getting faster and more connected as technology advances.
              The Internet of Things (IoT) and blockchain have unforeseen effects on a number of businesses.
              The following lists a few of the usage cases.
            </p>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-12">
                <div className="industry_box">
                  <div className="sub_title grident-color-sub-title">
                    Supply Chain Blockchain IOT
                  </div>
                  <p className="sub_content">
                    Blockchain technology can be used in conjunction with RFID and other Internet of Things edge
                    devices to optimize the supply chain process. The primary benefit of incorporating blockchain
                    IoT into the supply chain is that it allows for easy tracking by any member of the network,
                    monitoring of the product at all times, and knowledge of its current state, including whether
                    it is damaged or in good shape.
                  </p>

                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="industry_box">
                  <div className="sub_title grident-color-sub-title">Blockchain and IoT in Healthcare</div>
                  <p className="sub_content">
                    The sector that will gain the most from electronic medical records is the healthcare sector. Blockchain technology will make it possible for the hospital and patients to maintain their own records, which the doctors would be able to view from anywhere at any time. When blockchain technology and Internet of Things devices are coupled, patients will be able to receive appropriate treatment since real-time health monitoring will be possible.

                  </p>

                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="industry_box">
                  <div className="sub_title grident-color-sub-title">
                    IOT and Blockchain in Transportation
                  </div>
                  <p className="sub_content">
                    The transportation industry will benefit from the integration of blockchain and IoT since it will
                    streamline workflow and offer real-time visibility into the status of vehicles in transit. Customers
                    will find it simple to locate a vehicle for transportation, and blockchain IoT will serve the interests
                    of both the user and the owner of the car while reducing the time required to locate the transport.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="metaverse_dev_why">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-12 pr-lg-0">
                <h2 className="ourservice-titles-new grident-color-sub-title">
                  Employ Our Blockchain Expert
                </h2>
                <p className="contents">
                  Employ our exceptionally skilled blockchain engineers to obtain the greatest blockchain solutions
                  for your company. Our team of professionals in blockchain development has implemented blockchain
                  technology across multiple industries, with a focus on the Internet of Things. Our skillful
                  integration of blockchain technology with the Internet of Things can bring fresh growth and
                  success to your company.
                </p>
                <div className="blk_dev_bnr_btn_sec">
                  <Link to="/contact-us">
                    <span
                      target="_blank"
                      className="blk_dev_bnr_btn"
                    >
                      Contact Us
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-5 col-12 pl-lg-0">
                <img style={{ height: '200px', width: '400px', borderRadius: "10px" }}
                  src="./images/Employ-Our-Blockchain-Expert.webp"
                  alt="Hire Our Blockchain Developer For Blockchain IoT"
                  title="Hire Our Blockchain Developer For Blockchain IoT"
                  className="daoblochain-two-image"

                />
              </div>
            </div>
          </div>
        </section>
        <section className="metaverse_dev_why">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-12 pl-lg-0">
                <img
                  className="daoblochain-two-image"
                  src="./images/gamefi-blockchain-iot-img.webp"
                  alt="Why metablock For Blockchain Iot"
                  title="Why metablock For Blockchain Iot"
                  style={{ borderRadius: "10px" }}

                />
              </div>
              <div className="col-lg-7 col-12 pr-lg-0">
                <h2 className="ourservice-titles-new grident-color-sub-title">For Blockchain IoT, Why MetaBlock?</h2>
                <p className="contents">
                  As companies began implementing blockchain technology in their respective sectors,
                  MetaBlock Technologies emerged as a top Blockchain IoT Application development firm in India.
                  We have a highly skilled, tech-savvy staff that is up to date on the latest developments in the
                  field. We provide special blockchain-based Internet of Things solutions to a range of global
                  sectors. Because of our experience in the blockchain IoT space, we can deliver your project on
                  schedule and within budget.
                </p>
                {/* <div className="blk_dev_bnr_btn_sec">
                  <Link to="/contact-us">
                    <span
                      target="_blank"
                      className="blk_dev_bnr_btn"
                    >
                      Talk to Our Experts
                    </span>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LunchpadDevelopment;
