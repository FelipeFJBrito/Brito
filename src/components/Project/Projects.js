import React from "react";
import './Projects.css';
import img1 from '../Header/HeaderSlider/HeaderSliderAssets/p1.jpeg';
import img2 from '../Header/HeaderSlider/HeaderSliderAssets/p4.png';
import img3 from '../Header/HeaderSlider/HeaderSliderAssets/p5.png';
import { useTranslation } from "react-i18next";

const Projects = () => {
    const { t } = useTranslation();

    return (
        <div className="project-wrapper">
            <div className="service-header">
                <h3 className="services-title">{t("projectTitle")}</h3>
                <h2 className="services-title2">{t("projectTitle2")}</h2>
            </div>
            <div className="project-container">
                <div className="project-card">
                    <div className="project-card-img">
                        <img src={img1} alt="image" />
                    </div>
                    <div className="projects-text-content">
                        <h3 className="projects-text-content-title">{t("projectContentTitle1")}</h3>
                        <p>
                            {t("projectText1")}
                        </p>
                        <span>{t("projectData1")}</span>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-card-img">
                        <img src={img2} alt="image" />
                    </div>
                    <div className="projects-text-content">
                        <h3 className="projects-text-content-title">{t("projectContentTitle2")}</h3>
                        <p>
                            {t("projectText2")}
                        </p>
                        <span>{t("projectData2")}</span>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-card-img">
                        <img src={img3} alt="image" />
                    </div>
                    <div className="projects-text-content">
                        <a className="project-card-title" href="https://felipefjbrito.github.io/portfolio/#nav" target="_blank" rel="noopener noreferrer">
                            <h3 className="projects-text-content-title">{t("projectContentTitle3")}</h3>
                        </a>
                        <p>
                            {t("projectText3")}
                        </p>
                        <span>{t("projectData3")}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
