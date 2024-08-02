import React from "react";
import "./AdminControlFeature.css";

const AdminControlFeature = () => {
  return (
    <div className="Admin-control-main-container">
      <h4>Admin Control Feature</h4>
      <div className="Admin-control-inner-container">
        <div className="a-card card-discover card1 col-md-3 admin-control-card">
          <div className="card-icon-title-wrapper">
            <div className="card__icon pb-1">
              <div className="icon__wrapper ">
                <img
                  src="./images/User-Management.webp"
                  alt='User Management'
                />
              </div>
            </div>
            <h1 className="card__title fs-4 g-text">User Management</h1>
          </div>
          <p className="card__description">
            Dashboard refers to a very important feature that shows you how your
            game is performing against other games.
          </p>
        </div>
        <div className="a-card card-discover card1 col-md-3 admin-control-card">
          <div className="card-icon-title-wrapper">
            <div className="card__icon pb-1">
              <div className="icon__wrapper ">
                <img src="./images/access-control.webp" alt='Access Control' />
              </div>
            </div>
            <h1 className="card__title fs-4 g-text">Access Control</h1>
          </div>
          <p className="card__description">
            Access control stands as a gatekeeper, ensuring that only authorized
            users have the privilege to interact with specific features and
            data, enhancing security and privacy.
          </p>
        </div>

        <div className="a-card card-discover col-md-3">
          <div className="card-icon-title-wrapper">
            <div className="card__icon pb-1">
              <div className="icon__wrapper ">
                <img src="./images/creative.webp" alt='Content Moderation' />
              </div>
            </div>
            <h1 className="card__title fs-4 g-text">Content Moderation</h1>
          </div>
          <p className="card__description">
            Content moderation empowers admins to uphold standards by reviewing,
            approving, or removing user-generated content, fostering a positive
            and safe environment within the software.
          </p>
        </div>

        <div className="a-card card-discover col-md-3">
          <div className="card-icon-title-wrapper">
            <div className="card__icon pb-1">
              <div className="icon__wrapper ">
                <img src="./images/process.webp" alt='Configuration and Settings' />
              </div>
            </div>
            <h1 className="card__title fs-4 g-text">
              Configuration and Settings
            </h1>
          </div>
          <p className="card__description">
            Configuration options offer administrators the flexibility to tailor
            the software environment to organizational requirements and user
            preferences, optimizing usability and functionality.
          </p>
        </div>
      </div>
      <div className="Admin-control-inner-container">
        <div className="a-card card-discover card1 col-md-3">
          <div className="card-icon-title-wrapper">
            <div className="card__icon pb-1">
              <div className="icon__wrapper ">
                <img src="./images/process.webp" alt='Security Management' />
              </div>
            </div>
            <h1 className="card__title fs-4 g-text">Security Management</h1>
          </div>
          <p className="card__description">
            Security measures, such as encryption and intrusion detection
            systems, fortify software systems against threats, safeguarding
            sensitive information and maintaining integrity.
          </p>
        </div>
        <div className="a-card card-discover card1 col-md-3">
          <div className="card-icon-title-wrapper">
            <div className="card__icon pb-1">
              <div className="icon__wrapper ">
                <img src="./images/web-analytics.webp" alt='Monitoring and Analytics' />
              </div>
            </div>
            <h1 className="card__title fs-4 g-text">
              {" "}
              Monitoring and Analytics
            </h1>
          </div>
          <p className="card__description">
            Monitoring tools provide insights into system performance and user
            activities, enabling admins to identify trends, detect anomalies,
            and make data-driven decisions.
          </p>
        </div>

        <div className="a-card card-discover col-md-3">
          <div className="card-icon-title-wrapper">
            <div className="card__icon pb-1">
              <div className="icon__wrapper">
                <img src="./images/sheet.webp" alt='Reporting and Audit Trails' />
              </div>
            </div>
            <h1 className="card__title fs-4 g-text">
              Reporting and Audit Trails
            </h1>
          </div>
          <p className="card__description">
            Reporting features play a crucial role in compliance efforts and
            incident response by providing comprehensive documentation and audit
            trails of user actions and system events.
          </p>
        </div>

        <div className="a-card card-discover col-md-3">
          <div className="card-icon-title-wrapper">
            <div className="card__icon pb-1">
              <div className="icon__wrapper ">
                <img src="./images/connection.webp" alt='Integration and Interoperability' />
              </div>
            </div>
            <h1 className="card__title fs-4 g-text">
              {" "}
              Integration and Interoperability
            </h1>
          </div>
          <p className="card__description">
            Integration capabilities foster seamless data exchange and
            interoperability with external systems and services, enhancing
            collaboration and extending the software's functionality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminControlFeature;
