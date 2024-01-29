import React, { useState } from 'react';
import '../App.css';
import { useTranslation } from 'react-i18next';

const FormSection = () => {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // const [userInfo, setUserInfo] = useState({});

  const handleClick = () => {
    try {
      fetch('http://localhost:8080/message/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          phoneNumber: phoneNumber,
        }),
      });

      setName('');
      setPhoneNumber('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="form_doubt">
      <h3>{t('form.title')}</h3>
      <p>{t('form.subtitle')}</p>
      <p>{t('form.text')}</p>

      <div className="form-container">
        <form id="contactForm">
          <div className="form-group">
            <input
              onChange={(event) => setName(event.target.value)}
              value={name}
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="form-group">
            <input
              onChange={(event) => setPhoneNumber(event.target.value)}
              value={phoneNumber}
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your Phone Number"
              required
            />
          </div>

          <button onClick={handleClick} type="button">
            {t('form.button')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
