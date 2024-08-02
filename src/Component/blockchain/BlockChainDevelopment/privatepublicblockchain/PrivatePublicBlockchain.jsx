import React from "react";
import "./PrivatePublicBlockchain.css";
import { Link } from "react-router-dom";

const PrivatePublicBlockchain = () => {
  return (
    <div>
      <main className="private_public_blockchain_development">
        <section className="blockchain_development_bnr_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <h1 className="ourservice-titles-news">
                  {" "}
                  <span className="">Public/Private </span>
                  <br />{" "}
                  <span className="grad_text">
                    {" "}
                    Development Company
                  </span>{" "} <br />
                  for Blockchain Technology
                </h1>
                <h3 className="contents">
                  MetaBlock offers the only assistance needed to create a public blockchain for a distributed network &amp;  that is open and transparent, as well as the complete solution needed to create a private blockchain for a network that is acceptable and secures business data.

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
                  <h2 className="ourservice-titles-new grident-color-sub-title">
                    Blockchain Development Company in the  <b className="grident-color-sub-title">Public and Private</b> Sector
                  </h2>
                  <div>
                    <p className="section_heading">
                      Today, blockchain is a crucial component of all enterprises. Blockchain technology is being considered by a wide range of industries, including banking, healthcare, supply chain, transportation, etc., as a means of reducing risk, increasing transparency, and propelling company operations to new heights. Certain organizations will want that their information be shared with specific users only, while others would want it shared with every user on the network. Despite being a same technology, public and private blockchains were developed to meet business privacy needs.
                    </p>
                    <p className="section_heading">
                      Being an open network, public blockchain allows anybody to read, write, and join. Since there is no central authority, the data on the network is unchangeable.
                    </p>
                    <p className="section_heading">
                      Private blockchains are networks that are controlled by a single company or group and restrict blockchain access to specific users. Data on a private blockchain can be shared with particular people without being made public.
                    </p>
                    <p className="section_heading">
                      Metablock Technologies has extensive expertise developing blockchain applications for several sectors worldwide. With blockchain experience, we are experts at creating public or private blockchains based on your company's needs in order to efficiently simplify your business processes.
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
                          className="thumb img-fluid lazyload"
                          loading="eager"
                          style={{ cursor: "pointer" }}
                          src="./SGimage/blockchain_public & private.webp "
                          alt="blockchain_public"
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
        <section className="mid_section">
          <div className="container">
            <div className="section-heading text-center">
              <h3 className="ourservice-titles-new grident-color-sub-title">
                Blockchain Supply  Facts
              </h3>
              <p className="section_heading">

                Blockchain technology has been increasingly utilized in the supply chain industry due to its ability to provide transparency, traceability, and security throughout the entire supply chain process.
                Here's a brief description of how blockchain is transforming the supply chain:
              </p>
              <div className="why_round"> </div>
            </div>
            <div className="row mt-5">
              <div className="col-sm-3">
                <div className="work_with_box">
                  <div >
                    <img
                      src="./SGimage/decentralized.webp"
                      className=""
                      alt="Decentralization"
                      title="Decentralization"
                    />
                  </div>
                  <h3 className="media-heading">Decentralization</h3>
                  <p className="normal_text">
                    In a private blockchain, a single institution or organization will control the blockchain network, as opposed to a public blockchain, which is decentralized and not governed by a single entity.
                  </p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="work_with_box">
                  <div  >
                    <img
                      src="./SGimage/secure.webp "
                      className=""
                      alt="Privacy"
                      title="Privacy"

                    />
                  </div>
                  <h3 className="media-heading">Privacy</h3>
                  <p className="normal_text">
                    Since the public blockchain is accessible to all members of the network, it lacks privacy and can be used for widespread advertising. However, because private blockchain data is exchanged with specified individuals, it offers greater anonymity.
                  </p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="work_with_box">
                  <div  >
                    <img
                      src="./SGimage/data-security.webp"
                      className=""
                      alt="Restriction to members"
                      title="Restriction to members"

                    />
                  </div>
                  <h3 className="media-heading">Restriction to members</h3>
                  <p className="normal_text">
                    A public blockchain network permits anybody to join and become a member, whereas a private blockchain network limits access to network membership to certain persons.{" "}
                  </p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="work_with_box">
                  <div  >
                    <img
                      src="./SGimage/bitcoinsd.webp "
                      className=""
                      alt="Sharing of information"
                      title="Sharing of information"

                    />
                  </div>
                  <h3 className="media-heading">Sharing of information</h3>
                  <p className="normal_text">
                    The data in a public blockchain will be accessible to all members of the network. On the other hand, with a private blockchain, you have control over who can access network data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="alg_mac">
          <div className="container">
            <div className="section-heading text-center">
              <h3 className="ourservice-titles-new grident-color-sub-title">
                Effects Of Public Blockchain Development
              </h3>
              <p className="para_title-1">
                A private blockchain is a kind of blockchain where only specific users can access it. Private blockchain can benefit your company if you wish to share your information with a large number of individuals within the corporation rather than just one. The following are some advantages of implementing private blockchain in your company:
              </p>
              <div className="why_round"> </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-6">
                <ul className="ul_list">
                  <li>Dependable and safe data</li>
                  <li>Archiving of current and historical data</li>
                  <li>Clear and Unchangeable</li>
                  <li>Reduce the amount of paperwork</li>
                  <li>Cut down on dishonesty</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="ul_list right">
                  <li>Boost the clientele</li>
                  <li>Cut down on human labor</li>
                  <li>Save money and effort.</li>
                  <li>Remove the requirement for outside parties</li>
                  <li>Cut back on the expense of advertising</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="alg_mac">
          <div className="container">
            <div className="section-heading text-center">
              <h3 className="ourservice-titles-new grident-color-sub-title">
                Impact Of Private Blockchain Development
              </h3>
              <p className="para_title-1">
                Private blockchain is a type of blockchain in which the access
                is limited to certain users. If you want to share your
                information with many people in the organization, and not with
                everyone, then private blockchain will help your business. The
                benefits of using private blockchain in your business is as
                follows:
              </p>
              <div className="why_round"> </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-6">
                <ul className="ul_list">
                  <li>Information not exchanged via a public network</li>
                  <li>Improve privacy</li>
                  <li>Unchangeable record</li>
                  <li>Regulate and oversee the users</li>
                  <li>Cut down on the possibility of loss</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="ul_list right">
                  <li>No extra expenses, and processing time is saved</li>
                  <li>Boost security by double</li>
                  <li>Increased effectiveness and tamper-proof</li>
                  <li>Quicker than open blockchain</li>
                  <li>Establish mutual trust between the investors</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="metaverse_dev_why">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-12 pr-lg-0">
                <h2 className="title-1  grident-color-sub-title">
                  Choose Our Committed Blockchain Developer
                </h2>
                <p className="contents">
                  For the greatest blockchain solutions for your company, work with our incredibly skilled blockchain developers. Depending on your company's demands, our team of professionals in blockchain development has built public or private blockchains and has implemented blockchain for a variety of industries. Even when the blockchain is deployed on your primary network, our skilled blockchain developers offer end-to-end support for your blockchain development project.
                </p>
                <div className="blk_dev_bnr_btn_sec">
                  <Link to="/contact-us">
                    <span
                      target="_blank"
                      className="blk_dev_bnr_btn"
                    >
                      View Live Demo
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-5 col-12 pl-lg-0">
                <img
                  src=""
                  alt="Hire Our Dedicated Blockchain Developer
  "
                  title="Hire Our Dedicated Blockchain Developer
  "
                  className="img-fluid hire-img"
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
                  src="./SGimage/futuristic image of a bitcoin.webp "
                  alt="Why Choose Metablock For Public / Private Blockchain Development?
  "
                  title="Why Choose Metablock For Public / Private Blockchain Development?
  "
                  className="img-fluid hire-img"
                />
              </div>
              <div className="col-lg-7 col-12 pr-lg-0">
                <h2 className="title-1">
                  For The Development Of Public Or Private Blockchains, Why Choose MetaBlock?
                </h2>
                <p className="contents">
                  One of the leading blockchain development companies in India is MetaBlock Technologies. We have extensive expertise creating blockchain technology for a wide range of global industries. Because of our experience, we can finish any kind of blockchain project in the allotted time. Our highly skilled blockchain professionals work tirelessly to provide you the most out of public and private blockchain technology and help you grow your company.
                </p>
                <div className="blk_dev_bnr_btn_sec">
                  <Link to="/contact-us">
                    <span
                      target="_blank"
                      className="blk_dev_bnr_btn"
                    >
                      View Live Demo
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default PrivatePublicBlockchain;
