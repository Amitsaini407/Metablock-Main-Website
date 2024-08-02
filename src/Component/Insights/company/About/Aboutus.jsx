import React from "react";
import "./Aboutus.css";
import SimilarFile from "../../../SimilarFile";
import AboutUsWhoWeAre from "../../../MainPage/AboutUsWhoWeAre";

const Aboutus = () => {
  return (
    <>
      <main id="about_us_main">
        <section className="about_us_banner">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-12 col-12" />
            </div>
          </div>
        </section>

        <AboutUsWhoWeAre />

        <section className="our_mission_vision_sec">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="vision_box">
                  <div className="about-title">Our Vision</div>
                  <div className="sub_contents ">
                    Our vision is to serve our clients by offering them cutting-edge
                    IT products & services that help them grow and dominate their
                    industries with the help of the latest IT technologies.

                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="vision_box">
                  <div className="about-title">Our Mission</div>
                  <div className="sub_contents">
                    The mission of the company is to serve
                    the youth by empowering them with the
                    most advanced blockchain technological
                    training, with the vision of making them
                    future corporate leaders.

                  </div>
                </div>
              </div>
            </div>
            <div className="sub_title1">Our fundamental principles</div>
            <p className="contents">
              Our core values are centred on putting the needs and happiness of
              our customers before our own. We also work hard to stay on the
              cutting edge of new technologies and innovations, guaranteeing
              unrivalled business answers for our customers.
            </p>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="values_box">
                  <img
                    src="./images/values-icons-BxdpxrIj.webp"
                    className="sprite_icons"
                    style={{ objectPosition: "0px 0px" }}
                    alt="Enrichment"
                    title="Enrichment"
                  />
                  <div className="sub_title">Enrichment</div>
                  <div className="sub_contents">
                    We promote end-to-end ownership, responsibility, and
                    accountability using the appropriate tools to complete the
                    task.
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="values_box">
                  <img
                    src="./images/values-icons-BxdpxrIj.webp"
                    className="sprite_icons"
                    style={{ objectPosition: "-121px 0px" }}
                    alt="Commitment"
                    title="Commitment"
                  />
                  <div className="sub_title">Commitment</div>
                  <div className="sub_contents">
                    Our cross-capability professionals collaborate and exchange
                    knowledge as a team to accomplish a shared objective for
                    both our clients and ourselves.
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="values_box">
                  <img
                    src="./images/values-icons-BxdpxrIj.webp"
                    className="sprite_icons"
                    style={{ objectPosition: "-241px 0px" }}
                    alt="Transparency"
                    title="Transparency"
                  />
                  <div className="sub_title">Transparency</div>
                  <div className="sub_contents">
                    We conduct our business in a completely transparent way to
                    ensure the success of our clients, and our operations are
                    based on open communication and honesty.
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="values_box">
                  <img
                    src="./images/values-icons-BxdpxrIj.webp"
                    className="sprite_icons"
                    style={{ objectPosition: "0px 0px" }}
                    alt="Client satisfaction"
                    title="Client satisfaction"
                  />
                  <div className="sub_title">Client satisfaction</div>
                  <div className="sub_contents">
                    We guide our customers on their path to becoming
                    high-performance organizations and establish long term
                    connections by being responsive and reliably providing
                    value.
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="values_box">
                  <img
                    src="./images/values-icons-BxdpxrIj.webp"
                    className="sprite_icons"
                    style={{ objectPosition: "0px 0px" }}
                    alt="Integrity"
                    title="Integrity"
                  />
                  <div className="sub_title">Integrity</div>
                  <div className="sub_contents">
                    We maintain the highest governance standards and manage
                    commercial operations with moral and intellectual integrity.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact_us_achive">
          <div className="container">
            <div className="ourservice-titles-new grident-color-sub-title">Our Achievements</div>
            <div className="row justify-content-center">
              {/* <div className="col-lg-2 col-md-4 col-sm-6 col-6 p-lg-0">
                <div className="achive_box">
                  <img
                    src="https://www.MetaBlocktechnologies.com/asset/img/form-achv-icons.webp"
                    alt="15+ Years of experience"
                    title="15+ Years of experience"
                    className="sprite_icons"
                    style={{ objectPosition: "0px 0px" }}
                  />
                  <div className="sub_title">
                    <span className="cus_title">15+ Years</span> <br /> of
                    experience
                  </div>
                </div>
              </div> */}
              <div className="col-lg-2 col-md-4 col-sm-6 col-6 p-lg-0">
                <div className="achive_box">
                  <img
                    src="./images/form-achv-icons-B2Ow7VCF.webp"
                    alt="350+ Experts of technology"
                    title="350+ Experts of technology"
                    className="sprite_icons"
                    style={{ objectPosition: "-257px 0px" }}
                  />
                  <div className="sub_title">
                    <span className="cus_title">350+ Experts</span> <br /> of
                    technology
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-6 p-lg-0">
                <div className="achive_box">
                  <img
                    src="./images/form-achv-icons-B2Ow7VCF.webp"
                    alt="1000+ Websites delivered to clients"
                    title="1000+ Websites delivered to clients"
                    className="sprite_icons"
                    style={{ objectPosition: "-516px 0px" }}
                  />
                  <div className="sub_title">
                    <span className="cus_title">1000+ Websites</span> <br />{" "}
                    delivered to clients
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-6 p-lg-0">
                <div className="achive_box">
                  <img
                    src="./images/form-achv-icons-B2Ow7VCF.webp"
                    alt="500+ Mobile Apps delivered"
                    title="500+ Mobile Apps delivered"
                    className="sprite_icons"
                    style={{ objectPosition: "-774px 0px" }}
                  />
                  <div className="sub_title">
                    <span className="cus_title">500+ Mobile Apps</span> <br />{" "}
                    delivered
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-6 p-lg-0">
                <div className="achive_box">
                  <img
                    src="./images/form-achv-icons-B2Ow7VCF.webp"
                    alt="2000+ Clients worldwide"
                    title="2000+ Clients worldwide"
                    className="sprite_icons"
                    style={{ objectPosition: "-1032px 0px" }}
                  />
                  <div className="sub_title">
                    <span className="cus_title">2000+ Clients </span> <br />{" "}
                    worldwide
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="whado_wedo_sec">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 col-12">
                <h2 className="ourservice-titles-new grident-color-sub-title">How Do We Proceed?</h2>
                <p className="contents">
                  In order for businesses to adapt to change, Meta Block helps
                  them implement new technologies. Our in-depth investigation,
                  methodology focused on design-thinking, and unparalleled
                  solutions in strategy, consulting, technology, and operations
                  create a revolutionary roadmap to help companies everywhere
                  move from conventional technology platforms to
                  blockchain-based systems. Our motivation stems from the desire
                  to identify and capitalise on disruption-related opportunities
                  in order to deliver transformative outcomes for a future
                  decentralised digital world.
                </p>
              </div>
              <div className="col-lg-6 col-12">
                <img
                  src="./images/what-do-we-do.webp"
                  alt="What do we do?"
                  title="What do we do?"
                  style={{ width: "400px", borderRadius: "10px" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="blockchain_network">
          <div className="container">
            <h2 className="ourservice-titles-new grident-color-sub-title">Blockchain Networks We Know and Love</h2>
            <div className="img_sec">
              <img
                src="./images/blockchain-img-BeS3uzWW.webp"
                alt="Blockchain networks we are familiar with"
                title="Blockchain networks we are familiar with"
              />
            </div>
          </div>
        </section>
        <section className="industries_work_sec">
          <div className="container">
            <h2 className="ourservice-titles-new grident-color-sub-title">Industries We Provide Solutions For</h2>
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="industries_list_sec">
                  <div className="industries_list">
                    <img
                      src="./images/purple.webp"
                      alt="List Icon"
                      title="List Icon"
                      className="img-fluid"
                    />
                    <div className="sub_title">Healthcare</div>
                  </div>
                  <div className="industries_list">
                    <img
                      src="./images/purple.webp"
                      alt="List Icon"
                      title="List Icon"
                      className="img-fluid"
                    />
                    <div className="sub_title">Information technology</div>
                  </div>
                  <div className="industries_list">
                    <img
                      src="./images/purple.webp"
                      alt="List Icon"
                      title="List Icon"
                      className="img-fluid"
                    />
                    <div className="sub_title">Supply chain</div>
                  </div>
                  <div className="industries_list">
                    <img
                      src="./images/purple.webp"
                      alt="List Icon"
                      title="List Icon"
                      className="img-fluid"
                    />
                    <div className="sub_title">Legal and compliance</div>
                  </div>
                  <div className="industries_list">
                    <img
                      src="./images/purple.webp"
                      alt="List Icon"
                      title="List Icon"
                      className="img-fluid"
                    />
                    <div className="sub_title">Sales</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="industries_list_sec1">
                  <div className="industries_list">
                    <img
                      src="./images/purple.webp"
                      alt="List Icon"
                      title="List Icon"
                      className="img-fluid"
                    />
                    <div className="sub_title">Finance</div>
                  </div>
                  <div className="industries_list">
                    <img
                      src="./images/purple.webp"
                      alt="List Icon"
                      title="List Icon"
                      className="img-fluid"
                    />
                    <div className="sub_title">Product R&amp;D</div>
                  </div>
                  <div className="industries_list">
                    <img
                      src="./images/purple.webp"
                      alt="List Icon"
                      title="List Icon"
                      className="img-fluid"
                    />
                    <div className="sub_title">
                      Marketing and communications
                    </div>
                  </div>
                  <div className="industries_list">
                    <img
                      src="./images/purple.webp"
                      alt="List Icon"
                      title="List Icon"
                      className="img-fluid"
                    />
                    <div className="sub_title">Human resources</div>
                  </div>
                  <div className="industries_list">
                    <img
                      src="./images/purple.webp"
                      alt="List Icon"
                      title="List Icon"
                      className="img-fluid"
                    />
                    <div className="sub_title">Real estate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="specialization_dev_sec">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-7 col-md-6 col-12">
                <h2 className="ourservice-titles-new grident-color-sub-title">Our Area of Expertise in Development</h2>
                <p className="contents">
                  We specialise in assisting you in turning your ideas into
                  winning plans with the aid of our incredible products.
                </p>
              </div>
              <div className="col-lg-5 col-md-6 col-12">
                <div className="specialization_list_box">
                  <div className="specialization_list">
                    <img
                      src="./images/purple.webp"
                      alt="List Icon"
                      title="List Icon"
                      className="img-fluid"
                    />
                    <div className="sub_title">Web3 Development</div>
                  </div>
                  <div className="specialization_list">
                    <img
                      src="./images/purple.webp"
                      alt="List Icon"
                      title="List Icon"
                      className="img-fluid"
                    />
                    <div className="sub_title">Metaverse Development</div>
                  </div>
                  <div className="specialization_list">
                    <img
                      src="./images/purple.webp"
                      alt="List Icon"
                      title="List Icon"
                      className="img-fluid"
                    />
                    <div className="sub_title">DeFi Development</div>
                  </div>
                  <div className="specialization_list">
                    <img
                      src="./images/purple.webp"
                      alt="List Icon"
                      title="List Icon"
                      className="img-fluid"
                    />
                    <div className="sub_title">Blockchain Development</div>
                  </div>
                  <div className="specialization_list">
                    <img
                      src="./images/purple.webp"
                      alt="List Icon"
                      title="List Icon"
                      className="img-fluid"
                    />
                    <div className="sub_title">Hyperledger Development</div>
                  </div>
                  <div className="specialization_list">
                    <img
                      src="./images/purple.webp"
                      alt="List Icon"
                      title="List Icon"
                      className="img-fluid"
                    />
                    <div className="sub_title">Cryptocurrency Development</div>
                  </div>
                  <div className="specialization_list">
                    <img
                      src="./images/purple.webp"
                      alt="List Icon"
                      title="List Icon"
                      className="img-fluid"
                    />
                    <div className="sub_title">dApp Development</div>
                  </div>
                  <div className="specialization_list">
                    <img
                      src="./images/purple.webp"
                      alt="List Icon"
                      title="List Icon"
                      className="img-fluid"
                    />
                    <div className="sub_title">On-demand App Development</div>
                  </div>
                  <div className="specialization_list">
                    <img
                      src="./images/purple.webp"
                      alt="List Icon"
                      title="List Icon"
                      className="img-fluid"
                    />
                    <div className="sub_title">NFT Development</div>
                  </div>
                  <div className="specialization_list">
                    <img
                      src="./images/purple.webp"
                      alt="List Icon"
                      title="List Icon"
                      className="img-fluid"
                    />
                    <div className="sub_title">Game Development</div>
                  </div>
                  <div className="specialization_list">
                    <img
                      src="./images/purple.webp"
                      alt="List Icon"
                      title="List Icon"
                      className="img-fluid"
                    />
                    <div className="sub_title">ICO/STO/IDO Development</div>
                  </div>
                  <div className="specialization_list">
                    <img
                      src="./images/purple.webp"
                      alt="List Icon"
                      title="List Icon"
                      className="img-fluid"
                    />
                    <div className="sub_title">Mobile App Development</div>
                  </div>
                  <div className="specialization_list">
                    <img
                      src="./images/purple.webp"
                      alt="List Icon"
                      title="List Icon"
                      className="img-fluid"
                    />
                    <div className="sub_title">Web design services</div>
                  </div>
                  <div className="specialization_list">
                    <img
                      src="./images/purple.webp"
                      alt="List Icon"
                      title="List Icon"
                      className="img-fluid"
                    />
                    <div className="sub_title">AI Development</div>
                  </div>
                  <div className="specialization_list">
                    <img
                      src="./images/purple.webp"
                      alt="List Icon"
                      title="List Icon"
                      className="img-fluid"
                    />
                    <div className="sub_title">Enterprise solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="development_process_sec">
          <div className="container">
            <h2 className="ourservice-titles-new grident-color-sub-title">Our Development Process</h2>
            <p className="contents">
              At Meta Block Technologies, we employ a unique methodology to
              deliver the best result that satisfies our clients' needs and the
              most recent market trends. We have created a variety of software.
              applications for companies in a variety of industries, from
              straightforward inventory packages to intricate ERP systems. In
              order to satisfy each client's unique needs, we also modify
              software to their specifications. When creating a Software
              Development Life Cycle (SDLC) at Meta Block, we adhere to the
              guidelines listed below.
            </p>
            <p className="contents">
              Our team comprises of proficient and enthusiastic professionals
              who put in a lot of effort to finish your application before the
              deadline. We provide customised solutions that are ideal for your
              company's needs.
            </p>
            <div className="process_box">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-3 col-md-2 col-12 order-1 order-lg-2">
                  <div className="img_sec">
                    <img
                      src="./images/process-uuuyuCJpSoITW.webp"
                      className="sprite_icons"
                      style={{ objectPosition: "0px 0px" }}
                      alt="Gathering Information"
                      title="Gathering Information"
                    />
                  </div>
                </div>
                <div className="col-lg-9 col-md-5 col-12 order-3 order-lg-3">
                  <div>
                    <h3 className="sub_title-1">Gathering Information</h3>
                    <div className="sub_contents">
                      In essence, a website and mobile application cannot be the
                      same for every type of business because there are so many
                      different types of businesses. The news app and portal are
                      not the same as entertainment website, whereas adults and
                      children anticipate a different appearance. Our senior
                      team will dedicate their time to gathering all the
                      necessary data from the client regarding the goal of the
                      website, the target audience, and the purpose of the
                      website creation in order to create a website / mobile
                      application that meets all business requirements and
                      appeals to people of all ages. We also provide some
                      helpful recommendations on how to create the best result
                      as quickly as possible.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="process_box">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-9 col-md-5 col-12 order-lg-1 order-2">
                  <div>
                    <h3 className="sub_title-1">Analysis</h3>
                    <div className="sub_contents">
                      Following the acquisition of the necessary data from the
                      client, our business analysts and concerned parties
                      (design, development, and marketing) will assess the
                      complexity of the project and determine the financial and
                      schedule requirements for finishing the project.
                      Furthermore, we draft a clear, succinct, and effective
                      document that covers the following topics: payment terms,
                      project closure clauses, team members, timeline, tools,
                      and technologies to be utilised in the creation of the
                      website and mobile application.
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-2 col-12 order-1 order-lg-2">
                  <div className="img_sec">
                    <img
                      src="./images/process-uuuyuCJpSoITW.webp"
                      className="sprite_icons"
                      style={{ objectPosition: "-142px 0px" }}
                      alt="Analysis"
                      title="Analysis"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="process_box">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-3 col-md-2 col-12">
                  <div className="img_sec">
                    <img
                      src="./images/process-uuuyuCJpSoITW.webp"
                      className="sprite_icons"
                      style={{ objectPosition: "-284px 0px" }}
                      alt="Planning"
                      title="Planning"
                    />
                  </div>
                </div>
                <div className="col-lg-9 col-md-5 col-12">
                  <div>
                    <h3 className="sub_title-1">Planning</h3>
                    <div className="sub_contents">
                      Our exceptionally skilled team of professionals will
                      devise an efficient plan to design and develop the project
                      now that the project's scope and deadline are
                      well-defined. beyond the expectations of the client. We
                      use the agile development methodology to guarantee the
                      best possible outcome in a timely, effective, and
                      productive manner.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="process_box">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-9 col-md-5 col-12 order-lg-1 order-2">
                  <div>
                    <h3 className="sub_title-1">Wire-Frames</h3>
                    <div className="sub_contents">
                      After the planning phase is complete, wireframes will be
                      created to begin giving your project a shape. This is
                      carried out in order to assess the project's
                      intuitiveness, and then we To improve their visual appeal,
                      create a PSD. Our team will use our experience to create a
                      basic project design, and we will solicit feedback from
                      the client when necessary. We will move forward if the
                      client is satisfied, and we will make the required
                      adjustments if the client makes any suggestions.
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-2 col-12 order-1 order-lg-2">
                  <div className="img_sec">
                    <img
                      src="./images/process-uuuyuCJpSoITW.webp"
                      className="sprite_icons"
                      style={{ objectPosition: "-448px 0px" }}
                      alt="Wire-Frames"
                      title="Wire-Frames"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="process_box">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-3 col-md-2 col-12">
                  <div className="img_sec">
                    <img
                      src="./images/process-uuuyuCJpSoITW.webp"
                      className="sprite_icons"
                      style={{ objectPosition: "-610px 0px" }}
                      alt="Design"
                      title="Design"
                    />
                  </div>
                </div>
                <div className="col-lg-9 col-md-5 col-12">
                  <div>
                    <h3 className="sub_title-1">Design</h3>
                    <div className="sub_contents">
                      Our design team will start working on creating the website
                      or mobile applications as soon as the design skeleton is
                      ready, making sure everything functions flawlessly across
                      all platforms. across all platforms without sacrificing
                      its appearance on any of the devices. Our speciality lies
                      in creating websites and mobile applications that are
                      optimised to function on various screen sizes and devices,
                      including laptops, PCs, and mobile phones.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="process_box">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-9 col-md-5 col-12 order-lg-1 order-2">
                  <div>
                    <h3 className="sub_title-1">Develop</h3>
                    <div className="sub_contents">
                      This is the stage where a great deal of programming work
                      is involved. Our committed development team will create
                      the code template, development framework, and fill out the
                      material. Our mobile application or website provides your
                      users with an engaging experience and will draw in the
                      intended audience while satisfying your needs and the
                      current trends in the market.
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-2 col-12 order-1 order-lg-2">
                  <div className="img_sec">
                    <img
                      src="./images/process-uuuyuCJpSoITW.webp"
                      className="sprite_icons"
                      style={{ objectPosition: "-773px 0px" }}
                      alt="Develop"
                      title="Develop"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="process_box">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-3 col-md-2 col-12">
                  <div className="img_sec">
                    <img
                      src="./images/process-uuuyuCJpSoITW.webp"
                      className="sprite_icons"
                      style={{ objectPosition: "-936px 0px" }}
                      alt="Testing"
                      title="Testing"
                    />
                  </div>
                </div>
                <div className="col-lg-9 col-md-5 col-12">
                  <div>
                    <h3 className="sub_title-1">Testing</h3>
                    <div className="sub_contents">
                      After development is complete, the developed website or
                      mobile application will be examined by our skilled testing
                      team to make sure there are no bugs. If a mistake is
                      discovered in the before deployment, we ensure that it is
                      successfully deleted from the website. This is carried out
                      in order to provide our clients with complete assurance
                      and to satisfy them with the most efficient and successful
                      solution.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="process_box">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-9 col-md-5 col-12 order-lg-1 order-2">
                  <div>
                    <h3 className="sub_title-1">Deployment &amp; Support</h3>
                    <div className="sub_contents">
                      We put the page live when our testing team certifies that
                      it is error-free and has no problems with either design or
                      functionality. Following deployment If the client requests
                      any additions or changes at any point during the project,
                      we handle it seamlessly. Furthermore, we expand the scope
                      of our service by offering robust technical support
                      subsequent to deployment.
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-2 col-12 order-1 order-lg-2">
                  <div className="img_sec">
                    <img
                      src="./images/process-uuuyuCJpSoITW.webp"
                      className="sprite_icons"
                      style={{ objectPosition: "-1111px 0px" }}
                      alt="Deployment & Support"
                      title="Deployment & Support"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {<SimilarFile />}
      </main>
    </>
  );
};

export default Aboutus;
