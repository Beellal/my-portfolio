import React from 'react';
import { motion } from 'framer-motion';

const BlogFilter = ({ categories, activeCategory, onCategoryChange, language }) => {
    return (
        <div className="blog_filters">
            {categories.map((category) => (
                <motion.button
                    key={category}
                    className={`blog_filter ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => onCategoryChange(category)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {category === 'Tous' ? (language === 'en' ? 'All' : 'Tous') : category}
                </motion.button>
            ))}
        </div>
    );
};

export default BlogFilter;