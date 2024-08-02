import React from 'react'
import './MetaverseVirtualLandDevelopment.css'

const MetaverseVirtualLandDevelopment = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        country: "",
        message: "",
        phone: "",
    });


    const handleInputChange = (e) => {
        const { name, value, email, country, phone, message } = e.target;
        setFormData({
            ...formData,
            [name]: value,
            [email]: value,
            [country]: value,
            [phone]: value,
            [message]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        formData.type = 0;
        console.log("Form data:", formData);
        const res = await postData("/contact/submit-enquiry", formData)
        console.log(res)
    };

    return (
        <>
            <main className="blog_new_detgails_main">
                <div className="blog_new_detgails_sec">
                    <div className="container">
                        <div className="shadow_img"><svg viewBox="0 0 1320 300"><text x="50%" y="50%" dy=".35em" textAnchor="middle">BLOG</text></svg></div>
                        <div className="breadcrumb__div">
                            <ol className="breadcrumb cm_brdcm">
                                <li className="breadcrumb-item"><a href="https://www.metablocktechnologies.com/"><i className="fa fa-home" /> Home</a></li>
                                <li className="breadcrumb-item"><a href="https://www.metablocktechnologies.com/blog/">Blog</a></li>
                                <li className="breadcrumb-item active">Metaverse Virtual Land Development-To launch your Virtual Land in the Metaverse </li>
                            </ol>
                        </div>
                        <div className="blog_det_banner_sec">
                            <div className="blog_social">
                                <p className="pub_date">Published: 01 December, 2022</p>
                                <div className="social_sec">
                                    <ul>
                                        <li className="fb"><a title="Facebook" href="https://www.facebook.com/metablocktechnologiespvtltd/" rel="nofollow" target="_blank"><img src="https://www.metablocktechnologies.com/asset/inner-pages-new/blog/facebook.png" /></a></li>
                                        <li className="tw "><a title="Twitter" href="https://twitter.com/metablocktech?lang=en" rel="nofollow" target="_blank"><img src="https://www.metablocktechnologies.com/asset/inner-pages-new/blog/twitter.svg" /></a></li>
                                        <li className="linkedin"><a title="Linkedin" href="https://in.linkedin.com/company/metablock-technologies-private-limited" rel="nofollow" target="_blank"><img src="https://www.metablocktechnologies.com/asset/inner-pages-new/blog/linkedin.png" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="blog_dets_conte_sec">
                                        <h1 className="title-11">Metaverse Virtual Land Development-To launch your Virtual Land in the Metaverse </h1>
                                        <p className="short_contents">metablock is a pre-eminent metaverse virtual land development company that offers extra-ordinary services and solutions to create avatars, play games, real estate, events, conferences, virtual workspaces, and more.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="blog_dets_img_sec">
                                        <img src="https://metablocktechnologies.s3.us-east-2.amazonaws.com/blog/Metaverse-Virtual-Land-Development.webp" alt="Metaverse Virtual Land Development-To launch your Virtual Land in the Metaverse " title="Metaverse Virtual Land Development-To launch your Virtual Land in the Metaverse " className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-lg-8 col-12">
                                <div className="blog_dets_left_sec ">
                                    <div className="blog_dets_contents feat_rig1_blog">
                                        <p>The term metaverse has gained popularity in the world of cryptocurrency. In a virtual environment, users can interact, create avatars, travel, play games, attend virtual concerts and experience everything that has been
                                            done in the actual world.&nbsp;&nbsp;</p>
                                        <p>The growing popularity of the metaverse has attracted many technology investors to construct and own real estate in it. Real estate development is one of the proven strategies for producing passive income all around the
                                            world.</p>
                                        <p><strong>Putting the data into some perspective, we infer the statistics below,&nbsp;</strong></p>
                                        <ul>
                                            <li>
                                                <p>The price of metaverse real estate increased by around 700% in 2021, pushing the market to over $500 million.</p>
                                            </li>
                                            <li>
                                                <p>The Market size is anticipated to increase by twofold to around $ 1 billion in 2022.</p>
                                            </li>
                                            <li>
                                                <p>The global demand for metaverse real estate in 2020 was expected to be worth $358 million in revenue.</p>
                                            </li>
                                            <li>
                                                <p>The income of the metaverse real estate industry will increase from 2020 to 2050 at a CAGR of 45.2% and will reach $3600 million in 2025.&nbsp;</p>
                                            </li>
                                        </ul>
                                        <p>With these statistics, you all know the hype of metaverse virtual land development. We, at metablock, provide Metaverse virtual land development services for your business perspective. Read this blog to know more about the development,
                                            benefits, importance, and services of metaverse virtual land.</p>
                                        <h2><strong>Metaverse Virtual Land Development</strong></h2>
                                        <p>Metaverse is a 3D universe thriving quickly and provides users with an enticing virtual setting in which to communicate with their friends. Another element supporting the digital market is the high inclination for NFTs
                                            in the metaverse real estate market.&nbsp;</p>
                                        <p>metablock is the leading Metaverse real estate development company that provides world-class services for metaverse virtual land development. We primarily focus on altering the user experience through the use of cutting-edge
                                            technology like Virtual reality and Augmented reality. Our experts are dedicated to providing the finest option for creating metaverse real estate under the client's requirements.&nbsp;</p>
                                        <h2><strong>Benefits of investing in Metaverse Virtual Land Development&nbsp;</strong></h2>
                                        <p>Business stand to gain from the development of virtual land in the metaverse. Entrepreneurs can quickly and effectively construct multiplexes or centers by employing effective methods. The topography of an estate needs
                                            to be valued for its worth.&nbsp;</p>
                                        <p>It costs a lot to participate and involves stakeholders. Metaverse real estate is not essential to their survival, unlike actual property. A unique region of the virtual world where you can make money is real estate in
                                            the metaverse. It can be kept up to date without violating approved blockchain protocols.&nbsp;</p>
                                        <h3><strong>Some more reasons to invest in Virtual real estate,&nbsp;&nbsp;</strong></h3>
                                        <ul>
                                            <li>
                                                <p>We can mingle, play, and engage in other activities in a different virtual land.&nbsp;</p>
                                            </li>
                                            <li>
                                                <p>Real estate enables online meetings in the metaverse.&nbsp;</p>
                                            </li>
                                            <li>
                                                <p>Creators can even be monetizing their content by trading their NFTs.&nbsp;</p>
                                            </li>
                                            <li>
                                                <p>Brands can organize their virtual product release, promote their services and create outstanding customer services using their metaverse property.&nbsp;</p>
                                            </li>
                                            <li>
                                                <p>We can build, rent out, or sell metaverse properties just as in the real world.&nbsp;</p>
                                            </li>
                                            <li>
                                                <p>Digital land parcels could be an investment for property investors.&nbsp;</p>
                                            </li>
                                        </ul>
                                        <h2><strong>How does Metaverse Real Estate Function?</strong></h2>
                                        <p>The metaverse enables users to communicate with one another through a 3D avatar, which is thought to be a blend of the internet and spatial computing. With the help of avatars, users can engage in interactions with digital
                                            avatars and 3D virtual items that mimic those found in the real world. Individuals are meant to have an entirely immersive experience due to the metaverse.&nbsp;</p>
                                        <p>If you are still wondering what metaverse real estate is, remember that every area of the metaverse is divided into discrete sections or "Parcels" of virtual land. These virtual properties can be developed for
                                            a particular purpose. Both businesses and people can use the land they invest in to construct something that will appeal to users of the metaverse.</p>
                                        <p>For example, A virtual landowner might construct an art gallery or a workplace. any structure that already stands on the property is eligible to have "livable" qualities. these characteristics can include everything
                                            from a system for amusement to tools for collaboration.&nbsp;</p>
                                        <p>It is feasible to use cryptocurrency to pay for a virtual property in the metaverse. Following that, this land will exist as an NFT, a blockchain-based asset that can be converted into another. When focusing primarily on
                                            NFTs, each one is seen as a distinct crypto asset with some intrinsic worth. The NFT holder has the option of keeping the NFT or selling it immediately to a person with an interest for a predetermined sum.</p>
                                        <p>The ability to buy a virtual land piece on a marketplace, store it in your wallet, and later sell it or develop it makes virtual land parcels similar to real-world ones. Digital art will always be regarded as art that strongly
                                            indicates that digital property should be able to preserve its worth. However, there is still some risk involved with purchasing virtual land due to the novelty of metaverse real estate.&nbsp;</p>
                                        <h2><strong>How can you create your Metaverse Virtual Land?</strong></h2>
                                        <p>The development of the Decentraland Virtual Real Estate metaverse is subject to a specific set of requirements. Following are the steps to create your metaverse virtual land.&nbsp;</p>
                                        <ul>
                                            <li>
                                                <p><strong>Analyzing a Virtual World&nbsp;</strong></p>
                                            </li>
                                        </ul>
                                        <p>You need to have a powerful thought and idea for this level. It should attract more users if distinctions are displayed.&nbsp;</p>
                                        <ul>
                                            <li>
                                                <p><strong>Creating Metaverse Real Estate&nbsp;</strong></p>
                                            </li>
                                        </ul>
                                        <p>Your users will be able to easily purchase in the metaverse if you provide a dependable and straightforward user interface.&nbsp;<br /> Consider blockchain technology as your central focus and the inclusion of the wallet.
                                            At this level, you must either be a full-stack programmer or hire a group of experts in metaverse development.&nbsp;</p>
                                        <ul>
                                            <li>
                                                <p><strong>Create Storage Systems</strong></p>
                                            </li>
                                        </ul>
                                        <p>A variety of data storage systems such as IPFS can be used to store and transfer information securely.&nbsp;</p>
                                        <ul>
                                            <li>
                                                <p><strong>Invest in Metaverse Virtual Land Development</strong></p>
                                            </li>
                                        </ul>
                                        <p>The emergence of metaverse real estate has businesses excited. To begin and finish your development process, merely get in touch with skilled programmers.</p>
                                        <p>With our assistance, your exploration of the metaverse will go more rapidly. We provide you with a solid development roadmap so you may enter the market immediately and obtain a critical competitive advantage.&nbsp;</p>
                                        <h2><strong>Why do people go for purchasing Virtual Land in The Metaverse?</strong></h2>
                                        <p>More people were interested in VR, AR, and metaverse real estate after meta announced its intention to invest in the virtual reality sector. Though it may seem strange, two things draw investors to the metaverse.&nbsp;&nbsp;</p>
                                        <ul>
                                            <li><strong>Land parcels&nbsp;</strong></li>
                                        </ul>
                                        <p>The availability of actual-world and virtual-world real estate is both constrained. Nowadays, claiming ownership of virtual property denotes possessing unique parcels of land in a virtual environment(Metaverse).</p>
                                        <p>You may do a variety of things with these parcels of land because you can end up with properties that generate cash such as structures that advertise a brand or charge a fee or venues that can be leased.&nbsp;</p>
                                        <ul>
                                            <li><strong>Ownership&nbsp;</strong></li>
                                        </ul>
                                        <p>Each portion of the metaverse is protected with an NFT due to its uniqueness. An NFT is essentially ownership proof for something physical or even digital.&nbsp;</p>
                                        <p>You can resell the property to a different owner due to virtual real estate NFT which confirms your ownership. Additionally, it records every transaction for that property by reducing the amount of work required. A digital
                                            deed for the 21st century.&nbsp;</p>
                                        <h2><strong>Why metablock for Metaverse Virtual Land Development?</strong></h2>
                                        <p>metablock is a top provider of technology-driven metaverse virtual land development services that could boost your company's presence in the virtual world.&nbsp;We, metablock is the ideal option for turning your vision into reality
                                            because there are so many new options available. We concentrate on the newest technology that will improve your business growth.</p>
                                        <p>At metablock, our talented developers are dedicated to offering complete custom solutions that long-term maintain the digital transformation. Hire one of our qualified developers to help your company expand online.</p>
                                        <p style={{ textAlign: 'center' }}><span style={{ fontSize: 16 }}><strong><a href="https://www.metablocktechnologies.com/contact-us"><span style={{ color: '#0000CD' }}>Get in touch with our experts</span></a>
                                        </strong> to discuss your demands for creating the metaverse virtual land.&nbsp;</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="blog_det_right_sec">
                                    <div className="table_cont_sec">
                                        <div className="side_box_head">
                                            <div className="title-12">Table Of Content</div>
                                        </div>
                                        <div className="side_box_body">
                                            <ul id="tbl_cont">
                                                <li><a href="#metaverse-virtual-land-development">Metaverse Virtual Land Development</a></li><li><a href="#benefits-of-investing-in-metaverse-virtual-land-development">Benefits of investing in Metaverse Virtual Land Development&nbsp;</a></li><li><a href="#how-does-metaverse-real-estate-function-">How does Metaverse Real Estate Function?</a></li><li><a href="#how-can-you-create-your-metaverse-virtual-land-">How can you create your Metaverse Virtual Land?</a></li><li><a href="#why-do-people-go-for-purchasing-virtual-land-in-the-metaverse-">Why do people go for purchasing Virtual Land in The Metaverse?</a></li><li><a href="#why-metablock-for-metaverse-virtual-land-development-">Why metablock for Metaverse Virtual Land Development?</a></li></ul>


                                        </div>
                                    </div>
                                    <div className="img_sec">
                                        <a className="btn blog_new_card_btn" data-toggle="modal" data-target="#popup_form_modal"><img src="https://metablocktechnologies.s3.us-east-2.amazonaws.com/blog/Metaverse-Ad.png" alt="Metaverse Virtual Land Development-To launch your Virtual Land in the Metaverse " title="Metaverse Virtual Land Development-To launch your Virtual Land in the Metaverse " className="img-fluid" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="recent_blog_sec">
                            <div className="title">Recent Blogs</div>
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="recent_blog_box">
                                        <a href="https://www.metablocktechnologies.com/blog/latency-arbitrage-bot-development" className="readmore_btn">
                                            <div className="card-thumbnail">
                                                <img src="https://metablocktechnologies.s3.us-east-2.amazonaws.com/blog/Latency Arbitrage Trading Bot.webp" alt="Unleashing Profits: The Ultimate Guide to Building a Latency Arbitrage Trading Bot" title="Unleashing Profits: The Ultimate Guide to Building a Latency Arbitrage Trading Bot" className="img-fluid" />
                                            </div>
                                        </a>
                                        <div className="charcte_conte_sec">
                                            <div className="sub_title">Unleashing Profits: The Ultimate Guide to Building a Latency Arbitrage Trading Bot</div>
                                            <p className="sub_contents">Explore the dynamic world of finance and technology with our latest blog on Latency Arbitrage Bot Development. Delve into the intricacies of crafting ...</p>
                                            <a href="https://www.metablocktechnologies.com/blog/latency-arbitrage-bot-development" className="readmore_btn">Read More...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="recent_blog_box">
                                        <a href="https://www.metablocktechnologies.com/blog/web3-security-audit" className="readmore_btn">
                                            <div className="card-thumbnail">
                                                <img src="https://metablocktechnologies.s3.us-east-2.amazonaws.com/blog/web3 security audits.webp" alt="Understanding Web3 Security Audit's Importance and Best Practices" title="Understanding Web3 Security Audit's Importance and Best Practices" className="img-fluid" />
                                            </div>
                                        </a>
                                        <div className="charcte_conte_sec">
                                            <div className="sub_title">Understanding Web3 Security Audit's Importance and Best Practices</div>
                                            <p className="sub_contents">Explore the crucial realm of Web3 security audits with our insightful guide! Uncover the significance of securing decentralized applications and smart...</p>
                                            <a href="https://www.metablocktechnologies.com/blog/web3-security-audit" className="readmore_btn">Read More...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="recent_blog_box">
                                        <a href="https://www.metablocktechnologies.com/blog/crypto-arbitrage-bot-development" className="readmore_btn">
                                            <div className="card-thumbnail">
                                                <img src="https://metablocktechnologies.s3.us-east-2.amazonaws.com/blog/Crypto Arbitrage Bot.webp" alt="A Complete Guide to Build Your Own Crypto Arbitrage Trading Bot" title="A Complete Guide to Build Your Own Crypto Arbitrage Trading Bot" className="img-fluid" />
                                            </div>
                                        </a>
                                        <div className="charcte_conte_sec">
                                            <div className="sub_title">A Complete Guide to Build Your Own Crypto Arbitrage Trading Bot</div>
                                            <p className="sub_contents">A Crypto Arbitrage Bot is an automated software program designed to capitalize on price differences of cryptocurrencies across various exchanges. The ...</p>
                                            <a href="https://www.metablocktechnologies.com/blog/crypto-arbitrage-bot-development" className="readmore_btn">Read More...</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="HddrBtns knowmore_btn_sec">
                                <a href="https://www.metablocktechnologies.com/blog/" className="btn BtnPrimry TlkBtn knowmore_btn" target="_blank">
                                    <span> Read More Blogs <i className="fa fa-arrow-right" aria-hidden="true" /></span>
                                    <span> Read More Blogs <i className="fa fa-arrow-right" aria-hidden="true" /></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <div className="labs-modal modal fade popup-form " id="popup_form_modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog model_full_width" role="document">
                    <div className="modal-content model_full_width_content">
                        <div className="modal-body">
                            <button type="button" className="close top_cls" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <div className="row popup_cus_row">
                                <div className="col-lg-5 p-lg-0">
                                    <div className="popup_form_left_sec">
                                        <div className="head_sec-1">
                                            <p className="title">Contact Us</p>
                                            <p className="contents">We Are here to Support You</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-12">
                                    <div className="popup-contact-form">
                                        <p className="title1" id="myModalLabel"><span className="christ_tit">G</span>et a live demo</p>
                                        <p className="contents1">Let's sky-rocket your dream Project together</p>
                                        <form
                                            onSubmit={handleSubmit}
                                            className="fitoutform" id="popup_contact_form_home_new" method="post">
                                            <input type="hidden" name="offer_percent" id="offer_percent" />
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                    <input type="text"
                                                        className="form-control"
                                                        name="name"
                                                        placeholder="Enter Your Name"
                                                        value={formData.name}
                                                        onChange={handleInputChange} />
                                                </div>
                                                <input type="hidden" className="form-control" defaultValue="popup_form_blog" name="category_name" />
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                    <input type="text"
                                                        className="form-control"
                                                        name="email"
                                                        placeholder="Enter Your Email"
                                                        value={formData.email}
                                                        onChange={handleInputChange} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                    <div className="selecpicker_input_group_div">
                                                        <select className="selectpicker form-control select_icon_list" name="country"
                                                            aria-label="Contact Details"
                                                            value={formData.country}
                                                            onChange={(e) => {
                                                                handleInputChange(e);
                                                                console.log(e.target.value);
                                                            }}>
                                                            <option data-icon="fa fa-phone" value="mobile" />
                                                            <option data-icon="fab fa-whatsapp" value="whatsapp" />
                                                            <option data-icon="fab fa-telegram" value="telegram" />
                                                        </select>
                                                        <input
                                                            type="phone"
                                                            name="phone"
                                                            placeholder="Your Phone Number"
                                                            className="telephone"
                                                            value={formData.phone}
                                                            onChange={handleInputChange}
                                                            required />
                                                        <input type="hidden" name="social_link_type_hidden" defaultValue="mobile" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                    <div className="popup_country">
                                                        <select className="form-control form_control_select select2country_popup" name="country" id="popup_country" aria-label="Country">
                                                            <option value hidden>Select Country</option>
                                                            <option value="Afghanistan" id="AF">Afghanistan</option>
                                                            <option value="Albania" id="AL">Albania</option>
                                                            <option value="Algeria" id="DZ">Algeria</option>
                                                            <option value="American Samoa" id="AS">American Samoa</option>
                                                            <option value="Andorra" id="AD">Andorra</option>
                                                            <option value="Angola" id="AO">Angola</option>
                                                            <option value="Anguilla" id="AI">Anguilla</option>
                                                            <option value="Antarctica" id="AQ">Antarctica</option>
                                                            <option value="Antigua and Barbuda" id="AG">Antigua and Barbuda</option>
                                                            <option value="Argentina" id="AR">Argentina</option>
                                                            <option value="Armenia" id="AM">Armenia</option>
                                                            <option value="Aruba" id="AW">Aruba</option>
                                                            <option value="Australia" id="AU">Australia</option>
                                                            <option value="Austria" id="AT">Austria</option>
                                                            <option value="Azerbaijan" id="AZ">Azerbaijan</option>
                                                            <option value="Bahamas" id="BS">Bahamas</option>
                                                            <option value="Bahrain" id="BH">Bahrain</option>
                                                            <option value="Bangladesh" id="BD">Bangladesh</option>
                                                            <option value="Barbados" id="BB">Barbados</option>
                                                            <option value="Belarus" id="BY">Belarus</option>
                                                            <option value="Belgium" id="BE">Belgium</option>
                                                            <option value="Belize" id="BZ">Belize</option>
                                                            <option value="Benin" id="BJ">Benin</option>
                                                            <option value="Bermuda" id="BM">Bermuda</option>
                                                            <option value="Bhutan" id="BT">Bhutan</option>
                                                            <option value="Bolivia" id="BO">Bolivia</option>
                                                            <option value="Bosnia and Herzegovina" id="BA">Bosnia and Herzegovina</option>
                                                            <option value="Botswana" id="BW">Botswana</option>
                                                            <option value="Bouvet Island" id="BV">Bouvet Island</option>
                                                            <option value="Brazil" id="BR">Brazil</option>
                                                            <option value="British Indian Ocean Territory" id="IO">British Indian Ocean Territory</option>
                                                            <option value="Brunei Darussalam" id="BN">Brunei Darussalam</option>
                                                            <option value="Bulgaria" id="BG">Bulgaria</option>
                                                            <option value="Burkina Faso" id="BF">Burkina Faso</option>
                                                            <option value="Burundi" id="BI">Burundi</option>
                                                            <option value="Cambodia" id="KH">Cambodia</option>
                                                            <option value="Cameroon" id="CM">Cameroon</option>
                                                            <option value="Canada" id="CA">Canada</option>
                                                            <option value="Cape Verde" id="CV">Cape Verde</option>
                                                            <option value="Cayman Islands" id="KY">Cayman Islands</option>
                                                            <option value="Central African Republic" id="CF">Central African Republic</option>
                                                            <option value="Chad" id="TD">Chad</option>
                                                            <option value="Chile" id="CL">Chile</option>
                                                            <option value="China" id="CN">China</option>
                                                            <option value="Christmas Island" id="CX">Christmas Island</option>
                                                            <option value="Cocos (Keeling) Islands" id="CC">Cocos (Keeling) Islands</option>
                                                            <option value="Colombia" id="CO">Colombia</option>
                                                            <option value="Comoros" id="KM">Comoros</option>
                                                            <option value="Congo" id="CG">Congo</option>
                                                            <option value="Congo, the Democratic Republic of the" id="CD">Congo, the Democratic Republic of the</option>
                                                            <option value="Cook Islands" id="CK">Cook Islands</option>
                                                            <option value="Costa Rica" id="CR">Costa Rica</option>
                                                            <option value="Cote D'Ivoire" id="CI">Cote D'Ivoire</option>
                                                            <option value="Croatia" id="HR">Croatia</option>
                                                            <option value="Cuba" id="CU">Cuba</option>
                                                            <option value="Cyprus" id="CY">Cyprus</option>
                                                            <option value="Czech Republic" id="CZ">Czech Republic</option>
                                                            <option value="Denmark" id="DK">Denmark</option>
                                                            <option value="Djibouti" id="DJ">Djibouti</option>
                                                            <option value="Dominica" id="DM">Dominica</option>
                                                            <option value="Dominican Republic" id="DO">Dominican Republic</option>
                                                            <option value="Ecuador" id="EC">Ecuador</option>
                                                            <option value="Egypt" id="EG">Egypt</option>
                                                            <option value="El Salvador" id="SV">El Salvador</option>
                                                            <option value="Equatorial Guinea" id="GQ">Equatorial Guinea</option>
                                                            <option value="Eritrea" id="ER">Eritrea</option>
                                                            <option value="Estonia" id="EE">Estonia</option>
                                                            <option value="Ethiopia" id="ET">Ethiopia</option>
                                                            <option value="Falkland Islands (Malvinas)" id="FK">Falkland Islands (Malvinas)</option>
                                                            <option value="Faroe Islands" id="FO">Faroe Islands</option>
                                                            <option value="Fiji" id="FJ">Fiji</option>
                                                            <option value="Finland" id="FI">Finland</option>
                                                            <option value="France" id="FR">France</option>
                                                            <option value="French Guiana" id="GF">French Guiana</option>
                                                            <option value="French Polynesia" id="PF">French Polynesia</option>
                                                            <option value="French Southern Territories" id="TF">French Southern Territories</option>
                                                            <option value="Gabon" id="GA">Gabon</option>
                                                            <option value="Gambia" id="GM">Gambia</option>
                                                            <option value="Georgia" id="GE">Georgia</option>
                                                            <option value="Germany" id="DE">Germany</option>
                                                            <option value="Ghana" id="GH">Ghana</option>
                                                            <option value="Gibraltar" id="GI">Gibraltar</option>
                                                            <option value="Greece" id="GR">Greece</option>
                                                            <option value="Greenland" id="GL">Greenland</option>
                                                            <option value="Grenada" id="GD">Grenada</option>
                                                            <option value="Guadeloupe" id="GP">Guadeloupe</option>
                                                            <option value="Guam" id="GU">Guam</option>
                                                            <option value="Guatemala" id="GT">Guatemala</option>
                                                            <option value="Guinea" id="GN">Guinea</option>
                                                            <option value="Guinea-Bissau" id="GW">Guinea-Bissau</option>
                                                            <option value="Guyana" id="GY">Guyana</option>
                                                            <option value="Haiti" id="HT">Haiti</option>
                                                            <option value="Heard Island and Mcdonald Islands" id="HM">Heard Island and Mcdonald Islands</option>
                                                            <option value="Holy See (Vatican City State)" id="VA">Holy See (Vatican City State)</option>
                                                            <option value="Honduras" id="HN">Honduras</option>
                                                            <option value="Hong Kong" id="HK">Hong Kong</option>
                                                            <option value="Hungary" id="HU">Hungary</option>
                                                            <option value="Iceland" id="IS">Iceland</option>
                                                            <option value="India" id="IN">India</option>
                                                            <option value="Indonesia" id="ID">Indonesia</option>
                                                            <option value="Iran, Islamic Republic of" id="IR">Iran, Islamic Republic of</option>
                                                            <option value="Iraq" id="IQ">Iraq</option>
                                                            <option value="Ireland" id="IE">Ireland</option>
                                                            <option value="Israel" id="IL">Israel</option>
                                                            <option value="Italy" id="IT">Italy</option>
                                                            <option value="Jamaica" id="JM">Jamaica</option>
                                                            <option value="Japan" id="JP">Japan</option>
                                                            <option value="Jordan" id="JO">Jordan</option>
                                                            <option value="Kazakhstan" id="KZ">Kazakhstan</option>
                                                            <option value="Kenya" id="KE">Kenya</option>
                                                            <option value="Kiribati" id="KI">Kiribati</option>
                                                            <option value="North Korea" id="KP">North Korea</option>
                                                            <option value="South Korea" id="KR">South Korea</option>
                                                            <option value="Kuwait" id="KW">Kuwait</option>
                                                            <option value="Kyrgyzstan" id="KG">Kyrgyzstan</option>
                                                            <option value="Lao People's Democratic Republic" id="LA">Lao People's Democratic Republic</option>
                                                            <option value="Latvia" id="LV">Latvia</option>
                                                            <option value="Lebanon" id="LB">Lebanon</option>
                                                            <option value="Lesotho" id="LS">Lesotho</option>
                                                            <option value="Liberia" id="LR">Liberia</option>
                                                            <option value="Libyan Arab Jamahiriya" id="LY">Libyan Arab Jamahiriya</option>
                                                            <option value="Liechtenstein" id="LI">Liechtenstein</option>
                                                            <option value="Lithuania" id="LT">Lithuania</option>
                                                            <option value="Luxembourg" id="LU">Luxembourg</option>
                                                            <option value="Macao" id="MO">Macao</option>
                                                            <option value="Macedonia, the Former Yugoslav Republic of" id="MK">Macedonia, the Former Yugoslav Republic of</option>
                                                            <option value="Madagascar" id="MG">Madagascar</option>
                                                            <option value="Malawi" id="MW">Malawi</option>
                                                            <option value="Malaysia" id="MY">Malaysia</option>
                                                            <option value="Maldives" id="MV">Maldives</option>
                                                            <option value="Mali" id="ML">Mali</option>
                                                            <option value="Malta" id="MT">Malta</option>
                                                            <option value="Marshall Islands" id="MH">Marshall Islands</option>
                                                            <option value="Martinique" id="MQ">Martinique</option>
                                                            <option value="Mauritania" id="MR">Mauritania</option>
                                                            <option value="Mauritius" id="MU">Mauritius</option>
                                                            <option value="Mayotte" id="YT">Mayotte</option>
                                                            <option value="Mexico" id="MX">Mexico</option>
                                                            <option value="Micronesia, Federated States of" id="FM">Micronesia, Federated States of</option>
                                                            <option value="Moldova, Republic of" id="MD">Moldova, Republic of</option>
                                                            <option value="Monaco" id="MC">Monaco</option>
                                                            <option value="Mongolia" id="MN">Mongolia</option>
                                                            <option value="Montserrat" id="MS">Montserrat</option>
                                                            <option value="Morocco" id="MA">Morocco</option>
                                                            <option value="Mozambique" id="MZ">Mozambique</option>
                                                            <option value="Myanmar" id="MM">Myanmar</option>
                                                            <option value="Namibia" id="NA">Namibia</option>
                                                            <option value="Nauru" id="NR">Nauru</option>
                                                            <option value="Nepal" id="NP">Nepal</option>
                                                            <option value="Netherlands" id="NL">Netherlands</option>
                                                            <option value="Netherlands Antilles" id="AN">Netherlands Antilles</option>
                                                            <option value="New Caledonia" id="NC">New Caledonia</option>
                                                            <option value="New Zealand" id="NZ">New Zealand</option>
                                                            <option value="Nicaragua" id="NI">Nicaragua</option>
                                                            <option value="Niger" id="NE">Niger</option>
                                                            <option value="Nigeria" id="NG">Nigeria</option>
                                                            <option value="Niue" id="NU">Niue</option>
                                                            <option value="Norfolk Island" id="NF">Norfolk Island</option>
                                                            <option value="Northern Mariana Islands" id="MP">Northern Mariana Islands</option>
                                                            <option value="Norway" id="NO">Norway</option>
                                                            <option value="Oman" id="OM">Oman</option>
                                                            <option value="Pakistan" id="PK">Pakistan</option>
                                                            <option value="Palau" id="PW">Palau</option>
                                                            <option value="Palestinian Territory, Occupied" id="PS">Palestinian Territory, Occupied</option>
                                                            <option value="Panama" id="PA">Panama</option>
                                                            <option value="Papua New Guinea" id="PG">Papua New Guinea</option>
                                                            <option value="Paraguay" id="PY">Paraguay</option>
                                                            <option value="Peru" id="PE">Peru</option>
                                                            <option value="Philippines" id="PH">Philippines</option>
                                                            <option value="Pitcairn" id="PN">Pitcairn</option>
                                                            <option value="Poland" id="PL">Poland</option>
                                                            <option value="Portugal" id="PT">Portugal</option>
                                                            <option value="Puerto Rico" id="PR">Puerto Rico</option>
                                                            <option value="Qatar" id="QA">Qatar</option>
                                                            <option value="Reunion" id="RE">Reunion</option>
                                                            <option value="Romania" id="RO">Romania</option>
                                                            <option value="Russian Federation" id="RU">Russian Federation</option>
                                                            <option value="Rwanda" id="RW">Rwanda</option>
                                                            <option value="Saint Helena" id="SH">Saint Helena</option>
                                                            <option value="Saint Kitts and Nevis" id="KN">Saint Kitts and Nevis</option>
                                                            <option value="Saint Lucia" id="LC">Saint Lucia</option>
                                                            <option value="Saint Pierre and Miquelon" id="PM">Saint Pierre and Miquelon</option>
                                                            <option value="Saint Vincent and the Grenadines" id="VC">Saint Vincent and the Grenadines</option>
                                                            <option value="Samoa" id="WS">Samoa</option>
                                                            <option value="San Marino" id="SM">San Marino</option>
                                                            <option value="Sao Tome and Principe" id="ST">Sao Tome and Principe</option>
                                                            <option value="Saudi Arabia" id="SA">Saudi Arabia</option>
                                                            <option value="Senegal" id="SN">Senegal</option>
                                                            <option value="Serbia and Montenegro" id="CS">Serbia and Montenegro</option>
                                                            <option value="Seychelles" id="SC">Seychelles</option>
                                                            <option value="Sierra Leone" id="SL">Sierra Leone</option>
                                                            <option value="Singapore" id="SG">Singapore</option>
                                                            <option value="Slovakia" id="SK">Slovakia</option>
                                                            <option value="Slovenia" id="SI">Slovenia</option>
                                                            <option value="Solomon Islands" id="SB">Solomon Islands</option>
                                                            <option value="Somalia" id="SO">Somalia</option>
                                                            <option value="South Africa" id="ZA">South Africa</option>
                                                            <option value="South Georgia and the South Sandwich Islands" id="GS">South Georgia and the South Sandwich Islands</option>
                                                            <option value="Spain" id="ES">Spain</option>
                                                            <option value="Sri Lanka" id="LK">Sri Lanka</option>
                                                            <option value="Sudan" id="SD">Sudan</option>
                                                            <option value="Suriname" id="SR">Suriname</option>
                                                            <option value="Svalbard and Jan Mayen" id="SJ">Svalbard and Jan Mayen</option>
                                                            <option value="Swaziland" id="SZ">Swaziland</option>
                                                            <option value="Sweden" id="SE">Sweden</option>
                                                            <option value="Switzerland" id="CH">Switzerland</option>
                                                            <option value="Syrian Arab Republic" id="SY">Syrian Arab Republic</option>
                                                            <option value="Taiwan, Province of China" id="TW">Taiwan, Province of China</option>
                                                            <option value="Tajikistan" id="TJ">Tajikistan</option>
                                                            <option value="Tanzania, United Republic of" id="TZ">Tanzania, United Republic of</option>
                                                            <option value="Thailand" id="TH">Thailand</option>
                                                            <option value="Timor-Leste" id="TL">Timor-Leste</option>
                                                            <option value="Togo" id="TG">Togo</option>
                                                            <option value="Tokelau" id="TK">Tokelau</option>
                                                            <option value="Tonga" id="TO">Tonga</option>
                                                            <option value="Trinidad and Tobago" id="TT">Trinidad and Tobago</option>
                                                            <option value="Tunisia" id="TN">Tunisia</option>
                                                            <option value="Turkey" id="TR">Turkey</option>
                                                            <option value="Turkmenistan" id="TM">Turkmenistan</option>
                                                            <option value="Turks and Caicos Islands" id="TC">Turks and Caicos Islands</option>
                                                            <option value="Tuvalu" id="TV">Tuvalu</option>
                                                            <option value="Uganda" id="UG">Uganda</option>
                                                            <option value="Ukraine" id="UA">Ukraine</option>
                                                            <option value="United Arab Emirates" id="AE">United Arab Emirates</option>
                                                            <option value="United Kingdom" id="GB">United Kingdom</option>
                                                            <option value="United States" id="US">United States</option>
                                                            <option value="United States Minor Outlying Islands" id="UM">United States Minor Outlying Islands</option>
                                                            <option value="Uruguay" id="UY">Uruguay</option>
                                                            <option value="Uzbekistan" id="UZ">Uzbekistan</option>
                                                            <option value="Vanuatu" id="VU">Vanuatu</option>
                                                            <option value="Venezuela" id="VE">Venezuela</option>
                                                            <option value="Viet Nam" id="VN">Viet Nam</option>
                                                            <option value="Virgin Islands, British" id="VG">Virgin Islands, British</option>
                                                            <option value="Virgin Islands, U.s." id="VI">Virgin Islands, U.s.</option>
                                                            <option value="Wallis and Futuna" id="WF">Wallis and Futuna</option>
                                                            <option value="Western Sahara" id="EH">Western Sahara</option>
                                                            <option value="Yemen" id="YE">Yemen</option>
                                                            <option value="Zambia" id="ZM">Zambia</option>
                                                            <option value="Zimbabwe" id="ZW">Zimbabwe</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12 form-group msg_div">
                                                    <textarea name="message"
                                                        className="form-control"
                                                        rows={3}
                                                        id="footer_msg"
                                                        placeholder="Enter your subject"
                                                        defaultValue={""}
                                                        value={formData.message}
                                                        onChange={handleInputChange} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12 form-group text-center">
                                                    <div id="popup_error_msg_home" />
                                                    <button className="btn home_popup_submit" type="Submit" id="home_popup_submit">Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                        <p className="btm_contents">Protecting your data is our #1 priority; your information is safe with us.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default MetaverseVirtualLandDevelopment
