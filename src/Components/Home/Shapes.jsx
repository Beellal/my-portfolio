import React from 'react';
import { motion } from 'framer-motion';

const Shapes = () => {
  const shapeVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
  };

  return (
    <div className="shapes">
      {[...Array(11)].map((_, index) => (
        <motion.div
          key={`shape-${index + 1}`}
          className={`shape s${index + 1}`}
          variants={shapeVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {index + 1}
        </motion.div>
      ))}

      {[...Array(11)].map((_, index) => (
        <motion.svg
          key={`svg-${index + 1}`}
          width="33"
          height="20"
          className={`shape s${index + 1}`}
          xmlns="http://www.w3.org/2000/svg"
          variants={shapeVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: (index + 11) * 0.1 }}
        >
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="currentColor">
            {index === 4 ? 'Beellal' : index + 1}
          </text>
        </motion.svg>
      ))}
    </div>
  );
};

export default Shapes;