import React, { useState } from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    const [clicked, setClicked] = useState(false);
    const github = <FontAwesomeIcon icon={faGithub} />;
    const linkedin = <FontAwesomeIcon icon={faLinkedin} />;

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
    return (
        <div className="footer-wrapper">
            <div className="footer-container">
                <div className="footer-top">
                    <h1>
                        Bring your business to another level with <span>Brito</span>.
                    </h1>
                </div>
                <div>
                    <hr />
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <h2>Brito</h2>
                        <span>&copy;2024 Brito</span>
                        <p>All Rights Reserved</p>
                        <div className="social-media-content">
                            <a href="https://www.linkedin.com/in/felipebrito-programador/" className="fafont" target="_blank" rel="noopener noreferrer">
                                {linkedin}
                            </a>
                            <a href="https://github.com/FelipeFJBrito" className="fafont" target="_blank" rel="noopener noreferrer">
                                {github}
                            </a>
                        </div>
                    </div>
                    <div className="footer-bottom-content">
                        <h2>Learn More</h2>
                        <nav className="nav-footer">
                            <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About Us</a>
                            <a href="#solutions" onClick={(e) => handleNavClick(e, 'solutions')}>Solution</a>
                            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
                            <a>Privacy Policy</a>
                        </nav>
                    </div>
                    <div className="footer-bottom-content">
                        <h2>Get in Touch</h2>
                        <p>5598 Ormidale Street, Vancouver BC, Canada</p>
                        <p className="footer-contact">felipefjbrito@gmail.com</p>
                        <a className="footer-portfolio" href="https://felipefjbrito.github.io/portfolio/#nav" target="_blank" rel="noopener noreferrer">Felipe Brito Portfolio</a>
                        <span className="footer-contact">+1(236)2342559</span>

                    </div>
                    <div className="footer-bottom-content">
                        <h2>Any Doubt?</h2>
                        <span>Contact Us Now</span>
                        <div className="button-container">
                            <a href="#contact" className="btn-primary" onClick={(e) => handleNavClick(e, 'contact')}>Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
