import React from "react";

const QuizSystemKeyFeature = () => {
  return (
    <div style={{ marginBottom: "50px " }}>
      <div className="dashboard-main-box">
        <h4 className="Key-feature-heading mb-5" style={{ fontSize: '40px' }}>Key Feature</h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/unknown-message.webp" alt="Question Management" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Question Management
              </h4>
              <p>
                Question Management facilitates the organization and creation of
                questions across subjects and topics efficiently.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/quiz.webp" alt="Custom Quiz Templates" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Custom Quiz Templates
              </h4>
              <p>
                Custom Quiz Templates offer predefined formats for diverse
                assessment approaches.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/yoga.webp" alt="Flexible Scheduling" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Flexible Scheduling
              </h4>
              <p>
                Flexible Scheduling allows instructors to set specific quiz
                dates and time limits as per their requirements.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/score.webp" alt=" Automated Grading" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Automated Grading
              </h4>
              <p>
                Automated Grading saves instructors time by instantly grading
                objective questions.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/good-feedback.webp" alt="Performance Analysis" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Performance Analysis
              </h4>
              <p>
                Performance Analysis provides detailed insights into student
                performance and question-level analysis.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/customer-review.webp" alt="Feedback Mechanisms" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Feedback Mechanisms
              </h4>
              <p>
                Feedback Mechanisms enable students to review performance and
                access explanations for missed questions.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/integration.webp" alt="LMS Integration" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                LMS Integration
              </h4>
              <p>
                LMS Integration streamlines quiz administration within existing
                course management systems.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/surprise-box.webp" alt="Randomization Options" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Randomization Options
              </h4>
              <p>
                Randomization Options prevent cheating by creating unique quiz
                versions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizSystemKeyFeature;
