import React from 'react';
import { motion } from 'framer-motion';

const BlogCard = ({ blog, language, darkMode }) => {
    return (
        <motion.article 
            className="blog_card"
            style={{ backgroundColor: darkMode ? "#1a1a1a" : "" }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
        >
            <div className="blog_thumb">
                <img src={blog.image} alt="" className="blog_img" />
                <span className="blog_category">
                    {blog.category[language]}
                </span>
                <div className="blog_overlay">
                    <div className="blog_read_time">
                        <i className="icon-clock"></i>
                        <span>{blog.readTime} min</span>
                    </div>
                </div>
            </div>

            <div className="blog_details">
                <div className="blog_meta">
                    <span className="blog_date">
                        {new Date(blog.date).toLocaleDateString(language === 'en' ? 'en-US' : 'fr-FR')}
                    </span>
                    <span className="blog_dot">•</span>
                    <span className="blog_author">Beellal</span>
                    <span className="blog_dot">•</span>
                    <span className="blog_views">
                        <i className="icon-eye"></i>
                        {blog.views}
                    </span>
                </div>

                <h3 
                    className="blog_title"
                    style={{ color: darkMode ? "white" : "" }}
                >
                    {blog.title[language]}
                </h3>

                <p 
                    className="blog_description"
                    style={{ color: darkMode ? "#ccc" : "" }}
                >
                    {blog.description[language]}
                </p>

                <div className="blog_tags">
                    {blog.tags.map((tag, index) => (
                        <span key={index} className="blog_tag">#{tag}</span>
                    ))}
                </div>

                <div className="blog_actions">
                    <a href={blog.link} className="blog_link" target="_blank" rel="noopener noreferrer">
                        {language === 'en' ? 'Read More' : 'Lire Plus'}
                        <i className="icon-arrow-right"></i>
                    </a>
                    <div className="blog_social">
                        <button className="blog_social_btn" title="Partager">
                            <i className="icon-share"></i>
                        </button>
                        <button className="blog_social_btn" title="Sauvegarder">
                            <i className="icon-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </motion.article>
    );
};

export default BlogCard;