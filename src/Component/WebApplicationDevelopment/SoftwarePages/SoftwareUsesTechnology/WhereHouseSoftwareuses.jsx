import React from "react";
import "./SoftwareUsesTechnology.css";

const WhereHouseSoftwareuses = () => {
  return (
    <div className="m-0">
      <div className="dashboard-main-box">
        <h4 className="Key-feature-heading mb-5" style={{ fontSize: '40px', textAlign: "center" }}>Software Uses Industries</h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/shopping-store.webp" alt="Retail" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Retail
              </h4>
              <p>
                In the retail sector, WMS ensures accurate inventory tracking,
                streamlined order processing, and improved customer
                satisfaction.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/manufacturing.webp" alt="Manufacturing" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Manufacturing
              </h4>
              <p>
                WMS is pivotal in the manufacturing industry for managing raw
                materials, tracking work-in-progress inventory, and optimizing
                distribution channels.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/shopping-bag.webp" alt="E-commerce" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                E-commerce
              </h4>
              <p>
                E-commerce businesses leverage WMS to manage inventory across
                multiple warehouses, process orders swiftly, and provide
                accurate shipping information.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/fast-food.webp" alt="Food and Beverage Sector" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Food and Beverage Sector
              </h4>
              <p>
                The food and beverage sector utilizes WMS to manage perishable
                inventory, ensure compliance with food safety regulations, and
                optimize inventory turnover.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/healthcare.webp" alt="Pharmaceuticals and Healthcare" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Pharmaceuticals and Healthcare
              </h4>
              <p>
                In pharmaceuticals and healthcare, WMS maintains strict
                inventory control, tracks expiration dates, and ensures
                compliance with regulatory requirements.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/3pl.webp" alt="3PL Services" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                3PL Services
              </h4>
              <p>
                Third-party logistics providers rely on WMS to manage inventory
                for multiple clients, optimize warehouse space, and provide
                accurate tracking and reporting.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/circuit-board.webp" alt="Electronics and Technology" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Electronics and Technology
              </h4>
              <p>
                Electronics and technology companies utilize WMS to manage
                complex inventory, track components, and optimize supply chain
                processes.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/shirt.webp" alt="Textiles and Apparel" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Textiles and Apparel
              </h4>
              <p>
                Textiles and apparel industries benefit from WMS in managing
                seasonal inventory fluctuations, tracking sizes and styles, and
                enhancing order accuracy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhereHouseSoftwareuses;
