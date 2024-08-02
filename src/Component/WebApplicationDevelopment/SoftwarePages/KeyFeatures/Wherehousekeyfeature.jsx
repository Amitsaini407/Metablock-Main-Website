import React from "react";
import "./KeyFeatures.css";
const Wherehousekeyfeature = () => {
  return (
    <div style={{ marginBottom: "50px " }}>
      <div className="dashboard-main-box">
        <h4 className="Key-feature-heading mb-5" style={{ fontSize: '40px' }}>Key Feature</h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/warehouse.webp" alt="Inventory Management" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Inventory Management
              </h4>
              <p>
                Efficient inventory management is crucial for businesses to
                track stock movements and optimize warehouse operations.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/barcode-scan.webp" alt=" Barcode & RFID Integration" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Barcode & RFID Integration
              </h4>
              <p>
                Barcode scanning and RFID integration ensure accurate inventory
                tracking, reducing errors and enhancing efficiency.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/steps.webp" alt="Order Processing" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Order Processing
              </h4>
              <p>
                Streamlined order fulfillment processes, including picking,
                packing, and shipping, improve customer satisfaction and reduce
                lead times.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/optimization.webp" alt="Warehouse Layout Optimization" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Warehouse Layout Optimization
              </h4>
              <p>
                Warehouse layout optimization maximizes storage space and
                facilitates efficient movement of goods within the facility.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/productivity.webp" alt="Labor Management" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Labor Management
              </h4>
              <p>
                Effective labor management, including scheduling and task
                assignment, optimizes workforce productivity and reduces
                operational costs.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/stopwatch.webp" alt="Real-Time Visibility" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Real-Time Visibility
              </h4>
              <p>
                Real-time visibility into inventory levels and order statuses
                enables proactive decision-making and enhances operational
                efficiency.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/automation.webp" alt=" Automation Technologies" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Automation Technologies
              </h4>
              <p>
                Automation technologies such as robotics and AS/RS optimize
                warehouse operations, reducing labor dependency and enhancing
                efficiency.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/secretary.webp" alt="Multi-Channel Support" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Multi-Channel Support
              </h4>
              <p>
                Multi-channel support enables businesses to manage orders from
                various sales channels seamlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wherehousekeyfeature;
