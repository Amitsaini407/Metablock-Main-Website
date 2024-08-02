import React from 'react'
import "./Portfolio.css"

const Portfolio = () => {
    return (
        <div>
            <main id="metaverse_dev_main">
                <section className="breadcrumb_section breadcrumb_padd">
                    <div className="container">
                        <div className="row justify-content-center">
                            <ul className="list-inline nomargin">
                                <li>
                                    <a href="" target="_blank">
                                        Home
                                    </a>
                                </li>
                                <li>&gt;</li>
                                <li>Portfolio</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="metaverse_dev_features">
                    <div className="container">
                        <h2 className="ourservice-title-3">
                            Our Website Portfolio
                        </h2>

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-12">
                                <div className="feature_box">
                                    <div className="card-thumbnail">
                                        <img
                                            src="./images/Metaverse-Game-Development-01.webp"
                                            alt="Metaverse Game Development"
                                            title="Metaverse Game Development"

                                            loading="eager"
                                            style={{ width: "400px" }}
                                        />
                                    </div>
                                    <div className="charcte_conte_sec">
                                        <div className="sub_title-15">Decentralization</div>
                                        <p className="sub_contents-15">
                                            A decentralized metaverse ensures that individuals possess greater ownership
                                            and control over their data, assets, and interactions, promoting a more equitable
                                            and transparent economic system.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="feature_box">
                                    <div className="card-thumbnail">
                                        <img
                                            src="./images/Metaverse-Game-Development-02.webp"
                                            alt="Compatibility"
                                            title="Compatibility"

                                            loading="eager"
                                            style={{ width: "100%" }}
                                        />
                                    </div>
                                    <div className="charcte_conte_sec">
                                        <div className="sub_title-15">Compatibility</div>
                                        <p className="sub_contents-15">
                                            The ability to easily connect and transfer resources between different virtual
                                            worlds and platforms is essential to the metaverse's growth and development.
                                            Because of compatibility, users can keep ownership and control over their assets
                                            regardless of the platform they are utilizing.

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="feature_box">
                                    <div className="card-thumbnail">
                                        <img
                                            src="./images/Metaverse-Game-Development-03.webp"
                                            alt="User-generated information"
                                            title="User-generated information"

                                            loading="eager"
                                            style={{ width: "100%" }}
                                        />
                                    </div>
                                    <div className="charcte_conte_sec">
                                        <div className="sub_title-15">
                                            User-generated information
                                        </div>
                                        <p className="sub_contents-15">
                                            The capacity of users to create and share their own content is essential to the Metaverse's
                                            expansion and advancement. Resources for content creation and sharing need to be
                                            dependable and simple to use.

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="feature_box">
                                    <div className="card-thumbnail">
                                        <img
                                            src="./images/Metaverse-Game-Development-04.webp"
                                            alt="Immersive encounters"
                                            title="Immersive encounters"

                                            loading="eager"
                                            style={{ width: "100%", height: "35vh" }}
                                        />
                                    </div>
                                    <div className="charcte_conte_sec">
                                        <div className="sub_title-15">Immersion interactions
                                        </div>
                                        <p className="sub_contents-15">
                                            There are more opportunities than ever for interactions that blur the lines between
                                            the real and virtual worlds because to the metaverse. It is necessary to integrate
                                            virtual reality, augmented reality, and other immersive technologies to create an
                                            experience that is both engaging and participatory.

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="feature_box">
                                    <div className="card-thumbnail">
                                        <img
                                            src="./images/Metaverse-Game-Development-05.webp"
                                            alt="Social characteristics"
                                            title="Social characteristics"

                                            loading="eager"
                                            style={{ width: '100%', height: "35vh" }}
                                        />
                                    </div>
                                    <div className="charcte_conte_sec">
                                        <div className="sub_title-15">Social attributes
                                        </div>
                                        <p className="sub_contents-15">
                                            A sense of involvement and belonging among platform users is fostered by social
                                            components such as chat, multiplayer games, avatars, and other social elements
                                            because the metaverse is a social environment.

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="feature_box">
                                    <div className="card-thumbnail">
                                        <img
                                            src="./images/Metaverse-Game-Development-06.webp"
                                            alt="Integration of blockchain technology"
                                            title="Integration of blockchain technology"

                                            loading="eager"
                                            style={{ width: "100%" }}
                                        />
                                    </div>
                                    <div className="charcte_conte_sec">
                                        <div className="sub_title-15">
                                            Using blockchain technologies

                                        </div>
                                        <p className="sub_contents-15">
                                            Because blockchain technology is being integrated, the metaverse may benefit fro
                                            m increased security, transparency, and decentralization. This encompasses the use
                                            of NFTs for digital asset ownership and trading.

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Portfolio;
