import React from "react";

const AstrologyKeyFeature = () => {
  return (
    <div style={{ marginBottom: "50px " }}>
      <div className="dashboard-main-box">
        <h4 className="Key-feature-heading mb-5" style={{ fontSize: '40px' }}>Key Feature</h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/growth.webp" alt="Chart Generation" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Chart Generation
              </h4>
              <p>
                Chart Generation feature enables users to generate accurate
                birth charts, horoscopes, and astrological diagrams based on
                specific birth details.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/planetary-system-data.webp" alt="Planetary Positions" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Planetary Positions
              </h4>
              <p>
                Planetary Positions module displays current and historical
                positions of planets, stars, and celestial bodies, aiding in
                astrological analysis and interpretation.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/astrolgyremot.webp" alt="Remote Access" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Remote Access
              </h4>
              <p>
                You can control your business from anywhere in the world with an
                internet connection. To get remote access you can use our
                android app or you can directly access your sales ERP software
                from a browser.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/astrolgyansylig.webp" alt="Aspect Analysis" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                {" "}
                Aspect Analysis
              </h4>
              <p>
                Aspect Analysis tool helps users interpret planetary aspects and
                alignments, providing insights into their influence on an
                individual's life.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/process.webp" alt="Transit Forecasting" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Transit Forecasting
              </h4>
              <p>
                Transit Forecasting feature forecasts planetary transits and
                their impact on a person's natal chart, offering insights into
                upcoming astrological influences.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/unauthorized.webp" alt="Compatibility Analysis" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Compatibility Analysis
              </h4>
              <p>
                Compatibility Analysis tool evaluates astrological compatibility
                between individuals through synastry and composite charts,
                aiding in understanding relationship dynamics.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/astrolgyreport.webp" alt="Astrological Reports" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Astrological Reports
              </h4>
              <p>
                Astrological Reports feature generates detailed reports,
                including natal interpretations, transit forecasts, and
                compatibility analyses, for deeper insights into astrological
                influences.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/web.webp" alt="Customization Options" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Customization Options
              </h4>
              <p>
                Customization Options allow users to tailor astrological charts,
                reports, and interpretations based on personal preferences and
                astrological traditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstrologyKeyFeature;
