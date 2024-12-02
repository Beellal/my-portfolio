import React from 'react';
import { motion } from 'framer-motion';
import './AboutPage.css';
import Me2 from '../../assets/About.jpg';
import AboutBox from '../../Components/About/AboutBox';
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

        <div className="about_data grid" style={{ backgroundColor: darkMode ? "black" : "" }}>
          <div className="about_info">
            <motion.p 
              className="about_description"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Je suis issu d'une formation en génie civil, option BTP, avec
              l'obtention d'une licence. Ma passion pour le monde technologique
              informatique m'a conduit à suivre une formation en codage
              (développement web) dans une école spécialisée.
            </motion.p>
            <motion.p 
              className="about_description"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Aujourd'hui, je peux me positionner en tant que développeur web et technicien en
              génie civil. Mon objectif est d'appliquer les compétences en codage acquises 
              dans le domaine du BTP, en recherchant des solutions numériques et technologiques.
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
          </motion.div>
        </div>
      </div>

      <AboutBox />
    </motion.section>
  );
};

export default AboutPage;