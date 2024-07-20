import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode,faPhoneFlip,faCode } from '@fortawesome/free-solid-svg-icons';
import './Services.css';
import { useTranslation } from 'react-i18next';

const Services = () => {

    const laptop = <FontAwesomeIcon icon={faLaptopCode} />;
    const code = <FontAwesomeIcon icon={faCode} />; 
    const phone = <FontAwesomeIcon icon={faPhoneFlip} />;
    const { t } = useTranslation();

    const data = [
        {
            img: laptop,
            title: t("s1Title"),
            button: '',
            description: t("s1Description"),
        },
        {
            img: code,
            title: t("s2Title"),
            button: '',
            description: t("s2Description"),
        },
        {
            img: phone,
            title: t("s3Title"),
            button: '',
            description: t("s3Description"),
        },
    ];

    return (
        <div className="service-wrapper">
            <div className="service-header">
                <h3 className="services-title">{t("sTitle")}</h3>
                <h2 className="services-title2">{t("sSubTitle")}</h2>
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
