// import React from 'react'
import "./Ourteam.css"
import { FaFacebook, FaTwitter, FaGooglePlus, FaLinkedin } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Ourteam = () => {

    const [ourteam, setOurTeam] = useState([]);

    useEffect(() => {
        fetchMembers();
    }, []);

    const fetchMembers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/team/getallmembers');
            setOurTeam(response.data.data.members);
        } catch (error) {
            console.error('Error fetching team members:', error);
        }
    };

      console.log(ourteam);

    // const ourteam = [
    //     {
    //         image: "./teams/deepak.webp",
    //         name: "Deepak",
    //         position: "Unity, AR/ VR/ Real Engine Developer",
    //         experience: "10+ Year"

    //     },
    //     {
    //         image: "https://picsum.photos/130/130?image=1027",

    //         name: "Ranjita Chaudhary",

    //         position: "Unity Developer",
    //         experience: "3.4+ Year"

    //     },
    //     {
    //         image: "./teams/saurabh.webp",
    //         name: "Sourabh Tirthani",
    //         position: "Blockchain Developer",
    //         experience: "4.5+ Year"
    //     },
    //     {
    //         image: "./teams/jayesh.webp",
    //         name: "Jayesh Vijay",
    //         position: "Full Stack MERN Developer",
    //         experience: "4.5+ Years"
    //     },
    //     {
    //         image: "./teams/nishant2.webp",
    //         name: "Nishant ",
    //         position: "Blockchain Developer",
    //         experience: "3+ Year"
    //     },
    //     {
    //         image: "./teams/shivam.webp",
    //         name: "Shivam Kalani",
    //         position: "MERN Stack Developer",
    //         experience: "3.2+ Year"
    //     },

    //     {
    //         image: "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.webp",

    //         name: "Umang Mathur",

    //         position: "Sr. Unity Developer",
    //         experience: "6+ Year"

    //     },
    //     {
    //         image: "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.webp",
    //         name: "Ashnal",
    //         position: "Node Developer",
    //         experience: "4.2+ Year"
    //     },
    //     {
    //         image: "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.webp",
    //         name: "Lucky Kumawat",
    //         position: "Full Stack Developer",
    //         experience: "3.5+ Year"
    //     },
    //     {
    //         image: "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.webp",
    //         name: "Navneet",
    //         position: "PHP Developer",
    //         experience: "6+ Year"
    //     },
    //     {
    //         image: "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.webp",
    //         name: "Sunil",
    //         position: "React Native",
    //         experience: "3+ Year"
    //     },
    //     {
    //         image: "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.webp",
    //         name: "Somendra",
    //         position: "sr. Unity Developer",
    //         experience: "6+ Year"
    //     },
    //     {
    //         image: "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.webp",
    //         name: "Arvind Joshi",
    //         position: "Android Developer",
    //         experience: "4+ Year"
    //     },
    //     {
    //         image: "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.webp",
    //         name: "Govind Mishra",
    //         position: "Full Stack Developer",
    //         experience: "3.5+ Year"
    //     },

    //     {
    //         image: "./teams/vishnu.webp",
    //         name: "Vishnu",
    //         position: "Frontend React Developer",
    //         experience: "2.5+ Year"
    //     },
    //     {
    //         image: "./teams/ekta.webp",

    //         name: "Ekta",
    //         position: "Business Development Manager",
    //         experience: "4+ Year"

    //     },

    //     {
    //         image: "https://picsum.photos/130/130?image=1027",
    //         name: "Laxmi",
    //         position: "Frontend React Developer",
    //         experience: "1.5+ Year"
    //     },
    //     {
    //         image: "https://picsum.photos/130/130?image=1027",

    //         name: "Rita Yadav",

    //         position: "Business Development Manager",
    //         experience: "4+ Year"

    //     },
    //     {
    //         image: "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.webp",
    //         name: "Krishna",
    //         position: "Sales & Marketing Specialist",
    //         experience: "5+ Year"
    //     },
    //     {
    //         image: "./teams/devanshu.webp",
    //         name: "Devanshu",
    //         position: "Frontend React Developer",
    //         experience: "3+ Year"
    //     },


    //     {
    //         image: "./teams/Mohit.webp",
    //         name: "Mohit",
    //         position: "Frontend React Developer",
    //         experience: "3+ Year"
    //     },
    //     {
    //         image: "./teams/aakarsh.webp",
    //         name: "Aakarsh",
    //         position: "Business Development Manager",
    //         experience: "3.5+ Year"
    //     },

    //     {
    //         image: "https://picsum.photos/130/130?image=1027",
    //         name: "Sneha Goyal",
    //         position: "Business Development Manager",
    //         experience: "4.5+ Year"
    //     },




    //     {
    //         image: "./teams/Avinash.webp",
    //         name: "Avinash",
    //         position: "Frontend React Developer",
    //         experience: "1+ Year"
    //     },
    //     {
    //         image: "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.webp",
    //         name: "Nagendra",
    //         position: "Sales & Marketing Specialist",
    //         experience: "8+ Year"
    //     },
    //     {
    //         image: "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.webp",
    //         name: "Navratan",
    //         position: "Frontend React Developer",
    //         experience: "3+ Year"
    //     },

    //     {
    //         image: "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.webp",
    //         name: "Aayush Sharma",
    //         position: "Sales Manager",
    //         experience: "3+ Year"
    //     },


    //     {
    //         image: "./teams/arjun.webp",
    //         name: "Arjun",
    //         position: "Web Desingner & Frontend Developer",
    //         experience: "1.5+ Year"
    //     },

    //     {
    //         image: "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.webp",
    //         name: "Lavish",
    //         position: "Graphics Designer",
    //         experience: "4+ Year"
    //     },
    //     {
    //         image: "https://picsum.photos/130/130?image=1027",
    //         name: "Sakshi",
    //         position: "Figma Designer",
    //         experience: "2+ Year"
    //     },
    //     {
    //         image: "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.webp",
    //         name: "Manish",
    //         position: "photoshop illustrator",
    //         experience: "4+ Year"
    //     },
    //     {
    //         image: "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.webp",
    //         name: "Priyansh",
    //         position: "Sr. Digital Marketing",
    //         experience: "4.5+ Year"
    //     },
    //     {
    //         image: "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.webp",
    //         name: "Ankal",
    //         position: "SEO Expert",
    //         experience: "7.5+ Year"
    //     },
    //     {
    //         image: "https://picsum.photos/130/130?image=1027",
    //         name: "Yukta",
    //         position: "Human Resource",
    //         experience: "2+ Year"
    //     },
    //     {
    //         image: "https://picsum.photos/130/130?image=1027",
    //         name: "Garima",
    //         position: "Software Tester",
    //         experience: "3.5+ Year"
    //     },

    //     {
    //         image: "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.webp",
    //         name: "Deepak Govind",
    //         position: "Software Tester",
    //         experience: "3+ Year"
    //     },
    // ]
    return (
        <div>
            <section className="breadcrumb_section breadcrumb_padd">
                <div className="container">

                </div>
            </section>

            <section className="Enterprise-container">
                <div className="Enterprise-boxes">
                    <div className="Enterprise-left-dive">
                        <h1 className=''>Lalit Gupta</h1>
                        <p className="about-text">
                            <span className='about-text-span' >Founder & CEO of MetaBlock
                            </span>
                            <p className='lalit-sir-about'>My journey has been a combination of technological innovation and spiritual enlightenment, having started from modest beginnings in Hindaun City, Rajasthan. I developed a strong affinity for mathematics while growing up in a tiny town, which ultimately inspired me to pursue higher education in Jaipur. Even though I was never much of an academic, spirituality provided me with a place to quench my curiosity.&nbsp;
                                <a target='_blank' href="https://www.linkedin.com/in/lalitgupta108/"><span>Read More...</span></a> </p>
                        </p>




                    </div>
                    <div className="Enterprise-right-dive">
                        <img style={{ height: "60vh", width: "400px" }} src='./teams/lalitsir.webp' alt="Founder & CEO of MetaBlock" />
                    </div>
                </div>
            </section>
            <section className="Enterprise-container">
                <div className="Enterprise-boxes">
                    <div className="Enterprise-right-dive">
                        <img style={{ height: "60vh" }} src="./teams/harsh-sir.webp" alt="Co-Founder & CTO" />
                    </div>
                    <div className="Enterprise-left-dive">
                        <h1 className=''>Harsh Gupta</h1>
                        <p className="about-text">
                            <span className='about-text-span' >Co-Founder  & CTO
                            </span>
                            <p className='lalit-sir-about'>Blockchain Development || Mern Development || React Development || React Native Development || Website Development || Software Development &nbsp;
                                <a target='_blank' href="https://www.linkedin.com/in/harsh-gupta-a9257b28b/"><span>Read More...</span></a> </p>
                        </p>

                    </div>

                </div>
            </section>

            {/* <div id="section-home" className="container-fluid about-section">
                <div style={{ display: "flex", gap: "40px" }} className="row about-row">
                    <div className="col-md-5 col-xs-12 fadeInUp team-texts-div">
                        <p className="about-text">
                            <h2 className="grident-color-sub-title">Lalit Gupta</h2>
                            <span style={{ fontFamily: "monospace" }}>Founder & CEO of MetaBlock
                            </span>
                            <p className='lalit-sir-about'>My journey has been a combination of technological innovation and spiritual enlightenment, having started from modest beginnings in Hindaun City, Rajasthan. I developed a strong affinity for mathematics while growing up in a tiny town, which ultimately inspired me to pursue higher education in Jaipur. Even though I was never much of an academic, spirituality provided me with a place to quench my curiosity.&nbsp;
                                <a target='_blank' href="https://www.linkedin.com/in/lalitgupta108/"><span>Read More...</span></a> </p>
                        </p>

                    </div>
                    <div className="col-md-5 col-xs-12 fadeInUp animated image-founder">
                        <img
                            src="https://img.freepik.com/free-photo/stylish-handsome-indian-man-tshirt-pastel-wall_496169-1571.webp"
                            className="img-circle img-responsive about-pic"
                        />
                    </div>

                </div>
            </div>

            <div id="section-home" className="container-fluid about-section">
                <div style={{ display: "flex", gap: "40px" }} className="row about-row">

                    <div className="col-md-5 col-xs-12 fadeInUp animated image-founder">
                        <img
                            src="https://img.freepik.com/free-photo/stylish-handsome-indian-man-tshirt-pastel-wall_496169-1571.webp"
                            className="img-circle img-responsive about-pic"
                        />
                    </div>
                    <div className="col-md-5 col-xs-12 fadeInUp team-texts-div">
                        <p className="about-text">
                            <h2 className="grident-color-sub-title">Harsh Gupta</h2>
                            <span style={{ fontFamily: "monospace" }}>Co-Founder  & CTO
                            </span>
                            <p className='lalit-sir-about'>Blockchain Development || Mern Development || React Development || React Native Development || Website Development || Software Development &nbsp;
                                <a target='_blank' href="https://www.linkedin.com/in/harsh-gupta-a9257b28b/"><span>Read More...</span></a> </p>
                        </p>

                    </div>
                </div>
            </div> */}

            <section className="breadcrumb_section breadcrumb_padd">
                <div className="container">
                    <h1> Team Member</h1>
                </div>
            </section>
            <div className="team-sections pt-125 pb-125">
                <div className="containere">
                    <div className="rowt mt-none-40">

                        <div className="col-xl-4 col-lg-6 col-md-6 mt-40">
                            <div className="team-boxe team-box__2">
                                <div className="team-box__thumb team-box__thumb--2" >
                                    <img style={{ height: "55vh" ,borderRadius:"5px"}} src="./teams/ajayyogi.webp" alt='Marketing Manager' />
                                </div>
                                <div className="team-box__content team-box__content--2">
                                    <h4 className="names grident-color-sub-title ">Ajay Yogi</h4>
                                    <span className="designationc">Marketing Manager
                                    </span>
                                    <div className="social-links social-links__2">
                                        <a href="https://wa.link/ctwxbo" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp" /></a>
                                        <a href="https://twitter.com/Ajay_yogi_553"><i className="fab fa-twitter" /></a>
                                        <a href="https://www.linkedin.com/in/hemant-yogi-b404152a2/"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="container-ourteam">
                <div className="row">
                    {/* {ourteam?.map(item => (

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="our-team">
                                <div className="picture">
                                    <img style={{ height: "23vh" }} className="img-fluid" src={item.image} />
                                </div>
                                <div className="team-content">
                                    <h3 className="name">{item.name}</h3>
                                    <h6 className="xle-ourteam">{item.position}</h6>
                                </div>
                                <ul className="social">
                                    <h5>{item.experience}</h5>
                                </ul>
                            </div>
                        </div>
                    ))} */}

{ourteam.length > 0 ? (
                        ourteam.map((item, index) => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                                <div className="our-team">
                                    <div className="picture">
                                        <img style={{ height: "23vh" }} className="img-fluid" src={`http://localhost:5000/team/images/${item.image}`} alt={item.name} />
                                    </div>
                                    <div className="team-content">
                                        <h3 className="name">{item.name}</h3>
                                        <h6 className="xle-ourteam">{item.position}</h6>
                                    </div>
                                    <ul className="social">
                                        <h5>{item.experience}</h5>
                                    </ul>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading team members...</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Ourteam
