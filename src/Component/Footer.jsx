import React from "react";

import "./Footer.css";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

const Footer = () => {
  const handleLocationClick = () => {
    // Redirect to Google Maps location
    window.open("https://maps.app.goo.gl/DtA7yg3N7yNKuXgE7", "_blank");
  };
  // const navigate = useNavigate()

  return (
    <div className="footer-main-div">
      <div className="container-md-12">
        <footer
          className=" text-lg-start "
          style={{ backgroundColor: "#1c2331", textAlign: "center" }}
        >
          <section style={{ background: "#181818" }}>
            <div className="container  text-md-start mt-5">
              <div className="row mt-3 d-flex align-center">
                {/* <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 foot_logo">
                  <img width={'300px'} className="Company-logo" src="/NewImages/logo2.png" alt="" />
                  <div className="payment-scanner">
                    <img className="footer-in-payment-method" src="./images/footer-in-payment-method.jpg" alt="" />
                  </div>
                </div> */}

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto footer_logo">
                  <div className="Company-logo">
                    <img
                      style={{ marginBottom: "50px" }}
                      width={"400px"}
                      className="Company-logo"
                      src="../images/metablock-logos-main.webp"
                      alt="metablocktechnologies logo"
                    />
                  </div>
                  <div className="payment-method">
                    <div class="image-container">
                      <img
                        className="footer-in-payment-method"
                        src="./images/new-metablock-scanner.webp"
                        alt="Metablock scanner | metablocktechnologies"
                      />
                      <div class="overlay-text">Scan Me</div>
                      <p style={{ fontSize: "15px", textAlign: "center" }}>
                        Save Contact Details
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Products</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                  />
                  <p>
                    <Link to="/WebsiteDevelopment">
                      <span className=" footer-in-Pages">WEBSITE</span>
                    </Link>
                  </p>

                  <p>
                    <Link to="/SoftwareDevelopment">
                      <span className=" footer-in-Pages">SOFTWARE</span>
                    </Link>
                  </p>

                  <p className="footer-contact-number">
                    <Link to="/blockchaindevelopment">
                      <span className=" footer-in-Pages">BLOCKCHAIN</span>
                    </Link>
                  </p>

                  <p className="footer-contact-number">
                    <Link to="/ApplicationDevelopment">
                      <span className="footer-in-Pages">APPLICATION</span>
                    </Link>
                  </p>
                  <p className="footer-contact-number">
                    <Link to="/MetaverseDevelopment">
                      <span className="footer-in-Pages">METAVERSE</span>
                    </Link>
                  </p>

                  <p className="footer-contact-number">
                    <Link to="/GameDevelopment">
                      <span className="footer-in-Pages">GAME</span>
                    </Link>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                  />

                  <p className="footer-contact-number">
                    <Link to="/contact-us">
                      <span className="footer-in-Pages">CONTACT US</span>
                    </Link>
                  </p>

                  <p className="footer-contact-number">
                    <Link to="/Aboutus">
                      <span className="footer-in-Pages">ABOUT US</span>
                    </Link>
                  </p>

                  <p className="footer-contact-number">
                    <Link to="/sitemap">
                      <span className="footer-in-Pages">SITEMAP</span>
                    </Link>
                  </p>

                  <p className="footer-contact-number">
                    <Link to="/gallery">
                      <span className="footer-in-Pages">GALLERY</span>
                    </Link>
                  </p>

                  <p className="footer-contact-number">
                    <Link to="/InsightsFAQ">
                      <span className="footer-in-Pages">FAQ</span>
                    </Link>
                  </p>

                  <p className="footer-contact-number">
                    <Link to="/PrivacyPolicy">
                      <span className="footer-in-Pages">PRIVACY POLICY</span>
                    </Link>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                  />
                  <p>
                    <i className="fas fa-home mr-3" />
                    30-A, Gopalpura Bypass Rd, opp. Holiday Inn Hotel, opp.
                    Holiday Inn, Sultan Nagar, Santi Nagar, Gurjar Ki Thadi,
                    Jaipur, Rajasthan 302020{" "}
                    <FaLocationArrow
                      onClick={handleLocationClick}
                      style={{
                        background: "red",
                        cursor: "pointer",
                        borderRadius: "2px",
                      }}
                    />
                  </p>
                  <a
                    href="mailto:info@metablocktechnologies.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="footer-contact-number">
                      <i className="fas fa-envelope mr-3" />
                      info@metablocktechnologies.in
                    </p>
                  </a>
                  <a
                    href="tel:+91-93585 93003 "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="footer-contact-number">
                      <i className="fas fa-phone mr-3" />
                      +91 935 859 3003
                    </p>
                  </a>
                  <a
                    href="tel:+91-93585 93002"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="footer-contact-number">
                      <i className="fas fa-phone mr-3" />
                      +91 935 859 3002
                    </p>
                  </a>
                  <a>
                    <a
                      href="https://www.facebook.com/metablocktechnologies"
                      className=" me-4"
                    >
                      <img
                        style={{ width: "20px" }}
                        src="./images/facebook2.webp"
                        alt="Facebook logo  | metablocktechnologies"
                      />
                    </a>
                    {/* <a
                      href="https://twitter.com/metablocktech"
                      className=" me-4"
                    >
                      <img style={{ width: "20px" }} src="./images/twitter2.webp" alt="Twitter logo | metablocktechnologies" />
                    </a> */}
                    {/* <a href = "mailto:info@example.com" className=" me-4">
                <i className="fab fa-google" />
              </a> */}
                    <a
                      href="https://www.instagram.com/metablocktechnologies1?igsh=Zmxva3Fnd3o1NzBw"
                      className=" me-4"
                    >
                      <img
                        style={{ width: "20px" }}
                        src="./images/instagram2.png"
                        alt=""
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/metablocktechnologies"
                      target="blank"
                    >
                      <span href className=" me-4">
                        <img
                          style={{ width: "20px" }}
                          src="./images/linkedin2.webp"
                          alt="Linkedin logo | metablocktechnologies"
                        />
                      </span>
                    </a>
                    <a href="https://wa.me/919358593003" target="blank">
                      <span href className=" me-4">
                        <img
                          style={{ width: "20px" }}
                          src="./images/whatsapp3.png"
                          alt=""
                        />
                      </span>
                    </a>
                    <a href="" target="blank">
                      <span href className=" me-4">
                        <img
                          style={{ width: "20px" }}
                          src="./images/skype-button.webp"
                          alt="Skype logo | metablocktechnologies"
                        />
                      </span>
                    </a>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
