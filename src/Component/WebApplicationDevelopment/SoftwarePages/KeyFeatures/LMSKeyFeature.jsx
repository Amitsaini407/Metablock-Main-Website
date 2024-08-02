import React from "react";

const LMSKeyFeature = () => {
  return (
    <div style={{ marginBottom: "50px " }}>
      <div className="dashboard-main-box">
        <h4 className="Key-feature-heading mb-5" style={{ fontSize: '40px' }}>Key Feature</h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/videoconference.webp" alt="Live Class Integration" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Live Class Integration
              </h4>
              <p>
                Live Class Integration combines virtual classroom features
                directly into the Learning Management System, facilitating
                real-time interaction between teachers and students.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/interaction.webp" alt="Interactive Tools" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Interactive Tools
              </h4>
              <p>
                Interactive Tools enable instructors to engage learners
                effectively with features like interactive whiteboards, polls,
                and quizzes, enhancing the learning experience.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/collaborationde.webp" alt="Collaboration Features" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Collaboration Features
              </h4>
              <p>
                Collaboration Features foster group work and discussions among
                students, encouraging teamwork and knowledge sharing in live
                class settings.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/computer.webp" alt="Screen Sharing" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Screen Sharing
              </h4>
              <p>
                Screen Sharing functionality allows instructors to share
                presentations, documents, and applications with participants
                during live sessions.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/recording.webp" alt="Recording Capability" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Recording Capability
              </h4>
              <p>
                Recording Capability enables the recording of live classes for
                later review or for students who miss the session, enhancing
                accessibility and flexibility.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/attendance.webp" alt="Attendance Monitoring" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Attendance Monitoring
              </h4>
              <p>
                Attendance Monitoring features help instructors track student
                participation and engagement levels during live classes,
                ensuring accountability.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/document.webp" alt="Document Sharing" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Document Sharing
              </h4>
              <p>
                Document Sharing enables seamless sharing of course materials,
                readings, and resources among participants, fostering
                collaborative learning environments.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/social-media.webp" alt="Engagement Activities" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Engagement Activities
              </h4>
              <p>
                Engagement Activities such as polls, quizzes, and interactive
                discussions keep learners actively involved and interested in
                the learning process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LMSKeyFeature;
