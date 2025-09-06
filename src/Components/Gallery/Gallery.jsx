import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.css';
import { themeContext } from "../../Context";
import { useContext } from "react";

// Données d'exemple pour la galerie
const galleryData = [
    {
        id: 1,
        title: "Plan architectural résidentiel",
        category: "Architecture",
        image: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Conception d'un plan architectural pour une résidence moderne avec optimisation de l'espace et intégration environnementale.",
        tools: ["AutoCAD", "SketchUp", "Revit"],
        date: "2024-12-15",
        type: "Conception BTP"
    },
    {
        id: 2,
        title: "Structure en béton armé",
        category: "Structure",
        image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Calcul et dimensionnement d'une structure en béton armé pour un bâtiment de 5 étages avec analyse sismique.",
        tools: ["Robot Structural", "Excel", "AutoCAD"],
        date: "2024-11-20",
        type: "Conception BTP"
    },
    {
        id: 3,
        title: "Interface utilisateur moderne",
        category: "UI/UX",
        image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Design d'interface utilisateur pour une application de gestion de projets avec focus sur l'expérience utilisateur.",
        tools: ["Figma", "Adobe XD", "Photoshop"],
        date: "2024-10-30",
        type: "Design Web"
    },
    {
        id: 4,
        title: "Système de drainage urbain",
        category: "Infrastructure",
        image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Conception d'un système de drainage pour une zone urbaine avec gestion des eaux pluviales et prévention des inondations.",
        tools: ["Civil 3D", "HEC-RAS", "ArcGIS"],
        date: "2024-09-15",
        type: "Conception BTP"
    },
    {
        id: 5,
        title: "Dashboard analytique",
        category: "UI/UX",
        image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=800",
        description: "Conception d'un tableau de bord analytique pour le suivi de projets de construction en temps réel.",
        tools: ["React", "D3.js", "Figma"],
        date: "2024-08-22",
        type: "Design Web"
    },
    {
        id: 6,
        title: "Pont en acier",
        category: "Structure",
        image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Conception structurelle d'un pont en acier avec analyse des charges et optimisation des matériaux.",
        tools: ["SAP2000", "Tekla", "AutoCAD"],
        date: "2024-07-10",
        type: "Conception BTP"
    }
];

const Gallery = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const [items, setItems] = useState(galleryData);
    const [activeFilter, setActiveFilter] = useState('Tous');
    const [selectedImage, setSelectedImage] = useState(null);

    const categories = ['Tous', 'Architecture', 'Structure', 'Infrastructure', 'UI/UX'];

    const filterItems = (category) => {
        setActiveFilter(category);
        if (category === 'Tous') {
            setItems(galleryData);
        } else {
            const filteredItems = galleryData.filter(item => item.category === category);
            setItems(filteredItems);
        }
    };

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <section className="gallery container section" id="gallery">
            <motion.h2 
                className="section_title"
                style={{ color: darkMode ? "White" : "" }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Galerie de Conceptions
            </motion.h2>

            <div className="gallery_filters">
                {categories.map((category) => (
                    <motion.button
                        key={category}
                        className={`gallery_filter ${activeFilter === category ? 'active' : ''}`}
                        onClick={() => filterItems(category)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {category}
                    </motion.button>
                ))}
            </div>

            <motion.div 
                className="gallery_container grid"
                layout
            >
                <AnimatePresence>
                    {items.map((item) => (
                        <motion.div
                            key={item.id}
                            className="gallery_card"
                            style={{ backgroundColor: darkMode ? "#1a1a1a" : "" }}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="gallery_image_container">
                                <img 
                                    src={item.image} 
                                    alt={item.title}
                                    className="gallery_image"
                                    onClick={() => openModal(item.image)}
                                />
                            </div>

                            <div className="gallery_content">
                                <span className="gallery_category">{item.category}</span>
                                <h3 
                                    className="gallery_title"
                                    style={{ color: darkMode ? "white" : "" }}
                                >
                                    {item.title}
                                </h3>
                                
                                <p 
                                    className="gallery_description"
                                    style={{ color: darkMode ? "#ccc" : "" }}
                                >
                                    {item.description}
                                </p>

                                <div className="gallery_meta">
                                    <div className="gallery_date">
                                        <i className="icon-calendar"></i>
                                        <span>{new Date(item.date).toLocaleDateString('fr-FR')}</span>
                                    </div>
                                    <span className="gallery_type">{item.type}</span>
                                </div>

                                <div className="gallery_tools">
                                    {item.tools.map((tool, index) => (
                                        <span key={index} className="tool_tag">{tool}</span>
                                    ))}
                                </div>

                                <div className="gallery_actions">
                                    <button 
                                        className="gallery_btn gallery_btn--primary"
                                        onClick={() => openModal(item.image)}
                                    >
                                        <i className="icon-magnifier"></i>
                                        Voir détails
                                    </button>
                                    <button className="gallery_btn gallery_btn--secondary">
                                        <i className="icon-share"></i>
                                        Partager
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Modal pour afficher l'image en grand */}
            <div className={`gallery_modal ${selectedImage ? 'active' : ''}`} onClick={closeModal}>
                <div className="gallery_modal_content" onClick={(e) => e.stopPropagation()}>
                    <button className="gallery_modal_close" onClick={closeModal}>
                        <i className="icon-close"></i>
                    </button>
                    {selectedImage && (
                        <img 
                            src={selectedImage} 
                            alt="Conception en détail"
                            className="gallery_modal_image"
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Gallery;