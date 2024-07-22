// Contact.js
import React, { forwardRef, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { useTranslation } from "react-i18next";

const Contact = forwardRef((props, ref) => {
    const {t} = useTranslation();
    const map = <FontAwesomeIcon icon={faMapMarker} />;
    const phone = <FontAwesomeIcon icon={faPhone} />;
    const letter = <FontAwesomeIcon icon={faEnvelope} />;
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_x4pp54d', 'template_s55zgdk', form.current, '6rh8UmCdYGIraOfyV')
          .then(
            () => {
              alert('Email Submited');
            },
            (error) => {
              console.log('FAILED...', error.text);
            }
          );
        e.target.reset();
    };

    return (
        <div ref={ref} className="contact-wrapper">
            <section className="contact" id="contact">
                <div className="container-contact">
                    <h2 className="contact-title">{t("contactTitle")}</h2>
                    <h2 className="contact-title2">{t("contactTitle2")}</h2>
                    <div className="content">
                        <div className="left-side">
                            <div className="address details">
                                <i>{map}</i>
                                <div className="topic">{t("address1")}</div>
                                <div className="text-one">{t("address2")}</div>
                                <div className="text-two">{t("address3")}</div>
                            </div>
                            <div className="phone details">
                                <i>{phone}</i>
                                <div className="topic">{t("phone1")}</div>
                                <div className="text-one">{t("phone2")}</div>
                            </div>
                            <div className="email details">
                                <i>{letter}</i>
                                <div className="topic">{t("email1")}</div>
                                <div className="text-one">{t("email2")}</div>
                            </div>
                        </div>

                        <div className="right-side">
                            <div className="topic-text">{t("topic1")}</div>
                            <p>{t("topic2")}</p>
                            <form ref={form} onSubmit={sendEmail} className="--form-control">
                                <div className="input-box">
                                    <input type="text" placeholder={t("placeh1")} name="user_name" required />
                                </div>
                                <div className="input-box">
                                    <input type="email" placeholder={t("placeh2")} name="user_email" required />
                                </div>
                                <div className="input-box">
                                    <input type="text" placeholder={t("placeh3")} name="subject" required />
                                </div>
                                <div className="input-box message-box">
                                    <textarea name="message" cols="30" rows="10"></textarea>
                                </div>

                                <div>
                                    <button type="submit" className="contact-btn">{t("cButton")}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
});

export default Contact;
