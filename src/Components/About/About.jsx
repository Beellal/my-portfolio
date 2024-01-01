import React from 'react';
import './About.css';
import Me2 from '../../assets/About.jpg';
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section_title">
        A propos
      </h2>

      <div className="about_container grid">
        <img src={Me2} style={{width:'200px', borderRadius:'50%'}} className='about_img' alt="" />

        <div className="about_data grid">

          <div className="about_info">
            <p className="about_description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus iure nostrum, 
              deserunt, sapiente eius nobis possimus, corrupti rem sint quo ratione consequatur 
              dolore consectetur dicta id iusto eligendi obcaecati.
            </p>
             <a href="" className="btn">Telecharger Mon Curriculum</a>
          </div>

          <div className="about_skills grid">

            
            <div className="skills_data">

              <div className="skills_titles">
                <h3 className="skills_name">Génie-Civil</h3>
                <span className="skills_number">90%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage geci"></span>
              </div>
            </div>



            <div className="skills_data">

              <div className="skills_titles">
                <h3 className="skills_name">Developpement Web</h3>
                <span className="skills_number">80%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage development"></span>
              </div>
            </div>



          </div>
        </div>
      </div>

      <AboutBox/>
    </section>
  )
}

export default About