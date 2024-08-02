import React from "react";
import "./Blog.css";
import AutoPlayblogs from "./Blogslider";
import blog_page_data from "../Insights/company/Announcement/Assets/blog_page_data";
import { Link } from "react-router-dom";
const Blog = () => {
    return (
        <>
            <main className="blog_new_main">
                <section className="blog_new_banner">
                    <div className="container-fluid p-0">
                        <div className="VideoWrper">
                            <div className="video_sec">
                                <video autoPlay muted loop playsInline preload="metadata">
                                    <source
                                        src="https://www.MetaBlocktechnologies.com/asset/inner-pages-new/blog/banner-bg-video.mp4"
                                        z type="video/mp4"
                                    />
                                </video>
                            </div>
                            <div className="container">
                                <div className="content_sec">
                                    <div className="title_sec">
                                        <h2 className="title">Next-gen Blogs</h2>
                                    </div>
                                    <p className="contents">
                                        Bits and Bytes Explored in the Ever-Evolving Digital
                                        Landscape
                                    </p>
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-lg-5 col-md-5 col-10"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="blog_new_trending_sec" id="blog_new_trending_sec">
                    <div className="container-fluid p-0">
                        <h1 className="title-blogs">
                            Trending <span>Blogs</span>{" "}
                        </h1>
                        <div className="carousel_sec">
                            {/* Refer slider custom.js File */}
                            <div className="trending-blog slider">
                                <AutoPlayblogs />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="blog_new_popular_sec" id="blog_new_popular_sec">
                    <div className="container">
                        <div
                            className="nav flex-column nav-pills"
                            id="popular_tab_sec"
                            role="tablist"
                            aria-orientation="vertical"
                        >
                            <button
                                className="nav-link "
                                id="metaverse-_tab"
                                data-toggle="pill"
                                data-target="#metaverse-"
                                type="button"
                                role="tab"
                                aria-controls="metaverse-"
                                aria-selected="false"
                            >
                                <span>Metaverse </span>
                            </button>
                            <button
                                className="nav-link "
                                id="cryptocurrency-exchange_tab"
                                data-toggle="pill"
                                data-target="#cryptocurrency-exchange"
                                type="button"
                                role="tab"
                                aria-controls="cryptocurrency-exchange"
                                aria-selected="false"
                            >
                                <span>Cryptocurrency Exchange</span>
                            </button>
                            <button
                                className="nav-link "
                                id="cryptocurrency-wallet_tab"
                                data-toggle="pill"
                                data-target="#cryptocurrency-wallet"
                                type="button"
                                role="tab"
                                aria-controls="cryptocurrency-wallet"
                                aria-selected="false"
                            >
                                <span>Cryptocurrency Wallet</span>
                            </button>
                            <button
                                className="nav-link "
                                id="game-development_tab"
                                data-toggle="pill"
                                data-target="#game-development"
                                type="button"
                                role="tab"
                                aria-controls="game-development"
                                aria-selected="false"
                            >
                                <span>Game Development</span>
                            </button>
                            <button
                                className="nav-link "
                                id="web3_tab"
                                data-toggle="pill"
                                data-target="#web3"
                                type="button"
                                role="tab"
                                aria-controls="web3"
                                aria-selected="false"
                            >
                                <span>Web3</span>
                            </button>
                        </div>
                        {/* ------------------------metavers blog--------------------- */}
                        <div className="tab-content" id="popular_tab_content_sec">
                            <div
                                className="tab-pane fade "
                                id="metaverse-"
                                role="tabpanel"
                                aria-labelledby="metaverse-_tab"
                            >
                                <div className="row justify-content-center">
                                    {blog_page_data.map((Item, index) => {
                                        return (
                                            <div className="col-lg-7 col-12">
                                                <div className="popular_box">

                                                    <div className="img_sec">
                                                        <Link to={`/Product/${Item.id}`}>
                                                            <img
                                                                src={Item.image}
                                                                alt="Metaverse Virtual Office Development Company"
                                                                title="Virutalizing the workspace: Building the Virutal Offices of tomorrow"
                                                                className="img-fluid"
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div className="sub_title">
                                                        {Item.name}
                                                    </div>
                                                    <p className="sub_contents">
                                                        {Item.Paragraph}
                                                    </p>

                                                    <div className="like_sec">
                                                        <Link to={`/Product/${Item.id}`}>
                                                            <button
                                                                className="btn like_sec_btn like_big"
                                                                onclick="likes_count(297)"
                                                            >  Read More
                                                                <i className="fa fa-thumbs-up" />
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                {/*------------- metavers similers blog-------- */}
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-12">
                                        <div className="popular_tab_box">
                                            <div className="category_btn_sec">
                                                <a href className="category_btn">
                                                    Metaverse{" "}
                                                </a>
                                            </div>
                                            <a
                                                className
                                                target="_blank"
                                            >
                                                <div className="img_sec">
                                                    <img
                                                        alt=" Metaverse Revolution in ICC 2023 with Roblox"
                                                        title="Innovations in Action: Metaverse Revolution in ICC 2023 with Roblox"
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <div className="content_sec">
                                                    <div className="sub_title">
                                                        Innovations in Action: Metaverse Revolution in ICC
                                                        2023 with Roblox
                                                    </div>
                                                    <p className="sub_contents">
                                                        {" "}
                                                        Welcome to a new era of immersive cricket, where
                                                        digital meets reality and fans become digital
                                                        legends. Step up to the crease in the heart of the
                                                        meta...
                                                    </p>
                                                </div>
                                            </a>
                                            <div className="bottom_sec">
                                                {/* <form action="" method="post"> */}
                                                <div className="like_sec">
                                                    <button
                                                        className="btn like_sec_btn"
                                                        onclick="likes_count(282)"
                                                    >
                                                        <i className="fa fa-thumbs-up" />
                                                    </button>
                                                    <span id={282}>0</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* -----------------popular-blog--------- */}

                            <div
                                className="tab-pane fade "
                                id="cryptocurrency-exchange"
                                role="tabpanel"
                                aria-labelledby="cryptocurrency-exchange_tab"
                            >
                                <div className="row justify-content-center">
                                    <div className="col-lg-7 col-12">
                                        <div className="popular_box">
                                            <a
                                                className
                                                target="_blank"
                                            >
                                                <div className="img_sec">
                                                    <img
                                                        alt="Changelly Clone script"
                                                        title="Changelly Clone Script: A Budget-Friendly Solution to Launch Your Own Cryptocurrency Exchange"
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <div className="sub_title">
                                                    Changelly Clone Script: A Budget-Friendly Solution to
                                                    Launch Your Own Cryptocurrency Exchange
                                                </div>
                                                <p className="sub_contents">
                                                    The cryptocurrency revolution has opened up new
                                                    possibilities for financial innovation, and launching
                                                    your cryptocurrency exchange is an enticing pros...
                                                </p>
                                            </a>
                                            <div className="like_sec">
                                                <button
                                                    className="btn like_sec_btn like_big"
                                                    onclick="likes_count(299)"
                                                >
                                                    <i className="fa fa-thumbs-up" />
                                                </button>
                                                <span className="likes_count" id={299}>
                                                    0
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    {/*---- popular smiler blogs--- */}
                                    <div className="col-lg-4 col-12">
                                        <div className="popular_tab_box">
                                            <div className="category_btn_sec">
                                                <a href className="category_btn">
                                                    Cryptocurrency Exchange
                                                </a>
                                            </div>
                                            <a
                                                className
                                                target="_blank"
                                            >
                                                <div className="img_sec">
                                                    <img
                                                        alt="CoinDCX Clone Script"
                                                        title="Unlock the Potential of CoinDCX Clone Script: A Ready-Made Software Solution for Your Cryptocurrency Exchange Platform"
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <div className="content_sec">
                                                    <div className="sub_title">
                                                        Unlock the Potential of CoinDCX Clone Script: A
                                                        Ready-Made Software Solution for Your Cryptocurrency
                                                        Exchange Platform
                                                    </div>
                                                    <p className="sub_contents">
                                                        {" "}
                                                        CoinDCX is a popular cryptocurrency exchange
                                                        platform that has gained significant attention in
                                                        recent years due to its innovative features and
                                                        user-fr...
                                                    </p>
                                                </div>
                                            </a>
                                            <div className="bottom_sec">
                                                {/* <form action="" method="post"> */}
                                                <div className="like_sec">
                                                    <button
                                                        className="btn like_sec_btn"
                                                        onclick="likes_count(295)"
                                                    >
                                                        <i className="fa fa-thumbs-up" />
                                                    </button>
                                                    <span id={295}>0</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade "
                                id="cryptocurrency-wallet"
                                role="tabpanel"
                                aria-labelledby="cryptocurrency-wallet_tab"
                            >
                                <div className="row justify-content-center">
                                    <div className="col-lg-7 col-12">
                                        <div className="popular_box">
                                            <a
                                                className
                                                target="_blank"
                                            >
                                                <div className="img_sec">
                                                    <img
                                                        alt="blockchain wallet development "
                                                        title="Blockchain Wallet Development Company"
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <div className="sub_title">
                                                    Blockchain Wallet Development Company
                                                </div>
                                                <p className="sub_contents">
                                                    Technology has been revolutionizing the crypto
                                                    industry by introducing digital currencies
                                                    self-reliant on the industry’s physical status in a
                                                    comple...
                                                </p>
                                            </a>
                                            <div className="like_sec">
                                                <button
                                                    className="btn like_sec_btn like_big"
                                                    onclick="likes_count(143)"
                                                >
                                                    <i className="fa fa-thumbs-up" />
                                                </button>
                                                <span className="likes_count" id={143}>
                                                    0
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    {/* -----------carpto wallet-simmlier blog-------- */}
                                    <div className="col-lg-4 col-12">
                                        <div className="popular_tab_box">
                                            <div className="category_btn_sec">
                                                <a href className="category_btn">
                                                    Cryptocurrency Exchange
                                                </a>
                                            </div>
                                            <a
                                                className
                                                target="_blank"
                                            >
                                                <div className="img_sec">
                                                    <img
                                                        src="https://MetaBlocktechnologies.s3.us-east-2.amazonaws.com/blog/CoinDCX Clone Script.webp"
                                                        alt="CoinDCX Clone Script"
                                                        title="Unlock the Potential of CoinDCX Clone Script: A Ready-Made Software Solution for Your Cryptocurrency Exchange Platform"
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <div className="content_sec">
                                                    <div className="sub_title">
                                                        Unlock the Potential of CoinDCX Clone Script: A
                                                        Ready-Made Software Solution for Your Cryptocurrency
                                                        Exchange Platform
                                                    </div>
                                                    <p className="sub_contents">
                                                        {" "}
                                                        CoinDCX is a popular cryptocurrency exchange
                                                        platform that has gained significant attention in
                                                        recent years due to its innovative features and
                                                        user-fr...
                                                    </p>
                                                </div>
                                            </a>
                                            <div className="bottom_sec">
                                                {/* <form action="" method="post"> */}
                                                <div className="like_sec">
                                                    <button
                                                        className="btn like_sec_btn"
                                                        onclick="likes_count(295)"
                                                    >
                                                        <i className="fa fa-thumbs-up" />
                                                    </button>
                                                    <span id={295}>0</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* --------------------------------game development blog--------- */}
                            <div
                                className="tab-pane fade "
                                id="game-development"
                                role="tabpanel"
                                aria-labelledby="game-development_tab"
                            >
                                <div className="row justify-content-center">
                                    <div className="col-lg-7 col-12">
                                        <div className="popular_box">
                                            <a
                                                className
                                                target="_blank"
                                            >
                                                <div className="img_sec">
                                                    <img
                                                        alt="Blockchain Casino Game Development"
                                                        title="The Future of Gaming, a Revolutionizing Entertainment with Blockchain Casino Game"
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <div className="sub_title">
                                                    The Future of Gaming, a Revolutionizing Entertainment
                                                    with Blockchain Casino Game
                                                </div>
                                                <p className="sub_contents">
                                                    In the ever-evolving landscape of online gaming,
                                                    reshaping the casino experience through Blockchain
                                                    Casino Game Development has become crucial. Transf...
                                                </p>
                                            </a>
                                            <div className="like_sec">
                                                <button
                                                    className="btn like_sec_btn like_big"
                                                    onclick="likes_count(298)"
                                                >
                                                    <i className="fa fa-thumbs-up" />
                                                </button>
                                                <span className="likes_count" id={298}>
                                                    0
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    {/* simmliergameblog */}
                                    <div className="col-lg-4 col-12">
                                        <div className="popular_tab_box">
                                            <div className="category_btn_sec">
                                                <a href className="category_btn">
                                                    Game Development
                                                </a>
                                            </div>
                                            <a
                                                className
                                                target="_blank"
                                            >
                                                <div className="img_sec">
                                                    <img
                                                        src="https://MetaBlocktechnologies.s3.us-east-2.amazonaws.com/blog/Exploring the Potential of GTA 6’s Metaverse and Cryptocurrency Revolution.webp"
                                                        alt="Exploring the Potential of GTA 6’s Metaverse and Cryptocurrency Revolution "
                                                        title="Exploring the Potential of GTA 6’s Metaverse and Cryptocurrency Revolution "
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <div className="content_sec">
                                                    <div className="sub_title">
                                                        Exploring the Potential of GTA 6’s Metaverse and
                                                        Cryptocurrency Revolution{" "}
                                                    </div>
                                                    <p className="sub_contents">
                                                        {" "}
                                                        The Grand Theft Auto (GTA) series, a beacon of
                                                        gaming excellence developed by Rockstar Games, has
                                                        etched its mark in the gaming hall of fame. With
                                                        the...
                                                    </p>
                                                </div>
                                            </a>
                                            <div className="bottom_sec">
                                                {/* <form action="" method="post"> */}
                                                <div className="like_sec">
                                                    <button
                                                        className="btn like_sec_btn"
                                                        onclick="likes_count(296)"
                                                    >
                                                        <i className="fa fa-thumbs-up" />
                                                    </button>
                                                    <span id={296}>0</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade "
                                id="web3"
                                role="tabpanel"
                                aria-labelledby="web3_tab"
                            >
                                <div className="row justify-content-center">
                                    {/* ----------------web3 blog----------- */}
                                    <div className="col-lg-7 col-12">
                                        <div className="popular_box">
                                            <a
                                                className
                                                target="_blank"
                                            >
                                                <div className="img_sec">
                                                    <img
                                                        alt="Web3 Smart Contract Development Company"
                                                        title="Web3 Smart Contract Development | Web3 Smart Contract Development Services | MetaBlock "
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <div className="sub_title">
                                                    Web3 Smart Contract Development | Web3 Smart Contract
                                                    Development Services | MetaBlock{" "}
                                                </div>
                                                <p className="sub_contents">
                                                    MetaBlock is a leading Web3 smart contract development
                                                    company. We assist you with highly secure, dependable,
                                                    and upgradeable smart contracts built to the ...
                                                </p>
                                            </a>
                                            <div className="like_sec">
                                                <button
                                                    className="btn like_sec_btn like_big"
                                                    onclick="likes_count(253)"
                                                >
                                                    <i className="fa fa-thumbs-up" />
                                                </button>
                                                <span className="likes_count" id={253}>
                                                    0
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    {/* ---------web3 simmlier blogs----------- */}
                                    <div className="col-lg-4 col-12">
                                        <div className="popular_tab_box">
                                            <div className="category_btn_sec">
                                                <a href className="category_btn">
                                                    Web3
                                                </a>
                                            </div>
                                            <a
                                                className
                                                target="_blank"
                                            >
                                                <div className="img_sec">
                                                    <img
                                                        src="https://MetaBlocktechnologies.s3.us-east-2.amazonaws.com/blog/Web3-Wallet-Development.webp"
                                                        alt="Web3 Wallet Development "
                                                        title="Web3 Wallet Development Company - MetaBlock"
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <div className="content_sec">
                                                    <div className="sub_title">
                                                        Web3 Wallet Development Company - MetaBlock
                                                    </div>
                                                    <p className="sub_contents">
                                                        {" "}
                                                        MetaBlock is a Pioneer Web3 Wallet Development Company
                                                        with years of experience in build Web3 Wallets. With
                                                        Help users securely transfer, receive, and stor...
                                                    </p>
                                                </div>
                                            </a>
                                            <div className="bottom_sec">
                                                {/* <form action="" method="post"> */}
                                                <div className="like_sec">
                                                    <button
                                                        className="btn like_sec_btn"
                                                        onclick="likes_count(246)"
                                                    >
                                                        <i className="fa fa-thumbs-up" />
                                                    </button>
                                                    <span id={246}>0</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*------------------------------------ blog section end------------------- */}

                <section className="blog_new_video_sec" id="blog_new_video_sec">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-9">
                                <div className="video_card">
                                    <div className="title">Trending Tech Videos</div>
                                    <p>Elucidating the Digital Landscape</p>
                                    <div className="row align-items-center">
                                        <div className="col-lg-9">
                                            <div className="video_sec_main">
                                                <iframe
                                                    width="100%"
                                                    src="https://www.youtube.com/embed/dv9d1icSF4s"
                                                    title="YouTube video player"
                                                    frameBorder={0}
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowFullScreen
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="video_sec_sub">
                                                <iframe
                                                    width="100%"
                                                    height="auto"
                                                    src="https://www.youtube.com/embed/alp3DLwhzBA"
                                                    title="YouTube video player"
                                                    frameBorder={0}
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowFullScreen
                                                />
                                            </div>
                                            <div className="video_sec_sub">
                                                <iframe
                                                    width="100%"
                                                    height="auto"
                                                    src="https://www.youtube.com/embed/UcCnsfDMRSU"
                                                    title="YouTube video player"
                                                    frameBorder={0}
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowFullScreen
                                                />
                                            </div>
                                            <div className="video_sec_sub">
                                                <iframe
                                                    width="100%"
                                                    height="auto"
                                                    src="https://www.youtube.com/embed/NZWBkLC_s9E"
                                                    title="YouTube video player"
                                                    frameBorder={0}
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowFullScreen
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Blog;
