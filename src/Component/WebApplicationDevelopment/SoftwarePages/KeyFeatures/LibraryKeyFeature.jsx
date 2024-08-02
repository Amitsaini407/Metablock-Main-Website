import React from "react";

const LibraryKeyFeature = () => {
  return (
    <div style={{ marginBottom: "50px " }}>
      <div className="dashboard-main-box">
        <h4 className="Key-feature-heading mb-5" style={{ fontSize: '40px' }}>Key Feature</h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/concept.webp" alt="Catalog Management" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Catalog Management
              </h4>
              <p>
                Catalog Management involves organizing library collections,
                including books, journals, multimedia, and digital materials.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/team.webp" alt="User Management" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                User Management
              </h4>
              <p>
                User Management maintains profiles, registrations, and borrowing
                privileges for library members.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/settings.webp" alt="Search Functionality" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Search Functionality
              </h4>
              <p>
                Search and Discovery enables users to find resources by title,
                author, subject, or keywords.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/booking.webp" alt="Reservations and Holds" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Reservations and Holds
              </h4>
              <p>
                Reservations and Holds allow users to reserve items currently
                checked out, optimizing resource management.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/solar-panel.webp" alt="Automated Renewals" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Automated Renewals
              </h4>
              <p>
                Automated Renewals streamline renewing borrowed items
                automatically, extending the borrowing period.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/banking.webp" alt="Fines Management" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Fines Management
              </h4>
              <p>
                Fines and Fees Management calculates and manages fines for
                overdue items and other fees.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/analytics.webp" alt="Reporting and Analytics" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Reporting and Analytics
              </h4>
              <p>
                Reporting and Analytics generate reports on library usage,
                circulation statistics, and popular items.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/rfid.webp" alt="RFID Integration" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                RFID Integration
              </h4>
              <p>
                Integration with RFID Technology tracks library materials and
                manages inventory efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryKeyFeature;
