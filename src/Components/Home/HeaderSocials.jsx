import React from 'react';
import './Home.css';

const HeaderSocials = () => {
  return (
    <div className="home_socials">
      <a href="https://www.linkedin.com/in/mahamane-habibou-bilal-364771217/" className="home_socials-link" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-linkedin-in"></i>
      </a>

      <a href="https://github.com/Beellal" className="home_socials-link" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-github-alt"></i>
      </a>

      <a href="https://www.facebook.com/profile.php?id=100017645508804" className="home_socials-link" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-facebook-f"></i>
      </a>

      <a href="https://twitter.com/habibou_bilal" className="home_socials-link" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-x-twitter"></i>
      </a>

      <a href="https://www.instagram.com/beellal_/" className="home_socials-link" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-instagram"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;