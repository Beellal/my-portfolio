import React from 'react';
import { motion } from 'framer-motion';
import './HomePage.css';
import Me from '../../assets/Me1.png';
import HeaderSocials from '../../Components/Home/HeaderSocials';
import ScrollDown from '../../Components/Home/ScrollDown';
import Shapes from '../../Components/Home/Shapes';
import { themeContext } from "../../Context";
import { useContext } from "react";

const HomePage = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="home container"
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      <div className="intro">
        <motion.img 
          src={Me} 
          alt="" 
          className="home_img"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.h1 
          className="home_name"
          style={{ color: darkMode ? "White" : "" }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Technicien en BTP et développeur web
        </motion.h1>
        <span className="home_education"></span>

        <HeaderSocials />

        <motion.a 
          href="#contact" 
          className="btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contactez-moi
        </motion.a>
        <ScrollDown />
      </div>
      <Shapes />
    </motion.section>
  );
};

export default HomePage;