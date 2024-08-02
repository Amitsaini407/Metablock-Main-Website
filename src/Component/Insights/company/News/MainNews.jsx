import React from 'react'
import './MainNews.css'
import News from '../Announcement/News'

const MainNews = () => {

    return (
        <div className="news-container">
            <div className="news-container-inner">
                <h1 ><span className='grident-color-sub-title'>Testimonial</span></h1>
            </div>
            {/* <section className="overflow-hidden space">
                <div className="containere">
                    <div style={{ display: "flex", flexDirection: "row", gap: "20px" }} className="row">
                        <div className="col-lg-5 rowe-div">
                            <div className="testi-grid wow fadeInUp">
                                <div className="testi-grid_wrapper">
                                    <div>
                                        <div className="testi-grid_img"><img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1711152000&semt=sph" alt /></div>
                                        <div className="star-icon"><a href="#"><i className="fa-solid fa-star" /></a> <a href="#"><i className="fa-solid fa-star" /></a> <a href="#"><i className="fa-solid fa-star" /></a> <a href="#"><i className="fa-solid fa-star" /></a> <a href="#"><i className="fa-solid fa-star" /></a></div>
                                    </div>
                                    <div className="testi-grid_content">
                                        <p className="testi-grid_text">“Our knowledgeable technicians are happy to provide tips and advice on pool care, helping you understand how to best maintain your pool between service.”</p>
                                        <div className="testi-grid_profile">
                                            <div className="media-body">
                                                <h5 className="testi-grid_name">Alex Michel</h5>
                                                <p className="testi-grid_desig">Ui/Ux Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 rowe-div">
                            <div className="testi-grid wow fadeInUp">
                                <div className="testi-grid_wrapper">
                                    <div>
                                        <div className="testi-grid_img"><img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1711152000&semt=sph" alt /></div>
                                        <div className="star-icon"><a href="#"><i className="fa-solid fa-star" /></a> <a href="#"><i className="fa-solid fa-star" /></a> <a href="#"><i className="fa-solid fa-star" /></a> <a href="#"><i className="fa-solid fa-star" /></a> <a href="#"><i className="fa-solid fa-star" /></a></div>
                                    </div>
                                    <div className="testi-grid_content">
                                        <p className="testi-grid_text">“Our knowledgeable technicians are happy to provide tips and advice on pool care, helping you understand how to best maintain your pool between service.”</p>
                                        <div className="testi-grid_profile">
                                            <div className="media-body">
                                                <h5 className="testi-grid_name">Alex Michel</h5>
                                                <p className="testi-grid_desig">Ui/Ux Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 rowe-div">
                            <div className="testi-grid wow fadeInUp">
                                <div className="testi-grid_wrapper">
                                    <div>
                                        <div className="testi-grid_img"><img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1711152000&semt=sph" alt /></div>
                                        <div className="star-icon"><a href="#"><i className="fa-solid fa-star" /></a> <a href="#"><i className="fa-solid fa-star" /></a> <a href="#"><i className="fa-solid fa-star" /></a> <a href="#"><i className="fa-solid fa-star" /></a> <a href="#"><i className="fa-solid fa-star" /></a></div>
                                    </div>
                                    <div className="testi-grid_content">
                                        <p className="testi-grid_text">“Our knowledgeable technicians are happy to provide tips and advice on pool care, helping you understand how to best maintain your pool between service.”</p>
                                        <div className="testi-grid_profile">
                                            <div className="media-body">
                                                <h5 className="testi-grid_name">Alex Michel</h5>
                                                <p className="testi-grid_desig">Ui/Ux Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 rowe-div">
                            <div className="testi-grid wow fadeInUp">
                                <div className="testi-grid_wrapper">
                                    <div>
                                        <div className="testi-grid_img"><img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1711152000&semt=sph" alt /></div>
                                        <div className="star-icon"><a href="#"><i className="fa-solid fa-star" /></a> <a href="#"><i className="fa-solid fa-star" /></a> <a href="#"><i className="fa-solid fa-star" /></a> <a href="#"><i className="fa-solid fa-star" /></a> <a href="#"><i className="fa-solid fa-star" /></a></div>
                                    </div>
                                    <div className="testi-grid_content">
                                        <p className="testi-grid_text">“Our knowledgeable technicians are happy to provide tips and advice on pool care, helping you understand how to best maintain your pool between service.”</p>
                                        <div className="testi-grid_profile">
                                            <div className="media-body">
                                                <h5 className="testi-grid_name">Alex Michel</h5>
                                                <p className="testi-grid_desig">Ui/Ux Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className=" testimonials-elements-block1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="testimonials-style1__content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="testimonials-new-div theme_carousel testimonials-carousel_1 owl-dot-style1 owl-theme owl-carousel" data-options="{&quot;loop&quot;: true, &quot;margin&quot;: 30, &quot;autoheight&quot;:true, &quot;lazyload&quot;:true, &quot;nav&quot;: false, &quot;dots&quot;: true, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 6000, &quot;smartSpeed&quot;: 300, &quot;responsive&quot;:{ &quot;0&quot; :{ &quot;items&quot;: &quot;1&quot; }, &quot;600&quot; :{ &quot;items&quot; : &quot;1&quot; }, &quot;768&quot; :{ &quot;items&quot; : &quot;1&quot; } , &quot;992&quot;:{ &quot;items&quot; : &quot;2&quot; }, &quot;1200&quot;:{ &quot;items&quot; : &quot;3&quot; }}}">
                                    {/*Start Single Testimonials Style1*/}
                                    <div className="single-testimonials-style1 col-xl-4">
                                        <div className="client-info">
                                            <div className="img-box">
                                                <img src="https://picsum.photos/130/130?image=1027" alt />
                                            </div>
                                            <div className="title-box">
                                                <h3 className='grident-color-sub-title'>Deepak</h3>
                                                <span className='span-of-testi'>Web Designer</span>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            <div className="date-box"><p>29 feb,2024</p></div>
                                        </div>
                                    </div>

                                    <div className="single-testimonials-style1 col-xl-4">
                                        <div className="client-info">
                                            <div className="img-box">
                                                <img src="https://picsum.photos/130/130?image=1027" alt />
                                            </div>
                                            <div className="title-box">
                                                <h3 className='grident-color-sub-title'>Deepak</h3>
                                                <span className='span-of-testi'>Web Designer</span>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            <div className="date-box"><p>29 feb,2024</p></div>
                                        </div>
                                    </div>
                                    <div className="single-testimonials-style1 col-xl-4">
                                        <div className="client-info">
                                            <div className="img-box">
                                                <img src="https://picsum.photos/130/130?image=1027" alt />
                                            </div>
                                            <div className="title-box">
                                                <h3 className='grident-color-sub-title'>Deepak</h3>
                                                <span className='span-of-testi'>Web Designer</span>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            <div className="date-box"><p>29 feb,2024</p></div>
                                        </div>
                                    </div>

                                </div>
                                <div style={{ marginTop: "20px" }} className="testimonials-new-div theme_carousel testimonials-carousel_1 owl-dot-style1 owl-theme owl-carousel" data-options="{&quot;loop&quot;: true, &quot;margin&quot;: 30, &quot;autoheight&quot;:true, &quot;lazyload&quot;:true, &quot;nav&quot;: false, &quot;dots&quot;: true, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 6000, &quot;smartSpeed&quot;: 300, &quot;responsive&quot;:{ &quot;0&quot; :{ &quot;items&quot;: &quot;1&quot; }, &quot;600&quot; :{ &quot;items&quot; : &quot;1&quot; }, &quot;768&quot; :{ &quot;items&quot; : &quot;1&quot; } , &quot;992&quot;:{ &quot;items&quot; : &quot;2&quot; }, &quot;1200&quot;:{ &quot;items&quot; : &quot;3&quot; }}}">
                                    {/*Start Single Testimonials Style1*/}
                                    <div className="single-testimonials-style1 col-xl-4">
                                        <div className="client-info">
                                            <div className="img-box">
                                                <img src="https://picsum.photos/130/130?image=1027" alt />
                                            </div>
                                            <div className="title-box">
                                                <h3 className='grident-color-sub-title'>Deepak</h3>
                                                <span className='span-of-testi'>Web Designer</span>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            <div className="date-box"><p>29 feb,2024</p></div>
                                        </div>
                                    </div>

                                    <div className="single-testimonials-style1 col-xl-4">
                                        <div className="client-info">
                                            <div className="img-box">
                                                <img src="https://picsum.photos/130/130?image=1027" alt />
                                            </div>
                                            <div className="title-box">
                                                <h3 className='grident-color-sub-title'>Deepak</h3>
                                                <span className='span-of-testi'>Web Designer</span>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            <div className="date-box"><p>29 feb,2024</p></div>
                                        </div>
                                    </div>
                                    <div className="single-testimonials-style1 col-xl-4">
                                        <div className="client-info">
                                            <div className="img-box">
                                                <img src="https://picsum.photos/130/130?image=1027" alt />
                                            </div>
                                            <div className="title-box">
                                                <h3 className='grident-color-sub-title'>Deepak</h3>
                                                <span className='span-of-testi'>Web Designer</span>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            <div className="date-box"><p>29 feb,2024</p></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default MainNews