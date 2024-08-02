import React from "react";

const InventoryIndustries = () => {
  return (
    <div className="m-0">
      <div className="dashboard-main-box">
        <h4 className="Key-feature-heading mb-5" style={{ fontSize: '40px' }}>Key Feature</h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/supermarket.webp" alt="Retail Industry" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Retail Industry
              </h4>
              <p>
                In the retail industry, Inventory Management Software (IMS)
                tracks stock levels, analyzes sales data, and optimizes
                inventory replenishment for efficient operations.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/production.webp" alt="Manufacturing Sector" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Manufacturing Sector{" "}
              </h4>
              <p>
                Manufacturers use IMS to monitor raw materials, track
                work-in-progress inventory, and manage finished goods, ensuring
                smooth production processes.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/wholesale.webp" alt="Wholesale and Distribution" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Wholesale and Distribution
              </h4>
              <p>
                Wholesale and distribution businesses rely on IMS to manage
                inventory across warehouses, streamline order fulfillment, and
                optimize supply chain operations.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/ecommerce.webp" alt="E-commerce Business" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                E-commerce Business
              </h4>
              <p>
                Gain insights into financial health and make informed decisions
                with Inditres' robust financial management solutions, including
                expense tracking and reporting features.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/marketing-automation.webp" alt="E-commerce Business" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                E-commerce Business
              </h4>
              <p>
                E-commerce companies leverage IMS to maintain accurate product
                listings, track inventory in real-time, and automate order
                processing for seamless customer experiences.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/material-management.webp" alt="Healthcare Facilities" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Healthcare Facilities
              </h4>
              <p>
                Healthcare facilities utilize IMS to manage medical supplies,
                track pharmaceutical inventory, and ensure timely availability
                of essential items for patient care.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/revenue.webp" alt="" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Hospitality Sector
              </h4>
              <p>
                Hospitality businesses use IMS to manage food and beverage
                inventory, track usage patterns, and optimize purchasing to
                control costs and minimize waste.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/compliance-document.webp" alt=" Automotive Industry" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Automotive Industry
              </h4>
              <p>
                Automotive dealerships and service centers employ IMS to manage
                spare parts inventory, track components, and optimize supply
                chain operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryIndustries;
