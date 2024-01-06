import React from 'react';
import './About.css';
import Me2 from '../../assets/About.jpg';
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section_title">
      À propos de moi
      </h2>

      <div className="about_container grid">
        <img src={Me2} style={{width:'200px', borderRadius:'50%'}} className='about_img' alt="" />

        <div className="about_data grid">

          <div className="about_info">
            <p className="about_description">
            Je suis issu d'une formation en génie civil, option BTP, avec l'obtention d'une licence. 
            Ma passion pour le monde technologique informatique m'a conduit à suivre une formation en codage (développement web) 
            dans une école spécialisée. Aujourd'hui, je peux me positionner en tant que développeur web et technicien en génie civil. 
            Mon objectif est d'appliquer les compétences en codage acquises dans le domaine du BTP, en recherchant des solutions numériques et technologiques. 
            Je travaille également sur des projets de développement communautaire.
            <br />
            <br />
            Je continue constamment à apprendre pour mon épanouissement personnel et professionnel, 
            en développant continuellement mon esprit créatif, mon leadership personnel, ainsi que mon expertise dans ce que j'entreprends.
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