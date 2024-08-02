import React from "react";

const RealStateKeyFeature = () => {
  return (
    <div style={{ marginBottom: "50px " }}>
      <div className="dashboard-main-box">
        <h4 className="Key-feature-heading mb-5" style={{ fontSize: '40px' }}>Key Feature</h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/browser.webp" alt="Property Listings" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                {" "}
                Property Listings
              </h4>
              <p>
                {" "}
                Software allows agents to manage property listings efficiently,
                showcasing essential details for potential buyers or renters.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/search.webp" alt="Search and Filter" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Search and Filter
              </h4>
              <p>
                {" "}
                Search and Filter: Users can easily search and filter properties
                based on location, price, size, and other criteria, streamlining
                the property discovery process.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/technical-support.webp" alt="Analytics Tools" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                {" "}
                Analytics Tools{" "}
              </h4>
              <p>
                {" "}
                Analytics Tools: Advanced analytics provide insights into market
                trends and performance metrics, aiding agents in making
                informed decisions.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/software.webp" alt="CRM Integration" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                {" "}
                CRM Integration
              </h4>
              <p>
                CRM Integration: Integrated CRM tools help agents manage client
                information, track interactions, and schedule appointments,
                fostering better client relationships.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/clock.webp" alt="Appointment Management" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                {" "}
                Appointment Management
              </h4>
              <p>
                Appointment Management: Clients can schedule property viewings
                and appointments directly through the software, enhancing the
                booking process.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/running.webp" alt="Document Handling" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                {" "}
                Document Handling
              </h4>
              <p>
                {" "}
                Document Handling: The software simplifies document storage and
                organization, ensuring easy access to critical paperwork related
                to properties and transactions.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/time.webp" alt="Transaction Tracking" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                {" "}
                Transaction Tracking
              </h4>
              <p>
                {" "}
                Transaction Tracking: Agents can track the progress of real
                estate transactions, from offers to closing, ensuring smoother
                deal management.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/percentage.webp" alt="Commission Calculations" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                {" "}
                Commission Calculations
              </h4>
              <p>
                {" "}
                Commission Calculations: Automatic commission calculations
                simplify the process for agents and brokers, ensuring accurate
                compensation for successful deals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealStateKeyFeature;
