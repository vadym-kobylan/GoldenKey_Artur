import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import translationEN from '../../public/locales/en/translation.json';
import translationDE from '../../public/locales/de/translation.json';
import translationUK from '../../public/locales/uk/translation.json';
import translationRU from '../../public/locales/ru/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  de: {
    translation: translationDE,
  },
  uk: {
    translation: translationUK,
  },
  ru: {
    translation: translationRU,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(detector)
  .init({
    resources,
    fallbackLng: 'en', // use en if detected lng is not available

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
