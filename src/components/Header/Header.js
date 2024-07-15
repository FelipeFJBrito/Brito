import {React, useState} from "react";
import HeaderSlider from "./HeaderSlider/HeaderSlider";
import './Header.css'


const Header = () => {
    const [clicked, setClicked] = useState(false);

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
        <div className="header-wrapper">

            <div className="header-container">
                <div className="header-lside-container">
                    <div className="heading-container">
                        <h1>Developing Solutions with Custom Web Applications</h1>
                        <p>We are a web development company that focuses on creating innovative digital experiences.</p>
                    </div>
                    <div className="button-container">
                        <a href="#contact" className="btn-primary" onClick={(e) => handleNavClick(e, 'solutions')}>Explore</a>
                        <a href="#contact" className="btn-secondary" onClick={(e) => handleNavClick(e, 'contact')}>Contact Us</a>
                    </div>
                </div>
                <div className="header-rside-container">
                    <HeaderSlider />
                </div>
            </div>

        </div>

    )
}

export default Header;