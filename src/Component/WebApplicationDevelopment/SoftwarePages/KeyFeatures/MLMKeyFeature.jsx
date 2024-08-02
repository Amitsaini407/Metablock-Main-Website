import React from "react";

const MLMKeyFeature = () => {
  return (
    <div style={{ marginBottom: "50px " }}>
      <div className="dashboard-main-box">
        <h4 className="Key-feature-heading mb-5" style={{ fontSize: '40px' }}>Key Feature</h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/management.webp" alt="User Management" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                User Management
              </h4>
              <p>
                MLM software efficiently handles user registrations, profiles,
                and access controls for administrators, distributors, and
                customers, ensuring smooth network operations.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/family-tree.webp" alt="Genealogy Management" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Genealogy Management
              </h4>
              <p>
                Visualization tools help users understand hierarchical
                structures, track sales performance, and identify key
                contributors within networks.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/commission.webp" alt="Commission and Compensation" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Commission and Compensation
              </h4>
              <p>
                Automated calculation and distribution streamline processes for
                accurate payouts based on predefined plans.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/payment-gateway.webp" alt="E-commerce Integration" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                E-commerce Integration
              </h4>
              <p>
                Seamless integration empowers distributors to sell products,
                manage inventory, process orders, and track shipments.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/incentive.webp" alt=" Sales and Performance Tracking" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Sales and Performance Tracking
              </h4>
              <p>
                Robust tools monitor sales, metrics, and generate comprehensive
                reports for effective strategy optimization.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/onboarding.webp" alt="Training and Support" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Training and Support
              </h4>
              <p>
                MLM software offers modules, webinars, and documentation
                complemented by comprehensive support services.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/compliant.webp" alt="Security and Compliance" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Security and Compliance
              </h4>
              <p>
                Implementing robust security measures ensures compliance with
                industry regulations and data protection.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/customize.webp" alt="Customization and Scalability" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Customization and Scalability
              </h4>
              <p>
                Customization options cater to unique needs while ensuring
                scalability for network growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MLMKeyFeature;
