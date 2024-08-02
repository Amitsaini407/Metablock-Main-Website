import React from "react";

const HospitalIndustries = () => {
  return (
    <div className="m-0">
      <div className="dashboard-main-box">
        <h4 className="Key-feature-heading mb-5" style={{ fontSize: '40px', textAlign: "center" }}>Software Uses Industries</h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/registration.webp" alt="Patient Registration" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Patient Registration
              </h4>
              <p>
                Seamlessly register patients with accurate demographic details,
                ensuring efficient record-keeping and streamlined processes.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/clock.webp" alt="Appointment Management" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Appointment Management
              </h4>
              <p>
                {" "}
                Efficiently manage appointments, reducing wait times and
                optimizing resource allocation for enhanced patient
                satisfaction.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/medical-record.webp" alt="Electronic Health Records" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Electronic Health Records
              </h4>
              <p>
                Digitally store and manage patient health records, ensuring
                accessibility, accuracy, and confidentiality in healthcare
                delivery.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/medical-history.webp" alt="Billing and Invoicing" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Billing and Invoicing
              </h4>
              <p>
                Streamline billing processes, generate accurate invoices, and
                manage financial transactions effectively for improved revenue
                cycle management.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/prescription.webp" alt="Prescription Management" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Prescription Management
              </h4>
              <p>
                Digitize prescription processes, enabling accurate medication
                management, refill tracking, and enhanced patient safety.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/inventory-management (1).webp" alt="Inventory Control" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Inventory Control
              </h4>
              <p>
                Monitor and manage inventory levels, ensuring adequate stock of
                medications and supplies, minimizing wastage, and avoiding
                stockouts.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/monitor.webp" alt="Reporting and Analytics" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Reporting and Analytics
              </h4>
              <p>
                Generate comprehensive reports and analyze data to gain insights
                into clinic performance, patient trends, and operational
                efficiency.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/diagnostic.webp" alt=" Diagnostic Integration" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Diagnostic Integration
              </h4>
              <p>
                Seamlessly integrate with diagnostic facilities for streamlined
                test ordering, results management, and treatment planning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalIndustries;
