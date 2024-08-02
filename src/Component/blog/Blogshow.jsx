import React, {useState,useEffect} from "react";
import { convertToIST } from "../../helper/formatFunctions";
import "./Blog.css";
import {useParams} from 'react-router-dom';
import axios from 'axios'

const Blogshow = () => {
  // const blogPosts = [
  //   {
  //     _id: "66190f1f6e51fb707927efc1",
  //     //   heading: "Winning the Devils Bargain: Fight against Substance Abuse",
  //     subHeading: "asdfasdf",
  //     tags: [
  //       "#MetaBlockTechnologies",
  //       "#Website",
  //       "#mobilegames",
  //       "#Blockchain",
  //     ],

  //     description:
  //       '<h1>Substance Abuse Among Youth: A Public Health Concern</h1><p>Substance abuse among youth is a significant public health concern that affects individuals, families, and communities worldwide. Understanding the causes, consequences, and preventive measures associated with youth substance abuse is crucial to mitigate its impact on young people\'s lives and foster a healthier future for generations to come.</p><p>Startling statistics by National Survey on Drug Use and Health reveal that almost 53% of full-time college students have indulged in alcohol consumption within the past month, while a staggering 33% have engaged in binge drinking—consuming more than five drinks at a time. These figures not only paint a troubling picture but also hint at a profound need to understand and prevent substance abuse among our youth.</p><p>Now that we have established that Substance abuse is a worldwide concern, we shall now focus on the ongoing prevalence of substance abuse that has cast its shadows on countless nations and cities. To understand the prevalence of substance abuse, we need to first understand the causes and risk factors associated with the same. While the prevalence rates may vary across countries and regions, the overarching global picture reveals a concerning trend. According to the World Health Organization (WHO), approximately 12% of young people aged 15-19 engage in substance abuse, with alcohol being the most commonly abused substance, followed by tobacco and illicit drugs.</p><p>Some of the most common factors that push the youth down the dark alley of Substance Abuse include Social and Environmental Factors, Mental health conditions, and Past traumatic experiences.</p><p>A major contributor to increasing substance abuse is due an unhealthy persuading social circle. Meeting regularly in places where alcohol and other means of substance abuse are in close vicinity makes it irresistible to avoid consumption. Moreover, it has become the social norm to celebrate birthdays, parties and events with alcohol.</p><p>Youth grappling with conditions like depression, anxiety, and ADHD often find themselves drawn towards substance abuse as a fleeting source of temporary relief and solace. These substances serve as momentary escapes, providing a semblance of happiness and respite from their underlying mental health challenges.</p><h2>Past traumatic experiences:</h2><p>Childhood traumas and Adverse Childhood Experiences (ACEs) have been identified as significant factors contributing to teenage substance abuse. The impact of events like family divorces, and physical, mental, and sexual child abuse can be profound, pushing teenagers towards seeking solace in alcohol and drugs as a means to escape from these traumatic experiences.</p><p>It is a common habit amongst youth to live by the Try-one/Experience-one ideology and end up developing an uncontrollable urge to live that experience multiple times. Now, if we were to take a step back and think about it. What develops that urge to experience that momentary pleasure? Is it a necessity of the physical body or our captivated mind?</p><p>Let us understand the same using a very popular analogy. Have you heard of the term “Devil’s Bargain”? It is a deal that provides us with momentary pleasures in return for detrimental destructive consequences in the near future. For example, you have a very critical meeting with your boss tomorrow at 8 am. You were inconsiderate of the cruciality of it and watched Netflix until 3 am the same morning. You woke up just in time for the meeting but had a terrible headache. The meeting didn’t go as well as planned.</p><p>Why? It’s because you fell into the trap of the devil’s bargain. You traded your precious sleep, rest and a calm state of mind with momentary thrill and pleasure, only to bear the price later.</p><p>The substance abuse game is no different. The first time someone tries it, it is curiosity. The second time someone tries it, it is thrilling. By the third time, it becomes a necessity. People end up falling into a never-ending devil’s bargain wherein they keep trading their time, money and mental state in exchange for momentary pleasures. Soon this bargain develops into dependency.</p><p>How to target it? How can we remedy the situation?</p><p>The unseemingly rising affliction must be caught at its root- the human mind. For those who argue that they indulge in such practices only to leave behind a world full of sorrows and grief, here’s a thought to ponder upon, Will the situation be better when you will gain back your consciousness? Does permanently seeking solace in the bounds of unconsciousness solve the problem for you?</p><p>The wise have said, "Forgetting sorrows is one thing while annihilating sorrows from the root is something else altogether." The situation of a drunker is like that of a pigeon that closes its eyes on seeing the sharp nails of a cat. But, by closing its eyes, will the pigeon be saved from the deadly attack of the cat? Certainly not!</p><p>Implementing comprehensive education and awareness programs is a vital strategy for preventing youth substance abuse. By introducing accurate information about substances, their associated risks, and the consequences of abuse, these school-based prevention initiatives empower young individuals to make informed decisions.</p><p>Strengthening protective factors is equally important, focusing on cultivating healthy coping mechanisms, building resilience, fostering positive peer relationships, and nurturing strong family bonds.</p><p>Additionally, implementing policies that regulate the availability and accessibility of substances, such as age restrictions, taxation, and advertising restrictions, can serve as effective deterrents. Early intervention and treatment play a crucial role in identifying and addressing substance abuse problems promptly through counseling, therapy, and rehabilitation. Lastly, creating supportive and inclusive environments where young people feel connected, valued, and engaged contributes to protective factors against substance abuse.</p><p>Alongside these efforts, strict measures should be enforced to restrict college students’ access to places with alcohol availability. Together, these preventive measures aim to mitigate the prevalence of youth substance abuse and promote healthier choices among the younger generation.</p>',
  //     images: [
  //       "https://www.djjs.org/uploads/blog/99ad5ffb1fc78d7d4603cf51290a9eb6.png",
  //       "http://localhost:5000/files/images/image-1712900978416-133783390.png",
  //     ],
  //     category: "Sample Category",
  //     firstSubCategory: "First Subcategory",
  //     secondSubCategory: "Second Subcategory",
  //     thirdSubCategory: "",
  //     fourthSubCategory: "asdf",
  //     fifthSubCategory: "asdf",
  //     author: "Jayesh Vijay",
  //     createdAt: "2024-04-12T10:38:23.367Z",
  //     updatedAt: "2024-04-12T10:38:23.367Z",
  //     heading: "A Public Health Concern Youth",
  //   },
  // ];


  const { id } = useParams(); // Get blog ID from URL parameters
  const [blogPosts, setBlogPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/blog/${id}`);
        setBlogPosts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

console.log(blogPosts);
  return (
    <div>
      {/* {blogPosts?.map((post) => ( */}
        <div key={blogPosts?._id}>
          <div className="titlebar titlebar-sm scheme-dark bg-gray-2 bb-fade-black-005">
            <div className="titlebar-inner py-5">
              <div className="container titlebar-container">
                <div className="row titlebar-container">
                  <div
                    style={{ marginTop: "100px" }}
                    className="titlebar-col col-md-6"
                  >
                    <h1
                      style={{ textAlign: "start" }}
                      className="font-size-26 mb-1"
                    >
                      {" "}
                      {blogPosts?.title}
                    </h1>
                    <div className="font-size-14 text-fade-dark-06">
                      <ul className="entry-meta clearfix">
                        <li>{convertToIST(blogPosts?.createdDate)}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="titlebar-col col-md-6 text-md-right">
                    <ol className="breadcrumb reset-ul inline-nav">
                      <li>
                        <a>
                          <span>Home</span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <span>Blog</span>
                        </a>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section id="content">
            <div className="content-wrap pb-0">
              <div className="container clearfix">
                <div className="row">
                  <div className="col-md-8 ">
                    <div className="single-post nobottommargin">
                      <div className="pull-left addthis_toolbox addthis_default_style">
                        <a className="addthis_button_facebook_like" />
                        <a className="addthis_button_tweet" />
                        <a className="addthis_button_google_plusone" />
                        <a className="addthis_counter addthis_pill_style" />
                      </div>

                      <div className=" mb-3">
                        <img
                          style={{ margin: "0 auto" }}
                          src={`http://localhost:5000/blog/images/${blogPosts?.image}`}
                          alt={blogPosts?.title}
                          className="img-responsive"
                        />
                      </div>
                      <div className="entry clearfix">
                        <div className="clearfix" />
                        <div className="entry-content notopmargin">
                          <p
                            dangerouslySetInnerHTML={{
                              __html: blogPosts?.description,
                            }}
                          />
                          <div className="tagcloud clearfix">
                            <span
                              style={{ marginRight: 10 }}
                              className="pull-left"
                            >
                              <strong>TAGS</strong>
                            </span>
                            {/* {post.tags.map((tag, i) => (
                              <a key={i} href={`#${tag}`}>
                                {tag}
                              </a>
                            ))} */}
                          </div>
                          <div className="clear" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-md-offset-1 sidebar-container">
                    <aside className="main-sidebar">
                      <div className="widget widget_search mt-0">
                        <form style={{ display: "flex", gap: "10px" }}>
                          <label>
                            <input
                              style={{
                                height: "5vh",
                                background: "black",
                                border: "1px solid white",
                                color: "white",
                                borderRadius: "5px",
                              }}
                              type="search"
                              className="search-field"
                              placeholder="Search …"
                              name="searchval"
                            />
                          </label>
                          <button
                            style={{
                              width: "180px",
                              height: "5vh",
                              background: "black",
                              border: "1px solid white",
                              color: "white",
                              borderRadius: "5px",
                            }}
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                      <div className="widget widget_categories">
                        <div>
                          <section
                            className="blog_new_popular_sec"
                            id="blog_new_popular_sec"
                          >
                            <div className="container">
                              <div
                                className="nav flex-column nav-pills"
                                id="popular_tab_sec"
                                role="tablist"
                                aria-orientation="vertical"
                              >
                                <button
                                  className="nav-link active"
                                  id="ai-_tab"
                                  data-toggle="pill"
                                  data-target="#ai-"
                                  type="button"
                                  role="tab"
                                  aria-controls="ai-"
                                  aria-selected="false"
                                >
                                  <span>AI </span>
                                </button>
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
                              <div
                                className="tab-content"
                                id="popular_tab_content_sec"
                              >
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
                                              src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"
                                              alt="AI Crypto Trading Bot Development"
                                              title="The Future Is Now: Implementing Remunerative Strategies For AI Crypto Trading Bot Development"
                                            />
                                          </div>
                                          <div className="sub_title">
                                            The Future Is Now: Implementing
                                            Remunerative Strategies For AI
                                            Crypto Trading Bot Development
                                          </div>
                                        </a>
                                        <div className="like_sec">
                                          <button
                                            className="btn like_sec_btn like_big"
                                            onclick="likes_count(268)"
                                          >
                                            <i className="fa fa-thumbs-up" />
                                          </button>
                                          <span
                                            className="likes_count"
                                            id={268}
                                          >
                                            8
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                   
                                    <div className="col-lg-5 col-12">
                                      <div className="popular_box">
                                        <a href="" className target="_blank">
                                          <div className="img_sec">
                                            <img
                                              src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"
                                              alt="AI Crypto Trading Bot Development"
                                              title="The Future Is Now: Implementing Remunerative Strategies For AI Crypto Trading Bot Development"
                                            />
                                          </div>
                                          <div className="sub_title">
                                            The Future Is Now: Implementing
                                            Remunerative Strategies For AI
                                            Crypto Trading Bot Development
                                          </div>
                                        </a>
                                        <div className="like_sec">
                                          <button
                                            className="btn like_sec_btn like_big"
                                            onclick="likes_count(268)"
                                          >
                                            <i className="fa fa-thumbs-up" />
                                          </button>
                                          <span
                                            className="likes_count"
                                            id={268}
                                          >
                                            8
                                          </span>
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
                                              src="https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340"
                                              alt="Metaverse Virtual Office Development Company"
                                              title="Virutalizing the workspace: Building the Virutal Offices of tomorrow"
                                            />
                                          </div>
                                          <div className="sub_title">
                                            Virutalizing the workspace: Building
                                            the Virutal Offices of tomorrow
                                          </div>
                                        </a>
                                        <div className="like_sec">
                                          <button
                                            className="btn like_sec_btn like_big"
                                            onclick="likes_count(297)"
                                          >
                                            <i className="fa fa-thumbs-up" />
                                          </button>
                                          <span
                                            className="likes_count"
                                            id={297}
                                          >
                                            0
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-5 col-12">
                                      <div className="popular_box">
                                        <a href="" className target="_blank">
                                          <div className="img_sec">
                                            <img
                                              src="https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340"
                                              alt="Metaverse Virtual Office Development Company"
                                              title="Virutalizing the workspace: Building the Virutal Offices of tomorrow"
                                            />
                                          </div>
                                          <div className="sub_title">
                                            Virutalizing the workspace: Building
                                            the Virutal Offices of tomorrow
                                          </div>
                                        </a>
                                        <div className="like_sec">
                                          <button
                                            className="btn like_sec_btn like_big"
                                            onclick="likes_count(297)"
                                          >
                                            <i className="fa fa-thumbs-up" />
                                          </button>
                                          <span
                                            className="likes_count"
                                            id={297}
                                          >
                                            0
                                          </span>
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
                                            <img src="https://pixlr.com/images/index/ai-image-generator-one.webp" />
                                          </div>
                                          <div className="sub_title">
                                            Changelly Clone Script: A
                                            Budget-Friendly Solution to Launch
                                            Your Own Cryptocurrency Exchange
                                          </div>
                                          
                                        </a>
                                        <div className="like_sec">
                                          <button
                                            className="btn like_sec_btn like_big"
                                            onclick="likes_count(299)"
                                          >
                                            <i className="fa fa-thumbs-up" />
                                          </button>
                                          <span
                                            className="likes_count"
                                            id={299}
                                          >
                                            0
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-5 col-12">
                                      <div className="popular_box">
                                        <a href="" className target="_blank">
                                          <div className="img_sec">
                                            <img src="https://pixlr.com/images/index/ai-image-generator-one.webp" />
                                          </div>
                                          <div className="sub_title">
                                            Changelly Clone Script: A
                                            Budget-Friendly Solution to Launch
                                            Your Own Cryptocurrency Exchange
                                          </div>
                                        </a>
                                        <div className="like_sec">
                                          <button
                                            className="btn like_sec_btn like_big"
                                            onclick="likes_count(299)"
                                          >
                                            <i className="fa fa-thumbs-up" />
                                          </button>
                                          <span
                                            className="likes_count"
                                            id={299}
                                          >
                                            0
                                          </span>
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
                                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsBTErYdcKmWOILm28kRkxf-PqQ3TnLakH6gnUAsWLYA&s"
                                              alt="blockchain wallet development "
                                              title="Blockchain Wallet Development Company"
                                            />
                                          </div>
                                          <div className="sub_title">
                                            Blockchain Wallet Development
                                            Company
                                          </div>
                                          <p className="sub_contents">
                                            Digital currencies that are
                                            independent of the physical state of
                                            the sector have been introduced by
                                            technology, completely
                                            revolutionising the cryptocurrency
                                            market.
                                          </p>
                                        </a>
                                        <div className="like_sec">
                                          <button
                                            className="btn like_sec_btn like_big"
                                            onclick="likes_count(143)"
                                          >
                                            <i className="fa fa-thumbs-up" />
                                          </button>
                                          <span
                                            className="likes_count"
                                            id={143}
                                          >
                                            0
                                          </span>
                                        </div>
                                      </div>
                                                                  </div>
                                                                  <div className="col-lg-5   col-12">
                                      <div className="popular_box">
                                        <a href="" className target="_blank">
                                          <div className="img_sec">
                                            <img
                                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsBTErYdcKmWOILm28kRkxf-PqQ3TnLakH6gnUAsWLYA&s"
                                              alt="blockchain wallet development "
                                              title="Blockchain Wallet Development Company"
                                            />
                                          </div>
                                          <div className="sub_title">
                                            Blockchain Wallet Development
                                            Company
                                          </div>
                                          <p className="sub_contents">
                                            Digital currencies that are
                                            independent of the physical state of
                                            the sector have been introduced by
                                            technology, completely
                                            revolutionising the cryptocurrency
                                            market.
                                          </p>
                                        </a>
                                        <div className="like_sec">
                                          <button
                                            className="btn like_sec_btn like_big"
                                            onclick="likes_count(143)"
                                          >
                                            <i className="fa fa-thumbs-up" />
                                          </button>
                                          <span
                                            className="likes_count"
                                            id={143}
                                          >
                                            0
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    
                                  </div>
                                  
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
                                              src="https://img.freepik.com/premium-photo/cyberpunk-gaming-controller-gamepad-joystick-illustration_691560-5812.jpg"
                                              alt="Blockchain Casino Game Development"
                                              title="The Future of Gaming, a Revolutionizing Entertainment with Blockchain Casino Game"
                                            />
                                          </div>
                                          <div className="sub_title">
                                            The Future of Gaming, a
                                            Revolutionizing Entertainment with
                                            Blockchain Casino Game
                                          </div>
                                          <p className="sub_contents">
                                            Redefining the casino experience
                                            using Blockchain Casino Game
                                            Development has become essential in
                                            the constantly changing world of
                                            online gaming. Transfer...
                                          </p>
                                        </a>
                                        <div className="like_sec">
                                          <button
                                            className="btn like_sec_btn like_big"
                                            onclick="likes_count(298)"
                                          >
                                            <i className="fa fa-thumbs-up" />
                                          </button>
                                          <span
                                            className="likes_count"
                                            id={298}
                                          >
                                            0
                                          </span>
                                        </div>
                                      </div>
                                                                  </div>
                                                                  <div className="col-lg-5 col-12">
                                      <div className="popular_box">
                                        <a href="" className target="_blank">
                                          <div className="img_sec">
                                            <img
                                              src="https://img.freepik.com/premium-photo/cyberpunk-gaming-controller-gamepad-joystick-illustration_691560-5812.jpg"
                                              alt="Blockchain Casino Game Development"
                                              title="The Future of Gaming, a Revolutionizing Entertainment with Blockchain Casino Game"
                                            />
                                          </div>
                                          <div className="sub_title">
                                            The Future of Gaming, a
                                            Revolutionizing Entertainment with
                                            Blockchain Casino Game
                                          </div>
                                          <p className="sub_contents">
                                            Redefining the casino experience
                                            using Blockchain Casino Game
                                            Development has become essential in
                                            the constantly changing world of
                                            online gaming. Transfer...
                                          </p>
                                        </a>
                                        <div className="like_sec">
                                          <button
                                            className="btn like_sec_btn like_big"
                                            onclick="likes_count(298)"
                                          >
                                            <i className="fa fa-thumbs-up" />
                                          </button>
                                          <span
                                            className="likes_count"
                                            id={298}
                                          >
                                            0
                                          </span>
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
                                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXMtShbcXtcTU50yW4Q8aRPgS2rg4Z0F6qi1_fPRKQOg&s"
                                              alt="Web3 Smart Contract Development Company"
                                              title="Web3 Smart Contract Development | Web3 Smart Contract Development Services | MetaBlock "
                                            />
                                          </div>
                                          <div className="sub_title">
                                            Web3 Smart Contract Development |
                                            Web3 Smart Contract Development
                                            Services | MetaBlock{" "}
                                          </div>
                                          <p className="sub_contents">
                                            One of the top companies developing
                                            Web3 smart contracts is MetaBlock.
                                            We help you by providing extremely
                                            trustworthy, safe, and upgradable
                                            smart contracts that are constructed
                                            to the...
                                          </p>
                                        </a>
                                        <div className="like_sec">
                                          <button
                                            className="btn like_sec_btn like_big"
                                            onclick="likes_count(253)"
                                          >
                                            <i className="fa fa-thumbs-up" />
                                          </button>
                                          <span
                                            className="likes_count"
                                            id={253}
                                          >
                                            0
                                          </span>
                                        </div>
                                      </div>
                                                                  </div>
                                                                  <div className="col-lg-5 col-12">
                                      <div className="popular_box">
                                        <a href="" className target="_blank">
                                          <div className="img_sec">
                                            <img
                                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXMtShbcXtcTU50yW4Q8aRPgS2rg4Z0F6qi1_fPRKQOg&s"
                                              alt="Web3 Smart Contract Development Company"
                                              title="Web3 Smart Contract Development | Web3 Smart Contract Development Services | MetaBlock "
                                            />
                                          </div>
                                          <div className="sub_title">
                                            Web3 Smart Contract Development |
                                            Web3 Smart Contract Development
                                            Services | MetaBlock{" "}
                                          </div>
                                          <p className="sub_contents">
                                            One of the top companies developing
                                            Web3 smart contracts is MetaBlock.
                                            We help you by providing extremely
                                            trustworthy, safe, and upgradable
                                            smart contracts that are constructed
                                            to the...
                                          </p>
                                        </a>
                                        <div className="like_sec">
                                          <button
                                            className="btn like_sec_btn like_big"
                                            onclick="likes_count(253)"
                                          >
                                            <i className="fa fa-thumbs-up" />
                                          </button>
                                          <span
                                            className="likes_count"
                                            id={253}
                                          >
                                            0
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                   
                                  </div>
                               
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                                  </aside>
                                  
                                  <div className="aside-block">
  <h3  className="aside-title">Tags</h3>
  <ul className="aside-tags list-unstyled">
    <li>Ai</li>
    <li>Metaverse</li>
    <li>Cryptocurrency Exchange</li>
    <li> Cryptocurrency Wallet</li>
    <li>Game Development</li>
    <li>WEB 3</li>
  
  </ul>
</div>
                              </div>
                              
                         

                </div>
              </div>
            </div>
          </section>
        </div>
      {/* //  ) ) } */}
         <div className="d-flex align-items-center justify-content-center vh-100">
  <div className="container">
    <div className="row justify-content-center mb-4">
      <div style={{textAlign:"start"}} className="col-lg-8">
        <h5> 2 Comments</h5>
      </div>
    </div>
    <div className="row justify-content-center mb-4">
      <div className="col-lg-8">
        <div className="comments">
          <div className="comment d-flex mb-4">
            <div className="flex-shrink-0">
              <div className="avatar avatar-sm rounded-circle">
                <img
                  className="avatar-img"
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex-grow-1 ms-2 ms-sm-3">
              <div className="comment-meta d-flex align-items-baseline">
                <h6 className="me-2">Jordan Singer</h6>
                <span className="text-muted">2d</span>
              </div>
              <div style={{textAlign:"start"}} className="comment-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                minima ipsum at amet doloremque qui magni, placeat deserunt
                pariatur itaque laudantium impedit aliquam eligendi repellendus
                excepturi quibusdam nobis esse accusantium.
              </div>
              <div className="comment-replies bg-light p-3 mt-3 rounded">
                <h6 style={{textAlign:"start"}}  className="comment-replies-title mb-4 text-muted text-uppercase">
                  2 replies
                </h6>
                <div className="reply d-flex mb-4">
                  <div className="flex-shrink-0">
                    <div className="avatar avatar-sm rounded-circle">
                      <img
                        className="avatar-img"
                        src="https://images.unsplash.com/photo-1501325087108-ae3ee3fad52f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=f7f448c2a70154ef85786cf3e4581e4b"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-2 ms-sm-3">
                    <div className="reply-meta d-flex align-items-baseline">
                      <h6 style={{color:"black"}} className="mb-0 me-2">Brandon Smith</h6>
                      <span className="text-muted">2d</span>
                    </div>
                    <div style={{color:"black", textAlign:"start"}} className="reply-body">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </div>
                  </div>
                </div>
                <div className="reply d-flex">
                  <div className="flex-shrink-0">
                    <div className="avatar avatar-sm rounded-circle">
                      <img
                        className="avatar-img"
                        src="https://randomuser.me/api/portraits/men/4.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-2 ms-sm-3">
                    <div className="reply-meta d-flex align-items-baseline">
                      <h6 style={{color:"black"}} className="mb-0 me-2">James Parsons</h6>
                      <span className="text-muted">1d</span>
                    </div>
                    <div style={{color:"black",textAlign:"start"}} className="reply-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Distinctio dolore sed eos sapiente, praesentium.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="comment d-flex">
            <div className="flex-shrink-0">
              <div className="avatar avatar-sm rounded-circle">
                <img
                  className="avatar-img"
                  src="https://randomuser.me/api/portraits/women/63.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex-shrink-1 ms-2 ms-sm-3">
              <div className="comment-meta d-flex">
                <h6 className="me-2">Jenna Roberts</h6>
                <span className="text-muted">4d</span>
              </div>
              <div style={{textAlign:"start"}} className="comment-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                laborum in corrupti dolorum, quas delectus nobis porro
                accusantium molestias sequi.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="comment-form d-flex align-items-center">
          <div className="flex-shrink-0">
            <div className="avatar avatar-sm rounded-circle">
              <img
                className="avatar-img"
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200"
                alt=""
              />
            </div>
          </div>
          <div className="flex-grow-1 ms-2 ms-sm-3">
            <form style={{display:"flex",gap:"10px"}}>
              <textarea  style={{
        width: "100%", // Adjust this value as needed
        background: "black",
        border: "1px solid white",
        color: "white",
        borderRadius: "5px",
        resize: "none"
    }}
    className="py-0 px-1 border-0 blog-place"
    rows={1}
    placeholder="Start writing..."
    defaultValue={""}
                                      />
                                      <button style={{
                              width: "100px",
                              
                              background: "black",
                              border: "1px solid white",
                              color: "white",
                              borderRadius: "5px",
                            }}>
                                          Post
                                      </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Blogshow;
