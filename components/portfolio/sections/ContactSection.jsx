"use client";

import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email_id: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: "fa-envelope",
      title: "Email",
      value: "solangimuqeet@gmail.com",
      link: "mailto:solangimuqeet@gmail.com"
    },
    {
      icon: "fa-brands fa-whatsapp",
      title: "WhatsApp",
      value: "+92 308 3160159",
      link: "https://wa.me/923083160159?text=Hi%20Muqeet,%20I'm%20interested%20in%20your%20services"
    },
    {
      icon: "fa-phone",
      title: "Phone",
      value: "+92 308 3160159",
      link: "tel:+923083160159"
    },
    {
      icon: "fa-map-marker-alt",
      title: "Location",
      value: "Karachi, Pakistan",
      link: null
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS integration would go here
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Thank you! Your message has been sent successfully.');
      setFormData({
        from_name: "",
        email_id: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Oops! Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>

        {/* Contact Info */}
        <div className="row">
          {contactInfo.map((item, index) => (
            <div key={index} className="contact-info-item padd-15">
              <div className="icon">
                <i className={`fa ${item.icon}`}></i>
              </div>
              <h4>{item.title}</h4>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer">{item.value}</a>
              ) : (
                <p>{item.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Professional Links */}
        <div className="row">
          <div className="professional-links-section padd-15">
            <h3 className="links-section-title">Connect With Me</h3>
            <div className="professional-links-grid">
              <a 
                href="https://github.com/Muqeetahmedsolangi" 
                target="_blank"
                rel="noopener noreferrer"
                className="professional-link-card"
              >
                <i className="fa-brands fa-github"></i>
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/muqeetahmed" 
                target="_blank"
                rel="noopener noreferrer"
                className="professional-link-card"
              >
                <i className="fa-brands fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://www.fiverr.com/zaviial?public_mode=true" 
                target="_blank"
                rel="noopener noreferrer"
                className="professional-link-card fiverr-card"
              >
                <span className="fiverr-icon">F</span>
                <span>Fiverr</span>
              </a>
              <a 
                href="https://www.upwork.com/freelancers/~0151e635a568d50da5" 
                target="_blank"
                rel="noopener noreferrer"
                className="professional-link-card"
              >
                <i className="fa-brands fa-upwork"></i>
                <span>Upwork</span>
              </a>
              <a 
                href="https://stackoverflow.com/users/30508733/zavii" 
                target="_blank"
                rel="noopener noreferrer"
                className="professional-link-card"
              >
                <i className="fa-brands fa-stack-overflow"></i>
                <span>Stack Overflow</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="row">
          <div className="contact-form padd-15">
            <div className="form-header">
              <h3>Send Me a Message</h3>
              <p>I'm very responsive and will get back to you within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="from_name"
                      placeholder="Your Name"
                      value={formData.from_name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email_id"
                      placeholder="Your Email"
                      value={formData.email_id}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Your Message"
                      rows="6"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <button 
                    type="submit" 
                    className="btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
