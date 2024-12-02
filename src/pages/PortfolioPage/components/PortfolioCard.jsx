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

      <span className="portfolio_category">{item.category}</span>
      <h3 className="portfolio_title">{item.title}</h3>
      <a href={item.link} className="portfolio_button" target="_blank" rel="noopener noreferrer">
        <i className="icon-link portfolio_button-icon"></i>
      </a>
    </motion.div>
  );
};

export default PortfolioCard;