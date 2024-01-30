import i18n from "i18next";
import {initReactI18next} from "react-i18next"

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
//Плагин для автоматического добавления ключей в переводы i18n support
i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'ru',
        debug: __IS_DEV__,

        interpolation: {
            escapeValue: false,
        }
    })

export default i18n