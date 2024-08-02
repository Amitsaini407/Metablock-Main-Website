import React from "react";

const TravelIndustries = () => {
  return (
    <div className="m-0">
      <div className="dashboard-main-box">
        <h4 className="Key-feature-heading mb-5" style={{ fontSize: '40px', textAlign: "center" }}>Software Uses Industries</h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/user.webp" alt="" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Individual Travelers
              </h4>
              <p>
                Individuals utilize travel booking software to plan and book
                vacations, business trips, and travel arrangements conveniently
                from their devices.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/travel.webp" alt="" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Travel Agencies
              </h4>
              <p>
                {" "}
                Agencies manage bookings, search available options, and
                coordinate travel itineraries for their clients using travel
                booking software.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/corporate.webp" alt="" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Corporate Travel Departments
              </h4>
              <p>
                Companies streamline corporate travel arrangements, including
                flights, hotels, and car rentals, for employees through travel
                booking software.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/onlinetravels.webp" alt="" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Online Travel Agenciest
              </h4>
              <p>
                OTAs offer a wide range of travel services, including flights,
                hotels, vacation packages, and activities, through travel
                booking software.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/travelsair.webp" alt="" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Airlines
              </h4>
              <p>
                Airlines manage flight bookings, seat assignments, and ancillary
                services for passengers through travel booking software.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/traveltore.webp" alt="" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Tour Operators
              </h4>
              <p>
                Operators create and manage tour packages, schedule activities,
                and handle bookings for guided tours and excursions using
                software.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/travelboat.webp" alt="" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Cruise Lines
              </h4>
              <p>
                {" "}
                Cruise lines manage cabin reservations, onboard activities, and
                shore excursions for passengers through travel booking software.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/calendar.webp" alt="" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Event Planners
              </h4>
              <p>
                Planners coordinate travel arrangements for attendees, speakers,
                and staff attending conferences, conventions, and events using
                travel booking software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelIndustries;
