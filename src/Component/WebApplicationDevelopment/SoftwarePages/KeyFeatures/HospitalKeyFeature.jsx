import React from "react";

const HospitalKeyFeature = () => {
  return (
    <div style={{ marginBottom: "50px " }}>
      <div className="dashboard-main-box">
        <h4 className="Key-feature-heading mb-5" style={{ fontSize: '40px' }}>Key Feature</h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/website.webp" alt="Patient Registration" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Patient Registration
              </h4>
              <p>
                {" "}
                Hospitals streamline patient registration processes, capturing
                essential demographic details for accurate record-keeping.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/appointment.webp" alt="Appointment Scheduling" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Appointment Scheduling
              </h4>
              <p>
                Efficient systems manage appointments, optimizing hospital
                resources and patient flow.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/medical-prescription.webp" alt="Electronic Health Records" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Electronic Health Records
              </h4>
              <p>
                Hospitals maintain digital health records, ensuring secure and
                accessible patient information.
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
                {" "}
                Integrated systems streamline billing processes and manage
                financial transactions for efficient revenue management.
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
                Hospitals track and manage inventory to ensure timely
                availability of medical supplies and prevent shortages.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/management.webp" alt="Staff Management" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Staff Management
              </h4>
              <p>
                Systems maintain records and schedules for doctors, nurses, and
                staff, ensuring adequate staffing levels.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/online-pharmacy.webp" alt="Pharmacy Management" />
              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Pharmacy Management
              </h4>
              <p>
                {" "}
                Hospitals efficiently manage pharmacy operations, including
                prescription dispensing and inventory tracking.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/medical-prescription (1).webp" alt="Electronic Prescriptions" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Electronic Prescriptions
              </h4>
              <p>
                Systems enable the electronic transmission of prescriptions,
                improving medication management and safety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalKeyFeature;
