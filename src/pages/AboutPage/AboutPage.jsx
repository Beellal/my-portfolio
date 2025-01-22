import React from 'react';
import { motion } from 'framer-motion';
import './AboutPage.css';
import Me2 from '../../assets/Beellal.png';
// import AboutBox from '../../Components/About/AboutBox';
import { themeContext } from "../../Context";
import { useContext } from "react";

const AboutPage = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const pageVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0, 
      x: 100,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section 
      className="about container section" 
      id="about"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <h2 className="section_title" style={{ color: darkMode ? "White" : "" }}>
        À propos de moi
      </h2>

      <div className="about_container grid">
        <motion.img
          src={Me2}
          alt="About"
          className="about_img"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
          {/* Ajouter Grid */}
        <div className="about_data" style={{ backgroundColor: darkMode ? "black" : "" }}>
          <div className="about_info">
            <motion.p 
              className="about_description"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Ingénieur civil et développeur web, je m'engage pleinement pour le développement durable, 
              en mettant l'accent sur les ODD 9 (Industrie, innovation et infrastructure) et ODD 17 
              (Partenariats pour la réalisation des objectifs). 
            </motion.p>
            <motion.p 
              className="about_description"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              En tant que fondateur d'une organisation communautaire, 
              je mène des actions concrètes pour promouvoir l'innovation, 
              les infrastructures durables, et encourager la collaboration 
              à l'échelle locale et internationale. Mon objectif 
              est de contribuer à un avenir plus équitable et respectueux de l'environnement, 
              en combinant mes compétences techniques et mon engagement social.
            </motion.p>
            <motion.a 
              href="#" 
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Telecharger Mon Curriculum
            </motion.a>
          </div>
{/* 
          <motion.div 
            className="about_skills grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name" style={{ color: darkMode ? "White" : "" }}>
                  Génie-Civil
                </h3>
                <span className="skills_number">90%</span>
              </div>
              <motion.div 
                className="skills_bar"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                <motion.span 
                  className="skills_percentage geci"
                  initial={{ width: 0 }}
                  animate={{ width: "90%" }}
                  transition={{ duration: 1, delay: 0.8 }}
                ></motion.span>
              </motion.div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name" style={{ color: darkMode ? "White" : "" }}>
                  Developpement Web
                </h3>
                <span className="skills_number">80%</span>
              </div>
              <motion.div 
                className="skills_bar"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                <motion.span 
                  className="skills_percentage development"
                  initial={{ width: 0 }}
                  animate={{ width: "80%" }}
                  transition={{ duration: 1, delay: 1 }}
                ></motion.span>
              </motion.div>
            </div>
          </motion.div> */}
        </div>
      </div>

      {/* <AboutBox /> */}
    </motion.section>
  );
};

export default AboutPage;