import React, { useEffect } from 'react';
import GetQuote from './GetQuote'; 
import './other/ContactUs.css'; 

const ContactUs = () => {
  useEffect(() => {
    document.title = 'Contact Us';
  }, []);
  return (
    <div className="contact-us-container">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>If you have any questions or would like to discuss exciting opportunities, please get in touch with us:</p>
      </div>
      <div className="contact-content">
        <GetQuote />
        <div className="contact-info">
          <h3>Let's Collaborate!</h3>
          <p>We're always open to new ideas and partnerships. Let's create something amazing together.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
