import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from "i18next";
function test() {

    // const i18n = useTranslation();
    const { t } = useTranslation();
    const handleChangeLang = (lang) => {
        i18n.changeLanguage(lang);
    }


    return (
        <div className="app">
            <div className="toolbar" role="banner">

                <span>{t('Travel App')}</span>
            </div>

            <div className="content" role="main">
                <div className="card highlight-card card-small">
                    <span>{t('Travel App')}</span>
                </div>

                <h2>{t("Travel App")}</h2>
                <p>{t('Around the world')}</p>
                    {t('Over 150,000+')}
                <div className="card-container">
                    <div onClick={() => handleChangeLang('en')} className="card card-small">
                        <span>en</span>
                    </div>

                    <div onClick={() => handleChangeLang('th')} className="card card-small">
                        <span>th</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default test;