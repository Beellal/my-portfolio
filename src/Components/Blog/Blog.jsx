import React from 'react';
import './Blog.css';
import { motion } from 'framer-motion';
import { useLanguage } from '../../Context/LanguageContext';
import MDP from '../../assets/Methodes de projet.png'
import PDM from '../../assets/Charg.png'

const blogData = [
    {
        id: 1,
        image: MDP,
        title: {
            en: "Construction Standards",
            fr: "Étapes pour sélectionner une méthode de livraison de projet"
        },
        category: {
            en: "Civil Engineering",
            fr: "Génie Civil"
        },
        date: "2025-01-08",
        description: {
            en: "Exploring modern construction standards and their implementation.",
            fr: "La sélection d'une Project Delivery Method (PDM) repose sur une analyse approfondie des besoins, des objectifs et des contraintes spécifiques au projet. "
        },
        link: "https://www.linkedin.com/pulse/%C3%A9tapes-pour-s%C3%A9lectionner-une-m%C3%A9thode-de-livraison-projet-bilal-ee0re/?trackingId=TxFFZ2xhReKBGAmAY%2B7lEw%3D%3D"
    },
    {
        id: 2,
        image: PDM,
        title: {
            en: "Web Development Trends",
            fr: "Les différentes étapes d'un projet de construction typique."
        },
        category: {
            en: "Civil Engineering",
            fr: "Génie Civil"
        },
        date: "2024-02-18",
        description: {
            en: "Latest trends in web development and technology.",
            fr: "Les différentes étapes d'un projet de construction typique, de la conception à la démolition."
        },
        link: "https://www.linkedin.com/pulse/various-steps-involved-typical-construction-project-bilal-4jrte/"
    },
    // {
    //     id: 3,
    //     image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3",
    //     title: {
    //         en: "Project Management",
    //         fr: "Gestion de Projet"
    //     },
    //     category: {
    //         en: "Management",
    //         fr: "Gestion"
    //     },
    //     date: "2024-01-10",
    //     description: {
    //         en: "Effective project management strategies in construction.",
    //         fr: "Stratégies efficaces de gestion de projet dans la construction."
    //     },
    //     link: "#"
    // }
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