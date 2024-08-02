import React from "react";

const EventKeyFeature = () => {
  return (
    <div style={{ marginBottom: "50px " }}>
      <div className="dashboard-main-box">
        <h4 className="Key-feature-heading mb-5" style={{ fontSize: '40px' }}>Key Feature</h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/website.webp" alt="Registration" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Registration
              </h4>
              <p>
                Registration streamlines attendee sign-ups, managing ticketing
                options and essential details efficiently.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/venue.webp" alt="Venue Management" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Venue Management
              </h4>
              <p>
                Venue Management simplifies booking and coordination, ensuring
                suitable seating arrangements and room setups.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/agenda.webp" alt="Agenda Planning" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Agenda Planning
              </h4>
              <p>
                Agenda Planning empowers organizers to craft detailed schedules,
                featuring speakers and session topics.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/management.webp" alt="Attendee Management" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                {" "}
                Attendee Management
              </h4>
              <p>
                Attendee Management tracks attendee information, managing
                registrations and facilitating communications seamlessly.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/bill.webp" alt="Ticketing and Payments" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Ticketing and Payments
              </h4>
              <p>
                Ticketing and Payments ensure secure processing, offering
                various payment options and discounts.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/certified.webp" alt="Check-In and Badges" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Check-In and Badges
              </h4>
              <p>
                Check-In and Badges streamline event entry with digital tools
                and on-site badge printing.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/technical-support.webp" alt="Networking Tools" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Networking Tools
              </h4>
              <p>
                Networking Tools facilitate connections through directories,
                matchmaking, and messaging platforms.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/exhibitor.webp" alt="Exhibitor Management" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Exhibitor Management
              </h4>
              <p>
                Exhibitor Management oversees booth assignments, sponsorships,
                and communications, ensuring smooth collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventKeyFeature;
