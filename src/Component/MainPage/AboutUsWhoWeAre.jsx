import React from "react";
import "./AboutUsWhoWeAre.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const AboutUsWhoWeAre = () => {
  return (
    <>


      <div className="main-aboutus-div">
        <div className="container-div">
          <div className="heading-about-us">
            <h1>WHO WE ARE ?</h1>
          </div>
          <div className="about-us-p">
            <p className="contents">
              Metablock Technologies is a prominent firm specializing in web and blockchain development. With a robust background in blockchain development, DEX development, coin and token creation, DeFi products, and expertise in the Metaverse/NFT ecosystem, we also offer a wide range of enterprise blockchain applications, web and mobile applications, and software development services. <br />
              We believe Web 3.0 is essential in building a fair and progressive digital landscape, and blockchain-led systems are at the helm of it.

            </p>
            <div className="Who-we-are-buttons">
              {/* <Button className="button-who">Our Expert</Button> */}
              <Link to="/contact-us">  <div className="HddrBtns ">
                <button

                  className="btn BtnPrimry TlkBtn"
                  target="_blank"
                >
                  <span className="img-fluid lazyload ">
                    Visit Now
                  </span>
                  <span>
                    Visit Now
                  </span>
                </button>
              </div></Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsWhoWeAre;
