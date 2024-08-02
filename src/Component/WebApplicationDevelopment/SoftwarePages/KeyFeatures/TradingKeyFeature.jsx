import React from "react";

const TradingKeyFeature = () => {
  return (
    <div style={{ marginBottom: "50px " }}>
      <div className="dashboard-main-box">
        <h4 className="Key-feature-heading mb-5" style={{ fontSize: '40px' }}>Key Feature</h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/interface.webp" alt="Interface" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                {" "}
                Interface
              </h4>
              <p>
                {" "}
                Intuitive design for effortless navigation and quick trade
                execution.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/market-analysis.webp" alt="Market Data" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Market Data
              </h4>
              <p>
                Live updates on prices, orders, and volumes for informed
                decisions.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/choices.webp" alt="Order Options" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Order Options
              </h4>
              <p>
                Various types catering to different trading strategies and risk
                levels.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/chart.webp" alt="Chart Tools" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                {" "}
                Chart Tools
              </h4>
              <p>
                Advanced technical analysis features for thorough market study.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/newspaper.webp" alt="News Integration" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                News Integration
              </h4>
              <p>
                Real-time feeds and analysis to stay abreast of market
                developments.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/risks.webp" alt="Risk Management" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Risk Management
              </h4>
              <p>
                Tools for setting stop-loss, managing positions, and controlling
                risk.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/diversify.webp" alt="Asset Variety" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Asset Variety
              </h4>
              <p>
                Diverse range of tradable assets for portfolio diversification.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/mobile.webp" alt="Mobile Access" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                {" "}
                Mobile Access
              </h4>
              <p>
                Trading flexibility with mobile app or responsive web interface.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingKeyFeature;
