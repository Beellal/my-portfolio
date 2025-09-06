import React from 'react';
import { motion } from 'framer-motion';
import './GalleryPage.css';
import Gallery from '../../Components/Gallery/Gallery';
import { themeContext } from "../../Context";
import { useContext } from "react";

const GalleryPage = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

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
        { number: "15+", label: "Projets BTP" },
        { number: "8+", label: "Designs Web" },
        { number: "3+", label: "Années d'expérience" },
        { number: "100%", label: "Satisfaction client" }
    ];

    return (
        <motion.div 
            className="gallery-page"
            variants={pageVariants}
            initial="initial"
            animate="animate"
        >
            <div className="container">
                <motion.h1 
                    className="section_title"
                    style={{ color: darkMode ? "White" : "" }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Mes Conceptions & Réalisations
                </motion.h1>

                <motion.div 
                    className="gallery_intro"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <p style={{ color: darkMode ? "#ccc" : "" }}>
                        Découvrez mes créations dans le domaine du génie civil et du développement web. 
                        Chaque projet reflète mon engagement pour l'innovation, la qualité et la durabilité.
                    </p>
                    <p style={{ color: darkMode ? "#ccc" : "" }}>
                        De la conception architecturale aux interfaces utilisateur modernes, 
                        je combine expertise technique et créativité pour donner vie à vos idées.
                    </p>
                </motion.div>

                <motion.div 
                    className="gallery_stats"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="stat_card"
                            style={{ backgroundColor: darkMode ? "#1a1a1a" : "" }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                        >
                            <div className="stat_number">{stat.number}</div>
                            <div 
                                className="stat_label"
                                style={{ color: darkMode ? "#ccc" : "" }}
                            >
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <Gallery />
            </div>
        </motion.div>
    );
};

export default GalleryPage;