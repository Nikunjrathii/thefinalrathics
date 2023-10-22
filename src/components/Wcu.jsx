import React from 'react';
import { Link } from 'react-router-dom';
import './Wcu.css';

const Wcu = () => {
  return (
    <div className="why-choose-container">
      <h2 className="why-choose-heading">Why Choose Us?</h2>
      <div className="reasons-container">
        <div className="reason">
          <div className="reason-icon">
            <i className="fas fa-check-circle"></i>
          </div>
          <h3 className="reason-title">Quality Services</h3>
          <p className="reason-description">We deliver top-notch solutions tailored to your needs.</p>
        </div>
        <div className="reason">
          <div className="reason-icon">
            <i className="fas fa-users"></i>
          </div>
          <h3 className="reason-title">Experienced Team</h3>
          <p className="reason-description">Our skilled professionals ensure excellent results.</p>
        </div>
        <div className="reason">
          <div className="reason-icon">
            <i className="fas fa-lightbulb"></i>
          </div>
          <h3 className="reason-title">Innovative Solutions</h3>
          <p className="reason-description">We bring creative ideas to transform your business.</p>
        </div>
      </div>
      <Link to="/portfolio" className="portfolio-button">
        Explore Our Portfolio
      </Link>
    </div>
  );
}

export default Wcu;
