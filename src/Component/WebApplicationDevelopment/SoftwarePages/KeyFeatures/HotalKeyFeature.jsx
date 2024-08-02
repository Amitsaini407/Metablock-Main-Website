import React from "react";

const HotalKeyFeature = () => {
  return (
    <div style={{ marginBottom: "50px " }}>
      <div className="dashboard-main-box">
        <h4 className="Key-feature-heading mb-5" style={{ fontSize: '40px' }}>Key Feature</h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/time-management.webp" alt="Reservation Management" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Reservation Management
              </h4>
              <p>
                Allows hotel staff to efficiently manage room reservations,
                including booking, modification, and cancellation processes.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/help-desk.webp" alt="Front Desk Operationsn" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Front Desk Operationsn
              </h4>
              <p>
                Streamlines front desk tasks such as check-in, check-out, room
                assignment, and guest inquiries, ensuring smooth operations and
                guest satisfaction.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/material-management.webp" alt="Room Inventory Management" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Room Inventory Management
              </h4>
              <p>
                Provides real-time tracking of room availability, allowing staff
                to optimize occupancy rates and prevent overbooking..
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/invoice.webp" alt="Billing and Invoicing" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Billing and Invoicing
              </h4>
              <p>
                Generates invoices, processes payments, and tracks guest
                expenses, integrating with payment gateways for secure
                transactions.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/management.webp" alt="Housekeeping Managemente" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Housekeeping Managemente
              </h4>
              <p>
                Coordinates housekeeping schedules, tracks room cleaning status,
                and manages maintenance requests to maintain cleanliness and
                guest comfort.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/guests.webp" alt="Guest Profiles" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Guest Profiles
              </h4>
              <p>
                Stores guest information, preferences, and booking history for
                personalized service and targeted marketing campaigns.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/point-of-sale.webp" alt="Point of Sale" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Point of Sale{" "}
              </h4>
              <p>
                Integrates with POS systems for seamless management of
                restaurant, bar, and other on-site amenities, facilitating guest
                billing and inventory tracking.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/cyber-security.webp" alt="Security" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Security
              </h4>
              <p>
                Implements security features such as user authentication,
                role-based access control, and data encryption to safeguard
                guest information and sensitive data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotalKeyFeature;
