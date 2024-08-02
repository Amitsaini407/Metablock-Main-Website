import React from "react";

const EventIndustries = () => {
  return (
    <div className="m-0">
      <div className="dashboard-main-box">
        <h4 className="Key-feature-heading mb-5" style={{ fontSize: '40px', textAlign: "center" }}>Software Uses Industries</h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/event.webp" alt="Corporate Events" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Corporate Events
              </h4>
              <p>
                {" "}
                Corporations rely on event management software to efficiently
                organize conferences, seminars, product launches, and meetings.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/show.webp" alt="Trade Shows" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Trade Shows
              </h4>
              <p>
                {" "}
                Event management software streamlines booth assignments,
                exhibitor registrations, floor plans, and attendee registrations
                for trade shows.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/couple.webp" alt="Weddings" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Weddings
              </h4>
              <p>
                {" "}
                Planners utilize software for venue selection, guest lists,
                vendor coordination, and budget tracking in wedding planning.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/scholarship.webp" alt="Education" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Education
              </h4>
              <p>
                {" "}
                Schools and universities organize academic conferences, alumni
                gatherings, workshops, and student events with event management
                software.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/non.webp" alt="Non-Profits" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Non-Profits
              </h4>
              <p>
                {" "}
                Non-profit organizations utilize software for fundraising
                events, charity auctions, galas, and awareness campaigns.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/town.webp" alt="Government Events" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Government Events
              </h4>
              <p>
                {" "}
                Governments efficiently organize public events, conferences,
                summits, and town hall meetings using event management software.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/trophy.webp" alt="Sports Events" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Sports Events
              </h4>
              <p>
                {" "}
                Organizers manage sports tournaments, championships, and
                marathons, including participant registrations and scheduling.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/concert.webp" alt="Concerts" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Concerts
              </h4>
              <p>
                {" "}
                Event management software assists in managing ticket sales,
                artist bookings, stage schedules, and logistics for concerts and
                music festivals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventIndustries;
