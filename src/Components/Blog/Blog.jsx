import React from 'react';
import './Blog.css';
import Image from '../../assets/Me1.png'

const Blog = () => {
  return (
    <section className="blog container section" id='blog'>
      <h2 className="section">Les derniers posts</h2>

      <div className="blog_container grid">

        
        <div className="blog_card">
          <div className="blog_thumb">
            <a href="#">
              <span className="blog_category">Review</span>
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
        </div>


        <div className="blog_card">
          <div className="blog_thumb">
            <a href="#">
              <span className="blog_category">Review</span>
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
        </div>


        <div className="blog_card">
          <div className="blog_thumb">
            <a href="#">
              <span className="blog_category">Review</span>
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
        </div>


      </div>
    </section>
  )
}

export default Blog