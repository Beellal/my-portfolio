import React from 'react';
import { motion } from 'framer-motion';

const PortfolioCard = ({ item, darkMode }) => {
  return (
    <motion.div 
      className="portfolio_card"
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: darkMode ? 'white' : '' }}
    >
      <div className="portfolio_thumbnail">
        <img src={item.image} alt="" className="portfolio_img" />
        <div className="portfolio_mask"></div>
      </div>

      <div className="portfolio_content">
        <span className="portfolio_category">{item.category}</span>
        <h3 className="portfolio_title">{item.title}</h3>
        <p className="portfolio_description">{item.description}</p>
        
        <div className="portfolio_tech">
          {item.technologies.map((tech, index) => (
            <span key={index} className="tech_tag">{tech}</span>
          ))}
        </div>

        <div className="portfolio_links">
          <a href={item.link} className="portfolio_link" target="_blank" rel="noopener noreferrer">
            <i className="icon-link"></i>
            <span>Demo</span>
          </a>
          <a href={item.githubLink} className="portfolio_link" target="_blank" rel="noopener noreferrer">
            <i className="icon-social-github"></i>
            <span>Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;