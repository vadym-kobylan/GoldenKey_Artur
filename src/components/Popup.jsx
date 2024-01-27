import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Popup.css';

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

          <div className="close-icon" onClick={onClose}>
            <div className="close-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
