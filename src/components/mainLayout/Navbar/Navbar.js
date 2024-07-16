import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = ({ scrollThreshold = 50 }) => {
    const [clicked, setClicked] = useState(false);
    const [fix, setFix] = useState(false);

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

    return (
        <div className={`navbar-wrapper ${fix ? 'fixed' : ''}`}>
            <nav className="nav-container">
                <a href='index.html' className='company-name'>
                    Brito
                </a>
                <div>
                    <ul id="nav-link" className={clicked ? 'active' : ''}>
                        <li className='nav-link-content'>
                            <a href="#header" onClick={(e) => handleNavClick(e, 'header')} className="active">Home</a>
                        </li>
                        <li className='nav-link-content'>
                            <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Our Services</a>
                        </li>
                        <li className='nav-link-content'>
                            <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
                        </li>
                        <li className='nav-link-content'>
                            <a href="#solutions" onClick={(e) => handleNavClick(e, 'solutions')}>Solution</a>
                        </li>
                        <li className='nav-link-content'>
                            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
                        </li>
                        <li className='nav-link-content'>
                            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
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
                        <a href="#header" onClick={(e) => handleNavClick(e, 'header')} className="active">Home</a>
                    </li>
                    <li className='nav-link-content'>
                        <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Our Services</a>
                    </li>
                    <li className='nav-link-content'>
                        <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
                    </li>
                    <li className='nav-link-content'>
                        <a href="#solutions" onClick={(e) => handleNavClick(e, 'solutions')}>Solution</a>
                    </li>
                    <li className='nav-link-content'>
                        <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
