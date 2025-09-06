import React from 'react';
import { useState } from 'react';
import './Blog.css';
import { motion } from 'framer-motion';
import { useLanguage } from '../../Context/LanguageContext';
import BlogCard from './BlogCard';
import BlogFilter from './BlogFilter';
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
        readTime: 5,
        views: 245,
        tags: ["BTP", "Gestion", "Méthodes"],
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
        readTime: 8,
        views: 189,
        tags: ["Construction", "Projet", "Étapes"],
        description: {
            en: "Latest trends in web development and technology.",
            fr: "Les différentes étapes d'un projet de construction typique, de la conception à la démolition."
        },
        link: "https://www.linkedin.com/pulse/various-steps-involved-typical-construction-project-bilal-4jrte/"
    },
    {
        id: 3,
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: {
            en: "Sustainable Construction",
            fr: "Construction Durable et Écologique"
        },
        category: {
            en: "Sustainability",
            fr: "Durabilité"
        },
        date: "2024-03-15",
        readTime: 6,
        views: 312,
        tags: ["Écologie", "Durabilité", "Innovation"],
        description: {
            en: "Exploring sustainable construction practices and green building technologies.",
            fr: "Exploration des pratiques de construction durable et des technologies de bâtiment vert pour un avenir plus respectueux de l'environnement."
        },
        link: "#"
    },
    {
        id: 4,
        image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: {
            en: "Digital Transformation in Construction",
            fr: "Transformation Numérique dans le BTP"
        },
        category: {
            en: "Technology",
            fr: "Technologie"
        },
        date: "2024-04-20",
        readTime: 7,
        views: 156,
        tags: ["Digital", "BIM", "Innovation"],
        description: {
            en: "How digital technologies are revolutionizing the construction industry.",
            fr: "Comment les technologies numériques révolutionnent l'industrie de la construction et améliorent l'efficacité des projets."
        },
        link: "#"
    }
];

const Blog = () => {
    const { language } = useLanguage();
    const [filteredBlogs, setFilteredBlogs] = useState(blogData);
    const [activeCategory, setActiveCategory] = useState('Tous');
    const [searchTerm, setSearchTerm] = useState('');

    const categories = ['Tous', 'Génie Civil', 'Durabilité', 'Technologie'];

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        filterBlogs(category, searchTerm);
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
        filterBlogs(activeCategory, term);
    };

    const filterBlogs = (category, search) => {
        let filtered = blogData;

        if (category !== 'Tous') {
            filtered = filtered.filter(blog => blog.category[language] === category);
        }

        if (search) {
            filtered = filtered.filter(blog => 
                blog.title[language].toLowerCase().includes(search.toLowerCase()) ||
                blog.description[language].toLowerCase().includes(search.toLowerCase()) ||
                blog.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
            );
        }

        setFilteredBlogs(filtered);
    };
    
    return (
        <section className="blog container section" id="blog">
            <h2 className="section_title">
                {language === 'en' ? 'Latest Articles' : 'Articles Récents'}
            </h2>

            <div className="blog_search">
                <i className="icon-magnifier blog_search_icon"></i>
                <input
                    type="text"
                    className="blog_search_input"
                    placeholder={language === 'en' ? 'Search articles...' : 'Rechercher des articles...'}
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>

            <BlogFilter 
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
                language={language}
            />

            <motion.div 
                className="blog_container grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {filteredBlogs.map((blog) => (
                    <BlogCard
                        key={blog.id}
                        blog={blog}
                        language={language}
                        darkMode={false}
                    />
                ))}
            </motion.div>

            {filteredBlogs.length === 0 && (
                <motion.div 
                    className="blog_no_results"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-color)' }}
                >
                    <i className="icon-magnifier" style={{ fontSize: '3rem', marginBottom: '1rem', opacity: 0.5 }}></i>
                    <p>{language === 'en' ? 'No articles found' : 'Aucun article trouvé'}</p>
                </motion.div>
            )}
        </section>
    );
};

export default Blog;