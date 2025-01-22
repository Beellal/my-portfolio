import { useContext } from 'react';
import { LanguageContext } from '../Context/LanguageContext';
import { translations } from '../translations';

export const useTranslation = () => {
  const { language } = useContext(LanguageContext);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return value;
  };

  return { t, language };
};