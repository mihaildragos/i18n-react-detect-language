import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const i18nTranslations = {
    en: {
        translation: {
            description: {
                text1: 'ENGLISH content',
            }
        }
    },
    de: {
        translation: {
            description: {
                text1: 'GERMAN content'
            }
        }
    },
    ko: {
        translation: {
            description: {
                text1: '광고 관리자'
            }
        }
    }
}

const detectionOptions = {
    // order and from where user language should be detected
    order: [
        "path",
        "localStorage",
        "cookie",
        "sessionStorage",
        "navigator",
        "querystring",
    ],

    // keys or params to lookup language from
    lookupQuerystring: "lng",
    lookupCookie: "selected_language",
    lookupLocalStorage: "selected_language",
    lookupSessionStorage: "selected_language",
    lookupFromPathIndex: 0,
    lookupFromSubdomainIndex: 0,

    // cache user language on
    caches: ["localStorage", "cookie"],
    excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)

    // optional htmlTag with lang attribute, the default is:
    htmlTag: document.documentElement,
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: i18nTranslations,
        detection: detectionOptions,
    });

export default i18n;