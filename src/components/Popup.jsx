import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Popup.css';
import { useTranslation } from 'react-i18next';

const Popup = ({ onClose, isPopupOpen, links }) => {
  const menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  const { t } = useTranslation();

  return (
    <div className="active">
      <div className={isPopupOpen ? 'popup-container active' : 'popup-container inactive'}>
        <div ref={menuRef} className="popup">
          {links &&
            links.map(({ name, href }) => (
              <Link className="mobile-links" key={name + href} to={href} onClick={onClose}>
                {name}
              </Link>
            ))}

          <a href="tel:+436765409213" className="contact mobile">
            {t('header.contactUs')}
          </a>

          <div className="close-icon" onClick={onClose}>
            <div className="close-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
