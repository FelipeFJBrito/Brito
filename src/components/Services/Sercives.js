import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import './Services.css';

const Services = () => {

    const laptop = <FontAwesomeIcon icon={faLaptopCode} />;
    const data = [
        {
            img: laptop,
            title: 'Web Development',
            button: 'Learn More',
            description: 'We provide top-notch web development services tailored to your business needs.'
        },
        {
            img: laptop,
            title: 'App Development',
            button: 'Learn More',
            description: 'Our app development services ensure a seamless experience on all devices.'
        },
        {
            img: laptop,
            title: 'App Development',
            button: 'Learn More',
            description: 'Our app development services ensure a seamless experience on all devices.'
        },
    ];

    return (
        <div className="service-wrapper">
            <div className="service-header">
                <h3 className="services-title">Our Services</h3>
                <h2 className="services-title2">Personalized web solutions to meet your individual needs.</h2>
            </div>
            <div className="service-container">
                {
                    data.map((item, index) => (
                        <div key={index} className="card">
                            <span className="service-img">{item.img}</span>
                            <div className="card-body">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <a href='#' className="project-primary-btn">
                                    {item.button}
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Services;
