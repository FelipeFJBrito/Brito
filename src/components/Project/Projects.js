import React from "react";
import './Projects.css';
import img1 from '../Header/HeaderSlider/HeaderSliderAssets/p1.jpeg';
import img2 from '../Header/HeaderSlider/HeaderSliderAssets/p2.jpeg';
import img3 from '../Header/HeaderSlider/HeaderSliderAssets/p3.jpeg';

const Projects = () => {
    return (
        <div className="project-wrapper">
            <div className="service-header">
                <h3 className="services-title">Our Projects</h3>
                <h2 className="services-title2">Take a look at some of our projects.</h2>
            </div>
            <div className="project-container">
                <div className="project-card">
                    <div className="project-card-img">
                        <img src={img1} alt="image"/>
                    </div>
                    <div className="projects-text-content">
                        <h3 className="projects-text-content-title">Fernanda Ponte Portfolio</h3>
                        <p>
                            Professional Architecture Portfolio, containing all important information
                            if you are an Architect.
                        </p>
                        <span>25 July 2024</span>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-card-img">
                        <img src={img2} alt="image"/>
                    </div>
                    <div className="projects-text-content">
                        <h3 className="projects-text-content-title">Fernanda Ponte Portfolio</h3>
                        <p>
                            Professional Architecture Portfolio, containing all important information
                            if you are an Architect.
                        </p>
                        <span>25 July 2024</span>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-card-img">
                        <img src={img3} alt="image" />
                    </div>
                    <div className="projects-text-content">
                        <h3 className="projects-text-content-title">Fernanda Ponte Portfolio</h3>
                        <p>
                            Professional Architecture Portfolio, containing all important information
                            if you are an Architect.
                        </p>
                        <span>25 July 2024</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
