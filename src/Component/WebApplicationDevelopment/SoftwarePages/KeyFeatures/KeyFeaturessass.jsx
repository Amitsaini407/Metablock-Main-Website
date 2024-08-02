import React from "react";
import "./KeyFeatures.css";
const KeyFeaturessass = () => {
  return (
    <div style={{ marginBottom: "50px " }}>
      <div className="dashboard-main-box">
        <h4 className="Key-feature-heading mb-5" style={{ fontSize: '40px' }}>Key Feature</h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/subscription.webp" alt="Subscription-Based Model" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Subscription-Based Model
              </h4>
              <p>
                SaaS software operates on a subscription basis, allowing users
                recurring access without significant upfront costs, ensuring
                affordability and predictable revenue streams.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/membership.webp" alt="Easy Subscription Model" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Easy Subscription Model
              </h4>
              <p>
                SaaS software offers subscription-based access, allowing users
                to pay regularly without large upfront costs, making it
                affordable and convenient.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/microsoft-access.webp" alt="Accessible Across Devices" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Accessible Across Devices
              </h4>
              <p>
                {" "}
                SaaS applications are accessible via web browsers and mobile
                devices, ensuring users can use them anywhere, anytime, and on
                any device.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/web-maintenance.webp" alt="Regular Updates and Maintenance" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Regular Updates and Maintenance
              </h4>
              <p>
                SaaS providers manage updates and maintenance centrally,
                ensuring users always have the latest features and security
                patches without any hassle.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/data-handling.webp" alt="Secure Data Handling" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Secure Data Handling
              </h4>
              <p>
                SaaS platforms prioritize data security, implementing measures
                like encryption and access controls to protect user information
                and ensure compliance with regulations.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/customer-service.webp" alt="Customer Service" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Customer Service
              </h4>
              <p>
                SaaS providers offer responsive customer support through various
                channels, ensuring quick resolution of user queries and issues.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/desktop.webp" alt="Multi-User Support" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Multi-User Support
              </h4>
              <p>
                SaaS applications efficiently serve multiple users through
                multi-tenancy, keeping data separate and optimizing resource
                usage.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/scalable.webp" alt="Flexible Scalability" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Flexible Scalability
              </h4>
              <p>
                SaaS platforms scale easily to accommodate growing user bases
                and data volumes, ensuring consistent performance under varying
                workloads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeaturessass;
