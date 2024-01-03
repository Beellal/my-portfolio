import React from 'react';
import './Resume.css';
import Data from './Data.jsx';
import Card from './Card.jsx';

const Resume = () => {
  return (
    <section className="resume container section" id='resume'>
      <h2 className="section_title">Experience</h2>

      <div className="resume_container grid">


        <div className="timeline grid">
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