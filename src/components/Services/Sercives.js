import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode,faPhoneFlip,faCode } from '@fortawesome/free-solid-svg-icons';
import './Services.css';

const Services = () => {

    const laptop = <FontAwesomeIcon icon={faLaptopCode} />;
    const code = <FontAwesomeIcon icon={faCode} />; 
    const phone = <FontAwesomeIcon icon={faPhoneFlip} />;
   
    const data = [
        {
            img: laptop,
            title: 'Web Development',
            button: '',
            description: 'we offer top web development services tailored to your business needs. We create custom solutions that enhance your online presence and drive growth. From sleek designs to robust applications, we turn your vision into reality.'
        },
        {
            img: code,
            title: 'App Development',
            button: '',
            description: 'we specialize in creating innovative app development solutions. Our skilled team designs user-friendly applications that engage and retain customers. From concept to launch, we’re dedicated to bringing your app vision to life.'
        },
        {
            img: phone,
            title: '24/7 Support',
            button: '',
            description: 'At Brito, we are here for you. We are 24/7 to assist with any questions or issues, ensuring you have continuous support whenever you need it. We prioritize your needs to provide prompt solutions, so you can focus on what matters most.'
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
                        <div key={index} className="card-service">
                            <span className="service-img">{item.img}</span>
                            <div className="card-body-service">
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
