import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import './contact.css'; // Make sure to link your CSS file

const Contact = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      title: formData.title,
      message: formData.message,
    };

    emailjs.send('service_ufxaodk', 'template_ajv9u4m', templateParams, 'kcqwFcx7uXmO80gUu')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Message sent successfully!'); // Alert user
        // Reset form after submission
        setFormData({
          name: '',
          email: '',
          title: '',
          message: '',
        });
      })
      .catch((err) => {
        console.error('Failed to send email. Error: ', err);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <section className="contact section" id="contactMe">
      <div className="container">
        <h1 className="section-title-01">Contact</h1>
        <h2 className="section-title-02">Contact</h2>
        <div className="content">
          <div className="contact-left">
            <h2>Let's discuss next projects</h2>
            <ul className="contact-list">
              <li>
                <h3 className="item-title"><i className='bx bx-phone-call'></i>Phone</h3>
                <span>+1 (805)-869-9672</span>
              </li>
              <li>
                <h3 className="item-title"><i className='bx bx-envelope'></i>Email</h3>
                <span>shyan.qiao@gmail.com</span>
              </li>
              <li>
                <h3 className="item-title"><i className='bx bx-home-circle'></i>Address</h3>
                <span>Oakland, CA, USA</span>
              </li>
              <li>
                <h3 className="item-title"><i className='bx bxl-linkedin'></i>LinkedIn</h3>
                <span><a href="https://www.linkedin.com/in/shuyanqiao" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/shuyanqiao</a></span>
              </li>
            </ul>
          </div>

          <div className="contact-right">
            <p>Explore more possibilities<br /><span>Please contact me</span></p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="first-row">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="second-row">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  id="title"
                  placeholder="Title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div className="third-row">
                <textarea
                  id="message"
                  placeholder="Message"
                  rows="7"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button className="contact-btn" type="submit">
                Send Message <i className='bx bx-send'></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
