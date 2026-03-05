/* eslint-disable import/no-named-as-default-member */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { ar } from "./translations/ar";
import { en } from "./translations/en";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    detection: {
      order: ["localStorage", "navigator"], // First look at localStorage, then use browser language if none is set
      caches: ["localStorage"], // Store selected language in localStorage
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
