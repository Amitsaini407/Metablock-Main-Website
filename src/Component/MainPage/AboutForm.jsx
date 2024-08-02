import React, { useState } from 'react'
import './AboutForm.css'
import { postData } from '../../Api/Clientfunctions';

const AboutForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: "",
    phone: "",

  });


  const handleInputChange = (e) => {
    const { name, value, email, phone, message } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      [email]: value,
      [phone]: value,
      [message]: value,
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
    <div className="contect-form">
      <form onSubmit={handleSubmit} className='form-div' method='POSt' >
        <h3 className='form-heading-1'>Send your Query</h3>
        <input type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleInputChange}
          required autoComplete='off' />
        <input type="text"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleInputChange}
          required
          autoComplete='off' />
        <input type="number"
          name="phone"
          placeholder="Your Phone Number"
          className="telephone"
          value={formData.phone}
          onChange={handleInputChange}
          required
          autoComplete='off' />
        <textarea cols="28" rows="2" name="message" placeholder="Enter Your Message *" required
          value={formData.message}
          onChange={handleInputChange} autoComplete='off'></textarea>
        <input className='submit' type="submit" value='Send your Query' />
      </form>
    </div>
  )
}

export default AboutForm