import React from "react";
import HeaderSlider from "./HeaderSlider/HeaderSlider";
import './Header.css'


const Header = () => {
    return (
        <div className="header-wrapper">

            <div className="header-container">
                <div className="header-lside-container">
                    <div className="heading-container">
                        <h1>Developing Solutions with Custom Web Applications</h1>
                        <p>We are a web development company that focuses on creating innovative digital experiences.</p>
                    </div>
                    <div className="button-container">
                        <a className="btn-primary">Explore</a>
                        <a className="btn-secondary">Contact Us</a>
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