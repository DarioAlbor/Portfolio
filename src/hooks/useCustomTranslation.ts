import i18n from '../i18n';
import { useState, useEffect } from 'react';

export const useCustomTranslation = () => {
  const [language, setLanguage] = useState(i18n.language);
  
  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setLanguage(lng);
    };
    
    i18n.on('languageChanged', handleLanguageChange);
    
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);
  
  const translate = (key: string, options?: any): any => {
    const result = i18n.t(key, options);
    if (options?.returnObjects) {
      return result;
    }
    return typeof result === 'string' ? result : '';
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return {
    t: translate,
    language,
    changeLanguage
  };
};
