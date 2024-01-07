import React from 'react';
import './Resume.css';
import Data from './Data.jsx';
import Card from './Card.jsx';
import { themeContext } from "../../Context";
import { useContext } from "react";

const Resume = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section className="resume container section" id='resume'>
      <h2 className="section_title" style={{ color: darkMode ? "White" : "" }}>Experience</h2>

      <div className="resume_container grid">


        <div className="timeline grid">
          <span className='span_ex_fr'>Formation</span>
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                
                <Card 
                key={id} 
                icon={val.icon} 
                title={val.title} 
                year={val.year} 
                desc={val.desc} />
              );
            }
          })}
        </div>

        <div className="timeline grid">
        <span className='span_ex_fr'>Experience</span>
          {Data.map((val, index) => {
            if (val.category === "experience") {
              return (
                <Card 
                key={index} 
                icon={val.icon} 
                title={val.title} 
                year={val.year} 
                desc={val.desc} 
                />
              )
            }
          })}
        </div>


      </div>
    </section>
  )
}

export default Resume