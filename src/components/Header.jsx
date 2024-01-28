import React, { useState, useEffect } from 'react';
import '../App.css';
import logo from '../assets/image/LOGO.png';
import { Link } from 'react-router-dom';
import Popup from './Popup';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [activeLanguageTab, setActiveLanguageTab] = useState(i18next.language);

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isPopupOpen]);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const links = t('links', { returnObjects: true });

  console.log(t('links', { returnObjects: true }));

  const setSelectedLanguages = (event) => {
    const option = selectLanguages.find((option) => option.value === event.target.value);
    setActiveLanguageTab(option.value);
    i18next.changeLanguage(option.value);
  };

  const selectLanguages = [
    {
      label: 'Deutsch',
      value: 'de',
    },
    {
      label: 'English',
      value: 'en',
    },
    {
      label: 'Українська',
      value: 'uk',
    },
    {
      label: 'русский',
      value: 'ru',
    },
  ];

  return (
    <>
      <Popup onClose={closePopup} isPopupOpen={isPopupOpen} links={links} />
      <nav>
        <div className="nav">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <ul className="navigation">
            {links.map(({ name, href }) => (
              <li key={name + href}>
                <Link to={href}>{name}</Link>
              </li>
            ))}
          </ul>
          {/* <img src="image/phone_missed_side_icon.png" alt="">  */}
          <div className="right-nav">
            <a href="tel:+43 676 5409213" className="contact">
              {t('header.contactUs')}
            </a>
            <select
              className="select-languages"
              onChange={setSelectedLanguages}
              defaultValue={i18next.language}>
              {selectLanguages.map(({ label, value }) => (
                <option
                  disabled={activeLanguageTab === value}
                  key={value}
                  value={value}
                  className="language-button">
                  {label}
                </option>
              ))}
            </select>
            <div
              className={isPopupOpen ? 'burger-button active' : 'burger-button'}
              onClick={openPopup}>
              <div className="burger-line"></div>
            </div>
          </div>
        </div>
      </nav>
      <header>
        <div className="header">
          <div className="header_text">
            <h1>{t("header.title1")}</h1>
            <h1>{t("header.title2")}</h1>
            <h4>
              {t("header.subTitle1")} <strong className="time-color">24/7</strong> <br />{' '}
              {t("header.subTitle2", {price:75})}
            </h4>
            <a href="tel:+43 676 5409213">+43 676 5409213</a>
          </div>
          {/* <img src={keyIMG} alt="" /> */}
        </div>
      </header>
    </>
  );
};

export default Header;
