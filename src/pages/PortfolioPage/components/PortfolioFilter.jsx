import React from 'react';
import { motion } from 'framer-motion';

const filters = ['Tous', 'Developpement_Web', 'BTP', 'Design_Graphique', 'Reseaux_Sociaux'];

const PortfolioFilter = ({ activeFilter, onFilterClick }) => {
  const getFilterLabel = (filter) => {
    const labels = {
      'Tous': 'Tous',
      'Developpement_Web': 'Développement Web',
      'BTP': 'BTP',
      'Design_Graphique': 'Design Graphique',
      'Reseaux_Sociaux': 'Réseaux Sociaux'
    };
    return labels[filter] || filter;
  };

  return (
    <div className="portfolio_filters">
      {filters.map((filter) => (
        <motion.span
          key={filter}
          className={`portfolio_filter-item ${activeFilter === filter ? 'active' : ''}`}
          onClick={() => onFilterClick(filter)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {getFilterLabel(filter)}
        </motion.span>
      ))}
    </div>
  );
};

export default PortfolioFilter;