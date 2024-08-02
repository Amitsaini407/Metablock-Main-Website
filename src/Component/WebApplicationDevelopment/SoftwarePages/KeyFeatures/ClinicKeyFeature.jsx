import React from "react";

const ClinicKeyFeature = () => {
  return (
    <div style={{ marginBottom: "50px " }}>
      <div className="dashboard-main-box">
        <h4 className="Key-feature-heading mb-5" style={{ fontSize: '40px' }}>Key Feature</h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/clock.webp" alt="Appointment Management" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Appointment Management
              </h4>
              <p>
                Efficiently organize patient appointments, minimizing wait times
                and optimizing clinic schedules for smoother operations.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/website.webp" alt="Patient Registration" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Patient Registration
              </h4>
              <p>
                Streamlined registration processes capture essential details,
                reducing administrative burden and ensuring accurate patient
                data.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/payment.webp" alt="Billing Management" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Billing Management
              </h4>
              <p>
                Simplified billing procedures streamline financial transactions,
                ensuring accuracy and efficiency in invoicing and payments.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/crisis-management.webp" alt="Prescription Handling" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                {" "}
                Prescription Handling
              </h4>
              <p>
                Digital prescription management enhances medication safety and
                adherence, facilitating accurate tracking and timely refills.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/inventory-management.webp" alt="Inventory Control" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Inventory Control
              </h4>
              <p>
                Effective inventory tracking minimizes shortages and wastage,
                ensuring optimal availability of medications and supplies.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/report.webp" alt="Reporting & Analytics" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Reporting & Analytics
              </h4>
              <p>
                Analytical tools provide insights into clinic performance,
                aiding in decision-making and process enhancement.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/consultant.webp" alt="Staff Management" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Staff Management
              </h4>
              <p>
                Efficient scheduling and management optimize workforce
                allocation, ensuring smooth clinic operations.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/collaboration.webp" alt="Diagnostic Integration" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Diagnostic Integration
              </h4>
              <p>
                Seamless integration with diagnostic labs enhances testing
                processes, enabling faster results and better patient care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicKeyFeature;
