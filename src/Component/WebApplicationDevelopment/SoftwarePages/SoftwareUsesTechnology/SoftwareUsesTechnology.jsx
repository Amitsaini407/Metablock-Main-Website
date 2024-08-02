import React from "react";
import "./SoftwareUsesTechnology.css";

const SoftwareUsesTechnology = () => {
  return (
    <div className="m-0">
      <div className="dashboard-main-box">
        <h4
          className="Key-feature-heading mb-5"
          style={{ fontSize: "40px", textAlign: "center" }}
        >
          Software Uses Industries
        </h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/factory.webp" alt="Manufacturing" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Manufacturing
              </h4>
              <p>
                ERP systems help manage production planning, scheduling,
                inventory management and supply chain operations.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/supermarket.webp" alt="Retail" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Retail
              </h4>
              <p>
                Retailers use ERP software to manage inventory, sales, customer
                relationship management (CRM) and (POS) systems.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/healthcare.webp" alt="Healthcare" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Healthcare
              </h4>
              <p>
                Software systems are used in hospitals and healthcare
                organizations to manage patient records and billing regulatory
                compliance.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/bank.webp" alt="Finance" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Finance
              </h4>
              <p>
                QuickBooks and Xero dominate financial services, offering
                comprehensive accounting solutions that simplify bookkeeping and
                financial management for businesses.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/school.webp" alt="Education" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Education
              </h4>
              <p>
                Moodle and Blackboard are extensively utilized in educational
                institutions for online course delivery and streamlining
                learning processes .
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/user.webp" alt="Human Resources" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Human Resources
              </h4>
              <p>
                ADP and BambooHR are widely adopted in Human Resources
                management and employee performance tracking.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/architect.webp" alt="Project Management" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Project Management
              </h4>
              <p>
                Trello and Asana are popular project management tools,
                facilitating task tracking and project progress monitoring and
                project efficiency.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/graphic-designer.webp" alt="Graphic Design" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Graphic Design
              </h4>
              <p>
                Adobe Creative Cloud and Canva are widely used in graphic design
                and multimedia editing , illustrations and multimedia projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareUsesTechnology;
