import React from 'react';
import img from '../About/AboutAssets/feature-banner.jpg';
import './Solution.css';
import { useTranslation } from 'react-i18next';

const Solution = () => {
    const { t } = useTranslation();

    return (
        <div className='solution-wrapper'>
            <div className='solution-container'>
                <div className='solution-rside'>
                    <img src={img} />
                </div>
                <div className='solution-lside'>
                    <h3 className="solution-title">{t("soTitle")}</h3>
                    <h2 className="solution-title2">{t("soSubTitle")}</h2>
                    <div className='solutions-content'>
                        <div className='solutions-content-top'>
                            <p>{t("soText")}</p>
                        </div>
                        <div className='solutions-content-bottom'>
                            <div className='solutions-content-lbottom'>
                                <div className='container-content-bottom-solutions'>
                                    <span>{t("so1Title")}</span>
                                    <p>
                                    {t("so1Description")}
                                    </p>
                                </div>
                                <div className='container-content-bottom-solutions'>
                                    <span>{t("so2Title")}</span>
                                    <p>
                                    {t("so2Description")}
                                    </p>
                                </div>
                            </div>
                            <div className='solutions-content-rbottom'>
                                <div className='container-content-bottom-solutions'>
                                    <span>{t("so3Title")}</span>
                                    <p>
                                    {t("so3Description")}
                                    </p>
                                </div>
                                <div className='container-content-bottom-solutions'>
                                    <span>{t("so4Title")}</span>
                                    <p>
                                    {t("so4Description")}
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