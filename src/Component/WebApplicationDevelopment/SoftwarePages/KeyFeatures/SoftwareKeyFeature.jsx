import React from "react";
import "./KeyFeatures.css";
const SoftwareKeyFeature = () => {
  return (
    <div style={{ marginBottom: "50px " }}>
      <div className="dashboard-main-box">
        <h4 className="Key-feature-heading mb-5" style={{ fontSize: "40px" }}>
          Key Feature
        </h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes key-feature-box">
            <div className="key-feature-heading">
              <img src="./images/user-interface.webp" alt="User Interface(UI)" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                User Interface(UI)
              </h4>
              <p>
                Intuitive and user-friendly interface for seamless navigation
                and efficient interaction with the software.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes key-feature-box">
            <div className="key-feature-heading">
              <img src="./images/system-update.webp" alt="Real-Time Updates" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Real-Time Updates{" "}
              </h4>
              <p>
                Continuous updates and notifications keep users informed about
                changes and developments instantly.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes key-feature-box">
            <div className="key-feature-heading">
              <img src="./images/customization.webp" alt="Customization Options" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Customization Options{" "}
              </h4>
              <p>
                Flexible settings and customization allow users to tailor the
                software to their specific needs and preferences.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes key-feature-box">
            <div className="key-feature-heading">
              <img src="./images/encrypted.webp" alt="Data Security" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Data Security{" "}
              </h4>
              <p>
                Robust security measures ensure the protection of sensitive data
                and user privacy.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes key-feature-box">
            <div className="key-feature-heading">
              <img src="./images/scalability.webp" alt="Scalability" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Scalability{" "}
              </h4>
              <p>
                Ability to scale and accommodate growing needs and user demands
                effectively.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes key-feature-box">
            <div className="key-feature-heading">
              <img src="./images/automation.webp" alt="Automation Features" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Automation Features{" "}
              </h4>
              <p>
                Automated processes and workflows streamline tasks and improve
                efficiency.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes key-feature-box">
            <div className="key-feature-heading">
              <img src="./images/Business-tool.webp" alt="Collaboration Tools" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Collaboration Tools{" "}
              </h4>
              <p>
                Built-in collaboration tools facilitate communication and
                teamwork among users.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes key-feature-box">
            <div className="key-feature-heading">
              <img src="./images/monitor.webp" alt="Analytics and Reporting" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Analytics and Reporting{" "}
              </h4>
              <p>
                Advanced analytics and reporting features provide insights for
                data-driven decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareKeyFeature;
