import React from 'react';
import './LanguageToggle.css';
import { useLanguage } from '../../Context/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="language-toggle">
      <button 
        className={`language-btn ${language === 'en' ? 'active' : ''}`} 
        onClick={() => toggleLanguage('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button 
        className={`language-btn ${language === 'fr' ? 'active' : ''}`} 
        onClick={() => toggleLanguage('fr')}
        aria-label="Passer en Français"
      >
        FR
      </button>
    </div>
  );
};

export default LanguageToggle;