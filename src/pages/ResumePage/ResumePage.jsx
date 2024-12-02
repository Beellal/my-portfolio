import React from 'react';
import { motion } from 'framer-motion';
import './ResumePage.css';
import Data from '../../Components/Resume/Data';
import { themeContext } from "../../Context";
import { useContext } from "react";

const ResumePage = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const TimelineItem = ({ data, delay }) => (
    <motion.div 
      className="timeline_item"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <i className={data.icon}></i>
      <span className="timeline_date">{data.year}</span>
      <h3 className="timeline_title">{data.title}</h3>
      <p className="timeline_text" style={{ color: darkMode ? "black" : "" }}>
        {data.desc}
      </p>
    </motion.div>
  );

  return (
    <motion.section 
      className="resume container section" 
      id="resume"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <motion.h2 
        className="section_title"
        style={{ color: darkMode ? "White" : "" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Experience
      </motion.h2>

      <div className="resume_container grid">
        <motion.div 
          className="timeline grid"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.span 
            className="span_ex_fr"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Formation
          </motion.span>
          {Data.map((val, index) => {
            if (val.category === "education") {
              return (
                <TimelineItem 
                  key={val.id} 
                  data={val} 
                  delay={0.4 + index * 0.1}
                />
              );
            }
            return null;
          })}
        </motion.div>

        <motion.div 
          className="timeline grid"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.span 
            className="span_ex_fr"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Experience
          </motion.span>
          {Data.map((val, index) => {
            if (val.category === "experience") {
              return (
                <TimelineItem 
                  key={val.id} 
                  data={val} 
                  delay={0.4 + index * 0.1}
                />
              );
            }
            return null;
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ResumePage;