import React from 'react';
import img from './AboutAssets/p2.jpeg'
import './About.css';

const About = () => {
    return (
        <div className='about-wrapper'>
            <div className='about-container'>
                <div className='about-lrside'>
                    <h3 className="about-title">Why Choose Us</h3>
                    <h2 className="about-title2">Personalized web solutions to meet your individual needs.</h2>
                </div>
                <div className='about-rside'>
                    <img src={img}/>
                </div>
            </div>

        </div>
    )
}

export default About;