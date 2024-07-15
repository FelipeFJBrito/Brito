import React from 'react';
import img from './AboutAssets/about-banner.png';
import './About.css';
import Accordion from './accordion/Accordion';

const About = () => {
    const data = [
        {
            id: 0,
            label: "Developing Application",
            renderContent: () => (
                <p className='content-accordion'>
                    We provide professional development applications 
                    that are tailored to meet the needs of modern businesses. 
                    Our web applications are designed with a focus on usability,
                    performance, and security, ensuring a seamless experience for users. 
                    Whether you're looking for a custom CRM, e-commerce platform, project management tool, 
                    or any other web-based solution, our team of skilled developers is equipped to deliver 
                    high-quality applications that drive efficiency and growth.                  
                </p>
            ),
        },
        {
            id: 1,
            label: "Who are we?",
            renderContent: () => (
                <p className='content-accordion'>
                    Passionate about creating exceptional web applications tailored to the needs of modern businesses. 
                    With a strong focus on usability, performance, and security, we deliver custom solutions that enhance 
                    efficiency and drive growth. Whether you need a CRM, e-commerce platform, project management tool, 
                    or any other web-based solution, we are equipped to bring your vision to life with professionalism and expertise.                 
                </p>
            ),
        },
        {
            id: 2,
            label: "Mission and Vision",
            renderContent: () => (
                <div className='content-accordion'>
                    <div className='content-accordion-container'>
                        <h3>Mission:</h3>   
                        <p>
                            Our mission is to deliver innovative, high-quality
                            web applications that empower businesses to achieve their goals. 
                            We focus on usability, performance, and security to provide custom 
                            solutions that enhance efficiency and drive growth.
                        </p>            
                    </div> 
                    <div className='content-accordion-container'>
                        <h3>Vision:</h3>   
                        <p>
                            To be the leading provider of innovative and high-quality 
                            web applications that empower businesses to achieve their 
                            full potential, driving efficiency, growth, and success through
                            exceptional usability, performance, and security.
                        </p>            
                    </div>                   
                </div>
            ),
        },
    ];

    return (
        <div className='about-wrapper'>
            <div className='about-container'>
                <div className='about-lside'>
                    <h3 className="about-title">Why Choose Us?</h3>
                    <h2 className="about-title2">Learn more about us and what we do.</h2>
                    <main>
                        <Accordion items={data} keepOthersOpen={true} />
                    </main>
                </div>
                <div className='about-rside'>
                    <img src={img} alt="About us" />
                </div>
            </div>
        </div>
    );
};

export default About;
