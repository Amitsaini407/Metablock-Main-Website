import React from 'react'

const FitnessIndustries = () => {
    return (
        <div className="m-0">
            <div className="dashboard-main-box">
                <h4 className="mobile-develop-haeding Key-feature-heading mb-5" style={{ fontSize: '40px' }}>Application Uses Industries</h4>                <div className="dashboard-container">
                    <div className="dashboard-container-box dashboard-boxes">
                        <div className="key-feature-heading">
                            <img src="./images/trainer.webp" alt="Personal Fitness" />

                            <h4 className="software-feature-headings" >Personal Fitness</h4>
                            <p>
                                Fitness apps offer tailored workout plans and progress tracking for individuals aiming to reach their health goals conveniently.
                            </p>
                        </div>
                    </div>

                    <div className="dashboard-container-box dashboard-boxes">
                        <div className="key-feature-heading">
                            <img src="./images/gym.webp" alt="Gyms & Centers" />

                            <h4 className="software-feature-headings" >Gyms & Centers</h4>
                            <p>
                                Integrated into gym services, fitness apps provide members with virtual classes and activity monitoring, enhancing the workout experience.
                            </p>
                        </div>
                    </div>

                    <div className="dashboard-container-box dashboard-boxes">
                        <div className="key-feature-heading">
                            <img src="./images/wellbeing.webp" alt="Employee Health" />

                            <h4 className="software-feature-headings" > Employee Health</h4>
                            <p>
                                {" "}
                                Companies utilize fitness apps to promote employee well-being, offering resources and challenges to boost health and productivity.
                            </p>
                        </div>
                    </div>

                    <div className="dashboard-container-box dashboard-boxes">
                        <div className="key-feature-heading">
                            <img src="./images/gymnast.webp" alt="Athletic Performance" />

                            <h4 className="software-feature-headings" >Athletic Performance</h4>
                            <p>
                                Athletes benefit from specialized training programs and performance tracking features, optimizing their athletic performance.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="dashboard-container">
                    <div className="dashboard-container-box dashboard-boxes">
                        <div className="key-feature-heading">
                            <img src="./images/physical.webp" alt="Physical Therapy" />

                            <h4 className="software-feature-headings" >Physical Therapy</h4>
                            <p>
                                Fitness apps aid in rehabilitation by guiding patients through exercises and monitoring progress remotely for improved recovery.
                            </p>
                        </div>
                    </div>

                    <div className="dashboard-container-box dashboard-boxes">
                        <div className="key-feature-heading">
                            <img src="./images/recovery.webp" alt="Guided Recovery" />

                            <h4 className="software-feature-headings" >Guided Recovery</h4>
                            <p>
                                Integrated into rehabilitation programs, these apps offer guided exercises and support for patients' recovery journeys.
                            </p>
                        </div>
                    </div>
                    <div className="dashboard-container-box dashboard-boxes">
                        <div className="key-feature-heading">
                            <img src="./images/better-health.webp" alt="Personalized Wellness" />

                            <h4 className="software-feature-headings" >Personalized Wellness</h4>
                            <p>
                                Fitness apps enhance wellness retreat experiences by providing guests with personalized workouts and mindfulness exercises.
                            </p>
                        </div>
                    </div>

                    <div className="dashboard-container-box dashboard-boxes">
                        <div className="key-feature-heading">
                            <img src="./images/training.webp" alt="Group Workouts" />

                            <h4 className="software-feature-headings" >Group Workouts</h4>
                            <p>
                                Fitness apps engage participants in community fitness programs, organizing group workouts and fostering a sense of belonging.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FitnessIndustries
