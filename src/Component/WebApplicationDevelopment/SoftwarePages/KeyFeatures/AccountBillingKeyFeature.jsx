import React from "react";
import "./KeyFeatures.css";
const AccountBillingKeyFeature = () => {
  return (
    <div style={{ marginBottom: "50px " }}>
      <div className="dashboard-main-box">
        <h4 className="Key-feature-heading mb-5" style={{ fontSize: '40px' }}>Key Feature</h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading d-flex flex-column justify-center align-center">
              <img src="./images/invoice.webp" alt="Invoicing" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Invoicing
              </h4>
              <p>
                Invoicing enables businesses to create and customize invoices
                for products or services provided to clients.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/expense.webp" alt="Expense Tracking" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
              Expense Tracking
              </h4>
              <p>
                Expense Tracking helps monitor and categorize various business
                expenses, ensuring accurate financial records.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/financial-statement.webp" alt="Financial Reporting" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Financial Reporting
              </h4>
              <p>
                Financial Reporting generates comprehensive reports like balance
                sheets and income statements to analyze business performance.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/accounting.webp" alt="Accounts Payable Management" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Accounts Payable Management
              </h4>
              <p>
                Accounts Payable Management streamlines bill processing, payment
                scheduling, and vendor reconciliation.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/bank.webp" alt="Bank Reconciliation" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Bank Reconciliation
              </h4>
              <p>
                Bank Reconciliation matches and reconciles bank transactions
                with accounting records for accuracy.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/tax.webp" alt="Tax Compliance" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Tax Compliance
              </h4>
              <p>
                Tax Compliance calculates taxes owed, generates tax reports, and
                facilitates tax filings.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/self-service.webp" alt=" Self-Service Portal" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Self-Service Portal
              </h4>
              <p>
                Employee Self-Service Portal empowers employees to update
                information, submit leave requests, and access pay stubs
                conveniently.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/accountpaytment.webp" alt="Payment Gateways Integration" />
              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Payment Gateways Integration
              </h4>
              <p>
                Payment Gateways Integration allows for seamless online payments
                and credit card processing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountBillingKeyFeature;
