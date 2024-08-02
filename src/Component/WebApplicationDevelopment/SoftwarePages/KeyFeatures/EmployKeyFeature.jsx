import React from "react";

const EmployKeyFeature = () => {
  return (
    <div style={{ marginBottom: "50px " }}>
      <div className="dashboard-main-box">
        <h4 className="Key-feature-heading mb-5" style={{ fontSize: '40px' }}>Key Feature</h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/calendar.webp" alt="Time and Attendance" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Time and Attendance
              </h4>
              <p>
                Time and Attendance Tracking systems accurately record employee
                work hours and breaks, ensuring compliance with labor
                regulations and fair compensation.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/hairdresser.webp" alt="Location Monitoring" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Location Monitoring
              </h4>
              <p>
                Location Monitoring tools utilize GPS technology to track
                employee whereabouts, especially for remote workers, enhancing
                accountability and optimizing work schedules.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/performance.webp" alt="Performance Evaluation" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Performance Evaluation
              </h4>
              <p>
                ask Management platforms assign tasks, set deadlines, and track
                progress, facilitating efficient workflow management and team
                collaboration.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/project.webp" alt="Task and Project Management" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Task and Project Management
              </h4>
              <p>
                These systems often include task and project management
                features, enabling managers to assign tasks, track project
                progress, and monitor deadlines. They promote collaboration and
                transparency within teams.
              </p>
            </div>
          </div>
        </div>
        ss
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/leave.webp" alt="Leave and Absence" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Leave and Absence{" "}
              </h4>
              <p>
                Leave and Absence Management software automates leave requests,
                approvals, and balances, ensuring adequate staffing levels and
                compliance with company policies.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/maps.webp" alt="Project Time Tracking" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Project Time Tracking
              </h4>
              <p>
                Project Time Tracking applications monitor time spent on
                specific projects or tasks, enabling accurate billing, cost
                analysis, and resource allocation.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/pc.webp" alt="Compliance Monitoring" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Compliance Monitoring
              </h4>
              <p>
                Compliance Oversight ensures adherence to labor regulations and
                company policies for legal compliance.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/folder.webp" alt="Data Security" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Data Security
              </h4>
              <p>
                Data Security protects sensitive employee information through
                encryption and access controls.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployKeyFeature;
