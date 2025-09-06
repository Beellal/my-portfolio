import React from 'react';
import { motion } from 'framer-motion';
import './BlogPage.css';
import Blog from '../../Components/Blog/Blog';
import { themeContext } from "../../Context";
import { useContext } from "react";
import { useLanguage } from '../../Context/LanguageContext';

const BlogPage = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const { language } = useLanguage();

    const pageVariants = {
        initial: { opacity: 0, y: 20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    const stats = [
        { 
            number: "15+", 
            label: language === 'en' ? "Articles Published" : "Articles Publiés" 
        },
        { 
            number: "2.5K+", 
            label: language === 'en' ? "Total Views" : "Vues Totales" 
        },
        { 
            number: "4", 
            label: language === 'en' ? "Categories" : "Catégories" 
        },
        { 
            number: "100%", 
            label: language === 'en' ? "Original Content" : "Contenu Original" 
        }
    ];

    return (
        <motion.div 
            className="blog-page"
            variants={pageVariants}
            initial="initial"
            animate="animate"
        >
            <div className="container">
                <motion.div 
                    className="blog_hero"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="blog_hero_content">
                        <h1>
                            {language === 'en' ? 'Engineering Insights' : 'Perspectives d\'Ingénierie'}
                        </h1>
                        <p>
                            {language === 'en' 
                                ? 'Exploring the intersection of civil engineering and web development through practical insights and innovative solutions.'
                                : 'Explorer l\'intersection entre le génie civil et le développement web à travers des perspectives pratiques et des solutions innovantes.'
                            }
                        </p>
                    </div>
                </motion.div>

                <motion.div 
                    className="blog_stats"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="blog_stat_card"
                            style={{ backgroundColor: darkMode ? "#1a1a1a" : "" }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                        >
                            <div className="blog_stat_number">{stat.number}</div>
                            <div 
                                className="blog_stat_label"
                                style={{ color: darkMode ? "#ccc" : "" }}
                            >
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <Blog />

                <motion.div 
                    className="blog_newsletter"
                    style={{ backgroundColor: darkMode ? "#1a1a1a" : "" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <h3 style={{ color: darkMode ? "white" : "" }}>
                        {language === 'en' ? 'Stay Updated' : 'Restez Informé'}
                    </h3>
                    <p style={{ color: darkMode ? "#ccc" : "" }}>
                        {language === 'en' 
                            ? 'Subscribe to get notified about new articles and insights in engineering and technology.'
                            : 'Abonnez-vous pour être notifié des nouveaux articles et perspectives en ingénierie et technologie.'
                        }
                    </p>
                    <form className="newsletter_form">
                        <input 
                            type="email" 
                            className="newsletter_input"
                            placeholder={language === 'en' ? 'Enter your email' : 'Entrez votre email'}
                            style={{ 
                                backgroundColor: darkMode ? "#2a2a2a" : "",
                                color: darkMode ? "white" : ""
                            }}
                        />
                        <button type="submit" className="newsletter_btn">
                            {language === 'en' ? 'Subscribe' : 'S\'abonner'}
                        </button>
                    </form>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default BlogPage;