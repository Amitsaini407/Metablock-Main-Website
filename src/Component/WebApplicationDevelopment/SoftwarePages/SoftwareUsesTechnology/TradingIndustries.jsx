import React from "react";

const TradingIndustries = () => {
  return (
    <div className="m-0">
      <div className="dashboard-main-box">
        <h4 className="Key-feature-heading mb-5" style={{ fontSize: '40px', textAlign: "center" }}>Software Uses Industries</h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/earning.webp" alt="" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Finance and Investment
              </h4>
              <p>
                Trading is extensively used in the finance and investment
                industry, including stock markets, forex (foreign exchange),
                bonds, and derivatives markets.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/supermarket.webp" alt="Retail" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Retail{" "}
              </h4>
              <p>
                Retailers engage in trading goods and merchandise, whether
                through physical stores, e-commerce platforms, or wholesale
                trading.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/factory.webp" alt="Manufacturing" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Manufacturing
              </h4>
              <p>
                {" "}
                Manufacturers engage in trading raw materials, components, and
                finished goods with suppliers, distributors, and other
                businesses within the supply chain.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/renewable-energy.webp" alt="Energy" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Energy
              </h4>
              <p>
                Trading is prevalent in the energy sector, encompassing
                commodities such as oil, natural gas, and electricity, where
                companies buy and sell energy products to meet demand and manage
                risk.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/technology.webp" alt="Technology" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Technology
              </h4>
              <p>
                Technology companies often engage in trading intellectual
                property, software licenses, and hardware components with other
                businesses, both domestically and internationally.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/planting.webp" alt="Agriculture" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Agriculture
              </h4>
              <p>
                Agricultural trading involves the buying and selling of crops,
                livestock, and agricultural commodities such as grains, cotton,
                and coffee.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/house.webp" alt="Real Estate" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Real Estate
              </h4>
              <p>
                Real estate trading involves buying, selling, and leasing
                properties, including residential, commercial, and industrial
                real estate assets.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/healthcare.webp" alt="Healthcare" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Healthcare
              </h4>
              <p>
                Healthcare organizations engage in trading pharmaceuticals,
                medical devices, and healthcare services, both domestically and
                internationally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingIndustries;
