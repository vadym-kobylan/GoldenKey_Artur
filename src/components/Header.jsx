import React, { useState, useEffect } from 'react';
import '../App.css';
import logo from '../assets/image/LOGO.png';
import { Link } from 'react-router-dom';
import Popup from './Popup';

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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

  const links = [
    {
      name: 'Unsere Dienstleistungen',
      href: '#unsere-dienstleistungen',
    },
    {
      name: 'Preis',
      href: '#preis',
    },
    {
      name: 'Warum wir',
      href: '#warum-wir',
    },
    {
      name: 'Bewertungen',
      href: '#bewertungen',
    },
    {
      name: 'Einsatzorte',
      href: '#einsatzorte',
    },
    {
      name: 'Impressum',
      href: '#impressum',
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
              Kontaktiere uns
            </a>
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
            <h1>Schlüsseldienst Wien</h1>
            <h1>& Aufsperrdienst</h1>
            <h4>
              Wir sind für sie erreichbar 24/7 <br /> Zugefallene einfache Tür öffnen ab 75€
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
