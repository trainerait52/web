import React, { useState } from 'react';
import { FaCertificate } from "react-icons/fa6";
import './About.css';
// import bg from '../images/flowers.jpg'
function About() {
  const [isTextExpanded, setIsTextExpanded] = useState(false);

  const toggleText = () => {
    setIsTextExpanded(!isTextExpanded);
  };
  return (
    <div>
  {/* style={{backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat"}} */}
    <div className="about-container">
   
      <header className="about-header" >
        <h1 style={{color:"white"}}>About Us</h1>
      </header>
      <section className="about-content">
        <div className="about-description">
          <h2 style={{color:"black"}}>Our Story</h2>
          <FaCertificate  />
          <p>
          A dress is a garment traditionally worn by women or girls consisting of a skirt with an attached bodice. It consists of a top piece that covers the torso and hangs down over the legs. A dress can be any one-piece garment containing a skirt of any length, and can be formal or casual.
          </p>
        </div>
        <div className="about-team">
          <h2>Our Team</h2>
          <div className="team-member">
            <img src="https://www.entrepreneurindia.com/tech25web/images/speakers/vineetas.jpg" alt="Team Member 1" />
            <h3>Elizabath</h3>
            <p>Co-Founder</p>
          </div>
          <div className="team-member">
            <img src="https://static.fibre2fashion.com/InterviewResources/UserImages/3750/headshot.jpg" alt="Team Member 2" />
            <h3>Jarkol</h3>
            <p>Lead Developer</p>
          </div>
        </div>
      </section>
      {/* ////////// */}
      <div className="text-container">
      <p>
        In publishing and graphic design, Lorem ipsum is a placeholder
        <br />
        text commonly used to demonstrate the visual form of a document or a typeface without
        <br />
        relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available
      </p>
      {isTextExpanded && (
        <div className="additional-text">
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate
            <br /> the visual form of a document or a typeface without relying on meaningful content.
            <br /> Lorem ipsum may be used as a placeholder before final copy is available
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
            <br /> demonstrate the visual form of a document or a typeface without relying on meaningful content.
            <br /> Lorem ipsum may be used as a placeholder before final copy is available
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
            <br /> demonstrate the visual form of a document or a typeface without relying on meaningful content.
            <br /> Lorem ipsum may be used as a placeholder before final copy is available
          </p>
        </div>
      )}
      <button type="button" className="btn btn-outline-primary" onClick={toggleText}>
        {isTextExpanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
         </div>
    </div>
  );
}

export default About;
