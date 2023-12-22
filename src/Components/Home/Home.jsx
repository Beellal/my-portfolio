import React from 'react';
import './Home.css';
import Me from '../../assets/Me.jpg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home_img" />
        <h1 className="home_name">Mahamane Habibou Bilal</h1>
        <span className="home_education">Je suis developpeur Front-End</span>

        <HeaderSocials/>

        <a href="#contact" className="btn">Hire me</a>
        <ScrollDown/>
      </div>
    </section>
  )
}

export default Home