import React from 'react';
import './Blog.css';
import { motion } from 'framer-motion';
import { useLanguage } from '../../Context/LanguageContext';

const blogData = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3",
        title: {
            en: "Construction Standards",
            fr: "Les normes de construction"
        },
        category: {
            en: "Civil Engineering",
            fr: "Génie Civil"
        },
        date: "2024-01-20",
        description: {
            en: "Exploring modern construction standards and their implementation.",
            fr: "Explorer les normes de construction modernes et leur mise en œuvre."
        },
        link: "#"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3",
        title: {
            en: "Web Development Trends",
            fr: "Tendances du développement Web"
        },
        category: {
            en: "Development",
            fr: "Développement"
        },
        date: "2024-01-15",
        description: {
            en: "Latest trends in web development and technology.",
            fr: "Dernières tendances en développement web et technologie."
        },
        link: "#"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3",
        title: {
            en: "Project Management",
            fr: "Gestion de Projet"
        },
        category: {
            en: "Management",
            fr: "Gestion"
        },
        date: "2024-01-10",
        description: {
            en: "Effective project management strategies in construction.",
            fr: "Stratégies efficaces de gestion de projet dans la construction."
        },
        link: "#"
    }
];

const Blog = () => {
    const { language } = useLanguage();
    
    return (
        <section className="blog container section" id="blog">
            <h2 className="section_title">
                {language === 'en' ? 'Latest Articles' : 'Articles Récents'}
            </h2>

            <motion.div 
                className="blog_container grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {blogData.map((blog) => (
                    <motion.article 
                        className="blog_card" 
                        key={blog.id}
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="blog_thumb">
                            <img src={blog.image} alt="" className="blog_img" />
                            <span className="blog_category">
                                {blog.category[language]}
                            </span>
                        </div>

                        <div className="blog_details">
                            <h3 className="blog_title">{blog.title[language]}</h3>
                            <div className="blog_meta">
                                <span>{new Date(blog.date).toLocaleDateString(language === 'en' ? 'en-US' : 'fr-FR')}</span>
                                <span className="blog_dot"></span>
                                <span>Beellal</span>
                            </div>
                            <p className="blog_description">
                                {blog.description[language]}
                            </p>
                            <a href={blog.link} className="blog_link">
                                {language === 'en' ? 'Read More' : 'Lire Plus'}
                                <i className="icon-arrow-right"></i>
                            </a>
                        </div>
                    </motion.article>
                ))}
            </motion.div>
        </section>
    );
};

export default Blog;