import React, { useState } from 'react'
import './ContectUsForm.css'
import { postData } from '../../../Api/Clientfunctions';
import { AiOutlineSkype } from "react-icons/ai";


const ContectUsForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: "",
        phone: "",
    });


    const handleInputChange = (e) => {
        const { name, value, email, country, phone, message } = e.target;
        setFormData({
            ...formData,
            [name]: value,
            [email]: value,
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
            <section className="section-bg" style={{ marginTop: '40px', paddingTop: '30px' }} >
                <div className="overlay-1 pt-100 pb-100 ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 d-flex align-items-center">
                                <div className="contact-info">
                                    <h2 className="contact-title">Have Any Questions?</h2>
                                    <p> It encourages visitors to reach out for assistance, inquiries, or feedback, facilitating better communication and engagement between the business and its audience.</p>
                                    <ul className="contact-info">
                                        <a href="tel: +91 9358 593 003" target="_blank" rel="noopener noreferrer">
                                            <li>
                                                <div className="info-left">
                                                    <i className="fas fa-mobile-alt" />
                                                </div>
                                                <div className="info-right">
                                                    <h4>+91 935 859 3003</h4>
                                                </div>
                                            </li>
                                        </a>
                                        <a href="mailto:info@metablocktechnologies.in" target="_blank" rel="noopener noreferrer">
                                            <li>
                                                <div className="info-left">
                                                    <i className="fas fa-envelope"></i>
                                                </div>
                                                <div className="info-right">
                                                    <h4>info@metablocktechnologies.in</h4>
                                                </div>
                                            </li>
                                        </a>
                                        <li>
                                            <div className="info-left">
                                                <i className="fas fa-map-marker-alt" />
                                            </div>
                                            <div className="info-right">
                                                <h4>30-A, Gopalpura Bypass Rd, opp. Holiday Inn Hotel, opp. Holiday Inn, Sultan Nagar, Santi Nagar, Gurjar Ki Thadi, Jaipur, Rajasthan 302020</h4>
                                            </div>
                                        </li>
                                        <div className="social-iconss" style={{ display: 'flex', alignItems: 'center', justifyContent: 'start', gap: '10px' }}>
                                            <a href="https://twitter.com/metablocktech" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" style={{ color: '#1DA1F2' }} /></a>
                                            <a href="https://www.facebook.com/Metablocktechnologies"
                                                target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" style={{ color: '#3b5998' }} /></a>
                                            <a href="https://www.instagram.com/metablocktechnologies1?igsh=Zmxva3Fnd3o1NzBw" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" style={{ color: '#C13584' }} /></a>
                                            <a href="https://www.linkedin.com/company/metablocktechnologies" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" style={{ color: '#0077B5' }} /></a>
                                            <a href="skype:your_skype_username?chat" target="_blank" rel="noopener noreferrer"><i className="fab fa-skype" style={{ color: '#00aff0' }} /></a>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center">
                                <div className="contact-form">
                                    {/*Contact Form*/}
                                    <form onSubmit={handleSubmit} id="contact-form" ><input type="hidden" name="form-name" defaultValue="contactForm" />
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text"
                                                        className="form-control"
                                                        name="name"
                                                        placeholder="Enter Your Name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        required />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text"
                                                        className="form-control"
                                                        name="email"
                                                        placeholder="Enter Your Email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        required />

                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="number"
                                                        name="phone"
                                                        placeholder="Your Phone Number"
                                                        className="telephone"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        required />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea rows={3} name="message" className="form-control" id="description" placeholder="Enter Your Message *" required="required"
                                                        value={formData.message}
                                                        onChange={handleInputChange} />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                {/*contact button*/}
                                                <button className='contact-form-button' >
                                                    Send Us <i className="fas fa-arrow-right" />
                                                </button>
                                                {/* contact-form-button btn-big btn btn-bg text-white */}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ContectUsForm
