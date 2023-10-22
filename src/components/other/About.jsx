import React, { useEffect } from 'react';
import './About.css';
import image from '../../assest/mem1.png';
import image2 from '../../assest/Chotu.jpeg'
import image3 from '../../assest/surya.jpeg'
import image4 from '../../assest/aman.png'
import image5 from '../../assest/muskan.jpg'
import TeamContent from './TeamContent';
import TeamPage from './TeamPage';

const About = () => {
  useEffect(() => {
    document.title = 'About Us';
  }, []);
    
  return (
    <>
    
    <div className="about-us">
      <div className="company-info">
        <h2>About Our Company</h2>
        <p>
        Hey there! We're an awesome tech company based in Indore, and we're making some serious waves in the market. Our team of talented folks is working tirelessly to bring you innovative solutions that will blow your mind. We're all about shaking things up, disrupting industries, and helping businesses thrive. With our cutting-edge tech, strategic vision, and passion for customer satisfaction, we're your go-to partner for success in the digital world. Join us on this wild ride and let's create something extraordinary together.
        </p>
      </div>

      <h2 className="Teamhead">Our Team</h2>
      <div className="team-members">
        <div className="member member1">
          <img src={image} alt="Member 1" />
          <h3>Nikunj Rathi</h3>
          <p>Web Developer</p>
          <p>Bachelor's Degree in Computer Science</p>
        </div>

        <div className="member member2">
          <img src={image2} alt="Member 2" />
          <h3>Shreyansh Chaudhary</h3>
          <p>Digital Marketer</p>
          <p> Master's Degree in Marketing</p>
        </div>

        <div className="member member3">
          <img src={image3} alt="Member 3" />
          <h3>Surynarayan Sharma</h3>
          <p>Graphic Designer</p>
          <p>Bachelor's Degree in Fine Arts</p>
        </div>

        <div className="member member4">
          <img src={image5} alt="Member 4" />
          <h3>Muskan Maheshwari</h3>
          <p>Software Engineer</p>
          <p>Bachelor's Degree in Computer Science</p>
        </div>

        <div className="member member5">
          <img src={image4} alt="Member 5" />
          <h3>Aman Agrawal</h3>
          <p>Project Manager</p>
          <p>Master's Degree in Business Administration</p>
        </div>
      </div>
    </div>
    <TeamPage/>
    <TeamContent/>
    </>
  );
};

export default About;
