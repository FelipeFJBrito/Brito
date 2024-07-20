import React, { useState } from "react";
import {useTranslation } from "react-i18next";
import { Parallax } from 'react-parallax';
import HeaderSlider from "./HeaderSlider/HeaderSlider";
import './Header.css';

const Header = () => {
    const [clicked, setClicked] = useState(false);
    const {t} = useTranslation()
    
    const handleNavClick = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offsetPosition = targetElement.offsetTop - 180; // Adjust the offset value as needed
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
        setClicked(false);
    };

    return (
        <Parallax
            bgImage={require('../About/AboutAssets/bg.jpg')} // Update this path as needed
            strength={600}
        >
            <div className="header-wrapper">
                <div className="gradient"></div>
                <div className="header-container">
                    <div className="header-lside-container">
                        <div className="heading-container">
                            <h1>{t("headerH1")}</h1>
                            <p>{t("headerP")}</p>
                        </div>
                        <div className="button-container">
                            <a href="#contact" className="btn-primary" onClick={(e) => handleNavClick(e, 'solutions')}>{t("btExplore")}</a>
                            <a href="#contact" className="btn-secondary" onClick={(e) => handleNavClick(e, 'contact')}>{t("btContact")}</a>
                        </div>
                    </div>
                    <div className="header-rside-container">
                        <HeaderSlider />
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Header;
