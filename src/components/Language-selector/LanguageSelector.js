import { changeLanguage } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import './LanguageSelector.css'
const languages = [
    { code: "en", lang: "English" },
    { code: "fr", lang: "French" },
    { code: "pt-BR", lang: "Portuguese" },
];

const LanguageSelector = () => {
    const {i18n} =useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    return (
        <div className="languages-wrapper">
            <div className="btn-container">
            {languages.map((lng) => (
                <button className="button-language" key={lng.code} onClick={() => changeLanguage(lng.code)}>
                    {lng.lang}
                </button>
            ))}
        </div>
        </div>
    );
};

export default LanguageSelector;
