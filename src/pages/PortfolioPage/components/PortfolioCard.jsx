import React from 'react';
import { motion } from 'framer-motion';

const PortfolioCard = ({ item, darkMode }) => {
  const isGraphicDesign = item.category === 'Design_Graphique';
  const isSocialMedia = item.category === 'Reseaux_Sociaux';
  
  const getCategoryColor = (category) => {
    const colors = {
      'Developpement_Web': '#4FACFE',
      'BTP': '#FF6B6B',
      'Design_Graphique': '#43E97B',
      'Reseaux_Sociaux': '#FFD93D'
    };
    return colors[category] || '#FF6B6B';
  };

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
      {(isGraphicDesign || isSocialMedia) && (
        <div className="portfolio_social_badge">
          {isGraphicDesign ? '🎨 Design' : '📱 Social'}
        </div>
      )}
      
      <div className="portfolio_thumbnail">
        <img src={item.image} alt="" className="portfolio_img" />
        <div className="portfolio_mask"></div>
      </div>

      <div className="portfolio_content">
        <span 
          className="portfolio_category"
          style={{ backgroundColor: getCategoryColor(item.category) }}
        >
          {item.category.replace('_', ' ')}
        </span>
        <h3 className="portfolio_title">{item.title}</h3>
        <p className="portfolio_description">{item.description}</p>
        
        <div className="portfolio_tech">
          {item.technologies.map((tech, index) => (
            <span key={index} className="tech_tag">{tech}</span>
          ))}
        </div>

        {(isGraphicDesign || isSocialMedia) && (
          <div className="portfolio_views">
            <i className="icon-eye"></i>
            <span>{Math.floor(Math.random() * 1000) + 500} vues</span>
            <i className="icon-heart" style={{ marginLeft: '1rem' }}></i>
            <span>{Math.floor(Math.random() * 100) + 20} likes</span>
          </div>
        )}
        <div className="portfolio_links">
          {item.link !== '#' && (
            <a href={item.link} className="portfolio_link" target="_blank" rel="noopener noreferrer">
              <i className={isSocialMedia ? "icon-social-linkedin" : "icon-link"}></i>
              <span>{isSocialMedia ? 'Voir Post' : isGraphicDesign ? 'Voir Design' : 'Demo'}</span>
            </a>
          )}
          {item.githubLink !== '#' && (
            <a href={item.githubLink} className="portfolio_link" target="_blank" rel="noopener noreferrer">
              <i className="icon-social-github"></i>
              <span>Code</span>
            </a>
          )}
          {(isGraphicDesign || isSocialMedia) && (
            <button className="portfolio_link" style={{ border: 'none', background: 'rgba(255, 76, 96, 0.1)' }}>
              <i className="icon-share"></i>
              <span>Partager</span>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;