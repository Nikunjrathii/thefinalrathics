import React, { useEffect } from "react";
import './Careers.scss';

function Careers() {
  useEffect(() => {
    document.title = 'Careers';
  }, []);
  return (
    <div className="Career">
      <div className="bg-img">
        <div className="bg-blur">
          <div className="content">
            <h1>Join Our Team</h1>
            <p>
            Are you passionate about innovation, teamwork, and making a meaningful impact? We're always on the lookout for talented individuals who share our vision. Explore exciting career opportunities and be a part of our journey to excellence. Join us in shaping the future together.
            </p>
          </div>
        </div>
      </div>
      <div className="jobs">
        <h1>Job Openings</h1>
        <p>
          Are you interested in joining Team RCS and our mission? View our
          openings below to apply
        </p>
        <p className="no-avl-position">
          We will initiate the hiring process shortly.
        </p>
      </div>
    </div>
  );
}

export default Careers;