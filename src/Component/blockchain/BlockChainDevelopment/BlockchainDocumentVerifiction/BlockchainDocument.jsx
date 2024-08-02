import React from "react";
import "./BlockchainDocument.css";
import { Link } from "react-router-dom";


const BlockchainDocument = () => {
  return (
    <div>
      <main className="private_public_blockchain_development">
        <section className="blockchain_development_bnr_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <h1 className="ourservice-titles-new">
                  {" "}
                  <span className=" ">Document Verification </span>
                  <br />{" "}
                  <span className="grad_text">
                    {" "}
                    Development Company
                  </span>{" "} <br />
                  for Blockchain Technology
                </h1>
                <h3 className="contents">
                  A document verification blockchain company specializes in leveraging blockchain technology to provide secure, &amp;
                  transparent, and tamper-proof verification solutions for various types of documents. The company utilizes blockchain's
                  immutable ledger to securely store and timestamp documents, ensuring that once a document is verified and recorded on the blockchain
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
                    Blockchain Development Company in the Document Verification Sector
                  </h2>
                  <div>
                    <p className="section_heading">
                      A blockchain development company specializing in the document verification sector focuses on creating robust and
                      secure solutions that leverage blockchain technology to verify the authenticity, integrity, and ownership of
                      documents.
                    </p>
                    <p className="section_heading">
                      These companies develop platforms or applications that utilize blockchain technology to securely verify and authenticate documents. Users can upload their documents to the platform, and the system verifies them using cryptographic techniques
                    </p>
                    <p className="section_heading">
                      They provide digital identity solutions that enable individuals or organizations to securely store and manage their identity documents on the blockchain. This includes passports, driver's licenses, academic credentials, and other important documents.
                    </p>
                    <p className="section_heading">
                      Metablock Technologies has extensive expertise developing blockchain applications for several sectors worldwide. With blockchain experience, we are experts at creating document verification blockchains based on your company's needs in order to efficiently simplify your business processes.
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
            <div className="section-heading text-center d-flex justify-center align-center flex-column">
              <h3 className="grident-color-sub-title ourservice-titles-new">
                Blockchain Document Verification Facts
              </h3>
              <p className="section_heading text-center">

                Blockchain technology has been increasingly utilized in the supply chain industry due to its ability to provide transparency, traceability, and security throughout the entire supply chain process.
                Here's a brief description of how blockchain is transforming the supply chain:
              </p>
              <div className="why_round"> </div>
            </div>
            <div className="row mt-5">
              <div className="col-sm-3">
                <div className="work_with_box">
                  <div className="inr_img">
                    <img
                      src="./SGimage/decentralizeded.webp "
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
                  <div className="inr_img">
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
                  <div className="inr_img">
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
                  <div className="inr_img">
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
              <h3 className="title-1 grident-color-sub-title">
                Benefits Of Document Verification Blockchain Development
              </h3>
              <p className="para_title-1 text-center">
                Document verification blockchain development offers a range of benefits, transforming traditional document management processes by leveraging the advantages of blockchain technology. Here are some key benefits:              </p>
              <div className="why_round"> </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-6">
                <ul className="ul_list">
                  <li>Immutable Record-Keeping</li>
                  <li>Enhanced Security</li>
                  <li>Transparent Verification</li>
                  <li>Efficiency and Cost Savings</li>
                  <li>Global Accessibility</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="ul_list right">
                  <li>Compliance and Auditability</li>
                  <li>Cut down on human labor</li>
                  <li>Save money and effort.</li>
                  <li>Remove the requirement for outside parties</li>
                  <li>Cut back on the expense of advertising</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="metaverse_dev_why">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-12 pr-lg-0">
                <h2 className="title-1 grident-color-sub-title">
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
                  src="./SGimage/hire_devops.webp"
                  alt="Hire Our Dedicated Blockchain Developer
  "
                  className="daoblochain-two-image"
                  title="Hire Our Dedicated Blockchain Developer
                  "
                  style={{ borderRadius: "10px" }}


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
                  className="daoblochain-two-image"
                  title="Why Choose Metablock For Public / Private Blockchain Development?
  "
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="col-lg-7 col-12 pr-lg-0">
                <h2 className="title-1 grident-color-sub-title">
                  For The Development Of Document Verification Blockchains, Why Choose MetaBlock?
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

export default BlockchainDocument;
