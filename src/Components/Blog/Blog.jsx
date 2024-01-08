import React from 'react';
import './Blog.css';
import Image from '../../assets/Me1.png'
import Image2 from '../../assets/EFST (1).png'
import { themeContext } from "../../Context";
import { useContext } from "react";


const Blog = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section className="blog container section" id='blog'>
      <h2 className="section" style={{ color: darkMode ? "White" : "" }}>Articles</h2>

      <div className="blog_container grid">

        
        <div className="blog_card">
          <div className="blog_thumb">
            <a href="#">
              <span className="blog_category">Revue</span>
            </a>
            <a href="https://www.linkedin.com/posts/beellal_normes-gaeznie-civil-activity-7043599094530871296-66Kc?utm_source=share&utm_medium=member_desktop">
                <img src={Image} alt="" className="blog_img" />
            </a>
          </div>

          <div className="blog_details">
            <h3 className="blog_title" style={{ color: darkMode ? "White" : "" }}>Les normes de construction.</h3>
            <div className="blog_meta">
              <span>05 Mars 2023</span>
              <span className="blog_dot">LinkedIn</span>
              <span>Beellal</span>
            </div>
          </div>
        </div>


        <div className="blog_card">
          <div className="blog_thumb">
            <a href="#">
              <span className="blog_category">Revue</span>
            </a>
            <a href="#">
                <img src={Image2} alt="" className="blog_img" />
            </a>
          </div>

          <div className="blog_details">
            <h3 className="blog_title" style={{ color: darkMode ? "White" : "" }}>English For The Sahel</h3>
            <div className="blog_meta">
              <span>06 Janvier 2024</span>
              <span className="blog_dot">Facebook</span>
              <span>EFST</span>
            </div>
          </div>
        </div>


        {/* <div className="blog_card">
          <div className="blog_thumb">
            <a href="#">
              <span className="blog_category">Revue</span>
            </a>
            <a href="#">
                <img src={Image} alt="" className="blog_img" />
            </a>
          </div>

          <div className="blog_details">
            <h3 className="blog_title">5 Bonnes Application pour le developpement</h3>
            <div className="blog_meta">
              <span>01 Janvier 2024</span>
              <span className="blog_dot">.</span>
              <span>Beellal</span>
            </div>
          </div>
        </div> */}


      </div>
    </section>
  )
}

export default Blog