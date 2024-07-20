import React from 'react';
import img from './AboutAssets/about-banner.png';
import './About.css';
import Accordion from './accordion/Accordion';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();
    const data = [
        {
            id: 0,
            label: t("a1Title"),
            renderContent: () => (
                <p className='content-accordion'>
                    {t("a1Description")}
                </p>
            ),
        },
        {
            id: 1,
            label: t("a2Title"),
            renderContent: () => (
                <p className='content-accordion'>
                    {t("a2Description")}
                </p>
            ),
        },
        {
            id: 2,
            label: t("a3Title"),
            renderContent: () => (
                <div className='content-accordion'>
                    <div className='content-accordion-container'>
                        <h3>{t("a4Title")}</h3>
                        <p>
                            {t("a3Description")}
                        </p>
                    </div>
                    <div className='content-accordion-container'>
                        <h3>{t("a5Title")}</h3>
                        <p>
                        {t("a4Description")}
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
                    <h3 className="about-title">{t("aTitle")}</h3>
                    <h2 className="about-title2">{t("aSubTitle")}</h2>
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
