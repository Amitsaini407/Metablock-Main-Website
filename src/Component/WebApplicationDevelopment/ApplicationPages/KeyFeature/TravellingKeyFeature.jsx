import React from 'react'

const TravellingKeyFeature = () => {
    return (
        <div style={{ marginBottom: "50px " }}>
            <div className="dashboard-main-box">
                <h4 className="Key-feature-heading mb-5" style={{ fontSize: '40px' }}>Key Feature</h4>
                <div className="dashboard-container">
                    <div className="dashboard-container-box dashboard-boxes">
                        <div className="key-feature-heading">
                            <img
                                src="./images/booking.webp"
                                alt="Flight Booking"
                            />

                            <h4 className="software-feature-headings" >Flight Booking</h4>
                            <p>
                                Enables users to search for, compare, and book flights to their desired destinations, with options for one-way, round-trip, and multi-city itineraries.
                            </p>
                        </div>
                    </div>

                    <div className="dashboard-container-box dashboard-boxes">
                        <div className="key-feature-heading">
                            <img
                                src="./images/booking.webp"
                                alt="Hotel Reservation"
                            />

                            <h4 className="software-feature-headings" >Hotel Reservation</h4>
                            <p>
                                Allows users to find and book accommodations, including hotels, resorts, hostels, and vacation rentals, with filters for price, location, amenities, and guest ratings.
                            </p>
                        </div>
                    </div>
                    <div className="dashboard-container-box dashboard-boxes">
                        <div className="key-feature-heading">
                            <img
                                src="./images/car-rent.webp"
                                alt="Car Rental"
                            />

                            <h4 className="software-feature-headings" >Car Rental</h4>
                            <p>
                                Provides options for renting cars, vans, and other vehicles at the user's destination, with features for comparing rates, vehicle types, and rental companies.
                            </p>
                        </div>
                    </div>

                    <div className="dashboard-container-box dashboard-boxes">
                        <div className="key-feature-heading">
                            <img
                                src="./images/map.webp"
                                alt="Maps and Navigation"
                            />

                            <h4 className="software-feature-headings" >Maps and Navigation</h4>
                            <p>
                                Offers interactive maps and navigation features to help users find their way around unfamiliar cities, with options for real-time traffic updates, public transportation routes, and walking directions.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="dashboard-container">
                    <div className="dashboard-container-box dashboard-boxes">
                        <div className="key-feature-heading">
                            <img
                                src="./images/warning.webp"
                                alt="Travel Alerts"
                            />

                            <h4 className="software-feature-headings" >Travel Alerts</h4>
                            <p>
                                Sends real-time travel alerts and notifications about flight delays, gate changes, cancellations, and other disruptions, helping users stay informed and make necessary adjustments to their plans.
                            </p>
                        </div>
                    </div>

                    <div className="dashboard-container-box dashboard-boxes">
                        <div className="key-feature-heading">
                            <img
                                src="./images/travel-insurance.webp"
                                alt="Travel Insurance"
                            />

                            <h4 className="software-feature-headings" >Travel Insurance</h4>
                            <p>
                                Offers options for purchasing travel insurance coverage, including medical emergencies, trip cancellations, lost baggage, and other unforeseen events that may impact travel plans.
                            </p>
                        </div>
                    </div>
                    <div className="dashboard-container-box dashboard-boxes">
                        <div className="key-feature-heading">
                            <img
                                src="./images/management.webp"
                                alt="Booking Management"
                            />

                            <h4 className="software-feature-headings" >Booking Management</h4>
                            <p>
                                Allows users to manage their bookings, view reservation details, make changes, and cancel bookings directly within the app.
                            </p>
                        </div>
                    </div>

                    <div className="dashboard-container-box dashboard-boxes">
                        <div className="key-feature-heading">
                            <img
                                src="./images/conversion.webp"
                                alt="Currency Conversion"
                            />

                            <h4 className="software-feature-headings" >Currency Conversion</h4>
                            <p>
                                Offers currency conversion tools and exchange rate information, allowing users to calculate costs and manage their finances while traveling internationally.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TravellingKeyFeature
