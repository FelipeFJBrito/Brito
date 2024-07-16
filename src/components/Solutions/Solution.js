import React from 'react';
import img from '../About/AboutAssets/feature-banner.jpg';
import './Solution.css';

const Solution = () => {


    return (
        <div className='solution-wrapper'>
            <div className='solution-container'>
                <div className='solution-rside'>
                    <img src={img} />
                </div>
                <div className='solution-lside'>
                    <h3 className="solution-title">Our Solutions</h3>
                    <h2 className="solution-title2">Personalized web solutions to meet your individual needs.</h2>
                    <div className='solutions-content'>
                        <div className='solutions-content-top'>
                            <p>With a focus on usability, performance, and security, We create applications that enhance business efficiency and drive growth.</p>
                        </div>
                        <div className='solutions-content-bottom'>
                            <div className='solutions-content-lbottom'>
                                <div className='container-content-bottom-solutions'>
                                    <span>Business Websites:</span>
                                    <p>
                                        Professional and responsive websites to establish an online presence and attract customers.
                                    </p>
                                </div>
                                <div className='container-content-bottom-solutions'>
                                    <span>Portfolio Websites:</span>
                                    <p>
                                        Visually appealing and functional portfolio websites to showcase your clients' work and achievements.
                                    </p>
                                </div>
                            </div>
                            <div className='solutions-content-rbottom'>
                                <div className='container-content-bottom-solutions'>
                                    <span>E-commerce Platforms:</span>
                                    <p>
                                        Robust and scalable e-commerce solutions that offer a seamless shopping experience, including payment gateways, inventory management, and order processing.
                                    </p>
                                </div>
                                <div className='container-content-bottom-solutions'>
                                    <span>Web-based Applications:</span>
                                    <p>
                                        Custom web applications designed to meet specific business needs, from productivity tools to customer portals.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Solution;