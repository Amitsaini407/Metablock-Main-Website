import React from "react";

const RestorantKeyFeature = () => {
  return (
    <div style={{ marginBottom: "50px " }}>
      <div className="dashboard-main-box">
        <h4 className="Key-feature-heading mb-5" style={{ fontSize: '40px' }}>Key Feature</h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/worksheet.webp" alt="Table Management" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Table Management
              </h4>
              <p>
                Table Management optimizes seating arrangements and
                reservations, ensuring efficient use of restaurant space.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/steps.webp" alt="Order Processing" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Order Processing
              </h4>
              <p>
                Order Processing streamlines the order-taking process, from
                customer requests to kitchen preparation, facilitating faster
                service.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/notes.webp" alt="Menu Customization" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Menu Customization
              </h4>
              <p>
                Menu Customization allows for easy modification of menu items,
                descriptions, and pricing to meet changing customer preferences.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/inventory-management.webp" alt="Inventory Control" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Inventory Control
              </h4>
              <p>
                Inventory Control monitors stock levels, tracks ingredient
                usage, and minimizes waste, optimizing restaurant operations.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/bill.webp" alt="Billing and Payments" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Billing and Payments
              </h4>
              <p>
                Billing and Payments streamline the payment process, offering
                flexible payment options and ensuring accurate invoicing.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/employee.webp" alt=" Staff Scheduling" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Staff Scheduling
              </h4>
              <p>
                Staff Scheduling facilitates efficient employee scheduling,
                ensuring adequate staffing levels during peak hours.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/seo-report.webp" alt="Reporting and Analytics" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Reporting and Analytics
              </h4>
              <p>
                Reporting and Analytics provide insights into sales trends,
                customer behavior, and operational performance, informing
                strategic decisions.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/skills.webp" alt="Integration Capabilities" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Integration Capabilities
              </h4>
              <p>
                Integration Capabilities enable seamless integration with
                third-party platforms such as online ordering systems and
                accounting software, enhancing overall operational efficiency
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestorantKeyFeature;
