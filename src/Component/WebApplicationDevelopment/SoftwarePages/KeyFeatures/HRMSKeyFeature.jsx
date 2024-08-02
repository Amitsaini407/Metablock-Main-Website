import React from "react";
import "./KeyFeatures.css";
const HRMSkeyFeature = () => {
  return (
    <div style={{ marginBottom: "50px " }}>
      <div className="dashboard-main-box">
        <h4 className="Key-feature-heading mb-5" style={{ fontSize: '40px' }}>Key Feature</h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/info.webp" alt="Employee Information" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Employee Information
              </h4>
              <p>
                Employee Information Management centralizes employee data,
                facilitating easy access to personal details and employment
                history.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/attendance.webp" alt="Attendance Tracking" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Attendance Tracking
              </h4>
              <p>
                Attendance Tracking automates attendance records, ensuring
                accurate payroll processing and compliance with labor
                regulations.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/stress-management.webp" alt="Leave Management" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Leave Management
              </h4>
              <p>
                Leave Management streamlines leave requests, approvals, and
                balance tracking for efficient absence management.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/quality-control.webp" alt="Performance Monitoring" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Performance Monitoring
              </h4>
              <p>
                Performance Management supports goal setting, evaluations, and
                feedback to enhance employee development and organizational
                performance.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/recruiter.webp" alt="Recruitment & Tracking" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Recruitment & Tracking
              </h4>
              <p>
                Recruitment and Applicant Tracking simplifies candidate
                sourcing, resume screening, and interview scheduling.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/analysis.webp" alt="Training & Development" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Training & Development
              </h4>
              <p>
                Training and Development tracks employee training needs and
                participation, fostering continuous learning and skill
                development.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/self-service.webp" alt="Self-Service Portal" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Self-Service Portal
              </h4>
              <p>
                Employee Self-Service Portal empowers employees to update
                information, submit leave requests, and access pay stubs
                conveniently.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/business-plan.webp" alt="Compliance Management" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Compliance Management
              </h4>
              <p>
                Compliance Management ensures adherence to labor laws and
                company policies through automated compliance checks and
                documentation management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRMSkeyFeature;
