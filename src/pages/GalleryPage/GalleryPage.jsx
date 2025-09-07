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
        { number: "50+", label: "Designs Canva" },
        { number: "5+", label: "Comptes Gérés" },
        { number: "2K+", label: "Vues Totales" },
        { number: "95%", label: "Engagement Rate" }
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
                    Mes Créations Graphiques & Social Media
                </motion.h1>

                <motion.div 
                    className="gallery_intro"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <p style={{ color: darkMode ? "#ccc" : "" }}>
                        Découvrez mes créations graphiques réalisées avec Canva et ma gestion des réseaux sociaux. 
                        Chaque design reflète mon approche créative et professionnelle de la communication visuelle.
                    </p>
                    <p style={{ color: darkMode ? "#ccc" : "" }}>
                        De l'identité visuelle aux campagnes social media, 
                        je combine créativité et stratégie pour créer du contenu engageant et impactant.
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