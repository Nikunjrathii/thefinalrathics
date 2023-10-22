import React from "react";

import "../components/Footer.css";
import {FaLocationArrow,FaMobileAlt,FaEnvelope} from "react-icons/fa"
import { Link } from "react-router-dom";

const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
<div className="col">
    <div className="title">About</div>
    <div className="text">We are a leading IT consulting company offering web development, digital marketing, social media advertising, logo design, and corporate gifting. Enhance your online presence and achieve business goals with our innovative solutions. Contact us today.</div>
</div>
<div className="col"><div className="title">Contact</div>
<div className="c-item"><FaLocationArrow/>
<div className="text">182,Shri mangal Nagar, Indore, Madhya Pradesh, 452001</div>
</div>
<div className="c-item"><FaMobileAlt/>
<div className="text"><span onclick="window.location.href='tel:+917879844442';">636-1850-218</span>
</div>
</div>
<div className="c-item"><FaEnvelope/>
<div className="text"><span onclick="location.href='mailto:admin@rcs.com';">support@rathiconsultancyservices.com</span>
</div>
</div>
</div>
<div className="col"><div className="title">Services</div>
<span className="text">Web Development</span>
<span className="text">Web Designing</span>
<span className="text">Logo Designing</span>
<span className="text">Digital Marketing</span>
<span className="text">Social Media Advertisment</span>
<span className="text">Corporate Gifting</span>

</div>
<div className="col"><div className="title">Pages</div>
<span><Link className="text" to="/">Home</Link></span>
<span><Link className="text" to="/about">About</Link></span>
<span><Link className="text" to="services">Services</Link></span>
<span><Link className="text" to="portfolio">Portfolio</Link></span>
<span><Link className="text" to="careers">Careers</Link></span>
<span><Link className="text" to="contactus">Contact Us</Link></span>
</div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">Created By Rathi Consultancy Services.</div>
                
            </div>
        </div>
    </footer>;
};

export default Footer;
