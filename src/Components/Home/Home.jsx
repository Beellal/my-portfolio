import React from 'react';
import './Home.css';
import Me from '../../assets/Me1.png';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home_img" />
        <h1 className="home_name">Technicien en BTP et développeur web</h1>
        <span className="home_education"></span>

        <HeaderSocials/>

        <a href="#contact" className="btn">Contactez-moi</a>
        <ScrollDown/>
      </div>

      <Shapes/>
    </section>
  )
}

export default Home