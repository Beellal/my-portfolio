import React from 'react';
import { motion } from 'framer-motion';
import './ServicesPage.css';
import Image1 from '../../assets/S1.png';
import Image2 from '../../assets/S2.png';
import Image3 from '../../assets/S3.png';
import { themeContext } from "../../Context";
import { useContext } from "react";

const services = [
  {
    id: 1,
    image: Image1,
    title: "Technicien BTP",
    description: "Pour tous les travail de construction et de gestion de projet de construction",
  },
  {
    id: 2,
    image: Image3,
    title: "Program & Community (Manager)",
    description: "Pour des start-ups et des entreprises opérant dans le domaine du BTP.",
  },
  {
    id: 3,
    image: Image2,
    title: "Development web",
    description: "Je travaille principalement du côté Frontend, avec des compétences également dans le Backend.",
  }
];

const ServicesPage = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="services container section" id="services">
      <motion.h2 
        className="section_title"
        style={{ color: darkMode ? "White" : "" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Services
      </motion.h2>

      <motion.div 
        className="services_container grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map(({ id, image, title, description }) => (
          <motion.div 
            className="services_card" 
            key={id}
            style={{ backgroundColor: darkMode ? "White" : "" }}
            variants={cardVariants}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
          >
            <motion.img 
              src={image}
              alt={title}
              className="services_img"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />

            <motion.h3 
              className="services_title"
              style={{ color: darkMode ? "rgb(255, 76, 97)" : "" }}
            >
              {title}
            </motion.h3>

            <motion.p 
              className="services_description"
              style={{ color: darkMode ? "black" : "" }}
            >
              {description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesPage;