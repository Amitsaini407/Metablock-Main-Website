import React from 'react'
import './WebApplicationMainPage.css'
import OnDemandAppSlider from './OnDemandAppSlider'
import CardSlider from './CardSlider'
import SimilarFile from '../SimilarFile'
import DeliveringNative from './Delivering Native/DeliveringNative'
import Phonecardslider from './Phonecardslider/Phonecardslider'

// import '../../main.css'

const WebApplicationMainPage = () => {
  return (
    <>
      <div className='main-div-Application'>
        <header className="enterprise-mobile-app-development arkit header-shadow">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-12 my-auto">
                <div className="header-content mx-auto">
                  <h1 className="mb-5">
                    {/* Blockchain Finance Management */}Mobile App Development Company</h1>
                  <h3 className="heading-tagline">From start-ups to enterprise-level, We render futuristic mobile applications with robust functionalities and cutting edge technologies to hit huge audience for your mobile app business. Leverage our complete mobile app services
                    to revolutionize the mobile app world with our outstanding strategies</h3>
                  {/* <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
                  <div className="text-center">
                    <a href="https://www.MetaBlocktechnologies.com/request-for-quotation" className="expert-btn">Request For Quote</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* <div className="container-fluid breadcrumb-sec">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="https://www.MetaBlocktechnologies.com/"><i style={{ fontSize: 16 }} className="fa fa-home" /> Home</a></li>
                <li className="breadcrumb-item active" aria-current="page"> Mobile App Development Company </li>
              </ol>
            </nav>
          </div>
        </div> */}
        {/* <section className="about" id="aboutus">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-sm-6 my-auto">
          <div className="section-heading text-left">
            <h2> Enterprise Mobility Solutions Provider</h2>
            <p>Mobile app development, a precise option to enhance your business potential. We MetaBlock Technologies - An industry-leading mobile app development company that provides enterprise-grade mobile app development services &amp; solutions for
              your business. We design and develop custom mobile applications for Android &amp; iOS platforms. We have 50+ mobile app developers who have in-depth knowledge of building customer-centric mobile applications as per the client requirements
              and deliver the product on time. </p>
            <p>Our experience of leading Enterprise Mobile Application Development Company Increases our comprehends that what a business requires in its work progress to become a brand. With this specialization, we have crossed over many of
              happy clients with the successful project completion. Our skilled developer team undergo for deep researching and planning as we knew every project is different and requires special attention, which helps them a lot to bring
              out a bug-free app. </p>
            <p>We are the right support elite to turn your ideas into realities beyond your expectation. We plan to deliver strategically configured and creatively crafted mobile application development services to hold a unique place in the
              app market that makes an exceptional footprint of your business among your respective customers.</p>
            <div className="talk_to_experts_btn_div mt-4 ">
              <a href="#" data-toggle="modal" data-target="#popup_form_modal" className="talk_to_experts_btn_a">Talk to Our Experts</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>  */}
        <section className='Enterprise-container'>
          <div className="Enterprise-box">
            <div className="Enterprise-left-div">
              <h2>Enterprise Mobility Solutions Provider</h2>
              <p>Mobile app development, a precise option to enhance your business potential. We MetaBlock Technologies - An industry-leading mobile app development company that provides enterprise-grade mobile app development services & solutions for your business. We design and develop custom mobile applications for Android & iOS platforms. We have 50+ mobile app developers who have in-depth knowledge of building customer-centric mobile applications as per the client requirements and deliver the product on time.
              </p>

              <p>
                Our experience of leading Enterprise Mobile Application Development Company Increases our comprehends that what a business requires in its work progress to become a brand. With this specialization, we have crossed over many of happy clients with the successful project completion. Our skilled developer team undergo for deep researching and planning as we knew every project is different and requires special attention, which helps them a lot to bring out a bug-free app.
              </p>

              <p>

                We are the right support elite to turn your ideas into realities beyond your expectation. We plan to deliver strategically configured and creatively crafted mobile application development services to hold a unique place in the app market that makes an exceptional footprint of your business among your respective customers.</p>

              <button type="button" data-toggle="modal" data-target="#popup_form_modal" class="btn BtnPrimry TlkBtn">
                <span>Talk to our Experts</span>
                <span>Talk to our Experts</span>
              </button>

            </div>
            <div className="Enterprise-right-div">
              <img src="/images/Who-we-are-bg3.webp" alt="Who-we-are-bg3" />
            </div>
          </div>
        </section>
        <section className="mid_section grey-bg">
          <div className="container">
            <div className="section-heading text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <h2>Premium Mobile Application Development Services</h2>
              <div className="why_round"> </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-lg-4">
                <div className="feature_1 enterprise_mobile_app_services">
                  <div className="spr_img_mob_dev testing_img" style={{ backgroundPosition: '10px 0px' }}>
                  </div>
                  <div className="feature-content_1">
                    <h2>Android App Development</h2>
                    <p>The revolutionization of mobile application is evolving chiefly because of Android.
                      We provide the trendy user interface and SDLC approach to reach your business to a higher level. We aim to render a unique With the seamless features in the application, we focus to deliver extreme quality outcome to our
                      clients. </p>
                  </div>
                  <div className="mobile_app_services_btn_div">
                    <a href="https://www.MetaBlocktechnologies.com/android-app-development" className="mobile_app_services_btn">READ MORE <i className="fa fa-angle-double-right" /></a>
                  </div>
                  {/* <p class="text-right" style="text-align: right;"><a href="https://www.MetaBlocktechnologies.com/android-app-development" class="rd_mr_btn">
                <span>READ MORE</span><span class="inr_arrow"><i class="fa fa-angle-double-right"></i></span></a>
                </p> */}
                </div>
              </div>
              <div className="col-sm-4 col-lg-4">
                <div className="feature_1 enterprise_mobile_app_services">
                  <div className="spr_img_mob_dev testing_img" style={{ backgroundPosition: '-65px 0px' }}>
                  </div>
                  <div className="feature-content_1">
                    <h2>Android Game Development</h2>
                    <p>We build dynamic android games with impressive, cheer up your android users. We
                      are a one-stop-shop for Android game app development with our innovative strategy that ceaselessly related to recent technologies. We build and deliver amazing games with  such as Unreal Engine, Unity,
                      Corona SDK, Lumberyard and Cocos2D-X.</p>
                  </div>
                  <div className="mobile_app_services_btn_div">
                    <a href="https://www.MetaBlocktechnologies.com/android-game-development" className="mobile_app_services_btn">READ MORE <i className="fa fa-angle-double-right" /></a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-lg-4">
                <div className="feature_1 enterprise_mobile_app_services">
                  <div className="spr_img_mob_dev testing_img" style={{ backgroundPosition: '-142px 0px' }}>
                  </div>
                  <div className="feature-content_1">
                    <h2>Android Tablet Development</h2>
                    <p>In this digital era, Android popularity is exploding. The reason why people.
                      growth remains the same. We enter into Android tablet development business to provide scalable and effective applications with fruitful features that range of user experience. Leverage our
                      top-notch script to get the first-rate Android tablet development </p>
                  </div>
                  <div className="mobile_app_services_btn_div">
                    <a href="https://www.MetaBlocktechnologies.com/android-tablet-development" className="mobile_app_services_btn">READ MORE <i className="fa fa-angle-double-right" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-lg-4">
                <div className="feature_1 enterprise_mobile_app_services">
                  <div className="spr_img_mob_dev testing_img" style={{ backgroundPosition: '10px 0px' }}>
                  </div>
                  <div className="feature-content_1">
                    <h2>Android App Development</h2>
                    <p>The revolutionization of mobile application is evolving chiefly because of Android.
                      We provide the trendy user interface and SDLC approach to reach your business to a higher level. We aim to render a unique With the seamless features in the application, we focus to deliver extreme quality outcome to our
                      clients. </p>
                  </div>
                  <div className="mobile_app_services_btn_div">
                    <a href="https://www.MetaBlocktechnologies.com/android-app-development" className="mobile_app_services_btn">READ MORE <i className="fa fa-angle-double-right" /></a>
                  </div>
                  {/* <p class="text-right" style="text-align: right;"><a href="https://www.MetaBlocktechnologies.com/android-app-development" class="rd_mr_btn">
                <span>READ MORE</span><span class="inr_arrow"><i class="fa fa-angle-double-right"></i></span></a>
                </p> */}
                </div>
              </div>
              <div className="col-sm-4 col-lg-4">
                <div className="feature_1 enterprise_mobile_app_services">
                  <div className="spr_img_mob_dev testing_img" style={{ backgroundPosition: '-65px 0px' }}>
                  </div>
                  <div className="feature-content_1">
                    <h2>Android Game Development</h2>
                    <p>We build dynamic android games with impressive, cheer up your android users. We
                      are a one-stop-shop for Android game app development with our innovative strategy that ceaselessly related to recent technologies. We build and deliver amazing games with  such as Unreal Engine, Unity,
                      Corona SDK, Lumberyard and Cocos2D-X.</p>
                  </div>
                  <div className="mobile_app_services_btn_div">
                    <a href="https://www.MetaBlocktechnologies.com/android-game-development" className="mobile_app_services_btn">READ MORE <i className="fa fa-angle-double-right" /></a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-lg-4">
                <div className="feature_1 enterprise_mobile_app_services">
                  <div className="spr_img_mob_dev testing_img" style={{ backgroundPosition: '-142px 0px' }}>
                  </div>
                  <div className="feature-content_1">
                    <h2>Android Tablet Development</h2>
                    <p>In this digital era, Android popularity is exploding. The reason why people.
                      growth remains the same. We enter into Android tablet development business to provide scalable and effective applications with fruitful features that range of user experience. Leverage our
                      top-notch script to get the first-rate Android tablet development
                    </p>
                  </div>
                  <div className="mobile_app_services_btn_div">
                    <a href="https://www.MetaBlocktechnologies.com/android-tablet-development" className="mobile_app_services_btn">READ MORE <i className="fa fa-angle-double-right" /></a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
        {/* <section >
          <CardSlider/>
        </section> */}
        {/* <RelatedPortfolioSlider/> */}
        {/* <OnDemandAppSlider/> */}
        <section className='OnDemandApp_section'>
          <OnDemandAppSlider />
          {/* <CardSlider/> */}
        </section>
        <section>
          <DeliveringNative />
        </section>
        <section className="section-heading mid_section-1">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="text-center">Technology Stack We Use</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <img src="images/techstack.png" width={'70%'} />
              </div>

            </div>
          </div>
        </section>
        {/* <section className='Phone-card-slider'>
          <Phonecardslider />
        </section> */}
        <section className="process_we_follow section-heading">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="cms text-center Process">
                  <h3>Our Step-By-Step Mobile App Development Process
                  </h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <img src="/images/process-flow-new.svg" className='img-fluid' />
              </div>
            </div>
          </div>
        </section>
        <section className="why_MetaBlock section-heading ">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="cms text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                  <h4>Why Choose MetaBlock For Mobile App Development?</h4>
                </div>
                <div className="why_round" />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-3">
                <div className="why-cntnt">
                  <div className="spr_img_mob_dev" style={{ backgroundPosition: '-7px -541px' }}>
                  </div>
                  <div className="why-img-title">Instant Sharing of Information</div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="why-cntnt">
                  <div className="spr_img_mob_dev" style={{ backgroundPosition: '-96px -541px' }} />
                  <div className="why-img-title">Simplify the process and reduce complexity</div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="why-cntnt">
                  <div className="spr_img_mob_dev" style={{ backgroundPosition: '-191px -541px' }} />
                  <div className="why-img-title">Instant respond to opportunities</div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="why-cntnt">
                  <div className="spr_img_mob_dev" style={{ backgroundPosition: '-291px -541px' }} />
                  <div className="why-img-title">Increase productivity</div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-3">
                <div className="why-cntnt">
                  <div className="spr_img_mob_dev" style={{ backgroundPosition: '-10px -627px' }} />
                  <div className="why-img-title">Enhance service quality and responsibility</div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="why-cntnt">
                  <div className="spr_img_mob_dev" style={{ backgroundPosition: '-98px -627px' }} />
                  <div className="why-img-title">Less operational cost</div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="why-cntnt">
                  <div className="spr_img_mob_dev" style={{ backgroundPosition: '-181px -627px' }} />
                  <div className="why-img-title">Implementing Unique strategies</div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="why-cntnt">
                  <div className="spr_img_mob_dev" style={{ backgroundPosition: '-274px -627px' }} />
                  <div className="why-img-title">Agile App Development Process</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mid_section grey-bg-1">
          <div className="container">

            <div className="row-1" style={{ display: 'flex' }}>
              <div className="col-sm-6 col-md-6 col-lg-6">
                <div className="section-heading text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                  <h3>Hire Our Skilled Mobile App Developers</h3>
                  <div className="why_round"> </div>
                </div>
                
                    <p className="hire-para">Build a functional mobile application over several platforms including iOS, Android and lot more with our certified Mobile application developer. An exclusive mobile application with attractive UI/UX design can be built
                      by our pool of developers who are strong in this platform. To develop strong mobile application, hire our experienced mobile application developers, who are specialists in many programming languages such as Java, Python,
                      PHP, Swift, and Objective-C</p>
                    <div className="text-center">
                      <a href="https://www.MetaBlocktechnologies.com/request-for-quotation" className="expert-btn" style={{ margin: 0 }}>Request for Quote</a>
                    </div>
                  </div>
                  <div>
                    <img className='hire-our-skill' src="/images/coding1-removebg-preview.png" alt="coding1-removebg-preview" />

                  </div>
                </div>
              </div>

            </section>
            <section>
              <SimilarFile />
            </section>
          </div>

        </>
        )
}

        export default WebApplicationMainPage
