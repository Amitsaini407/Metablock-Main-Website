import React, { useState, useEffect } from "react";
import "./Blog.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import axios from 'axios'
const Blog = () => {
  const navigate = useNavigate("");


  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);



  const API_URL = 'http://localhost:5000/api/v1/blogcategory';

  const fetchBlogCategories = async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  };

  const fetchBlogsByCategory = async (categoryId) => {
    setLoading(true);
    try {
      const { data } = await axios.get(`http://localhost:5000/api/v1/blog/category/${categoryId}`);
      setBlogs(data);
    } catch (error) {
      setError('Failed to fetch blogs');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      fetchBlogsByCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };


  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options).replace(',', ''); // Remove comma after month
  };
  const API_URLone = 'http://localhost:5000/api/v1/blog';

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(API_URLone);
      return response.data;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }
  };

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchBlogCategories();
        setCategories(data);
      } catch (error) {
        setError('Failed to fetch categories');
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);


  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await fetchBlogs();
        setBlogs(data);
      } catch (error) {
        setError('Failed to fetch blogs');
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  const blogsData = [
    {
      _id: 1,
      title:
        "Changelly Clone Script: A Budget-Friendly Solution to Launch Your Own Cryptocurrency Exchange",
      content:
        "Starting a cryptocurrency exchange is an exciting proposition, as the revolution in cryptocurrencies has created new avenues for financial innovation. But the path to creating a successful...",
      imageSrc: "./images/cryptoexchnage-clone.webp",
      altText:
        "Changelly Clone Script: A Budget-Friendly Solution to Launch Your Own Cryptocurrency Exchange",
      link: "#",
    },
    {
      _id: 2,
      title:
        "The Future of Gaming, a Revolutionizing Entertainment with Blockchain Casino Game",
      content:
        "Redefining the casino experience using Blockchain Casino Game Development has become essential in the constantly changing world of online gaming. Blockchain technology is revolutionising the world of online gaming...",
      imageSrc: "./images/the-future-gaming.webp",
      altText:
        "The Future of Gaming, a Revolutionizing Entertainment with Blockchain Casino Game",
      link: "#",
    },
    {
      _id: 3,
      title:
        "Virtualizing the workspace: Building the Virtual Offices of tomorrow",
      content:
        "In the digital age, the nature of labour is evolving swiftly. The concept of a metaverse office is gaining traction as technology develops. Companies can function at a distance using a virtual off-site.",
      imageSrc: "./images/virtual-workspaces.webp",
      altText:
        "Virtualizing the workspace: Building the Virtual Offices of tomorrow",
    },
    {
      _id: 4,
      title:
        "Exploring the Potential of GTA 6’s Metaverse and Cryptocurrency Revolution",
      content:
        "Rockstar Games' Grand Theft Auto (GTA) series is a shining example of gaming brilliance and has earned a place in the gaming hall of fame. As excitement builds for the upcoming release, Gr...",
      imageSrc: "./images/cryptocurrency-revolutions.webp",
      altText:
        "Exploring the Potential of GTA 6’s Metaverse and Cryptocurrency Revolution",
    },
  ];
  return (
    <>
      <main className="blog_new_main">
        <section className="blog_new_banner">
          <div className="container-fluid p-0">
            <div className="VideoWrper">
              <div className="video_sec">
                {/* <video autoPlay muted loop playsInline preload="metadata">
                                    <source src="" type="video/mp4" />
                                </video> */}
                <img src="" alt="" />
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
                    <div className="col-lg-5 col-md-5 col-10">
                      <div className="search_sec">
                        <div className="sear_fd1">
                          <div className="input-group">
                            <input
                              type="text"
                              name="search"
                              className="form-control"
                              placeholder="SEARCH"
                              id="getsearchtext"
                            />
                            <span className="input-group-addon">
                              <button
                                className="btn search_btn"
                                onclick="load_search()"
                              >
                                <i className="fa fa-search" />
                              </button>
                            </span>
                          </div>
                        </div>
                        {/* </form> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <h1 className="custom-text">Trending Blogs</h1>
        <section className="blog_new_trending_sec" id="blog_new_trending_sec">
          <div className="container-fluid p-0">
            <div className="carousel_sec">
              <div className="trending-blog slider">
                {blogsData.map((blog, index) => (
                  <div
                    key={index}
                    className="items"
                    style={{
                      background: 'url("")',
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="trending_box">
                      <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                          <div className="sub_title">{blog.title}</div>
                          <p className="sub_contents">{blog.content}</p>
                          <div className="readmore_btn_sec">
                            <a
                              onClick={() => navigate(`/Blogshow/${blog._id}`)}
                              className="btn BtnPrimry TlkBtn readmore_btn"
                              target="_blank"
                            >
                              <span>Read More</span>
                              <span>Read More</span>
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-6 col-12">
                          <div className="img_sec">
                            <img
                              style={{ borderRadius: "10px" }}
                              src={blog.imageSrc}
                              alt={blog.altText}
                              title={blog.title}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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

              {categories?.map(category => (
                <button
                  className={`nav-link ${selectedCategory === category._id ? 'active' : ''}`}
                  id={`${category._id}_tab`}
                  data-toggle="pill"
                  data-target={`#${category._id}`}
                  type="button"
                  role="tab"
                  aria-controls={category._id}
                  aria-selected={selectedCategory === category._id}
                  key={category._id}
                  onClick={() => handleCategoryClick(category._id)}
                >
                  <span>{category.name}</span>
                </button>
              ))}

              {/* <button
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
              </button> */}
            </div>
            <div className="tab-content" id="popular_tab_content_sec">
              <div
                className="tab-pane fade show active"
                id="ai-"
                role="tabpanel"
                aria-labelledby="ai-_tab"
              >
                <div className="row justify-content-center">
                  <div className="col-lg-7 col-12">
                    <div className="popular_box">
                      <a href="" className target="_blank">
                        <div className="img_sec">
                          <img
                            src="./images/crypto-trading-development.webp"
                            alt="AI Crypto Trading Bot Development"
                            title="The Future Is Now: Implementing Remunerative Strategies For AI Crypto Trading Bot Development"
                          />
                        </div>
                        <div className="sub_title">
                          The Future Is Now: Implementing Remunerative
                          Strategies For AI Crypto Trading Bot Development
                        </div>
                        <p className="sub_contents">
                          The financial sector has undergone a change because to
                          cryptocurrency trading, which has enormous
                          profit-making potential. The market for digital assets
                          is expanding.
                        </p>
                      </a>
                      <div className="like_sec">
                        <button
                          className="btn like_sec_btn like_big"
                          onclick="likes_count(268)"
                        >
                          <i className="fa fa-thumbs-up" />
                        </button>
                        <span className="likes_count" id={268}>
                          8
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-12">
                    <div className="popular_right_sec">
                      <div className="title_sec">
                        <div className="title">Popular on</div>
                      </div>
                      <div className="popular_list_sec">
                        <div className="popular_list">
                          <div className="row align-items-center">

                            {blogs?.map((blog, index) => (
                              <div key={blog._id} className="col-lg-10 col-12">
                                <div className="row align-items-center">
                                  <div className="col-lg-2 col-12">
                                    <div className="num_sec">{index + 1}</div>
                                  </div>
                                  <div className="col-lg-10 col-12">
                                    {/* <a href="#" target="_blank">
                    <div className="sub_contents">{blog.title}</div>
                    <div className="bottom_sec">
                      <div className="read_head">Read full article</div>
                      <div className="date">{formatDate(blog.createdDate)}</div>
                    </div>
                  </a> */}

                                    <NavLink to={`/Blogshow/${blog._id}`} className="blog-link">
                                      <div className="sub_contents">{blog.title}</div>
                                      <div className="bottom_sec">
                                        <div className="read_head">Read full article</div>
                                        <div className="date">{formatDate(blog.createdDate)}</div>
                                      </div>
                                    </NavLink>
                                  </div>
                                </div>
                              </div>
                            ))}
                            {/* <div className="col-lg-2 col-12">
                              <div className="num_sec">01</div>
                            </div>
                            <div className="col-lg-10 col-12">
                              <a href="" className target="_blank">
                                <div className="sub_contents">
                                  Top Notch Software Development Company in
                                  India
                                </div>
                                <div className="bottom_sec">
                                  <div className="read_head">
                                    Read full article
                                  </div>
                                  <div className="date">Dec 28, 2018</div>
                                </div>
                              </a>
                            </div> */}
                            {/* <div className="col-lg-2 col-12">
                              <div className="num_sec">02</div>
                            </div>
                            <div className="col-lg-10 col-12">
                              <a href="" className target="_blank">
                                <div className="sub_contents">
                                  INTELLIGENT APPS - BE FINE AND SHINE WITH
                                  ARTIFICIAL INTELLIGENCE
                                </div>
                                <div className="bottom_sec">
                                  <div className="read_head">
                                    Read full article
                                  </div>
                                  <div className="date">Mar 27, 2019</div>
                                </div>
                              </a>
                            </div>
                            <div className="col-lg-2 col-12">
                              <div className="num_sec">03</div>
                            </div>
                            <div className="col-lg-10 col-12">
                              <a href="" className target="_blank">
                                <div className="sub_contents">
                                  AMASS THE FASCINATING FACTS OF ANDROID 9 PIE
                                  VS iOS 12
                                </div>
                                <div className="bottom_sec">
                                  <div className="read_head">
                                    Read full article
                                  </div>
                                  <div className="date">Mar 27, 2019</div>
                                </div>
                              </a>
                            </div>
                            <div className="col-lg-2 col-12">
                              <div className="num_sec">04</div>
                            </div>
                            <div className="col-lg-10 col-12">
                              <a href="" className target="_blank">
                                <div className="sub_contents">
                                  DIGITAL MARKETING - THE EVERLASTING STRATEGY
                                  INTHE BUSINESS WORLD
                                </div>
                                <div className="bottom_sec">
                                  <div className="read_head">
                                    Read full article
                                  </div>
                                  <div className="date">Apr 20, 2019</div>
                                </div>
                              </a>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-12">
                    <div className="popular_tab_box">
                      <div className="category_btn_sec">
                        <a href className="category_btn">
                          AI{" "}
                        </a>
                      </div>
                      <a href="" className target="_blank">
                        <div className="img_sec">
                          <img
                            src="./images/fusion-of-technology.webp"
                            alt="Fusion of Technology and Art - AIs Revolution in NFT Image Generation"
                            title="AI NFT Image Generator Development Company"
                            className="img-fluid"
                          />
                        </div>
                        <div className="content_sec">
                          <div className="sub_title">
                            AI NFT Image Generator Development Company
                          </div>
                          <p className="sub_contents">
                            {" "}
                            The combination of Non-Fungible Tokens (NFTs) and
                            Artificial Intelligence (AI) has spurred a
                            revolutionary movement in the art world in recent
                            years.
                          </p>
                        </div>
                      </a>
                      <div className="bottom_sec">
                        {/* <form action="" method="post"> */}
                        <div className="like_sec">
                          <button
                            className="btn like_sec_btn"
                            onclick="likes_count(267)"
                          >
                            <i className="fa fa-thumbs-up" />
                          </button>
                          <span id={267}>6</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12">
                    <div className="popular_tab_box">
                      <div className="category_btn_sec">
                        <a href className="category_btn">
                          AI{" "}
                        </a>
                      </div>
                      <a href="" className target="_blank">
                        <div className="img_sec">
                          <img
                            src="/images/elevent-of-chat-gpt.webp"
                            alt="The Evolution of AI with ChatGPT for IT"
                            title="The Evolution of AI with ChatGPT for IT"
                            className="img-fluid"
                          />
                        </div>
                        <div className="content_sec">
                          <div className="sub_title">
                            The Evolution of AI with ChatGPT for IT
                          </div>
                          <p className="sub_contents">
                            {" "}
                            With the state-of-the-art ChatGPT for IT from
                            MetaBlock Technologies, you can improve your IT
                            systems and transform business interactions. Welcome
                            to the technological future...
                          </p>
                        </div>
                      </a>
                      <div className="bottom_sec">
                        {/* <form action="" method="post"> */}
                        <div className="like_sec">
                          <button
                            className="btn like_sec_btn"
                            onclick="likes_count(266)"
                          >
                            <i className="fa fa-thumbs-up" />
                          </button>
                          <span id={266}>25</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12">
                    <div className="popular_tab_box">
                      <div className="category_btn_sec">
                        <a href className="category_btn">
                          AI{" "}
                        </a>
                      </div>
                      <a href="" className target="_blank">
                        <div className="img_sec">
                          <img
                            src="./images/ai-customer-supports.webp"
                            alt="Top 10 AI Business Ideas to Revolutionize Industries  In 2023"
                            title="Top 10 AI Business Ideas to Revolutionize Industries  In 2023"
                            className="img-fluid"
                          />
                        </div>
                        <div className="content_sec">
                          <div className="sub_title">
                            Top 10 AI Business Ideas to Revolutionize Industries
                            In 2023
                          </div>
                          <p className="sub_contents">
                            {" "}
                            With MetaBlock Technologies, the top AI development
                            specialists, discover the Top 10 AI Business Ideas
                            that are redefining various sectors. Unlock
                            limitless possibilities by using...
                          </p>
                        </div>
                      </a>
                      <div className="bottom_sec">
                        {/* <form action="" method="post"> */}
                        <div className="like_sec">
                          <button
                            className="btn like_sec_btn"
                            onclick="likes_count(264)"
                          >
                            <i className="fa fa-thumbs-up" />
                          </button>
                          <span id={264}>16</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-12">
                    <div className="popular_tab_box">
                      <div className="category_btn_sec">
                        <a href className="category_btn">
                          AI{" "}
                        </a>
                      </div>
                      <a href="" className target="_blank">
                        <div className="img_sec">
                          <img
                            src="./images/elevent-of-chat-gpt.webp"
                            alt="Explore More Topics"
                            title="Explore More Topics"
                            className="img-fluid"
                          />
                        </div>
                        <div className="content_sec content_sec1">
                          <div className="sub_title">
                            Elevate Your Customer Support - Build a Custom
                            ChatGPT App!
                          </div>
                          <p className="sub_contents">
                            Artificial intelligence (AI) has made significant
                            strides in natural language processing recently,
                            leading to the development of complex language...
                          </p>
                        </div>
                      </a>
                      <div className="bottom_sec">
                        <div className="like_sec">
                          <button
                            className="btn like_sec_btn"
                            onclick="likes_count(263)"
                          >
                            <i className="fa fa-thumbs-up" />
                          </button>
                          <span id={263}>12</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade "
                id="metaverse-"
                role="tabpanel"
                aria-labelledby="metaverse-_tab"
              >
                <div className="row justify-content-center">
                  <div className="col-lg-7 col-12">
                    <div className="popular_box">
                      <a href="" className target="_blank">
                        <div className="img_sec">
                          <img
                            src="./images/metaverse-virtual-office.webp"
                            alt="Metaverse Virtual Office Development Company"
                            title="Virutalizing the workspace: Building the Virutal Offices of tomorrow"
                          />
                        </div>
                        <div className="sub_title">
                          Virutalizing the workspace: Building the Virutal
                          Offices of tomorrow
                        </div>
                        <p className="sub_contents">
                          In the digital age, the nature of labour is evolving
                          swiftly. The concept of a metaverse office is gaining
                          traction as technology develops. ...
                        </p>
                      </a>
                      <div className="like_sec">
                        <button
                          className="btn like_sec_btn like_big"
                          onclick="likes_count(297)"
                        >
                          <i className="fa fa-thumbs-up" />
                        </button>
                        <span className="likes_count" id={297}>
                          0
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-lg-5 col-12">
                    <div className="popular_right_sec">
                      <div className="title_sec">
                        <div className="title">Popular on</div>
                      </div>
                      <div className="popular_list_sec">
                        <div className="popular_list">
                          <div className="row align-items-center">
                            <div className="col-lg-2 col-12">
                              <div className="num_sec">01</div>
                            </div>
                            <div className="col-lg-10 col-12">
                              <a href="" className target="_blank">
                                <div className="sub_contents">
                                  Top Notch Software Development Company in
                                  India
                                </div>
                                <div className="bottom_sec">
                                  <div className="read_head">
                                    Read full article
                                  </div>
                                  <div className="date">Dec 28, 2018</div>
                                </div>
                              </a> 
                            </div>
                            <div className="col-lg-2 col-12">
                              <div className="num_sec">02</div>
                            </div>
                            <div className="col-lg-10 col-12">
                              <a href=" " className target="_blank">
                                <div className="sub_contents">
                                  INTELLIGENT APPS - BE FINE AND SHINE WITH
                                  ARTIFICIAL INTELLIGENCE
                                </div>
                                <div className="bottom_sec">
                                  <div className="read_head">
                                    Read full article
                                  </div>
                                  <div className="date">Mar 27, 2019</div>
                                </div>
                              </a>
                            </div>
                            <div className="col-lg-2 col-12">
                              <div className="num_sec">03</div>
                            </div>
                            <div className="col-lg-10 col-12">
                              <a href="" className target="_blank">
                                <div className="sub_contents">
                                  AMASS THE FASCINATING FACTS OF ANDROID 9 PIE
                                  VS iOS 12
                                </div>
                                <div className="bottom_sec">
                                  <div className="read_head">
                                    Read full article
                                  </div>
                                  <div className="date">Mar 27, 2019</div>
                                </div>
                              </a>
                            </div>
                            <div className="col-lg-2 col-12">
                              <div className="num_sec">04</div>
                            </div>
                            <div className="col-lg-10 col-12">
                              <a href="" className target="_blank">
                                <div className="sub_contents">
                                  DIGITAL MARKETING - THE EVERLASTING STRATEGY
                                  INTHE BUSINESS WORLD
                                </div>
                                <div className="bottom_sec">
                                  <div className="read_head">
                                    Read full article
                                  </div>
                                  <div className="date">Apr 20, 2019</div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
               
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-12">
                    <div className="popular_tab_box">
                      <div className="category_btn_sec">
                        <a href className="category_btn">
                          Metaverse{" "}
                        </a>
                      </div>
                      <a href=" " className target="_blank">
                        <div className="img_sec">
                          <img
                            src="./images/revolution-in-icc.webp"
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
                            Greetings from a new era of immersive cricket, where
                            fans become virtual legends and technology merges
                            with reality. Approach the fold at the centre of the
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
                  <div className="col-lg-4 col-12">
                    <div className="popular_tab_box">
                      <div className="category_btn_sec">
                        <a href className="category_btn">
                          Metaverse{" "}
                        </a>
                      </div>
                      <a href="" className target="_blank">
                        <div className="img_sec">
                          <img
                            src="./images/metaverse-application-develop.webp"
                            alt="Explore the Applications and Benefits of Metaverse in Business"
                            title="Explore the Applications and Benefits of Metaverse in Business"
                            className="img-fluid"
                          />
                        </div>
                        <div className="content_sec">
                          <div className="sub_title">
                            Explore the Applications and Benefits of Metaverse
                            in Business
                          </div>
                          <p className="sub_contents">
                            {" "}
                            The Metaverse, sometimes called the "next frontier"
                            of the digital world, is a huge networked virtual
                            world that seamlessly combines the actual and
                            virtual worlds.
                          </p>
                        </div>
                      </a>
                      <div className="bottom_sec">
                        {/* <form action="" method="post"> */}
                        <div className="like_sec">
                          <button
                            className="btn like_sec_btn"
                            onclick="likes_count(279)"
                          >
                            <i className="fa fa-thumbs-up" />
                          </button>
                          <span id={279}>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12">
                    <div className="popular_tab_box">
                      <div className="category_btn_sec">
                        <a href className="category_btn">
                          Metaverse{" "}
                        </a>
                      </div>
                      <a href="" className target="_blank">
                        <div className="img_sec">
                          <img
                            src="./images/metaverse-development-guide.webp"
                            alt="All-encompassed Metaverse Development Guide for 2023 and Beyond"
                            title="All-encompassed Metaverse Development Guide for 2023 and Beyond"
                            className="img-fluid"
                          />
                        </div>
                        <div className="content_sec">
                          <div className="sub_title">
                            All-encompassed Metaverse Development Guide for 2023
                            and Beyond
                          </div>
                          <p className="sub_contents">
                            {" "}
                            In a time of swift technological progress, the idea
                            of the Metaverse appears as a novel frontier. It
                            symbolises a virtual unity.
                          </p>
                        </div>
                      </a>
                      <div className="bottom_sec">
                        {/* <form action="" method="post"> */}
                        <div className="like_sec">
                          <button
                            className="btn like_sec_btn"
                            onclick="likes_count(275)"
                          >
                            <i className="fa fa-thumbs-up" />
                          </button>
                          <span id={275}>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-12">
                    <div className="popular_tab_box">
                      <div className="category_btn_sec">
                        <a href className="category_btn">
                          Metaverse{" "}
                        </a>
                      </div>
                      <a href="" className target="_blank">
                        <div className="img_sec">
                          <img
                            src="./images/revolution-in-icc.webp"
                            alt="Explore More Topics"
                            title="Explore More Topics"
                            className="img-fluid"
                          />
                        </div>
                        <div className="content_sec content_sec1">
                          <div className="sub_title">
                            Metaverse Meets Commerce: The Future of E-Commerce
                            in Virtual Worlds
                          </div>
                          <p className="sub_contents">
                            One amazing aspect of this change is how e-commerce
                            is seamlessly integrated into these virtual worlds
                            where avatars interact, explore, and p...
                          </p>
                        </div>
                      </a>
                      <div className="bottom_sec">
                        <div className="like_sec">
                          <button
                            className="btn like_sec_btn"
                            onclick="likes_count(272)"
                          >
                            <i className="fa fa-thumbs-up" />
                          </button>
                          <span id={272}>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-12">
                    <div className="popular_tab_box">
                      <div className="category_btn_sec">
                        <a href className="category_btn">
                          Metaverse{" "}
                        </a>
                      </div>
                      <a href="" className target="_blank">
                        <div className="img_sec">
                          <img
                            src="./images/9846845.webp"
                            alt="Explore More Topics"
                            title="Explore More Topics"
                            className="img-fluid"
                          />
                        </div>
                        <div className="content_sec">
                          <div className="sub_title">
                            2023 Insights: The Cost of Developing the Metaverse
                          </div>
                          <p className="sub_contents">
                            {" "}
                            More specifically, building a metaverse application
                            requires the combined efforts of designers,
                            developers, and the incorporation of advanced...
                          </p>
                        </div>
                      </a>
                      <div className="bottom_sec">
                        <div className="like_sec">
                          <button
                            className="btn like_sec_btn"
                            onclick="likes_count(271)"
                          >
                            <i className="fa fa-thumbs-up" />
                          </button>
                          <span id={271}>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade "
                id="cryptocurrency-exchange"
                role="tabpanel"
                aria-labelledby="cryptocurrency-exchange_tab"
              >
                <div className="row justify-content-center">
                  <div className="col-lg-7 col-12">
                    <div className="popular_box">
                      <a href="" className target="_blank">
                        <div className="img_sec">
                          <img src="./images/cryptoexchnage-clone.webp" />
                        </div>
                        <div className="sub_title">
                          Changelly Clone Script: A Budget-Friendly Solution to
                          Launch Your Own Cryptocurrency Exchange
                        </div>
                        <p className="sub_contents">
                          Launching your own cryptocurrency exchange is an
                          alluring benefit of the financial innovation made
                          possible by the cryptocurrency revolution.
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
                  {/* <div className="col-lg-5 col-12">
                    <div className="popular_right_sec">
                      <div className="title_sec">
                        <div className="title">Popular on</div>
                      </div>
                      <div className="popular_list_sec">
                        <div className="popular_list">
                          <div className="row align-items-center">
                            <div className="col-lg-2 col-12">
                              <div className="num_sec">01</div>
                            </div>
                            <div className="col-lg-10 col-12">
                              <a href="" className target="_blank">
                                <div className="sub_contents">
                                  Top Notch Software Development Company in
                                  India
                                </div>
                                <div className="bottom_sec">
                                  <div className="read_head">
                                    Read full article
                                  </div>
                                  <div className="date">Dec 28, 2018</div>
                                </div>
                              </a>
                            </div>
                            <div className="col-lg-2 col-12">
                              <div className="num_sec">02</div>
                            </div>
                            <div className="col-lg-10 col-12">
                              <a href="" className target="_blank">
                                <div className="sub_contents">
                                  INTELLIGENT APPS - BE FINE AND SHINE WITH
                                  ARTIFICIAL INTELLIGENCE
                                </div>
                                <div className="bottom_sec">
                                  <div className="read_head">
                                    Read full article
                                  </div>
                                  <div className="date">Mar 27, 2019</div>
                                </div>
                              </a>
                            </div>
                            <div className="col-lg-2 col-12">
                              <div className="num_sec">03</div>
                            </div>
                            <div className="col-lg-10 col-12">
                              <a href="" className target="_blank">
                                <div className="sub_contents">
                                  AMASS THE FASCINATING FACTS OF ANDROID 9 PIE
                                  VS iOS 12
                                </div>
                                <div className="bottom_sec">
                                  <div className="read_head">
                                    Read full article
                                  </div>
                                  <div className="date">Mar 27, 2019</div>
                                </div>
                              </a>
                            </div>
                            <div className="col-lg-2 col-12">
                              <div className="num_sec">04</div>
                            </div>
                            <div className="col-lg-10 col-12">
                              <a href="" className target="_blank">
                                <div className="sub_contents">
                                  DIGITAL MARKETING - THE EVERLASTING STRATEGY
                                  INTHE BUSINESS WORLD
                                </div>
                                <div className="bottom_sec">
                                  <div className="read_head">
                                    Read full article
                                  </div>
                                  <div className="date">Apr 20, 2019</div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-12">
                    <div className="popular_tab_box">
                      <div className="category_btn_sec">
                        <a href className="category_btn">
                          Cryptocurrency Exchange
                        </a>
                      </div>
                      <a href="" className target="_blank">
                        <div className="img_sec">
                          <img
                            src="./images/coindcx-clone-script.webp"
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
                            The well-known cryptocurrency exchange site CoinDCX
                            has attracted a lot of attention lately because of
                            its cutting-edge features and user-friendly
                            interface.
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
                  <div className="col-lg-4 col-12">
                    <div className="popular_tab_box">
                      <div className="category_btn_sec">
                        <a href className="category_btn">
                          Cryptocurrency Exchange
                        </a>
                      </div>
                      <a href="" className target="_blank">
                        <div className="img_sec">
                          <img
                            src="./images/next-gen-crypto.webp"
                            alt="Kraken Clone Script"
                            title="Kraken Clone Script: A Pathway for Next-Gen Crypto Exchange Success"
                            className="img-fluid"
                          />
                        </div>
                        <div className="content_sec">
                          <div className="sub_title">
                            Kraken Clone Script: A Pathway for Next-Gen Crypto
                            Exchange Success
                          </div>
                          <p className="sub_contents">
                            {" "}
                            There is an increasing need for trustworthy and safe
                            trading platforms in the fast-paced world of
                            cryptocurrencies. Businesses and entrepreneurs
                            hoping to v...
                          </p>
                        </div>
                      </a>
                      <div className="bottom_sec">
                        {/* <form action="" method="post"> */}
                        <div className="like_sec">
                          <button
                            className="btn like_sec_btn"
                            onclick="likes_count(289)"
                          >
                            <i className="fa fa-thumbs-up" />
                          </button>
                          <span id={289}>6</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12">
                    <div className="popular_tab_box">
                      <div className="category_btn_sec">
                        <a href className="category_btn">
                          Cryptocurrency Exchange
                        </a>
                      </div>
                      <a href="" className target="_blank">
                        <div className="img_sec">
                          <img
                            src="./images/crypto-exchange-bussiness.webp"
                            alt="How to Start a Crypto Exchange Business"
                            title="How to Start a Crypto Exchange Business From Scratch?"
                            className="img-fluid"
                          />
                        </div>
                        <div className="content_sec">
                          <div className="sub_title">
                            How to Start a Crypto Exchange Business From
                            Scratch?
                          </div>
                          <p className="sub_contents">
                            {" "}
                            Establishing a bitcoin firm is not your typical
                            commercial endeavour; it requires a well-thought-out
                            strategy in addition to passion...
                          </p>
                        </div>
                      </a>
                      <div className="bottom_sec">
                        {/* <form action="" method="post"> */}
                        <div className="like_sec">
                          <button
                            className="btn like_sec_btn"
                            onclick="likes_count(284)"
                          >
                            <i className="fa fa-thumbs-up" />
                          </button>
                          <span id={284}>8</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-12">
                    <div className="popular_tab_box">
                      <div className="category_btn_sec">
                        <a href className="category_btn">
                          Cryptocurrency Exchange
                        </a>
                      </div>
                      <a href="" className target="_blank">
                        <div className="img_sec">
                          <img
                            src="./images/bitfinex-clone-script.webp"
                            alt="Explore More Topics"
                            title="Explore More Topics"
                            className="img-fluid"
                          />
                        </div>
                        <div className="content_sec content_sec1">
                          <div className="sub_title">
                            Bitfinex clone script - Start Your Own
                            Cryptocurrency Exchange Platform Like Bitfinex
                          </div>
                          <p className="sub_contents">
                            Reputable bitcoin exchange developer firm MetaBlock
                            is skilled at creating flexible Bitfinex clone
                            scripts. Our products provide thoughtful, usable...
                          </p>
                        </div>
                      </a>
                      <div className="bottom_sec">
                        <div className="like_sec">
                          <button
                            className="btn like_sec_btn"
                            onclick="likes_count(278)"
                          >
                            <i className="fa fa-thumbs-up" />
                          </button>
                          <span id={278}>9</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-12">
                    <div className="popular_tab_box">
                      <div className="category_btn_sec">
                        <a href className="category_btn">
                          Cryptocurrency Exchange
                        </a>
                      </div>
                      <a href="" className target="_blank">
                        <div className="img_sec">
                          <img
                            src="./images/bybit-crypto-script.webp"
                            alt="Explore More Topics"
                            title="Explore More Topics"
                            className="img-fluid"
                          />
                        </div>
                        <div className="content_sec">
                          <div className="sub_title">
                            ByBit Clone Script - Start Your Crypto Exchange
                            Platform Similar to Bybit
                          </div>
                          <p className="sub_contents">
                            {" "}
                            One well-known cryptocurrency exchange development
                            firm that specialises in creating scalable Bybit
                            clone scripts is MetaBlock. We offer intelligent,
                            user-friendly...
                          </p>
                        </div>
                      </a>
                      <div className="bottom_sec">
                        <div className="like_sec">
                          <button
                            className="btn like_sec_btn"
                            onclick="likes_count(277)"
                          >
                            <i className="fa fa-thumbs-up" />
                          </button>
                          <span id={277}>15</span>
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
                      <a href="" className target="_blank">
                        <div className="img_sec">
                          <img
                            src="./images/blockchain-wallet-development.webp"
                            alt="blockchain wallet development "
                            title="Blockchain Wallet Development Company"
                          />
                        </div>
                        <div className="sub_title">
                          Blockchain Wallet Development Company
                        </div>
                        <p className="sub_contents">
                          Digital currencies that are independent of the
                          physical state of the sector have been introduced by
                          technology, completely revolutionising the
                          cryptocurrency market.
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
                  {/* <div className="col-lg-5 col-12">
                    <div className="popular_right_sec">
                      <div className="title_sec">
                        <div className="title">Popular on</div>
                      </div>
                      <div className="popular_list_sec">
                        <div className="popular_list">
                          <div className="row align-items-center">
                            <div className="col-lg-2 col-12">
                              <div className="num_sec">01</div>
                            </div>
                            <div className="col-lg-10 col-12">
                              <a href="" className target="_blank">
                                <div className="sub_contents">
                                  Top Notch Software Development Company in
                                  India
                                </div>
                                <div className="bottom_sec">
                                  <div className="read_head">
                                    Read full article
                                  </div>
                                  <div className="date">Dec 28, 2018</div>
                                </div>
                              </a>
                            </div>
                            <div className="col-lg-2 col-12">
                              <div className="num_sec">02</div>
                            </div>
                            <div className="col-lg-10 col-12">
                              <a href="" className target="_blank">
                                <div className="sub_contents">
                                  INTELLIGENT APPS - BE FINE AND SHINE WITH
                                  ARTIFICIAL INTELLIGENCE
                                </div>
                                <div className="bottom_sec">
                                  <div className="read_head">
                                    Read full article
                                  </div>
                                  <div className="date">Mar 27, 2019</div>
                                </div>
                              </a>
                            </div>
                            <div className="col-lg-2 col-12">
                              <div className="num_sec">03</div>
                            </div>
                            <div className="col-lg-10 col-12">
                              <a href="" className target="_blank">
                                <div className="sub_contents">
                                  AMASS THE FASCINATING FACTS OF ANDROID 9 PIE
                                  VS iOS 12
                                </div>
                                <div className="bottom_sec">
                                  <div className="read_head">
                                    Read full article
                                  </div>
                                  <div className="date">Mar 27, 2019</div>
                                </div>
                              </a>
                            </div>
                            <div className="col-lg-2 col-12">
                              <div className="num_sec">04</div>
                            </div>
                            <div className="col-lg-10 col-12">
                              <a href="" className target="_blank">
                                <div className="sub_contents">
                                  DIGITAL MARKETING - THE EVERLASTING STRATEGY
                                  INTHE BUSINESS WORLD
                                </div>
                                <div className="bottom_sec">
                                  <div className="read_head">
                                    Read full article
                                  </div>
                                  <div className="date">Apr 20, 2019</div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="row justify-content-center"></div>
              </div>
              <div
                className="tab-pane fade "
                id="game-development"
                role="tabpanel"
                aria-labelledby="game-development_tab"
              >
                <div className="row justify-content-center">
                  <div className="col-lg-7 col-12">
                    <div className="popular_box">
                      <a href="" className target="_blank">
                        <div className="img_sec">
                          <img
                            src="./images/the-future-gaming.webp"
                            alt="Blockchain Casino Game Development"
                            title="The Future of Gaming, a Revolutionizing Entertainment with Blockchain Casino Game"
                          />
                        </div>
                        <div className="sub_title">
                          The Future of Gaming, a Revolutionizing Entertainment
                          with Blockchain Casino Game
                        </div>
                        <p className="sub_contents">
                          Redefining the casino experience using Blockchain
                          Casino Game Development has become essential in the
                          constantly changing world of online gaming.
                          Transfer...
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
                  {/* <div className="col-lg-5 col-12">
                    <div className="popular_right_sec">
                      <div className="title_sec">
                        <div className="title">Popular on</div>
                      </div>
                      <div className="popular_list_sec">
                        <div className="popular_list">
                          <div className="row align-items-center">
                            <div className="col-lg-2 col-12">
                              <div className="num_sec">01</div>
                            </div>
                            <div className="col-lg-10 col-12">
                              <a href="" className target="_blank">
                                <div className="sub_contents">
                                  Top Notch Software Development Company in
                                  India
                                </div>
                                <div className="bottom_sec">
                                  <div className="read_head">
                                    Read full article
                                  </div>
                                  <div className="date">Dec 28, 2018</div>
                                </div>
                              </a>
                            </div>
                            <div className="col-lg-2 col-12">
                              <div className="num_sec">02</div>
                            </div>
                            <div className="col-lg-10 col-12">
                              <a href="" className target="_blank">
                                <div className="sub_contents">
                                  INTELLIGENT APPS - BE FINE AND SHINE WITH
                                  ARTIFICIAL INTELLIGENCE
                                </div>
                                <div className="bottom_sec">
                                  <div className="read_head">
                                    Read full article
                                  </div>
                                  <div className="date">Mar 27, 2019</div>
                                </div>
                              </a>
                            </div>
                            <div className="col-lg-2 col-12">
                              <div className="num_sec">03</div>
                            </div>
                            <div className="col-lg-10 col-12">
                              <a href="" className target="_blank">
                                <div className="sub_contents">
                                  AMASS THE FASCINATING FACTS OF ANDROID 9 PIE
                                  VS iOS 12
                                </div>
                                <div className="bottom_sec">
                                  <div className="read_head">
                                    Read full article
                                  </div>
                                  <div className="date">Mar 27, 2019</div>
                                </div>
                              </a>
                            </div>
                            <div className="col-lg-2 col-12">
                              <div className="num_sec">04</div>
                            </div>
                            <div className="col-lg-10 col-12">
                              <a href="" className target="_blank">
                                <div className="sub_contents">
                                  DIGITAL MARKETING - THE EVERLASTING STRATEGY
                                  INTHE BUSINESS WORLD
                                </div>
                                <div className="bottom_sec">
                                  <div className="read_head">
                                    Read full article
                                  </div>
                                  <div className="date">Apr 20, 2019</div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-12">
                    <div className="popular_tab_box">
                      <div className="category_btn_sec">
                        <a href className="category_btn">
                          Game Development
                        </a>
                      </div>
                      <a href="" className target="_blank">
                        <div className="img_sec">
                          <img
                            src="./images/exploring-the-potential.webp"
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
                            Rockstar Games' Grand Theft Auto (GTA) series is a
                            shining example of gaming brilliance and has earned
                            a place in the gaming hall of fame. Alongside the...
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
                  <div className="col-lg-4 col-12">
                    <div className="popular_tab_box">
                      <div className="category_btn_sec">
                        <a href className="category_btn">
                          Game Development
                        </a>
                      </div>
                      <a href="" className target="_blank">
                        <div className="img_sec">
                          <img
                            src="./images/cryptocurrency-revolutions.webp"
                            alt="Top 7 Blockchain Game Development Companies Shaping the Future in 2024 & 2025"
                            title="Top 7 Blockchain Game Development Companies of 2024"
                            className="img-fluid"
                          />
                        </div>
                        <div className="content_sec">
                          <div className="sub_title">
                            Top 7 Blockchain Game Development Companies of 2024
                          </div>
                          <p className="sub_contents">
                            {" "}
                            Explore the future of gaming with the top 7
                            blockchain-based studios that will be dominating the
                            market in 2024 and 2025. These creative businesses
                            comb...
                          </p>
                        </div>
                      </a>
                      <div className="bottom_sec">
                        {/* <form action="" method="post"> */}
                        <div className="like_sec">
                          <button
                            className="btn like_sec_btn"
                            onclick="likes_count(294)"
                          >
                            <i className="fa fa-thumbs-up" />
                          </button>
                          <span id={294}>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12">
                    <div className="popular_tab_box">
                      <div className="category_btn_sec">
                        <a href className="category_btn">
                          Game Development
                        </a>
                      </div>
                      <a href="" className target="_blank">
                        <div className="img_sec">
                          <img
                            src="./images/blockchain-game-new.webp"
                            alt="Illuvium Clone Script"
                            title="Decoding the Illuvium Phenomenon: A Comprehensive Guide for Blockchain Gaming Success with Clone Scripts  "
                            className="img-fluid"
                          />
                        </div>
                        <div className="content_sec">
                          <div className="sub_title">
                            Decoding the Illuvium Phenomenon: A Comprehensive
                            Guide for Blockchain Gaming Success with Clone
                            Scripts{" "}
                          </div>
                          <p className="sub_contents">
                            {" "}
                            Non-fungible tokens (NFTs) and decentralised finance
                            (DeFi) have swept the cryptocurrency market in
                            recent years. Among the most fascinating projects...
                          </p>
                        </div>
                      </a>
                      <div className="bottom_sec">
                        {/* <form action="" method="post"> */}
                        <div className="like_sec">
                          <button
                            className="btn like_sec_btn"
                            onclick="likes_count(292)"
                          >
                            <i className="fa fa-thumbs-up" />
                          </button>
                          <span id={292}>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-12">
                    <div className="popular_tab_box">
                      <div className="category_btn_sec">
                        <a href className="category_btn">
                          Game Development
                        </a>
                      </div>
                      <a href="" className target="_blank">
                        <div className="img_sec">
                          <img
                            src="./images/slot-new-game.webp"
                            alt="Explore More Topics"
                            title="Explore More Topics"
                            className="img-fluid"
                          />
                        </div>
                        <div className="content_sec content_sec1">
                          <div className="sub_title">
                            Slot Game Development Company
                          </div>
                          <p className="sub_contents">
                            A slot machine is a kind of gaming machine that has
                            three or more reels that spin when a button is
                            pressed. Slot machines are frequently found in
                            casinos. The aim is to ascertain...
                          </p>
                        </div>
                      </a>
                      <div className="bottom_sec">
                        <div className="like_sec">
                          <button
                            className="btn like_sec_btn"
                            onclick="likes_count(286)"
                          >
                            <i className="fa fa-thumbs-up" />
                          </button>
                          <span id={286}>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-12">
                    <div className="popular_tab_box">
                      <div className="category_btn_sec">
                        <a href className="category_btn">
                          Game Development
                        </a>
                      </div>
                      <a href="" className target="_blank">
                        <div className="img_sec">
                          <img
                            src="./images/imagination-of-alien.webp"
                            alt="Explore More Topics"
                            title="Explore More Topics"
                            className="img-fluid"
                          />
                        </div>
                        <div className="content_sec">
                          <div className="sub_title">
                            Design Cosmic Adventures Beyond Imagination with the
                            Alien Worlds Clone{" "}
                          </div>
                          <p className="sub_contents">
                            {" "}
                            New frontiers of creativity and engagement have been
                            made possible by the introduction of NFT-based
                            platforms in the broad and dynamic field of
                            blockchain gaming.
                          </p>
                        </div>
                      </a>
                      <div className="bottom_sec">
                        <div className="like_sec">
                          <button
                            className="btn like_sec_btn"
                            onclick="likes_count(285)"
                          >
                            <i className="fa fa-thumbs-up" />
                          </button>
                          <span id={285}>0</span>
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
                  <div className="col-lg-7 col-12">
                    <div className="popular_box">
                      <a href="" className target="_blank">
                        <div className="img_sec">
                          <img
                            src="./images/web-smart-contract.webp"
                            alt="Web3 Smart Contract Development Company"
                            title="Web3 Smart Contract Development | Web3 Smart Contract Development Services | MetaBlock "
                          />
                        </div>
                        <div className="sub_title">
                          Web3 Smart Contract Development | Web3 Smart Contract
                          Development Services | MetaBlock{" "}
                        </div>
                        <p className="sub_contents">
                          One of the top companies developing Web3 smart
                          contracts is MetaBlock. We help you by providing
                          extremely trustworthy, safe, and upgradable smart
                          contracts that are constructed to the...
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
                  {/* <div className="col-lg-5 col-12">
                    <div className="popular_right_sec">
                      <div className="title_sec">
                        <div className="title">Popular on</div>
                      </div>
                      <div className="popular_list_sec">
                        <div className="popular_list">
                          <div className="row align-items-center">
                            <div className="col-lg-2 col-12">
                              <div className="num_sec">01</div>
                            </div>
                            <div className="col-lg-10 col-12">
                              <a href="" className target="_blank">
                                <div className="sub_contents">
                                  Top Notch Software Development Company in
                                  India
                                </div>
                                <div className="bottom_sec">
                                  <div className="read_head">
                                    Read full article
                                  </div>
                                  <div className="date">Dec 28, 2018</div>
                                </div>
                              </a>
                            </div>
                            <div className="col-lg-2 col-12">
                              <div className="num_sec">02</div>
                            </div>
                            <div className="col-lg-10 col-12">
                              <a href="" className target="_blank">
                                <div className="sub_contents">
                                  INTELLIGENT APPS - BE FINE AND SHINE WITH
                                  ARTIFICIAL INTELLIGENCE
                                </div>
                                <div className="bottom_sec">
                                  <div className="read_head">
                                    Read full article
                                  </div>
                                  <div className="date">Mar 27, 2019</div>
                                </div>
                              </a>
                            </div>
                            <div className="col-lg-2 col-12">
                              <div className="num_sec">03</div>
                            </div>
                            <div className="col-lg-10 col-12">
                              <a href="" className target="_blank">
                                <div className="sub_contents">
                                  AMASS THE FASCINATING FACTS OF ANDROID 9 PIE
                                  VS iOS 12
                                </div>
                                <div className="bottom_sec">
                                  <div className="read_head">
                                    Read full article
                                  </div>
                                  <div className="date">Mar 27, 2019</div>
                                </div>
                              </a>
                            </div>
                            <div className="col-lg-2 col-12">
                              <div className="num_sec">04</div>
                            </div>
                            <div className="col-lg-10 col-12">
                              <a href="" className target="_blank">
                                <div className="sub_contents">
                                  DIGITAL MARKETING - THE EVERLASTING STRATEGY
                                  INTHE BUSINESS WORLD
                                </div>
                                <div className="bottom_sec">
                                  <div className="read_head">
                                    Read full article
                                  </div>
                                  <div className="date">Apr 20, 2019</div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-12">
                    <div className="popular_tab_box">
                      <div className="category_btn_sec">
                        <a href className="category_btn">
                          Web3
                        </a>
                      </div>
                      <a href="" className target="_blank">
                        <div className="img_sec">
                          <img
                            src="./images/web3-wallet-development.webp"
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
                            Web3 Wallet Development pioneer MetaBlock has years
                            of experience creating Web3 wallets. Users can
                            safely send, receive, and store data with the aid of
                            Help.
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
                  <div className="col-lg-4 col-12">
                    <div className="popular_tab_box">
                      <div className="category_btn_sec">
                        <a href className="category_btn">
                          Web3
                        </a>
                      </div>
                      <a href="" className target="_blank">
                        <div className="img_sec">
                          <img
                            src="./images/web-3-bussiness-idea.webp"
                            alt="Top 10 Web3 Business Ideas 2023"
                            title="Top 10 Web3 Business Ideas Start in 2023 "
                            className="img-fluid"
                          />
                        </div>
                        <div className="content_sec">
                          <div className="sub_title">
                            Top 10 Web3 Business Ideas Start in 2023{" "}
                          </div>
                          <p className="sub_contents">
                            {" "}
                            With its excellent services, MetaBlock, a leading
                            web3 development firm, facilitates your
                            cryptocurrency journey. Take off on your journey
                            with the best Web3 bus...
                          </p>
                        </div>
                      </a>
                      <div className="bottom_sec">
                        {/* <form action="" method="post"> */}
                        <div className="like_sec">
                          <button
                            className="btn like_sec_btn"
                            onclick="likes_count(243)"
                          >
                            <i className="fa fa-thumbs-up" />
                          </button>
                          <span id={243}>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12">
                    <div className="popular_tab_box">
                      <div className="category_btn_sec">
                        <a href className="category_btn">
                          Web3
                        </a>
                      </div>
                      <a href="" className target="_blank">
                        <div className="img_sec">
                          <img
                            src="./images/cryptocurrency-revolutions.webp"
                            alt="Web3 Game Development"
                            title="Web3 game development company - To develop Web3 game projects for structured platform in the Crypto Market"
                            className="img-fluid"
                          />
                        </div>
                        <div className="content_sec">
                          <div className="sub_title">
                            Web3 game development company - To develop Web3 game
                            projects for structured platform in the Crypto
                            Market
                          </div>
                          <p className="sub_contents">
                            {" "}
                            Leading Web3 game development business MetaBlock
                            provides world-class Premium Web3 game creation
                            services using state-of-the-art innovation.
                          </p>
                        </div>
                      </a>
                      <div className="bottom_sec">
                        {/* <form action="" method="post"> */}
                        <div className="like_sec">
                          <button
                            className="btn like_sec_btn"
                            onclick="likes_count(239)"
                          >
                            <i className="fa fa-thumbs-up" />
                          </button>
                          <span id={239}>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-12">
                    <div className="popular_tab_box">
                      <div className="category_btn_sec">
                        <a href className="category_btn">
                          Web3
                        </a>
                      </div>
                      <a href="" className target="_blank">
                        <div className="img_sec">
                          <img
                            src=""
                            alt="Explore More Topics"
                            title="Explore More Topics"
                            className="img-fluid"
                          />
                        </div>
                        <div className="content_sec content_sec1">
                          <div className="sub_title">
                            To launch crypto exchange development using Web3.0
                          </div>
                          <p className="sub_contents">
                            MetaBlock is the top Web3.0 Crypto Exchange
                            Development Company for projects and startups
                            wishing to take use of the advantages of the
                            next-generation...
                          </p>
                        </div>
                      </a>
                      <div className="bottom_sec">
                        <div className="like_sec">
                          <button
                            className="btn like_sec_btn"
                            onclick="likes_count(238)"
                          >
                            <i className="fa fa-thumbs-up" />
                          </button>
                          <span id={238}>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="blog_new_category_sec" id="blog_new_category_sec">
          <div className="container">
            <div className="title">Explore More Topics</div>
            <p className="contents">
              Ready to brush up on something new? We've got more to read right
              this way.
            </p>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-12">
                <a href="" target="_blank">
                  <div className="category_box">
                    <div className="sub_title">General</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <a href="" target="_blank">
                  <div className="category_box">
                    <div className="sub_title">Mobile App Development</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <a href="" target="_blank">
                  <div className="category_box">
                    <div className="sub_title">Web Development</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <a href="" target="_blank">
                  <div className="category_box">
                    <div className="sub_title">Cryptocurrency</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <a href="" target="_blank">
                  <div className="category_box">
                    <div className="sub_title">Hire Developers</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <a href="" target="_blank">
                  <div className="category_box">
                    <div className="sub_title">DAO</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <a href="" target="_blank">
                  <div className="category_box">
                    <div className="sub_title">Token Development</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <a href="" target="_blank">
                  <div className="category_box">
                    <div className="sub_title">ICO</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <a href="" target="_blank">
                  <div className="category_box">
                    <div className="sub_title">GameFi</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <a href="" target="_blank">
                  <div className="category_box">
                    <div className="sub_title">DeFi</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <a href="" target="_blank">
                  <div className="category_box">
                    <div className="sub_title">Blockchain </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <a href="" target="_blank">
                  <div className="category_box">
                    <div className="sub_title">NFT </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <a href="" target="_blank">
                  <div className="category_box">
                    <div className="sub_title">Web3</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <a href="" target="_blank">
                  <div className="category_box">
                    <div className="sub_title">Game Development</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <a href="" target="_blank">
                  <div className="category_box">
                    <div className="sub_title">Cryptocurrency Wallet</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <a href="" target="_blank">
                  <div className="category_box">
                    <div className="sub_title">Cryptocurrency Exchange</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <a href="" target="_blank">
                  <div className="category_box">
                    <div className="sub_title">Metaverse </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <a href="" target="_blank">
                  <div className="category_box">
                    <div className="sub_title">AI </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Blog;
