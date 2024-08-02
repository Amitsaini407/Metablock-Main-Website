import React from "react";
import './DeFiTokenDevelopment.css'
import { Link } from "react-router-dom";

const DeFiTokenDevelopment = () => {
  return (
    <div>
      <main className="blockchain_consulting_services">
        <section className="blockchain_development_bnr_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <h1 className="ourservice-title">DeFi Token Development <span className="cus_title"> </span><br /> <span className="grad_text"> Consulting </span> Services</h1>
                <h3 className="contents">Our blockchain experts provide trustworthy blockchain advisory services to help you take advantage of the best and most cutting-edge blockchain application to suit your needs as a business.</h3>
                <Link to="/contact-us">
                  <div className="blk_dev_bnr_btn_sec">
                    <a href="#" data-toggle="modal" data-target="#popup_form_modal" className="blk_dev_bnr_btn">Request For Quote</a>
                  </div>
                </Link>
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
                  <h2 className="blockchain_dev_aboutus_title grident-color-sub-title">What Is Consulting for Blockchain Technology?</h2>
                  <div>
                    <p className="section_heading">Blockchain is a cutting-edge technology that has the enormous potential to completely change the economy. Blockchain consultancy makes it easier to build, develop, maintain, and analyze blockchain-related goods and web services. Globally, operational issues, long-term support, and technology advancements are important, and blockchain consulting guarantees all of these. Through low-level hardware optimization, it has the ability to change how businesses operate.
                    </p>
                    <div className="blk_dev_bnr_btn_sec">
                      <a href="#" className="blk_dev_bnr_btn" data-toggle="modal" data-target="#popup_form_modal">View Live Demo</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="video-wrapper blockchain-consult-company">
                  <div className="video-container" id="video-container-next">
                    <div className="videoCoverImage">
                      <div onclick="thevid=document.getElementById('thevideo_b'); thevid.style.display='block'; this.style.display='none'">
                        <img loading="eager" style={{ cursor: 'pointer' }} src="./images/DefistakingConsulting-img.webp" alt="DefistakingConsulting" />
                      </div>
                      <div id="thevideo_b" style={{ display: 'none' }} className="youtube" data-embed="YDrAqczPmLs">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="metaverse_dev_why">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-12 pl-lg-0">
                < img src="./images/Blockchain-consulting-company-img.webp" alt="Blockchain Consulting Company" title="Blockchain Consulting Company" style={{ borderRadius: '20px' }} />
                { /* style={{ filter: 'hue-rotate(45deg)' }} */}
              </div>
              <div className="col-lg-7 col-12 pr-lg-0">
                <h2 className="title grident-color-sub-title">Blockchain Consulting Company</h2>
                <p className="contents">Because of the vast array of blockchain solutions services that we at MetaBlock Technologies provide, we have established ourselves as the top blockchain consulting firm. Because of our unique strategies, we stand out from the competition at the biggest companies in the globe. Furthermore, in an effort to promote corporate growth, we work with dynamic start-ups. The application of distributed ledger technology has revolutionized a number of industries, including payments, supply chain management, and health care.</p>
                {/* <div className="blk_dev_bnr_btn_sec">
                  <a target="_blank" href="" className="blk_dev_bnr_btn">Talk to Our Experts</a>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        <section className="metaverse_game_services">
          <div className="container">
            <h2 className="ourservice-titles-new grident-color-sub-title paddingtop-top">Our Consultation on Blockchain</h2>
            <p className="contents" />
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="service_box">
                  {/* <img src="" alt="Strategic Consulting" title="Strategic Consulting" className="img-fluid sprite_icons lazyload" /> */}
                  <div className="ourconsultation">Strategic Advice</div>
                  <p className="sub_contents">We advise our clients' businesses on the strategic application of blockchain technology based on our comprehensive investigation. We look at new methods and choose special approaches for the data analytics assistance. After conducting an analysis, we assess the current blockchain technology's capacity to optimize your business.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="service_box">
                  {/* <img src="" alt="Training Constituent" title="Training Constituent" className="img-fluid sprite_icons lazyload" /> */}
                  <div className="ourconsultation">Instructional Component</div>
                  <p className="sub_contents">We teach team members about the intricate workings of blockchain technology through workshops and seminars, along with pertinent applications, under the close supervision of advisors and educational resources.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="service_box">
                  {/* <img src="" alt="Business Investigation" title="Business Investigation" className="img-fluid sprite_icons lazyload" /> */}
                  <div className="ourconsultation">Commercial Research</div>
                  <p className="sub_contentts-new">This is one of the key procedures we use to experience the study technique and understand the blockchain technology in use at your company now. We ascertain the processes involved in enabling your firm to advance.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="service_box">
                  {/* <img src="" alt="Hands On Programs" title="Hands On Programs" className="img-fluid sprite_icons lazyload" /> */}
                  <div className="ourconsultation">Interactive Programs</div>
                  <p className="sub_contents">Our team comprises skilled and knowledgeable individuals that can deliver outstanding work that meets our clients' needs. We give numerous bitcoin and blockchain technology projects in addition to real-time applications in a distinctive manner. In the end, we are the only ones who can deliver immediate projects with our important team members.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="service_box">
                  {/* <img src="" alt="Research" title="Research" className="img-fluid sprite_icons lazyload" /> */}
                  <div className="ourconsultation">Investigate</div>
                  <p className="sub_contents">Our professionals stay up to date on the newest developments in the cryptocurrency space through conferences and publications, and they use their extensive research in the sector to construct projects that are truly unique. It gives us great joy to share with you the findings of our never-ending study.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="alg_mac">
          <div className="container">
            <div className="section-heading text-center d-flex justify-center align-center flex-column">
              <h3 className="ourservice-titles-new grident-color-sub-title">Our Processes for Blockchain Consultation</h3>
              <p className="para_title">We have replicated nearly every cryptocurrency available, using the ones listed below.</p>
              <div className="why_round"> </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-6">
                <ul className="ul_list">
                  <li>Contemplation</li>
                  <li>Accounting</li>
                  <li>Analysis</li>
                  <li>Model</li>
                  <li>Test of Volume</li>
                  <li>Combination</li>
                  <li>Examine</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <img src="./images/Our-processes-for-blockchain-consultation-img.webp" alt="Our Blockchain Consulting Procedures" title="Our Blockchain Consulting Procedures" style={{ height: "85vh", borderRadius: "40px" }} />
              </div>
            </div>
          </div>
        </section>
        <section className="metaverse_dev_why">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-12 pl-lg-0 pt-5">
                <img src="./images/Why-Opt-For-Us.webp" alt="Why Choose Us" title="Why Choose Us" style={{ borderRadius: "10px" }} className="paddingtop-top" />
              </div>
              <div className="col-lg-7 col-12 pr-lg-0">
                <h2 className="ourservice-titles-new grident-color-sub-title">Why Opt for Us?</h2>
                <p className="contents">Since technology is always evolving, it is critical for business owners and entrepreneurs to stay up to speed on the newest strategies and practices in order to compete in this cutthroat environment.Being a well-known blockchain consulting firm in India, we offer recommendations and counsel on the tactical application of blockchain technology by favoring forward-thinking development concepts. By going over the options, we assist in evaluating the potential of blockchain consulting and adjust the website as necessary. We are aware of your company needs and respond to your requests on schedule. Our developers work hard to meet your business needs and possess extensive experience.</p>
                {/* <div className="blk_dev_bnr_btn_sec">
                  <a target="_blank" href="" className="blk_dev_bnr_btn">Talk to Our Experts</a>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        <section className="metaverse_dev_why">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-12 pr-lg-0">
                <h2 style={{ marginTop: '22vh' }} className="ourservice-titles-new grident-color-sub-title">Participate With Us</h2>
                <p className="contents">Our skilled and knowledgeable blockchain experts has the depth of knowledge to manage our clients' needs and bring their ideas to the public eye. With our direct access to technical resources and blockchain consultancy, we enable our clients' businesses to stand out from the competition, just like ours has.</p>
                {/* <div className="blk_dev_bnr_btn_sec">
                  <a target="_blank" href="" className="blk_dev_bnr_btn">Contact Us</a>
                </div> */}
              </div>
              <div className="col-lg-5 col-12 pl-lg-0">
                <img style={{ width: '400px', height: '300px', borderRadius: "10px" }} src="./images/Participate-With-Us-blockchain-img.webp" alt="Engage With Us" title="Engage With Us" className="   daoblochain-two-image" />
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>

  );
};

export default DeFiTokenDevelopment;