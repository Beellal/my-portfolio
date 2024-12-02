import React from 'react';
import { motion } from 'framer-motion';

const filters = ['Tous', 'Developpement_Web', 'BTP'];

const PortfolioFilter = ({ activeFilter, onFilterClick }) => {
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
          {filter}
        </motion.span>
      ))}
    </div>
  );
};

export default PortfolioFilter;