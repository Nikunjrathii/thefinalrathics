import React from 'react';
import './TeamPage.css';
import { FaUsers, FaCode, FaChartLine, FaBriefcase, FaPaintBrush, FaArchway, FaUsersCog, FaHandshake, FaLightbulb } from 'react-icons/fa';

const TeamPage = () => {
  return (
    <section className="con-team-built-wr">
      <div className="center-wrapper">
        <div className="con-team-built-head common-heading">
          <h3>
            <span>Embrace the power of teamwork</span>
            <span>We turn dreams into reality!</span>
          </h3>
        </div>
        <div className="con-icon-title-wr team-icon-title-wr">
          <div className="con-icon-title-blk wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.2s">
            <div className="con-icon-blk">
              <FaUsers className="icon" />
            </div>
            <div className="con-title-blk">
              <h4>Innovative Managers</h4>
            </div>
          </div>
          <div className="con-icon-title-blk wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.2s">
            <div className="con-icon-blk">
              <FaCode className="icon" />
            </div>
            <div className="con-title-blk">
              <h4>Passionate Software Developers</h4>
            </div>
          </div>
          <div className="con-icon-title-blk wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.2s">
            <div className="con-icon-blk">
              <FaChartLine className="icon" />
            </div>
            <div className="con-title-blk">
              <h4>Skilled SEO</h4>
            </div>
          </div>
          <div className="con-icon-title-blk wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.2s">
            <div className="con-icon-blk">
              <FaBriefcase className="icon" />
            </div>
            <div className="con-title-blk">
              <h4>Talented Project Managers</h4>
            </div>
          </div>
          <div className="con-icon-title-blk wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.2s">
            <div className="con-icon-blk">
              <FaPaintBrush className="icon" />
            </div>
            <div className="con-title-blk">
              <h4>Creative Graphic Designers</h4>
            </div>
          </div>
          <div className="con-icon-title-blk wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.2s">
            <div className="con-icon-blk">
              <FaArchway className="icon" />
            </div>
            <div className="con-title-blk">
              <h4>Solution Architects</h4>
            </div>
          </div>
          <div className="con-icon-title-blk wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.2s">
            <div className="con-icon-blk">
              <FaUsersCog className="icon" />
            </div>
            <div className="con-title-blk">
              <h4>Calm HR Team</h4>
            </div>
          </div>
          <div className="con-icon-title-blk wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.2s">
            <div className="con-icon-blk">
              <FaHandshake className="icon" />
            </div>
            <div className="con-title-blk">
              <h4>Experienced BDE Team</h4>
            </div>
          </div>
          <div className="con-icon-title-blk wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.2s">
            <div className="con-icon-blk">
              <FaLightbulb className="icon" />
            </div>
            <div className="con-title-blk">
              <h4>Foretell Business- Process Designers</h4>
            </div>
          </div>
          <div className="con-icon-title-blk wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.2s">
            <div className="con-icon-blk">
              <FaUsersCog className="icon" />
            </div>
            <div className="con-title-blk">
              <h4>Energetic &amp; dedicated Web Developers</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamPage;
