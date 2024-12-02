import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PortfolioPage.css';
import PortfolioFilter from './components/PortfolioFilter';
import PortfolioCard from './components/PortfolioCard';
import { portfolioData } from './data/portfolioData';
import { themeContext } from "../../Context";
import { useContext } from "react";

const PortfolioPage = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [items, setItems] = useState(portfolioData);
  const [activeFilter, setActiveFilter] = useState('Tous');

  const filterItems = (categoryItem) => {
    setActiveFilter(categoryItem);
    if (categoryItem === 'Tous') {
      setItems(portfolioData);
      return;
    }
    const updatedItems = portfolioData.filter((item) => item.category === categoryItem);
    setItems(updatedItems);
  };

  return (
    <section className="portfolio container section" id="portfolio">
      <motion.h2 
        className="section_title"
        style={{ color: darkMode ? "White" : "" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Portefeuille
      </motion.h2>

      <PortfolioFilter 
        activeFilter={activeFilter}
        onFilterClick={filterItems}
      />

      <motion.div 
        className="portfolio_container grid"
        layout
      >
        <AnimatePresence>
          {items.map((item) => (
            <PortfolioCard 
              key={item.id}
              item={item}
              darkMode={darkMode}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default PortfolioPage;