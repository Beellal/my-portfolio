import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.css';
import { themeContext } from "../../Context";
import { useContext } from "react";

// Données d'exemple pour la galerie
const galleryData = [
    {
        id: 1,
        title: "Infographie - Méthodes de Projet",
        category: "Design Graphique",
        image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Création d'infographies éducatives sur les méthodes de livraison de projet pour LinkedIn et formations professionnelles.",
        tools: ["Canva", "Design Thinking", "Infographie"],
        date: "2024-12-15",
        type: "Design Graphique"
    },
    {
        id: 2,
        title: "Posts LinkedIn Professionnels",
        category: "Réseaux Sociaux",
        image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Création et gestion de contenu professionnel sur LinkedIn avec focus sur l'ingénierie et la construction.",
        tools: ["Canva", "LinkedIn", "Content Marketing"],
        date: "2024-11-20",
        type: "Social Media"
    },
    {
        id: 3,
        title: "Identité Visuelle Y-Builders",
        category: "Design Graphique",
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Création complète de l'identité visuelle incluant logo, charte graphique et supports de communication.",
        tools: ["Canva", "Branding", "Logo Design"],
        date: "2024-10-30",
        type: "Branding"
    },
    {
        id: 4,
        title: "Campagne Instagram EFST",
        category: "Réseaux Sociaux",
        image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=800",
        description: "Gestion complète des réseaux sociaux pour English For The Sahel avec création de contenu visuel engageant.",
        tools: ["Canva", "Instagram", "Facebook", "Content Strategy"],
        date: "2024-09-15",
        type: "Social Media"
    },
    {
        id: 5,
        title: "Templates Instagram Stories",
        category: "Design Graphique",
        image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=800",
        description: "Série de templates animés pour Instagram Stories adaptés au secteur BTP avec call-to-action intégrés.",
        tools: ["Canva", "Instagram", "Motion Design"],
        date: "2024-08-22",
        type: "Templates"
    },
    {
        id: 6,
        title: "Présentations Corporate",
        category: "Design Graphique",
        image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Conception de présentations PowerPoint professionnelles pour pitches clients et formations techniques.",
        tools: ["Canva", "PowerPoint", "Corporate Design"],
        date: "2024-07-10",
        type: "Présentation"
    },
    {
        id: 7,
        title: "Visuels Facebook Pharma",
        category: "Réseaux Sociaux",
        image: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Création de visuels pour la page Facebook de Pharma App avec focus sur l'engagement et la conversion.",
        tools: ["Canva", "Facebook", "Photoshop"],
        date: "2024-06-15",
        type: "Social Media"
    },
    {
        id: 8,
        title: "Infographies Techniques BTP",
        category: "Design Graphique",
        image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Série d'infographies techniques expliquant les processus de construction et les bonnes pratiques du BTP.",
        tools: ["Canva", "Illustrator", "Technical Drawing"],
        date: "2024-05-20",
        type: "Infographie"
    }
];

const Gallery = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const [items, setItems] = useState(galleryData);
    const [activeFilter, setActiveFilter] = useState('Tous');
    const [selectedImage, setSelectedImage] = useState(null);

    const categories = ['Tous', 'Design Graphique', 'Réseaux Sociaux'];

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
                Mes Réalisations Graphiques
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