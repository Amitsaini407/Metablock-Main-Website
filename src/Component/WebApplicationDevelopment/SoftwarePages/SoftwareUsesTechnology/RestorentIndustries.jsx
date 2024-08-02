import React from "react";

const RestorentIndustries = () => {
  return (
    <div className="m-0">
      <div className="dashboard-main-box">
        <h4 className="Key-feature-heading mb-5" style={{ fontSize: '40px', textAlign: "center" }}>Software Uses Industries</h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/reserve.webp" alt="Reservation Management" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Reservation Management
              </h4>
              <p>
                Reservation Management efficiently handles room bookings,
                modifications, and cancellations, ensuring optimal occupancy
                rates.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/check-in.webp" alt="Check-In and Check-Out" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Check-In and Check-Out
              </h4>
              <p>
                Check-In and Check-Out processes streamline guest arrivals and
                departures, providing a seamless experience.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/housekeeper.webp" alt="Housekeeping Services" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Housekeeping Services
              </h4>
              <p>
                Housekeeping Services maintain cleanliness and standards,
                ensuring a comfortable environment for guests.
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
                Billing and Invoicing systems accurately generate invoices and
                process payments, facilitating transparent transactions.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/diet.webp" alt="Restaurant Management" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Restaurant Management
              </h4>
              <p>
                Restaurant Management oversees dining reservations, menu
                customization, and inventory control for guest satisfaction.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/towel.webp" alt="Spa Facilities Integration" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Spa Facilities Integration
              </h4>
              <p>
                Spa Facilities Integration allows seamless scheduling of
                treatments and relaxation services.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/booking.webp" alt="Event Venue Booking" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Event Venue Booking
              </h4>
              <p>
                Event Venue Booking manages reservations, setup arrangements,
                and catering services for successful events.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/golf.webp" alt="Golf Course Services" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Golf Course Services
              </h4>
              <p>
                Golf Course Services handle tee time reservations and facility
                maintenance for recreational needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestorentIndustries;
