import React from 'react'

const GrocryKeyFeature = () => {
    return (
        <div style={{ marginBottom: "50px " }}>
            <div className="dashboard-main-box">
                <h4 className="Key-feature-heading mb-5" style={{ fontSize: '40px' }}>Key Feature</h4>
                <div className="dashboard-container">
                    <div className="dashboard-container-box dashboard-boxes">
                        <div className="key-feature-heading">
                            <img
                                src="./images/brochure.webp"
                                alt="Product Catalog"
                            />

                            <h4 className="software-feature-headings" >Product Catalog</h4>
                            <p>
                                A comprehensive catalog of grocery items categorized by type, brand, and aisle, allowing users to easily browse and search for products.
                            </p>
                        </div>
                    </div>

                    <div className="dashboard-container-box dashboard-boxes">
                        <div className="key-feature-heading">
                            <img
                                src="./images/profile.webp"
                                alt="User Profiles and Accounts"
                            />

                            <h4 className="software-feature-headings" >User Profiles and Accounts</h4>
                            <p>
                                Users can create accounts, manage personal information, and save preferences such as favorite products or shopping lists for future reference.
                            </p>
                        </div>
                    </div>
                    <div className="dashboard-container-box dashboard-boxes">
                        <div className="key-feature-heading">
                            <img
                                src="./images/search.webp"
                                alt="Search and Filters"
                            />

                            <h4 className="software-feature-headings" >Search and Filters</h4>
                            <p>
                                Robust search functionality and filters enable users to quickly find specific products or browse through categories, brands, prices, and dietary preferences.
                            </p>
                        </div>
                    </div>

                    <div className="dashboard-container-box dashboard-boxes">
                        <div className="key-feature-heading">
                            <img
                                src="./images/shopping.webp"
                                alt="Product Details"
                            />

                            <h4 className="software-feature-headings" >Product Details</h4>
                            <p>
                                Detailed product descriptions, nutritional information, and customer reviews help users make informed purchasing decisions.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="dashboard-container">
                    <div className="dashboard-container-box dashboard-boxes">
                        <div className="key-feature-heading">
                            <img
                                src="./images/tracking.webp"
                                alt="Order Tracking"
                            />

                            <h4 className="software-feature-headings" >Order Tracking</h4>
                            <p>
                                Real-time order tracking functionality enables users to track the status of their orders and receive notifications about order updates, delivery timings, and driver information.                            </p>
                        </div>
                    </div>

                    <div className="dashboard-container-box dashboard-boxes">
                        <div className="key-feature-heading">
                            <img
                                src="./images/promotion.webp"
                                alt="Promotions and Discounts"
                            />

                            <h4 className="software-feature-headings" >Promotions and Discounts</h4>
                            <p>
                                Regularly updated promotions, discounts, and personalized offers help users save money on their grocery purchases and incentivize repeat usage of the app.
                            </p>
                        </div>
                    </div>
                    <div className="dashboard-container-box dashboard-boxes">
                        <div className="key-feature-heading">
                            <img
                                src="./images/pickup-car.webp"
                                alt="Delivery and Pickup"
                            />

                            <h4 className="software-feature-headings" >Delivery and Pickup</h4>
                            <p>
                                Flexible delivery and pickup options allow users to choose their preferred method of receiving their groceries, whether it's doorstep delivery or curbside pickup.
                            </p>
                        </div>
                    </div>

                    <div className="dashboard-container-box dashboard-boxes">
                        <div className="key-feature-heading">
                            <img
                                src="./images/technical-support.webp"
                                alt="Customer Support"
                            />

                            <h4 className="software-feature-headings" >Customer Support</h4>
                            <p>
                                Access to customer support via chat, email, or phone allows users to resolve issues, ask questions, or provide feedback about their shopping experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GrocryKeyFeature
