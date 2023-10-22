import React from 'react';
import { FaMoneyCheck, FaChartLine, FaIndustry, FaBriefcase, FaHotel, FaGraduationCap, FaCalendarAlt} from 'react-icons/fa';
import './Iws.css';

const Iws = () => {
  return (
    <div className="industries-container">
      <h2 className="section-title">Industries We Serve</h2>
      <h4 className="sub-heading">Tailored IT services designed specifically for your industry</h4>
      <h5><p className="description">
      With our industry-focused solutions, streamline workflows and boost productivity in your business.<br/> RCS provides tailored, compliant solutions to meet your company's unique requirements.
      </p></h5>
      <div className="icons-container">
        <div className="industry">
          <FaMoneyCheck className="icon" />
          <span className="icon-name">Banking</span>
        </div>
        <div className="industry">
          <FaChartLine className="icon" />
          <span className="icon-name">Capital Markets</span>
        </div>
        <div className="industry">
          <FaIndustry className="icon" />
          <span className="icon-name">Manufacturing</span>
        </div>
        <div className="industry">
          <FaBriefcase className="icon" />
          <span className="icon-name">Business Startup</span>
        </div>
        <div className="industry">
          <FaHotel className="icon" />
          <span className="icon-name">Hotel & Tourism</span>
        </div>
        <div className="industry">
          <FaGraduationCap className="icon" />
          <span className="icon-name">Education</span>
        </div>
        <div className="industry">
          <FaCalendarAlt className="icon" />
          <span className="icon-name">Event Management</span>
        </div>
          </div>
    </div>
  );
}

export default Iws;
