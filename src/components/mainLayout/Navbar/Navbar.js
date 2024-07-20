import React, { useEffect, useState } from 'react';
import './Navbar.css';
import LanguageSelector from '../../Language-selector/LanguageSelector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const Navbar = ({ scrollThreshold = 50 }) => {
    const [clicked, setClicked] = useState(false);
    const [fix, setFix] = useState(false);
    const [showLanguages, setShowLanguages] = useState(false); // State to control dropdown visibility
    const globe = <FontAwesomeIcon icon={faGlobe} />;
    const { t } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= scrollThreshold) {
                setFix(true);
            } else {
                setFix(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollThreshold]);

    const handleClick = () => {
        setClicked(!clicked);
    };

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

    const toggleLanguages = () => {
        setShowLanguages(!showLanguages);
    };

    return (
        <div className={`navbar-wrapper ${fix ? 'fixed' : ''}`}>
            <nav className="nav-container">
                <a href='index.html' className='company-name'>
                    Brito
                </a>
                <div>
                    <ul id="nav-link" className={clicked ? 'active' : ''}>
                        <li className='nav-link-content'>
                            <a href="#header" onClick={(e) => handleNavClick(e, 'header')} className="active">{t("home")}</a>
                        </li>
                        <li className='nav-link-content'>
                            <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>{t("services")}</a>
                        </li>
                        <li className='nav-link-content'>
                            <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>{t("about")}</a>
                        </li>
                        <li className='nav-link-content'>
                            <a href="#solutions" onClick={(e) => handleNavClick(e, 'solutions')}>{t("solutions")}</a>
                        </li>
                        <li className='nav-link-content'>
                            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>{t("project")}</a>
                        </li>
                        <li className='nav-link-content'>
                            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>{t("contact")}</a>
                        </li>
                        <li>
                            <span className='planet' onClick={toggleLanguages}>{globe}</span>
                            {showLanguages && (
                                <div className='language-dropdown'>
                                    <LanguageSelector />
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
                <div className="mobile" onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </nav>
            <div>
                <ul id="nav-link-flex" className={clicked ? 'active' : ''}>
                    <li className='nav-link-content'>
                        <a href="#header" onClick={(e) => handleNavClick(e, 'header')} className="active">{t("home")}</a>
                    </li>
                    <li className='nav-link-content'>
                        <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>{t("services")}</a>
                    </li>
                    <li className='nav-link-content'>
                        <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>{t("about")}</a>
                    </li>
                    <li className='nav-link-content'>
                        <a href="#solutions" onClick={(e) => handleNavClick(e, 'solutions')}>{t("solutions")}</a>
                    </li>
                    <li className='nav-link-content'>
                        <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>{t("project")}</a>
                    </li>
                    <li>
                        <span className='planet' onClick={toggleLanguages}>{globe}</span>
                        {showLanguages && (
                            <div className='language-dropdown-flex'>
                                <LanguageSelector />
                            </div>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
